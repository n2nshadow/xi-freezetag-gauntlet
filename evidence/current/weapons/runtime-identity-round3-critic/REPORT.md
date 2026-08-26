# Weapon Runtime Identity Round 3 Independent Reproducibility QA

## Verdict

**Requested runtime-identity QA: PASS**

**Visual alignment: HOLD (inherited and not relabeled)**

**Promotion readiness: NO**

The exact candidate is the 11,016,268-byte binary patch at SHA-256
`9230c0e42120c2161ede0bd35792fd7622ca875fa71e62517a8c04e6fca1dc9f`,
based on commit `30424acca3264c7b9c47a536436518231a9749db`. No production,
builder, build, package, install, launch, or promotion action was performed.

## Independent Reproduction

A fresh shared clone was checked out detached at the declared commit under
`D:\CodexScratch\weapon-runtime-critic`. Before patching it had an empty status,
contained no `xi_ftag/.audit`, and used the ordinary Windows `core.autocrlf=true`
checkout behavior.

`git apply --check --binary` passed. Applying the patch to the scratch index and
refreshing all candidate paths through the patch-installed `-text` attributes
reconstructed all 236 declared files exactly: zero missing files, zero length
mismatches, and zero SHA-256 mismatches. The staged path set exactly matched the
signed request. All 228 verifier sources were then present with exact bytes; 37
were tracked but stale at `HEAD`, and 191 were absent at `HEAD` and supplied by
the patch.

The Round 3 builder lane and its sealed inputs were copied to a separate disposable
committed-HEAD checkout and `run_checks.ps1` was rerun there. It exited 0 and
regenerated the exact patch hash. Ten deterministic outputs, including the patch,
manifest, unsigned request, verifier, report, and result, matched the original
builder lane byte-for-byte. Signature-specific evidence naturally used a new
ephemeral key.

## State And Animation Recount

- 11 imported families and 37 unique family/attachment states were independently
  reconciled across the state contract, Round 3 manifest, runtime table, weapon
  matrix paths, selection evidence, and reconstructed files.
- All 37 saved selections and runtime targets matched. The canonical mapping digest
  is `9c00f97c25376afe5cbbf1d4631582371b2390db1b3b9bbef751a24fefeb6e0f`.
- Readiness is exactly 20 READY and 17 HOLD states. Each READY/HOLD value matches
  the packaged per-state policy, not merely the totals.
- All 1,110 ordered XAnim field/name slots were compared against the 37 weapon
  files. There are 879 non-empty local slots and 231 intentionally empty slots.
- All 879 referenced local XAnim hashes matched; they resolve to 180 unique XAnims.
  The 37 Round 3 weapon-file hashes and 11 geometry-input hashes also matched.
- All three F10-A0 copies are exactly
  `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`;
  each hides only `tag_silencer`, leaving `tag_scope_colt` visible.

## Runtime Routing And Fallbacks

Primary, sidearm, spawn stabilization, active-loadout checks, authoritative spawn,
post-frame spawn, class deployment, finish hold, dropped-weapon probe, and helper
deployment paths were inspected from the reconstructed GSC. Family/attachment
identity flows through `getRuntimeWeaponFile`; deployment-capable paths reject an
empty result before give/switch/spawn calls. Protected resolver/deployment functions
do not rewrite saved primary or sidearm attachment selections.

Every HOLD state retains its selected attachment, resolves deployment to that
family's A0 weapon, and is covered by the explicit
`XI_WEAPON;RUNTIME_IDENTITY_HOLD` event with `SELECTION_RETAINED;1`. Unknown
families resolve to an empty weapon and terminate before engine deployment.

The promoted gate rejected all 13 semantic mutations, including the F01-A1/F02-A0
same-count readiness swap, resolver and post-resolution selection rewrites, direct
held deployment, unknown-family deployment, removed empty guards, XAnim drift,
authority-row drift, and F10/alignment drift. Static inspection also confirmed the
packaged GSC binds table column 4 to the exact state policy.

## External Approval Boundary

All 11 payloads named by the unsigned request matched their declared lengths and
hashes. An external, disjoint authority/trust pair was materialized outside the
repository and signed with an in-memory Ed25519 test key. The valid gate passed both
with explicit patch verification and in the exact no-`--candidate-patch` form used
by `build.ps1`, returning the expected 37/20/17/1,110/879/180/228 counts.

Across 33 independent gate invocations, the three expected-valid cases passed and
all 30 expected-failure cases failed closed. Rejections covered missing authority,
trust, fingerprint, receipt, payload, and local candidate input; stale receipt;
mismatched fingerprint, patch, local file, and payload; tampered receipt; non-disjoint
roots; an untrusted self-issued receipt; repository-contained authority/trust roots;
and every semantic fixture.

Exact-looking repository `.audit` copies were not auto-discovered and were rejected
when supplied as roots. Corrupting local audit data did not affect a valid external
bundle, while corrupting the external payload still failed even when an exact local
copy remained. Alternate local audit data therefore cannot substitute for the
declared external bundle.

## Biggest Remaining Gap

The declared external payload set still contains a superseded Round 1 F10-A0 row in
`runtime/evidence/weapon_state_matrix.json`: it records weapon hash
`726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0` and says
`tag_scope_colt` is hidden. The signed Round 3 candidate file manifest, candidate
manifest, and explicit gate check instead bind the corrected `7ef916...e76c` bytes,
so this does not reopen a runtime bypass. It is nevertheless contradictory external
evidence and should be regenerated before a real authority signs a production bundle.

Separately, no real independent approval signature was supplied and the inherited
visual verdict remains HOLD. The ephemeral signature here proves gate mechanics only.

## Cleanup And Scope

The original builder lane remained exact against its `SHA256SUMS.txt`. Durable writes
were restricted to this critic directory. The D-drive clone, nested reproduction
checkout, external test roots, receipts, overlays, and local-audit fixtures were
removed after the final evidence was captured. No private signing key was written to
disk.
