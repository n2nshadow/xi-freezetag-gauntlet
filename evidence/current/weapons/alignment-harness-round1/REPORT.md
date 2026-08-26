# Weapon Alignment Evaluator Lane Report

Date: 2026-08-26

## Verdict

The sealed weapon-alignment evaluator lane is complete and passes its harness,
raster-witness, and Blender-backed stock-control selftests.

The newly evaluated current-production baseline remains `HOLD` by design. It is
diagnostic evidence, not a promotional claim: all 37 required states were
evaluated, zero production states were promoted, and the only global result
finding is `BASELINE_NON_PROMOTIONAL`.

## Scope

All work is confined to `.audit/weapon_alignment_harness_round1`. No production,
build, package, Steam, or game files were changed.

The evaluator consumes exactly 37 required states: 11 bare states and 26
attachment-bearing states. The regenerated probe contains 222 phase records,
with 219 applicable rendered phases and three explicitly nonapplicable phases.
Every applicable render is fixed at 1920x1080 with center `[960, 540]`.

## Enforced Contract

- Exactly all 37 sealed state identities are required; 36-of-37 and substituted
  identities fail.
- Terminal `ads_up` must land within 2 pixels of `[960, 540]` in the final
  composed raster, not merely in model space or a helper projection.
- Every source-authored recoil frame is required and compared through the full
  `ads_fire` trajectory. Candidate-derived, missing, modified, or mismatched
  source authority fails.
- Idle, `ads_up`, `ads_fire`, `fire`, `reload`, and `reload_empty` phase coverage,
  applicability, XAnim identity, and animation sweeps are sealed and checked.
- Hip placement, rail/muzzle/grip contact, socket identity, hide/show ownership,
  scale/orientation, duplicate geometry, geometry presence, and attachment
  intersection gates are independently enforced.
- Runtime composition, evaluated candidate, posed hands, render, camera, raster,
  binding, and source hashes are cross-linked. Blank or stale images cannot be
  accepted by resealing one layer.
- Runtime cameras must reproduce the sealed 1920x1080 camera contract, including
  eye, orientation basis, clipping, FOV, and projection matrix. A coherently
  resealed image from a different camera fails.
- Reference replay is exact after narrowly normalizing sub-0.00005-degree
  floating-point angular noise. Raw measurements are retained unchanged.

## Adversarial Coverage

All 49 adversarial fixtures are rejected with their expected finding codes.
This includes the requested high-risk cases:

| Case | Fixture | Expected rejection |
| --- | --- | --- |
| Model/helper projection green, final raster displaced | 45 | `ADS_UP_RASTER_AXIS_ERROR` |
| Direct pose green, engine-composed runtime displaced | 46 | `COMPOSED_RUNTIME_RASTER_DISPLACED` |
| Blank composed raster | 47 | `BLANK_OR_UNSEALED_RENDER` |
| Stale final raster | 48 | `FINAL_RASTER_RENDER_LINK_MISMATCH` |
| Different camera with internally resealed hashes | 49 | `RASTER_CAMERA_MISMATCH` |
| Body-owned duplicate native sight | 09 | `DUPLICATE_BODY_OWNED_NATIVE_SIGHT` |
| Per-state visible duplicate geometry | 28 | `PER_STATE_VISIBLE_DUPLICATE_GEOMETRY` |

The Blender raster selftest also proves that a direct-pose diagnostic at center
cannot mask a 64-pixel displacement after engine composition. Its independent
physical translation negative measures 32 pixels and is rejected.

## Stock Controls

The stock controls run through the same Blender extraction, composition, camera,
measurement, sealing, and replay paths as evaluated evidence.

| Positive control | Result | Key measurement |
| --- | --- | --- |
| CoD4 M4 bare | PASS | terminal axis error 0 px |
| CoD4 M4 reflex | PASS | axis 0 px, contact gap 0, normal error 0 deg |
| CoD4 M4 ACOG | PASS | axis 0 px, source axis 0 deg, contact gap 0 |
| CoD4 M4 suppressor | PASS | contact gap 0, axis error 0.000000854 deg |
| CoD4 M249 grip | PASS | contact gap 0, axis error 0 deg |

All five fresh physical negative copies are rejected: displaced M4 bare and
reflex controls, rotated M4 ACOG, displaced/rotated M4 suppressor, and
displaced/rotated M249 grip. Duplicate physical geometry is independently
rejected by the body-owned and visible-duplicate scans exercised by fixtures 09
and 28. Stock-control replay is exact, and its fresh and expected category hashes
both equal
`0d4ee93b4a59e96e2f75c256d76278da59ed375dd21f726418026b7dff546f99`.

## Verification

| Verification | Result |
| --- | --- |
| Python compilation | PASS |
| Unit suite | PASS: 9 tests, 49/49 adversarial fixtures |
| Raster witness selftest under Blender 3.6.0 | PASS |
| Blender-backed real control selftest | PASS: 5/5 positives, 5/5 negatives |
| Stock-control reference replay | PASS: exact match |
| Regenerated state coverage | PASS: 37/37 states, 222 phase records |
| Recursive SHA-256 manifest verification | PASS |

Blender emitted expected missing-texture warnings for source assets, but the
Workbench geometry/pixel witnesses rendered successfully and Blender exited
cleanly.

## Final Artifacts

- `RESULT.json`: current-production diagnostic decision (`HOLD`).
- `baseline/current-production-probed/RESULT.json`: identical sealed decision.
- `baseline/current-production-probed/evidence.json`: newest regenerated real
  runtime evidence for all 37 states.
- `baseline/current-production-probed/real-controls.json`: regenerated positive,
  negative, and exact replay evidence.
- `baseline/raster-gate-selftest.json`: regenerated Blender raster witness.
- `MATRIX.md`: regenerated per-state decision matrix.
- `SHA256SUMS.txt`: recursive integrity manifest for durable lane artifacts.
