# Build Source Seal Critic Round 10

## Verdict

**PASS.** This critic independently replayed the complete 32-case transaction matrix under PowerShell 7.6.4 and Windows PowerShell 5.1.26100.9168 from a frozen critic-local copy. It did not accept the builder's result files as verification input.

Both engines reproduced 32/32 passing cases with 77/77 child processes reaped. Each engine held and killed 22 publication workers: 16 precommit observations remained exact all-old through termination and recovery, while 6 at/after-commit observations remained exact all-new. Three selected recovery paths per engine were killed a second time and remained canonical. No case observed mixed, partial, or noncanonical active state.

## Transaction And Failure Behavior

The candidate uses one KTM transaction for every public namespace move: old active tree to parking/backup, complete new tree to active, optional runtime backup to its public path, and pending capsule to a hash-bound durable marker. Static review found no sequential live-publication fallback. Nontransacted deletion is confined to private/post-outcome cleanup.

Both engines independently proved local NTFS TxF availability, CreateTransaction, MoveFileTransactedW, final-handle automatic rollback, and a Win32 API failure diagnostic. Invalid backup topology failed before active mutation. Pending capsule corruption recovered to exact old and then retried to exact new; durable capsule corruption recovered only with the hash-bound marker and exact committed states.

## Source Contract

Both parsers covered all six candidate scripts with zero parse errors. Both complete eight-group source-seal suites passed, including exact helper selection, omission rejection, tamper rejection, source/package drift attacks, reparse rejection, canonical archive identity, and critic-local installer publication/recovery. The selected helper hash was 341435DA6B6CAA95F1EB5D1A8B85D83DFEC84B43E1C418CA8B17F35AF6490DA2 on both engines.

## Cleanup And Scope

All suite roots and process-temp roots were removed, the audit temporary tree was empty, no reserved private-stage/parking/retired/probe residue remained, and no critic child process remained. Target production hashes, timestamps, and the repository status outside this critic directory matched the pre-run snapshot exactly. No production edit, promotion, build, install, Steam operation, or launch was performed.

## Candidate Hashes

| Path | SHA-256 |
|---|---|
| `build.ps1` | `276D399AB2525878D7BEB52F32108B4E460D603F8CB8FAC9C94117AD4A3BF728` |
| `install-steam-ftag-mod.ps1` | `C0EE6EB4E224B74E11C7CC55668600A696D9CE6A86D6C9203964D1F421A2F9FC` |
| `play-with-bots.ps1` | `0663CBAE75CAC69AF4311C1F8E09C3D5A00D4DA3A7FCBD3E1B6E74EF1AECA387` |
| `tools/Build-SourceSeal.ps1` | `091454D944C3CB2BA7389D658CB07057C22F38C4BBFDE8A33B1409BC54AA14A9` |
| `tools/Install-PackageTransaction.ps1` | `341435DA6B6CAA95F1EB5D1A8B85D83DFEC84B43E1C418CA8B17F35AF6490DA2` |
| `tools/Test-BuildSourceSeal.ps1` | `30073E95786AA2382B7C35C8DF2C0C0744EC1A753328838655AF00066BD5F90D` |

## Evidence

- logs/transaction-summary-PS7.json and logs/transaction-summary-PS5.json: independent full matrices.
- logs/PARSE-*.json, logs/SUITE-*.json, logs/SUITE-RUNNER-*.json, and logs/RUNTIME-SEAL-*.json: source and runtime checks.
- VERIFICATION.json: critic-owned case-level verification with 37 checks and 0 failures.
- PRODUCTION-SNAPSHOT-BEFORE.json and PRODUCTION-SNAPSHOT-AFTER.json: untouched-production proof.

## Residual Gap

TxF is deprecated and host/volume dependent. This candidate intentionally refuses installation when local NTFS TxF/KTM preflight cannot prove the required semantics. The audit reproduced abrupt user-process termination around commit, including repeated recovery termination; it did not simulate sudden power loss or a kernel crash.
