# Independent Critic: Family23 Combined Attachment Tags Round 2

## Disposition

**PASS_FOR_PROVING_PACKAGE_ONLY**. Every independently replayed offline bar passes. This is not production approval and is not a live-engine acceptance.

A canonical hash-bound `promotion-manifest.json` was emitted for an isolated sealed proving package only.

## Gate Results

| Gate | Check | Result | Summary |
|---:|---|---|---|
| 1 | Round-2 SHA manifest and delivery seal | **PASS** | 66/66 payload rows; canonical delivery seal |
| 2 | upstream seal and frozen inputs | **PASS** | upstream 243/243; frozen 22/22 |
| 3 | independent OAT compile/list/dump | **PASS** | 8/8 compile; 8/8 list; 8/8 dump |
| 4 | compiled IW3 limits, hierarchy, selectors, magazines | **PASS** | 8/8 limits; 2/2 magazine isolation |
| 5 | compiled hide-state geometry and visibility | **PASS** | 16/16 exact view/world states |
| 6 | blind A/B and fixed-camera comparisons | **PASS** | 64/64 raster; 8/8 blind boards; 6/6 magazine views |
| 7 | field-only patch and protected finish bindings | **PASS** | 8/8 exact serialized weapon files |
| 8 | 993-checkpoint XModel projection | **PASS** | 993 - 17 + 8 = 984 |
| 9 | production, accepted arms/operator, Steam noninterference | **PASS** | all protected fingerprints unchanged |

## Seal And Frozen Inputs

- The real Round-2 builder SHA manifest passed 66/66 exact size/SHA-256 checks.
- The delivery checksum is the exact canonical CRLF line binding `delivery-manifest.json`; all delivery references and all 71 exhaustive written-file checksum rows pass.
- The upstream sealed builder manifest passed 243/243 rows.
- All 22/22 frozen Round3 authorities pass: two manifests, sixteen GLBs, and four review boards. All eight candidate GLBs and descriptors also match their delivery hashes.
- The historical 993-slot `mod.ff` and `xi_ftag.iwd` binaries are no longer retained in the recovery tree. Their exact sizes and hashes were verified as values in the frozen status authority, not by re-hashing absent files; the surviving linker log, prior critic, and all 95 unpacked checkpoint weapon overrides were checked directly.

## Independent OAT Replay

Each candidate was compiled, listed, and dumped in its own critic-owned base/output/temp tree. The candidate and OAT IW3 raw trees were read-only search roots.

| Candidate | Result | Rigid verts | Max index | Surfaces | Bones |
|---|---:|---:|---:|---:|---:|
| `viewmodel_f02_ram7_base_reflex_tags_r1` | PASS | 35948 | 6199 | 28 | 16 |
| `worldmodel_f02_ram7_base_reflex_tags_r1` | PASS | 35948 | 6199 | 28 | 6 |
| `viewmodel_f02_ram7_cs_tags_r1` | PASS | 35967 | 6199 | 23 | 16 |
| `worldmodel_f02_ram7_cs_tags_r1` | PASS | 35967 | 6199 | 23 | 6 |
| `worldmodel_f02_ram7_mag_authored_r1` | PASS | 1161 | 695 | 2 | 6 |
| `viewmodel_f03_dm56_combined_tags_r1` | PASS | 43283 | 2429 | 63 | 20 |
| `worldmodel_f03_dm56_combined_tags_r1` | PASS | 43283 | 2429 | 63 | 8 |
| `worldmodel_f03_dm56_mag_authored_r1` | PASS | 1613 | 795 | 4 | 8 |

All 8/8 compiles, 8/8 lists, and 8/8 dumps pass with zero warning/error diagnostics. All 8/8 fastfiles are byte-identical to the frozen compile hashes, list exactly one intended XModel, round-trip exact state/material/coordinate triangle multisets, and satisfy the IW3 rigid vertex/index/surface/bone limits.

## Visibility And Cameras

All 16/16 view/world hide-state checks expose exactly one intended selector state and match the corresponding frozen Round3 authority by exact non-degenerate material-and-coordinate triangle multiset. Selector membership is checked from compiled-dump joint weights and is grounded in OAT/CoD4 `partBits` source behavior.

The blind boards were inspected before opening `blind-key.json`; no A/B mismatch was discernible in rail, optic, static ADS-axis geometry, intersections, floating parts, material, completeness, duplication, or framing. Independent pixel recomputation passes 64/64 fixed-camera pairs. Maximum normalized RGBA RMSE is `5.12301157e-05`, minimum foreground IoU is `0.999947971`, maximum bounding-box delta is `0` px, and maximum centroid delta is `0.00581839598` px. The six magazine views show only magazine/cartridge geometry.

The static camera named `ads` is only an offline geometry view. It is not a live ADS test.

## Weapon Patch

All eight staged files are exact serializations of their hash-guarded production sources with only the manifest-authorized primary gun/world slots, `worldClipModel`, and `hideTags` changed. Field order, delimiters, and every unrelated Latin-1 value remain exact. Protected `gunModel2` and `worldModel2` are absent from every change set and remain byte/value exact to the active finish contract.

| Weapon | State | protected gunModel2 | protected worldModel2 | untouched fields | Result |
|---|---|---|---|---:|---:|
| `g3_mp` | base | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_reflex_mp` | reflex | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_acog_mp` | compact | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `g3_silencer_mp` | suppressor | `viewmodel_gh_sc2010_v2_xi` | `worldmodel_xi_m13b` | 346 | PASS |
| `m14_mp` | base | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_reflex_mp` | reflex | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_acog_mp` | compact | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |
| `m14_silencer_mp` | suppressor | `viewmodel_ow2_mk14_xi` | `worldmodel_mw3_mk14` | 343 | PASS |

Literal-LF `hideTags` values are valid IW3 array grammar, use at most three of eight entries, and select exactly one compiled state. Each `worldClipModel` resolves to one of the two independently compiled, magazine-only models.

## Pool Projection

The scoped changed-slot enumeration covers all 95 exact-checkpoint weapon overrides. Retired unique model IDs (17):

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

The required projection is **993 - 17 + 8 = 984**, a net reduction of 9 and 6 below the strict 990 ceiling. `worldmodel_xi_m13b` remains referenced after the in-memory patch and is not in the retired set.

This is only the primary-slot substitution projection. Unchanged protected finish slots are excluded symmetrically and reported separately; no rebuilt integrated pool count is claimed.

## Noninterference

All 10 protected tree fingerprints are unchanged, including production `zone_raw`, `zone_source`, `zone_out`, `zone_out_proving`, `source_data`, Steam, frozen Round3, both prior sealed roots, and the Round-2 builder. Git status is unchanged. The accepted-viewarms aggregate and current operator-work aggregate are independently unchanged. All writes were confined to `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\family23_combined_attachment_tags_round2_critic`; temporary compile output was removed before sealing.

## Blockers

- None.

## Explicitly Outstanding And Not Tested

- Live CoD4 animation behavior.
- Live CoD4 ADS behavior.
- Live CoD4 reload behavior.
- Live CoD4 drop behavior.
- Measured integrated map/runtime XModel-pool behavior.

No production, Steam, dashboard, other-family, or source-file change was applied or tested as part of this critic pass.
