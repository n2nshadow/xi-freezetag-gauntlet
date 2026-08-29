# Independent operator/viewhands critic resume

Date: 2026-08-29  
Scope: read-only production/checkpoint/reference inspection; critic evidence written only below this directory. No production, install, launch, commit, or push action was performed.

## Verdict

**FAIL / HOLD. Do not promote the round-2 pair.**

**Single biggest remaining gap:** the third-person Ghost body has a broken **semantic T8 material-atlas remap**. The original T8 operator card is coherent, but the converted source-body GLB, production body, round-2 body, offline real-XAnim renders, and retained live screenshot all read as wrong atlas islands, oversized decals, black/incorrect regions, and lost material identity. UVs are finite and in range; this is not a NaN/missing-UV problem. The strongest inference is wrong source-material-to-atlas-tile assignment or transform baked during conversion.

No inspected body candidate closes that gap. Round 2 changes only body `JOINTS_0`/`WEIGHTS_0`, so it cannot repair UVs, atlas content, material assignment, or the runtime IWI. It improves some deformation tails but is a four-motion blind visual tie with current, with both sides failing.

The round-2 **viewhands** are the best existing partial improvement: they beat current in all five strict blind motion pairs. They still lose every stock/source comparison, fail stock weighted-center registration, retain swollen arms/open claw-like grips, fail contact/area tails in the wider class spread, and worsen the compiled viewhands pool maximum.

## Gate summary

| Gate | Result | Independent finding |
|---|---:|---|
| GLB structure, finite data, indices | PASS | All 16 production LOD0 GLBs and both round-2 GLBs are finite, indexed in range, have zero index-degenerate triangles, and use at most four normalized influences. |
| Bone budget/order | PASS | Bodies: exact stock 51-joint order/hierarchy. Hands: exact stock 71-joint order/hierarchy. Both are below 128 bones. |
| Body material/readability | **FAIL** | Clean original T8 card becomes patchwork/incorrect in converted-source, production, candidate, offline XAnim, and live evidence. |
| Body animated tails | **FAIL** | Candidate improves edge tails but remains at 8 collapsed / 4 expanded triangles versus stock 5 / 3 over 367 poses. |
| Hands versus current | PARTIAL PASS | Candidate won 5/5 strict blind current/candidate motion sheets. No sheet reached an absolute release pass. |
| Hands versus stock/source | **FAIL** | Stock won 5/5 anonymized motion sheets; original T8 source won the bind comparison. Independent silhouette IoU is 0.1765 with 1.6912x converted area. |
| Hands contact/tails | **FAIL** | Main 333-frame set and 174-frame class spread fail inside/contact proxies; strict area expansion remains much worse than stock. |
| Idle/equipment stability | PASS, not sufficient | The 13-frame M16-idle/M67 set preserves the articulated base contact proxy and is finite, but absolute stock registration and visible anatomy still fail. |
| Compiled pool neutrality | **FAIL** | Candidate body is neutral; candidate hands compile to 8,886 vertices, 1,022 above the current production viewhands maximum of 7,864. |
| Isolated OAT compile/unlink | PASS (structural only) | OAT v0.32.0 links and unlinks both candidate XModels with zero warnings/errors. This is not live-engine proof. |
| New live runtime proof | NOT RUN | Prohibited by scope. The retained user screenshot remains controlling live visual evidence. |

## Objective asset checks

The key GLB results are below. “Verts” is serialized GLB vertex entries; compiled IW3 counts are separate.

| Asset | SHA-256 | Joints / weighted | Verts | Tris | Mats |
|---|---|---:|---:|---:|---:|
| Stock CoD4 body | `98C99FF6CB672629B5500D8C0DA8529520E63EB2273A19CFD84793C645EC56C6` | 51 / 32 | 4,477 | 4,802 | 2 |
| Production Ghost body | `E3ECF995A3431F0FD561774AB58495D7CB632CC9C444F0D4CD7E8CC13D470437` | 51 / 34 | 8,939 | 6,060 | 2 |
| Round-2 Ghost body | `0AF050FE19EB0CD4D564DB33318A642DEC8BCD861299FD8A62E1A0FBA63FBCFF` | 51 / 34 | 8,939 | 6,060 | 2 |
| Stock CoD4 hands | `3FF4DD298BEEEA7FD4EB7FF25DE5B7D21CA33059583FB8A283F7EF7ECDFEB182` | 71 / 49 | 2,856 | 4,532 | 2 |
| Production Ghost hands | `C6E3C50502E9FD01CB08B8DAFED17CC8C6026D8016C33C58630FEC3DC23FD803` | 71 / 42 | 7,027 | 7,672 | 2 |
| Round-2 Ghost hands | `E8F7C4F2E6B532CFCE98BE968AA91C47ADEC395571B6FA07FB5343ED31179BA1` | 71 / 51 | 9,780 | 11,506 | 2 |
| Original full T8 body | `D3A7693D9345EF7F562EFD4A20DF0E770627AA2CA9C688BCDD0F32951150D91D` | 102 / 85 | 21,291 | 22,671 | 2 |
| Original full T8 hands | `453CCB68FDB8200E2F707D169577410E77CF0B1DA4EF6D71B19E5B9E376918F0` | 66 / 56 | 15,192 | 20,411 | 2 |

For stock/current/candidate Ghost body and hands: UVs and normals are finite; zero UV entries fall outside `[0,1]`; normal lengths are approximately 1.0; maximum weight-sum error is at most `1.36e-7`; all indices are valid; and all primitives carry position, normal, UV, joints, and weights. These checks prove serialization health, not correct semantic atlas placement.

The body candidate and production GLBs have the same length and identical JSON document. Exactly 2,061 bytes differ: 190 in `JOINTS_0`, 1,871 in `WEIGHTS_0`, and **zero outside skin attributes**. The hands candidate differs from its articulated base only in 680 joint bytes and 5,270 weight bytes.

Full independent data: `glb-objective-audit.json`, `t8-source-objective-audit.json`.

## Compiled pool check

Every untouched production pair was freshly compiled and unlinked to XMODEL_EXPORT. Counts are engine-facing `NUMVERTS`; each compile/unlink ended with zero warnings/errors.

| Operator | Body verts | Hands verts |
|---|---:|---:|
| Alice 4-1 | 4,258 | 6,591 |
| Ghost 5-1 | 8,365 | 6,473 |
| Iskra 6-1 | 9,404 | **7,864** |
| Mace 5-1 | 6,284 | 5,572 |
| Mara 3-1 | 7,038 | 6,081 |
| Mara 3-2 | 8,788 | 4,381 |
| Raines 5-1 | 4,395 | 2,187 |
| Talon 1-1 | **10,811** | 2,879 |
| Round-2 Ghost candidate | 8,365 | **8,886** |

The candidate body is pool-neutral versus Ghost and stays 2,446 below the roster body maximum. Candidate hands add 2,413 compiled vertices versus production Ghost and set a new roster maximum, 1,022 above Iskra. That violates the explicit “do not worsen pools” bar even though the isolated fastfile compiles.

Full data: `current-pool-oat-audit.json`, `candidate-xmodel-export-audit.json`.

## Animated measurements

### Third-person body

Four real stock IW3 motion families were sampled at 367 poses: reload, ADS fire, melee, and crouch-fire.

| Model | Edge p99.9 worst | Edge max | Area p0.1 low | Area p99.9 high | Collapsed max | Expanded max |
|---|---:|---:|---:|---:|---:|---:|
| Stock | 5.5473 | 14.8291 | 0.06081 | 6.4662 | 5 | 3 |
| Production Ghost | 5.6858 | 7.6646 | 0.04159 | 6.9669 | 8 | 4 |
| Round-2 Ghost | **3.7622** | **4.1057** | 0.04159 | **5.8919** | 8 | 4 |

The weight edit improves long-edge/high-area tails, but not collapse counts or the visible material failure. Fresh blind body sheets were ties in all four motions, with both sides marked fail.

### First-person hands

Fresh independent coverage totals **520 full frames across 10 motion families**: M16 ADS/reload/idle, USP pistol reload, MP5 sprint, M4 melee, M67 throw, AUG reload, L118 rechamber, and SPAS rechamber.

Main five-family set, 333 poses:

- Candidate versus stock median contact-distance error: median `0.12236`, p90 `0.45682`, max `0.92191`.
- Candidate area ratio range: `0.0004108` to `26.5066`; stock: `0.0021282` to `9.2466`.
- Candidate max collapsed/expanded: `5 / 6`; stock: `5 / 2`.
- MP5 sprint frame 10 left-palm inside-proxy error is `0.125` against the articulated base; the `0.05` gate fails.

Idle/equipment set, 13 poses:

- Contact-preservation checks pass; all geometry is finite.
- Candidate max collapsed/expanded is `2 / 5`; stock is `2 / 2`.
- Candidate area max is `17.5527`; stock is `9.9665`.
- The stricter stock weighted-center registration still fails: maximum center distance `2.1332` versus `0.5`, mean distance ratio `0.01881` versus `0.007`.

AUG/L118/SPAS class spread, 174 poses:

- Candidate versus stock contact-distance error max is `1.02656`.
- Candidate versus articulated-base inside-proxy error max is `0.10417`; the `0.05` gate fails.
- Candidate max collapsed/expanded is `7 / 4`; stock is `7 / 2`.
- Candidate area max is `23.1500`; stock is `9.3776`.

Full data: `body-dense-independent.json`, `viewhands-contact-dense-independent.json`, `viewhands-idle-equipment-independent.json`, `viewhands-class-spread-independent.json`.

## Blind visual result

The random A/B identity key was sealed at SHA-256 `5CB545FC1B0F9405DE0277431E6F5C8B0DFFFF0470E817EB713E87E1E3F40930`. The ballot was written before reveal.

- Body current/candidate: 4 ties; both panels failed in every motion.
- Hands current/candidate: candidate preferred 5/5; absolute passes 0/5.
- Hands stock/candidate: stock preferred 5/5.
- T8 source-bind/candidate: T8 source preferred 1/1.

The stock/source sets are anonymized but not strictly identity-blind because stock is gray and source bind pose differs. Current/candidate sets are strict: same identity/material, randomized independently.

Independent parsing of the retained source/runtime silhouette sheet gives IoU `0.17646`, source area `11,453` pixels, converted area `19,369`, and area ratio `1.69117` at the primary threshold. Threshold sensitivity remains poor (`0.1633`-`0.1851` IoU).

Evidence: `blind/`, `source-silhouette-independent.json`.

## Material diagnosis

The clean original T8 card is retained at `.asset_staging/t8_pack/operators/ghost51/operator-card.png`; a critic-size inspection copy is `renders/references/t8-operator-card-resized.png`. The converted source/full bind and current/candidate binds reproduce the patchwork before any live engine step.

The body conversion packs 62 source materials into an 8x8, 2048x2048 DDS atlas; the runtime IWI is 1024x1024. Viewhands pack 8 tiles into 512x2048 and retain that IWI size. All four material descriptors, three DDS files, and three IWIs in production are byte-identical to the conversion candidate source. Materials resolve and OAT compiles them; there is no later production-file drift to explain the visual failure.

This makes the semantic tile remap the strongest diagnosis. Finite `[0,1]` UVs only show that the numbers are legal; they do not show that a vest triangle samples the vest tile rather than a decal, face, or invisible/glass tile.

Full data: `material-asset-audit.json`; fresh binds under `renders/bind/`.

## Isolated OAT roundtrip

Fresh isolated OAT v0.32.0 output:

- Fastfile: 518,105 bytes, SHA-256 `7C6CBEF67F4DD2CAF445AAC99245AFB5518AA3FCAAC40DF67E68D89824B539F3`.
- Linker/Unlinker: zero warnings, zero errors.
- Body XMODEL_EXPORT: 51 bones, 8,365 verts, 6,060 faces, 2 objects/materials.
- Hands XMODEL_EXPORT: 71 bones, 8,886 verts, 11,506 faces, 8 objects, 2 materials.
- Candidate compiled bone order and parents exactly match freshly compiled production Ghost for both models.
- Re-extracted GLBs preserve counts, material names, finite UV/normals, and joint-name/hierarchy contracts.

The extracted GLBs are **not byte-identical** to the inputs because OAT reserializes nodes/accessors. I make no byte-identity claim. This roundtrip proves isolated ingestion/extraction, not visual correctness or live skinned-cache safety.

Evidence: `oat-roundtrip/`, `oat-unlinked/`, `oat-unlinked-xmodel/`, `oat-roundtrip-glb-audit.json`.

## Exact inspected files

`INSPECTED_FILES.json` lists 76 exact inputs with absolute F: paths, byte sizes, and independently computed SHA-256 hashes:

- 16 current production body/viewhands GLBs
- 10 production Ghost material/DDS/IWI files
- 3 latest checkpoint/articulated candidates
- 10 stock and original T8 references
- 3 retained user/live screenshots
- 9 relevant reports/scorecards
- 14 compiled XAnims
- 8 real weapon/equipment models
- 3 OAT controls

Primary checkpoint files inspected were `xi_ftag/.asset_staging/gauntlet_operator_20260828/REPORT_round2.md`, `RESULT_round2.json`, `critic_round1.md`, and both candidate GLBs. The controlling live screenshot is `evidence/user-failure-reference.png`, SHA-256 `47D7A8137FDC0DD7B9D14577B770AE8E85F49B2D5A8DB9BD75BCCF6B907EB615`.

## Next narrowly scoped builder round

**Ghost body atlas-remap-only round. Do not touch viewhands, topology, positions, indices, joints, or weights.**

1. Rebuild the body `TEXCOORD_0`/atlas mapping from original per-surface T8 material identity into the existing two-slot body/glass contract.
2. Retain exactly 51 bones, 8,365 compiled body vertices, 6,060 faces, 2 materials, and the current runtime image budget; no new pool maximum.
3. Emit a machine-readable per-source-material tile map and reject triangles whose UV centroid/extent escapes the assigned tile (with an explicit seam exception list).
4. Render the original source and candidate in the same six cameras plus reload/ADS/melee/crouch XAnims; require coherent face, vest, patches, pants, glass, and no invisible/black tile leakage.
5. Run an isolated OAT compile/XMODEL_EXPORT extraction and a new blind material review before any live test.

This round is deliberately material-only. The hands need a later, separate envelope/contact/pool round after the operator body is visually coherent.

## Evidence limits

- Only the copied `user-failure-reference.png` and older retained live-hands screenshots were available on F:. The original clipboard filenames cited by an earlier critic were absent.
- No game was launched, so there is no fresh live candidate capture.
- Offline rasterization is diagnostic, not an engine renderer. The material conclusion does not rely on it alone: it is consistent across the clean original card, converted-source assets, retained live screenshot, binary ownership, and unchanged production material chain.
