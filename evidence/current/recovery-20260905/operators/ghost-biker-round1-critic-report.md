# GHOST51 Biker Body: Recovered Independent Critic Review

## Decision

**HOLD. No promotion manifest is authorized or emitted.** This is a completed review of the concrete candidate, not a paused conversion. Production, Steam, live-engine acceptance and user acceptance remain HOLD/outstanding. The critic-local canonical FF/IWD are diagnostic artifacts only and must not be promoted independently of a passing review.

**Largest gap: there is no calibrated, visually acceptable five-stock-pose proof.** The sealed idle/run/crouch/fire/death images show displaced or folded torso/vest, waist openings, and distorted extremities. Independent reconstruction reproduces their exact LOD0 render geometry, but the untouched stock body also distorts under the same animation interpretation. Consequently the stock-relative numerical PASS cannot establish correct animation of this candidate. Repair/calibrate the stock-pose interpretation first, then verify the candidate under all five stock poses at all four LODs. Do not mistake identical 51-joint bind data for a successful animation test.

The canonical replacement is XModel-slot-neutral. **987 runtime slots / 986-name union / 64 exclusive / strict cap 990** remains the supplied, hash-verified Backlot checkpoint, with three slots of headroom. Old 993 arithmetic is not used as a rejection.

## Findings

### G1 / P1: Five-pose acceptance is not established

- Actually inspected all five original 600x900 pose PNGs and the pose sheet. Idle F63 has a dramatically projecting/folded vest and open waist; run F6.72 has a rigidly displaced vest/waist; crouch F142.5 has a folded waist and visibly compressed/fanned hand; fire F6.3 folds the upper body down over the legs with abnormal forearm/hand placement; death F43.46 retains the waist/vest distortion. Airborne presentation alone is not treated as a defect because rigid root motion was removed and no world floor was provided.
- Fresh independent matrix/skinning evaluation reproduces the sealed LOD0 pose OBJ vertices to a maximum **5.000001e-10** coordinate difference. Thus these are the actual candidate evidence poses, not unrelated pictures.
- Added numerical coverage for all **20 candidate pose/LOD combinations** and two previously absent neutral stock controls. Stock idle/fire controls show the same implausible torso/limb arrangement. The stock body is headless by design; missing head is not counted as a control failure.
- The preserved pose evaluator ignores animation asset-type differences and evaluates each clip independently; fire is type 1 while the other four are type 2. The precise engine interpretation/layering defect has not been isolated. This review does **not** claim that a live CoD4 run would necessarily reproduce these offline deformations.
- The original gate shares the same animation interpretation with its stock control, accepts a failure only when `ratioOutlier AND absoluteLongRatioEdge`, and counts only effectively zero-length edges as collapse. It does not test anatomical pose plausibility or detached rigid components. Fire P99.9 edge strain is **7.560312**, above its own **6.271562** threshold, but still passes because the other conjunct is false.
- Existing visual animation coverage is five LOD0 samples, not five poses at each LOD. The added 20-sample numeric audit is diagnostic and cannot repair a failed stock-control calibration. Producing fifteen more images with the same uncalibrated interpretation would not close this gap.

Evidence: `evidence/pose-coverage-audit.json`; candidate `renders/poses/pose-{idle,run,crouch,fire,death}.png`; critic `fresh_visuals/stock-idle.png`, `stock-fire.png`.

### G2 / P1: Rendered beard/alpha/material appearance is not runtime proof

- The sealed PNG/DDS atlas is **2048x2048**; decoding the actual packaged IWI with OAT yields **1024x1024 DXT5**. The builder explicitly clamps conversion to 1024, but reports the source-atlas dimensions as runtime dimensions. At runtime the 256-pixel source tiles/padding 8 become 128-pixel tiles/padding 4.
- Original Blender evidence uses **CLIP at 0.38** for cutout and multiplies glass alpha by **0.58**. Both runtime cutout and glass JSON documents are byte-identical: source-alpha blending, `alphaTest=gt0`, `depthWrite=false`, `cullFace=none`, and tint alpha 1. They do not implement the two different behaviors shown by the original renders.
- Original OBJ evidence does not serialize GLB normals; Blender recomputes smoothing. The material path replaces authored normal detail with `$identitynormalmap` and a constant 4x4 specular texture. Byte closure is valid, but this is not evidence of authored shader/material equivalence.
- Added face and rear-leg views for **every LOD**, using the decoded runtime IWI and source-over alpha without the artificial glass multiplier. The beard becomes sparse/transparent with a displaced-looking card silhouette and vest decals soften. These are diagnostic Blender images, **not** authoritative predictions of IW3 transparency sorting. They demonstrate that the original favorable cutout renders cannot authorize the actual runtime material contract.

Evidence: `evidence/canonical-oat-and-iwi.json`, `evidence/pose-coverage-audit.json`, `fresh_visuals/lod{0,1,2,3}-runtime-face.png`.

### G3 / P2: Concrete cross-atlas LOD defect and unresolved silhouette details

- **LOD2 cutout primitive triangles 69, 71, 72** and **LOD3 triangles 54, 55** cross from atlas tile **35 (vest decal)** into **36 (vest trinkets)**. Triangle indices are zero-based within the cutout primitive. The shared rogue corner has UV **(0.5027573108673096, 0.560598611831665)**, beyond the vest-decal tile's padded upper U **0.49609375** and into the adjacent tile's padding. This is an actual serialized candidate UV defect, independent of animation/rendering assumptions. LOD0/LOD1 have no cross-tile faces.
- The original validator only checks UVs against the global [0,1] square, despite calling this a padded-atlas check. It cannot detect these cross-material samples. Preserve UV island/tile ownership during LOD reduction and add a per-triangle ownership gate.
- All four inspected rear-leg diagnostics retain conspicuous triangular openings/facets and projecting strips around knees, calves and ankle/boot transitions. Cargo holster/pouch identity persists, but no reliable intact-leg acceptance is demonstrated. Some of this appearance already exists in the reduced source comparator, so it is not all attributed to this candidate's final LOD reduction.
- LOD0/1 retain a coherent helmet outline in the inspected views; LOD2 is more angular; LOD3 exposes a skin-colored opening below the goggles and a degraded brim/upper-helmet contour. The enlarged LOD closeups are inspection aids, not a claim about pixel size at gameplay distance.

Evidence: `evidence/uv-and-vector-check.json` contains exact triangle corners, positions, UVs and named joint influences; `fresh_visuals/lod{0,1,2,3}-runtime-{face,legs}.png`.

### G4 / P2: The blind "source" is not full-detail authored ground truth

Blind review was recorded before opening `SEALED-KEY.json`. The intended identity was already known from the user and candidate report, so this was subject/LOD blinding, not complete identity blinding. Preference was **C > B > A**. Reveal: A=current, B=aligned source, C=candidate; LOD A/B/C/D=0/1/2/3. The helmet break initially observed in B belongs to the source comparator, not candidate LOD0.

Inspection of `build_source_body.py` shows `mode=source` requests **0.12 reduction for opaque materials**, while keeping cutout/glass. The sealed conversion receipt starts at **67,913 source polygons**, not 16,392. Calling the resulting aligned 16,392-triangle reference "full-detail" is incorrect. The source vest alone is reduced from 2,838 to 340 triangles. The blind result demonstrates an improvement over two already processed representations, not complete preservation of the original authored geometry.

The authoritative lineup panel 2 and original Ruin reference were also actually inspected. They establish **Ruin - The Gateway biker**, with cap/helmet and goggles, beard, patched black vest, bare tattooed arms and pale cargo jeans. This is **not** hooded Alice or old skull Ghost. Identity selection/provenance passes; visual fidelity as a whole does not.

## Technical Results Preserved

| Gate | Result |
|---|---|
| Sealed candidate inventory | 940/940 entries match length and SHA-256; the seal itself is its only unlisted file |
| Original/archive provenance | 645/645 original source records and archived copies match; four correct Ruin body SMDs |
| Atlas recipe | All 61 occupied tiles reproduce byte-for-byte in memory from the recorded selected sources/semantics; zero missing-texture fallbacks; three unused tiles transparent |
| GLB binary integrity | All four headers/chunks, buffer/accessor bounds, finite streams, triangle indices and skin streams pass |
| Stock hierarchy | All four match the 51 stock joint names, order, parent map, local bind matrices and inverse binds exactly |
| Skin constraints | At most four influences; no negative weights, unweighted vertices or invalid positive joint slots; unit normals and normalized weights |
| LOD counts | 9,637 / 7,000 / 4,500 / 3,200 triangles; 11,029 / 9,261 / 6,781 / 4,987 vertices |
| Descriptor | Animated, four LODs at 220 / 500 / 1200 / 1000000; canonical copy changes only model filenames |
| Geometry serialization | No degenerate triangles; all four prior and canonical OAT semantic roundtrips pass; triangle material ownership/winding and named skin influences retained |
| Canonical OAT | Fresh critic-local link, list and complete dump: zero warnings/errors; exactly `playermodel_xi_ghost_5_1` |
| Material closure | All three materials' authored JSON fields survive OAT dump; all texture references resolve |
| IWI/IWD closure | Two-entry critic IWD; both external IWI payloads dump byte-for-byte with IWD search path; stock identity normal resolves |
| XModel budget | Zero-slot canonical replacement against verified 987/986/64 checkpoint; not a body rejection |

Maximum canonical roundtrip deltas: position **0**, normal **0.006898094**, UV **0.000488222**, weight **0.000045419**, local bind **0.000009537**, inverse bind **0.005043983**. Comparison remaps OAT's reordered joint array by exact name and uses recorded engine-format tolerances. Roundtrip fidelity does not cure source defects: the five cross-atlas triangles are faithfully carried through.

The original OAT "PASS" was incomplete: its full dump log finishes with **two missing external image errors**, despite exit code 0. Those historical logs are retained unchanged. This critic closed the gap using a canonical isolated build and a two-entry IWD supplied to Unlinker's search path; the complete fresh dump has zero errors and both IWI byte matches. No existing valid build was repeated merely to restart the review.

Diagnostic FF: `proving/zone_out/ghost51_biker_canonical_critic.ff`, 874,114 bytes, SHA-256 `461980599AEC554E2991F4215BC871930CAE54B37729621764C19B7488A5CD7B`.

Diagnostic IWD: `proving/zone_out/ghost51_biker_critic.iwd`, 343,650 bytes, SHA-256 `B1A6366C7C7EE46D28C7E6A871491A55C9029E35C045E0C54BC5F4104B2B9D74`.

## Isolation And Integration

The recovered critic directory initially contained four empty subdirectories and no completed audit/render files. The candidate's validated artifacts were reused; no prior agent was contacted, no subagent was created, and no conversion task was started. All critic file writes, FF/IWD creation, image decoding, temporary paths and new renders were confined to this critic directory. Candidate/source/production/build outputs/dashboard/Steam were read-only. No promotion loader, full-mod build, dashboard deployment or game launch was executed.

Initial/final snapshots hash **5,663 initial protected files**, including the entire candidate, original Ruin package, production/raw assets, package outputs and Steam mod files. **A blanket external-unchanged claim is NOT available:** the first after-snapshot observed one added budget JSON and changes to two external files, `source_data/full_asset_proving_status_20260905.md` and `tools/Build-GhostIcrProving.ps1`. Exact before/after lengths and hashes are retained. These changes were not made or reverted by this critic; their origin is not attributed. The candidate, authored source files, runtime payloads, sealed full proving package and protected Steam files remained byte-identical in that comparison. Final fingerprint results and any later drift are in `evidence/final-readonly-seal.json` and `RESULT.json`.

Dashboard locations were discovered later and **815 supplemental files** were fingerprinted for the final window, including reused independent audit implementations. This supplemental window is not presented as a reconstructed start-of-turn dashboard baseline. It detected one further external change: `F:/CodexData/Documents/Codex/2026-08-03/ok/.gauntlet-pages-deploy/index.html`, 148,724 to 153,820 bytes, SHA-256 `F40DCB35FC207DC08FAE24D684463989257EE2DF68EFFB7A70ECF64BEF5751EA` to `76A65DC0B45AE499C24CBA3A7704C05A66A7BF36229BF61B517AD96D56944747`. No dashboard write or deployment was issued by this critic. Thus dashboard/global noninterference remains unproven despite unchanged candidate/game payloads.

The updated external budget note introduces a broader stock-map HOLD (Vacant 992 against 990). This is recorded as later external context, not substituted for the user-specified Backlot checkpoint and not used to reject this slot-neutral body. The exact checkpoint FF/IWD/config/receipt hashes match. No full-map budget recomputation or package publication was performed here.

The existing Mara31 promotion manifest and the current `Stage-OperatorBodyPromotion` contract were inspected. A passing output would require status `PASS_FOR_PROVING_PACKAGE_ONLY`, four hash-bound canonical LODs, canonical descriptor, materials/IWIs, bound report/result and production HOLD/live outstanding flags. **This candidate does not satisfy the visual gates, so `promotion-manifest.json` is intentionally absent.** Critic-local canonical artifacts are not an authorization to bypass that gate.

## Required To Clear HOLD

1. Calibrate the stock pose parser/transforms/layering against anatomically plausible stock controls, then inspect this exact body under idle, run, crouch, fire and death at all four LODs. Keep pose-root presentation changes separate from deformation checks.
2. Fix the five serialized cross-tile vest faces with UV-island-safe LOD reduction; verify helmet, beard, vest and leg continuity against an unreduced authored reference.
3. Validate the actual runtime IWI and alpha/depth behavior, including beard strands, glasses and layered vest details. Use evidence that preserves serialized normals and matches the reviewed material contract.
4. Rebind changed hashes, replay only invalidated technical gates, and seal a stable protected-input window. Preserve the current canonical XModel ID. Live/gameplay and user acceptance remain additional gates, even after an eventual offline proving-only pass.

`RESULT.json` is the machine-readable HOLD. `SHA256-MANIFEST.json` seals critic outputs and binds reviewed external evidence. The manifest excludes itself to avoid circular hashing.
