# Family 23 Complete-State Pair Consolidation

## Verdict

**PASS - proving-only critic candidate.** The bounded offline delivery passes exact state geometry, raw hide-tag visibility, fixed-camera raster comparison, per-model IW3 limits, isolated OAT compile/list, Unlinker round-trip, material closure, and dedicated magazine isolation. Production and Steam were not modified. Live-engine proof remains **PENDING** and is not claimed.

## Architecture

RAM-7 uses the minimax pairing selected from all three two-pair partitions: `base + reflex` at 35,948 vertices and `compact + suppressor` at 35,967. The largest RAM pair is 35,967, safely below the 65,535 rigid LOD limit. DM56 retains its byte-stable four-state combined view/world candidates at 43,283 vertices each.

Every packed state is the complete frozen Round3 assembly in its authored frame. No candidate transform, recentering, fitted alignment, or camera change is applied. A duplicate-position repeated-index zero-area selector triangle adds the state tag to each base-bearing XSurface `partBits`; authored vertices remain on their original rigid deformation joints. Attachment surfaces are rigidly weighted to their state tag.

| XModel | Packed content | Surfaces | Vertices | Bones | OAT |
|---|---|---:|---:|---:|---|
| `viewmodel_f02_ram7_base_reflex_tags_r1` | base, reflex | 28 | 35948 | 16 | PASS |
| `worldmodel_f02_ram7_base_reflex_tags_r1` | base, reflex | 28 | 35948 | 6 | PASS |
| `viewmodel_f02_ram7_cs_tags_r1` | compact, suppressor | 23 | 35967 | 16 | PASS |
| `worldmodel_f02_ram7_cs_tags_r1` | compact, suppressor | 23 | 35967 | 6 | PASS |
| `worldmodel_f02_ram7_mag_authored_r1` | magazine + bullets | 2 | 1161 | 6 | PASS |
| `viewmodel_f03_dm56_combined_tags_r1` | base, reflex, compact, suppressor | 63 | 43283 | 20 | PASS |
| `worldmodel_f03_dm56_combined_tags_r1` | base, reflex, compact, suppressor | 63 | 43283 | 8 | PASS |
| `worldmodel_f03_dm56_mag_authored_r1` | magazine + bullets | 4 | 1613 | 8 | PASS |

All eight records pass the explicit 255-surface, 255-bone, 65,535 per-surface index, and 65,535 cumulative rigid-vertex gates in `xmodel-limit-manifest.json`.

## Visual Proof

- Raw hide-tag simulation: **16/16 state-role combinations PASS**; exactly one complete state branch is visible and no duplicate whole gun or second optic remains.
- Exact authored geometry: **16/16 PASS** by material and triangle shape against the frozen Round3 GLBs, excluding only the declared zero-area selector triangles.
- Fixed-camera raster comparison: **64/64 PASS**, including every RAM-7/DM56 reflex and compact view.
- Worst raster metrics: IoU 0.999992742105, centroid delta 0.001761 px, bounds delta 0 px, normalized RGB RMSE 0.00005916.
- Blind boards: **8/8 rebuilt** in `blind/`; the reveal is `blind-key.json`. Manual inspection found no geometric intersection, multi-optic pile, duplicate rifle, or state-registration drift.
- Magazine inspection: six renders show only the authored magazine and bullets. RAM-7 has 1,127 authored triangles; DM56 has 1,368 authored triangles. Neither clip model contains rifle materials or whole-rifle geometry.

## OAT Proof

All **8/8** XModels compile in isolated IW3 zones with zero warnings and zero errors. Unlinker lists exactly one expected XModel per fastfile, resolves every custom material/image dependency, and round-trips all eight models with exact role/material triangle counts and <=0.001 triangle-shape residual. Combined state selector tags survive round-trip for both view and world roles. Unresolved custom dependencies: **0**.

## Weapon Patch

The field-only patch is `weapon-field-patch-manifest.json`. It changes only populated gun/world model slots, `worldClipModel`, and `hideTags`; all eight source hashes match the frozen delivery and application remains `NOT_APPLIED`.

| Weapon | State | View model | World model | Exact hideTags |
|---|---|---|---|---|
| `g3_mp` | base | `viewmodel_f02_ram7_base_reflex_tags_r1` | `worldmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_reflex` |
| `g3_reflex_mp` | reflex | `viewmodel_f02_ram7_base_reflex_tags_r1` | `worldmodel_f02_ram7_base_reflex_tags_r1` | `tag_ftag_base` |
| `g3_acog_mp` | compact | `viewmodel_f02_ram7_cs_tags_r1` | `worldmodel_f02_ram7_cs_tags_r1` | `tag_ftag_suppressor` |
| `g3_silencer_mp` | suppressor | `viewmodel_f02_ram7_cs_tags_r1` | `worldmodel_f02_ram7_cs_tags_r1` | `tag_ftag_compact` |
| `m14_mp` | base | `viewmodel_f03_dm56_combined_tags_r1` | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_reflex`<br>`tag_ftag_compact`<br>`tag_ftag_suppressor` |
| `m14_reflex_mp` | reflex | `viewmodel_f03_dm56_combined_tags_r1` | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base`<br>`tag_ftag_compact`<br>`tag_ftag_suppressor` |
| `m14_acog_mp` | compact | `viewmodel_f03_dm56_combined_tags_r1` | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base`<br>`tag_ftag_reflex`<br>`tag_ftag_suppressor` |
| `m14_silencer_mp` | suppressor | `viewmodel_f03_dm56_combined_tags_r1` | `worldmodel_f03_dm56_combined_tags_r1` | `tag_ftag_base`<br>`tag_ftag_reflex`<br>`tag_ftag_compact` |

`worldClipModel` uses `worldmodel_f02_ram7_mag_authored_r1` or `worldmodel_f03_dm56_mag_authored_r1`, never a whole rifle.

## Slot Projection

The retained rejected full-package checkpoint is hash-identified at 993 runtime XModel slots. This replacement retires 16 frozen Round3 state models plus two legacy whole-rifle clip fallbacks and introduces eight unique models:

`993 - 18 + 8 = 983`

That is an exact **10-model reduction**, projecting **983/1000** runtime slots and seven slots of headroom under the repository's strict **<=990** ceiling. The evidence chain and all retired/introduced names are in `budget-projection-manifest.json`. This is a substitution projection, not a rebuilt production package measurement.

## Scope And Pending Work

- All writes are confined to `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\family23_combined_attachment_tags_round1`.
- Production weapon files remain hash-matched and untouched; `Build-GhostIcrProving.ps1`, `zone_out`, and Steam were not modified.
- The accidental `i` subtree is absent. The temporary `r` subtree is also absent.
- DM56 view/world/mag hashes remain exactly the preserved checkpoint hashes.
- Live CoD4 loading, animation, ADS/reticle behavior, reload/drop consumption, and runtime slot measurement are **PENDING**.

## Evidence Index

- `delivery-manifest.json`
- `weapon-field-patch-manifest.json`
- `full-state-packing-limit-manifest.json`
- `xmodel-limit-manifest.json`
- `visibility-simulation-manifest.json`
- `state-geometry-comparison-manifest.json`
- `render-evidence.json`
- `render-comparison-manifest.json`
- `blind-key.json` and `blind/case_01_board.png` through `blind/case_08_board.png`
- `oat-compile-manifest.json`, `oat-list-manifest.json`, `dependency-manifest.json`, `roundtrip-manifest.json`
- `geometry-manifest.json`, `skeleton-manifest.json`, `material-manifest.json`
- `budget-projection-manifest.json`
- `scope-audit-manifest.json`
- `SHA256-MANIFEST.json`
