# Mara31 Zero - Dark Sails Round2 Proving Package

## Verdict

**PASS_FOR_PROVING_PACKAGE_ONLY**

This verdict applies only to the isolated Mara31 proving package at `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\mara31_body_round2`. It does not approve a production copy, Steam deployment, full-mod integration, live server use, or any change to the eight accepted viewarms.

## Offline Gates

| Gate | Result |
|---|---:|
| `exact-source-provenance` | PASS |
| `round1-seal-before-reuse` | PASS |
| `mara-only-two-entry-iwd` | PASS |
| `clean-mara-only-oat-build-list-dump` | PASS |
| `four-lod-structural-and-semantic-roundtrip` | PASS |
| `five-animation-pose-audits` | PASS |
| `visual-identity-and-lod-continuity` | PASS |
| `separate-fastfile-iwd-reachability` | PASS |
| `projected-full-mod-pool-delta` | PASS |
| `protected-input-noninterference` | PASS |

## Critic Blockers Addressed

- Exact raw provenance is now present for only the five requested SMDs. Original C: paths, byte sizes, and SHA-256 values are recorded in `SOURCE_PROVENANCE.json`; originals and staged copies were re-hashed at finalization.
- The Mara-only IWD now contains exactly two entries at the required `images/` paths. No production `iwd_package.json` was changed.
- Mara-only Linker build and Unlinker list/model/material dumps are clean. All four model LODs and both materials pass semantic roundtrip.
- External IWI bytes are not embedded in the fastfile. Unlinker's image-only probe therefore reports exactly the two expected missing-data messages. No combined OAT image pass is claimed. Runtime reachability is instead proven as a chain from material references, to fastfile image names, to exact IWD paths and hashes.
- The full-mod delta is explicitly a conservative projection: `image +2`, `material +2`, `xmodel +1`. Projected xmodels are 32 against configured budget 70. No full-mod build or live-engine closure is claimed.

## Source Provenance

| Exact source component | Bytes | SHA-256 |
|---|---:|---|
| `c_t8_mp_spe_hacker_pirate_arms1_LOD0.smd` | 5,344,843 | `709F0A488A2EFA2A842091A7DFF841F80B36036E0A1DAC595AF1FA5A472B0DC2` |
| `c_t8_mp_spe_hacker_pirate_head1_LOD0.smd` | 7,938,989 | `1D6E5A27C6141E1FAF669A3FEFD8015083921DFEB03F45FE33127CECC6ACC76B` |
| `c_t8_mp_spe_hacker_pirate_lowerbody1_LOD0.smd` | 3,310,698 | `2A7788B2F51D7BB233DD27BD0522160301D28A392EAF6DC6CFF14D4C1A793089` |
| `c_t8_mp_spe_hacker_pirate_torso1_LOD0.smd` | 11,056,493 | `C2C7B4FDB7C588ECFB09A8C006B73B3861507792FFC42FD749D5D8BE5C7FFBE0` |
| `c_t8_mp_spe_hacker_pirate_viewarms1_LOD0.smd` | 8,694,803 | `A113ACB0951FB3F1D5F59B545C4BD6D3FE1331B8DDF32A40B4581D26ED1E7FCB` |

All five source hashes match the user-required values. Only those five source files were copied from the designated C: source root.

## Round1 Reuse

All 14 Mara entries in Round1 `SEALED-HASHES.json` were verified before reuse and re-verified during finalization. Thirteen necessary Mara assets were copied byte-exactly; the Round1 zone file was verified but replaced with the Mara-only Round2 zone.

## Package Payload

Fastfile: `oat/zone_out/mara31_body_round2_oat.ff`, 402,619 bytes, SHA-256 `DFA85B8838736F815965A9C227883D92B8632D693AA5B6B6C8F7C52382606589`.

IWD: `package/xi_mara31_darksails_body_round2.iwd`, 242,618 bytes, SHA-256 `A42C363D7BF2F8D0C48E50F7E83ECBD252F5F8DA25C94374AADF9EC7D17ADEF9`.

| IWD path | Bytes | SHA-256 |
|---|---:|---|
| `images/xi_mara31_darksails_body_col.iwi` | 1,048,604 | `CA3AEA5287C6B62BB2DB46ACA2F8B1DBF8DD73C8C2592D7D28231A763B95FE33` |
| `images/xi_mara31_darksails_body_spec.iwi` | 44 | `6525D68B2B4269CBD816F8F6BFEC861B09DAA0BF56BEEA43D61934E8172015BF` |

## Structure And Roundtrip

- LOD triangles: `[5468, 2428, 1304, 693]` with strictly decreasing counts.
- Each LOD has the exact 51-joint stock order, hierarchy, local transforms, and inverse binds.
- Every LOD stays below 32,767 vertices and triangles, uses at most four influences, has no unweighted or invalid vertices, and has no non-finite or degenerate geometry.
- LOD spans remain within 12 percent of LOD0.
- XModel descriptor and both material JSON files are semantically equal after OAT dump; LOD distances are `[220.0, 500.0, 1200.0, 1000000.0]`.

## Animation And Visual Proof

| Audit | Stock clip | Frames | Result |
|---|---|---:|---:|
| idle | `pb_hold_idle` | 126 | PASS |
| run | `pb_run_fast` | 16 | PASS |
| crouch | `pb_crouch_alert` | 285 | PASS |
| fire | `pt_rifle_fire` | 18 | PASS |
| death | `pb_stand_death_frontspin` | 53 | PASS |

Each clip was sampled at fractions `[0.17, 0.53, 0.83]` against candidate, source/control, and stock-calibrated deformation limits. Identity views preserve the authored pirate hat, face, dark coat, red sash, and boots. LOD0 through LOD3 retain coherent silhouette and material identity. The corrected visual gate in `evidence/visual-continuity-v2.json` supersedes the retained pre-calibration report; pose framing is orientation-independent because several stock clips rotate the whole root.

## Noninterference

Final hashes match the captured baseline for all five critical production files and all 41 accepted-viewarms payloads. All 14 Round1 sealed inputs, the critic's three sealed primary artifacts, five stock fastfiles, both OAT executables, the installed Steam IWD, and all five C: source files also match their expected hashes. Known writes were confined to the isolated F: Round2 root. Nothing was deleted.

## Decision Boundary

This package is ready for an independent critic to assess as a proving-package candidate. Promotion beyond that boundary requires a separately authorized integration, full-mod build, runtime pool check, and live-engine validation.

Exact artifact hashes are in `SHA256SUMS.txt`; every file written under this isolated output is enumerated in `FILES_WRITTEN.txt`.
