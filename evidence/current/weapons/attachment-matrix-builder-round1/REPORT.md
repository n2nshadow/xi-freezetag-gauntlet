# Weapon Attachment Matrix Builder Round 1

## Verdict

**Runtime/menu conformance candidate: PASS**

**Exact 37-state identity: PASS**

**External composed-ADS/contact acceptance: HOLD**

**Promotion ready: NO**

The staged candidate is bound to the exact current dirty-tree bytes mirrored in
`candidate/baseline`. Its `110160`-byte `candidate.patch` has
SHA-256 `b7920db5a1139a07572fcb2f7e3f3ca628809848f5895e763c5d4cc7b5f8d8ee` and changes exactly
`7` production-relative paths. `git apply --check`
passes against today's tree, and applying it to an isolated copy of the baseline
reconstructs every staged byte exactly.

## Contract Closure

- The matrix is exact-set equal to 37 states: 11 A0 and 26 attachments, with
  state-set digest `f73d992b1b7787ce8f79b58aa2cf0550df07cf0bed8602544464f7f973370c7c`.
- All 37 selected identities are one-to-one. Invalid states and A4 return empty;
  they never alias A0.
- The 20 accepted states resolve to their exact selected weaponfile. The 17 held
  states resolve to an empty weapon and attachment `-1`, remove any wrong existing
  weapon, retain the saved selection, and emit
  `XI_WEAPON;RUNTIME_IDENTITY_HOLD` with `SELECTION_RETAINED;1;DEPLOYED;0`.
- Primary, sidearm, native deploy, frozen spawn, finish-hold, and integration
  paths cannot claim READY or call a deployment primitive for a held identity.
- F10-A0 is corrected in all three staged copies to
  `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`; `tag_scope_colt` is no longer in `hideTags`.
- Online and offline menus use family-specific `IRON SIGHTS`, `SCOPE`, `GRIP`,
  and `SUPPRESSOR` labels. Held choices are explicitly suffixed `[HOLD]`.
- F08 sidearm remains exactly A0/A3, other sidearms retain only their valid
  states, and A4 is absent from the state matrix and rejected by runtime policy.

## Adversarial Proof

All 10 physical full-file fixtures were rejected. They cover exact-set
removal/addition, A4, selected-weapon aliasing, F10 visible/hide overlap, silent
A0 fallback, post-resolver saved-selection rewrite, missing held-selection event,
READY without external visual acceptance, invalid sidearm state, and coarse
offline labels.

The unmodified candidate passes structural conformance. The same verifier in
full-visual mode fails with `external_visual_acceptance_incomplete`, by design.
`candidate/visual-acceptance-request.json` names every held state and requires
exact composed 1920x1080 ADS centering, source-bound ADS-fire trajectory,
attachment contact/orientation, persistence, and independent critic evidence.

## Remaining Hold

This lane does not claim that an iron sight is centered or an attachment is
mounted correctly from tags or hashes. No new composed ADS raster, contact sweep,
live persistence run, or independent visual acceptance exists here. The 17
states therefore remain unavailable at runtime and the complete release verdict
remains HOLD.

## Scope

Durable writes are confined to
`xi_ftag/.audit/weapon_attachment_matrix_builder_round1`. No production, build,
package, installer, Steam, server, game, or launch action was performed. Exact
input/output hashes and all test evidence are sealed by `SHA256SUMS.txt`.
