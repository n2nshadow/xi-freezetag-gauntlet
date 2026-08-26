# Weapon Attachment Matrix Critic Round 2

**Overall verdict: HOLD**

**Runtime/menu attachment-state conformance: FAIL**

**Composed visual acceptance: HOLD**

**Promotion ready: NO**

Candidate patch SHA-256: `b7920db5a1139a07572fcb2f7e3f3ca628809848f5895e763c5d4cc7b5f8d8ee` (exact match, 110,160 bytes).

This is an independent byte-level and static-control-flow audit of the real patch and all 82 staged files. No production, build, package, Steam, or server file was changed; no build, server, or game launch was performed.

## Findings

### 1. BLOCKER: all 17 held states fail to no weapon instead of explicit A0

The hard bar requires a held state to "fail closed to A0 with an explicit audit event" while retaining, and not silently rewriting, the saved selection (`xi_ftag/gauntlet/weapon_alignment_bar.md:34-35`). The candidate retains the selected attachment and emits an event, but it does not deploy A0:

- Every HOLD matrix row has an empty runtime weapon column. The 17-way mismatch against the required Round 3/hard-bar runtime target is exact.
- `getRuntimeWeaponFile()` returns `""` for a held imported state and `getRuntimeAttachment()` returns `-1` (`candidate/staged/.../_weapons.gsc:3690-3710`).
- `deployNativeClass()` reports the event and then returns `false` because native readiness rejects the empty runtime weapon (`:1255-1267`, `:1458-1483`).
- `applyPrimaryLoadout()` removes the player's existing primary, clears its tracking fields, and returns `false` when the runtime weapon is empty (`:3482-3498`).
- `applySidearmLoadout()` likewise removes the existing sidearm and returns `false` (`:3520-3535`).
- The event is explicit but records `RUNTIME_ATTACHMENT;-1;RUNTIME_WEAPON;;...;DEPLOYED;0`, not an A0 deployment (`:3877-3884`).

Affected states: `F01-A1`, `F01-A2`, `F01-A3`, `F02-A1`, `F02-A2`, `F02-A3`, `F03-A1`, `F03-A2`, `F03-A3`, `F05-A1`, `F05-A2`, `F05-A3`, `F07-A1`, `F07-A3`, `F08-A3`, `F09-A3`, and `F10-A3`.

This is a gameplay regression relative to the hard bar and the prior production behavior: a held primary or sidearm can be stripped, and native class deployment can be blocked, rather than safely deploying the family A0 weapon. The candidate routes this policy through primary, secondary, authoritative spawn, post-frame spawn, frozen spawn, class-change, thaw, and round-restore paths, so the broad path coverage amplifies rather than contains the defect. This conclusion is static because launching the game was prohibited.

### 2. HIGH: the pinned Round 3 runtime proof does not bind this candidate

The matrix and packaged GSC cite Round 3 patch `9230c0e42120c2161ede0bd35792fd7622ca875fa71e62517a8c04e6fca1dc9f` and critic result `5596968c931d813188a0114e82007fd5265140520e331794fe153a2e032fab6c`. That critic explicitly proved `allHeldStatesResolveToA0: true`.

The current staged GSC is SHA-256 `2390daac595e4181fb241cd82cf031902541e92fe335df2c52779b7ac21f579a`; the Round 3 candidate GSC was `079c3d0a07c1560ba9349e53279a459cbedd0de46db440c416cb34429e98819d`. Neither the staged GSC nor matrix contains current candidate hash `b7920db5...d8ee`. The old runtime PASS therefore cannot be transferred to this behaviorally different candidate. This preserves the same evidence-binding concern raised by the prior critic, now with a concrete contrary runtime policy.

### 3. HOLD: no composed visual acceptance exists for the 17 held states

The builder lane contains zero rendered image files. `candidate/visual-acceptance-request.json` has SHA-256 `881bc0f66b484e35271a476f746548cbbd79f1cafe31cbe6d4c0dfde676fd01a` and states `acceptancePresent:false`, `decision:HOLD`, and `promotionReady:false` for the exact 17-state set above.

Accordingly, those 17 states and the complete composed visual gate remain HOLD. The passing file, tag, menu-label, and persistence checks below are not a runtime/menu PASS and are not visual acceptance.

### 4. LOW: default Windows patch application is not byte exact

An isolated default `git apply` succeeds but converts all seven changed outputs to CRLF. It differs from staged bytes at every changed path. Applying with `core.autocrlf=false` and `core.eol=lf` reconstructs all 82 staged files exactly. This is a reproducibility disclosure, not the release blocker.

## Reconstruction And Integrity

- Baseline commit: `30424acca3264c7b9c47a536436518231a9749db`.
- Builder baseline: 81 files, all byte-identical to the live dirty tree before reconstruction.
- Builder staged set: 82 files; exact manifest SHA-256 `8e6e1e2e591f10cd4fa84cd57007d0f61c4fe0da15a506f072a086013a34d730`.
- Patch paths: exactly seven; isolated LF reconstruction mismatch count `0`; default Windows reconstruction mismatch count `7`.
- Production dirty-status witness excluding this critic lane, opening and closing: 1,834 records, SHA-256 `ac57358b72ccb45fd99aac7cf8b230ed66d18a14c3d9cb1c5ae22dd6aac22577`.
- Live production witnesses remained unchanged: GSC `397c9b1af176ef7fd828baf7b684735d05256c22f1f137c8ccfca0655620fe93`; offline menu `5b500680463050ec152efa60be40d901042d031ec98fbe9ccba367019c2f0469`; zone `421a2362ed6a72332c13b779313c43b22ef2461cb0bf32754134dc816c2f73ce`; each of the three live F10-A0 copies `726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0`.

## Verified Contract Surface

- Exact state set: 37 unique states, 11 A0 plus 26 attachment states, state-set SHA-256 `f73d992b1b7787ce8f79b58aa2cf0550df07cf0bed8602544464f7f973370c7c`.
- No A4 state is present or available. All 37 selected weaponfiles are unique, so no selected-identity alias exists.
- All 37 source/runtime weaponfile pairs are byte-identical and match their sealed Round 3 hashes.
- All 1,110 named XAnim slots match. Every hard-bar `visibleTag` is present in the state contract and absent from `hideTags`, case-insensitively.
- F10-A0 is corrected in all three staged copies to SHA-256 `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`; visible `tag_scope_colt` is not in its sole hide tag, `tag_silencer`.
- Saved primary/sidearm attachments survive userinfo, cache, and profile persistence. Valid HOLD selections are not rewritten to A0 by restore validation or after runtime resolution.
- Online labels append `[HOLD]` from runtime availability (`_weapons.gsc:3944-3949`). Offline labels distinguish REFLEX, ACOG, GRIP, and SUPPRESSOR HOLD states and handle the allowed sidearm families (`xi_offline_class.menu:26-29`, `:237-261`).
- Static route coverage is present for primary, secondary, selected loadout, authoritative spawn, post-frame spawn, frozen spawn, class restore, thaw, and round restore. External hooks occur at `_globallogic.gsc:688,758`, `ftag.gsc:448,2370`, and `_server.gsc:495-600`.

The `Runtime` column below records the candidate matrix value. `<empty>` on a HOLD row is the blocker described above; `Byte/tag` only reports the weaponfile, visible-tag, hide-tag, and XAnim identity check.

| State | Gate | Selected weaponfile | visibleTag | hideTags (physical order) | SHA-256 | Runtime | Byte/tag |
|---|---|---|---|---|---|---|---|
| F01-A0 | READY | `g36c_mp` | `tag_sights` | `tag_acog tag_holo tag_reflex tag_silencer` | `773e5460720691a78b2a81b2789c6879ba3f47b585355bac9014d6d33b5e7dfd` | `g36c_mp` | PASS |
| F01-A1 | HOLD | `g36c_reflex_mp` | `tag_reflex` | `tag_acog tag_holo tag_sights tag_silencer` | `9186014ed283db3bb250c2fec8d929e01c5027d28cbe7f0aef3ffab7aee0b4d6` | `<empty>` | PASS |
| F01-A2 | HOLD | `g36c_acog_mp` | `tag_acog` | `tag_sights tag_holo tag_reflex tag_silencer` | `48f20962a499ba0fba119a0fcf6ae674deaa98ab95a4b98f402cab8512766cd7` | `<empty>` | PASS |
| F01-A3 | HOLD | `g36c_silencer_mp` | `tag_silencer` | `tag_acog tag_holo tag_reflex` | `50bb0c541554d4e9a46cc6a61adfb1b80ecec915646c18c35438940ba9a49141` | `<empty>` | PASS |
| F02-A0 | READY | `g3_mp` | `tag_sight_on` | `tag_acog tag_silencer tag_reflex` | `46f1f461f1d06b66e4198841c9307eda91859101fe4bd0bfb4a315797d537a01` | `g3_mp` | PASS |
| F02-A1 | HOLD | `g3_reflex_mp` | `tag_reflex` | `tag_acog tag_silencer tag_eotech` | `eaf6ebfaea8af69e53573a86ed0c787b6f4e8360728f5c43e9d29b1e78278311` | `<empty>` | PASS |
| F02-A2 | HOLD | `g3_acog_mp` | `tag_acog` | `tag_silencer tag_reflex tag_eotech` | `a0aa7959438dbed6fa9d0f65f09bfb7e268a445884b3f26bb9dbea1a9d5635c0` | `<empty>` | PASS |
| F02-A3 | HOLD | `g3_silencer_mp` | `tag_silencer` | `tag_acog tag_reflex` | `16aefbf1f9343c1de4f90179e7f620ba4866180d387ba1c6f68fbd1a983b6796` | `<empty>` | PASS |
| F03-A0 | READY | `m14_mp` | `tag_scope` | `TAG_ACOG TAG_REFLEX_SIGHT TAG_EOTECH TAG_SILENCER TAG_M320 J_M320_SLIDE J_M320_GRENADE` | `cb2f502621c790fb9b6f503e7b09a2eb13c7ec71eaf7db8c3b7613b52a9cbee1` | `m14_mp` | PASS |
| F03-A1 | HOLD | `m14_reflex_mp` | `tag_reflex_sight` | `TAG_ACOG TAG_EOTECH TAG_SILENCER TAG_M320 J_M320_SLIDE J_M320_GRENADE` | `8f71fd9d769211ec4e516336bb93fdf05ed8f17fa77d011e6d9848dcfe53c6bc` | `<empty>` | PASS |
| F03-A2 | HOLD | `m14_acog_mp` | `tag_acog` | `TAG_EOTECH TAG_REFLEX_SIGHT TAG_SILENCER TAG_M320 J_M320_SLIDE J_M320_GRENADE` | `d8a45841218e9dfc6805c14802c86b7c7fafc115dcb83379ce64da8b3b525adc` | `<empty>` | PASS |
| F03-A3 | HOLD | `m14_silencer_mp` | `tag_silencer` | `TAG_ACOG TAG_REFLEX_SIGHT TAG_EOTECH TAG_M320 J_M320_SLIDE J_M320_GRENADE` | `23d12f81fb09e849c70da871e9a1f97f0a1f1d2e4539bf22b5193710a95be0f3` | `<empty>` | PASS |
| F05-A0 | READY | `m60e4_mp` | `tag_iron_sight` | `tag_foregrip tag_ak47_mount tag_acog TAG_REFLEX_SIGHT` | `55487edaee7a4be036265a220adf59739c766a039d4d06590d5b4a29a1aa8394` | `m60e4_mp` | PASS |
| F05-A1 | HOLD | `m60e4_reflex_mp` | `tag_reflex_sight` | `tag_foregrip tag_acog tag_ak47_mount TAG_IRON_SIGHT TAG_IRON_SIGHT_FRONT` | `a80abd0e6a514897b680576ad26252d6deae2ee498faea04138d47ead61a4e85` | `<empty>` | PASS |
| F05-A2 | HOLD | `m60e4_acog_mp` | `tag_acog` | `tag_foregrip tag_reflex_sight TAG_IRON_SIGHT TAG_IRON_SIGHT_FRONT` | `99f7bcfc6b5b5e57062ee7daee28ef644b2cf8a6350127f2d0e075a860835456` | `<empty>` | PASS |
| F05-A3 | HOLD | `m60e4_grip_mp` | `tag_foregrip` | `tag_acog tag_ak47_mount TAG_REFLEX_SIGHT` | `a75b9e50f382d064a6a17c04515b477aa4982f2ba8228d220aa972e6beb228d5` | `<empty>` | PASS |
| F07-A0 | READY | `winchester1200_mp` | `tag_iron_sight` | `TAG_EOTECH TAG_SILENCER TAG_REFLEX_SIGHT TAG_GRIP` | `20a8071661b91cb736bfb0a2c4f67a196ef60a46d7f2beb6cd427509c680b6d2` | `winchester1200_mp` | PASS |
| F07-A1 | HOLD | `winchester1200_reflex_mp` | `tag_reflex_sight` | `TAG_EOTECH TAG_IRON_SIGHT TAG_SILENCER TAG_GRIP` | `7b04faec0fdebb702df28591fb69ab7521b8fc9a638c1562f018a6c10ebece32` | `<empty>` | PASS |
| F07-A3 | HOLD | `winchester1200_grip_mp` | `tag_grip` | `TAG_EOTECH TAG_SILENCER TAG_REFLEX_SIGHT` | `4bfa4b609ee00fce5783b2540b8b98b1f9852151876fbb118c7316c56ba7be50` | `<empty>` | PASS |
| F08-A0 | READY | `colt45_mp` | `j_bolt` | `TAG_SILENCER TAG_RAIL TAG_EOTECH TAG_REFLEX` | `fa9a133af8215bae190529469932181b476257af28f4822e7ee1738158773ae6` | `colt45_mp` | PASS |
| F08-A3 | HOLD | `colt45_silencer_mp` | `tag_silencer` | `TAG_RAIL TAG_EOTECH TAG_REFLEX` | `cb5d65e5a5d5d70e7df63ba25aa7b881df9c2ae9881263ac98835c5eb407ece4` | `<empty>` | PASS |
| F09-A0 | READY | `remington700_mp` | `tag_scope` | `TAG_ACOG TAG_SILENCER` | `c6112666a666e6e8ae1ddb8c4d4f6be663de6351ceb02af6e568fc12de2d8498` | `remington700_mp` | PASS |
| F09-A3 | HOLD | `remington700_silencer_mp` | `tag_silencer` | `TAG_ACOG` | `cefd324db6c8d890943801302f837088fdb553c95136062e3d01b6a34cf44300` | `<empty>` | PASS |
| F10-A0 | READY | `dragunov_mp` | `tag_scope_colt` | `tag_silencer` | `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c` | `dragunov_mp` | PASS |
| F10-A3 | HOLD | `dragunov_silencer_mp` | `tag_silencer` | `tag_scope_colt` | `26293516ee2a4d6667ac2786770e0e4a199eaf0147a92ddc5462b256e4541754` | `<empty>` | PASS |
| F13-A0 | READY | `skorpion_mp` | `tag_iron_sight` | `TAG_ACOG TAG_REFLEX_SIGHT TAG_EOTECH TAG_SILENCER` | `ef0814a08a21961c16cc7c17a002506e0132145ec5f8cd5f44c2126de10d912c` | `skorpion_mp` | PASS |
| F13-A1 | READY | `skorpion_reflex_mp` | `tag_reflex_sight` | `TAG_IRON_SIGHT TAG_ACOG TAG_EOTECH TAG_SILENCER` | `f5b24424e45f6e9ce4b4922eb60c35497a97da8c48250856d0bc21e57fc6a0e4` | `skorpion_reflex_mp` | PASS |
| F13-A2 | READY | `skorpion_acog_mp` | `tag_acog` | `TAG_IRON_SIGHT TAG_REFLEX_SIGHT TAG_EOTECH TAG_SILENCER` | `38e6e2eefb7d263c7de9fc73b7c1f293d8f98b6ac8b92b0e0059cf76b5946fb9` | `skorpion_acog_mp` | PASS |
| F13-A3 | READY | `skorpion_silencer_mp` | `tag_silencer` | `TAG_ACOG TAG_REFLEX_SIGHT TAG_EOTECH` | `af34c47d93fce762ee6b202db55c06c0747e5c67c16c0653db08dfbd381ba83f` | `skorpion_silencer_mp` | PASS |
| F14-A0 | READY | `uzi_mp` | `tag_iron_sight` | `TAG_REFLEX_SIGHT TAG_ACOG TAG_EOTECH TAG_SILENCER` | `f076be5e71ffa8dc4277cea744b9fcb54b0ffb1d538bcbe7c87efa56d4156f5d` | `uzi_mp` | PASS |
| F14-A1 | READY | `uzi_reflex_mp` | `tag_reflex_sight` | `TAG_IRON_SIGHT TAG_ACOG TAG_EOTECH TAG_SILENCER` | `3c8038324d92be6f9941b42885ed80debae59afcc100ab6ec66ffdd417c70dc9` | `uzi_reflex_mp` | PASS |
| F14-A2 | READY | `uzi_acog_mp` | `tag_acog` | `TAG_REFLEX_SIGHT TAG_IRON_SIGHT TAG_EOTECH TAG_SILENCER` | `8635dc7a37ac422976a544405fdccefdd4aa8a6b84fbfed4d131219b94a4dc30` | `uzi_acog_mp` | PASS |
| F14-A3 | READY | `uzi_silencer_mp` | `tag_silencer` | `TAG_REFLEX_SIGHT TAG_ACOG TAG_EOTECH` | `716660ffc194a5b2b5b253ca3763de48fb52caf81b1341c18c0c0c8998c489ee` | `uzi_silencer_mp` | PASS |
| F15-A0 | READY | `mp44_mp` | `tag_iron_sight` | `TAG_ACOG TAG_EOTECH TAG_REFLEX TAG_SILENCER J_GRENADE J_M203_SLIDE TAG_M203_BASE` | `d889c9cb51f9ed6e783cd98d93f246cbd75807e6da8e09cae0949d60735fcff6` | `mp44_mp` | PASS |
| F15-A1 | READY | `g3_gl_mp` | `tag_reflex` | `TAG_ACOG TAG_EOTECH TAG_IRON_SIGHT TAG_SILENCER J_GRENADE J_M203_SLIDE TAG_M203_BASE` | `9f59d150b8ba3c75224e435c459331eaeead3003a847698c3fd28a8adcc725b2` | `g3_gl_mp` | PASS |
| F15-A2 | READY | `m14_gl_mp` | `tag_acog` | `TAG_IRON_SIGHT TAG_EOTECH TAG_REFLEX TAG_SILENCER J_GRENADE J_M203_SLIDE TAG_M203_BASE` | `539384c6e22a39a53f54084bc086c12e5d0cf8025e038ae123dadd6bade829d8` | `m14_gl_mp` | PASS |
| F15-A3 | READY | `g36c_gl_mp` | `tag_silencer` | `TAG_ACOG TAG_EOTECH TAG_REFLEX J_GRENADE J_M203_SLIDE TAG_M203_BASE` | `9c494f3c04d1ca8f5c6ad962a7f7df4e893ed4c7ee219882adec1579b85833f7` | `g36c_gl_mp` | PASS |

## Physical Mutation Results

Each mutation was applied to a copied, complete physical GSC, CSV, menu, or weaponfile. Validation was rerun on the full mutated file, and all 10 were rejected. Fixture bytes were retained through hash capture and then removed as disposable working material.

| Fixture | SHA-256 | Expected new issue | Actual new issue | Result |
|---|---|---|---|---|
| `silent-fallback` | `e78c1efb4aefc3749f8fa4580f194c22dd7efb1ee2340232d0605f7e5a1ff52e` | `missing_hold_event` | `missing_hold_event` | REJECTED |
| `missing-hold-event` | `c5c29a1e23663721b6d8099f64fa9c2edd5926a8911aa415c34a85a9cfbca488` | `missing_hold_event` | `missing_hold_event` | REJECTED |
| `post-resolver-rewrite` | `9b561fb1a2924b5c6c1fafefb215e37d1c94560aa029740e6217de32e44bcb46` | `post_resolver_selection_rewrite` | `post_resolver_selection_rewrite` | REJECTED |
| `invalid-sidearm` | `bdc04aecba1892c45295d22a6735aad7a0021eadb14f98ba44c2f1d1dc10d96b` | `invalid_sidearm, state_set_mismatch` | `invalid_sidearm, state_set_mismatch` | REJECTED |
| `ready-without-visual-acceptance` | `1d5dfcb6efc5f9c17115f8c6621d29951d036f417e87da0f0d09e7a9a088d153` | `identity_mismatch, ready_without_visual_acceptance` | `identity_mismatch, ready_without_visual_acceptance` | REJECTED |
| `selected-weapon-alias` | `f7d9d4812f12ad4b58bfd6575ce75ebb4ab11f7d6fc70be24ff95d2836c9c7ff` | `identity_mismatch, selected_weapon_alias` | `identity_mismatch, selected_weapon_alias` | REJECTED |
| `forbidden-a4` | `48528f1f82cc56ab770ddbcebc3cfea2bab7ac0b36cc337dcef9e3badfac1a78` | `forbidden_a4, state_set_mismatch` | `forbidden_a4, selected_weapon_alias, state_set_mismatch` | REJECTED |
| `f10-visible-hide-overlap` | `726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0` | `f10_visible_hidden` | `f10_visible_hidden` | REJECTED |
| `coarse-offline-labels` | `015f1625dd9f222727fabce0cf4821e3a008f720ee4e3501aa93576e30c9f909` | `coarse_offline_label` | `coarse_offline_label` | REJECTED |
| `sidearm-resolver-bypass` | `f6100fbae4b09b27c9b3c4a842aa9613c9971311a51dbdaf5bf607291137d114` | `resolver_bypass` | `missing_hold_event, resolver_bypass` | REJECTED |

## Final Decision

The candidate repairs the F10-A0 byte/tag defect and supplies a strong exact-state/menu/persistence inventory. It nevertheless violates the hard bar's explicit A0 fail-closed rule for every visually held state and introduces weapon-stripping/deploy-blocking behavior on covered gameplay paths. Runtime/menu conformance is therefore FAIL. With no composed visual acceptance, all 17 visually held states and the overall release gate remain HOLD.

Machine-readable state records, mutation metadata, reconstruction details, limitations, and findings are in `RESULT.json`; exact artifact and input hashes are in `SHA256SUMS.txt`.
