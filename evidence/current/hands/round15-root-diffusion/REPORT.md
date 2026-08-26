# Round 15 Ghost Viewhands Builder

## Decision

**REJECTED PRE-EXPORT. `promotionReady: false`.**

No candidate GLB was created. Consequently no GLB reload, OAT/XModel conversion, weapon-contact render, or source/stock comparison render was run. This is the required gate order, not missing downstream work.

## What Was Tested

Round 15 used the locked Round 13 clean Ghost source shell and the eight real XAnim families. It built a training-only equal-family reference on the unchanged exact 91-joint hierarchy, applied a shell-gated low-amplitude RBF bind normalization without changing topology, UVs, or material assignments, and optimized an explicit palm/finger/cuff weight field across all training poses. One or more frames from every family were held out.

The final root-field search exact-audited all 24 diffusion schedules. Selection used only the 40 training frames; the 32 holdout frames were opened afterward. Transform-continuity, direct edge-strain, and one-sided edge-barrier prototypes were rejected when their real hard-gate scores worsened. No Round 14 single-pose ARAP method was reused.

## Strongest Field

- Schedule: `root-diffusion-a0.10-i06`
- Weight SHA-256: `A2FDF2B6F7AF5B8A2856C64E15C9EB8446E63E908392B627512C69D8A40E28DE`
- Skeleton: exact `91` joints, <=128
- Influences: max `4`, minimum positive `0.0102000004`, unweighted `0`
- Training: `31022` hard defects, `40/40` failed frames
- Holdout: `25460` hard defects, `32/32` failed frames

Training defect classes: `5112` opposed, `237` collapsed, `20612` overlong, and `5061` folded. Holdout repeats every class.

The field improves the source-weight training score by `59.75%`, but all real-animation frames still fail. Its worst edge ratio is `323.693x`; its worst fold is `179.971` degrees. Left-palm volume spans `4.037x` to `29.353x`, outside the locked `[0.35, 2.80]` gate.

## Largest Remaining Gap

A static four-influence field on the unchanged 91-joint hierarchy cannot reconcile the source shell bind basis with the real animation transform family. The strongest training-selected topology-aware field still reaches edge ratios above 323x, nearly 180-degree folds, opposed faces, and 4x to 30x left-palm volume on both training and held-out poses. Further neighborhood smoothing is not the missing step; a valid source-faithful bind/reference basis or an engine-supported corrective representation is required before weight optimization can preserve both anatomy and articulation.

## Evidence

The canonical machine-readable result is `round15-source-bar-continuation-report.json`. `hashes/sha256-manifest.json` and `hashes/SHA256SUMS.txt` cover all retained inputs, scripts, reports, and this summary.
