# Weapon Runtime Identity Round 2 Independent Critic Report

## Verdict

**Runtime identity: FAIL**

**Visual alignment: HOLD (separate, not promoted to PASS)**

The exact candidate patch was audited at SHA-256
`39c778afc42f31d06bd131a67c6b89e3871687296dafade77f11c42568583722`.
The hash matches the required value, but not every runtime-identity blocker is
closed. The candidate must not be promoted as runtime-identity PASS.

## Blocking Findings

### B1. The patch does not apply to a real clean clone, and the gate inputs are not clone-portable

An independently created clone at committed `HEAD`
`30424acca3264c7b9c47a536436518231a9749db` was clean and contained no `.audit`
directory. `git apply --check --verbose` returned exit 1. It rejected:

- `weapons/xi/dragunov_mp`
- `xi_ftag/build.ps1`
- `xi_ftag/source_weapons/modern/10_kvinhibitor/dragunov_mp`
- `xi_ftag/zone_raw/xi_ftag/weapons/mp/dragunov_mp`
- `xi_ftag/zone_raw/xi_ftag/xi_ftag/_weapons.gsc`

The disposable clone was removed after capture per the disk guard. The compact
record, including clone `HEAD`, clean status, absence of `.audit`, preimage
hashes, failed paths, and apply-output hash, remains in
`evidence/clean-clone-check.json`.

There is a second independent clean-clone failure. The promoted verifier needs
228 local source paths to validate the sealed state/XAnim/geometry data. Of
those, 191 are absent from committed `HEAD` even after accounting for files
created by the patch: 180 XAnim files below `.asset_staging` and 11 model GLBs
below `zone_raw/.../model_export`. The gate runs before any builders could
produce them. Therefore a valid receipt cannot make this candidate pass in a
real committed clone.

The eight patch outputs were separately reconstructed from patch preimages and
all eight match the builder staging byte-for-byte. That reconstruction was used
only for semantic review and is not represented as clean-clone evidence.

### B2. The claimed external trust root is neither enforced external nor candidate-bound

The exact promoted gate accepts the valid authority bundle when its root is
inside this repository's `.audit` tree, while reporting
`repositoryAuditDiscoveryUsed: false`. `load_authority()` resolves the supplied
path but never rejects a root under `repo_root` or `project_root`; the
`--project-root` argument is unused.

Authenticity is rooted in a receipt digest hardcoded by the same candidate:
`2062d33b57459f459162dd863f85e1f2116795ee24b78bdad2582b1bc2623441`.
The accepted receipt seals the Round 1 HOLD result and authority payloads, but
it seals none of the Round 2 patch, promoted verifier, build script, runtime
table, or promoted GSC. Its sealed result has `candidatePatchSha256: null`.
Candidate binding is consequently asserted by candidate-controlled code rather
than an external attestation of this candidate.

The ordinary fail-closed cases do work: absent root, missing root, missing
receipt, tampered receipt, older/stale receipt, and tampered payload all return
failure. That does not repair the externality and self-certification problem.

### B3. Promoted verifier code hardcodes a repository `.audit` path pattern

The build script does not automatically search for an authority bundle.
However, the strict no-hardcode condition still fails: promoted verifier line
321 contains `xi_ftag\\.audit\\weapon_runtime_identity` as an executable source
scan pattern, followed by an `.audit` error literal. The gate also accepts
authority-controlled paths without enforcing that they stay outside repository
`.audit`.

### B4. A Dvar-controlled runtime path bypasses the identity table

The ordinary primary and sidearm paths are sound: they call
`getRuntimeWeaponFile`, guard the empty result before engine deployment, retain
the saved attachment, map all 17 HOLD states to A0, and emit
`XI_WEAPON;RUNTIME_IDENTITY_HOLD` with `SELECTION_RETAINED;1`.

But `integrationProbe()` passes Dvar-controlled family and attachment values to
`holdWeaponFinish()`. That function calls `getWeaponFile()` directly, has no
empty-weapon guard, then calls `giveWeapon()` and `switchToWeapon()`. Thus:

- HOLD state F01-A1 can be deployed directly as `g36c_reflex_mp`, bypassing A0.
- An unknown family resolves to `""` and still reaches `giveWeapon("")` and
  `switchToWeapon("")`.

The exact candidate gate passes with this path present. Integration-only gating
does not satisfy an unqualified runtime fail-closed requirement.

### B5. Count-preserving readiness swaps remain runtime-valid

The pre-build Python gate correctly rejects a CSV swap of F01-A1 from HOLD to
READY and F02-A0 from READY to HOLD. The packaged GSC checks do not.
`isImportedWeaponRuntimeIdentityRowValid()` does not bind readiness column 4 to
the state, and `verifyImportedWeaponRuntimeIdentityAuthority()` checks only 37
states, 20 READY, and 17 HOLD. A two-row swap preserves every checked runtime
predicate, makes F01-A1 deploy attachment 1, and is accepted by the runtime
model.

### B6. Selection rewrite protection is scoped only to the resolver

An assignment inserted inside `getRuntimeAttachment()` is rejected. An
equivalent assignment inserted at the start of `applyPrimaryLoadout()` passes
the exact promoted verifier with all 1,110 slot checks and no errors. The gate
only scans the resolver body for writes to saved attachment fields, so a
post-resolver rewrite is not fail-closed.

## Requested Criteria

| # | Result | Independent result |
|---|---|---|
| 1 | **FAIL** | Exact hash matches. Real clean-clone apply fails; 191 required verifier inputs are absent from `HEAD`. Valid current-snapshot bundle passes; absent/missing/tampered/stale inputs fail. Trust root is not genuinely external/candidate-bound. |
| 2 | **FAIL** | Build performs no automatic `.audit` discovery, but promoted verifier hardcodes a repository `.audit` pattern and accepts an authority root inside repository `.audit`. |
| 3 | **PASS** | 37 unique state IDs and 37 unique family/attachment pairs independently recounted. Exact 30-field vocabulary/order per state, 1,110 slots, 879 present local hashes, 180 unique XAnims, zero name/hash mismatches. |
| 4 | **PASS** | F10-A0 visible tag is `tag_scope_colt`; geometry contains the frame; none of three copies hides it; all hide only `tag_silencer`; all three are exact SHA-256 `7ef916a9...e76c`. |
| 5 | **FAIL** | Ordinary resolver retains all 17 selections, maps them to A0, and audits explicitly, but `holdWeaponFinish()` can directly deploy a HOLD attachment. |
| 6 | **FAIL** | Core class callback, spawn, post-frame spawn, and restore routes use the table and restore functions do not deploy directly. Dvar-controlled finish deployment still bypasses the table for READY or HOLD states. |
| 7 | **FAIL** | Normal primary/sidearm paths guard unknown family, but unknown family reaches engine give/switch calls through `holdWeaponFinish()`. |
| 8 | **FAIL** | Build gate rejects a dual readiness swap, runtime accepts the count-preserving swap. Resolver-local rewrite is rejected, post-resolver selection rewrite passes. |

## Positive Results

- Candidate patch hash is exact.
- Reconstructed candidate outputs match all eight staged outputs byte-for-byte.
- Runtime receipt hash and all five required runtime payload hashes are exact.
- Alignment RESULT/HASHES/matrix/source-inventory/geometry chain is exact.
- Missing, tampered, and stale authority cases fail closed.
- All 37 states and all 1,110 XAnim slots are exact on the current source snapshot.
- F10-A0 correction is exact in all three authoritative copies.
- Normal class/spawn/restore loadout routes are table-mediated.

These positive results do not override the blocking findings.

## Visual Status

The separately sealed alignment preflight verdict remains **HOLD**. It reports
candidate alignment/centering failures and 17 attachment states still deploying
A0. This report does not relabel that visual verdict as PASS.

## Production Integrity And Cleanup

No production or builder file was modified. Before/after repository `HEAD`,
status hash, tracked diff hash, staged diff hash, and untracked path-set hash are
identical. All writes were confined to
`.audit/weapon_runtime_identity_critic_round2`.

The disk-heavy `clean-repo` was verified as a child of the critic lane and
removed. Temporary authority and mutation fixtures were also removed. The
retained critic lane is compact and contains only scripts, reconstructed target
files, final artifacts, and evidence.

## Evidence Index

- `evidence/clean-clone-check.json`
- `evidence/reconstruction-and-scope.json`
- `evidence/authority-and-negative-tests.json`
- `evidence/state-xanim-recount.json`
- `evidence/f10-authoritative-copies.json`
- `evidence/runtime-path-adversarial.json`
- `evidence/visual-alignment-status.json`
- `evidence/production-integrity.json`
- `evidence/critic-summary.json`

Independent harnesses: `critic_audit.py` and `capture-clean-clone.ps1`.
