# Viewhands Live Failure Baseline Round 1

## Verdict

**FAIL.** These two images are real CoD4 captures supplied immediately after the
latest playable gauntlet build. They outrank the earlier Ghost GLB-only critic,
which explicitly did not compile through OAT or render in CoD4.

No repair or root-cause claim is made in this lane. Its purpose is to preserve
the actual failed output as the negative baseline every future builder and fresh
critic must beat.

## Captures

| Capture | Resolution | SHA-256 |
| --- | ---: | --- |
| `evidence/live-failure-wide.png` | 3130 x 1302 | `B77B778AB3C88566BA4B94CDF9226B41F8AF31B2FA70C7571C9756B2AB7D34A8` |
| `evidence/live-failure-close.png` | 1034 x 1001 | `099C961D482FDC2106E299C129CF25DC5099EFB37792A75424B09B44A7E74671` |

## Fatal Visual Findings

- The first-person hand/forearm becomes a large collapsed polygon cluster that
  dominates the camera.
- Palm, fingers, thumb, wrist, cuff, and forearm are not readable as coherent
  anatomy.
- The failed mesh obstructs the weapon and sight picture.
- Skin-toned and dark material regions remain visible on incoherent geometry;
  this is not a minor pose or cosmetic defect.
- The wide capture also shows repeated malformed scene geometry/textures. That
  is a separate release failure, but these images do not prove whether its cause
  is the hands, another asset, or an engine/package limit.

The selected operator, exact weapon state, package hash, and runtime log are not
visible, so this evidence must not be stretched into a specific technical root
cause. It proves the shipped visual result failed.

## Required Next Proof

The next candidate must satisfy
`xi_ftag/gauntlet/viewhands_runtime_bar.md`, including OAT-decoded XModel
structure, real production XAnim sweeps, fixed-weapon contact, final CoD4
rasters, adversarial deformation rejection, fresh criticism, and the user's
live confirmation. Until then, all eight custom viewhands remain on `HOLD`.
