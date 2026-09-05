# Raines Corrected Motion Check

## Disposition

DIAGNOSTIC HOLD. No model edit, promotion, production copy, or game launch.
This bounded lead review replaces neither a fresh full critic nor a live test.

The close standing candidate retains the correct Ajax The Chef identity much
better than the old red-plaid slot. The existing front/side/face/LOD evidence
does not justify motion acceptance. Fresh corrected crouch views visibly show
lower-leg discontinuities and angular apron deformation in both the stock-rig
source reference and LOD0. These need source-to-native rig/seam investigation;
decimating the candidate differently cannot by itself explain a defect already
present before its LOD reduction.

This is a visual diagnosis, not a proof of the exact responsible joint mapping.
The source-reference match does not excuse the candidate's appearance. The
original 102-joint package model was also inspected in bind, using only a
documented rigid/uniform presentation transform, without applying native clips
to its incompatible source skeleton.

## Actual Checks

- All source and candidate GLB hashes match the original builder's records.
- Thirty corrected native cases: retargeted source and four LODs, each in bind
  plus idle, run, crouch, fire and death. One additional original-source bind case.
- All 31 cases have finite positions, unchanged topology, zero near-zero-area
  faces at the stated 1e-10 threshold and zero reported collapsed edges.
- None of those numerical checks establishes continuous silhouette, correct
  inter-layer depth, anatomical mapping, or live animation quality.
- Maximum crouch edge ratio is 6.801116 in the source reference and 6.800860
  in LOD0, not a candidate-only increase. No arbitrary universal ratio threshold
  was used to declare a pass.
- Eight fresh 420x660 neutral-geometry views were inspected: original-source
  bind; retargeted source and LOD0 bind/run/crouch; and LOD3 bind. Three earlier
  actual textured sheets were also inspected: three-quarter, face detail, LODs.
- The far LOD remains visibly coarse around the cap, arm and shirt. That is
  separate from the inherited source-reference crouch issue.

## Method And Limits

`check.py` invokes the corrected shared `oat_body_pose.py` and
`compiled_xanim.py`; every tested native clip is version 17. Generic GLB decoding,
skinning and edge statistics are referenced read-only from existing checked
helpers, not duplicated or rewritten. `RESULT.json` binds inputs and every case.

`render.py` uses opaque neutral materials to inspect geometry. These views are
not authored-material or IW3 transparency evidence, and the source/candidate
cameras are fitted independently to their nearly matching bounds. No blind
comparison, pixel-identity result or runtime shader equivalence is claimed.

The original source presentation is a six-joint least-squares similarity,
scale 0.3882638399282961 with a proper rotation. Its exact matrix is recorded;
it is not a replacement retarget recipe. Single clips omit engine animation
layering, controllers, IK and full locomotion; the fire clip is partial.

Next: trace lower-leg boundary vertices and apron joint ancestry against the
actual authored inputs and stock target before changing weights. Keep this
candidate held and preserve all sealed earlier evidence.
