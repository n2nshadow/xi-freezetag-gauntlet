# XI CoD4 FreezeTag Viewhands Source-Rig Critique

Audit date: 2026-08-28  
Role: independent source-rig critic  
Verdict: **BLOCK**

No inspected artifact meets the complete source-preservation and CoD animation contract. `regional127-v2` is the best bind construction in this set and it links successfully with pristine OAT, but it is still a six-island animation approximation. It must not be promoted.

## Blocking contract collision

The literal weight requirements are mutually incompatible:

- The original SMD has a minimum positive weight of `0.007843`.
- It contains 710 repeated corner influences below `0.0101`; the direct full conversion contains 182 unique serialized influences below `0.0101`.
- Therefore exact original numeric weights and a minimum serialized weight of `0.0101` cannot both be true.

The round-3 reduced source is a different canonical asset: 9,766 vertices and 11,506 triangles versus 15,192 unique source corner records and 20,411 triangles. It has no sub-floor weights, but it removed 35.716% of source vertices and 43.628% of source triangles. Current round-4 candidates serialize 9,780 vertices after export splitting, not the original source mesh.

The builder must fail closed until the owner chooses either exact original weights or the `0.0101` floor. A reduced/floored set must not be described as exact original data.

## Source and stock facts

The original SMD has 66 joints, 56 weighted joints, at most four influences, and weight sums within `1e-6` of one. Its numbered twists are unambiguous:

```text
j_elbow_le
  j_wristtwist1_le
  j_wristtwist2_le
  j_wristtwist3_le
  j_wristtwist4_le
  j_wristtwist5_le
  j_wristtwist6_le

j_elbow_ri
  j_wristtwist1_ri
  j_wristtwist2_ri
  j_wristtwist3_ri
  j_wristtwist4_ri
  j_wristtwist5_ri
  j_wristtwist6_ri
```

They are siblings. A serial twist1-to-twist6 chain is not an approximation of this source rig.

The stock template has 71 skin joints. Its five left and three right sleeve reshape controls are already direct elbow children, so they can carry eight source auxiliary groups without violating the sibling rule. The remaining six source elbow auxiliaries require six helpers.

The binds are not related by one exact similarity transform. Source-to-stock length ratios are:

| Measurement | Ratio |
|---|---:|
| left shoulder to elbow | 0.443631 |
| left elbow to wrist | 0.464568 |
| right shoulder to elbow | 0.443632 |
| right elbow to wrist | 0.464570 |
| shoulder width | 0.391664 |

After uniform scaling and wrist registration, the 21 common mapped joints per side still have median position errors of `7.477` left and `4.943` right, with maxima `36.647` and `20.301`. Median orientation errors are `57.84` and `161.79` degrees. This is why replacing source locals with stock absolute locals cannot preserve the authored source deformation.

## Why full127 has no strain

`full127-wrist-v1` places each intact weighted source arm below one animated stock wrist. None of its 56 weighted `xi_src_*` joints has a matching legacy XAnim track. Every local transform inside an arm therefore stays at bind.

For any source joint `H` below wrist control `C`:

```text
H_bind = C_bind * L
H_pose = C_pose * L
H_pose * inverse(H_bind) = C_pose * inverse(C_bind)
```

The fixed descendant transform `L` cancels. Every influence on that arm receives the same matrix, so linear blend skinning reduces to one rigid arm transform. Independent eight-motion edge p99.9 is `1.000015-1.000027`. That is proof of missing articulation, not successful animation.

The visual result follows the wrist while retaining bind-pose elbows, fingers, and twist distribution. It also does not have coherent serialized skin identity: maximum raw-to-skinned bind displacement is `41.958` units and the inverse-bind identity error is `25.461`.

## Trial comparison

| Trial | Joints | Directly tracked weighted joints | Raw/bind max | Eight-motion edge p99.9 | Twist sibling contract | Result |
|---|---:|---:|---:|---:|---|---|
| `full127-wrist-v1` | 127 | 0 | 41.958 | 1.000015-1.000027 | yes | rigid, no articulation |
| `regional127-v2` | 127 | 0 | 0.000012 | 1.785-2.161 | yes | coherent bind, coarse islands |
| `semantic-v1` | 77 | 50 | 5.535 | 8.394-10.973 | yes | correct minimum topology, bad realization |
| `two-layer-split-v2` | 85 | 42 | 5.106 | 3.385-4.265 | 6 of 12 | bad bind and invented parentage |

`two-layer-split-v2` parents twist1-3 on each side below `j_wristtwist_*`; that is a serial topology the source does not contain. Its existing edge PASS labels are not credible source-preservation evidence.

`semantic-v1` proves that 77 joints can express the required names and sibling topology. Its pose bake and inverse binds do not prove that the layout works: its independent area p99.9 is `14.540-17.271`, and its own build records source-pose edge p99.9 as high as `5.631` before runtime animation.

## regional127-v2

### What is genuinely good

- The first 71 skin joints are an exact stock-order prefix.
- All stock parents match, and stock control world bind matrices differ by exactly `0.0` in the independent parse.
- All 56 source weight groups remain injective `xi_src_*` aliases.
- Maximum influences are four; minimum serialized weight is `0.01014423` for the reduced canonical asset.
- Raw-to-skinned bind displacement is only `1.21e-5` units.
- All twelve numbered twists remain siblings below the source elbow aliases.
- OAT Linker accepts the 127-joint GLB with zero warnings/errors and writes a 292,398-byte fastfile.

The regional bind/IBM construction is the part the next builder should reuse.

### Generic validator mismatches

These do not by themselves prove a runtime failure:

- The 56 `xi_src_*` joints are expected extras under `--allow-extra-joints`.
- `sharedJointCount=0` is inevitable because all stock controls are unweighted and all weights use aliases. The stock-weight-center registration contract is inapplicable as written.
- Both Unlinker modes exit `-1073740791`, but pristine stock71 produces the identical two crashes with empty output. This is a non-discriminative tool/control limitation.

The Unlinker control does not turn linking into a runtime pass. It means only that the candidate-specific negative inference must be removed.

### Real deformation and runtime risks

The six roots are source shoulder, elbow, and wrist aliases for each side. The source shoulder-to-elbow and elbow-to-wrist links are cut on both arms. The remaining 50 weighted aliases have no independent animation:

- All 34 weighted finger and palm aliases retain fixed local transforms below the two wrist islands.
- All numbered twist and bulge aliases retain fixed local transforms below the two elbow islands.
- Mixed-weight vertices bridge controls that now move as separate islands.

The worst idle edges explicitly mix shoulder, elbow, and twist weights. One `0.2986`-unit edge becomes `1.5187` units (`5.086x`). This is the expected failure mode when native blends cross disconnected driver regions.

Independent eight-motion results are:

- edge p99.9 `1.785-2.161`
- maximum edge ratio `4.829-5.923`
- triangle-area p99.9 `1.781-2.191`
- minimum triangle-area ratio `0.030-0.132`

The denser `visual-evidence-s9` set has 69 candidate frames. All 69 receive the generic edge flag, but absolute source-surface p99.9 reaches `2.559`, maximum edge ratio reaches `6.243`, and six frames fail side shape. Weapon attachment succeeds in all 69 frames, which is a useful positive but does not clear the arm rig.

The blind sheet compares regional against current production, not against the preservation contract. Regional being less broken than current production is not a promotion gate.

### Why its edge PASS is generic

The validator replaces a tracked node local outright with the sampled XAnim matrix in `tools/validate-viewhands-xanim.py:75-87`. It then permits candidate p99.9 up to `max(1.75, stock_p999 * 1.5)` and a maximum ratio up to `max(6.0, stock_max * 1.05)` in lines 826-843.

For idle, stock p99.9 is `6.111`; the resulting candidate allowance is about `9.167`. Regional's `1.869` therefore passes trivially. That answers a generic stock-relative validator question, not whether the source surface was preserved.

## Rename versus parallel driver

### Naive rename plus missing tags: reject

Compacting the intact source names represents only 46 of 71 stock joints. Appending the missing stock joints creates a 91-joint union, but leaves 20 source-only names and four common-parent mismatches. The meaningful mismatches include both shoulders (`j_clavicle_*` versus stock `tag_torso`) and `tag_camera`; the top container-name mismatch is generic.

Only 42 weighted source groups then match XAnim tracks. A scaled in-place simulation reaches edge p99.9 `36.188` at idle. Renaming the intact source tree and appending tags is not sufficient.

### Passive parallel layer: reject

The full and regional trials show both passive variants:

- one driver per arm gives zero strain and zero articulation;
- three drivers per arm gives coarse articulation and tears mixed native blends.

A tree joint has one parent. It cannot simultaneously retain the source deform parent and inherit an independent matching stock driver. A true parallel layer needs executable copy-transform constraints or animation tracks for every deform helper. Plain parent links do not provide that behavior.

### Smallest representable architecture: 77 joints

The minimum topology is stock71 plus six native helpers:

```text
71 stock controls/tags
+ 2 source elbow-bulge helpers
+ 1 left numbered-twist helper
+ 3 right numbered-twist helpers
= 77 joints
```

Map source digit `_1,_2,_3` injectively to CoD `_0,_1,_2`; leave CoD `_3` unweighted. Map `ringbase/pinkybase` to `ringpalm/pinkypalm`. Map source shoulder, elbow, wrist, and unnumbered wristtwist to the same CoD names.

Map numbered twists as follows, keeping every mapped control/helper directly below its elbow:

| Source left | CoD/helper | Source right | CoD/helper |
|---|---|---|---|
| twist1 | top_le_1 | twist1 | top_ri_1 |
| twist2 | top_le_2 | twist2 | top_ri_2 |
| twist3 | bottom_le_2 | twist3 | top_ri_3 |
| twist4 | bottom_le_1 | twist4 | helper |
| twist5 | top_le_3 | twist5 | helper |
| twist6 | helper | twist6 | helper |

The six helpers are `xi_src_j_elbow_bulge_le`, `xi_src_j_elbow_bulge_ri`, `xi_src_j_wristtwist6_le`, and `xi_src_j_wristtwist4/5/6_ri`.

This is the smallest valid name/topology representation. It is not compatible with untouched stock absolute tracks while retaining the source bind. An independent bind-correct simulation of stock deltas on this layout reaches edge p99.9 `11.609-15.076` across the eight motions.

## Concrete builder recommendation

1. Stop promotion of every current trial, including `regional127-v2`.
2. Resolve the exact-original-weight versus `0.0101` contradiction. Keep the decision explicit in the build receipt.
3. Build the 77-joint stock-first semantic layout above. Reuse regional's exact stock prefix and coherent bind/IBM method.
4. Preserve each disconnected source arm with a recorded rigid component transform only. Do not six-anchor pose-bake or non-rigidly fit the source surface to stock.
5. Derive mapped control bind globals from the retained source bind and regenerate inverse binds so every skin slot satisfies `inverse(meshWorld) * jointWorld * IBM = identity` within exporter noise.
6. Add a source-bind-aware animation retarget/bake stage. Convert stock local rotation deltas and IK targets onto source pivots and proportions; bake tracks for all 50 mapped controls and derive the six helper tracks.
7. Derive sibling twist tracks from elbow-to-wrist relative rotation. Never propagate twist serially.
8. Keep stock tags and weapon attachment tracks exact. Validate weapon contact separately from arm deformation.
9. If legacy XAnims must remain untouched and no active constraint system exists, declare the strict build infeasible. Do not add another passive helper layer.
10. Require independent eight-motion metrics, dense visual frames, OAT Linker acceptance, and a live CoD4 first-person receipt before promotion.

## Independent bar

The source-surface screening bar used here is bind displacement at or below `0.001`, edge p0.1 at or above `0.75`, edge p99.9 at or below `1.25`, and triangle-area p0.1/p99.9 within `0.5-1.5`. A maximum edge over `2.0` requires both a final length at or below `0.25` units and explicit visual clearance. All 56 source weight groups must have direct or source-aware derived articulation, every dense visual frame must clear, and live CoD4 remains mandatory.

The bar is absolute against the candidate's own source bind. A permissive stock-relative PASS cannot waive it.

## Evidence

- `evidence/rig_facts.json`: hashes, source facts, bind/weight checks, topology proofs, trial metrics, and OAT control interpretation.
- `evidence/independent_eight_motion_metrics.csv`: independent source-surface measurements for all eight motions.
- `evidence/twist_parent_contract.csv`: all twelve source parents and each trial's serialized parent.
- `evidence/regional_source_alias_parents.csv`: the four regional source-parent breaks and all 56 aliases.
- `evidence/source_to_stock_bind.csv` and `evidence/bind_error_bars.png`: quantitative and visual bind comparison.
- `evidence/serialized_skeletons.png`: source, stock, full127, regional127, semantic77, and split85 serialized skeletons.
- `evidence/animation_failure_montage.png`: identical idle comparison framing across the four candidate approaches.
- `evidence/regional127_source_bind_comparison.png`, `regional127_continuous_contact_sheet.png`, and `regional127_blind_ab_contact_sheet.png`: hashed snapshots of the new trial's requested visual artifacts.

All production, source, Steam, and builder-audit files were read only. This audit wrote only beneath `.audit/viewhands_ghost_round4_source_rig_critic`.
