# Iskra61 Body Round3 Builder Report

Date: 2026-09-05

Staging root: `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\iskra61_body_round3`

## Verdict

**Builder verdict: HOLD. Independent-review state: CRITIC_READY. Production: HOLD.**

The visible opaque white Kitty Six charm is materially repaired, but this builder does not claim an unconditional PASS. The critic's stated 676-triangle / 373-vertex / one-component source signature is demonstrably the cutout hair-shell region rather than the white charm. Both source regions are now retained separately, so the remaining semantic contradiction must be judged independently. No promotion manifest was created.

## Sealed Baseline

- Sealed Round2 delivery manifest SHA-256: `11EA2182DBBB3927C826ABC3E9E53C3BDC6FD0C3B6DE4C386AC8D635F0F2D2BD`.
- Round2 checksum entries verified: 701; failures: 0.
- Full Iskra source SHA-256: `73A8DB70C11A87E29F5DDE9C71A112C2D1545CA2A657DF22DE7C1D46538C7EEF`.
- Frozen Mace LOD hashes were rechecked and all still match. No Mace file exists in the Round3 candidate or OAT outputs.

## Candidate

| Tier | Triangles | Vertices | Surfaces | Joints | SHA-256 |
|---|---:|---:|---:|---:|---|
| LOD0 | 28,499 | 32,546 | 2 | 51 | `ABB8A050C9BAA44A5830D7D7D47E59508DF8E9CE39604BB29CD32940832C8F1F` |
| LOD1 | 22,000 | 26,776 | 2 | 51 | `BD830653842910FC8137B02DD5568BD693740C58E52864A8D6A1C93CCE1F94A1` |
| LOD2 | 15,000 | 20,152 | 2 | 51 | `C2CA10FF9108CA0AD997E518D709FFA786B8C243F5B583F4FDB1B69A073D7ECF` |
| LOD3 | 10,000 | 14,770 | 2 | 51 | `6284A03158EA823169A10FFA338F1585202495C17F618E120B3B5E4DAFA0335C` |

Descriptor: `operators/iskra/candidate/zone_raw/xi_ftag/xmodel/playermodel_xi_iskra_6_1.json`  
Descriptor SHA-256: `59402FD9147291AA4E67F01986CB840CD9504B4A346C54B3208BA6E313D14580`

Only these four GLBs differ from the sealed Round2 candidate. The descriptor, two authored material JSON files, texture manifest, DDS/PNG sources, and both IWI files are byte-identical to Round2.

## White Charm Repair

Direct source/atlas lineage identifies the visible white charm as opaque `xmaterial_9649e4a90f0f44e`, manifest tile 53: 332 triangles, 356 vertices, and 12 authored mesh pieces. Round2 retained 162 / 132 / 66 / 48 triangles. Round3 retains all 332 triangles and all 356 vertices at every LOD, with source UV corners matching within `4.768371582e-07` and bind-placement delta within `5.340576172e-05`.

The full assembly is rigid on `j_shoulderraise_le`, preserving the sealed Round2 shoulder attachment that remains attached through stock animation. The staged source-retarget GLB labels the region `j_mainroot`; using that converted root weight visibly detaches it, so Round3 does not pretend that conversion artifact is the intended attachment.

The critic's inverted tile-53 selector is separately closed as the cutout hair shell: 676 / 521 / 384 / 257 triangles and one component through LOD0-3. It is not used as white-charm proof.

## Visual Evidence

The final receipt covers 70 of 70 render jobs and is bound to manifest SHA-256 `3B29F8E96147E02C51CC29C92BF48B1F831B5B0341A8BD29B3E1229832C87213`. Revealed sheets show:

- Source vs Round2 vs Round3 white charm: restored, white/red, and readable.
- LOD0-3 charm continuity: stable silhouette and appearance at all exact body tiers.
- Idle, run, crouch, fire, and death: intact charm in orthogonal closeups from the same posed vertex buffers as the full-body sheet.
- Whole operator: no new major folded/interpenetrating deformation, detached armor, material-class swap, or identity change was observed. Split cyan/red hair and cat-ear silhouette remain at least as strong as Round2.

Residual: tiny dark specks remain visible away from the operator in some whole-body pose frames. They are outside the restored white-charm selection and remain for independent criticism.

## Machine And OAT Closure

- Exact tiers: 28,499 / 22,000 / 15,000 / 10,000 triangles.
- Exact CoD4 runtime skeleton: 51 named joints with hierarchy/binds checked against stock at every candidate and OAT-dumped LOD.
- Two surfaces at every LOD; largest local indices: 23822, 20002, 14973, 10442; uint16-safe.
- Weights: at most four influences, no invalid references or unweighted vertices, normalized sums, minimum positive weight at least 0.0101.
- Materials/images: exact opaque/cutout material parity, no Iskra glass class, decoded DDS/IWI closure, byte-equal diffuse BC3 payload, and cutout alpha containing both transparent and opaque pixels.
- IWI budget: 524,360 / 1,048,576 bytes.
- OAT v0.32 link/list/dump: PASS, 0 warnings, 0 errors; fastfile `iskra_6_1_round3_oat` is 2,164,276 bytes.
- OAT semantic roundtrip: descriptor, triangles, geometry, normals, UVs, named weights, materials, 51-joint hierarchy, local binds, and inverse binds pass all four LOD comparisons.

The OAT log notes absent optional `source_data` GDT search paths, then completes with 0 warnings and 0 errors. Blender also logs a recoverable OBJ-relative texture-path attempt before successfully loading the intended absolute atlas; all 70 outputs completed.

## Isolation

All generated candidate, evidence, metrics, OAT, report, and checksum files are under this Round3 root. The config contains only Iskra, no Mace path is present in candidate/OAT/evidence outputs, frozen Mace hashes still match, and no promotion manifest exists. This is a staged-output and protected-input rehash audit, not an operating-system write-history proof.

## Remaining Gaps

1. The 676/373/one-component requirement names a hair-shell selector, while the actual white charm is the 332/356/12-piece opaque assembly. Resolving that wording without falsifying source identity requires independent critic judgment.
2. Tiny dark pose-sheet specks remain outside the repaired white-charm selection.
3. No live IW3 shader, animation-transition, gameplay, memory-residency, or user-acceptance proving run was performed.

## Primary Files

- `RESULT.json`
- `DELIVERY_MANIFEST.json`
- `SHA256SUMS.txt`
- `WRITTEN_FILES.txt`
- `metrics/visual-review.json`
- `metrics/capacity-and-index-validation.json`
- `metrics/material-image-alpha-closure.json`
- `metrics/replacement-delta.json`
- `metrics/isolation.json`
- `operators/iskra/metrics/authored-white-charm-validation.json`
- `operators/iskra/metrics/charm-selector-contract.json`
- `operators/iskra/metrics/pose-and-render-manifest.json`
- `operators/iskra/metrics/render-receipt.json`
- `operators/iskra/metrics/oat-closure.json`
- `operators/iskra/metrics/oat-semantic-roundtrip.json`
