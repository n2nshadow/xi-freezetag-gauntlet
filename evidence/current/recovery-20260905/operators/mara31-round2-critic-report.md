# Independent Mara31 Zero - Dark Sails Round 2 Critic Report

Generated 2026-09-05T08:20:56.383802+00:00. All writes stayed under `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\mara31_body_round2_critic`.

## Verdict

**PASS_FOR_PROVING_PACKAGE_ONLY**

The real candidate passes every offline gate when mapped to canonical `playermodel_xi_mara_3_1`. This is approval only for an isolated sealed proving package using critic fastfile `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\mara31_body_round2_critic\oat\zone_out\mara31_darksails_canonical_critic.ff` at SHA-256 `294729C9B38881D9BAB94E603D40F27A7FC08FAEC5339865E3DE2B87C69217C7` plus the exact two-entry candidate IWD. Production, Steam, the accepted viewarms, and all source/control trees remain untouched. Live engine memory/rendering/gameplay and user approval remain pending.

The builder's `+1` XModel projection is rejected. Its supplied fastfile `mara31_body_round2_oat.ff` lists staging-only `playermodel_xi_mara31_darksails_round1` and is **not** a promotion target. The independent critic replay instead compiled the byte-exact GLBs/materials under the canonical Mara slot and listed no second Mara body XModel.

## Blind Review

The role key was sealed at `BFFD109BCE5860E778F7381379498436165BD400203DF5F0FAD453E72C37D6D0` before the label-only assessment was sealed at `2DE99279D2D0A0EC93F2EFDE66FF44DCED3FA575B2BF4A5889D82DDAA7F398E6`. Reveal produced `A=wrong-control`, `B=source`, `C=candidate`; scores were A 1.5, B 9.4, C 9.0. The current Death Dealer control was decisively rejected, while source and candidate both read as Zero - Dark Sails.

The candidate keeps both legs/feet, tricorn, face, side hair lock, head wrap, dark long coat, red sash, weathered pale trousers, and tall boots. No whole-surface pale substitution, alpha rectangle/inversion, missing face panel, detached candidate-only wedge, LOD identity swap, or candidate-only deformation failure was found. LOD3 is coarse but remains the same pirate. The first anonymous identity board had inverted camera labels and is retained as rejected evidence; the corrected anatomical board was used for scoring.

## Inventory And Source

The builder has 124 files. All 123 records in its self-excluding `SHA256SUMS.txt` match, its checksum set is inventory-exact, and all 124 `FILES_WRITTEN.txt` entries are exact. All 14 Mara entries in the Round 1 seal still hash correctly; the 13 reused entries are byte-identical in Round 2.

The source root contains 16 SMDs. The five required originals were uniquely located and compared chunk-for-chunk to the five staged provenance copies:

| Required SMD | Bytes | SHA-256 | Result |
|---|---:|---|---:|
| `c_t8_mp_spe_hacker_pirate_arms1_LOD0.smd` | 5,344,843 | `709F0A488A2EFA2A842091A7DFF841F80B36036E0A1DAC595AF1FA5A472B0DC2` | PASS |
| `c_t8_mp_spe_hacker_pirate_head1_LOD0.smd` | 7,938,989 | `1D6E5A27C6141E1FAF669A3FEFD8015083921DFEB03F45FE33127CECC6ACC76B` | PASS |
| `c_t8_mp_spe_hacker_pirate_lowerbody1_LOD0.smd` | 3,310,698 | `2A7788B2F51D7BB233DD27BD0522160301D28A392EAF6DC6CFF14D4C1A793089` | PASS |
| `c_t8_mp_spe_hacker_pirate_torso1_LOD0.smd` | 11,056,493 | `C2C7B4FDB7C588ECFB09A8C006B73B3861507792FFC42FD749D5D8BE5C7FFBE0` | PASS |
| `c_t8_mp_spe_hacker_pirate_viewarms1_LOD0.smd` | 8,694,803 | `A113ACB0951FB3F1D5F59B545C4BD6D3FE1331B8DDF32A40B4581D26ED1E7FCB` | PASS |

## GLB And Pose Gates

Each candidate and fresh OAT dump has the exact 51-joint stock order, parent hierarchy, local binds, and inverse binds. All geometry/attributes are finite; there are no invalid indices, degenerate triangles, unweighted vertices, or invalid positive joint slots. Every surface uses uint16 indices, all model/surface/index limits pass, weights are normalized, and influence count is at most four.

| LOD | Vertices | Triangles | Surfaces | Bones | Max influences | Result |
|---|---:|---:|---:|---:|---:|---:|
| LOD0 | 7,567 | 5,468 | 2 | 51 | 4 | PASS |
| LOD1 | 3,924 | 2,428 | 2 | 51 | 4 | PASS |
| LOD2 | 2,194 | 1,304 | 2 | 51 | 4 | PASS |
| LOD3 | 900 | 693 | 2 | 51 | 4 | PASS |

LOD spans stay within 3.1 percent of LOD0. Fresh OAT roundtrip maxima were position 0, normal about 0.0068645, UV about 0.00048822, weight about 0.00004554, local bind about 0.00000954, and inverse bind about 0.005044, with no influence-identity mismatch.

| Audit | Stock clip | Frames | Result |
|---|---|---:|---:|
| idle | `pb_hold_idle` | 126 | PASS |
| run | `pb_run_fast` | 16 | PASS |
| crouch | `pb_crouch_alert` | 285 | PASS |
| fire | `pt_rifle_fire` | 18 | PASS |
| death | `pb_stand_death_frontspin` | 53 | PASS |

All three samples per clip are finite and remain inside the source/control-calibrated envelope and edge-strain gates. The unusual whole-root orientation in several offline clips is shared by source and candidate, as shown in the sealed anonymous pose comparison.

## OAT And Images

The fresh canonical Linker/list/XModel-dump/material-dump commands all returned zero with no warnings or errors. Fastfile `mara31_darksails_canonical_critic.ff` is 402,617 bytes, SHA-256 `294729C9B38881D9BAB94E603D40F27A7FC08FAEC5339865E3DE2B87C69217C7`, and lists exactly one XModel: `playermodel_xi_mara_3_1`. Both material JSONs roundtrip semantically, and all four GLBs roundtrip geometrically and skeletally.

Unlinker's image probe returned zero but reported only the two expected missing external-data messages. Therefore no image-byte Unlinker pass is claimed. Closure is deliberately split: the fastfile list proves the two image names are reachable, while the IWD proves path and byte identity.

IWD `xi_mara31_darksails_body_round2.iwd` is 242,618 bytes, SHA-256 `A42C363D7BF2F8D0C48E50F7E83ECBD252F5F8DA25C94374AADF9EC7D17ADEF9`, with exactly:

| Archive path | Bytes | SHA-256 |
|---|---:|---|
| `images/xi_mara31_darksails_body_col.iwi` | 1,048,604 | `CA3AEA5287C6B62BB2DB46ACA2F8B1DBF8DD73C8C2592D7D28231A763B95FE33` |
| `images/xi_mara31_darksails_body_spec.iwi` | 44 | `6525D68B2B4269CBD816F8F6BFEC861B09DAA0BF56BEEA43D61934E8172015BF` |

Its ZIP CRC passes; entries are unique, safe, unencrypted, and byte-identical to the candidate IWIs. The shared color atlas has 400,446 zero-alpha, 212,559 partial-alpha, and 3,581,299 opaque pixels.

## Canonical Integration

The intended direct roster has 61 XModels, 322 materials, and 32 images, including canonical `playermodel_xi_mara_3_1` exactly once. Replacing its two Death Dealer body materials/images with the two Dark Sails materials/images yields exact delta `xmodel 0`, `material 0`, `image 0`; projected direct counts remain 61/322/32 and XModel headroom remains 9 against budget 70.

Required later integration cleanup is exact: rename the Mara comment to Zero - Dark Sails; replace direct image entries `xi_mara31_atlas_col`/`xi_mara31_spec`; replace material entries `mc/xi_mara31_atlas`/`mc/xi_mara31_atlas_glass`; preserve `xmodel,playermodel_xi_mara_3_1`; never add the staging-only XModel. Because the IWD selector is all-local, the two old body IWIs must be removed/replaced when the two new ones are added, followed by regeneration of `expectedCount` and `aggregateSha256`.

## Noninterference

Before/after aggregate hashes match for 124 builder files, 817 prior-critic files, 2,176 production `zone_raw` files, all 41 accepted-viewarm payloads, nine critical production files, five source SMDs, five stock fastfiles, installed Steam IWD, both OAT executables, ten other-critic primary artifacts, and the pre-existing Git status. No protected write was attempted.

## Boundary

`promotion-manifest.json` authorizes only the exact critic canonical proving fastfile, candidate IWD, source hashes, and canonical target mapping recorded there. An authorized integration, full-mod build/pool measurement, live IW3 rendering and animation, memory/gameplay checks, and user approval are still required before production or Steam promotion.
