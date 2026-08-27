# Weapon Attachment Matrix Critic Round 3

## Separate Verdicts

**Runtime/menu held-attachment semantics: PASS**

**Physical visual alignment gate: HOLD**

**Overall release verdict: HOLD**

**Promotion ready: NO**

No runtime/menu aggregate inputs failed.

## Derived Subverdicts

| Contract | Verdict |
| --- | --- |
| Exact 37 states (11 A0 + 26 attachments) | **PASS** |
| 17 held selections retain saved/menu identity | **PASS** |
| Held runtime uses non-empty same-family A0 | **PASS** |
| Deploy/readiness remains enabled | **PASS** |
| Deterministic truthful hold audit | **PASS** |
| Persistence and restore retain selection | **PASS** |
| F10 hideTags repair only | **PASS** |
| F10 parsed notetrackSoundMap unchanged | **PASS** |
| Labels and save macros | **PASS** |
| Same-kill-goal selection behavior | **PASS** |
| Exact patch and reverse reconstruction | **PASS** |
| Builder manifest | **PASS (407/407)** |
| Critic adversarial mutations | **PASS (20/20)** |
| Production and builder integrity | **PASS** |
| Physical visual alignment | **HOLD** |

## Independent Reconstruction

The candidate is exactly `628fe01918ea9793300940491bbd6bf4a29f043af47a312adb405e68bd1e1251` (110002 bytes, LF-only), matches the required SHA-256 and seven-path set, and passes the live production apply check.

Fresh LF-preserving reconstruction `clean-20260827T003359592140Z` has 6 baseline and 6 reverse-applied entries with zero path, byte, or SHA-256 differences. Reverse exactness is PASS.

This establishes that the earlier reverse `false` was a critic reconstruction/checker bug, not a real candidate mismatch. The preserved faulty reconstruction allowed repository `text=auto` behavior to emit CRLF; the corrected run forces LF and derives `reverseRoundTripExact` directly from the zero-difference manifest comparison.

All 11 guarded production/context paths and Git status outside the critic lane are unchanged; builder artifacts are unchanged. The builder's REPORT/RESULT were not semantic authority. All 407 manifest entries were independently recomputed and match.

## Runtime And Menu Contract

The independent bar/matrix parse contains exactly 37 states: 11 A0 plus 26 attachments. All 17 held selections retain selected/menu identity through userinfo, cache, profile, and restore policy, while deployment uses attachment 0 and the same family's non-empty A0 weapon. All 20 ready states retain their selected runtime identity. Primary and sidearm deployment stay enabled and confirm `hasWeapon`. The canonical held event includes STATE, attachment 0, runtime A0 weapon, SELECTION_RETAINED=1, DEPLOYED=1, and HOLD_REASON=EXTERNAL_VISUAL_ACCEPTANCE_REQUIRED. Labels, save macros, and same-kill-goal behavior are preserved.

F10 PASS: each of the three copies removes only `tag_scope_colt` from `hideTags`; the visible tag remains `tag_scope_colt`. The parsed `notetrackSoundMap` remains exactly 181 bytes with SHA-256 `08540abae58e36fbff8919c5473d567563528b75e2b4ad50402e048a7e4fa8f0` in baseline and staged files. The prior notetrack flag was a critic checker artifact: reconstructed CRLF changed the terminal field's retained line ending. With `core.autocrlf=input` and `core.eol=lf`, parsed values are byte-identical and the only parsed changed field is `hideTags`.

## Adversarial Evidence

All 20 critic-owned full-file adversarial mutations were rejected, including empty runtime, wrong-family A0, selection rewrite, blocked deploy, lying/missing audit data, F10 regression, missing state/A4, persistence loss, menu/label regression, and same-goal regression.

## Remaining Hold

The runtime/menu PASS is separate from the physical visual gate. No build, package, Steam,
server, game, model, or animation operation was run, and this patch supplies no
fresh engine-composed 37/37 visual evidence.

Largest remaining gap: Fresh independent engine-composed physical and animation evidence for all 37 states, especially acceptance of the 17 quarantined attachment geometries.
