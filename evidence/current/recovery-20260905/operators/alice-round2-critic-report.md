# Alice41 Rigor Mortis Round2 Independent Critic

## Decision

**HOLD. Not safe for a sealed proving package. No promotion manifest is authorized or emitted.** Production, Steam, live-engine and user acceptance remain outstanding. This decision applies only to Alice41's third-person body, not to approval of the other seven authored skins or the accepted viewarms.

**Exact largest gap: LOD1 and LOD2 still remove the authored upper arms and substantial torso surfaces, leaving disconnected forearms and a hollow upper body.** The shin repair succeeds, but does not satisfy intact full-body silhouette. This defect is visible in the inherited Round1 comparison too; it is an unresolved defect, not a claim that Round2 first introduced it.

The current package budget is NOT a blocker: **987 runtime XModel slots, 986-name union, 64 exclusive, strict cap 990**. Replacing the already-loaded `playermodel_xi_alice_4_1` is slot-neutral. Old 993-slot arithmetic in builder documents is superseded.

## Blocking Findings

### P1: Upper-Body Geometry Is Missing In LOD1/LOD2

The full-size textured LOD1 front and opaque-clay LOD1 back images show background between each shoulder and its forearm, and through the torso behind the straps. LOD2 is worse. The four-angle clay grid shows the contrast against intact LOD0 and the unchanged, coarse LOD3. The clay renderer forces every surface opaque and disables backface culling, so these holes cannot be explained away by the atlas alpha or a transparent preview material.

Direct GLB UV-tile classification corroborates the images. Tile 6 is `mtl_c_t8_mp_spe_buffer_superhero_arms` in the sealed source conversion. It contains **49 triangles at LOD0, 0 at LOD1, 0 at LOD2, and 18 at LOD3**. The previous priority-retention gate only tests selected tiles at LOD0 and does not require this arm material to survive the repaired LODs.

Image-local measurement on original 512x960 clay images provides additional, non-topological corroboration. In the back-view image-right upper-arm ROI `[362,285,442,401]`, LOD1 retains 60.79% and LOD2 56.43% of LOD0 foreground. In the torso ROI `[170,285,342,388]`, LOD2 loses 4,075 of 15,426 LOD0 foreground pixels. These fixed-ROI measurements are not exact percentages of anatomical surface loss. The decisive evidence is the visible gaps and zero authored arm-tile triangles.

Evidence:

- `evidence/fresh/renders/lods/lod1-front.png`
- `evidence/fresh/clay/lod1-back.png`
- `evidence/visual/fresh-lod-clay-grid.png`
- `evidence/machine/fresh-structural-replay.json`, `lods[].uvAndClassification.tileTriangles`
- `evidence/machine/recovery-audit.json`, `regionalSilhouette`

### P1: Both Repaired LODs Fail The Existing Death Deformation Gate

The partial review's five pose images and numeric pose manifest cover **LOD0 only**. Recovery evaluated the same five frozen stock samples on all four LODs. Eighteen of twenty numeric cases pass; **LOD1/death and LOD2/death fail** the pre-existing stock-relative combined ratio-and-length gate.

At `pb_stand_death_frontspin`, frame **43.46**, the same spatial edge grows from **0.2222520657 to 12.5099180338 game units**, a **56.287072x** stretch. The stock-relative maximum ratio limit is **17.147346x**, and the associated maximum animated edge-length limit is **9.875767**. Both limits are exceeded. Global maximum edge growth and p99.9 alone miss this local failure. All twenty cases remain finite, retain topology and have zero collapsed edges; those facts do not excuse stretching or missing geometry.

The edge uses concatenated vertex IDs **6812/6815 at LOD1** and **4816/4819 at LOD2**. Its bind endpoints are approximately `[-3.393807,32.609648,-0.044246]` and `[-3.319056,32.737487,-0.209974]` in the sampled glTF frame. One endpoint is 76.08% `j_hiptwist_ri`; the other is 80.80% `j_hiptwist_le`. This opposite-hip weight discontinuity is measured, not inferred from a generic stretched silhouette.

Four new targeted death renders, two angles for each failed LOD, were generated and actually inspected. They expose the hollow chest/back and separated arm presentation. They corroborate the visual HOLD; the precise worst-edge stretch and endpoint weights are established numerically, not claimed to be unambiguously isolatable in the whole-body image.

Evidence: `evidence/machine/recovery-all-lod-pose-audit.json` and all four images in `evidence/recovery-death/`. The new renderer's `passed` field means render completion only; it does not override the failing pose audit.

## Successful Repair And Preservation

The existing A/B sheet was inspected before opening its mapping. The recovery assessment preferred **A** for continuous knees, shins, ankles and feet in both LOD1/LOD2 side and three-quarter views. Reveal was **A=Round2, B=Round1**. Full identity blindness was impossible because the user supplied the identity; this was a round-mapping-blind comparison, not a claim of independent identity blinding.

The protected lower 38% band now retains all 741 unique source positions within **0.000719081 game units**, using a declared 0.001-unit geometric tolerance for source/export coordinate drift. The receipt records 773 protected bulk-pass vertices and a Blender-Z cutoff of 27.667375927. Raw source bounds recompute 27.667677107; these are not falsely reported as bit-exact. Both reduction passes use the same recorded cutoff.

Four-angle lower-body silhouette IoU minima against LOD0 are **0.959781 at LOD1** and **0.940824 at LOD2**. The prior aggregate whole-body IoU also passes its 0.90 threshold, but preserved hood/coat/legs dominate that score while local arm and torso holes survive. Lower-body and global numerical PASS labels therefore do not establish the requested intact operator.

Candidate runtime inventory is 13 files. Exactly two differ from Round1: LOD1 and LOD2 GLBs. There are no additions/removals. **LOD0, LOD3, descriptor, all three material files, both IWIs and texture-source assets are byte-identical.** All 38 source-tree files are byte-identical to Round1.

| LOD | Vertices | Triangles | SHA-256 |
|---|---:|---:|---|
| 0 | 10,319 | 9,761 | A576E4C7BFC1B614FF400F58B20CEA269278B7FD9959AF7888DBA585EEC9884F |
| 1 | 8,324 | 7,000 | B74D982EB829A1FCBE5BAD302816559A802B84E38A05566890BF97B25827E090 |
| 2 | 6,328 | 4,500 | 303C35C49F20968ADCAE869605A9202B0A58B66A0F5149EB8C7BD5CEC77F660D |
| 3 | 4,892 | 3,200 | 59B741EB46A61DBC98E2EB7628DF871F71C6D129B34FED02D77E119C7DAC5569 |

## Identity, Materials And GLB Integrity

The actual eight-skin lineup, four-angle source/candidate/current textured sheet, four-angle LOD sheet, source and candidate facial details, and five existing stock-pose images were inspected. Alice41 matches the selected **Crash - Rigor Mortis** hooded, masked long-coat operator, including visible lower face/beard, hood coverage, eyewear, shoulder/forearm adornments and red belt accents. The existing Rime control is clearly a different skin and is not an identity authority. Hair is largely covered by the hood; this review does not invent visible hair detail or assert an unseen scalp match. Authored identity at LOD0 passes; faithful full-body preservation at LOD1/LOD2 does not.

All four GLBs were reparsed and their structural profiles recomputed. GLB v2 header/chunk lengths and alignment, every bufferView/accessor bound, embedded-buffer closure, all-accessor finiteness (including tangents and binds), acyclic single-parent graph, and 51 unique skin joints pass. Required geometry attributes, indices, weight sums and surface counts pass. Each LOD has one mesh node, three material surfaces, uint16 indices, zero invalid joint references/unweighted vertices, at most four influences and a minimum positive weight of approximately 0.0102. Exact stock joint order, parent hierarchy, local bind and inverse bind match the sealed 51-joint CoD4 template with zero measured bind delta. This proves a valid skeleton contract, not anatomically sound weights on every retained edge.

The three material definitions resolve to the two custom IWIs and stock `$identitynormalmap`; their material-state profiles match the clean OAT dump. Opaque uses `mc_l_sm_r0c0s0`; cutout and glass use `mc_l_sm_b0c0s0`, source-alpha blending, no culling and no depth writes. The cutout and glass JSON files are intentionally byte-identical runtime state definitions despite separate names. No claim is made that their names alone establish distinct runtime shading.

The runtime color IWI is version 6 BC3/DXT5, **512x1024**, with a 28-byte header and 524,288-byte payload. It is byte-exact to the sealed authored runtime atlas, including cutout alpha tiles 13/26/27 and partial-alpha tile 30; orientation/alpha statistics are bound in the reused structural audit. Both custom IWI payloads are byte-exact to the corrected complete dump. No separate Alice IWD exists in this candidate; package IWD integration was not performed or claimed.

The Blender textured preview is an approximation, not an IW3 material renderer: its cutout threshold is 0.38 and its glass alpha is multiplied by 0.58, unlike the runtime source-alpha material state. Reused images are valid identity/geometry evidence, but not proof of exact engine blending, sorting, lighting or gloss. Live material acceptance remains outstanding. Opaque clay independently establishes the blocking geometry holes.

## OAT Closure And Package Budget

The interrupted review already completed the isolated OAT 0.32 link/list and a corrected complete dump. These were **reused, not rebuilt**, after candidate inputs, executable hashes, FF hash, render inputs/outputs and semantic source/dump bindings were checked. Link, list and corrected complete dump logs each finish with **0 warnings, 0 errors**. The exact nine-asset list contains one canonical `playermodel_xi_alice_4_1`, three materials, three images including the stock normal map, and two technique sets.

The first dump is retained as a failed diagnostic: its log has **two image-data errors despite exit code zero** because it omitted the candidate image search path. It is not counted as a successful dump. `oat/roundtrip_dump_complete` and `unlinker-dump-complete.log` are the closure evidence. The historical FF filename contains `round1`, but the sealed receipt's LOD1/LOD2 hashes are the Round2 hashes above; the filename is not the version authority.

Isolated FF: **814,685 bytes**, SHA-256 **81DB3C0A6BEAFB05DC4BF3B93E8A4C07A7ECA0A38D54BCCE587239B7C481D008**. All four normalized LOD geometry/influence comparisons and the canonical descriptor semantics pass. Position delta is zero. Maximum audited normal/UV/weight/local-bind/inverse-bind deltas are approximately 0.006895542 / 0.000488222 / 0.000045538 / 0.000009537 / 0.005043983, within the pre-existing serialized-roundtrip tolerances. OAT reorders its dumped joint array: name-based influence and parent/bind semantics match, but raw dumped joint order does not. Tangents are absent from the dumped GLBs; a tangent-channel roundtrip PASS is not claimed.

The authoritative `lead_current_package_projection/REPORT.md`, exact full-roster receipt, FF/IWD/config seals and existing budget/list replay all agree: **987 slots, 986 names, one map duplicate, 64 exclusive, cap 990**, for `mp_backlot`. Strict headroom is three slots. Runtime materials are 1,716/2,048; fastfile materials are 457/760. The package currently includes only Mace/Mara31 reviewed body replacements, not this Alice candidate. Keeping Alice's already-loaded canonical model ID gives a zero-XModel-delta projection; no integrated Alice build was performed. A later passing candidate still needs exact package material/image closure and live/user acceptance.

## Recovery, Noninterference And Release Requirements

Recovery reused all validated renders/audits whose bindings still matched, did not contact or recreate the missing reviewer, did not spawn subagents, and did not run any conversion. **171 existing evidence bindings** and **669 candidate manifest entries** validate. The **329 prior protected records** remain exact. A recovery before/after snapshot starts with **4,405 protected files** and ends with **4,406**, including candidate/source, prior critic evidence, production raw assets and outputs, current full-roster runtime/build outputs, source_data, tools/docs, origin inputs and the five stock Steam fastfiles. This is the enumerated scope, not a full-machine forensic claim. The dashboard was not accessed or written.

**Global no-external-change gate is NOT proven.** The snapshot detected two changed files and one addition outside this critic directory during recovery. No recovery tool action wrote these paths; their author is not established. They were left untouched. The changes are recorded, not erased or relabeled as harmless:

- `tools/Build-GhostIcrProving.ps1`: 100,557 to 102,437 bytes; SHA-256 `3CF85E18C02C7A1CECD8C2B2A55678B1DFC329F33399027F96581C582D69836C` to `A844047F999A19A9D35CB54E8BB35670BBD5AF58E4267A6A86DC0C0E437CBC3B`.
- `source_data/full_asset_proving_status_20260905.md`: 1,959 to 4,438 bytes; SHA-256 `1887B8A4ECA9C3B899FBDA1C8C4523A2A29E130B685E86CFC42918031D8F084E` to `86260788EB6CAE964CC70E5DDEF6E3560121A07DDBAC93ACC9032A0AF33BC80C`.
- Added `source_data/full_asset_stock_map_budget_20260905.json`.

See `evidence/machine/recovery-protected-after.json`. The other **4,403 pre-existing records are unchanged**, including every candidate/source file, prior critic file, package binary and enumerated Steam file. No tracked file was removed. The current package's 987/986 Backlot byte seals remain valid; the external build-tool edit does not turn Alice into an added XModel, nor does this review claim a new full-rotation package acceptance.

Every recovery write, including the four new failure-only renders, subprocess log/temp/config and final artifacts, is inside this critic directory. This critic performed no production/build-output/Steam deployment or modification. The unfinished verifier was repaired for its semantic-report schema and its mistaken exact raw-coordinate comparison; its passing *claim replay* remains subordinate to the concrete visual and expanded-pose failures. Existing partial audits and images were preserved.

Release requires a scoped LOD1/LOD2 correction that restores upper-arm and torso surfaces while keeping the successful shin protection, resolves the opposite-hip weight edge failure, and passes actual all-four-LOD/five-pose scrutiny with hash-bound OAT closure. Keep unaffected LOD0/LOD3, authored identity, materials/IWIs, canonical ID and the other seven skins/viewarms unchanged. Do not promote this candidate on the basis of lower-body IoU or the passing LOD0-only pose manifest.

`RESULT.json` records the independent HOLD. `SHA256-MANIFEST.json` binds this report, result, scripts and evidence, excluding only its own self-referential hash. **`promotion-manifest.json` must remain absent.**
