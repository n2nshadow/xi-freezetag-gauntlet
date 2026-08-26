# Weapon Attachment Matrix Critic Round 1

## Verdict

**Overall: HOLD**

**Exact selectable-state set coverage: PASS**

**Current exact weapon-state conformance: FAIL**

**Visual alignment: HOLD**

**Live runtime behavior: HOLD**

**Promotion ready: NO**

Repository root for every relative path below:
`C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag`.

The 37-state bar exactly covers the current production-config menu universe of
selectable imported saved identities: 11 A0 states and 26 attachment states,
with zero selectable states missing and zero matrix states extraneous. That
set-level PASS does not make the current candidate releasable. The current
`F10-A0` weapon file hides the bar-required visible tag, 17 labeled attachment
choices deploy A0 under the production policy, the current GSC and F10 bytes do
not match the Round 3 runtime-identity candidate, and no visual or live-engine
run was performed.

## Blocking Findings

### 1. Current F10-A0 contradicts its matrix identity

The bar requires `F10-A0` to expose `tag_scope_colt`
(`xi_ftag/gauntlet/weapon_alignment_bar.md:18`) and prohibits a visible tag
from appearing in `hideTags` (`:84-88`). The current exact source and runtime
copies both contain `hideTags\tag_silencer` on line 1 followed by
`tag_scope_colt` on line 2:

- `weapons/xi/dragunov_mp:1-2`
- `xi_ftag/source_weapons/modern/10_kvinhibitor/dragunov_mp:1-2`
- `xi_ftag/zone_raw/xi_ftag/weapons/mp/dragunov_mp:1-2`

All three current files are 8,086 bytes and SHA-256
`726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0`.
The Round 3 candidate expected 8,071-byte SHA-256
`7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`.
This independently reproduces the current bar hold at
`xi_ftag/gauntlet/weapon_alignment_bar.md:121-123`.

### 2. Seventeen selectable labels deploy a different attachment surface

Production sets candidate preview to `0` and verified attachments to `1`
(`xi_ftag/configs/xi_ftag.cfg:635-638`). The current resolver retains the saved
attachment but returns A0 for imported attachments outside F13, F14, and F15
(`xi_ftag/zone_raw/xi_ftag/xi_ftag/_weapons.gsc:3658-3693`). Primary and sidearm
deployment then give the resolved file (`:3463-3519`). Therefore these
selectable menu identities deploy a different attachment:

`F01-A1`, `F01-A2`, `F01-A3`, `F02-A1`, `F02-A2`, `F02-A3`, `F03-A1`,
`F03-A2`, `F03-A3`, `F05-A1`, `F05-A2`, `F05-A3`, `F07-A1`, `F07-A3`,
`F08-A3`, `F09-A3`, and `F10-A3`.

That is the exact `17 / 26` quarantine named by the current bar at line 121.
The choices remain valid saved identities, so they belong in the 37-state
matrix, but their labels do not describe the production-deployed surface.
This is an intentional fail-closed policy, not evidence that those attachment
surfaces work.

The current GSC contains no `XI_WEAPON;RUNTIME_IDENTITY_HOLD` or
`SELECTION_RETAINED` event text. The bar requires an explicit audit event for
every held fallback (`xi_ftag/gauntlet/weapon_alignment_bar.md:27-35`). The
historical Round 3 critic proved that event only for a different, patch-bound
GSC candidate.

### 3. Round 3 runtime proof does not bind the current tree

Round 3 passed runtime identity for patch SHA-256
`9230c0e42120c2161ede0bd35792fd7622ca875fa71e62517a8c04e6fca1dc9f`
and explicitly left visual alignment on HOLD
(`xi_ftag/.audit/weapon_runtime_identity_critic_round3/REPORT.md:3-14`). Its
candidate GSC was 214,862 bytes at SHA-256
`079c3d0a07c1560ba9349e53279a459cbedd0de46db440c416cb34429e98819d`.

The current GSC is 208,635 bytes at SHA-256
`397c9b1af176ef7fd828baf7b684735d05256c22f1f137c8ccfca0655620fe93`.
Current weapon files match 36 of 37 Round 3 state hashes; `F10-A0` is the one
mismatch. Round 3 itself warns that its external Round 1 matrix still carried
the stale F10 bytes (`REPORT.md:96-107`; `RESULT.json:164-180`). Consequently,
its runtime PASS cannot be transferred to today's current files.

## Exact Set Proof

The bar rows at `xi_ftag/gauntlet/weapon_alignment_bar.md:11-23` were expanded
into state IDs rather than accepted by count. Independently, the current GSC
was translated from these exact rules:

- Imported families are exactly F01, F02, F03, F05, F07, F08, F09, F10, F13,
  F14, and F15 (`_weapons.gsc:3675-3678`).
- A0-A3 are generally available; F07 permits only A0/A1/A3; F08, F09, and F10
  permit only A0/A3; A4 is always rejected (`_weapons.gsc:3743-3770`).
- Production enables all 11 imported families
  (`xi_ftag/configs/xi_ftag.cfg:592-608`).

Exact set comparison result:

- Derived selectable IDs: 37
- Matrix IDs: 37
- Selectable but absent from matrix: 0
- Matrix but not selectable: 0
- Duplicate state IDs: 0
- UTF-8/LF sorted state-ID digest, no final newline:
  `f73d992b1b7787ce8f79b58aa2cf0550df07cf0bed8602544464f7f973370c7c`

Per family, the exact set is:

| Family | Exact selectable IDs | Count |
| --- | --- | ---: |
| F01 | A0, A1, A2, A3 | 4 |
| F02 | A0, A1, A2, A3 | 4 |
| F03 | A0, A1, A2, A3 | 4 |
| F05 | A0, A1, A2, A3 | 4 |
| F07 | A0, A1, A3 | 3 |
| F08 | A0, A3 | 2 |
| F09 | A0, A3 | 2 |
| F10 | A0, A3 | 2 |
| F13 | A0, A1, A2, A3 | 4 |
| F14 | A0, A1, A2, A3 | 4 |
| F15 | A0, A1, A2, A3 | 4 |

Role totals were also reconciled, not inferred from 37 alone: 11 A0, 8
reflex, 7 ACOG, 9 suppressor, and 2 grip states.

## Labels And Menu Availability

All 11 family labels match across the bar, GSC roster, native class menu dvars,
offline workshop, offline table, weapon localization keys, and 37 parsed
weapon files:

- GSC labels: `_weapons.gsc:185-213`
- Native primary/sidearm buttons:
  `xi_ftag/zone_raw/xi_ftag/ui_mp/scriptmenus/xi_class_setup.menu:477-505,532-536`
- Offline imported buttons:
  `xi_ftag/zone_raw/xi_ftag/ui_mp/xi_offline_class.menu:205-223,236`
- Offline table rows:
  `xi_ftag/zone_raw/xi_ftag/mp/xi_offline_primary.csv:3-17`
- Localized weapon names:
  `xi_ftag/zone_raw/xi_ftag/english/localizedstrings/xi_ftag.str:38-69`

The native menu exposes five generic attachment controls but makes each one
visible only through `isAttachmentAvailable`
(`xi_class_setup.menu:524-529,554-558`; `_weapons.gsc:1879-1915`). Dynamic
labels are exact: F05/F07 A3 become `GRIP`, F09/F10 A0 become `SCOPE`, and the
remaining labels use `IRON SIGHTS`, `REFLEX`, `ACOG`, or `SUPPRESSOR`
(`_weapons.gsc:3733-3739`).

The offline workshop reaches the same state set, but uses coarse category
labels `IRON / SCOPE` and `SUPPRESS / GRIP`
(`xi_offline_class.menu:230-233`). Those labels are ambiguous but not false:
its family-specific availability macros at lines 22-24 exclude exactly the
same imported reflex/ACOG combinations, and its sidearm suppressor rule at
line 250 includes F08.

### Launcher

No A4 launcher state is selectable and the matrix correctly omits it.
Production sets `scr_xi_loadout_allow_launcher` to `0`
(`xi_ftag/configs/xi_ftag.cfg:628-634`); the native menu's A4 button is hidden
by availability; the offline menu has no launcher choice; and
`isAttachmentAvailable` rejects A4 unconditionally (`_weapons.gsc:3767-3768`).

The launcher dvar and `LAUNCHER` label are therefore dead as a selectable
surface even if an administrator sets the dvar to `1`. That configuration
comment says "opt-in", but current code still rejects A4. This does not add a
missing matrix state; it is a misleading configuration surface.

### F15 `_gl_mp` aliases

F15 A1/A2/A3 use `g3_gl_mp`, `m14_gl_mp`, and `g36c_gl_mp`
(`_weapons.gsc:3577-3586`). The filenames are misleading internally, but the
menu choices do not deploy launchers. Structured parsing of all three exact
files found `weaponType=bullet`, empty `altWeapon`, hidden M203/grenade tags,
the expected reflex/ACOG/suppressor visibility, and `silenced=1` only for A3.
They are valid repurposed attachment aliases, not extra launcher states.

## Saved Selection And Restore

Native primary and sidearm attachment responses accept only
`isAttachmentAvailable` states and write the exact selected attachment
(`_weapons.gsc:988-1025`), then save at lines 1106-1109. Cache entries retain
both attachment fields (`:2895-2932`). Persistent profile words encode and
restore the attachment indices (`:3236-3269`, `:3273-3347`). Offline userinfo
does the same (`:2817-2891`). Restores pass through policy validation, which
keeps valid matrix states and resets invalid/disabled states to A0
(`:3070-3108`).

The runtime resolver's comment and return path preserve the saved attachment
while deriving a separate deployed attachment (`:3664-3671`). This proves the
static saved-selection design. A live reconnect/profile round trip was not run,
so the runtime claim remains HOLD.

## Exact Current State Inventory

Every listed source file has an identical current runtime copy under
`xi_ftag/zone_raw/xi_ftag/weapons/mp/<basename>`. All 37 pairs match byte for
byte. The canonical current candidate inventory payload is sorted by state ID
as `STATE<TAB>PATH<TAB>SHA256`, UTF-8/LF, no final newline; its SHA-256 is
`a8b93801269e2adb18f8ff049d92ddf780a505594e617229a2af14a0fc9bd116`.

The production mapping payload is sorted by state ID as
`STATE<TAB>SELECTED<TAB>RUNTIME<TAB>STATUS`, UTF-8/LF, no final newline; its
SHA-256 is
`1da58a170012034f34fbc6c28e0df8e73945b796daab47e85879dd15fafd357a`.

| State | Native label | Exact source path | Current SHA-256 | Production target | Result |
| --- | --- | --- | --- | --- | --- |
| F01-A0 | IRON SIGHTS | `weapons/xi/g36c_mp` | `773e5460720691a78b2a81b2789c6879ba3f47b585355bac9014d6d33b5e7dfd` | `g36c_mp` | SAME |
| F01-A1 | REFLEX | `weapons/xi/g36c_reflex_mp` | `9186014ed283db3bb250c2fec8d929e01c5027d28cbe7f0aef3ffab7aee0b4d6` | `g36c_mp` | A0 FALLBACK |
| F01-A2 | ACOG | `weapons/xi/g36c_acog_mp` | `48f20962a499ba0fba119a0fcf6ae674deaa98ab95a4b98f402cab8512766cd7` | `g36c_mp` | A0 FALLBACK |
| F01-A3 | SUPPRESSOR | `weapons/xi/g36c_silencer_mp` | `50bb0c541554d4e9a46cc6a61adfb1b80ecec915646c18c35438940ba9a49141` | `g36c_mp` | A0 FALLBACK |
| F02-A0 | IRON SIGHTS | `weapons/xi/g3_mp` | `46f1f461f1d06b66e4198841c9307eda91859101fe4bd0bfb4a315797d537a01` | `g3_mp` | SAME |
| F02-A1 | REFLEX | `weapons/xi/g3_reflex_mp` | `eaf6ebfaea8af69e53573a86ed0c787b6f4e8360728f5c43e9d29b1e78278311` | `g3_mp` | A0 FALLBACK |
| F02-A2 | ACOG | `weapons/xi/g3_acog_mp` | `a0aa7959438dbed6fa9d0f65f09bfb7e268a445884b3f26bb9dbea1a9d5635c0` | `g3_mp` | A0 FALLBACK |
| F02-A3 | SUPPRESSOR | `weapons/xi/g3_silencer_mp` | `16aefbf1f9343c1de4f90179e7f620ba4866180d387ba1c6f68fbd1a983b6796` | `g3_mp` | A0 FALLBACK |
| F03-A0 | IRON SIGHTS | `weapons/xi/m14_mp` | `cb2f502621c790fb9b6f503e7b09a2eb13c7ec71eaf7db8c3b7613b52a9cbee1` | `m14_mp` | SAME |
| F03-A1 | REFLEX | `weapons/xi/m14_reflex_mp` | `8f71fd9d769211ec4e516336bb93fdf05ed8f17fa77d011e6d9848dcfe53c6bc` | `m14_mp` | A0 FALLBACK |
| F03-A2 | ACOG | `weapons/xi/m14_acog_mp` | `d8a45841218e9dfc6805c14802c86b7c7fafc115dcb83379ce64da8b3b525adc` | `m14_mp` | A0 FALLBACK |
| F03-A3 | SUPPRESSOR | `weapons/xi/m14_silencer_mp` | `23d12f81fb09e849c70da871e9a1f97f0a1f1d2e4539bf22b5193710a95be0f3` | `m14_mp` | A0 FALLBACK |
| F05-A0 | IRON SIGHTS | `weapons/xi/m60e4_mp` | `55487edaee7a4be036265a220adf59739c766a039d4d06590d5b4a29a1aa8394` | `m60e4_mp` | SAME |
| F05-A1 | REFLEX | `weapons/xi/m60e4_reflex_mp` | `a80abd0e6a514897b680576ad26252d6deae2ee498faea04138d47ead61a4e85` | `m60e4_mp` | A0 FALLBACK |
| F05-A2 | ACOG | `weapons/xi/m60e4_acog_mp` | `99f7bcfc6b5b5e57062ee7daee28ef644b2cf8a6350127f2d0e075a860835456` | `m60e4_mp` | A0 FALLBACK |
| F05-A3 | GRIP | `weapons/xi/m60e4_grip_mp` | `a75b9e50f382d064a6a17c04515b477aa4982f2ba8228d220aa972e6beb228d5` | `m60e4_mp` | A0 FALLBACK |
| F07-A0 | IRON SIGHTS | `weapons/xi/winchester1200_mp` | `20a8071661b91cb736bfb0a2c4f67a196ef60a46d7f2beb6cd427509c680b6d2` | `winchester1200_mp` | SAME |
| F07-A1 | REFLEX | `weapons/xi/winchester1200_reflex_mp` | `7b04faec0fdebb702df28591fb69ab7521b8fc9a638c1562f018a6c10ebece32` | `winchester1200_mp` | A0 FALLBACK |
| F07-A3 | GRIP | `weapons/xi/winchester1200_grip_mp` | `4bfa4b609ee00fce5783b2540b8b98b1f9852151876fbb118c7316c56ba7be50` | `winchester1200_mp` | A0 FALLBACK |
| F08-A0 | IRON SIGHTS | `weapons/xi/colt45_mp` | `fa9a133af8215bae190529469932181b476257af28f4822e7ee1738158773ae6` | `colt45_mp` | SAME |
| F08-A3 | SUPPRESSOR | `weapons/xi/colt45_silencer_mp` | `cb5d65e5a5d5d70e7df63ba25aa7b881df9c2ae9881263ac98835c5eb407ece4` | `colt45_mp` | A0 FALLBACK |
| F09-A0 | SCOPE | `weapons/xi/remington700_mp` | `c6112666a666e6e8ae1ddb8c4d4f6be663de6351ceb02af6e568fc12de2d8498` | `remington700_mp` | SAME |
| F09-A3 | SUPPRESSOR | `weapons/xi/remington700_silencer_mp` | `cefd324db6c8d890943801302f837088fdb553c95136062e3d01b6a34cf44300` | `remington700_mp` | A0 FALLBACK |
| F10-A0 | SCOPE | `weapons/xi/dragunov_mp` | `726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0` | `dragunov_mp` | SAME; VISIBLE TAG HIDDEN |
| F10-A3 | SUPPRESSOR | `weapons/xi/dragunov_silencer_mp` | `26293516ee2a4d6667ac2786770e0e4a199eaf0147a92ddc5462b256e4541754` | `dragunov_mp` | A0 FALLBACK |
| F13-A0 | IRON SIGHTS | `weapons/xi/skorpion_mp` | `ef0814a08a21961c16cc7c17a002506e0132145ec5f8cd5f44c2126de10d912c` | `skorpion_mp` | SAME |
| F13-A1 | REFLEX | `weapons/xi/skorpion_reflex_mp` | `f5b24424e45f6e9ce4b4922eb60c35497a97da8c48250856d0bc21e57fc6a0e4` | `skorpion_reflex_mp` | SAME |
| F13-A2 | ACOG | `weapons/xi/skorpion_acog_mp` | `38e6e2eefb7d263c7de9fc73b7c1f293d8f98b6ac8b92b0e0059cf76b5946fb9` | `skorpion_acog_mp` | SAME |
| F13-A3 | SUPPRESSOR | `weapons/xi/skorpion_silencer_mp` | `af34c47d93fce762ee6b202db55c06c0747e5c67c16c0653db08dfbd381ba83f` | `skorpion_silencer_mp` | SAME |
| F14-A0 | IRON SIGHTS | `weapons/xi/uzi_mp` | `f076be5e71ffa8dc4277cea744b9fcb54b0ffb1d538bcbe7c87efa56d4156f5d` | `uzi_mp` | SAME |
| F14-A1 | REFLEX | `weapons/xi/uzi_reflex_mp` | `3c8038324d92be6f9941b42885ed80debae59afcc100ab6ec66ffdd417c70dc9` | `uzi_reflex_mp` | SAME |
| F14-A2 | ACOG | `weapons/xi/uzi_acog_mp` | `8635dc7a37ac422976a544405fdccefdd4aa8a6b84fbfed4d131219b94a4dc30` | `uzi_acog_mp` | SAME |
| F14-A3 | SUPPRESSOR | `weapons/xi/uzi_silencer_mp` | `716660ffc194a5b2b5b253ca3763de48fb52caf81b1341c18c0c0c8998c489ee` | `uzi_silencer_mp` | SAME |
| F15-A0 | IRON SIGHTS | `weapons/xi/mp44_mp` | `d889c9cb51f9ed6e783cd98d93f246cbd75807e6da8e09cae0949d60735fcff6` | `mp44_mp` | SAME |
| F15-A1 | REFLEX | `weapons/xi/g3_gl_mp` | `9f59d150b8ba3c75224e435c459331eaeead3003a847698c3fd28a8adcc725b2` | `g3_gl_mp` | SAME |
| F15-A2 | ACOG | `weapons/xi/m14_gl_mp` | `539384c6e22a39a53f54084bc086c12e5d0cf8025e038ae123dadd6bade829d8` | `m14_gl_mp` | SAME |
| F15-A3 | SUPPRESSOR | `weapons/xi/g36c_gl_mp` | `9c494f3c04d1ca8f5c6ad962a7f7df4e893ed4c7ee219882adec1579b85833f7` | `g36c_gl_mp` | SAME |

Structured parsing of all 37 files found 37 unique paths, 37 bullet weapons,
37 empty `altWeapon` fields, 37 correct `silenced` values for their role, and
one case-insensitive visible/hide overlap: `F10-A0`.

## Exact Geometry Candidates

These are hashes only. They do not establish visual acceptance. The 11 current
runtime model hashes match the Round 3 state records:

| Family | Exact current model | Bytes | SHA-256 |
| --- | --- | ---: | --- |
| F01 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_icr7_summon_lod0.glb` | 1776372 | `f2b9317376da870b8659adf9ea12c964e6f2f896b617279744e731d39f798471` |
| F02 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_vapr_vampire_lod0.glb` | 1817544 | `594f2687a47d8fed38234e74673bd255b149c58d145f3b667d4c08c7a42c8881` |
| F03 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_auger_dmr_lod0.glb` | 1090308 | `382e8cb8cd6a51fbf8354fa1454af92b0b6711c89baeb4effc11f1074753bf31` |
| F05 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_hades_venom_lod0.glb` | 1764492 | `b9e7cf31498e6caaf0bd6efa30156b3cef2c8e9848504d7c9e66bce8bf456020` |
| F07 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_mog12_enforcer_lod0.glb` | 1839648 | `dd503bf10cde64900ab5ea79942377a91ccd0bee3cd3fe92206d9435d3cfaf79` |
| F08 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_rk7_odins_song_lod0.glb` | 822540 | `20502f997979a72ae7d859f14233ce15244d1c4ea3ea28a24f4aeb36cf8a79d9` |
| F09 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_outlaw_regulator_lod0.glb` | 1102948 | `cc52f049f0aef186f53651050e5e9615883edc4d21de2580cf9daf96b728702b` |
| F10 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_sdm_lost_patrol_lod0.glb` | 1153588 | `6a7b7c84d43e1289fdde12cefec1bfc729109e22c7bb2e081ea7e14c459b3a02` |
| F13 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_gks_plague_lod0.glb` | 1665456 | `bfd9ff3f80b1cfb83b13a7bf136e7dceb0aeb56de7b54c16d1f80e90f6321ce3` |
| F14 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_cordite_zero_g_lod0.glb` | 1681840 | `1ccb14acb248f9adf3d6a97ba9dfc50a474839466224f0e2c7c5ab964f903535` |
| F15 | `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_kn57_faberge_lod0.glb` | 1810068 | `3dae9a31f46f2425babb259b1e3fe68d65989f51668ccae35e48c9c1b591cad7` |

The current bar separately names the rejected F01 draft at lines 114-120. Its
exact path is
`xi_ftag/.audit/weapon_alignment_builder_round2/drafts/family-01/viewmodel_t8_icr7_summon_round2_lod0.glb`,
1,762,352 bytes, SHA-256
`10f010992ea2554176c9aa0fb38d24533c248c09fe1477aafa03024416eb99c8`.
It remains rejected and was not treated as the current runtime model.

## Limitations And Scope

- No production, builder, `zone_raw`, build output, Steam, package, or launch
  path was modified.
- No game, server, builder, package, installer, or visual renderer was run.
- Runtime mappings above are static evaluations of the current exact GSC and
  production config, not live-engine observations.
- No visual claim was made from model hashes, tags, or weapon fields. The bar
  requires per-state final rasters and exact animations at lines 37-110; none
  were generated here.
- Durable writes are restricted to
  `xi_ftag/.audit/weapon_attachment_matrix_critic_round1`.
- `SHA256SUMS.txt` records every exact weapon candidate, matching runtime copy,
  current model candidate, named rejected draft, and evidence input used here.
