# Ghost Biker UV-Only Round2 Independent Critic

## Disposition

**Scoped 12-byte UV repair: PASS. Whole body, live proof and production: HOLD. No promotion.**

No factual blocker was found in this narrow repair. The five Round1 G3 cross-atlas faces are corrected using independently verified authored vest-decal ownership and reprojection. No geometry, weights, textures, material settings or other candidate bytes changed.

**This does not mean the vest appearance is fixed.** The actual bound before/after images retain large dark vest polygons occluding the decal. Increased alpha support proves only that the UV repair is not an erasure workaround. The most meaningful follow-on gap is the reduced vest/decal layer relationship, with concrete depth reversals against the actual raw authored torso detailed below.

## Biggest Remaining Gap

The large dark regions are not adequately explained as harmless source-authored overlap or only an alpha/sorting artifact. Six local pixel-center rays were reconstructed from the bound LOD2 close camera; five cross both vest and decal, and one is a plain-vest control. Camera projection replay agrees with the recorded target triangles to `0.000398` pixel. The first opaque candidate hit at each of the five issue probes is tile 34, the base vest.

For authored ground truth, the probe uses **all 2,838 raw torso vest triangles and 561 raw decal triangles**, not the reduced reference. Raw positions are transformed by the independently verified raw-decal-to-aligned-GLB affine transform. This is a bounded geometry comparison, not a newly rendered full-source body or a claim about the authored game shader.

Depth below is vest minus decal along the camera ray: positive means vest behind decal; negative means vest occludes it. Units are aligned model units.

| Pixel in 900x900 LOD2 close image | Actual authored torso | Reduced 0.12 reference | Round1 LOD0 | Round1/Round2 LOD2 |
|---|---:|---:|---:|---:|
| (175,190) | +0.043054 | +0.105252 | +0.081400 | -0.078623 |
| (270,420) | +0.042233 | -0.036830 | +0.029988 | -0.186161 |
| (150,610) | +0.075456 | +0.155488 | +0.072156 | -0.194494 |
| (230,740) | +0.041691 | +0.099334 | -0.022640 | -0.039996 |
| (320,180) | +0.041195 | -0.016989 | +0.015507 | -0.104304 |

All five sampled authored layer orders are reversed in LOD2, identically before and after this UV edit. The reduced reference itself reverses two probes, confirming why it cannot excuse these regions as author-intended overlap. Its vest has only **340** triangles; Round1 LOD0 has **810**; Round1/Round2 LOD2 have **296**, with **93** decal triangles. The raw author has 2,838/561. Counts identify the representations, not a triangle-count quality rule.

The cause is **reduced geometry on both layers**, not exclusively the base vest:

- At `(150,610)`, the reduced decal lies `0.268169` behind even the actual authored vest. The reduced vest remains `0.149131` behind the raw decal. This probe implicates reduced decal placement, not a base-vest-only explanation.
- At `(230,740)`, the reduced vest lies `0.027219` in front of the raw decal, while the raw vest remains `0.028914` behind the reduced decal. This probe implicates base-vest geometry.
- At `(270,420)`, both mixed controls reverse order. The raw and candidate decal samples there have runtime alpha **1.0**, so this is not transparent texels removing the patch. Alpha is also 1.0 at `(150,610)`.

Builder entry points, zero-based primitive-local indices: LOD2 opaque vest faces **170, 202, 175** occlude cutout decal faces **59, 62, 79, 74** at these probes. These are **not** the five repaired UV faces. The JSON records exact face IDs, raw SMD triangle/material-line IDs, hit barycentrics, positions, and mixed depth controls. See [vest-layer probes][layers] and [actual LOD2 image][lod2-image].

**Follow-on:** preserve the authored vest/decal separation together through reduction, then inspect actual runtime-IWI views. Do not hide these polygons with alpha changes or call them authored solely because the reduced reference also has losses. No mesh repair is attempted here.

Material/depth remains a separate proving limit. The unchanged cutout contract uses source-alpha blending, `depthTest=less_equal`, `depthWrite=false`, `alphaTest=gt0`, and normal passes with `polygonOffset=offset0`. The bound EEVEE renderer uses serialized normals/UVs and raw source-over alpha without the old CLIP threshold or glass multiplier, but it is not an IW3 depth/sort/shader emulator. Shader fidelity still needs proof. However, the measured geometric depth reversal exists without any shader and is a concrete contributor, not merely a material hypothesis. Six local rays do not certify every vest region, LOD or motion frame.

## Exact UV Scope

All 30 Round2 sealed files and 35 dependency records verify. Candidate payload contains only the two changed GLBs; canonical LOD0/1, descriptor, materials and textures remain dependency references.

| LOD | Cutout vertex | Incident faces | Eight-byte UV vector starts at | Actual changed bytes | Triangles |
|---:|---:|---|---:|---:|---:|
| 2 | 103 | 69,71,72 | 418204 | 6 | 4,500 |
| 3 | 88 | 54,55 | 292052 | 6 | 3,200 |

Both vectors change from `(0.5027573108673096, 0.560598611831665)` to `(0.4959115982055664, 0.5594726800918579)`. Every actual byte difference lies in those two float32 `TEXCOORD_0` vectors. All other GLB bytes, including JSON, positions, topology, normals/tangents, joints/weights, hierarchy and bind matrices, are exact. No vertex or face was erased, added or reordered. LOD0/1 remain exact at 9,637/7,000 triangles. The sparse candidate totals 882,352 bytes.

Independently checked **all 73,011 triangle corners**: per-LOD cross-tile faces change from `0/0/3/2` to **`0/0/0/0`**. No [0,1] clamping was used to hide ownership violations. All affected corners are within tile 35's padded content bounds. This closes the specific serialized G3 defect, not all of Round1's G3 silhouette findings. [Exact bytes and corner checks][scope].

## Independent Authored Reprojection

The original Round1 critic correctly identified vest-decal tile 35 crossing into vest-trinket tile 36. This review searches **all source cutout triangles geometrically**, not a set chosen from the repaired UV. Every affected face centroid and every corner finds tile 35, including the rogue shared position. All five faces have the intended authored material owner.

All **561** aligned-reference decal triangles uniquely match raw SMD corner UV triplets; no opaque-reference fidelity assumption is involved. An affine fit trained on 281 faces predicts the other 280 faces with maximum position error `0.0000064543174` model units. The generic closest-point predicate also passes independent known interior and edge controls.

The shared point `(-7.3187470436,49.3534507751,4.8064274788)` projects onto source cutout face **535**, vertices **407/400/401**, distance `0.166047551956`, edge barycentrics `(0.727825726044,0.272174273956,0)`. That face uniquely resolves to actual torso SMD triangle **4392**, material line **17632**, vertex lines **17633-17635**, material `mtl_c_t8_mp_spe_ruin_heist_vest_decal`. Its packed source corners are bit-exact against the aligned reference. Barycentric interpolation followed by one float32 result rounding independently produces **the exact candidate UV bytes** in both LODs.

This is justified nearest-authored-surface reprojection of a reduced corner, not recovery of the historical decimator collapse lineage or proof that every reduced decal triangle preserves the original shape. [Source-corner evidence][source].

## Runtime And Image Checks

The unchanged IWI is **1024x1024 DXT5**, 1,048,604 bytes, SHA-256 `0EFDC93B3ABB11FB4D294A70DF133505B12956EE2CA0CF333AA49E6CC0014FB4`. Its raw block payload exactly equals the referenced DDS payload. A Pillow DDS decode equals every RGBA pixel of the bound PNG. A separate raw DXT5 alpha-block decoder independently matches **all 1,048,576 alpha pixels**. The 2048 source atlas was not substituted.

Using 9,216 independently stratified equal-area samples per face and mip0 bilinear runtime RGBA, mean alpha before/after is approximately:

| Face | Before | After |
|---|---:|---:|
| LOD2 69 / LOD3 54 | 0.00850 | 0.06629 |
| LOD2 71 | 0.21149 | 0.39521 |
| LOD2 72 | 0.10500 | 0.13941 |
| LOD3 55 | 0.21824 | 0.33098 |

Every face increases support, including with the OAT-packed UVs. **This rejects alpha erasure as the repair mechanism; it does not prove that an occluded decal is visible or that appearance passes.** Textures and material dependencies are unchanged. [Raw IWI checks][iwi].

OAT's IW3 loader uses `Vec2PackTexCoordsVU` and its truncating `HalfFloat` conversion. A positive-normal representation replay was independently checked against **every one of the 73,011 baseline UV corners in the existing actual OAT dump**, bit-exact. The repaired packed word changes `3805387C -> 37EF3879`; decoded UV changes `(0.50244140625,0.560546875)` to `(0.495849609375,0.55908203125)`. The latter remains in padded tile 35; replayed four-LOD crossings remain zero. No new compile or full-model OAT build was needed. This is delta-format proof, **not** a newly built Round2 fastfile. [OAT packing replay][packed].

Actually inspected all eight bound LOD2/3 close/oblique before/after PNGs, the same-camera reduced source control, and the three comparison/ownership/isolated-alpha boards. These are **12 existing images**, not fresh critic renders; no blind comparison is claimed. LOD0 identity is unchanged and was not regraded. The raw images show a localized decal-edge adjustment while large flat dark regions remain unchanged across it. All 11 raw render input/output receipts verify; opposing pair cameras match. Changed pixels above two channel levels are `8402/7959` for LOD2 close/oblique and `8300/7831` for LOD3, with zero outside the target faces plus a three-pixel antialias margin. This confirms locality, not an appearance PASS. [Bound render checks][renders], [before/after board][board].

## Limits, Context And Isolation

Whole-body leg continuity, helmet/beard/material fidelity, corrected motion, live gameplay and user proving remain HOLD/pending. None was broadly rerun. The prior sealed pose review, old source/vendor scripts and previous critic reports are retained; shared math is read-only.

Current lead context is **985/990 full-model slots, all 18 shipped maps passed after pack integration**. This supersedes the historical map-count notes in the sealed Round1/Round2 reports. It is user-supplied integration context, not remeasured here and not a new slot claim from the UV repair. The canonical identity remains `playermodel_xi_ghost_5_1`.

Only this new critic directory was written. No source/candidate/shared/production/build/deploy/Steam/viewarms edits, new renders, builds, subagents, full tool/source copies or promotion manifest. Read-only generic GLB decoding was reused; ownership, raw-source fitting, reprojection, exact-byte, raw-alpha and local depth checks are critic-local. Input seals are checked again at completion. This is reviewed-input integrity and configured write isolation, not an OS-wide write-history claim.

Machine verdict: [RESULT.json][result]. Final input checks and critic seal: [final checks][final], [SHA256SUMS.txt][seal].

[layers]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/vest-layer-probes.json
[lod2-image]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/lod2-close-after.png
[scope]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/exact-scope.json
[source]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/source-reprojection.json
[iwi]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/runtime-iwi-check.json
[packed]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/packed-uv-replay.json
[renders]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/render-binding-check.json
[board]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2/evidence/before-after-runtime.png
[result]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/RESULT.json
[final]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/final-input-check.json
[seal]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/ghost_biker_body_round2_critic/SHA256SUMS.txt
