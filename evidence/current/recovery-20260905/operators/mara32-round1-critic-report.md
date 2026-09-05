# Mara32 Cheerleader: Independent Critic Review

## Verdict

**HOLD. No promotion manifest is authorized or emitted.** This is a completed review, not an interrupted conversion. The selected identity is **Outrider Cheerleader, lineup panel 6**, mapped to `mara_3_2`. Production, Steam, live-engine and user acceptance remain HOLD/outstanding.

**Largest gap: no acceptable, calibrated five-stock-pose deformation proof.** The submitted LOD0 fire image at `pt_rifle_fire`, frame **6.3**, visibly folds the torso over the waist and tangles the arms across the upper body. Idle, run, crouch and death also exhibit severe hip/skirt or limb distortion. These actual images and their OBJ caches are hash-bound and were inspected. Builder numeric PASS labels do not establish anatomical or attachment correctness. LOD1-3 have **zero** corresponding pose renders; no canonical OAT-dump pose renders or calibrated stock-control visuals are supplied.

This is a failure of the submitted acceptance evidence, not a claim that a live CoD4 session reproduced these exact poses. The evaluator's coordinate-space handling and standalone partial-body firing-clip application are not calibrated against a trusted stock result. Correct the evaluator or the conversion as established by that control, then prove the actual candidate. Do not approve the current package on the assumption that the renderer alone is wrong.

## Findings

1. **P1: Stock-pose evidence is visibly unacceptable and coverage is incomplete.** The five reviewed samples are listed below. Independent recalculation from the preserved OBJ caches reproduces the builder's edge ratios within `1e-6`, with unchanged topology and finite positions. Thus these are not stale pictures. The shared stock-relative numeric gate checks neither anatomical plausibility nor triangle inversion, self-intersections or physical attachment. It accepts the illustrated failures.
2. **P2: Rear-waist decoration remains visibly isolated.** Side boards show an air gap in both candidate and source, and in every LOD. The traced subset is opaque atlas tile **26**, source material `xmaterial_a9795ebcaddab70`, runtime material `mc/xi_mara32_cheerleader_body`; alpha testing is disabled. Source/LOD0/LOD1/LOD2/LOD3 retain respectively **270/120/93/64/49** selected triangles. All selected vertices are weighted to `j_spineupper` and `j_spine4`, not unweighted. Authored provenance and bone membership do not establish correct placement or a physical attachment. Do not delete authored decoration merely to hide this issue; resolve placement against the original intended body assembly.
3. **P2: Runtime material appearance is not fully represented by the renders.** Preserved Blender renders use a **1024x2048** source PNG; the actual color IWI is **512x1024 DXT5**, with a **4x4** specular IWI and `$identitynormalmap`. The preview uses its own clipping/glass settings rather than the IW3 shaders. Material semantics and byte closure pass, but these pictures alone cannot prove runtime face/hair alpha and lighting fidelity.

| Pose | Stock XAnim | Frame | Tracked joints | Maximum edge ratio | Visual decision |
| --- | --- | ---: | ---: | ---: | --- |
| Idle | `pb_hold_idle` | 63 | 42/51 | 7.789251 | HOLD: rearward bend, hip/skirt distortion |
| Run | `pb_run_fast` | 6.72 | 35/51 | 7.746839 | HOLD: angular shoulder and hip/skirt distortion |
| Crouch | `pb_crouch_alert` | 142.5 | 42/51 | 7.886416 | HOLD: tangled legs, sharp hip/elbow distortion |
| Fire | `pt_rifle_fire` | 6.3 | 25/51 | 3.803662 | HOLD: folded torso and tangled arms |
| Death | `pb_stand_death_frontspin` | 43.46 | 42/51 | 10.571844 | HOLD: torn-looking hip/skirt geometry |

Untracked joints are not automatically a defect for partial clips. Their correct base-pose/composition behavior still needs a calibrated demonstration. No non-finite positions or numerically zero-length collapsed edges were found; that narrower result does not clear visible collapse, twisting or intersections. Source XAnim hashes are bound to the preserved stock-validation files; this continuation did not independently re-extract those animations from stock fastfiles.

## Recovered Evidence

- Preserved all **13** pre-existing critic files byte-for-byte, including the original sealed blind assessment, initial/current audits and the partly updated `independent_audit.js`. No prior verdict was silently rewritten.
- Revalidated the original seal: candidate **465 files**, authored source package **140**, proving runtime **393**, exact proving output **4**, production raw assets **2176**, plus **6 protected files**. All **3184** records matched on resume. At final sealing, all **3178 tree files** and five protected stock fastfiles still match; the protected build script changed externally, as detailed below.
- Reused all six hash-matching blind boards. The continuation inspected front, back, side, three-quarter, face and LOD boards before opening the key. It was already given the target identity and earlier assessment, so this is not claimed as a fresh blind experiment.
- Preserved ranking **B > A > C**; reveal is **A=candidate, B=source, C=current military Mara**. LOD mapping is **A=LOD3, B=LOD1, C=LOD2, D=LOD0**. The source/candidate match the actual panel-6 cheerleader: blonde ponytail, matching face/hairline, weathered SPHS uniform, red gloves, skirt, pom-poms, asymmetric knee pad, striped socks, shoes, bottle and pouch. This is not acceptance of an arbitrary similar operator.
- Inspected the authoritative lineup, the five individual pose PNGs, and all four individual three-quarter LOD PNGs. The latter expose the heads hidden by labels on the compact blind LOD board. Three-quarter images crop part of an outstretched hand at the left boundary; full front comparisons supply LOD0 hand coverage. Static gross identity/silhouette persists, but this is not complete all-view/all-pose LOD acceptance.
- The authored package mirror is byte-exact across **140 files**. The builder inventory contains **464 hash-listed files**, plus its own manifest. These prior checks were reused only after the entire candidate/source trees matched the original seal.

## GLB And OAT

Canonical OAT work was confined to this critic's `oat/` directory. Only descriptor/LOD filenames were canonicalized; all four candidate GLB payloads, three material JSONs and two IWIs were copied byte-exact. Neither the production builder nor its promotion function was executed.

| LOD | Candidate vertices | Triangles | Surfaces | Stock joints | Canonical semantic roundtrip |
| --- | ---: | ---: | ---: | ---: | --- |
| 0 | 11381 | 9597 | 3 | 51 | PASS |
| 1 | 8913 | 6993 | 3 | 51 | PASS |
| 2 | 6408 | 4496 | 3 | 51 | PASS |
| 3 | 4854 | 3196 | 3 | 51 | PASS |

- GLB2 header/chunk lengths, embedded binary closure, accessor bounds/alignment, finite values, hierarchy graph, skin/IBM counts and primitive attribute counts pass. Candidate indices are uint16; at most four normalized influences; no invalid indices, repeated-index or geometric-degenerate triangles, invalid joints, unweighted vertices, zero normals or out-of-range UVs. All **32** atlas tiles remain represented in every LOD.
- Each candidate has the exact **51 stock joint names, joint parents, local transforms and inverse bind matrices** of the staged `body_mp_usmc_assault_lod0.glb` reference. This structural result does not prove correct weight assignment under motion.
- Canonical OAT **build, list, IWI dump and image-only DDS export each exit 0 with 0 warnings and 0 errors**. The list contains exactly **one concrete XModel**, `playermodel_xi_mara_3_2`, no XModel references, three body materials, two custom image names and stock `$identitynormalmap`.
- Wound triangle/material multisets and bounds survive exactly. Per-corner maximum changes: UV **0.000488221645**, normal component **0.006897807121**, bone-name weight **0.000045388937**; limits used were **0.0005**, **0.01**, and **3/65535** respectively. Reindexing and influence ordering are handled semantically, not by raw vertex counts.
- The earlier GLB false failure compared the non-joint skeleton-container name. Its transform is equivalent; all actual joint-to-joint parents match. OAT local-transform maximum delta is **0.000009537** and inverse-bind maximum delta **0.005043983**, within the previously established `1e-4` and `0.01` roundtrip bounds. No actual joint-parent change was excused.
- Opaque and cutout material JSON semantics are exact. Glass differs only at `/constants/0/literal/0`: **0.8 -> 0.800000011920929**, exactly the same float32 value. No broad numeric rounding was used to conceal other differences.
- Both IWIs are byte-exact source -> critic -> OAT dump, with valid IW3 v6 headers and complete DXT5 no-mip payload lengths. The dump reads external IWI bytes through the critic-only search path; the report does **not** claim those bytes were embedded in the FF. OAT's DDS preview references were resolved by an image-only export from that existing FF, not a rebuild.
- No shipping IWD or promotion artifact was created for this held candidate. Canonical FF/descriptor files are diagnostic evidence only, not authorization to stage them.

## Exact Budget

The specified `lead_current_package_projection/REPORT.md` and hash-matching independent slot audit are authoritative here: **987 runtime XModel slots, 986-name union, 64 mod-exclusive names, strict cap 990**, with three slots of headroom and one map-specific duplicate (`weapon_saw_mg_setup`) for `mp_backlot`. The exact integrated FF hash is `8CCDAC3C14E28EE2A6695E4E581A7838F2E4A5FA3C2021FF621945D2264C2619`.

Replacing the already-loaded canonical body is **slot-neutral**: projected **987 slots / 986 names**, not 993. Replacing the old two-material body closure with three materials projects **1717 runtime materials**, versus current 1716. This is a dependency-replacement projection, not a newly rebuilt integrated package. Budget is **not** a HOLD reason.

## Isolation And Next Proof

All writes by this continuation are under this critic directory. No subagents, conversion process, production build, staging/promotion, deployment, dashboard update or Steam operation was launched. The five original trees, five protected stock fastfiles, the additionally used stock `common.ff`, both OAT executables and the 13 original critic files remain hash-identical.

**The global no-external-change gate is not proven:** `xi_ftag/tools/Build-GhostIcrProving.ps1` changed during this review from **100557 bytes**, SHA-256 `3CF85E18C02C7A1CECD8C2B2A55678B1DFC329F33399027F96581C582D69836C`, to **102437 bytes**, SHA-256 `A844047F999A19A9D35CB54E8BB35670BBD5AF58E4267A6A86DC0C0E437CBC3B` (observed last-write UTC `2026-09-05T10:51:32.4307955Z`). This continuation did not write that path, identify the other writer or revert the change. The promotion function was read again and still requires a passing independent result and schema-1, proving-only manifest. No such authorization is emitted. The exact measured proving FF itself did not change, so the 987-slot baseline remains valid.

This is hash evidence for the enumerated paths, not a whole-disk or whole-dashboard before/after inventory. Earlier unrelated builder-window drift also remains recorded in the candidate. Neither that historical drift nor this newly observed script change was silently erased or relabeled as unchanged.

To clear HOLD: calibrate the pose evaluator against stock CoD4, resolve track-space/partial-clip composition versus actual weight defects, demonstrate all five poses across all four LODs and the canonical dump without twisting/collapse/intersections, resolve the rear decoration placement, and inspect actual runtime-IWI/shader appearance. Preserve the selected authored identity and all existing valid evidence. Only an actual passing review may emit the schema-1 promotion manifest expected by `Stage-OperatorBodyPromotion`; even then the status is at most `PASS_FOR_PROVING_PACKAGE_ONLY`, with live/user/production acceptance outstanding.

Primary machine evidence is in `evidence/recovery/`: `pose-visual-coverage.json`, `rear-component-trace.json`, `glb-canonical-semantic.json`, `material-iwi-closure.json`, `oat-canonical-replay.json`, `oat-dds-preview-closure.json` and `noninterference-final.json`. `SHA256-MANIFEST.json` seals this completed critic directory, excluding only itself to avoid a self-hash cycle. Original partial audits remain under `evidence/machine/` and are superseded only in the explicitly explained follow-up checks above.
