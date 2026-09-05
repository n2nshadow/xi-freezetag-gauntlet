# Iskra61 Body Round4 Independent Critic

## Disposition

**Whole BODY: HOLD. Targeted metal rebind: PASS, scoped diagnostic proving only. No candidate acceptance or promotion.**

The 217-byte repair is real, source-constrained, and improves the metal/white-charm relationship under the newly reviewed shared evaluator. It does not fix an inherited white-charm/backpack intersection or restore the reduced authored hanging-loop silhouette. Those are distinct from the successful rebind.

The previous sealed pose review is retained unchanged. This review does not reopen its scoped v17 IW3 single-clip diagnostic conclusion, use the sealed vendor pose implementation as the current evaluator, or require reproducing the entire animation engine.

## Findings

### F1 / P1: White Charm Intersects Backpack In Corrected Death

**Biggest whole-body blocker, inherited from Round3.** At `pb_stand_death_frontspin`, frame `43.46`, the unchanged white charm crosses the backpack surface. In the inspected LOD0/LOD1 closeups, almost all of the charm disappears at that surface. The repaired metal follows the charm, but that does not preserve the complete hanging assembly's visibility against the independently moving backpack.

| LOD | Candidate crossing triangle pairs | White faces crossed | Backpack faces crossed | OAT dump crossing pairs |
|---:|---:|---:|---:|---:|
| 0 | 43 | 43 | 1 | 43 |
| 1 | 43 | 43 | 1 | 43 |
| 2 | 124 | 120 | 2 | 124 |
| 3 | 0 | 0 | 0 | 0 |

These are strict interior finite edge/triangle crossings, tested in both directions, not silhouette scores, camera occlusion guesses, or tangent contacts. The predicate passes known intersecting/separated controls; a separate 3x3 linear-system solution independently reproduces 24 reported crossing examples to less than `1e-10` model units. Bind, idle, run, crouch, and fire have zero crossings between these two selections at all four LODs. This is not an exhaustive collision audit or a containment test.

Concrete candidate LOD0 example, zero-based opaque-primitive indices: white face `20359`, vertices `[23470,23474,23475]`, crosses backpack face `1057`, vertices `[1139,1138,1140]`. On white edge `0 -> 1`, `t=0.6954981308`; backpack interior barycentrics are `u=0.2227870278`, `v=0.1892145313`. The root-centered GLB-space intersection is `[-2.0385263122,53.7627411263,-4.3531510808]`.

The white assembly is rigidly driven by `j_shoulderraise_le`; those backpack vertices blend approximately `0.666667 j_spine4 + 0.188235 j_spineupper + 0.078431 j_spinelower + 0.066667 j_shoulderraise_le`. Their relative motion is therefore not constrained by the metal rebind. The corresponding white/backpack attributes and all their corrected posed positions are unchanged between Round3 and Round4. This is not a new 217-byte regression.

Evidence: [candidate crossings][crossings], [canonical OAT crossings][canonical], [independent predicate controls][predicate], [current death detail][death], [canonical LOD0 death detail][oatdeath].

**Scope of finding:** this is an actual corrected single-clip mesh failure. It is not proof that composed live IW3 animation has the identical failure; base clips, controllers, transitions and live evidence remain absent. Whole-body clearance requires resolving or explicitly bounding this attachment behavior with appropriate isolated controls and eventual live proof, not implementing the entire engine in this diagnostic.

### F2 / P2: Authored Hanging Loop Is Not Preserved As A Closed Loop

**Inherited source-fidelity limitation, not a Round4 geometry deletion.** The full-source bind closeup shows a closed hanging loop above the white charm. The candidate bind closeup shows a narrow wedge/remnant instead. Raw metal rigidly authored on `j_charm` has 104 triangles; selected surviving metal has only `4/3/3/3` by LOD. Its `j_charm_heart` sibling has 132 raw triangles and `68/68/10/10` retained. Triangle counts alone are not the quality finding: the actual source/candidate closeups show the lost loop silhouette.

All of these candidate faces were already present in Round3. Round4 retains their exact geometry and changes only their driver. The repair should not be rejected as deletion, but neither should byte preservation be described as a full authored-shape pass. Preserving the closed-loop appearance within the existing budget, or obtaining an explicit fidelity waiver, is separate follow-on scope.

Evidence: [authored bind detail][source-detail], [candidate bind detail][bind-detail], [protected-shape checks][protected].

## Targeted Repair Verification

Independently checked both complete seals: Round3 has 469 entries, Round4 370, with no missing, mismatched, or extra files. Each candidate subtree contains exactly 13 files. Only the four candidate GLBs differ.

| LOD | Changed positive JOINTS_0 bytes / vertices | Affected triangles | Total triangles |
|---:|---:|---:|---:|
| 0 | 84 | 72 | 28,499 |
| 1 | 83 | 71 | 22,000 |
| 2 | 25 | 13 | 15,000 |
| 3 | 25 | 13 | 10,000 |

The exact **217 binary byte offsets** correspond only to uint8 `JOINTS_0` slots with rigid weight 1, changing named driver `j_mainroot` to `j_shoulderraise_le`. JSON, positions, normals, UVs, weight magnitudes, indices, triangles, nodes, hierarchy, inverse binds, material/texture files and descriptor are otherwise byte-identical to authoritative Round3. Every affected triangle consists entirely of edited vertices. All twelve prior critic face observations lie inside this selection. No geometry was removed.

All four LODs retain 51 joints and two surfaces; tested attributes are finite, indices and joint references valid, weights normalized, and the stated triangle caps met. These checks are bounded critic checks, not a claim to independently repeat every builder validation.

Evidence: [exact offsets and selections][scope], [sealed inputs][seals], [protected shapes][protected].

## Source Author Correspondence

Parsed all repeated `triangles` sections in the raw Wraith torso SMD, independently of the builder's repair classification. The 1,938 raw metal triangles correspond to the full-source GLB through ordered atlas-transformed UV corners, maximum error `4.463195802e-08`; an independently fitted raw-to-source position transform has maximum residual `0.0009579530123` model units.

Constrained position-plus-UV nearest-surface correspondence maps all **217 selected vertices** to accessory metal: **29 to `j_charm`, 188 to `j_charm_heart`**, zero to ordinary body metal. Every match beats its nearest nonaccessory competitor; position-only nearest surfaces also stay within those two authored accessory joints. Maximum reduced-LOD residual is `0.328349184` model units and `0.002986084` atlas UV. Per-vertex raw material line numbers, barycentrics and competitor distances are recorded, not inferred from attractive poses.

Both raw joints parent to `j_charm_driver`. The white charm is authored on `j_charm`. Mapping these surviving metal pieces to the same existing runtime shoulderraise driver as the white counterpart is a defensible fixed-51-joint projection. It is not a claim that the raw author named that CoD4 joint, or that rigid sibling motion reproduces the original custom-joint secondary animation.

The white source signature is 332 triangles, 356 vertices, 12 indexed components. Every candidate LOD preserves its full wound triangle multiset against the full source, with maximum position difference `0.00005340576172` model units and UV difference `2.980232239e-08`. White positions/weights are exactly unchanged from Round3. The largest cutout hair component remains `676/521/384/257` triangles, distinct from the white accessory; the raw hair signature is 676 triangles, 373 vertices, one component. Opposing body views retain the split-color hair, ears/headphones, clothing, backpack, holster and white accessory identity, with visible pre-existing reduction. This is preservation of Round3 and specifically checked source features, not blanket certification of every authored silhouette.

Evidence: [independent raw lineage][source], [protected-shape correspondence][protected].

## Actual Corrected Diagnostics

Imported the reviewed shared `oat_body_pose.py` and `compiled_xanim.py` read-only. Their hashes are asserted before evaluation and verified again at sealing. The old vendor pose scripts remain historical and unchanged. The current evaluator is used on the actual Round3/Round4 GLBs, not a copied formula or a substitute incremental experiment.

| State | Clip | Frame | Round3 LOD0 metal error in white rigid frame |
|---|---|---:|---:|
| Bind | No clip | 0 | 0.000876 |
| Idle | `pb_hold_idle` | 63 | 9.861390 |
| Run | `pb_run_fast` | 6.72 | 5.563060 |
| Crouch | `pb_crouch_alert` | 142.5 | 8.263529 |
| Fire | `pt_rifle_fire` | 6.3 | 8.073903 |
| Death | `pb_stand_death_frontspin` | 43.46 | 11.060422 |

For bind plus five poses across four LODs, **all unaffected posed vertices have exactly zero Round3/Round4 difference**. A rigid frame fitted from the actual posed white geometry predicts the corrected metal with maximum error **`5.347588322e-14` model units** across all 24 cases. This relational geometry check, together with the fresh paired images, establishes that the surviving metal now follows its intended white counterpart. The tiny bind-only baseline discrepancy is exported bind/IBM precision, not changed vertex positions.

Fresh label-blind LOD0 A/B details were inspected and [observations saved before key reveal][blind]. A was preferred for metal attachment in idle/run/crouch/fire; B had independently displaced strips. Bind looked the same. The shared death visibility concern was recorded before the geometric test and reveal. Key: **A = Round4; B = Round3**. This was label blinding only; the task and proposed repair were known. No whole-body acceptance was inferred from that preference.

Generated 79 individual renders with installed Blender 3.6, `--factory-startup -t 2`, EEVEE and isolated configuration/temp paths. The current candidate's runtime diffuse DDS was used; the source control uses its source atlas. Actual skinned normals were retained. A/B cameras and bounds were shared. Root motion was recentered; no delta locomotion was applied.

**Visually inspected 62 unique fresh individual images**, including all 40 current candidate five-pose/four-LOD opposing body views, all 12 LOD0 A/B bind-plus-five-pose details, candidate bind front/back, baseline idle front, three full-source bind controls and four canonical OAT death details. The remainder are generated supporting images, not claimed as inspected. All 79 PNGs decode and match their render/mesh receipts. No roster rerender was performed.

Evidence: [corrected numerical cases][poses], [exact visual coverage][coverage], [render receipts][receipts], [paired run A][run-a], [paired run B][run-b].

## OAT And Remaining Limits

Reused the sealed existing Round4 OAT v0.32 FF, logs and model dump; no new build or installed asset change. All four canonical LODs pass named-joint ordered-corner comparison at position `<1e-5`, normal `<.007`, UV `<.0005`, weight `<.0001`, with identical positive named-influence presence and hierarchy. Maximum local bind error is `9.536743164e-06`; inverse bind error `0.005043983459` remains below `.006`. Candidate DDS/IWI diffuse payload and candidate/dumped IWI match. The three bound OAT logs report zero warnings/errors. The same death intersection persists in the canonical models, so it is not peculiar to the candidate GLB representation.

This is a **single v17 IW3 clip BODY diagnostic**, using bind fallback for absent tracks, selected fixed frames and root recentering. Partial-clip base composition, layered animations, controllers, custom charm secondary motion, transitions and live IW3 shaders are not represented. Five sampled poses cannot establish behavior at all frames. Live gameplay, LOD transitions, memory and user proving remain pending. F1 is bounded offline evidence, not an assertion of exact in-game behavior.

The targeted fix may be retained for continued isolated proving. Do not promote or accept the whole body on this report. Close or explicitly bound F1 and address the source-loop fidelity gap before describing all protected authored shapes as passing; retain the successful 217-byte scope separately from any later changes.

## Seals And Isolation

Only this critic directory was written. No subagents were spawned; no shared tools, lead controls, old vendor scripts, prior pose review, production, Steam installation or accepted viewarms were edited. Read-only existing helpers were imported without copying whole tool/source trees; generated NPZ meshes and PNG evidence are local. This is a configured write-root and reviewed-input hash audit, not an OS-wide write-history assertion.

- Evaluator SHA-256: `73C6F59BA93AAAA2B1FFADB90EAF93E7D29AF8A4B0F4C844A5FAF92F4082FB39`
- Parser SHA-256: `ADE7AC6EF4963DCA7FDE0D689793E695477442162C7314195754CD8784DEA4AD`
- Round3 manifest SHA-256: `FC57EB31B4AE76EA05CECB40A73A8092ECA4CE15069B8F4FD54FD61926005CB7`
- Round4 manifest SHA-256: `DB986A9E4F359B9CA5805267F4A1C5358A71B4130542A909F6C3AD0C5A43D1A6`
- Raw torso SMD SHA-256: `C79239993B2454B8C9AD5CA0B2A3776AF8C9E10BB326B0B96F5BF0141716FF16`
- Existing Round4 FF SHA-256: `31D4D23F3661581641B85C053BBCB22DA2EC3CC8C9FD0BDD142F70E6D9E8AD6B`

Candidate LOD hashes, explicit dispositions and limitations are in [RESULT.json][result]. Full reviewed-input identities, final checks and this review's own seal are in [reviewed inputs][inputs], [final checks][final-check] and [SHA256SUMS.txt][manifest]. No promotion manifest was created.

[crossings]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/white-backpack-intersections.json
[canonical]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/canonical-white-backpack-intersections.json
[predicate]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/intersection-predicate-controls.json
[death]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/A-death-detail.png
[oatdeath]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/canonical-lod0-death-detail.png
[source-detail]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/authored-source-bind-detail.png
[bind-detail]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/A-bind-detail.png
[protected]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/protected-shapes.json
[scope]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/exact-scope.json
[seals]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/input-seals.json
[source]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/source-correspondence.json
[blind]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/BLIND-OBSERVATIONS.md
[poses]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/corrected-pose-audit.json
[coverage]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/visual-coverage.json
[receipts]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/render-receipt.json
[run-a]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/A-run-detail.png
[run-b]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/renders/B-run-detail.png
[result]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/RESULT.json
[inputs]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/reviewed-inputs.json
[final-check]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/final-input-check.json
[manifest]: F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/iskra61_body_round4_critic/SHA256SUMS.txt
