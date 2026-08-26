# XI FreezeTag Weapon Runtime Identity Builder Round 2

## Verdict

**HOLD.** The isolated Round 2 candidate closes the three Round 1 critic
implementation blockers and the clean-clone authority durability blocker; all
candidate checks pass. Production is not fixed
or modified. The known 17 attachment states remain explicit HOLD until fresh
per-state visual/XAnim acceptance exists; no option is removed or silently disabled.

## Round 1 Blockers

- `F10-A0`: all three staged Dragunov copies now have only `tag_silencer` in
  `hideTags` and share SHA-256 `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`.
  All 37 visibleTag/hideTags comparisons are case-insensitively disjoint.
- Readiness authority: staged GSC contains no mirrored readiness booleans. The
  sole runtime readiness column is in `mp/xi_weaponruntimeidentity.csv`, and the
  staged build invokes the verifier before mutable weapon builders. The verifier
  requires an explicit external authority root and derives expected rows from its
  sealed critic receipt, exact contract, and HOLD set. It never discovers `.audit`.
- XAnim seal: all 30 `*Anim` fields for all 37 states are sealed: 1110 slots,
  879 present local hash checks, and
  180 unique runtime XAnims. The critic fireAnim
  byte-flip fixture is rejected by the staged build gate.

## External Authority Durability

The candidate patch carries verifier code and the runtime table, but no authority
payload. The build requires `-WeaponRuntimeIdentityAuthorityRoot` or
`XI_WEAPON_RUNTIME_IDENTITY_AUTHORITY_ROOT`; there is no default. The supplied
root must contain `runtime/SHA256SUMS.txt` with SHA-256
`2062d33b57459f459162dd863f85e1f2116795ee24b78bdad2582b1bc2623441`. That critic-owned receipt seals the
Round 1 runtime contract, whose sealed alignment result chains through alignment
`HASHES.json` to the matrix, source inventory, and geometry payload.

A disposable exact-input Git seed was cloned at commit `7d21dee3992ec1c0b0529fd4ae7942b309e62760`.
The clone was clean and contained no `xi_ftag/.audit` tree. The patch applied only
inside that clone; the externally supplied bundle was a sibling, outside the clone.
The valid sealed receipt passed. An absent root, missing receipt, tampered sealed
payload, tampered receipt, stale receipt, and dual readiness swap all failed closed.
The fixture was removed after evidence capture.

## Runtime Contract

| State | Selected weaponfile | Authority | Runtime (master on) | Runtime (master off) |
| --- | --- | --- | --- | --- |
| F01-A0 | g36c_mp | READY | g36c_mp | g36c_mp |
| F01-A1 | g36c_reflex_mp | HOLD | g36c_mp | g36c_mp |
| F01-A2 | g36c_acog_mp | HOLD | g36c_mp | g36c_mp |
| F01-A3 | g36c_silencer_mp | HOLD | g36c_mp | g36c_mp |
| F02-A0 | g3_mp | READY | g3_mp | g3_mp |
| F02-A1 | g3_reflex_mp | HOLD | g3_mp | g3_mp |
| F02-A2 | g3_acog_mp | HOLD | g3_mp | g3_mp |
| F02-A3 | g3_silencer_mp | HOLD | g3_mp | g3_mp |
| F03-A0 | m14_mp | READY | m14_mp | m14_mp |
| F03-A1 | m14_reflex_mp | HOLD | m14_mp | m14_mp |
| F03-A2 | m14_acog_mp | HOLD | m14_mp | m14_mp |
| F03-A3 | m14_silencer_mp | HOLD | m14_mp | m14_mp |
| F05-A0 | m60e4_mp | READY | m60e4_mp | m60e4_mp |
| F05-A1 | m60e4_reflex_mp | HOLD | m60e4_mp | m60e4_mp |
| F05-A2 | m60e4_acog_mp | HOLD | m60e4_mp | m60e4_mp |
| F05-A3 | m60e4_grip_mp | HOLD | m60e4_mp | m60e4_mp |
| F07-A0 | winchester1200_mp | READY | winchester1200_mp | winchester1200_mp |
| F07-A1 | winchester1200_reflex_mp | HOLD | winchester1200_mp | winchester1200_mp |
| F07-A3 | winchester1200_grip_mp | HOLD | winchester1200_mp | winchester1200_mp |
| F08-A0 | colt45_mp | READY | colt45_mp | colt45_mp |
| F08-A3 | colt45_silencer_mp | HOLD | colt45_mp | colt45_mp |
| F09-A0 | remington700_mp | READY | remington700_mp | remington700_mp |
| F09-A3 | remington700_silencer_mp | HOLD | remington700_mp | remington700_mp |
| F10-A0 | dragunov_mp | READY | dragunov_mp | dragunov_mp |
| F10-A3 | dragunov_silencer_mp | HOLD | dragunov_mp | dragunov_mp |
| F13-A0 | skorpion_mp | READY | skorpion_mp | skorpion_mp |
| F13-A1 | skorpion_reflex_mp | READY | skorpion_reflex_mp | skorpion_mp |
| F13-A2 | skorpion_acog_mp | READY | skorpion_acog_mp | skorpion_mp |
| F13-A3 | skorpion_silencer_mp | READY | skorpion_silencer_mp | skorpion_mp |
| F14-A0 | uzi_mp | READY | uzi_mp | uzi_mp |
| F14-A1 | uzi_reflex_mp | READY | uzi_reflex_mp | uzi_mp |
| F14-A2 | uzi_acog_mp | READY | uzi_acog_mp | uzi_mp |
| F14-A3 | uzi_silencer_mp | READY | uzi_silencer_mp | uzi_mp |
| F15-A0 | mp44_mp | READY | mp44_mp | mp44_mp |
| F15-A1 | g3_gl_mp | READY | g3_gl_mp | mp44_mp |
| F15-A2 | m14_gl_mp | READY | m14_gl_mp | mp44_mp |
| F15-A3 | g36c_gl_mp | READY | g36c_gl_mp | mp44_mp |

Exactly 20 rows are READY and the critic-known 17 rows are HOLD. Families
13, 14, and 15 remain READY for A0-A3. Every one of the 37 choices remains
selectable, and runtime resolution leaves the saved `(family, attachment)`
unchanged. Held deployment emits `XI_WEAPON;RUNTIME_IDENTITY_HOLD`.

The unknown-family fixture retains `runtimeAttachment=1` as inert metadata
and resolves `runtimeWeaponFile=""`; caller guards reject the empty runtime
before `giveWeapon`, `setSpawnWeapon`, or `switchToWeapon`.

## Alignment Identity

All 37 state identities and 11
family records include the exact weapon/model fields used by the alignment bar:
gun/world/hand model, ADS FOV, hide/visible tags, native sight kind, role, model
path/hash, coordinate contract, `j_gun`, `tag_flash`, active tag frames and
visibility groups, native sight measurements, and attachment socket/contact
feature records. These are identity seals, not visual alignment acceptance.

## Adversarial Checks

- `dual-readiness-swap`: PASS, rejected with `runtime table differs from external exact readiness contract`.
- `fireanim-byte-flip`: PASS, rejected with `XAnim hash mismatch F01-A0.fireAnim`.
- `f10-visible-overlap`: PASS, rejected with `visibleTag/hideTags overlap F10-A0`.
- `authority-marker-drift`: PASS, rejected with `runtime table differs from external exact readiness contract`.
- `xanim-slot-name-drift`: PASS, rejected with `XAnim name mismatch F01-A0.fireAnim`.
- `unknown-family-direct-deploy`: PASS, rejected with `direct runtime resolver deployment call found`.
- `saved-selection-rewrite`: PASS, rejected with `runtime resolver rewrites retained selection`.
- `hold-audit-removed`: PASS, rejected with `explicit HOLD audit event missing`.
- `alignment-identity-drift`: PASS, rejected with `alignment identity mismatch F01-A0.gunModel`.
- `missing-authority-root`: PASS, rejected with `external authority root not supplied`.
- `missing-authority-receipt`: PASS, rejected with `external authority receipt missing`.
- `tampered-authority-payload`: PASS, rejected with `authority payload hash mismatch stateContract`.
- `tampered-authority-receipt`: PASS, rejected with `external authority receipt SHA mismatch`.
- `stale-authority-receipt`: PASS, rejected with `external authority receipt SHA mismatch`.

## Patch And Boundary

The patch has 8 targets, SHA-256 `39c778afc42f31d06bd131a67c6b89e3871687296dafade77f11c42568583722`,
and passes `git apply --check`. It was not applied to production. The staged
verifier ran against the candidate overlay and the disposable clean clone;
only that clone received the patch. No mod build, package, install, game
launch, Steam operation, or production-repository git mutation was performed.

Before/after seals cover 248 production and
external-authority inputs and are identical.

## Lane Files

- `COMMANDS.md`
- `REPORT.md`
- `RESULT.json`
- `SCOPE.md`
- `SHA256SUMS.txt`
- `build_and_check.py`
- `candidate/baseline/weapons/xi/dragunov_mp`
- `candidate/baseline/xi_ftag/build.ps1`
- `candidate/baseline/xi_ftag/source_weapons/modern/10_kvinhibitor/dragunov_mp`
- `candidate/baseline/xi_ftag/zone_raw/xi_ftag/weapons/mp/dragunov_mp`
- `candidate/baseline/xi_ftag/zone_raw/xi_ftag/xi_ftag/_weapons.gsc`
- `candidate/baseline/xi_ftag/zone_source/xi_ftag.zone`
- `candidate/staged/weapons/xi/dragunov_mp`
- `candidate/staged/xi_ftag/build.ps1`
- `candidate/staged/xi_ftag/source_weapons/modern/10_kvinhibitor/dragunov_mp`
- `candidate/staged/xi_ftag/tools/verify-weapon-runtime-identity-authority.py`
- `candidate/staged/xi_ftag/zone_raw/xi_ftag/mp/xi_weaponruntimeidentity.csv`
- `candidate/staged/xi_ftag/zone_raw/xi_ftag/weapons/mp/dragunov_mp`
- `candidate/staged/xi_ftag/zone_raw/xi_ftag/xi_ftag/_weapons.gsc`
- `candidate/staged/xi_ftag/zone_source/xi_ftag.zone`
- `candidate/weapon_runtime_identity_manifest.json`
- `candidate/weapon_runtime_identity_round2.patch`
- `evidence/alignment-identity-results.json`
- `evidence/authority-binding-results.json`
- `evidence/before-after-source-seals.json`
- `evidence/build-gate-results.json`
- `evidence/clean-clone-authority-results.json`
- `evidence/mapping-results.json`
- `evidence/negative-results.json`
- `evidence/patch-results.json`
- `evidence/visibility-results.json`
- `evidence/xanim-30-field-results.json`
- `fixtures/alignment-identity-drift.json`
- `fixtures/authority-marker-drift.json`
- `fixtures/dual-readiness-swap.json`
- `fixtures/f10-visible-overlap.json`
- `fixtures/fireanim-byte-flip.json`
- `fixtures/hold-audit-removed.json`
- `fixtures/missing-authority-receipt.json`
- `fixtures/missing-authority-root.json`
- `fixtures/saved-selection-rewrite.json`
- `fixtures/stale-authority-receipt.json`
- `fixtures/tampered-authority-payload.json`
- `fixtures/tampered-authority-receipt.json`
- `fixtures/unknown-family-direct-deploy.json`
- `fixtures/xanim-slot-name-drift.json`
- `run_checks.ps1`
- `templates/verify-weapon-runtime-identity-authority.py`

`SHA256SUMS.txt` seals every other lane file and intentionally excludes itself.
