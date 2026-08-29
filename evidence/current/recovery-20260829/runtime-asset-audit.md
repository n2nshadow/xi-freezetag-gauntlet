# Runtime asset audit

Date: 2026-08-29

Verdict: **CURRENT SOURCE PASS / OLD PACKAGE STALE**

## Weapon pool

- The current zone links 11 weapon entries against the engine's 128-weapon ceiling.
- Seven are approved XI-only utility names: the AH-94 turret, betty, EMP, Semtex, sentry marker, streak radio, and streak tablet.
- Retained stock guns and utility presentation models are reference records. They do not embed duplicate XModels and removing those references would not create concrete model headroom.
- The stock-safe source guard rejects `xi_stock_*` aliases and duplicated common weapons.

## Runtime images

- The current package manifest resolves 340 runtime IWD images.
- Eight byte-identical weapon-image slots are already removed by the deduplication map.
- Runtime-reference validation passes the recovered MW2 betty models and rejects the retired T8 claymore stand-in.
- Reachability against the last sealed `mod.ff` passes: 340 images are reachable from 291 final source-backed materials, with no source-only images leaking into the runtime set.

## Stale package warning

Snapshot 89 remains the last reversible package, but it predates the current source and manifest. Its IWD now fails the current deterministic path-order check. That is expected evidence of staleness, not authorization to rewrite the old artifact. A new package must be built only after the active Hades, weapon-alignment, and viewhands gates are resolved.

## Decision

No additional stock asset was deleted for nominal headroom. The safe policy is to keep stock references, retain the shared optic families, and remove only concrete duplicate or unreachable XI payloads after the final fastfile proves they are unused.
