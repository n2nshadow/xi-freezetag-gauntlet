# Independent Critique - Iskra61 and Mace51 Round 2

Review date: 2026-09-05

Builder root: `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\iskra_mace_body_round2`

Critic root: `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\iskra_mace_body_round2_critic`

This was a read-only review of the builder, repository, accepted production assets, OAT v0.32, and five stock fastfiles. All critic writes stayed in the critic root.

## Verdicts

| Operator | Offline verdict | Safe for sealed proving package | Release status | Largest remaining gap |
|---|---|---:|---|---|
| `iskra_6_1` | **HOLD** | **No** | HOLD | Restore the authored Kitty Six doll/charm as one intact, readable component through all LODs and poses. |
| `mace_5_1` | **PASS_FOR_PROVING_PACKAGE_ONLY** | **Yes** | HOLD | Native IW3 glass/cutout rendering, gameplay deformation, LOD transitions, memory behavior, and user acceptance remain untested. |

Only Mace51 is listed in `promotion-manifest.json`. This is not a production or live-engine approval.

## Iskra61

The source selection is exact Seraph / Kitty Six. The staged full source GLB is SHA-256 `73A8DB70C11A87E29F5DDE9C71A112C2D1545CA2A657DF22DE7C1D46538C7EEF`; its four raw authored pieces are the `c_t8_mp_spe_seraph_superhero_*1_LOD0.smd` files with hashes `C7923999...FF16`, `40C26CBB...A9B1`, `FBE36CD3...2B33`, and `5823A558...F65E`. The material chain contains the authored doll, six hair-card groups, headphones, jacket, skirt, pauldrons, and related Superhero materials. The authoritative lineup hash is `C3B2B4A2EE5EC76142F7CBA0336FF4A788B730FA828AA5F8BB6B60B37CB93294`.

The sealed blind board ranked source B first, candidate A second, and wrong-current control C last, with scores 96/92/18. Candidate A decisively preserves the intended split cyan/red hair, cat-ear headphones, outfit palette, sleeves, holster, and overall silhouette. The key later confirmed A=candidate, B=full source, C=current control.

The close pose review overrides the favorable board-scale impression. The source doll/charm is one connected 676-triangle, 373-vertex component. LOD0 retains only 113 triangles (16.72 percent) split across 16 components; LOD1 retains 60, LOD2 25, and LOD3 15 triangles. In all five stock poses those pieces appear as dark slivers near the upper left shoulder/backpack instead of the authored white kitty charm. The exact-identity rejected Round1 control and full source retain a readable charm. This violates the explicit connected-component and close-detail gate, so Iskra61 is held even though its rig, OAT, image, material, and semantic checks pass.

Safe for a sealed proving package: **No**.

## Mace51

The source selection is exact Firebreak / The Carat Thief rabbit. The staged full source GLB is SHA-256 `175E29D032CA3F2196DB5AEB484B68651D9933C71941EF984981BC7324BE3026`; its four raw authored pieces are the `c_t8_mp_spe_firebreak_heist_*2_LOD0.smd` files with hashes `CAC27A05...0520`, `BF81D09B...BCAC`, `AD02C92D...5E68`, and `3C557A42...6DF7`. The material chain contains the authored Heist armor, backpack, hood, tail, tape, visor, head cover, and related components.

The sealed blind board ranked source B first, candidate A second, and wrong-current control C last, with scores 96/90/16. The key confirmed A=candidate, B=full source, C=current control. After reveal, candidate A also decisively beats the rejected exact-identity Round1 control: it keeps the asymmetric rabbit ears, marked hood/helmet, visible face behind the visor, warning placard, layered armor, blue/yellow pack, tail, pink/dirty clothing, and connected anatomy with materially better source fidelity.

All four LOD views preserve the same identity and material assignment. All five stock-animation sheets (idle, run, crouch, rifle fire, and front-spin death) remain connected and anatomically coherent, with no exploded pose, twist, inversion, missing limb, detached armor, or identity swap. Fine text and atlas detail are softer than the full source, but not severely lost at the reviewed close range.

The visor is not an opaque substitution. Its material keeps sort key 43, no depth write, and source-alpha/inverse-source-alpha blending. The glass atlas region contains 16,384 zero-alpha pixels, 4,096 partial-alpha pixels, and zero opaque pixels. The cutout class retains `gt0` alpha test and depth write.

Safe for a sealed proving package: **Yes**, strictly for isolated live proving under the exact hashes in `promotion-manifest.json`.

## Structural Replay

The independent parser audited all eight candidate GLBs, all eight builder OAT dumps, and the 16 individual/combined critic OAT-dumped GLBs. Every candidate and dump has the exact 51 named joints, order, parent hierarchy, and stock bind semantics. No model exceeds 51 bones, well below the requested 128 ceiling. Every vertex has at most four influences, no invalid joint reference or unweighted vertex, normalized weights, and a minimum positive candidate weight of at least 0.0102.

| Operator / LOD | Vertices | Triangles | Surfaces | Bones |
|---|---:|---:|---:|---:|
| Iskra LOD0 | 32,544 | 28,499 | 2 | 51 |
| Iskra LOD1 | 26,742 | 22,000 | 2 | 51 |
| Iskra LOD2 | 20,082 | 15,000 | 2 | 51 |
| Iskra LOD3 | 14,671 | 10,000 | 2 | 51 |
| Mace LOD0 | 25,389 | 28,499 | 3 | 51 |
| Mace LOD1 | 20,885 | 22,000 | 3 | 51 |
| Mace LOD2 | 15,601 | 15,000 | 3 | 51 |
| Mace LOD3 | 11,375 | 10,000 | 3 | 51 |

The XModel descriptors map LOD0/1/2/3 exactly to distances 220, 500, 1200, and 1,000,000. Material identity is constant across all four LODs and both OAT roundtrips.

All indices are uint16. Iskra's largest candidate surface references 24,073 vertices and 21,249 triangles with maximum local index 24,072. Mace's largest references 21,802 vertices and 23,940 triangles with maximum local index 21,801. OAT's shared-accessor global maxima are 32,543 and 25,388. These values are below the 65,535 vertex/triangle/index field limit; 2/3 surfaces are below the 255-surface field limit. There is no surface or index overflow.

For comparison, six accepted repository operators have LOD0 ranges of 8,939-15,294 vertices and 6,060-13,827 triangles, all with two surfaces and 51 bones. Mace LOD0 is about 1.66x the accepted maximum vertex count and 2.06x the accepted maximum triangle count; Iskra is about 2.13x and 2.06x. The targets are therefore format-safe, but materially heavier than accepted operators and not automatically safe merely because LOD0 is 28,499 triangles.

## Image, Material, and OAT Replay

All staged DDS, PNG, and IWI files decode. The IWI v6/BC3 headers and payload lengths are valid, color IWI payloads are byte-equal to the corresponding DDS BC3 payloads, spec maps are valid, and candidate/individual-dump/combined-dump images match. Material JSON semantics and GLB material assignments roundtrip without role changes. Iskra has opaque/cutout surfaces; Mace has opaque/cutout/glass surfaces with valid alpha data.

Fresh OAT v0.32 individual and combined link, list, and dump runs completed with 0 warnings and 0 errors. The Mace fastfile is byte-identical to the builder fastfile (`AB3EBB...7015`); the combined fastfile is `1FBEFA60...53BA`. Geometry, normals, UVs, material names, joint hierarchy, bind matrices, and named weights survive the semantic roundtrip. Initial setup attempts missing PartClassification or an image search path are retained as failed diagnostics; they are not treated as passing runs or waived. The final corrected runs are the cited zero-error evidence.

## Replacement Capacity

The current direct zone has 61 XModels, 322 materials, and 32 images. Replacing Mace51 preserves the XModel and image names/counts and changes two body materials to three, projecting 61 XModels, 323 materials, and 32 images. Replacing both would still be XModel +0, material +1, image +0.

The retained full-package checkpoint is already release-held at 993/1000 Backlot runtime XModels versus the repository safety policy of at most 990, with 70/70 mod-exclusive XModels and 1710/2048 materials. Mace does not add an XModel slot, but projects the material union to 1711/2048. Hard headroom would remain seven XModels and 337 materials; safety-policy XModel headroom remains negative three. Image count is unchanged.

Mace's four LODs add an estimated 2,116,928-2,721,568 bytes of core geometry while its smaller IWI pair saves 524,336 bytes, for a net estimated increase of 1,592,592-2,197,232 bytes (about 1.52-2.10 MiB). Both candidates together would add about 3.81-4.98 MiB. These are conservative payload estimates, not live engine allocations; blend streams, structures, allocator overhead, sharing, and residency are not measured.

The existing package safety breach is not caused or repaired by Mace. It keeps production promotion on HOLD even though Mace is safe to include in an isolated sealed proving package.

## Seals and Noninterference

Independent final rehashing found 0 mismatches across all 699 inventory records, all 701 delivery checksum records, all 702 builder files, 2,176 production `zone_raw` files, nine separately protected files, and five stock Steam fastfiles. `DELIVERY_MANIFEST.sha256` matches `DELIVERY_MANIFEST.json` SHA-256 `11EA2182DBBB3927C826ABC3E9E53C3BDC6FD0C3B6DE4C386AC8D635F0F2D2BD`.

The anonymized boards were assessed and sealed at `2026-09-05T02:50:33.7528292-04:00` before either key was opened. The blind C panels were the wrong-current controls, not the rejected exact-identity Round1 meshes. Round1 comparison was therefore performed after reveal from the dedicated Round1 diagnostics and is not claimed as sealed blind evidence.

Primary critic evidence:

- `evidence/blind/sealed-assessment.json`
- `evidence/machine/glb-capacity-roundtrip.json`
- `evidence/machine/independent-oat-roundtrip.json`
- `evidence/machine/material-image-alpha-closure.json`
- `evidence/machine/iskra-charm-retention.json`
- `evidence/hashes/protected-inputs-before.json`
- `evidence/hashes/steam-stock-before.json`

## Release Hold

No live IW3 shader, glass/cutout, multiplayer animation, LOD transition, gameplay, client memory, or user acceptance test was performed. Mace51's pass is strictly `PASS_FOR_PROVING_PACKAGE_ONLY`; both operators remain HOLD for production release.
