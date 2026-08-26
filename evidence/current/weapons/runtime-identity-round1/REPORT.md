# XI FreezeTag Weapon Runtime Identity Critic Round 1

## Verdict

**HOLD.** The candidate satisfies the 37-state mapping, retained-selection,
known-HOLD, preview, clean-apply, and narrow-scope checks, but it misses three
hard bars. The largest gap is `F10-A0`: `dragunov_mp` declares
`tag_scope_colt` as both its required visible tag and a `hideTags` member while
the candidate still marks the state runtime verified. The patch changes only
`_weapons.gsc` and does not correct any `dragunov_mp` copy.

No production, builder, package, build, install, Steam, or git state was changed.

## Blocking Findings

### 1. F10-A0 hides its active scope tag

- State: `F10-A0`, family `10`, attachment `0`, roster `kv_inhibitor` / SDM Lost Patrol.
- Weaponfile: `weapons/xi/dragunov_mp`, SHA-256
  `726487e0bd74601d02cc99f7956ae4b28120da441a3a48f98381cda3e565c8e0`.
- Required visible tag: `tag_scope_colt`; it exists in the runtime GLB.
- Actual `hideTags`: `tag_silencer`, `tag_scope_colt`.
- Candidate allowlist: `true` at staged line 3719.
- Runtime result: A0 remains A0, so no HOLD fallback or HOLD audit event occurs.
- All three live copies of `dragunov_mp` have the same hash and bad contract.
- The patch target list contains only `_weapons.gsc`; `f10WeaponfileCorrectedByPatch=false`.

No other one of the 37 states has a case-insensitive visible/hide overlap.
The explicit hard bar makes this overlap an unconditional HOLD.

### 2. Readiness verification is same-source self-certification

The staged source initializes readiness booleans and verifies them against a
second set of constants in that same candidate-controlled source. The critic
fixture enables held `F01-A1` and disables bare `F02-A0` in both places. It
preserves 20 ready / 17 HOLD counts, passes the exact-check function, passes the
modeled `verifyRuntimeWeaponRoster` loop and explicit runtime checks, but fails
the independent sealed contract. A candidate-controlled dual edit can therefore
self-certify.

The builder manifest/checker would catch current drift if independently rerun,
but the patch does not bind runtime readiness to an independently owned seal or
an enforced production build gate. This fails the non-self-certification bar.

### 3. Candidate seals only 185 of 1110 XAnim slots

The critic derived all 30 `*Anim` fields from the actual weaponfiles and checked
30 fields across all 37 states: 1110 total slots, 879 non-empty slots, 879 local
hash checks, 180 unique runtime XAnims, and no missing standalone bytes. The
candidate manifest seals only five fields per state, 185 slots total and 69
unique XAnims. There are 111 locally present runtime XAnims outside that seal.

The added `fireAnim` fixture flips a byte in
`viewmodel_mw2_m16_fire`: the critic's 30-field seal detects the change while
the candidate's five-field check does not. This is an explicit 185/1110
coverage blocker, not a claim that the current 879 present XAnim files mismatch.
All current XAnim slot names and hashes independently checked cleanly.

## Unknown-Family Resolution

The apparent `unknown-family-state` contradiction is resolved: an unknown
family intentionally retains `runtimeAttachment=1` as inert selector metadata,
but `getRuntimeWeaponFile(99,1)` returns `""`. The empty weapon is the intended
fail-closed terminal value, and no caller can deploy or use the attachment:

- `initPlayerLoadout` and `validateRestoredLoadoutPolicy` normalize families not
  present in the primary/sidearm family lists.
- `isNativeClassReadyToDeploy` rejects a family outside its loadout slot.
- Both `applyPrimaryLoadout` and `applySidearmLoadout` return on `newWeapon == ""`
  before any `giveWeapon`; primary also returns before `setSpawnWeapon`.
- `isSelectedLoadoutActive` rejects an empty primary before readiness can become true.
- No source call passes `getRuntimeWeaponFile(...)` directly to `giveWeapon`,
  `setSpawnWeapon`, or `switchToWeapon`.
- A forced apply terminates false and emits `XI_LOADOUT;APPLY_FAIL`.

The evidence records every caller of `getRuntimeAttachment` and
`getRuntimeWeaponFile` and all ten guards. `noCallerCanDeployUnknownFamily=true`,
so this is not an additional blocker.

## State Matrix

`Runtime on` assumes `scr_xi_loadout_verified_attachments=1`. Preview produces
the same result as normal runtime and cannot bypass the allowlist.

| State | Selected weaponfile | Allow | Runtime on | Visible tag | Visibility |
| --- | --- | --- | --- | --- | --- |
| F01-A0 | g36c_mp | READY | g36c_mp | tag_sights | PASS |
| F01-A1 | g36c_reflex_mp | HOLD | g36c_mp | tag_reflex | PASS |
| F01-A2 | g36c_acog_mp | HOLD | g36c_mp | tag_acog | PASS |
| F01-A3 | g36c_silencer_mp | HOLD | g36c_mp | tag_silencer | PASS |
| F02-A0 | g3_mp | READY | g3_mp | tag_sight_on | PASS |
| F02-A1 | g3_reflex_mp | HOLD | g3_mp | tag_reflex | PASS |
| F02-A2 | g3_acog_mp | HOLD | g3_mp | tag_acog | PASS |
| F02-A3 | g3_silencer_mp | HOLD | g3_mp | tag_silencer | PASS |
| F03-A0 | m14_mp | READY | m14_mp | tag_scope | PASS |
| F03-A1 | m14_reflex_mp | HOLD | m14_mp | tag_reflex_sight | PASS |
| F03-A2 | m14_acog_mp | HOLD | m14_mp | tag_acog | PASS |
| F03-A3 | m14_silencer_mp | HOLD | m14_mp | tag_silencer | PASS |
| F05-A0 | m60e4_mp | READY | m60e4_mp | tag_iron_sight | PASS |
| F05-A1 | m60e4_reflex_mp | HOLD | m60e4_mp | tag_reflex_sight | PASS |
| F05-A2 | m60e4_acog_mp | HOLD | m60e4_mp | tag_acog | PASS |
| F05-A3 | m60e4_grip_mp | HOLD | m60e4_mp | tag_foregrip | PASS |
| F07-A0 | winchester1200_mp | READY | winchester1200_mp | tag_iron_sight | PASS |
| F07-A1 | winchester1200_reflex_mp | HOLD | winchester1200_mp | tag_reflex_sight | PASS |
| F07-A3 | winchester1200_grip_mp | HOLD | winchester1200_mp | tag_grip | PASS |
| F08-A0 | colt45_mp | READY | colt45_mp | j_bolt | PASS |
| F08-A3 | colt45_silencer_mp | HOLD | colt45_mp | tag_silencer | PASS |
| F09-A0 | remington700_mp | READY | remington700_mp | tag_scope | PASS |
| F09-A3 | remington700_silencer_mp | HOLD | remington700_mp | tag_silencer | PASS |
| F10-A0 | dragunov_mp | READY | dragunov_mp | tag_scope_colt | **OVERLAP** |
| F10-A3 | dragunov_silencer_mp | HOLD | dragunov_mp | tag_silencer | PASS |
| F13-A0 | skorpion_mp | READY | skorpion_mp | tag_iron_sight | PASS |
| F13-A1 | skorpion_reflex_mp | READY | skorpion_reflex_mp | tag_reflex_sight | PASS |
| F13-A2 | skorpion_acog_mp | READY | skorpion_acog_mp | tag_acog | PASS |
| F13-A3 | skorpion_silencer_mp | READY | skorpion_silencer_mp | tag_silencer | PASS |
| F14-A0 | uzi_mp | READY | uzi_mp | tag_iron_sight | PASS |
| F14-A1 | uzi_reflex_mp | READY | uzi_reflex_mp | tag_reflex_sight | PASS |
| F14-A2 | uzi_acog_mp | READY | uzi_acog_mp | tag_acog | PASS |
| F14-A3 | uzi_silencer_mp | READY | uzi_silencer_mp | tag_silencer | PASS |
| F15-A0 | mp44_mp | READY | mp44_mp | tag_iron_sight | PASS |
| F15-A1 | g3_gl_mp | READY | g3_gl_mp | tag_reflex | PASS |
| F15-A2 | m14_gl_mp | READY | m14_gl_mp | tag_acog | PASS |
| F15-A3 | g36c_gl_mp | READY | g36c_gl_mp | tag_silencer | PASS |

Exact per-row `hideTags`, weapon/model hashes, family/attachment IDs, roster IDs,
and the complete 30-slot XAnim records are in the JSON evidence.

## Passing Bars

- Exactly 11 imported families, 11 bare states, 26 attachment states, 37 total.
- Exact candidate allowlist is 20 ready / the known 17 HOLD states.
- Families 13, 14, and 15 remain ready for A0-A3.
- Held selectable states preserve their saved/menu attachment, resolve only the
  deployed runtime to A0, and emit `XI_WEAPON;RUNTIME_IDENTITY_HOLD` before resolution.
- Candidate preview has no remaining caller and cannot bypass the allowlist.
- Negative, unavailable, and unknown selectors fail closed; unknown uses the
  proven terminal empty-weapon path described above.
- Patch passes `git apply --check`, applies in the critic tree, and is logically
  identical to the staged source. Its byte hash differs only because `git apply`
  used CRLF while the staged file uses LF.
- Patch scope is one production source file, six changed functions, four added
  functions, and no removed functions; no unrelated function changed.
- Production source and all audited production inputs remained unchanged.
- Builder lane aggregate remained unchanged.

## Evidence

- `evidence/authoritative_state_contract.json`: independent sealed 37-state contract.
- `evidence/weapon_state_matrix.json`: all weaponfiles, models, hashes, tags, and overlap result.
- `evidence/all_runtime_xanim_slots.json`: all 1110 runtime XAnim slots and 879 present hashes.
- `evidence/runtime_allowlist_and_selection.json`: exact allowlist, runtime outcomes,
  retained selection, audit-event checks, caller sets, and unknown-family proof.
- `evidence/patch_scope_and_apply.json`: clean isolated apply and change scope.
- `evidence/adversarial_results.json`: seven critic-owned adversarial fixtures.
- `evidence/source_integrity.json`: production and builder before/after seals.
- `evidence/critic_summary.json`: hard-bar rollup.
- `evidence/final_run.log`: final independent replay output.
- `COMMANDS.md`: exact reproducible commands.
- `run_critic_checks.ps1`: clean-apply, checker-exit, and blocker assertions.
- `SHA256SUMS.txt`: critic-lane artifact seal, excluding itself.

## Release Boundary

No promotion, build, package, install, game launch, Steam operation, or production
edit was performed. PASS is impossible until `F10-A0` is corrected and the
allowlist is bound to independently owned, complete runtime-identity evidence;
the full XAnim sealing gap must also be closed.
