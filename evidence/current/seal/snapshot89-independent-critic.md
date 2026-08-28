# Snapshot 89 Independent Tuple Critic

## Verdict

**PASS, qualified, for a reversible local Steam test. HOLD for release and Ghost visual promotion.**

The critic independently rehashed the source manifest and all three runtime files. Their sizes and SHA-256 values match Snapshot 89 exactly. The sealed-output verifier passed the manifest checksum, frozen input digest, package records, embedded config, and every canonical IWD entry.

## Package Findings

- The IWD has exactly 519 ordinally ordered entries: 340 images, 80 sounds, 98 weapon files, and one config.
- All runtime images resolve through 291 final source-backed materials.
- No map, usermap, BSP, or map-world payload is present in either package.
- OpenAssetTools inspection reports zero warnings and zero errors.
- Runtime budgets remain 299/760 concrete materials and 988/1000 XModels on `mp_vacant`; all 18 shipped maps are at or below 990.
- The package contains 61 concrete XModels plus 11 verified stock references.
- All 72 announcer clips and compiled menu, weapon, scoreboard, welcome/admin, and streak checks pass.
- Retired XI Signature and Arctic duplicate assets are absent.

The mutable project no longer equals the frozen build source because four scripts changed after sealing. Default source-fresh verification therefore rejects it as designed. The explicit sealed-output path verifies the immutable package while preserving private staging, backup, rollback, and destination hash checks.

## Ghost Hold

Only Ghost differs from the seven strict production viewhands. The diagnostic has eight positively weighted joints, no finger weighting, persistent bind-registration failures, and no accepted live first-person receipt. It is suitable only for collecting reversible comparison evidence and cannot authorize permanent promotion.

## Biggest Remaining Gap

A truly articulated Ghost first-person rig that wins a live in-engine comparison without collapsed hands, displaced weapon contact, or missing finger motion.
