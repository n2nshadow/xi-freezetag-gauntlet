# Weapon Attachment Matrix Builder Round 3

## Verdict

**Runtime/menu held-attachment semantics: PASS**

**Exact 37-state identity and F10 correction: PASS**

**External composed visual acceptance: HOLD**

**Promotion ready: NO**

The isolated candidate is rebuilt from the lane's frozen production mirror and
applies to the current production bytes without writing them. Its
110002-byte LF-only candidate patch has SHA-256
628fe01918ea9793300940491bbd6bf4a29f043af47a312adb405e68bd1e1251 and changes exactly 7
production-relative paths. Isolated application reconstructs all staged bytes
exactly.

## Runtime Contract

- The state set remains exactly 37: 11 A0 and 26 selectable attachments. Family
  labels, selected weapon identities, and the sealed F10-A0 correction are
  preserved.
- All 17 held selections return runtime attachment 0 and their own family's A0
  weaponfile. No valid held runtime weapon is empty.
- Runtime fallback never writes the saved primary or sidearm attachment.
  Userinfo, cache, profile, and restore-policy paths retain the selected value.
- Native readiness remains enabled. Primary and sidearm apply paths deploy the
  resolved A0 and report only after that weapon is present.
- The held event includes STATE, RUNTIME_ATTACHMENT=0, RUNTIME_WEAPON,
  RUNTIME_A0, SELECTION_RETAINED=1, DEPLOYED=1, and
  HOLD_REASON=EXTERNAL_VISUAL_ACCEPTANCE_REQUIRED.

## Exhaustive Evidence

The verifier records four deterministic phases for every state: A0-to-selected,
selected deploy, selected-to-A0, and restored selection. All
68 held phases and
80 unheld phases pass. One canonical audit
event is emitted for each of the 17 held states.

All 16 full-file adversarial mutants are rejected:
empty-runtime-matrix, empty-runtime-resolver, saved-selection-rewrite, blocked-held-deploy, wrong-family-a0-matrix, wrong-family-a0-resolver, wrong-f10-visible-hide-overlap, missing-offline-hold-label, missing-family-label, cache-persistence-runtime-rewrite, profile-persistence-runtime-rewrite, userinfo-persistence-selection-loss, held-event-deployed-zero, held-event-reason-missing, exact-state-missing, forbidden-a4. Together they cover empty runtime values, saved-selection
rewrites, blocked deployment, wrong-family A0 routing, the old F10 overlap,
missing attachment and family labels, cache/profile/userinfo persistence loss,
event misreporting, exact-set deletion, and forbidden A4.

The native menu response function that routes streak selections is byte-identical
to current production, and the same-kill-goal conflict implementation remains
outside the patch with source SHA-256 cebe40960026471eaffaf14d27607a2df7e9ac958dfbdeee191158d1af7ade08.

## Scope And Hold

The patch changes no model, XModel, XAnim, GLB, render, build, package, Steam, or
server path. No build, package, server, game, or visual-alignment run was
performed. This runtime/menu PASS does not promote the 17 held attachment
geometries: composed visual acceptance is still absent, the overall verdict
remains HOLD, and promotionReady is false.

All durable writes are confined to
xi_ftag/.audit/weapon_attachment_matrix_builder_round3. Recursive inputs,
staging, transition records, canonical events, complete mutants, reconstruction
proof, and production-integrity witnesses are sealed by SHA256SUMS.txt.
