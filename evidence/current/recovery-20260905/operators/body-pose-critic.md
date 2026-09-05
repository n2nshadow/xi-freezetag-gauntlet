# Independent Body Pose Calibration Critic

## Decision

**YES: the reviewed correction can be used as a more accurate single-clip IW3 BODY diagnostic, with the limitations below. No remaining correctness blocker was found for this scoped v17 root-space regression fix.** This is not an engine-equivalence certification, candidate acceptance, promotion authorization, or clearance of either previous body HOLD. Live/gameplay and user proof remain pending.

The old stock deformation was not merely a subjective pose disagreement. Its evaluator applied a conjugated coordinate conversion to every local joint, expanded half quaternions along X instead of Z, retained bind rotation for explicit NO_QUAT, and replaced child bind offsets with track translation. These conflict with the inspected local OAT and game assembly. The new module corrects those specific errors. Full engine layering/controllers are not required to make that correction useful within its stated diagnostic scope.

## Remaining Findings

1. **P2, outside the reviewed IW3 scope: v19 T5 IK is misread as delta3D.** [compiled_xanim.py:132](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/tools/compiled_xanim.py:132) treats flag `0x4` as delta3D for both v18 and v19. OAT `HasDelta3D` at loader line 419 requires the v19 T6 compatibility bit `0x80` as well. In T5, `0x4` is left-hand-grip IK, not a delta block. A valid minimal v19 stream with this flag and no delta fails with `truncated xanim at byte 34`; its exact bytes are in `behavior-results.json`. Gate diagnostic inputs to v17 for this authorization. Before claiming general v19 support, distinguish v18 from v19/T6 flags. All five reviewed stock clips are v17, so this does not block their BODY diagnostic use.

2. **P3, precision caveat: quaternion reconstruction is not bit-identical to OAT.** [compiled_xanim.py:42](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/tools/compiled_xanim.py:42) uses Python double precision for the omitted component; OAT loader lines 50/67 use float intermediates. Stored half component `31546` produces W=8861 here versus W=8862 from OAT's source-level float32 expression. A float32-expression replay over the real clips finds 2 differing reconstructions in idle, 0 run, 4 crouch, 0 fire, 1 death. The largest normalized per-key rotation discrepancy is **0.0034281 degrees**. This is not an axis/offset failure and is not a blocker for the visual diagnostic. It does preclude a bit-exact OAT/game claim. The precision replay models the source expression with NumPy float32; it is not a run of a newly compiled OAT executable, nor a bound on accumulated whole-skeleton error.

No other factual transform/scale error was established in the reviewed v17 single-clip path. Missing engine composition is an explicit limitation, not a newly demonstrated math bug. Neither remaining finding was fixed in shared files by this critic.

## Source Comparison

References below are the actual local source files, fingerprinted in `reviewed-inputs.json`, not a claim about an untouched upstream release.

| Contract | Local source evidence | Reviewed evaluator behavior |
| --- | --- | --- |
| OAT joint basis | `GltfWriter.cpp` 34-53 and 65-75 map positions `(x,z,-y)` and LEFT-multiply global rotation/matrix by Rx(-90). Lines 312-349 derive child locals using the converted parent's inverse. | Root uses `C * R`; child uses `R`, not `C * R * C^-1`. Conversion cancels in child-local transforms. |
| Skin bind convention | `GltfWriter.cpp` 660-687 left-converts the global bind matrix and serializes its inverse column-major. | World joint matrices use the matching convention. Independent skin replay of actual GLBs reproduces current OBJ output. |
| Half quaternion | `_xanim_calc.asm` 538-557 and 720-742 explicitly set X/Y=0 and load the two stored values into Z/W before accumulation at joint offsets +8/+12. | Two-component tracks expand to `[0,0,Z,W]`. Both constant and keyed behavior are covered. |
| NO_QUAT | `_xanim_calc.asm` `XAnimCalcParts_490`, 1499-1504, adds clip weight to joint W. OAT writer's `QuatTypeUsesHalf`, line 77, includes NO_QUAT. | A present zero-count quaternion track gives identity. This is distinct from an absent bone track. |
| Child translation and hierarchy | `_dobj_skel.asm` 294-373 composes parent/local quaternions; `CalcSkelNonRootBones_170`, 396-415, adds model `partTrans` to animation translation, then 416-483 rotates it by the parent and adds parent origin. | Child rotation replaces bind rotation; child translation is bind offset plus sampled delta, expressed in parent-local coordinates. |
| Root behavior | `_dobj_skel.asm` `CalcSkelRootBonesNoParentOrDuplicate`, 100-123, derives rotation normalization without child `partTrans` addition. | Animated root translation is absolute, not bind plus delta; root basis conversion is tested on an uncentered synthetic rig. |
| Translation size | OAT writer `EncodeRawTransSize`, 269-273, divides by the 8/16-bit scale; loader `DecodeRawTransSize`, 89-93, multiplies it back. `_xanim_calc.asm` 1108-1126 interpolates unsigned codes, then multiplies by size and adds mins. | The raw range is scaled ONCE when parsed. Evaluation does not add another `/255` or `/65535`. Constant translations bypass quantization. |
| Dedicated delta block | OAT loader `LoadDeltaTrack`, 228-244, and 507-518 put delta quaternion then translation before bone masks/names; writer follows that order. | Delta is parsed separately and not applied to articulated BODY transforms. v17 half delta and v18/v19-T6 full delta fixtures preserve bone/notify alignment. |

Source locations: [OAT GLTF writer](F:/CodexData/Documents/Codex/2026-08-03/ok/work/tools/oat-source-v0.32.0/src/ObjWriting/XModel/Gltf/GltfWriter.cpp), [OAT XAnim loader](F:/CodexData/Documents/Codex/2026-08-03/ok/work/tools/oat-source-v0.32.0/src/ObjLoading/XAnim/CompiledXAnimLoader.cpp), [OAT XAnim writer](F:/CodexData/Documents/Codex/2026-08-03/ok/work/tools/oat-source-v0.32.0/src/ObjWriting/XAnim/CompiledXAnimWriter.cpp), [version flags](F:/CodexData/Documents/Codex/2026-08-03/ok/work/tools/oat-source-v0.32.0/src/ObjCommon/XAnim/BinaryXAnimCommon.h), [animation assembly](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4x-server-source/src/asmsource/_xanim_calc.asm), [skeleton assembly](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4x-server-source/src/asmsource/_dobj_skel.asm).

## Actual Visual Inspection

Personally inspected **16 individual stock PNGs**: all five `renders/old-*.png`, all five incremental `renders/oat_base_offsets-*.png`, and actual shared-module `current/renders/stock-{bind,idle,run,crouch,fire,death}.png`. These are from [the lead control directory](F:/CodexData/Documents/Codex/2026-08-03/ok/work/cod4-freezetag-recovery-20260904/xi_ftag/.asset_staging/recovery_20260904/gauntlet/lead_body_pose_calibration_round1). The current stock pictures agree visually with the final incremental variant. I did not infer the result solely from edge scores.

| Stock case | Old control | Corrected actual-module control |
| --- | --- | --- |
| Bind | Not a changed animation case. | Native body has no head or hands, coarse hollow sleeve ends, angular pouches, a vest/waist boundary and faceted legs. These are not missing-model bugs introduced by posing. |
| Idle F63 | Grossly twisted/back-leaning upper body and displaced-looking vest relative to hips. | Upper body and legs remain coherently arranged; bent elbows and lowered stance are visible. Waist/pouch faceting remains. |
| Run F6.72 | Strongly rolled/displaced torso with distorted-looking limb orientation. | Recognizable articulated stride, one leg forward and one back; upright relative torso, no former gross waist fold. |
| Crouch F142.5 | Torso rolls/folds across the compressed lower body. | Lowered/kneeling configuration with separated readable leg and forearm directions. Not certification of floor contact or correct layered aiming. |
| Fire F6.3 | Torso folds sharply over otherwise upright legs; arms cross the folded upper body. | Upright torso with forward bent forearms and unchanged lower-body base stance. This is the expected diagnostic limitation of a partial clip, not proof of the full firing animation. |
| Death F43.46 | Strongly rolled torso/vest and splayed limbs. | Articulated raised-leg/body configuration without the previous gross torso basis failure. The centered picture is not supposed to prove falling trajectory or final ground orientation. |

Root recentering uses `bindRootWorld * inverse(animatedRootWorld)`. Thus these pictures deliberately remove rigid root rotation AND translation. They cannot themselves prove the root's global transform, locomotion or floor contact. The separate uncentered root landmark test addresses root basis/absolute translation, without pretending to supply live root-motion proof.

The rough belt, pouch openings and faceting remain visible. The bind reference prevents falsely attributing all of those to animation. Conversely, improved appearance does not establish anatomical perfection, absence of self-intersection, or correct candidate weighting.

## Behavioral Verification

`verify_behavior.py` imports the **actual shared modules** with bytecode disabled. It does not copy the evaluator into a second implementation. The 13 passing independent tests use fixed spatial landmarks and stream sentinels, not expected matrices calculated by the same function under test. Coverage includes binary half-ZW quarter/half turns, a full quaternion X turn, noncommuting parent/child rotations, uncentered root basis and absolute translation, bind+delta child offsets, present NO_QUAT versus absent tracks, unsigned 8/16-bit translation endpoints and fractional samples, sparse 16-bit frame indices, looped sequential index omission, quaternion sign continuity across 180 degrees, delta separation and input nonmutation.

- Lead suite: **11/11 pass**.
- Independent suite: **13 pass + 2 expected failures**, explicitly preserving the v19 flag and float32 reconstruction findings above. These are not reported as 15 passing tests.
- All **18** actual-module cases (stock/ghost/mara32, bind plus five clips, LOD0 only) independently re-skinned from their unchanged GLB bytes and actual shared-module world matrices. Maximum OBJ coordinate difference after the documented GLTF-to-OBJ axis mapping: **5.0000182e-10**. This proves those evidence meshes are tied to the current evaluator, not that they equal an engine frame. No candidate visual acceptance was performed.
- The lead report's implementation/model/clip hashes all matched independently. All five clips are version 17. Joint coverage is idle 42/51, run 35/51, crouch 42/51, fire 25/51, death 42/51. Fire has assetType 1 and no dedicated delta; the other four have assetType 2 and a parsed delta block.
- Stock bind-world times inverse-bind matrices have a maximum residual **0.00485389**, inherited from the supplied exported bind data. I do not claim exact bind identity; neither the rig nor its inverse binds were modified to improve a score.

Reproduction: run the critic-local `verify_behavior.py` with Python `-B` and NumPy available. All temporary fixtures are redirected beneath the critic directory. `behavior-results.json` records individual test names/logs, the v19 reproducer bytes, per-clip rounding counts, and all 18 mesh replay errors. The initial critic replay omitted the OBJ export-axis mapping and stopped at the bind comparison; that local checker mistake was corrected before the successful replay, not labeled an evaluator failure.

## Allowed Use And Outstanding Proof

Use this as a **v17, OAT-exported, ordinary unscaled BODY rig, single-clip geometry diagnostic**. Track names must match the intended rig. Nonanimated joints retain the exported bind-local transform; present empty tracks use identity/zero. Frame input is an explicit frame sample; `sample_track` clamps outside the key range and does not perform playback looping.

No exact-game animation tree, partial-clip base selection, blend weights, controllers/aim adjustments, attached-model root/duplicate-bone behavior, weapon/hand IK, ragdoll, dedicated delta locomotion, shader fidelity, collision or all-frame/all-LOD acceptance is claimed. In particular, a standalone partial firing clip with untracked lower body in bind is not a composed player firing pose. None of these exclusions is a demand to implement the whole engine for this root-space correction.

The biggest remaining **proof** gap is a trusted engine/live comparison using the actual composed animation state. It is not a demonstrated remaining blocker to using this corrected single-clip diagnostic. A future candidate reviewer must still evaluate candidate-specific defects and appropriate coverage; old numeric PASS labels and this review cannot authorize promotion.

## Isolation And Binding

Reviewed `oat_body_pose.py`: SHA-256 **73C6F59BA93AAAA2B1FFADB90EAF93E7D29AF8A4B0F4C844A5FAF92F4082FB39**. Reviewed `compiled_xanim.py`: SHA-256 **ADE7AC6EF4963DCA7FDE0D689793E695477442162C7314195754CD8784DEA4AD**.

Only this critic directory was written. No subagents/tasks were spawned. No lead script/control, shared source/test, historical vendor script, model, accepted viewarms, build output, Steam payload, dashboard or promotion state was changed by this critic. No full build, OAT build, game launch, candidate acceptance or promotion was performed. No full source/tool or media copies were made.

`reviewed-inputs.json` fingerprints **62** reviewed inputs, including the two prior critic reports, shared modules, local source references, stock/candidate GLBs, five clips, evidence meshes and the 16 inspected stock pictures. They were unchanged during the successful verification window. This bounded read-only audit is not a whole-disk/global concurrency seal; build/Steam/viewarm trees were neither written nor broadly inventoried here.
