# XI FreezeTag Package-Seal GAUNTLET ROUND 8

## Verdict

**PASS for the audit-local candidate lane.** The final evidence verifier completed 61 independent checks with zero failures on PowerShell 7.6.4 and Windows PowerShell 5.1.26100.9168. The four authoritative production hashes remain unchanged.

This verdict does not promote or modify production. All candidate code, harnesses, logs, and evidence are contained in `xi_ftag/.audit/build_source_seal_builder_round8`.

## Round 7b HOLD Closure

The candidate preserves the public `-CleanInstall` mode. Default publication continues to replace only the three package members and preserve unrelated destination content. CleanInstall journals the whole-directory transition, including exact old-tree recovery, retained-backup behavior, and `-NoBackup` cleanup behavior.

The audit-local installer now:

- Acquires the workflow mutex before startup recovery, package verification, staging, or publication.
- Persists a hash-bound global intent and a sealed per-operation record before every backup or publication move.
- Reconciles caught post-move/pre-bookkeeping faults from observed source/destination identities and restores exact prior bytes.
- Recovers abandoned default transactions to the exact old three-file tuple before a retry can publish the exact new tuple.
- Recovers abandoned CleanInstall transactions to the exact old directory tree before a retry can publish the exact new tree.
- Makes recovery itself idempotent when a second process termination occurs during recovery.
- Retains exact path case checks, reparse-point rejection, and case-insensitive collision rejection.

## Transaction Invariant

No install consumer may proceed while a hash-bound transaction is active. Startup obtains the transaction mutex and completes reconciliation before package verification, staging, installation acceptance, or launch can continue.

Before a durable commit exists, restart establishes the exact old tuple or old tree, including prior absence where applicable. After a valid durable commit bound to the intent and new identities exists, restart establishes the exact new tuple or new tree. A transaction stage is not retired until the selected state has been identity-verified.

## Helper Binding

`tools/Install-PackageTransaction.ps1` is bound as both source and selected runtime input:

- Parsed by both engines as one of five exact delivery scripts.
- Included in the source manifest as `xi_ftag/tools/Install-PackageTransaction.ps1`.
- Declared exactly once as selected runtime `installer-transaction-runtime`.
- Rehashed from the selected runtime path by the independent verifier.
- Covered by explicit omission and tamper rejection tests on both engines.

The PS7 runtime seal contains 984 file records across two declarations. The PS5 runtime seal contains eight file records across eight declarations. Both include the exact helper hash.

## Results

| Check | PowerShell 7.6.4 | Windows PowerShell 5.1 |
|---|---:|---:|
| Exact parser files / errors | 5 / 0 | 5 / 0 |
| Prior regression groups | 8 PASS | 8 PASS |
| Attack cases | 12 PASS | 12 PASS |
| Critic schedules | 11 PASS | 11 PASS |
| Default backup/publication boundaries | 6 PASS | 6 PASS |
| CleanInstall directory boundaries | 2 PASS | 2 PASS |
| Second interruptions during recovery | 2 PASS | 2 PASS |
| Controlled killed children | 10 reaped | 10 reaped |
| Transaction residuals | 0 | 0 |

Default-mode hard kills covered backup and publication at `mod.ff`, `xi_ftag.iwd`, and `xi_ftag.cfg`. Every restart first recovered the exact old tuple, retry produced the exact new tuple, and unrelated destination files remained byte-identical.

CleanInstall hard kills covered the whole-directory backup and publication boundaries. Every restart first recovered the exact old tree, including unrelated files, nested content, and empty directories. Retry produced the exact clean new tree, with retained-backup and no-backup semantics checked explicitly.

Second interruption tests killed recovery during default publication rollback and CleanInstall publication rollback. A later restart completed the same recovery idempotently before the successful retry.

## Candidate Hashes

| Candidate file | SHA-256 |
|---|---|
| `tools/Build-SourceSeal.ps1` | `091454D944C3CB2BA7389D658CB07057C22F38C4BBFDE8A33B1409BC54AA14A9` |
| `tools/Test-BuildSourceSeal.ps1` | `B04C4FC8A8ABDB3BCE62A477020FEC05C85492352D9927ECE836677C1A311CCF` |
| `tools/Install-PackageTransaction.ps1` | `BC26EED5652E9CDF3DACD2087E780240F18B7C9593ADD35B123771DAA18583E0` |
| `build.ps1` | `CCB979B39B4D1D1A22DE952A110424D5C52A31EDF9BA1A329485778F5FF0D09C` |
| `install-steam-ftag-mod.ps1` | `722933832CB2671BEAAA94EA8E6F82567258D98BED51B0A3D446F69305454D57` |
| `play-with-bots.ps1` | `0663CBAE75CAC69AF4311C1F8E09C3D5A00D4DA3A7FCBD3E1B6E74EF1AECA387` |

Machine-readable identities are in `CANDIDATE-HASHES.json`.

## Production Hashes

The round7b HOLD evidence was treated as authoritative:

| Production file | Expected and observed SHA-256 |
|---|---|
| `tools/Build-SourceSeal.ps1` | `091454D944C3CB2BA7389D658CB07057C22F38C4BBFDE8A33B1409BC54AA14A9` |
| `tools/Test-BuildSourceSeal.ps1` | `C0B90A91648415903C443E091522C9E6698AC19CFAFB95F9E645E82976B2BBA2` |
| `build.ps1` | `74E6EDBBBABF7ACF41C4801E3208E5D0CCFC44A0F8528FB082EB0EFDD9D7800F` |
| `install-steam-ftag-mod.ps1` | `96AB1FD459BC41F417B7AD8C54FD9152BF2948EB25369689928C504F1FBA8193` |

Machine-readable observations are in `PRODUCTION-HASHES-FINAL.json`.

## Evidence

- `PARSE-PS7.json`, `PARSE-PS5.json`
- `SUITE-PS7.json`, `SUITE-PS5.json`
- `SUITE-RUNNER-PS7.json`, `SUITE-RUNNER-PS5.json`
- `RELIABILITY-PS7.json`, `RELIABILITY-PS5.json`
- `TRANSACTION-MATRIX-PS7.json`, `TRANSACTION-MATRIX-PS5.json`
- `RUNTIME-SEAL-PS7.json`, `RUNTIME-SEAL-PS5.json`, and their SHA-256 sidecars
- `VERIFICATION.json`, `RESULT.json`

The final cleanup check found zero children under the audit temp root, zero transaction residual directories, zero reparse residuals, and zero live tracked child processes.

## Remaining Gap

The audit intentionally did not run the real OAT build, the top-level Steam installer, game verification, or launch. Process termination at each modeled move boundary validates restart logic but cannot reproduce every hardware, controller-cache, or filesystem power-loss behavior. The seals detect byte drift; they are integrity bindings, not signatures against a privileged attacker.
