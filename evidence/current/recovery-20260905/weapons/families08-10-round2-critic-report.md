# Families 08-10 Surface Round 2 Independent Critic

Date: 2026-09-05

## Verdict

**PRODUCTION PROMOTION: FAIL.** The two user-designated mandatory Family 08 blockers both remain: the compiled Renetti suppressor still reads as detached in view and world, and the staged Family 08 weapon still uses the Family 13 runtime ID. Families 09 and 10 also violate current finish-slot contracts, Family 09 carries the wrong authored optic-lens maps, weapon OAT roundtrip is not field-clean, and the six new model IDs do not fit the retained full-package release budget.

| Family | Surface / material | Runtime contract | OAT / package | Final |
|---|---|---|---|---|
| 08 Renetti | **FAIL**: visible suppressor daylight in view and world | **FAIL**: `skorpion_silencer_mp` belongs to Family 13 | Model path passes; weapon roundtrip and budget fail | **FAIL** |
| 09 XRK Stalker | **FAIL**: authored XRK lens replaced by KV lens maps | **FAIL**: active XI Signature `gunModel2` is overwritten | Model path passes; weapon roundtrip and budget fail | **FAIL** |
| 10 KV Inhibitor | **PASS** in supplied static surface/LOD views | **FAIL**: active XI Signature `gunModel2` is overwritten | Model path passes; weapon roundtrip and budget fail | **FAIL** |

No builder, production, Steam, accepted-viewhands, source, or other staging file was edited. Every critic-created artifact is under the critic root below.

## Exact Roots

- Builder root (`B`): `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\families08_10_surface_round2`
- Critic root (`C`): `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\families08_10_surface_round2_critic`
- Production root (`P`): `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag`
- Authored-source root (`A`): `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag\xi_ftag\.asset_staging\weapon-material-rebuild`

All `B\`, `C\`, `P\`, and `A\` paths below are exact relative paths under those fully specified roots.

## Family 08 - Renetti - FAIL

1. **The suppressor gap remains in both compiled roles.** `B\renders\f08_renetti\view\lod0_collar_side.png` and `B\renders\f08_renetti\world\lod0_collar_side.png` each show background daylight between the muzzle/neck and the suppressor entrance. The same defect is easy to see in `B\renders\review\families08_10_compiled_overview.png`. The critic comparison is `C\evidence\renetti-compiled-gap.png`.
2. `B\metrics\view-collar-abutment-seal.json` extends 66 view-barrel vertices by only `0.003` on X and labels that PASS. That closes a scalar bounds test, not the visible collar. Independent measurement in `C\evidence\renetti-proximity.json` finds only near-point vertex proximity (`0.02096` view, `0.00981` world); `C\evidence\renetti-collar-contact-profile.json` shows 20 of 56 suppressor-entrance vertices remain more than `0.25` units from any base vertex. The compiled PNGs are dispositive under the requested visual bar.
3. **The weapon ID conflicts with Family 13.** The independent compiled list `C\oat\f08_weapon\list.log` contains `weapon, mp/skorpion_silencer_mp`. `C\evidence\weapon-id-ownership.json` resolves that ID exclusively to Family 13 and resolves Family 08 to `colt45_silencer_mp`. Production corroboration is `P\source_data\weapon_runtime_slots.json`; `P\zone_raw\xi_ftag\xi_ftag\_weapons.gsc:3882` requires Family 08 attachment 3 to be `colt45_silencer_mp`, while lines 3907 and 4351 reserve `skorpion_silencer_mp` for Family 13/FJX Horus.
4. The broad pistol body and world LOD0/1/2 silhouette are retained, but that cannot offset a detached required attachment. Candidate totals are 8,554 view triangles and 8,326 / 6,304 / 5,522 world triangles versus current production 5,077 view and 1,126 world LOD0. See `C\evidence\geometry-budget-comparison.json`.
5. `B\renders\f08_renetti\view\lod0_ads_axis.png` looks centered as a static rest view, but it is not an ADS proof. `B\scripts\render_evidence.py:157` explicitly aims the camera through the suppressor attachment bounds (`acenter`), not through live weapon animation, sights, or reticle state.

## Family 09 - XRK Stalker - FAIL

1. The whole-weapon, collar, muzzle, and world LOD images show no obvious detached part or unintended silhouette break. Relevant files are `B\renders\review\f09_xrk_compiled_review.png`, `B\renders\f09_xrk\view\lod0_collar_side.png`, `B\renders\f09_xrk\world\lod0_collar_side.png`, and `B\renders\f09_xrk\world\lod2_world_lod2_oblique.png`.
2. **The optic glass does not preserve the authored material.** `P\source_data\xrk_stalker_material_report.json` maps `att_lens_scope` / `xi/xrkstalker_scope_lens` to `xi_xrkstalker_scope_lens_col` and `_nml`. The staged material `B\runtime\f09_xrk\materials\xi\xrkstalker_scope_lens.json` instead references the KV Inhibitor color and normal maps. Both authored XRK DDS files exist under `P\zone_raw\xi_ftag\images_source`. The staged file is byte-identical to the current production material, so this is an inherited production defect, not evidence of correctness. Exact comparison: `C\evidence\xrk-lens-contract.json`. The compiled ADS render shows a very dark, opaque-looking lens: `B\renders\f09_xrk\view\lod0_ads_axis.png`.
3. **The staged weapon destroys an active finish binding.** Production `P\zone_raw\xi_ftag\weapons\mp\remington700_silencer_mp` uses `gunModel2=viewmodel_xi_xrk_stalker_xi`; staged `B\runtime\f09_xrk\weapons\mp\remington700_silencer_mp` replaces all 16 gun-model slots with the tactical round-two model. `P\source_data\weapon_finishes.json` marks Family 09 active and defines slot 2 as XI Signature. Exact field diff: `C\evidence\model-slot-contract.json`.
4. The weapon ID itself is correct and unique. The geometry is not credibly budgeted for the high-population package: 39,676 view and 37,458 / 32,366 / 28,350 world triangles versus current production 8,065 view and 1,256 world LOD0. See `C\evidence\geometry-budget-comparison.json`.

## Family 10 - KV Inhibitor - FAIL

1. The supplied static compiled evidence is visually the strongest of the three: main shape/materials are coherent, view and world suppressor collars contact, no obvious unintended holes or floating pieces appear, and LOD1/2 preserve the broad silhouette. Evidence: `B\renders\review\f10_kv_compiled_review.png`, `B\renders\f10_kv\view\lod0_collar_side.png`, `B\renders\f10_kv\world\lod0_collar_side.png`, and `B\renders\f10_kv\world\lod2_world_lod2_oblique.png`.
2. **The active XI Signature contract is still broken.** Production `P\zone_raw\xi_ftag\weapons\mp\dragunov_silencer_mp` uses `gunModel2=viewmodel_xi_kv_inhibitor_xi`; staged `B\runtime\f10_kv\weapons\mp\dragunov_silencer_mp` replaces it with the tactical round-two model. See `P\source_data\weapon_finishes.json` and `C\evidence\model-slot-contract.json`.
3. The weapon ID is correct. Replacing the production XRK world-model fallback with authored KV world geometry is directionally correct, but it adds a distinct XModel in an already exhausted full-package budget.
4. Candidate totals are 34,423 view and 32,131 / 24,765 / 18,705 world triangles versus current production 9,190 view and 1,616 world LOD0. See `C\evidence\geometry-budget-comparison.json`.

## Blind A/B And Authored Evidence

- Independent hashes of the raw authored GLBs match their source audit hashes: Renetti `603A6480...`, XRK `1D08D076...`, KV `D693DBEC...`. Full paths and hashes: `C\evidence\source-model-hashes.txt`.
- I rendered anonymous side-view pairs from the builder-selected full-detail authored bases and reduced pre-attachment bases. The key was withheld until after review. Sheet: `C\visual_ab\anonymous_sheet.png`; reveal: `C\evidence\blind-ab-key.json`.
- XRK and KV view/world pairs, plus Renetti world, preserve the broad base silhouette. Renetti view is not a clean single-configuration comparison because the selected authored base contains stacked optional optic/suppressor surfaces that the final pipeline intentionally strips. The A/B set therefore supports base silhouette retention but cannot prove final material fidelity or suppressor attachment quality.

## OAT And Structural Audit

- Builder seal is intact: 811 hashed files, zero missing/size/hash mismatches, plus the self-omitted manifest file. See `C\evidence\builder-manifest-integrity.txt` and `B\SHA256-MANIFEST.json`.
- I independently compiled seven OAT 0.32.0 lanes into `C\oat`: three model lanes, three weapon lanes, and one combined lane. Every fastfile listed successfully. Model compile/list/dump is clean at 0 warnings / 0 errors. Every model dump is byte-identical to the builder dump (`C\evidence\model-dump-hash-comparison.json`).
- All 12 model GLBs pass finite hierarchy, indexed-accessor, normalized-weight, and nonzero-normal checks: `C\evidence\glb-finite.log` and `C\evidence\glb-accessors.log`. All 12 pass geometry/material/joint semantic roundtrip within OAT quantization tolerances: `C\evidence\model-semantic-roundtrip.json`.
- No literal no-draw or missing-material marker occurs in the three independent model listings: `C\evidence\surface-name-scan.txt`. This does not excuse the wrong XRK lens maps.
- **Weapon OAT is not clean.** Each weapon compile emits two unresolved indirect sound warnings (`weap_putaway`, `weap_ammo_pickup`); the combined compile emits six. Exact logs are `C\oat\f08_weapon\link.log`, `C\oat\f09_weapon\link.log`, `C\oat\f10_weapon\link.log`, and `C\oat\all\link.log`; summary: `C\evidence\oat-replay-summary.json`.
- Independent weapon dump comparison is not field-preserving: source files have 356 fields, dumps have 501, with 154-155 field differences per family. Most additions are explicit defaults, but non-default source values such as `twoHanded=1` and `adsTransBlendTime=0.1` disappear, while last-shot eject fields materialize. See `C\evidence\weapon-roundtrip-semantic.txt`. The builder only roundtripped XModels, so its PASS does not satisfy a weapon roundtrip requirement.
- No live animation/game capture was supplied. The hip and ADS PNGs are neutral Blender rest renders, and the alleged ADS camera is centered from attachment bounds. Runtime ADS/hip axes, hand fit, animation deformation, glass blending, and live LOD switching remain unproven for all three families.

## Full-Package Budget - FAIL

- Fresh execution of the production stock-map gate against current `P\zone_out\mod.ff` passes 21/21 maps; the worst is `mp_citystreets` at 988/1000. That compact fastfile contains only 15 concrete XModels and none of the six round-two family model IDs, so it is not a full-roster promotion test. Evidence: `C\evidence\production-stock-map-budget.json`.
- The retained full-roster checkpoint `P\source_data\viewhands_cleanup_status_20260905.md` records 988/1000 runtime XModels and 1798/2048 runtime materials. Adding the six distinct staged model IDs projects 994/1000, above the repository's 990 release ceiling (`P\build.ps1:552`).
- The latest retained exact full-package audit, `P\.asset_staging\recovery_20260904\gauntlet\family01_world_lods_round2_critic\REPORT.md`, reports 993/1000 and 70/70 mod-exclusive models. The six staged IDs project 999/1000 and 76/70 before solving the two missing Signature variants. The exact 31 MB proving fastfile cited by that audit has since been removed, so no honest fresh integrated rerun is possible. Consolidated assessment: `C\evidence\full-package-budget-assessment.json`.
- Therefore the builder has neither a passing full-package model-count proof nor credible per-model geometry parity with current production.

## Biggest Remaining Gap

**Family 08 is the immediate release stopper.** Both mandatory conditions still fail in the actual compiled evidence: the Renetti suppressor visibly floats in view and world, and its staged `skorpion_silencer_mp` ID is owned and used by Family 13.

## Remediation Handoff

1. Rebuild the Renetti view/world muzzle seat as a continuous radial collar, not an X-bounds overlap. Recompile and provide close side, top, oblique, and muzzle-front renders from the exact OAT dumps with no daylight at any angle.
2. Stage Family 08 under `colt45_silencer_mp`; keep Family 13 on `skorpion_silencer_mp`; rerun menu, equip, combined-list, and global ownership checks.
3. Point the XRK lens material to the authored XRK color/normal maps and compile those images. Preserve `gunModel2` XI Signature bindings for Families 09 and 10 instead of aliasing every slot to the tactical model.
4. Rebuild the exact full roster and get both runtime XModels at or below 990 and mod-exclusive models at or below 70. Redesign model sharing or reclaim slots before adding any finish-specific suppressor models.
5. Make weapon compile/dump roundtrip field-clean and warning-free, then capture live hip/ADS, optic glass, suppressor contact, and LOD transition evidence from the exact package hashes.
