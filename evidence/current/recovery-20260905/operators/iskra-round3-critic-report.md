# Iskra61 Operator Body Round3 Independent Critic Report

## Verdict

**HOLD**

Round3 clears the checksum, provenance, semantic identity, GLB structure, skeleton, LOD, material, image, descriptor, and OpenAssetTools offline gates. It does not clear the required no-floating-parts gate. Twelve high-confidence distant render clusters are model geometry from opaque atlas tile 34, and each cluster's nearest projected triangle is rigidly weighted to `j_mainroot`.

The same clusters are present in the sealed Round2 predecessor, so this defect is inherited rather than introduced by Round3. Inheritance does not satisfy the acceptance bar.

- Sealed proving package eligible: **No**
- `promotion-manifest.json`: **Not created**
- Production release: **HOLD**
- Live engine and user testing: **Outstanding**

## Gate Summary

| Gate | Result | Independent evidence |
|---|---:|---|
| Round3 checksum seal | PASS | 469 expected entries, 469 actual files excluding `SHA256SUMS.txt`, no missing, extra, or mismatched file |
| Sealed Round2 provenance | PASS | 701 checksum entries verified; `DELIVERY_MANIFEST.json` SHA-256 matches the expected sealed digest |
| Predecessor scope | PASS | Embedded Round2 candidate matches the sealed predecessor byte-for-byte; only four candidate LOD GLBs changed |
| Exact Kitty Six identity | PASS | Blind and revealed multi-view inspection preserves the full-body silhouette, hair split, ears/headphones, clothing, backpack, holster, and material palette |
| `676/373/1` versus `332/356/12` semantics | PASS | Raw authored SMDs prove these are the hair shell and white Kitty Six assembly, respectively |
| Candidate GLB structure | PASS | All 15 GLBs parse; no invalid indices, repeated-index triangles, geometric zero-area triangles, non-finite attributes, zero normals, unweighted vertices, excessive influences, invalid joints, or bad weight sums |
| Skeleton and LOD contract | PASS | Four runtime LODs have 51 joints and the stock name-to-parent hierarchy; totals are exactly 28,499 / 22,000 / 15,000 / 10,000 triangles |
| White Kitty Six preservation | PASS | Every Round3 LOD contains the complete 332-triangle / 356-vertex / 12-component assembly |
| Materials and images | PASS | Material contracts match source and OAT; all 150 PNGs decode; DDS/IWI headers and diffuse payload closure pass |
| OAT build and semantic roundtrip | PASS | Three logs report zero warnings and zero errors; fastfile is nonempty; candidate-to-dump geometry and skin deltas remain within explicit tolerances |
| No detached rendered geometry | **FAIL** | 12 distant tile 34 / `j_mainroot` clusters render in idle, crouch, and death poses |

## Semantic Resolution

The numeric selector dispute is resolved from the actual authored source under `iskra_kitty_body_round1/source/raw`, not inferred from appearance.

### Visible white Kitty Six

Authored material `xmaterial_9649e4a90f0f44e` has:

- 332 triangles
- 356 full-signature vertices
- 12 indexed authored components
- 1 position-welded assembly
- Authored weighting to `j_charm`

The Round3 runtime copy has the same `332 / 356 / 12` topology in every LOD, is one position-welded assembly, and is rigidly mapped to the available CoD4 joint `j_shoulderraise_le`.

### The `676 / 373 / 1` selector

Authored material `mtl_c_t8_mp_spe_seraph_head1_hair_hairshell` has:

- 676 triangles
- 373 full-signature vertices
- 1 indexed component
- Head-region bounds, including authored Z from 62.238174 to 70.919189

The largest cutout island in Round3 follows the expected hair-shell LOD sequence:

| LOD | Triangles | Vertices | Components |
|---:|---:|---:|---:|
| 0 | 676 | 373 | 1 |
| 1 | 521 | 295 | 1 |
| 2 | 384 | 225 | 1 |
| 3 | 257 | 157 | 1 |

Therefore, `676 / 373 / 1` identifies the head hair shell. It is not the visible white Kitty Six accessory.

The separately named authored doll material, `mtl_c_t8_mp_spe_seraph_superhero_doll`, is also not the white accessory: it has 1,068 triangles, 860 full-signature vertices, 25 indexed components, and 5 position-welded components.

See [semantic-selector.png](evidence/visual/semantic-selector.png) and [raw-smd-audit.json](evidence/machine/raw-smd-audit.json).

## Round2 to Round3 Delta

The predecessor actually referenced and embedded by Round3 is `iskra_mace_body_round2`. Its 13-file candidate subtree matches the sealed Round2 candidate byte-for-byte. Round3 changes exactly these files:

- `model_export/playermodel_xi_iskra_6_1_lod0.glb`
- `model_export/playermodel_xi_iskra_6_1_lod1.glb`
- `model_export/playermodel_xi_iskra_6_1_lod2.glb`
- `model_export/playermodel_xi_iskra_6_1_lod3.glb`

The descriptor, materials, textures, and images are unchanged. The white accessory repair is measurable:

| LOD | Sealed Round2 white region | Round3 white region |
|---:|---:|---:|
| 0 | 162 tris / 186 verts / 12 components | 332 tris / 356 verts / 12 components |
| 1 | 132 tris / 156 verts / 12 components | 332 tris / 356 verts / 12 components |
| 2 | 66 tris / 86 verts / 10 components | 332 tris / 356 verts / 12 components |
| 3 | 48 tris / 62 verts / 7 components | 332 tris / 356 verts / 12 components |

See [predecessor-delta-audit.json](evidence/machine/predecessor-delta-audit.json).

## Runtime Geometry

| LOD | Total triangles | Position-accessor vertices | Surfaces | Joints |
|---:|---:|---:|---:|---:|
| 0 | 28,499 | 32,546 | 2 | 51 |
| 1 | 22,000 | 26,776 | 2 | 51 |
| 2 | 15,000 | 20,152 | 2 | 51 |
| 3 | 10,000 | 14,770 | 2 | 51 |

Every runtime GLB preserves the exact stock name-to-parent joint hierarchy. OAT may reorder the joint array, but the named hierarchy remains identical. The descriptor is an animated IW3 xmodel with LOD distances `220`, `500`, `1200`, and `1000000`.

The independent OAT comparison operates on triangle-corner attributes and resolves joint indices to names. Across all four LODs:

- Maximum position delta: `0`
- Maximum normal delta: `0.0068998961` with tolerance `0.007`
- Maximum UV delta: `0.0004882216` with tolerance `0.0005`
- Maximum weight delta: `0.0000455976` with tolerance `0.0001`
- Maximum inverse-bind delta: `0.0050439835` with tolerance `0.006`

The OAT output inventory contains 125 files. `oat-dump.log`, `oat-list.log`, and `oat-roundtrip.log` each close with zero warnings and zero errors. The fastfile is 2,164,276 bytes and nonzero.

## Visual Review

The identity A/B was inspected blind before reading its key. The authored source and Round3 candidate were readily identifiable as the same Kitty Six treatment. Round3 retains the intended silhouette and readable materials from front, three-quarter, side, and back views. The white accessory remains readable in isolated, full-body, pose, yaw, and all-LOD evidence.

LOD0 through LOD3 show stable identity and no abrupt silhouette or material break. This visual pass does not override the detached-geometry failure.

See [blind-ab-identity.png](evidence/visual/blind-ab-identity.png) and its [blind key](evidence/visual/blind-ab-key.json).

## Blocking Finding

The tiny dark specks are genuine rendered model geometry, not background compression, threshold noise, or red annotation pixels.

The independent detector used the renderer receipt's camera and a per-row outer-background model. A cluster was classified as confirmed only when it met all of these conditions:

- At least 20 pixels clear of the main rendered silhouette
- Projected model-triangle centroid within 2 pixels of the pixel cluster
- UV centroid in opaque atlas tile 34, `mtl_c_t8_mp_spe_seraph_superhero_metal`
- All three matched triangle vertices rigidly weighted to `j_mainroot`

Results:

| Pose | Confirmed Round3 clusters | Confirmed sealed Round2 clusters |
|---|---:|---:|
| Idle | 4 | 4 |
| Run | 0 | 0 |
| Crouch | 4 | 4 |
| Fire | 0 | 0 |
| Death | 4 | 4 |

The 12 confirmed Round3 clusters are 33 to 107 pixels from the main silhouette. Their nearest projected triangle centroids are 0.318 to 0.846 pixels away. Round2-to-Round3 cluster-center movement is at most 0.251 pixels in each affected pose, confirming inheritance.

Four additional thresholded components were retained in machine evidence but were not promoted to confirmed defects because they are near-body segmentation or do not meet every strict classification condition. The HOLD does not rely on those four.

See [pose-specks.png](evidence/visual/pose-specks.png), [round2-round3-specks.png](evidence/visual/round2-round3-specks.png), and [pose-speck-audit.json](evidence/machine/pose-speck-audit.json).

## Disposition

Round3 is a successful white Kitty Six restoration but not a clean proving package. Remove or correctly bind the tile 34 fragments, regenerate all affected LODs and pose evidence, rerun the same offline gates, and obtain a fresh independent verdict. Only after an offline `PASS_FOR_PROVING_PACKAGE_ONLY` should live engine and user testing begin.

Production release remains **HOLD** regardless of this offline review, and live engine/user testing remains outstanding.
