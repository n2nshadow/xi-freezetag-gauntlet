# Alice Rigor Body Round3 Independent Critic

## Decision

**PASS_TARGETED_STATIC_REPAIR.** The 7,000/4,500-triangle LOD1/LOD2 repair restores the missing authored upper arms and torso, preserves the protected lower body and identity, and passes fresh isolated OAT closure. This is a positive, bounded repair verdict, not a promotion or complete operator acceptance.

**Whole-body acceptance and production remain HOLD; live proof is OUTSTANDING. No promotion manifest is emitted.** The clearest remaining whole-body defect is the unchanged LOD3 ankle/foot loss described below. Incomplete engine composition is an additional proof limitation, not a reason to deny the demonstrated static improvement.

## Findings

1. **Closed, previous P1: missing middle-LOD upper body.** Both new LODs retain all 145 source arm-tile faces and all 288 source shirt-tile faces, with oriented topology, duplicate multiplicity, positions, normals, tangents, UVs, joint indices and weights exact. Round2 had zero arm-tile faces and only 151/101 shirt faces. The full-size opaque back views and four-angle before/after boards show continuous shoulder-to-forearm and torso coverage where the old meshes were visibly hollow. This is geometry restoration, not an alpha or framing change.

2. **P2, inherited, outside the two-file repair: LOD3 still loses substantial ankle/foot shape.** In the candidate's `evidence/clay/lod3-side.png`, background separates much of the coarse shin from a thin triangular toe/sole; the source side view has a continuous boot. Fresh corrected-v17 `renders/lod3-run.png` and `renders/lod3-crouch.png` retain this visibly broken/reduced foot presentation. The raw static clay needs no pose evaluator to expose it. LOD3 is byte-identical to Round2 and was expressly protected from modification, so this does not fail the scoped LOD1/LOD2 repair. It does preclude treating this packet as all-four-LOD whole-body approval. Hood, hand and accessory reduction also remain visibly coarse, particularly at LOD3.

3. **Corrected evidence, not a carried-forward animation failure.** The Round2 12.509918-unit / 56.287072x death numbers came from the invalid evaluator and are not acceptance gates here. Under the calibrated actual shared v17 implementation, that old mesh edge is 4.07855249 units / 18.35102175x. More importantly, the corresponding endpoint pair is **not an edge** in aligned source or either Round3 mesh. The builder's description of the new 0.354072 value as an edge length is imprecise: it is a point separation. Restoring the exact 180 source pants faces removes the old reducer's short bridge edge without repainting the source-authored opposite-hip weights. The split remains a motion-risk item, not proof that the old edge defect survives.

No remaining disappearing-upper-arm/torso defect or template-bone mismatch was found in the repaired LOD1/LOD2 scope. No beauty, all-operator, all-frame or live-engine approval is implied.

## Exact Inputs And Preservation

The candidate is `../alice_rigor_body_round3`, with a five-file runtime overlay and reference-only dependencies. Its seal contains **98 file records plus the seal itself: 99 physical files**. All 98 records and 26 input references validated. `input-seal.json` binds these and the reviewed tools/calibration inputs; `input-recheck.json` records the closing comparison.

| LOD | Triangles | Vertices | SHA-256 |
| --- | ---: | ---: | --- |
| 0, unchanged | 9761 | 10319 | A576E4C7BFC1B614FF400F58B20CEA269278B7FD9959AF7888DBA585EEC9884F |
| 1, repaired | 7000 | 7879 | 4B7CD1D4DEECFCFB87F2538AB3F5A628DB77F3C843482E3DD2CDB26457CB05D1 |
| 2, repaired | 4500 | 6089 | 73E5AF32125DD666F1F0E27355035478B4D861A80060A7B8166BB605E7838FC3 |
| 3, unchanged | 3200 | 4892 | 59B741EB46A61DBC98E2EB7628DF871F71C6D129B34FED02D77E119C7DAC5569 |

The unchanged canonical descriptor SHA-256 is `3F6026D6AC5410F3056E15EDD6C6F4054E9DE7E6DFC0295CBDDFBBB9E4000DB9`. It keeps `playermodel_xi_alice_4_1` and LOD distances **220 / 500 / 1200 / 1000000**. LOD0 and LOD3 are byte-exact controls, not newly repaired or newly approved geometry.

`geometry-audit.json` comes from a critic-local GLB parser and oriented full-attribute triangle counters, not just builder receipt replay. It establishes:

- Exactly **828 source faces** intersecting the lower 38% band survive in both new LODs, at source glTF-Y cutoff 27.6673762894, with complete attributes and multiplicity exact.
- All **31 atlas tiles** remain represented. All corners of every tested triangle belong to one tile. Arm/pants/shirt tiles 6/23/24 retain **145/180/288** exact source faces in both repaired LODs.
- Every retained new vertex has an exact aligned-source attribute row. This is not a claim that every simplified triangle elsewhere existed in source, or that the entire reduced surface is source-identical.
- All four raw LODs match the validated template's **51 bone names/order, actual hierarchy, local bind matrices and inverse binds exactly**. Skinning uses one to four positive normalized influences, with no invalid joint index or unweighted vertex. Exact skeleton compatibility does not certify anatomical weights.
- GLB chunk/accessor bounds, finite data, embedded buffers, material ownership, required attributes and index bounds pass. Only LOD1/LOD2 differ in the runtime overlay; the descriptor and reference-only material/image dependencies are unchanged.

The aligned classified source is SHA-256 `66556163AD199B058857BDA3FBFAF6FDCE8EE4DB2C21A4A3FE0E3357A00DBB8E` (10,705 triangles). The native template is `98C99FF6CB672629B5500D8C0DA8529520E63EB2273A19CFD84793C645EC56C6`. Original 118-joint authored source is `6B68A7695039735B1133C72066A6118665DF63A58EA7278BC389C48CA56386A0`.

## Fresh OAT Closure

A new **one-model** OAT 0.32 link/list/dump was performed inside this critic directory. No full package build was performed. Final link, list and selective XModel/material dump finish with zero warnings and errors. The fresh FF is **798,476 bytes**, SHA-256 **5B118C8CB80826C0E0B67826DB209FB3198A0288133B637CC737CEAEA89CF8BA**.

Its actual list has exactly nine concrete assets: one canonical XModel, three named materials, three images including stock `$identitynormalmap`, and two technique sets. This remains a **slot-neutral replacement**, not another slot-saving claim or an integrated pool count.

The search path deliberately exposes Round2's **materials/images only** through directory junctions, plus the new Round3 overlay. Supplying both complete raw roots initially allowed OAT's search ordering to select the old mesh; that harness trial was rejected. Final dumped positions/topology/attributes and surface counts prove the linked mesh is the new candidate, not merely an asset with the same name and triangle count. The prior sealed 814,685-byte isolated FF is loaded only for stock technique sets and identity normal map; its historical `round1` filename is not used as version authority.

`roundtrip-audit.json` verifies all four actual dumped LODs. Oriented position triangle multisets and multiplicities are exact, with zero position delta. Seam/coincident vertices are matched by face attributes and named bone influences, not a position-only map. Maximum normal / UV / named-weight / local-bind / inverse-bind deltas are approximately **0.006895542 / 0.000488222 / 0.000045538 / 0.000009537 / 0.005043984**, within the declared serialization tolerances 0.008 / 0.0005 / 0.00006 / 0.00002 / 0.006. OAT reorders joints; name-based rig semantics pass. The descriptor JSON is exact. Dumped GLBs omit tangents, so **no tangent roundtrip PASS** is claimed; raw-source tangent preservation is independently exact.

`dependency-closure.json` verifies all three freshly dumped material definitions byte-exact against the sealed canonical prior complete dump, including actual texture and technique-set references. Opaque uses `mc_l_sm_r0c0s0`; cutout/glass use `mc_l_sm_b0c0s0`. The two existing custom IWIs are byte-exact to their sealed prior complete dump and match the Round3 dependency-reference manifest: color **524,316 bytes**, `976798D4DEDBDFAB30FB565EDF601F099F49995906D8C468811DB47FE8C50CF6`; specular **44 bytes**, `6525D68B2B4269CBD816F8F6BFEC861B09DAA0BF56BEEA43D61934E8172015BF`. Version-6 headers, dimensions and payload lengths were checked. Their fresh FF names and material references resolve correctly. No duplicate texture payload was created; no IWD integration or fresh texture extraction is claimed.

## Actual Visual Review

Reused images are valid because their candidate, source, texture, render metadata and output bytes match the frozen seal. Personally inspected all five Round3 static comparison/identity sheets, selected full-size source/new LOD2 textured fronts, old/new LOD2 opaque backs, and source/LOD3 opaque sides. The four-angle boards cover all four LODs. These are labeled source/before/after views, **not blind A/B evidence**.

The intended Alice41 **Crash - Rigor Mortis** source identity remains recognizable: hood, mask/eyewear, visible lower face, long coat, red belt accents and shoulder/forearm adornments remain. LOD2 is visibly simplified in hood, fingers and small accessories. Source textured previews establish identity/material ownership, not exact game alpha, IWI decoding, gloss or lighting. Opaque two-sided clay independently establishes the missing-body repair and inherited LOD3 foot defect.

Fresh focused diagnostics comprise **29 PNGs**, not an all-roster render set: 24 shared-camera bind/run/crouch/death views plus five elevated death views of source, old LOD2, compiled LOD1/2 and stock. The original horizontal death view was too foreshortened for useful local review; the extra elevated angle was actually inspected. `run-comparison.jpg`, `crouch-comparison.jpg` and `death-elevated-comparison.jpg` show the repaired compiled torso/arms remain present in those selected articulations. Selected full-size PNGs were inspected as recorded in `visual-review.json`. The stock control has native open neck/sleeves; these are not new pose failures. The source and Alice models retain coarse coat folds and shoulder/accessory spikes that opaque clay emphasizes.

All new frames passed nonblank alpha/pixel-border checks with shared framing and no clipping. Those checks certify render integrity only. Blender used factory startup, two threads, computed smooth normals and opaque two-sided material; it is not an IW3 shader or engine-frame renderer.

## Corrected Pose Diagnostics

The actual shared `tools/oat_body_pose.py` and `compiled_xanim.py` match the independently calibrated hashes **73C6F59BA93AAAA2B1FFADB90EAF93E7D29AF8A4B0F4C844A5FAF92F4082FB39** and **ADE7AC6EF4963DCA7FDE0D689793E695477442162C7314195754CD8784DEA4AD**. The reviewed engine/OAT source fingerprints and independent landmark/stream tests were reused, not replaced by builder expectations or a copied evaluator. Replaying that actual-module suite yields **13 passes plus two expected failures**, not 15 passes: out-of-scope v19 IK flags and sub-0.0035-degree per-key float reconstruction precision. All diagnostic clips here are gated to v17.

Relevant corrected math includes OAT left global basis conversion with cancellation in child locals, half quaternions on Z/W, explicit NO_QUAT identity distinct from absent tracks, child bind offset plus animation delta, absolute root translation and one-time raw-range scaling. The critic independently skins each model from shared world matrices and inverse binds. Root recentering removes rigid root rotation and translation; pictures do not prove world trajectory or ground contact.

`pose-diagnostics.json` covers **60 cases**: source, stock, four new raw LODs, both old middle LODs, and both fresh compiled middle LODs, each at bind plus five frozen samples. These are idle F63, run F6.72, crouch F142.5, partial fire F6.3, and death F43.46. Every retained raw LOD1/LOD2 vertex poses exactly like its corresponding aligned-source row in all six cases: **12 comparisons, maximum delta zero**. This checks the reducer did not alter their weights or motion; it does not certify all connecting faces, all frames or game composition.

The hip endpoints are source 9200/9208, old LOD1 6812/6815, old LOD2 4816/4819, new LOD1 6589/6597 and new LOD2 4918/4926. Original authored vertices 9893/9901 already favor opposite hip twists at 76.0784% right / 81.6224% left; the aligned source's existing weight floor changes the latter to 80.8022%. This source split is not fixed or smoothed here. New/source endpoint separation is 4.04196388 at death, but there is no direct edge between them. Actual maximum death edge ratio is **5.23855442** in source and both new raw LODs, **5.23908605** after compile, versus **18.35102175** in both old middle LODs. No stock-relative universal strain threshold is invented: clothing edge lengths and a point-pair distance are not interchangeable anatomy tests.

Missing engine layering, partial-clip bases, controllers, IK, ragdoll, locomotion and live materials remain limitations. In particular, the standalone partial firing clip is not a composed player firing stance. The corrected selected samples reveal no new upper-body disappearance; they do not resolve every inherited source-weight/cloth risk. Whole-body HOLD is also supported by the concrete unchanged LOD3 defect, not just missing animator completeness.

## Negative Checks And Isolation

All **11** in-memory negative checks reject their targeted mutations: remove arms, remove a protected lower-band face, reverse protected winding, duplicate a face, alter each normal/tangent/UV/weight/joint attribute, shift a template bind and substitute same-count old LOD2. No candidate or source file was mutated. This does not claim exhaustive fault injection.

All writes, including scripts, FF/dump, pose fixtures, Blender temporary/config files, logs and final packet, remain beneath this critic directory. No subagents, production/source edits, shared-tool edits, full build, Steam access or deployment were performed. The signed Family01 critic packet is included as read-only records and remains unchanged. This review does **not** freeze mutable loader, full-build or runtime directories. Lead-owned loader/build output changes are authorized and are not a concurrent-change alarm.

Integrated pool/budget acceptance is **pending the current lead rebuild and retained all-18-map gate**. Historical Backlot 987 / Vacant 992 / cap 990 are context only, not current rebuild results. No current full FF/IWD pin was taken for this Alice review, and no broader package acceptance is inferred from a nine-asset isolated FF.

`RESULT.json` records the scoped static PASS and separate whole-body/production/live holds. `SHA256-MANIFEST.json` binds the completed report, result and physical critic evidence without a circular self-hash; `MANIFEST.sha256` anchors that seal. Dependency junction targets are recorded as references and are excluded from physical output enumeration. This packet authorizes no automatic install or promotion.

## Reproduction

Use the bundled primary Python with `-B` to run `audit.py geometry roundtrip calibration pose_diagnostics closure_details negative_tests`. Fresh compilation is `audit.py compile`, using the materials/images-only junction targets recorded in the seal. Focused renders are `audit.py render render_elevated visual_qa elevated_qa`, using installed Blender 3.6. Do not rerun write stages inside a sealed packet; reproduce in a separately authorized critic workspace with the same pinned inputs. No full build is needed for these checks.
