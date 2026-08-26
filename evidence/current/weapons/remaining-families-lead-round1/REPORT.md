# Remaining Weapon-Family Triage, Lead Round 1

## Verdict

`HOLD`: 29 / 29 states outside F01 and F02 remain unproved. The rejected
round-1 evaluator reported useful diagnostic symptoms, but its baseline retained
no inspectable PNG rasters and cannot support a visual PASS. Every state below
must be rerun through the repaired exact-composed evaluator and then inspected by
a fresh critic.

Authoritative inputs:

- `xi_ftag/gauntlet/weapon_alignment_bar.md`
- `xi_ftag/.audit/weapon_runtime_identity_critic_round1/evidence/authoritative_state_contract.json`
- `xi_ftag/.audit/weapon_alignment_harness_round1/baseline/current-production-probed/RESULT.json`
- `xi_ftag/.audit/weapon_alignment_harness_critic_round1/REPORT.md`

## Family Inventory

| Family | Roster weapon | Required states | Candidate model SHA-256 | Old diagnostic summary | Next independent proof |
| --- | --- | --- | --- | --- | --- |
| F03 | Auger DMR | A0 bare, A1 reflex, A2 ACOG, A3 suppressor | `382e8cb8cd6a51fbf8354fa1454af92b0b6711c89baeb4effc11f1074753bf31` | 150 findings; 6 gate passes, 38 holds; every terminal/trajectory gate held | First full four-state family after evaluator repair; separate rear/front/optic landmarks and muzzle contact |
| F05 | Hades Venom Cocktail | A0 bare, A1 reflex, A2 ACOG, A3 grip | `b9e7cf31498e6caaf0bd6efa30156b3cef2c8e9848504d7c9e66bce8bf456020` | 210 findings; blank/unsealed phases plus intersection and grip evidence gaps | Unique grip-control family; prove coherent underside contact and M249-control parity |
| F07 | MOG 12 Enforcer | A0 bare, A1 reflex, A3 grip | `dd503bf10cde64900ab5ea79942377a91ccd0bee3cd3fe92206d9435d3cfaf79` | 123 findings; several blank phases and unsealed runtime composition | Shotgun animation sweep, reflex rail contact, and grip/hand clearance |
| F08 | RK7 Garrison Odin's Song | A0 bare, A3 suppressor | `20502f997979a72ae7d859f14233ce15244d1c4ea3ea28a24f4aeb36cf8a79d9` | 61 findings; old raster axis error and repeated intersections | Two-state smoke test after F03; verify that `j_bolt` is a real sight authority and prove muzzle contact |
| F09 | Outlaw Regulator | A0 bare, A3 suppressor | `cc52f049f0aef186f53651050e5e9615883edc4d21de2580cf9daf96b728702b` | 86 findings; missing hands/raster inspection and unsealed suppressor composition | Sniper scope center, hands, fire/reload sweep, and bore alignment |
| F10 | SDM Lost Patrol | A0 bare, A3 suppressor | `6a7b7c84d43e1289fdde12cefec1bfc729109e22c7bb2e081ea7e14c459b3a02` | 93 findings; identity/hide-show conflict plus missing hands and runtime composition | Correct F10-A0 `tag_scope_colt` conflict before exact scope/suppressor proof |
| F13 | GKS Black Plague | A0 bare, A1 reflex, A2 ACOG, A3 suppressor | `bfd9ff3f80b1cfb83b13a7bf136e7dceb0aeb56de7b54c16d1f80e90f6321ce3` | 184 findings; blank/unsealed phases and optic/suppressor contact gaps | Full SMG four-state pass with retained exact rasters and no floating/clipped optics |
| F14 | Cordite Zero G | A0 bare, A1 reflex, A2 ACOG, A3 suppressor | `1ccb14acb248f9adf3d6a97ba9dfc50a474839466224f0e2c7c5ab964f903535` | 169 findings; hands/raster inspection missing and optic intersections | Full SMG four-state pass; prioritize the user's previously reported sight/attachment misalignment |
| F15 | KN-57 Faberge | A0 bare, A1 reflex, A2 ACOG, A3 suppressor | `3dae9a31f46f2425babb259b1e3fe68d65989f51668ccae35e48c9c1b591cad7` | 228 findings; severe duplicate native sights, retained posts, intersections, and missing inspection | Remove duplicate sight ownership first, then prove all four states with their exact runtime identities |

The pass/hold counts above are triage only. They come from the rejected evaluator
and are not release evidence.

## Exact State Contract

| State | Role | Visible tag | Runtime weaponfile |
| --- | --- | --- | --- |
| F03-A0 | bare | `tag_scope` | `m14_mp` |
| F03-A1 | reflex | `tag_reflex_sight` | `m14_reflex_mp` |
| F03-A2 | ACOG | `tag_acog` | `m14_acog_mp` |
| F03-A3 | suppressor | `tag_silencer` | `m14_silencer_mp` |
| F05-A0 | bare | `tag_iron_sight` | `m60e4_mp` |
| F05-A1 | reflex | `tag_reflex_sight` | `m60e4_reflex_mp` |
| F05-A2 | ACOG | `tag_acog` | `m60e4_acog_mp` |
| F05-A3 | grip | `tag_foregrip` | `m60e4_grip_mp` |
| F07-A0 | bare | `tag_iron_sight` | `winchester1200_mp` |
| F07-A1 | reflex | `tag_reflex_sight` | `winchester1200_reflex_mp` |
| F07-A3 | grip | `tag_grip` | `winchester1200_grip_mp` |
| F08-A0 | bare | `j_bolt` | `colt45_mp` |
| F08-A3 | suppressor | `tag_silencer` | `colt45_silencer_mp` |
| F09-A0 | bare | `tag_scope` | `remington700_mp` |
| F09-A3 | suppressor | `tag_silencer` | `remington700_silencer_mp` |
| F10-A0 | bare | `tag_scope_colt` | `dragunov_mp` |
| F10-A3 | suppressor | `tag_silencer` | `dragunov_silencer_mp` |
| F13-A0 | bare | `tag_iron_sight` | `skorpion_mp` |
| F13-A1 | reflex | `tag_reflex_sight` | `skorpion_reflex_mp` |
| F13-A2 | ACOG | `tag_acog` | `skorpion_acog_mp` |
| F13-A3 | suppressor | `tag_silencer` | `skorpion_silencer_mp` |
| F14-A0 | bare | `tag_iron_sight` | `uzi_mp` |
| F14-A1 | reflex | `tag_reflex_sight` | `uzi_reflex_mp` |
| F14-A2 | ACOG | `tag_acog` | `uzi_acog_mp` |
| F14-A3 | suppressor | `tag_silencer` | `uzi_silencer_mp` |
| F15-A0 | bare | `tag_iron_sight` | `mp44_mp` |
| F15-A1 | reflex | `tag_reflex` | `g3_gl_mp` |
| F15-A2 | ACOG | `tag_acog` | `m14_gl_mp` |
| F15-A3 | suppressor | `tag_silencer` | `g36c_gl_mp` |

## Repair Order

1. Repair and independently reject-or-accept the evaluator itself.
2. Finish F01 and F02 physical candidates under that evaluator.
3. Run F03 as the first untouched four-state family and F08 as the compact
   bare/suppressor cross-check.
4. Run F05 and F07 against the unique grip bar.
5. Repair F15 duplicate sight ownership before any alignment iteration.
6. Run F13 and F14 as complete SMG families, then F09 and F10 scope families.
7. A fresh critic must inspect every retained raster blind where possible. No
   family may enter production until its critic passes every required state.

