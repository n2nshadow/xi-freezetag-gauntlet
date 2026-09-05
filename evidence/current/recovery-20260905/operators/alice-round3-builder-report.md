# Alice Rigor Body Round3

## Disposition

**Ready for independent static review. Production remains HOLD.** This is builder-owned evidence, not a promotion, independent approval, or animation acceptance. No subagents were used. Every write in this task was confined to `alice_rigor_body_round3`.

The immediate missing-upper-body repair is implemented. LOD1/LOD2 now retain the entire source arm tile 6 and shirt tile 24, including continuous shoulder-to-forearm and torso surfaces, while keeping the successful protected shin/foot geometry. The opposite-hip weight split is confirmed in the original authored source and deliberately remains unresolved, as detailed below. Motion calibration stays lead-owned.

## Exact Candidate

| LOD | Triangles | Vertices | Bytes | SHA-256 |
| --- | ---: | ---: | ---: | --- |
| 0, unchanged | 9761 | 10319 | 778296 | `A576E4C7BFC1B614FF400F58B20CEA269278B7FD9959AF7888DBA585EEC9884F` |
| 1, repaired | 7000 | 7879 | 627716 | `4B7CD1D4DEECFCFB87F2538AB3F5A628DB77F3C843482E3DD2CDB26457CB05D1` |
| 2, repaired | 4500 | 6089 | 483840 | `73E5AF32125DD666F1F0E27355035478B4D861A80060A7B8166BB605E7838FC3` |
| 3, unchanged | 3200 | 4892 | 369884 | `59B741EB46A61DBC98E2EB7628DF871F71C6D129B34FED02D77E119C7DAC5569` |

The review overlay is `candidate/zone_raw/xi_ftag`. It contains four GLBs and the byte-identical canonical descriptor. The only changed runtime assets are LOD1 and LOD2. The three material definitions, two IWIs, and three texture-source files are **not copied**: `metrics/dependency-references.json` resolves their unchanged round2 paths and hashes. This is not a standalone installable package.

Full aligned classified source: `66556163AD199B058857BDA3FBFAF6FDCE8EE4DB2C21A4A3FE0E3357A00DBB8E`, 10,705 triangles. Original 118-joint body: `6B68A7695039735B1133C72066A6118665DF63A58EA7278BC389C48CA56386A0`. Source archives are referenced, not duplicated.

## Reduction And Retention

The new local builder uses meshoptimizer 1.2.0 index-only, attribute-aware reduction. It neither moves retained vertices nor interpolates their UVs, normals, tangents, joints, or weights. Output joint indices use uint16 storage; their values are unchanged. Geometry is partitioned by authored atlas tile. True UV seams carry preservation tags; coordinated seam collapses are allowed, normal-only splits may reduce, and no component pruning is enabled. Every source UV island has an anchored source triangle. Assembly verifies that each output face belongs to one original island and that none of the 1,088 islands vanishes. [Reducer API documentation](https://github.com/zeux/meshoptimizer/blob/master/js/README.md#simplifier).

All vertices incident to source faces intersecting the lower 38% vertical band are locked. The source-local glTF-Y cutoff is **27.6673762894**. All **828 protected source faces** survive exactly in both repaired LODs, including full vertex attribute values; none is missing. This is stricter than a lower-band vertex-count check.

An initial discarded all-boundary-lock trial stopped at 7,043 triangles. `metrics/unreachable-lod1.json` is that historical diagnostic, not the final method or final result. The final method above allows coordinated UV seam reduction and anchors island survival. A clean deterministic source rebuild reproduced both final candidate hashes; see `metrics/rebuild-replay.json`.

Tiles 6 (arms), 23 (pants), and 24 (shirt) retain all source faces: **145 / 180 / 288** respectively, in both LOD1 and LOD2. Round2 had **0 / 145 / 151** at LOD1 and **0 / 145 / 101** at LOD2. LOD0/LOD3 arm counts remain **49 / 18**, because those files are immutable controls.

The budget is redistributed across the other tiles, including unprotected cutout/glass geometry, not their textures or material ownership. Runtime primitive counts, opaque/cutout/glass, are **6390/494/116** for LOD1 and **4060/361/79** for LOD2. Identity floors preserve additional face, hood, mask and hand detail. LOD2 retains 295 face, 133 hood and 133 mask triangles; it remains visibly coarser than source.

`metrics/per-tile-retention.csv` covers all 31 tiles: source and old/new counts, source/output area ratios, retained-island counts and measured same-tile source-distance samples. `metrics/static-geometry-audit.json` independently reparses final GLBs, verifies every repaired vertex is an exact source attribute row, all-accessor finiteness, four normalized influences, positive floor approximately 0.0102, uint16 indices, all-corner tile classification, material assignment, and the exact 51-joint stock bind contract.

The finite-sample largest same-tile source-to-output distances are **0.854576 units** at LOD1 (shoulderpad tile 25) and **2.353975 units** at LOD2 (gauntlet-straps tile 17). These are measured residuals, not hidden behind the reducer's approximate 0.75/1.5 error parameters. Samples include each triangle's vertices, edge midpoints and centroid; they are **not certified Hausdorff bounds or percentages of lost surface**. Arm, pants and shirt faces are exact. Smaller accessory detail loss remains visible and reviewable.

## Actual Visual Evidence

There are **56 fresh full-size 720x960 PNG renders**: source, all four final LODs and both round2 middle LODs, each at front/three-quarter/side/back, in clay and textured modes. No inherited render is relabeled as a new candidate. Images use raw GLB bind positions, **no skin/pose evaluator**. All seven subjects share the same camera per view, fitted to their union bounds and checked by actual projection. Every image is nonblank, has zero foreground border pixels, and retains a measured canvas margin.

- `evidence/all-lods-clay.jpg`: all four LODs, four angles; every surface opaque with backface culling disabled.
- `evidence/all-lods-textured.jpg`: all four LODs with unchanged source atlas ownership.
- `evidence/source-before-after-clay.jpg` and `evidence/source-before-after-textured.jpg`: source / round2 LOD1 / round3 LOD1 / round2 LOD2 / round3 LOD2.
- `evidence/identity-upperbody-detail.jpg`: explicitly labeled crops from complete front views, showing source / round2 LOD2 / round3 LOD2.
- `evidence/clay/` and `evidence/textured/`: full-size originals. `metrics/static-renders.json` binds every GLB, texture, camera and PNG hash; `metrics/pixel-qa.json` binds the measurements and sheets.

All five comparison sheets and selected full-size source/new LOD2 images were actually inspected. The formerly open torso and shoulder/forearm gaps are restored in both middle LODs. Continuous shins, boots and feet remain. The hood, mask/eyewear, visible lower face, long coat, red belt accents and forearm adornments retain the intended Crash - Rigor Mortis identity. The LOD2 hood and small accessories are visibly simplified; this is not a claim of source-identical appearance. The immutable LOD3 retains its pre-existing coarse foot and head shapes.

| View | LOD1 full clay IoU vs source | LOD2 full clay IoU vs source |
| --- | ---: | ---: |
| Front | 0.99612 | 0.98853 |
| Three-quarter | 0.99355 | 0.98210 |
| Side | 0.99401 | 0.97443 |
| Back | 0.99612 | 0.98857 |

Fixed upper-body rectangular ROI minima improve from round2 **0.82920/0.80154** to round3 **0.98615/0.95693** for LOD1/LOD2. The declared shin/foot ROI is 1.0 in all four views for both repaired LODs. These corroborative pixel measurements use new framing and source reference; they are **not directly comparable to the critic's old 512x960 ROI values**, do not establish watertightness, and do not override local image inspection.

The textured preview uses the existing authored runtime-source PNG and Blender source-alpha blending on cutout/glass. It does not prove exact DXT5/IWI decoding, engine transparency sorting, normals, lighting or gloss. Gray clay removes texture/alpha explanations for geometry holes.

## Opposite-Hip Evidence

The critic's exact recorded edge is retained in its hash-bound `recovery-all-lod-pose-audit.json`: round2 concatenated vertices 6812/6815 and 4816/4819. The historical posed lengths/ratios are not new acceptance gates. The lead has identified a shared evaluator that also incorrectly deforms stock; this task never executed or modified it.

`metrics/hip-source-correspondence.json` traces both endpoints to aligned source vertices **9200/9208**, original 118-joint body vertices **9893/9901**, and new vertices **6589/6597** (LOD1), **4918/4926** (LOD2). The first round2 endpoint's UV and position were moved by its reducer while its weights remained source-derived. Provenance uses an exact weight row plus nearest same-tile UV, then exact aligned-source UV correspondence to original and final meshes; the actual UV drift is recorded.

Original source endpoint 9893 already assigns **76.0784% right hip twist**; endpoint 9901 already assigns **81.6224% left hip twist**. The aligned source's existing weight-floor adjustment makes the latter **80.8022%**, with the small `j_hip_le` influence at 0.0102. This discontinuity is therefore not introduced solely by the round2 decimator or a demonstrated cross-island weight donor error.

Round3 restores the aligned source positions and keeps the source pants faces. Direct raw-GLB bind edge length changes from **0.2221476801** to **0.3540723691** units. The fresh raw round2 value differs slightly from the critic's old evaluated-bind **0.2222520657** and is not substituted for that historical measurement. The full weight-vector L1 difference remains **1.5031108307**. **The weight split is not fixed.** Smoothing or swapping sides would repaint authored source data without evidence that the change is correct. No improved animated strain number, five-pose PASS, or motion acceptance is claimed.

## Scope And Remaining Gates

All 26 enumerated input references were re-hashed against the saved input manifest. No referenced file changed. This is not a full-repository concurrent-change audit. Production/raw, Steam, build scripts, accepted viewarms, other operators, shared evaluator and current package outputs were not written. No game/OAT build, install or launch was performed. Previous round2 OAT results do **not** validate these changed GLBs; fresh OAT closure remains outstanding.

The frozen user-supplied full FF context remains **Backlot 987, Vacant 992, cap 990**. Vacant is still over that cap. The canonical Alice replacement remains slot-neutral; no integrated build or new pool arithmetic is claimed. Old 993 arithmetic and the critic's earlier Backlot-only budget narrative are not current all-map acceptance.

Independent static review, calibrated lead-owned motion evaluation (including this authored hip split), fresh OAT closure, any later authorized integration, engine/material checks and user acceptance remain open. **No promotion is emitted.**

## Reproduction

The scripts and pinned meshoptimizer module/license are local. Use the bundled Blender 3.6 Python for `prepare.py` and `assemble.py`, Node for `simplify.mjs`, and the bundled primary Python with Pillow for `compose_qa.py` and `seal.py`. Run Python with `-B`. Run in order:

1. `scripts/prepare.py`
2. `node scripts/simplify.mjs`
3. `scripts/assemble.py`
4. `scripts/run_render.py` (invokes Blender with scoped temp/config paths)
5. `scripts/run_render.py audit_geometry.py`
6. `scripts/compose_qa.py`
7. `scripts/seal.py`

`scripts/replay_build.py` reruns steps 1-3 and records exact before/after hashes. It is optional for reproducing the final images.

Scripts resolve their root from their own location; writes are restricted to this directory. Large temporary simplification JSON is reproducible and omitted from the final compact bundle. `SHA256-MANIFEST.json` seals the report, result, candidate and evidence, excluding its own self-hash.
