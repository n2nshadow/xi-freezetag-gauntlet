# Ghost Biker Round2: Five-Face UV Delta

**Narrow repair ready for independent review. Whole body remains HOLD.**

Only LOD2 cutout faces 69, 71, 72 and LOD3 cutout faces 54, 55 changed (zero-based primitive-local indexing). Two UV vectors, 12 actual changed bytes total. No new simplification, geometry, textures, material edits, motion work, build work, subagents or promotion.

## Authored Source Trace

The shared rogue corner at position `(-7.3187470436, 49.3534507751, 4.8064274788)` belongs to tile **35**, `mtl_c_t8_mp_spe_ruin_heist_vest_decal`, not tile 36 vest trinkets. Querying each affected face centroid against **all** source cutout triangles independently returns tile 35; source SMD face/line/UV records are in `metrics/source-trace.json`.

The reduced corner is not an exact authored vertex. Its closest source surface is cutout face **535**, vertices **407, 400, 401**, at distance **0.16604755196** stock-space units. This is original torso SMD triangle **4392**, material line **17632**, vertex lines **17633-17635**. Original UVs are `(0.998047,0.514404)`, `(0.999512,0.556396)`, `(0.978027,0.515381)`. Their atlas-packed UVs match the reference **bit-for-bit**. The original SMD and aligned reference both contain **561** vest-decal triangles; this material was not reduced in reference mode. The reference's opaque surfaces were reduced and are not full-source evidence.

The nearest point lies on the authored 407-400 edge with barycentric weights `(0.7278257260436863, 0.27217427395631366, 0)`. The repair interpolates those authored UVs and rounds once to float32. It does not clamp the bad atlas UV or hide it with alpha. The SMD-to-reference identity fit over 423 uniquely UV-matched vertices has maximum residual **0.00000628541** stock-space units. This is geometric source reprojection, not a claim to have recovered the historical decimator's exact collapse lineage.

## Exact Delta

Both edited UVs change from `(0.5027573108673096, 0.560598611831665)` to **`(0.4959115982055664, 0.5594726800918579)`**.

| LOD | Cutout Vertex | Incident Faces | UV File Offset | Actual Changed Bytes | Triangles |
| --- | --- | --- | --- | --- | --- |
| 2 | 103 | 69, 71, 72 | 418204 | 6 | 4500 |
| 3 | 88 | 54, 55 | 292052 | 6 | 3200 |

LOD0/1 remain byte-identical at **9637/7000** triangles and are dependency references, not copies. LOD2/3 retain every byte outside their respective eight-byte UV vectors: topology, positions, serialized normals/tangents, weights/joints, bind matrices, node hierarchy, material names/indices, JSON, unused data and all unaffected UVs. No face, vertex or triangle was added, removed or reordered. All **73,011 triangle corners** across four LODs were checked; cross-tile face counts are **0/0/0/0**, previously **0/0/3/2**. All affected corners are inside tile 35's existing padded content interval.

Sparse canonical resolution is recorded in `DEPENDENCIES.json`: `playermodel_xi_ghost_5_1`, existing descriptor/material/texture references, unchanged LOD0/1, and only two included GLBs. No production descriptor was written. Candidate payload is **882,352 bytes**.

## Runtime Evidence

The original **1024x1024 DXT5 IWI** is unchanged. Its payload is byte-identical to the critic's DDS payload; an independent Pillow DDS decode exactly matches the referenced PNG pixels. All texture and material dependencies are hashed. No source 2048 atlas was substituted.

Eleven actual EEVEE renders: eight LOD2/3 before/after views from two fixed close cameras, one same-camera source-decal reference, and front/back unchanged LOD0 identity controls. They read serialized GLB normals and UVs directly, with raw IWI alpha source-over for cutout/glass, no clipping threshold, opacity multiplier or armature evaluation. The five target faces are unclipped in every close comparison. These are **static diagnostics, not an IW3 depth/sort/lighting or motion acceptance claim**.

| Face | Mean Runtime Alpha Before | After | Samples Above 0.5 Before | After |
| --- | --- | --- | --- | --- |
| LOD2 69 | 0.008750 | 0.066460 | 0 | 522 |
| LOD2 71 | 0.211533 | 0.395216 | 5465 | 11148 |
| LOD2 72 | 0.105005 | 0.139380 | 2376 | 3158 |
| LOD3 54 | 0.008750 | 0.066460 | 0 | 522 |
| LOD3 55 | 0.218305 | 0.331076 | 5539 | 8755 |

Each row uses 25,600 deterministic uniform surface samples with mip0 bilinear RGBA. Decal support increases on every repaired face; none is erased. This measures mapping/alpha support, not raster visibility. Actual full-mesh render differences above two channel levels are 8402/7959 pixels for LOD2 close/oblique and 8300/7831 for LOD3. **Zero** changed pixels fall outside the target projected faces plus a three-pixel antialias margin.

## Review Images

[Raw before/after comparisons](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/before-after-runtime.png)

[Actual runtime atlas ownership plot](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/uv-ownership-runtime.png)

[Isolated affected-face RGBA comparison](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/isolated-face-alpha.png) (explicitly excludes body occlusion; complementary mapping evidence only).

[Source decal close reference](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/source-decal-close.png)

[Unchanged LOD0 identity front](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/identity-front-unchanged-lod0.png)

Raw PNGs and camera/target projection records remain individually available in `evidence/` and `metrics/render-receipt.json`; no retouched render replaces them.

## Remaining HOLD

Only the five demonstrable cross-atlas defects are repaired. The raw views still show substantial existing vest/decal occlusions and body openings; lower-leg/facet and reduced-helmet issues are untouched. The helmet/goggles/beard, patched biker vest, tattooed arms and cargo-pants identity remains the same Ruin - The Gateway (Heist) body, with no replacement identity or texture reassignment. Favorable static mapping does not clear the critic's material/depth/beard concerns or whole-body geometry findings.

Corrected evaluator calibration and motion acceptance remain lead-owned. No old five-pose gates were reused. Independent critic review, engine proof and user acceptance remain outstanding. Production/raw/Steam/build scripts, accepted viewarms, source assets, and frozen FF state were not written. Backlot987 and Vacant992(cap990) remain unchanged per user context, not remeasured here. **No promotion manifest or deployment was emitted.**

## Integrity And Reproduction

`SEAL.json` hashes every local artifact except itself; `DEPENDENCIES.json` pins external inputs. Verify with the referenced primary Python: `-B scripts/seal_delta.py --verify`. Reproduction order is `trace_source.py` in Blender 3.6 factory-startup, `repair_uv.py` in primary Python, `render_close.py` in Blender, `compose_review.py` then `seal_delta.py` in primary Python. Run from this round2 directory, disable Python bytecode, and set `TEMP`, `TMP`, `BLENDER_USER_CONFIG`, `BLENDER_USER_SCRIPTS` and `BLENDER_USER_DATAFILES` to its `scratch` directory. All generated outputs are scoped to round2; no source/tools/textures archive is copied.
