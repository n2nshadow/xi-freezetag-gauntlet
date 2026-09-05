# Body Pose Recovery - 2026-09-05

## Scope

Diagnostic evaluator repair. No operator/viewarm mesh, material, accepted native
FF, full proving FF/IWD, or Steam file was modified by this repair.
Old review packets remain sealed history and are not rewritten into passes.

## Confirmed Test Defects

1. OAT's `GltfWriter.cpp` rotates global joints with `Rx(-90) * globalRotation`
   and derives child locals from inverse-parent times global. The old evaluator
   instead conjugated every local joint by the axis conversion. The new body
   evaluator converts roots only; child locals stay in their authored bone frame.
2. IW3 `_xanim_calc.asm` expands half rotations into Z/W, not X/W.
3. Quantized translation is `minimum + quantized * size`; the compiled loader
   already obtains `size` from its raw range with 1/255 or 1/65535. The old Python
   parser divided by that denominator again, suppressing nearly all motion.
4. `_dobj_skel.asm` adds non-root `partTrans` bind offset to animated translation.
   The old evaluator replaced it when a translation track was present.
5. An explicit `NO_QUAT` track is identity. A joint absent from a standalone clip
   retains its base pose in this diagnostic; these cases must not be conflated.

Local reference implementations inspected:

- `work/tools/oat-source-v0.32.0/src/ObjWriting/XModel/Gltf/GltfWriter.cpp`,
  `LhcToRhcQuaternion` and `CreateSkeletonNodes`.
- `work/tools/oat-source-v0.32.0/src/ObjLoading/XAnim/CompiledXAnimLoader.cpp`,
  `DecodeRawTransSize`.
- `work/cod4x-server-source/src/asmsource/_xanim_calc.asm`,
  `XAnimCalcParts_90`, `_320`, and `_490`.
- `work/cod4x-server-source/src/asmsource/_dobj_skel.asm`,
  `CalcSkelNonRootBones_170`.

## Verification

Eleven tests in `tools/tests/test_oat_body_pose.py` pass: expected root and child
transforms, bind-plus-translation, half-quaternion axis, explicit/absent tracks,
8/16-bit quantization, delta stream alignment, immutable input, duplicate tracks,
and hierarchy-cycle rejection.

`lead_body_pose_calibration_round1/current/report.json` binds actual shared code,
model and stock clip hashes for 18 LOD0 geometry cases: stock, Ghost biker and
Mara32, each in bind and five stock poses. Actual neutral renders were inspected.
The gross stock torso folding is removed. Real candidate leg/skirt/surface defects
remain visible. Gray clay images are geometry diagnostics, not texture approval.

Independent reviewer: `lead_body_pose_calibration_round1_critic` (pending).

## Remaining Gates

- Full in-game animation includes multiple clips, controllers, weapon poses and
  root locomotion. This module is a single-clip body diagnostic, not a complete
  animation-tree emulator. Partial firing clips do not prove the full firing pose.
- The 18 initial cases are not all-LOD or full-frame-cycle acceptance.
- Re-evaluate all body candidates, including earlier Mace/Mara31 passes, before
  claiming motion acceptance. No automatic promotion based on old numeric scores.
- Historical vendored parsers remain unchanged for reproducibility. New body
  checks must import the shared corrected module rather than recopying those files.
- Accepted native viewarm binaries are untouched; their live proof is outstanding.

The retained full package still fails Vacant's 990-slot safety ceiling at 992.
Family01 world-state packing is the independent repair for that separate issue.
