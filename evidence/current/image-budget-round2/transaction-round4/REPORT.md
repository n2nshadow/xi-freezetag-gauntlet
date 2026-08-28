# Visual Asset Budget Promotion Critic Round 4

Audit completed: 2026-08-28T05:42:28.4141426Z

## Verdict

**PASS. The reviewed helper revision is safe for the exact sealed 40-operation transactional source promotion.**

The Round 3 blockers are closed in the tested revision. Rollback is rebound to the exact sealed ledger and approval authority, `TransactionRoot` must be a canonical direct transaction directory, mutation payloads are staged before an immediate destination check, and atomically displaced files are verified. Deterministic edits injected after the final check and before mutation were restored or preserved without unrelated partial promotion on PowerShell 7 and Windows PowerShell 5.1.

`APPROVAL.sha256` is issued for the final contract-only `VERDICT.json`.

## Authoritative Bindings

| Input | SHA-256 |
|---|---|
| `tools/Invoke-VisualBudgetRound2Promotion.ps1` | `9E7D23235559F6091DA73F91AD121B5D7F7BCE9D2B98423660712E8AEB9CBBE8` |
| `.audit/visual_asset_budget_critic_round2_fresh/evidence/source-promotion-overwrite-risk.json` | `127AAAE5A38278AD97F750FC73A7838628C73139212840F1F8FB535AB933047B` |
| `.audit/visual_asset_budget_builder_round2/generated/evidence/FINAL-SEAL.json` | `C308F9E601B216EF70156DDB4FED7AD9DA4E7BD5B6B04E2DF532F7C470B62CC5` |

The source ledger status is `PASS` and its hash-gated transaction set contains exactly 40 unique paths: 23 `replace`, 10 `replace-or-identical`, and 7 `delete`. All 40 real current-source hashes and all 33 non-delete candidate hashes matched. The ledger's declared builder-seal hash matched the real builder seal, and all 22 builder critical files replayed exactly.

The complete builder recursive seal replayed 2,955/2,955 files and 732,147,067 bytes. The prior fresh-candidate critic seal replayed 2,093/2,093 files and 369,441,067 bytes. The helper, ledger, builder seal, prior verdict/seal, Round 3 report/verdict, and every operation input remained unchanged after testing.

## Runtime Matrix

| Test | PowerShell 7.6.4 | Windows PowerShell 5.1.26100.9168 |
|---|---:|---:|
| Real-project authoritative `Validate` | PASS, 40 | PASS, 40 |
| Disposable full `Validate` / `Apply` / `Rollback` | PASS | PASS |
| After-state match after Apply | 40/40 | 40/40 |
| Before-state match after Rollback | 40/40 | 40/40 |
| Apply replacement boundary injection | PASS | PASS |
| Apply deletion boundary injection | PASS | PASS |
| Rollback replacement boundary injection and retry | PASS | PASS |
| Caught late-candidate failure and automatic recovery | PASS | PASS |
| Hard termination with 39 applied and 1 original path | PASS | PASS |
| Post-displacement hard kill during Apply | PASS | PASS |
| Post-displacement hard kill during Rollback | PASS | PASS |
| Fabricated and altered receipt matrix | PASS | PASS |
| Post-apply replacement drift refusal | PASS | PASS |
| Recreated deleted destination refusal | PASS | PASS |

All 29 scenarios passed. Concurrent receipt monitoring recorded zero malformed JSON observations and zero read conflicts.

## Boundary Reproduction

The race tests used PowerShell script breakpoints against an exact-hash fixture copy of the real helper. No helper byte was changed.

### Apply replacement

At helper line 512, immediately after the line 508 destination hash and before `File.Replace`, the test replaced operation 5's destination with an unknown edit. `File.Replace` atomically captured that edit, line 513 found the displaced hash mismatch, and line 516 restored it. Apply failed, all other 39 operations returned to their exact before-state, the edit remained at its source path, and the atomic receipt became `ROLLED_BACK_WITH_PRESERVED_BOUNDARY_EDIT`.

The candidate temporarily placed at the destination was preserved in `apply-recovery-discard` with the exact candidate hash.

### Apply deletion

At helper line 477, after the immediate line 473 hash and before `File.Move`, the test changed the first delete destination. The moved file's line 478 hash exposed the boundary edit. The helper restored it to its source path, rolled back the ten preceding replacements, left every other operation at its exact before-state, and recorded the preserved boundary path.

### Rollback replacement

At helper line 171, after the line 162 immediate applied-state hash and before rollback `File.Replace`, the test changed the first destination. Line 172 detected the displaced mismatch and line 174 restored the edit. Rollback refused without advancing the `APPLIED` receipt or changing any other operation. After the fixture put the approved candidate back at that one path, a normal retry restored all 40 exact before-states and atomically recorded `ROLLED_BACK`.

These tests directly reproduce the prior last-check-to-mutation injections. The old behavior silently consumed the edit and exited successfully; this revision preserves the edit, reports failure, and leaves no unrelated Apply promotion behind.

## Hard-Termination Recovery

A deterministic hard stop occurred before staging the final replacement, after 39 operations had reached their after-state. On each host, `transaction.json` remained parseable with status `PREPARED`; explicit Rollback recognized the mixed state, restored 40/40 exact before hashes, and atomically recorded `ROLLED_BACK`.

Two stricter tests combined a boundary edit with a hard stop on the line immediately after `File.Replace` and before displaced-file verification:

- Apply stopped between lines 512 and 513. The candidate was at the source path, the receipt was parseable `PREPARED`, and the injected edit was byte-exact in `replaced/`. Explicit Rollback restored all 40 before-states while retaining that edit in quarantine.
- Rollback stopped between lines 171 and 172. The original was at the source path, the receipt remained parseable `APPLIED`, and the injected edit was byte-exact in `rollback-replaced/`. Retried Rollback completed 40/40 and retained the edit in quarantine.

This confirms crash recovery does not lose a displaced concurrent edit even in the narrowest tested interruption window.

## Receipt Authority

Each runtime first produced a valid `APPLIED` schema-3 receipt bound to the exact helper, source ledger, builder seal, approval verdict, approval hash seal, and approval evidence seal. The receipt contained exactly the approved 40 unique operations with matching operation types, before hashes, after hashes, and canonical rollback paths.

Rollback then rejected, before any source mutation:

1. A fabricated direct-child receipt with one unrelated target.
2. An altered operation type.
3. An altered path targeting unrelated dirty work.
4. An altered before hash.
5. An altered rollback path.
6. An invalid terminal status.
7. An invalid schema version.
8. A valid receipt copied under a non-direct `TransactionRoot`.

The unrelated dirty file remained exact in every case. Restoring the untouched valid receipt allowed an exact clean rollback.

## Approval And Input Gates

The helper also rejected stale current source, stale candidate payload, missing approval files, a stale helper hash in the verdict, a verdict modified after `APPROVAL.sha256`, altered sealed evidence, and an evidence seal with fewer than five entries. Each refusal occurred without creating a transaction or changing an operation file.

## Bar Assessment

| Requirement | Result |
|---|---|
| Exact 40-operation ledger binding | PASS |
| Canonical direct transaction root and matching receipt identity | PASS |
| Immediate pre-mutation destination checks | PASS |
| Atomically displaced-file verification and caught-failure restoration | PASS |
| Boundary edit preservation on uncatchable post-displacement stop | PASS |
| Atomic, parseable `PREPARED` / `APPLIED` / rollback receipts | PASS |
| Exact clean rollback and mixed-state crash recovery | PASS |
| PowerShell 7 and Windows PowerShell 5.1 behavior | PASS |
| No writes outside Round 4 audit fixtures/evidence | PASS |

## Largest Remaining Gap

The largest remaining gap is operator interpretation after an uncatchable stop in the tiny post-replacement, pre-verification interval. The helper cannot know whether the atomically displaced unknown bytes should supersede the sealed source state. Explicit Rollback correctly restores the sealed before-state and preserves the unknown edit byte-for-byte in `replaced/` or `rollback-replaced/`, but an operator must inspect that quarantine before deleting the transaction directory. This is not a data-loss or partial-promotion finding, and it does not block the exact approved transaction.

## Scope Integrity

The real helper ran only in `Validate` mode against the real project. Every Apply, Rollback, failure, edit injection, receipt fabrication, and process termination occurred below `.audit/visual_asset_budget_promotion_critic_round4/s`. Test logs and evidence were written only inside the Round 4 audit directory. Outside-audit Git status was identical before and after. Production source, Steam, dashboard, and OpenAssetTools outputs were not mutated.

## Evidence Map

- `evidence/test-summary.json`: final 29-scenario matrix and decision inputs.
- `evidence/authoritative-input-replay.json`: exact ledger, source, candidate, and builder critical-file replay.
- `evidence/recursive-seal-replay.json`: builder and prior fresh-critic recursive seal replay.
- `evidence/static-helper-review.json`: source-level mutation, receipt, and trust-boundary assessment.
- `evidence/authoritative-validates.json`: real-project Validate results on both hosts.
- `evidence/scenario-01.json` through `evidence/scenario-29.json`: full per-scenario records.
- `evidence/write-boundary-and-input-stability.json`: input and write-containment checks.
- `logs/`: 73 command records with real helper output.
- `run_round4_adversarial_tests.py`: reproducible harness confined to this audit directory.
