# XI CoD4 FreezeTag Viewhands Critic Round 12 Ghost

## Verdict: PASS

The frozen candidate passes the requested GLB, skinning, animation, source-preservation, and mandatory visual bars. The candidate is not as anatomically clean as stock: its palms and wrists are thinner and more faceted, and the left underside has an angular X-like thenar/wrist crease. That gap was locked as **nonfatal** before identity reveal and remains the primary defect.

No OAT conversion, production promotion, build-script edit, Steam operation, or git operation was performed. All writes were confined to this audit directory.

## Frozen identity and hashes

| Input | SHA-256 |
|---|---|
| Candidate `hands.glb` | `47632BE9B567B257A39D86314FB2CB82C1354A1AA519C2845CB75A3BBB6356C6` |
| Stock hands | `3FF4DD298BEEEA7FD4EB7FF25DE5B7D21CA33059583FB8A283F7EF7ECDFEB182` |
| Stock M16 | `77004FAC9920D5051A5180EAE0A17E0F8F02356A79B9D6A7B81999E851EC1D15` |
| Authored Ghost SMD | `4DABB81AFB32CAAED248A4A8F5B1107EDE9E4ABB2D4BD024001DFF351C1654DA` |
| Source Ghost GLB | `453CCB686DBF146788C5A517A9E445DE4AD748ACAF1BC31CF5169DF1B1E918F0` |
| Idle XANIM | `5341FF96BA99379E8BE0E71D3B365B16790CF9D03156AB24D0221FF821543697` |
| Reload-empty XANIM | `FB3F810C6A4652A18658D4D700AE5504121E0283BCEE9EAEE17A54AC2671A11F` |
| Body material JSON | `E18CF04E34F3865A11B0B43F981FDC9F1D487C0AD7BFA3E52E6E21093D5AAC1F` |
| Glass material JSON | `3ECEEA458140AEE38DA002E2A346ED295019919BC2388740125DB408880DD58B` |
| Source color DDS | `E496045189939F84F562643CEB1CE9C7566B856002B7A0A0CE1B883B12571A9E` |
| Identity normal DDS | `CE9B0ED111BDAA932B5FEB145ABF9D7252F7A35C10C1E2647B6D924D2BF34A96` |

The candidate hash exactly matches the expected hash supplied for this round.

## Blind protocol

The first precommit receipt was superseded before model inspection because it exposed raw anonymous-file hashes, allowing the supplied candidate hash to reveal the assignment. Those artifacts are preserved under `superseded_precommit_v1` and were never used for scoring.

The clean v2 randomization was created before any GLB, render, manifest, or builder conclusion was opened:

- Plaintext mapping commitment: `0449A0929B3A4BB0D2690814D8656966E5C28D17AA8EF200593CD2EEEECA4FA4`
- Sealed mapping hash: `74FA91D4F9AC77885F3103254258CDA3B7947198CB5A120AF06D6A1113588346`
- Key-material hash: `F9172CBC7149477F3DE08AC2C617D2FAA4BC296525BB259F124467F2B58E37B4`
- Locked ballot hash: `C1F813196071534B4B143910771C489109CB6EA99CDBE5F37863AFE06456DFE2`
- Primary blind render-manifest hash: `B0F51DDAD5DE2E5001A6AE296D78DAFACA9FCD2843254C4C2B1DC6CD5F193020`

All key, sealed-payload, HMAC, plaintext-commitment, keyed-input, and source-copy checks passed at reveal. The revealed mapping was:

- **A = stock**
- **B = candidate**

## Locked blind ballot

Scores use `0` for severe failure, `3` for borderline, `4` for acceptable, and `5` for clean control quality.

| Criterion | A | B | Vote |
|---|---:|---:|---|
| Bind anatomy across palm/back/underside/side | 5.0 | 4.0 | A |
| Wrist/cuff/forearm continuity | 5.0 | 4.0 | A |
| Thumb opposition and palm volume | 5.0 | 4.0 | A |
| Finger completeness and fingertips | 5.0 | 4.0 | A |
| Idle fore-end contact | 5.0 | 4.0 | A |
| Idle trigger-hand contact | 5.0 | 4.0 | A |
| Reload magazine/fore-end contact | 5.0 | 4.0 | A |
| Reload trigger-hand/receiver contact | 5.0 | 4.0 | A |
| Camera volume and contamination silhouette | 4.5 | 4.0 | A |

The locked dispositions were `A = PASS` and `B = PASS_WITH_NONFATAL_ANATOMICAL_GAP`. Reveal therefore transfers B's visual pass to the candidate.

## Visual findings

The primary suite contains 56 neutral-clay A/B pairs at one shared orthographic camera solution and one shared three-light setup per pair. It covers six axes for bind, idle frame 15, and reload frame 35; both wrists/cuffs/forearms; both thumbs and fingertip groups; trigger and fore-end contacts; and idle/reload timeline samples. A second 56-pair lighting pass and 12 source-color candidate renders are also preserved.

Candidate mandatory-bar results:

- Reversed hands: **none**
- Collapsed or corkscrewed wrists/forearms: **none**
- Flattened palms: **none**; the left underside crease is angular but retains depth in orthogonal views
- Missing or inside-out fingers: **none**
- Impossible thumb opposition: **none**
- Camera-dominating volume: **none**
- Material or geometry contamination: **none**
- Idle/reload placement worse than stock: **no**

Idle and reload show coherent M16 placement at the trigger/grip, receiver, magazine path, and fore-end. Candidate intersections are comparable to the stock control and there is no obvious candidate-only hover or deep penetration.

Nonfatal visual defects retained after reveal:

1. Hands are thinner and more faceted than stock.
2. The left underside has an angular X-like thenar-to-wrist crease.
3. Cuff spikes and straps make a busy silhouette, but remain localized, connected source apparel rather than contamination.

## Structural findings

- GLB size: `3,716,728` bytes.
- Serialized geometry: `61,233` vertices, `20,411` triangles, 8 primitives, 2 materials.
- No degenerate-index triangles, zero-area triangles, duplicate triangles, invalid indices, or nonmanifold edges were found.
- The export is deliberately triangle-expanded, so strict index connectivity reports `20,411` one-triangle components. Welding coincident positions at `1e-5` yields 289 geometric components across the 8 primitives; every per-primitive welded component count and triangle-size profile matches the frozen source GLB.
- Serialized bind bounds: min `[-7.444550, -16.531057, -12.591290]`, max `[19.882193, -0.144239, 12.944335]`, span `[27.326743, 16.386818, 25.535625]`.
- Skin joints: exactly `91`, satisfying both the `<=91` target and 128-joint safety ceiling.
- All 71 stock-required hand-rig joint names are present. There are 20 source-preserving extras and no duplicate joint names.
- Direct parents differ at the shoulders and root because of `j_clavicle_le`, `j_clavicle_ri`, and the candidate armature root. The inserted nodes are exact identity passthroughs; after collapsing extras, every required parent relation matches stock.
- Candidate inverse-bind count is 91. Maximum bind identity error is `8.64e-7`; bind determinants remain approximately 1.
- Maximum positive influences per vertex: `4`; `JOINTS_1`/`WEIGHTS_1` are absent.
- Unweighted vertices: `0`; invalid joint indices: `0`.
- Minimum serialized nonzero weight: `0.01176498830318451`, above the required `0.0101` floor.
- Weight-sum range: `0.9999999553` to `1.0000000447`.

`tag_camera` appears before its parent `tag_cambone` in the GLB skin-joint array, although the node graph hierarchy and inverse binds are valid. glTF does not require skin joints to be parent-first; downstream OAT handling was not exercised because conversion was prohibited.

## Source materials and UVs

- Candidate material names are exactly `mc/xi_operator_ghost_5_1_t8_viewhands` and `mc/xi_operator_ghost_5_1_t8_viewhands_glass`.
- The authored SMD has 9 triangle sections; one candidate primitive combines two adjacent source sections, producing 8 GLB primitives.
- All `20,411` triangle counts align by cumulative source-section boundaries.
- Every candidate UV corner is float32 bit-for-bit identical to the authored SMD. Maximum UV delta: `0.0`.
- Source-color renders show coherent biker patches, tattoo panels, glove wraps, watch glass, and cuff hardware with no foreign patches or detached material islands.
- The material JSONs reference a specular image absent from the frozen builder-input bundle, but read-only source and compiled copies already exist in `zone_raw`; no material image reference remains unresolved.

## Animation transforms

- Idle: version 17, 30 terminal frame (`31` sampled frames), 30 fps.
- Reload-empty: version 17, 70 terminal frame (`71` sampled frames), 30 fps.
- All candidate posed coordinates are finite at every sampled frame.
- All candidate node determinants remain positive and approximately 1.
- No posed zero-area triangle was found across either full animation sweep.
- All 68 hand-rig track nodes common to candidate and stock have exact stock world matrices at every frame. Weapon-only track names are absent from both hand GLBs as expected.

Numerical equality was supporting evidence only. The PASS is grounded in the locked blind renders and contact inspection described above.

## Biggest remaining gap

The single biggest remaining gap is the intentionally forbidden OAT/in-game validation: the triangle-expanded surfaces, non-parent-first skin-array entry, final IW3 material shaders, and first-person game FOV were not exercised through an actual CoD4 import and runtime render.

## Evidence index

- `mapping_v2_commitment.json`, `mapping_v2.sealed.bin`, `mapping_v2.key.bin`, `mapping_v2_reveal.json`
- `blind_ballot.json`, `blind_ballot_lock.json`
- `render_manifest_blind_lit_v2.json`, `renders_blind_lit_v2/`, `contact_sheets_blind_lit_v2/`
- `render_manifest_blind.json`, `renders_blind/`, `contact_sheets_blind/`
- `render_manifest_candidate_textured.json`, `renders_candidate_textured/`
- `structural_audit.json`, `semantic_topology_audit.json`, `smd_source_uv_audit.json`
- `input_hashes_and_materials.json`
- Every audit/parser/render/receipt script used to produce the evidence is preserved in this directory.
