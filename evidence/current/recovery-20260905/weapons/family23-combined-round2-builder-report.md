# RAM-7 / DM56 Combined-State Repair: Round 2

## Disposition

**PASS_FOR_PROVING_PACKAGE_ONLY**. All nine offline gates pass. This is not a production promotion or a live-engine acceptance.

No `promotion-manifest.json` was created.

## Gate Results

| Gate | Check | Result | Summary |
|---:|---|---|---|
| 1 | builder seal and frozen Round3 hashes | **PASS** | builder 243/243; frozen 22/22 |
| 2 | independent OAT Linker/list/Unlinker roundtrip | **PASS** | 8/8 isolated candidates; 8/8 byte-frozen compiles |
| 3 | IW3 limits, hierarchy, and weights | **PASS** | 8/8 compiled dumps |
| 4 | compiled hideTags visibility and selector partBits | **PASS** | 16/16 exact visible states |
| 5 | blind boards, fixed cameras, and Round3 authored bar | **PASS** | 64/64 raster; 16/16 geometry |
| 6 | dedicated magazine isolation and worldClipModel | **PASS** | 2/2 compiled magazines and 8/8 worldClipModel values |
| 7 | field-only patch, protected finishes, and IW3 grammar | **PASS** | 8/8 protected slot pairs and all unrelated fields preserved |
| 8 | exact 993-checkpoint unique-XModel projection | **PASS** | 993 - 17 + 8 = 984; six below 990 |
| 9 | production, Steam, and staging noninterference | **PASS** | all protected fingerprints unchanged; writes confined to round-2 root |

## Sealed Inputs

- Round-1 builder seal: `09FDBDC64408D3750F8903969CC278B6B8540C6901FBD6710E42803D2748D97F`; 243/243 listed files independently matched in size and SHA-256.
- Frozen Round3 authority: 22/22 files matched, comprising both manifests, sixteen GLBs, and four review boards.
- Fresh round-1 critic report: `716A2079C7C06B7A451DB14E0B8B359692B9D1705DC87E7455486E3EBF04215F`.
- Candidate delivery GLBs and descriptors remained byte-identical to the sealed delivery before compilation. Round 2 did not rewrite XModel source geometry or accepted render evidence.

## OAT And Limits

OpenAssetTools Linker/list/Unlinker was rerun separately for every candidate with round-2-owned base, output, temp, and dump directories. The sealed builder candidate tree and OAT IW3 raw tree were read-only search roots.

| Candidate | Result | Rigid verts | Max index | Surfaces | Bones | diagnostics L/list/U |
|---|---:|---:|---:|---:|---:|---:|
| `viewmodel_f02_ram7_base_reflex_tags_r1` | PASS | 35948 | 6199 | 28 | 16 | 0/0/0 |
| `worldmodel_f02_ram7_base_reflex_tags_r1` | PASS | 35948 | 6199 | 28 | 6 | 0/0/0 |
| `viewmodel_f02_ram7_cs_tags_r1` | PASS | 35967 | 6199 | 23 | 16 | 0/0/0 |
| `worldmodel_f02_ram7_cs_tags_r1` | PASS | 35967 | 6199 | 23 | 6 | 0/0/0 |
| `worldmodel_f02_ram7_mag_authored_r1` | PASS | 1161 | 695 | 2 | 6 | 0/0/0 |
| `viewmodel_f03_dm56_combined_tags_r1` | PASS | 43283 | 2429 | 63 | 20 | 0/0/0 |
| `worldmodel_f03_dm56_combined_tags_r1` | PASS | 43283 | 2429 | 63 | 8 | 0/0/0 |
| `worldmodel_f03_dm56_mag_authored_r1` | PASS | 1613 | 795 | 4 | 8 | 0/0/0 |

All eight isolated fastfiles are byte-identical to the frozen round-1 compiles, list exactly one intended XModel, compile/list/unlink with zero warnings and zero errors, and round-trip exact selector-state/material/coordinate triangle multisets. Every compiled dump is rigid, has valid unit weights and hierarchy, and satisfies the requested vertex/index/surface/bone ceilings.

The engine-semantic check is source-grounded, not a naming convention: OAT sets `XSurface.partBits` from actual vertex bone membership, while CoD4 intersects all four surface part-bit words with the DObj hide mask and skips a surface on any hit. Every compiled base-bearing surface has the `tag_ftag_base` selector membership.

## Visibility

| Weapon | Role | Compiled model | hideTags | Visible state | Result |
|---|---|---|---|---|---:|
| `g3_mp` | view | `viewmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_reflex` | `base` | PASS |
| `g3_mp` | world | `worldmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_reflex` | `base` | PASS |
| `g3_reflex_mp` | view | `viewmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_base` | `reflex` | PASS |
| `g3_reflex_mp` | world | `worldmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_base` | `reflex` | PASS |
| `g3_acog_mp` | view | `viewmodel_f02_ram7_cs_tags_r1` | `tag_ftag_suppressor` | `compact` | PASS |
| `g3_acog_mp` | world | `worldmodel_f02_ram7_cs_tags_r1` | `tag_ftag_suppressor` | `compact` | PASS |
| `g3_silencer_mp` | view | `viewmodel_f02_ram7_cs_tags_r1` | `tag_ftag_compact` | `suppressor` | PASS |
| `g3_silencer_mp` | world | `worldmodel_f02_ram7_cs_tags_r1` | `tag_ftag_compact` | `suppressor` | PASS |
| `m14_mp` | view | `viewmodel_f03_dm56_combined_tags_r1` | `tag_ftag_reflex,tag_ftag_compact,tag_ftag_suppressor` | `base` | PASS |
| `m14_mp` | world | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_reflex,tag_ftag_compact,tag_ftag_suppressor` | `base` | PASS |
| `m14_reflex_mp` | view | `viewmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_compact,tag_ftag_suppressor` | `reflex` | PASS |
| `m14_reflex_mp` | world | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_compact,tag_ftag_suppressor` | `reflex` | PASS |
| `m14_acog_mp` | view | `viewmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_reflex,tag_ftag_suppressor` | `compact` | PASS |
| `m14_acog_mp` | world | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_reflex,tag_ftag_suppressor` | `compact` | PASS |
| `m14_silencer_mp` | view | `viewmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_reflex,tag_ftag_compact` | `suppressor` | PASS |
| `m14_silencer_mp` | world | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base,tag_ftag_reflex,tag_ftag_compact` | `suppressor` | PASS |

All 16 compiled hide-state simulations expose exactly one selector state. After selector-carrier degenerate faces are removed, every visible state is an exact material-and-coordinate triangle multiset match to its sealed Round3 view/world authority. This also rules out a duplicated gun, omitted gun, attachment substitution, relative attachment drift, or material swap in the compiled state.

## Visual Review

The eight anonymous A/B boards were inspected before `blind-key.json`. Across eight cameras per board, no rail, optic, ADS-axis, intersection, float, material, completeness, duplication, or framing discrepancy was visible. Independent pixel recomputation passed 64/64 comparisons: maximum normalized RGBA RMSE `5.12301157e-05`, minimum foreground IoU `0.999947971`, maximum bounding-box delta `0` px, and maximum centroid delta `0.00581839598` px. Exact raw-coordinate geometry equality independently rules out candidate-specific registration as an explanation.

The six magazine views show only magazine and cartridge geometry. Candidate and compiled-dump material/name inventories are limited to magazine/bullet assets, and every patched `worldClipModel` points to one of the two dedicated compiled magazine models, never a whole rifle.

## Weapon Repair

Round-2 copies of all eight weapon files were created from their hash-guarded read-only sources. `gunModel2` and `worldModel2` are absent from every patch target and remain byte-and-value exact. The reviewed populated gun/world slots other than slot 2, `worldClipModel`, and `hideTags` are the complete target set. Field ordering and every non-target field value are exact; literal-LF `hideTags` values satisfy real IW3 grammar and the eight-entry capacity.

| Weapon | State | preserved gunModel2 | preserved worldModel2 | untouched fields | Result |
|---|---|---|---|---:|---:|
| `g3_mp` | base | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_reflex_mp` | reflex | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_acog_mp` | compact | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_silencer_mp` | suppressor | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `m14_mp` | base | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_reflex_mp` | reflex | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_acog_mp` | compact | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_silencer_mp` | suppressor | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |

## Pool Projection

Retired unique model IDs (17):

- `viewmodel_f02_ram7_round3_base`
- `viewmodel_f02_ram7_round3_compact`
- `viewmodel_f02_ram7_round3_reflex`
- `viewmodel_f02_ram7_round3_suppressor`
- `viewmodel_f03_dm56_round3_base`
- `viewmodel_f03_dm56_round3_compact`
- `viewmodel_f03_dm56_round3_reflex`
- `viewmodel_f03_dm56_round3_suppressor`
- `worldmodel_f02_ram7_round3_base`
- `worldmodel_f02_ram7_round3_compact`
- `worldmodel_f02_ram7_round3_reflex`
- `worldmodel_f02_ram7_round3_suppressor`
- `worldmodel_f03_dm56_round3_base`
- `worldmodel_f03_dm56_round3_compact`
- `worldmodel_f03_dm56_round3_reflex`
- `worldmodel_f03_dm56_round3_suppressor`
- `worldmodel_mw3_mk14`

Introduced unique model IDs (8):

- `viewmodel_f02_ram7_base_reflex_tags_r1`
- `viewmodel_f02_ram7_cs_tags_r1`
- `viewmodel_f03_dm56_combined_tags_r1`
- `worldmodel_f02_ram7_base_reflex_tags_r1`
- `worldmodel_f02_ram7_cs_tags_r1`
- `worldmodel_f02_ram7_mag_authored_r1`
- `worldmodel_f03_dm56_combined_tags_r1`
- `worldmodel_f03_dm56_mag_authored_r1`

The exact scoped formula is **993 - 17 + 8 = 984**, a net reduction of 9. The projection is six below the strict 990 release ceiling. `worldmodel_xi_m13b` is not retired: untargeted exact-checkpoint weapons still reference it. The round-1 `983` claim is rejected and is not reused.

This delta is explicitly limited to the complete-state primary-slot substitution. The unchanged protected `gunModel2` and `worldModel2` bindings are excluded symmetrically and listed in `RESULT.json`; measured integrated pool behavior remains pending.

## Scope And Pending Work

Production `zone_raw`, `zone_source`, `zone_out`, `zone_out_proving`, `source_data`, the Steam mod tree, Git status, the sealed builder root, and the prior critic root fingerprinted identically before and after this replay. Every written artifact is under `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\family23_combined_attachment_tags_round2`; no candidate source subtree was copied.

Live CoD4 animation, ADS, reload, drop behavior, and measured map/runtime XModel-pool behavior remain explicitly **PENDING**. This report makes no integrated runtime claim.
