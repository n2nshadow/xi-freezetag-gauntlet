# XI FreezeTag Lethal-Sentry OAT Critic Round 7

## Verdict

**HOLD** for promotion readiness.

The exact candidate passes the independent OAT, compiled-model, material/image, and promotion-minimal dependency sub-gates. The overall gate is held because the exact five-write promotion recipe is not crash-consistent as one transaction.

**Single biggest remaining gap:** promotion-map.json is not crash-consistent as a five-write transaction: a crash after operations 1-4 leaves a mixed production state, and the recipe provides no durable journal, commit marker, or automatic recovery entrypoint.

## Blocking Finding

### PROMOTION-ATOMICITY-01: no crash-consistent transaction boundary

The map makes each file operation individually atomic and its hash-gated reverse rollback is coherent. The independent sandbox reached every exact postcondition, restored every exact original precondition, and restored the original state after an injected interruption following each operation.

That does not make the five-file set atomic. Simulated crashes after operations 1, 2, 3, or 4 left a mixed old/new state until rollback was explicitly invoked. The map has no durable journal, commit marker, startup recovery path, or executor that guarantees recovery. A replace race also demonstrated that checking the old target hash and then calling an atomic replace is not compare-and-swap: a concurrent edit in that interval can be overwritten. Promotion must remain blocked until an independently audited executor supplies recovery and exclusive ownership or equivalent protection.

## Independent OAT Result

- Candidate SHA-256: `9EDE3C17FF16D750700781F8B62DC2EE06F08A2E36DF203A46CAEE4C7B914D51` (exact).
- Tools: audit-local copies of OpenAssetTools Linker, Unlinker, and ImageConverter v0.32.0; audit-local copies of `common.ff` and `common_mp.ff`.
- Self-contained image conversion and private link: 0 warnings, 0 errors.
- Promotion-minimal link under `worldmodel_xi_sentry_old_clean`: 0 warnings, 0 errors.
- Private and minimal list/XMODEL_EXPORT/GLB/material unlinks: 0 warnings, 0 errors.
- Private image unlink without an IWD deliberately returned process exit 0 while reporting 6 errors. With the independent six-entry IWD it reported 0 warnings, 0 errors.
- All 24 OAT logs were inspected. Positive logs contain 0 literal warning lines and 0 literal error lines.

Dependency negatives behaved specifically:

- Removing `common_mp.ff` failed with 3 errors and named `mc/mtl_weapon_saw_misc_nocamo` as missing.
- Removing all sentry IWIs failed with 6 errors.
- Removing sentry specular, normal, or color IWI one at a time failed with 6 errors each and named the omitted image.
- Removing all four external DDS files still linked at 0/0. Those four files are GLB source closure, while current IWIs are the actual IW3 image inputs.
- The untouched current production color and normal IWIs decoded at 0/0 to DDS files byte-identical to the candidate's exact external DDS payloads.

## Compiled Model

The independent binary GLB parser and text XMODEL_EXPORT parser agree on:

- 12 source joints and 12 compiled bones with the exact named parent hierarchy.
- OAT reordered the source joint array into parent-before-child compiled order without changing relationships.
- 4 source meshes/primitives and 4 compiled surfaces.
- 2,843 source render vertices, 1,100 compiled pooled positions, and 1,749 triangles.
- Materials in order: `mc/mtl_sentry_bo`, `mc/mtl_weapon_saw_misc_nocamo`, `mc/mtl_weapon_saw`.
- Compiled bounds min `[-22.708826, -19.395699, 0.0]`, max `[19.212023, 19.564678, 38.201344]`.
- All four external GLB image URIs are safe relative paths, exist with exact hashes, are referenced, and map exactly to the four DDS create operations.

The minimal XMODEL_EXPORT preserves `mc/mtl_weapon_saw` as the exact resident material identity. Its display-only color-map filename is blank in that dump because the resident material payload is intentionally not embedded; geometry and surface/material assignment are identical to the private build.

## Promotion Graph

No hidden required production write was found. The minimal link uses:

- Candidate GLB plus the four DDS source-closure files from the promotion map.
- Unchanged production XModel metadata, `mc/mtl_sentry_bo`, and all three current sentry IWIs from disk.
- `mc/mtl_weapon_saw_misc_nocamo` from `common_mp.ff`.
- Resident `mc/mtl_weapon_saw` and its three images from existing common assets.

All source hashes, target preconditions, postconditions, rollback hashes, current path-containment checks, and protected invariants pass. Create-if-absent races do not overwrite an occupied target, and rollback refuses to overwrite a hash-mismatched post-promotion edit.

Frost Sentry and Defroster Drone remain byte-identical to baseline and pairwise distinct from the lethal candidate. `_assetprofile.gsc` still routes all three roles to distinct names, and `xi_ftag.zone` contains each role XModel exactly once.

## Production Integrity

The final re-freeze matches the opening baseline for all 22 production invariants, the exact candidate, every upstream source input, all three OAT executables, both OAT raw support files, and both read-only common fastfiles. No production file was changed.

## Scope

No promotion, full mod build, Steam install/modification, or game launch was performed. In-game appearance, lighting, collision, animation, muzzle-effect alignment, and runtime-pool behavior remain later runtime gates and are not claimed here.

## Evidence Index

- `VERIFICATION_MANIFEST.json`: independent hard-bar decision and machine-readable facts.
- `FINAL_STATE_COMPARISON.json`: before/after hashes and absence states.
- `OAT_COMMANDS.json`, `OAT_RUN_SUMMARY.json`, `LOG_AUDIT.json`, `logs/`: exact commands and raw log audit.
- `MODEL_INSPECTION.json`: binary GLB and compiled XMODEL_EXPORT inspection.
- `IWI_PROBE.json`, `DEPENDENCY_AUDIT.json`: exact current IWI and minimal graph proof.
- `PROMOTION_AUDIT.json`: path, hash, race, interruption, and rollback attacks.
- `BUILDER_COMPARISON.json`: post hoc comparison of independent facts to builder claims.
- `SHA256SUMS.txt`: SHA-256 inventory for the complete Round-7 evidence tree, excluding itself.

## Clearance Requirement

Provide an executable, independently reviewed promotion/rollback transaction with a durable journal or commit marker, deterministic startup recovery, same-directory staging and hash verification, no-reparse path validation, and exclusive filesystem ownership or equivalent compare-and-swap protection. Then rerun this transaction gate against the unchanged candidate and current production preconditions.
