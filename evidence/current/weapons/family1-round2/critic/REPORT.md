# XI FreezeTag Weapon Alignment Critic Round 2 Preflight Report

## Verdict

**HOLD.** 1 real candidate GLB was reloaded and rendered; candidate failures and the 17-state runtime blocker are listed below. In addition, the active runtime maps
17 of 26 selectable attachment states to bare.
The options remain selectable, but they do not deploy the selected asset state.

## Authoritative Family 1 Bar

- Active model: `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_icr7_summon_lod0.glb` (`f2b9317376da870b8659adf9ea12c964e6f2f896b617279744e731d39f798471`).
- Accepted template: `mw2_ftag/model_export/viewmodel_ow2_hk416_lod0.glb` (`b2491a22fab1b313f4815dffc48f9426c3a60df5029d5e86b85e175126e85632`).
- Serialized axes are +X forward, +Y up, +Z right; Blender evidence is +X
  forward, +Z up, -Y right.
- Reflex fixed scale is `0.377598602`;
  ACOG fixed scale is `0.374398638`.
  Both are accepted/source contact-to-optical-height ratios. Camera coverage is
  not an input.
- Correct placement is `targetSocket * interfaceAdjustment * inverse(sourceSocket)`,
  where `interfaceAdjustment = inverse(targetSocket) * targetPhysicalInterface *
  uniformFixedScale * inverse(sourcePhysicalInterface) * sourceSocket`.
- Native rear/front sight direction is `[0.999752283, -0.000632329, 0.022250308]`.
- Accepted suppressor bore baseline is `0.03426402` degrees from
  independent `tag_flash` forward. Rear/muzzle patches contain
  `28` and
  `13` triangles; signed contact
  offset is `-0.046146102`.
- A candidate must not exceed accepted bore error plus `0.25` degree, must stay
  within `0.02` of accepted contact offset, and must retain disjoint coherent
  multi-triangle patches. A same-triangle target/validator is forbidden.
- Promoted current has `tag_silencer` point count
  `0` and is B-reference
  evidence only.

## State Matrix

Counts: 11 bare, 26 attachments, 37 total. Every row is hash-sealed in
`measurements/source_inventory.json`; the table lists exact weaponfile XAnim
names in idle, ADS-up, ADS-fire, reload, reload-empty order.

| State | Role | Weaponfile | Runtime identity | Exact XAnims |
| --- | --- | --- | --- | --- |
| F01-A0 | bare | g36c_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F01-A1 | reflex | g36c_reflex_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_reflex_ads_up, viewmodel_mw2_m16_reflex_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F01-A2 | acog | g36c_acog_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_acog_ads_up, viewmodel_mw2_m16_acog_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F01-A3 | suppressor | g36c_silencer_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F02-A0 | bare | g3_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F02-A1 | reflex | g3_reflex_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_reflex_ads_up, viewmodel_mw2_m16_reflex_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F02-A2 | acog | g3_acog_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_acog_ads_up, viewmodel_mw2_m16_acog_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F02-A3 | suppressor | g3_silencer_mp | FAIL -> A0 | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F03-A0 | bare | m14_mp | PASS | viewmodel_mw3_mk14_idle, viewmodel_ow2_mk14_ADS_up, viewmodel_mw3_mk14_ADS_fire, viewmodel_mw3_mk14_reload, viewmodel_mw3_mk14_reload_empty |
| F03-A1 | reflex | m14_reflex_mp | FAIL -> A0 | viewmodel_mw3_mk14_idle, viewmodel_ow2_mk14_reflex_ADS_up, viewmodel_mw3_mk14_reflex_ADS_fire, viewmodel_mw3_mk14_reload, viewmodel_mw3_mk14_reload_empty |
| F03-A2 | acog | m14_acog_mp | FAIL -> A0 | viewmodel_mw3_mk14_idle, viewmodel_ow2_mk14_acog_ADS_up, viewmodel_mw3_mk14_acog_ADS_fire, viewmodel_mw3_mk14_reload, viewmodel_mw3_mk14_reload_empty |
| F03-A3 | suppressor | m14_silencer_mp | FAIL -> A0 | viewmodel_mw3_mk14_idle, viewmodel_ow2_mk14_ADS_up, viewmodel_mw3_mk14_ADS_fire, viewmodel_mw3_mk14_reload, viewmodel_mw3_mk14_reload_empty |
| F05-A0 | bare | m60e4_mp | PASS | viewmodel_M60_idle, viewmodel_M60_ADS_up, viewmodel_M60_ADS_fire, viewmodel_M60_reload, viewmodel_M60_reload |
| F05-A1 | reflex | m60e4_reflex_mp | FAIL -> A0 | viewmodel_M60_idle, viewmodel_M60_reflex_ADS_up, viewmodel_M60_ADS_fire, viewmodel_M60_attachment_reload, viewmodel_M60_attachment_reload |
| F05-A2 | acog | m60e4_acog_mp | FAIL -> A0 | viewmodel_M60_idle, viewmodel_M60_acog_ADS_up, viewmodel_M60_ADS_fire, viewmodel_M60_attachment_reload, viewmodel_M60_attachment_reload |
| F05-A3 | grip | m60e4_grip_mp | FAIL -> A0 | viewmodel_M60_grip_idle, viewmodel_M60_ADS_up, viewmodel_M60_grip_ADS_fire, viewmodel_M60_grip_reload, viewmodel_M60_grip_reload |
| F07-A0 | bare | winchester1200_mp | PASS | viewmodel_mw2_spas12_idle, viewmodel_mw2_spas12_ADS_up, viewmodel_mw2_spas12_ADS_fire, viewmodel_mw2_spas12_reload_loop, <empty> |
| F07-A1 | reflex | winchester1200_reflex_mp | FAIL -> A0 | viewmodel_mw2_spas12_idle, viewmodel_ow2_spas12_reflex_ADS_up, viewmodel_mw2_spas12_reflex_ADS_fire, viewmodel_mw2_spas12_reload_loop, <empty> |
| F07-A3 | grip | winchester1200_grip_mp | FAIL -> A0 | viewmodel_mw2_spas12_GRIP_idle, viewmodel_mw2_spas12_ADS_up, viewmodel_mw2_spas12_GRIP_ADS_fire, viewmodel_mw2_spas12_reload_loop, <empty> |
| F08-A0 | bare | colt45_mp | PASS | viewmodel_mw2_glock_idle, viewmodel_mw2_glock_ADS_up, viewmodel_mw2_glock_fire, viewmodel_mw2_glock_reload, viewmodel_mw2_glock_reload_empty |
| F08-A3 | suppressor | colt45_silencer_mp | FAIL -> A0 | viewmodel_mw2_glock_idle, viewmodel_mw2_glock_ADS_up, viewmodel_mw2_glock_fire, viewmodel_mw2_glock_reload, viewmodel_mw2_glock_reload_empty |
| F09-A0 | bare | remington700_mp | PASS | viewmodel_mw3_L118a_idle, viewmodel_mw3_L118a_ADS_up, viewmodel_mw3_L118a_fire, viewmodel_mw3_L118a_reload, viewmodel_mw3_L118a_reload_empty |
| F09-A3 | suppressor | remington700_silencer_mp | FAIL -> A0 | viewmodel_mw3_L118a_idle, viewmodel_mw3_L118a_ADS_up, viewmodel_mw3_L118a_fire, viewmodel_mw3_L118a_reload, viewmodel_mw3_L118a_reload_empty |
| F10-A0 | bare | dragunov_mp | PASS | viewmodel_wa2000_idle_loop, viewmodel_wa2000_ads_up, viewmodel_wa2000_ads_fire, viewmodel_wa2000_reload, viewmodel_wa2000_reload_empty |
| F10-A3 | suppressor | dragunov_silencer_mp | FAIL -> A0 | viewmodel_wa2000_idle_loop, viewmodel_wa2000_ads_up, viewmodel_wa2000_ads_fire, viewmodel_wa2000_reload, viewmodel_wa2000_reload_empty |
| F13-A0 | bare | skorpion_mp | PASS | viewmodel_mw2_mp5k_idle, viewmodel_mw2_mp5k_ADS_up, viewmodel_mw2_mp5k_ADS_fire, viewmodel_mw2_mp5k_reload, viewmodel_mw2_mp5k_reload_empty |
| F13-A1 | reflex | skorpion_reflex_mp | PASS | viewmodel_mw2_mp5k_idle, viewmodel_ow2_mp5k_reflex_ADS_up, viewmodel_mw2_mp5k_reflex_ADS_fire, viewmodel_mw2_mp5k_reload, viewmodel_mw2_mp5k_reload_empty |
| F13-A2 | acog | skorpion_acog_mp | PASS | viewmodel_mw2_mp5k_idle, viewmodel_ow2_mp5k_acog_ADS_up, viewmodel_mw2_mp5k_acog_ADS_fire, viewmodel_mw2_mp5k_reload, viewmodel_mw2_mp5k_reload_empty |
| F13-A3 | suppressor | skorpion_silencer_mp | PASS | viewmodel_mw2_mp5k_idle, viewmodel_mw2_mp5k_ADS_up, viewmodel_mw2_mp5k_ADS_fire, viewmodel_mw2_mp5k_reload, viewmodel_mw2_mp5k_reload_empty |
| F14-A0 | bare | uzi_mp | PASS | viewmodel_mw3_ak74u_idle, viewmodel_mw3_ak74u_ADS_up, viewmodel_mw3_ak74u_ADS_fire, viewmodel_mw3_ak74u_reload, viewmodel_mw3_ak74u_reload_empty |
| F14-A1 | reflex | uzi_reflex_mp | PASS | viewmodel_mw3_ak74u_idle, viewmodel_ow2_ak74u_reflex_ADS_up, viewmodel_mw3_ak74u_reflex_ADS_fire, viewmodel_mw3_ak74u_reload, viewmodel_mw3_ak74u_reload_empty |
| F14-A2 | acog | uzi_acog_mp | PASS | viewmodel_mw3_ak74u_idle, viewmodel_ow2_ak74u_acog_ADS_up, viewmodel_mw3_ak74u_acog_ADS_fire, viewmodel_mw3_ak74u_reload, viewmodel_mw3_ak74u_reload_empty |
| F14-A3 | suppressor | uzi_silencer_mp | PASS | viewmodel_mw3_ak74u_idle, viewmodel_mw3_ak74u_ADS_up, viewmodel_mw3_ak74u_ADS_fire, viewmodel_mw3_ak74u_reload, viewmodel_mw3_ak74u_reload_empty |
| F15-A0 | bare | mp44_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F15-A1 | reflex | g3_gl_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_reflex_ads_up, viewmodel_mw2_m16_reflex_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F15-A2 | acog | m14_gl_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_ow2_m16a4_acog_ads_up, viewmodel_mw2_m16_acog_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |
| F15-A3 | suppressor | g36c_gl_mp | PASS | viewmodel_mw2_m16_idle, viewmodel_mw2_m16_ADS_up, viewmodel_mw2_m16_ADS_fire, viewmodel_mw2_m16_reload, viewmodel_mw2_m16_reload_empty |

## Runtime Fallback Blocker

These 17 selectable attachment states currently deploy their family A0 state.
They remain in the 37-state contract and may not be removed or silently disabled.

| State | Selected role | Selected weaponfile | Runtime state | Runtime weaponfile |
| --- | --- | --- | --- | --- |
| F01-A1 | reflex | g36c_reflex_mp | F01-A0 | g36c_mp |
| F01-A2 | acog | g36c_acog_mp | F01-A0 | g36c_mp |
| F01-A3 | suppressor | g36c_silencer_mp | F01-A0 | g36c_mp |
| F02-A1 | reflex | g3_reflex_mp | F02-A0 | g3_mp |
| F02-A2 | acog | g3_acog_mp | F02-A0 | g3_mp |
| F02-A3 | suppressor | g3_silencer_mp | F02-A0 | g3_mp |
| F03-A1 | reflex | m14_reflex_mp | F03-A0 | m14_mp |
| F03-A2 | acog | m14_acog_mp | F03-A0 | m14_mp |
| F03-A3 | suppressor | m14_silencer_mp | F03-A0 | m14_mp |
| F05-A1 | reflex | m60e4_reflex_mp | F05-A0 | m60e4_mp |
| F05-A2 | acog | m60e4_acog_mp | F05-A0 | m60e4_mp |
| F05-A3 | grip | m60e4_grip_mp | F05-A0 | m60e4_mp |
| F07-A1 | reflex | winchester1200_reflex_mp | F07-A0 | winchester1200_mp |
| F07-A3 | grip | winchester1200_grip_mp | F07-A0 | winchester1200_mp |
| F08-A3 | suppressor | colt45_silencer_mp | F08-A0 | colt45_mp |
| F09-A3 | suppressor | remington700_silencer_mp | F09-A0 | remington700_mp |
| F10-A3 | suppressor | dragunov_silencer_mp | F10-A0 | dragunov_mp |

## Negative Proofs

| Fixture | States | XAnim cases | Expected rejection |
| --- | --- | --- | --- |
| camera-derived-optic-scaling | 15 | 74 | PASS |
| candidate-current-path-mixup | 37 | 182 | PASS |
| canted-suppressor | 9 | 45 | PASS |
| centered-tag-offcenter-geometry | 26 | 128 | PASS |
| mislocated-grip | 2 | 9 | PASS |
| off-center-rear-front-irons | 11 | 54 | PASS |
| position-only-placement | 1 | 5 | PASS |
| optic-rail-gap | 15 | 74 | PASS |
| optic-rail-intersection | 15 | 74 | PASS |
| self-referential-single-triangle-muzzle | 1 | 5 | PASS |
| stale-candidate-report-mismatch | 37 | 182 | PASS |
| wrong-optic-socket-rotation | 15 | 74 | PASS |

The self-referential muzzle fixture carries the observed one-triangle area
`0.018776525`, normal `[0.863039, 0.000772, 0.505137]`, false self-error `0`,
and independent error about `30.34` degrees. It is rejected by axis, patch-count,
patch-area, and independent-reference gates.

## Render Contract

Reference jobs: `2`. Candidate jobs:
`1`. A candidate job reloads the requested GLB for
every state/XAnim tile and seals the before/after hashes. Accepted-template A and
promoted-current B jobs are separate. Candidate/current path or byte aliasing is
an immediate failure. Fixed camera pose comes from the accepted template; the
state weaponfile supplies the runtime FOV and exact XAnim.

Candidate identity recorded by this report:

| Family | Reloaded path | SHA-256 |
| --- | --- | --- |
| 1 | xi_ftag/.audit/weapon_alignment_builder_round2/candidates/family-01/viewmodel_t8_icr7_summon_round2_lod0.glb | 55b764d91424339a0599acc3ce3c6cb64a98ab6f156c19677fec8a910590f254 |

## Candidate Findings

| Family | Builder seal | Native sights | Reflex actual vs bar | ACOG actual vs bar | Suppressor | Visibility groups |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | PASS | FAIL | 0.457250653 vs 0.377598602 FAIL | 0.37677693 vs 0.374398638 FAIL | FAIL | FAIL |

Fixed-camera candidate centering against accepted controls:
`FAIL`. Measurement/render/
report hash identity: `PASS`.

The checker compares the GLB hash at measurement start, every render tile,
measurement end, and report compilation. Any mismatch rejects stale evidence.
Socket arithmetic does not override the fixed-camera visible-geometry gates:
off-center irons/optics and floating, clipping, canted, or misplaced attachment
meshes fail even when their tags are centered.

## Consuming A Fresh Candidate

Run from the repository root with one or more real builder-exported GLBs:

```powershell
powershell -NoProfile -ExecutionPolicy Bypass -File ".\xi_ftag\.audit\weapon_alignment_critic_round2_preflight\run_checker.ps1" -Candidate "1=C:\absolute\path\family1_candidate.glb"
```

For multiple families, pass a PowerShell string array such as
`-Candidate "1=C:\path\f1.glb","13=C:\path\f13.glb"`. Relative paths are
resolved from the repository root. Do not use `-SkipReferenceRenders` for final
acceptance evidence. The candidate must be hash-distinct from promoted current
and accepted template inputs. A successful intake reloads it for measurement,
every exact state/XAnim tile, and the final report hash check; it does not copy,
promote, build, install, or launch anything.

## Release Conditions

HOLD remains until real candidate GLBs are supplied, reloaded, hash-distinct
from current/template, rendered across all applicable exact runtime XAnims, and
pass visibility, source/socket transform, physical scale, sight/optic centering,
rail/muzzle/grip contact, suppressor axis, and runtime-identity gates without
removing or silently disabling any option.
