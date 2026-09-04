# Ghost Arms UV Recovery Round 1

## Objective

Preserve the approved Ghost first-person hand/arm shape and exact 71-joint rig, and repair only the visible texture-layout mismatch. No production asset was written during this round.

## Result

The UVs and material assignment are internally correct. The visible red/white patch contamination came from the wrong runtime image payload:

- The approved model uses a `512x1024` two-by-two Ghost atlas layout.
- Production `xi_ghost51_viewhands_col.iwi` decodes to a `512x2048` T8 Ghost viewhands image with a different layout.
- The candidate replaces only that IWI with the `512x1024` runtime image expected by `source_data/ghost_5_1_build.json`.
- The GLB, xmodel descriptor, material JSON, and source DDS are byte-identical to production in the candidate.

## UV Evidence

| Primitive | Material | Image-space allocation | Result |
| --- | --- | --- | --- |
| Authored Ghost sleeves, 10,088 vertices | `mc/xi_ghost51_viewhands` | 10,088 of 10,088 in `row0_col1` | Correct sleeve tile |
| Authored bare arm/cuff, 760 vertices | `mc/xi_ghost51_viewhands` | 760 of 760 in `row0_col0` | Correct bare-arm tile |
| Approved stock glove, 2,144 vertices | `mc/mtl_marine_glove` | Separate stock material | Not sampled from Ghost atlas |

The authored primitives have zero UVs outside `[0,1]`. The production material already binds its color map to `xi_ghost51_viewhands_col`, so neither a UV edit nor a material edit is justified.

## Payload Evidence

| Artifact | Dimensions | SHA-256 | Interpretation |
| --- | ---: | --- | --- |
| Current production IWI | `512x2048` | `F6DCDA39A28B3C2F10624CFE129BDA146322BE1A3145EBA6145CA079A4A4B6E9` | Wrong layout for approved GLB |
| Identified T8 fallback DDS | `512x2048` | `E496045189939F84F562643CEB1CE9C7566B856002B7A0A0CE1B883B12571A9E` | Source of current payload |
| Authored Ghost atlas DDS | `512x1024` | `3008E059EA873FCD251450B26BF134CF9EB856D0CD91B79780AF33D1C9E2AB35` | Correct two-by-two source atlas |
| Candidate IWI | `512x1024` | `73A545C823BD1C4B6A6F38282C7FAEA497A8F6AD2B7D51A573939E8280B90E6F` | Correct runtime payload |

The decoded current IWI matches the runtime-oriented T8 fallback apart from expected block compression (RGBA mean absolute differences `1.994`, `1.115`, `1.952`, `0.154`). The candidate IWI's decoded top mip is pixel-identical to the correctly oriented authored atlas and exactly matches the IWI hash recorded by `ghost_5_1_build.json`.

The likely provenance is a version mix: `source_data/native_viewhands_reference.json` records the current IWI hash and `512x2048` dimensions, while `tools/Build-NativeOperatorViewhands.ps1` falls back from the canonical Ghost DDS to `xi_operator_ghost_5_1_t8_viewhands_col.dds` when the canonical file is absent. The approved hybrid GLB was later paired with those native runtime dependencies.

## Exact Candidate Change

Only this relative production path differs in the candidate:

`zone_raw/xi_ftag/images/xi_ghost51_viewhands_col.iwi`

| Version | Bytes | SHA-256 |
| --- | ---: | --- |
| Production before | 1,398,188 | `F6DCDA39A28B3C2F10624CFE129BDA146322BE1A3145EBA6145CA079A4A4B6E9` |
| Candidate after | 2,097,180 | `73A545C823BD1C4B6A6F38282C7FAEA497A8F6AD2B7D51A573939E8280B90E6F` |

Preserved byte-for-byte:

| Asset | SHA-256 |
| --- | --- |
| Approved GLB | `F504BE39D5EAD3C9424B6FACF3AB482965D6E5155C0DD2F27CB0DC353E2A3217` |
| Xmodel descriptor | `60056ADDD83B7C4DAD6D63902A36C053E1BE5CF815FEBA39EAEB5942A2BBBF5D` |
| Material JSON | `E66AD30C74771E9F85A62E759CBE771F7491A781DCB0D15DDA3E6678037D5185` |
| Authored atlas DDS | `3008E059EA873FCD251450B26BF134CF9EB856D0CD91B79780AF33D1C9E2AB35` |

The model retains 71 joints and inverse-bind hash `5A2B099B7C2C2E85F74E166DFB933195C2D36530E753FEDF9D02513B4E123B6E`. No positions, normals, tangents, UVs, weights, indices, bone transforms, or hand shape changed.

## Pose Validation

| Stock animation | Frame | Result | Hierarchy mismatches | Diagonal ratio to stock | Radius ratio to stock |
| --- | ---: | --- | ---: | ---: | ---: |
| `viewmodel_mw2_m16_idle` | 15 | Pass | 0 | 1.001 | 1.000 |
| `viewmodel_mw2_m16_reload_empty` | 35 | Pass | 0 | 1.015 | 0.985 |
| `viewmodel_mw2_m16_ads_fire` | 2 | Pass | 0 | 0.998 | 1.000 |

All three checks preserve `71/71` joints and exact skin-joint order. The procedural bind, elbow-flex, shoulder-roll, and weapon-grip deformation suite also passed. Accessor validation found 18 finite indexed accessors, and numeric/hierarchy validation passed.

The recovery repository's older XAnim validator flags the idle pose on a hard maximum micro-edge ratio even though stock and candidate values are essentially equal. That report is retained as `validation/idle-recovery-validator-false-positive.json`. The source-sleeve-aware validator, which is the appropriate contract for this approved hybrid asset, passes all three stock poses.

## Source Traceability

The raw source referenced by the Ghost build inventory contains:

- `mp_western_vm_arms_ghost_2_3` for the authored sleeves.
- `hero_ghost_arm_l_a` for the exposed arm/cuff.
- `mp_western_vm_gloves_ghost_2_1` for the original authored gloves.

The staged pre-retarget source GLB hash is `30F431A35DACEDE0A5FD26338718FA1BE86041030C584116A1BC1ABA465E3F26`. The approved production GLB intentionally uses stock CoD4 glove geometry/material while retaining the authored Ghost sleeves and cuff. This candidate preserves that approved composition.

## Evidence Files

- `before-after-stock-animation-poses.png`: same approved GLB in four representative pose rows, wrong payload on the left and corrected payload on the right.
- `production-uv-on-atlas.jpg`: production authored UV placement over the correct two-by-two atlas.
- `texture-source-contact-sheet.jpg`: original source textures and assembled atlas.
- `candidate-manifest.json`: byte-level candidate scope.
- `evidence-summary.json`: machine-readable conclusion and validation summary.
- `initial-audit.json`: detailed GLB primitive, UV, rig, and source audit.
- `validation/`: stock-animation, deformation, accessor, and finite-data reports.

## Promotion Boundary

The candidate is isolated under `candidate/zone_raw/xi_ftag/`. If approved, promotion should copy only `candidate/zone_raw/xi_ftag/images/xi_ghost51_viewhands_col.iwi` to its matching production-relative path. No other staged asset is part of the repair.
