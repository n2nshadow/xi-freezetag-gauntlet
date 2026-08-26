# XI FreezeTag Build-Source Seal Critic Round 7b

## 1. Verdict

**HOLD.** The round-6 changes materially repair the earlier source-freezing,
stale-tuple, case, reparse, retained-handle, runtime-inventory, and IWD-evidence
defects. The complete shipped suite passes on both requested engines, and all
requested ordinary failure controls reproduced correctly.

Approval is still blocked by one installer reliability gap with two independent
reproductions: publication is not crash-consistent. A fault after a native move
but before in-memory bookkeeping leaves a mixed tuple, and hard process
termination after the first publication leaves a partial tuple. Both results
are byte-identical across PowerShell 7.6.4 and Windows PowerShell
5.1.26100.9168.

No production file, package output, Steam path, OAT state, network setting, or
Git state was modified. Every write and every synthetic filesystem object was
under `.audit/build_source_seal_critic_round7b`. No full OAT build or installer
top level was invoked.

## 2. Blocking Finding

### R7B-F1 - High: the three-file compensating transaction is not crash-consistent

`Publish-VerifiedPackageStage` performs the native move at
`install-steam-ftag-mod.ps1:568`, then records the name in `$published` at line
569. Rollback only withdraws names already present in that in-memory list at
lines 601-609.

The fresh post-move schedule called the exact production move helper, allowed
the `mod.ff` move to complete, and injected a fault before the caller could add
the name. The catch path did not withdraw the new mod. Restoring old `mod.ff`
then failed with Win32 183 because the new pathname already existed, and the
helper honestly reported incomplete rollback. The canonical destination was:

| Member | Prior SHA-256 | SHA-256 after failure | State |
|---|---|---|---|
| `mod.ff` | `57F3FD0691DD30E2864F6E9C87081C6B31C26AD906E08C607A9A7471F6D0B63E` | `8A28B6279EAF6854BE77083ACF73D22C3C922C93DDEF1FDADCFE0B3E0D31D7BE` | **new** |
| `xi_ftag.iwd` | `089921B7244E6A07C6C571281598CD25C5BA23635A52846685482CE893D65127` | same | old |
| `xi_ftag.cfg` | `25D30F2354639F5F31035F64FA64FA313F41E3B8601536F28E63FBCD94E13023` | same | old |

The old mod bytes remained at `.r-mod.ff` with the exact prior hash. This is a
mixed old/new canonical tuple even though the failure is diagnosed.

The second fresh schedule launched a child in the same engine, loaded the exact
production installer helper definitions, signaled immediately after the first
successful publication, and was forcibly terminated. On both engines the
canonical destination then contained:

| Member | State after termination |
|---|---|
| `mod.ff` | new, SHA-256 `D60EDF17895D0075AFB2BE46AE7CA07628097BB22E9A5445D4F63E9774507A33` |
| `xi_ftag.iwd` | absent |
| `xi_ftag.cfg` | absent |

All exact old bytes remained in the abandoned stage as rollback members:
`mod.ff` `D7B23C9DC2E768B80D501C499148A73759E4A02A60E441FF91B5F9F074FCD80F`,
IWD `3856876EB73C99DBD662C75960EFF6C5DDC3711B656B5FBD9A977438D8D58D66`,
and cfg `670F5373A3AB4F5CBC3EA4D3F94667443AA0ED82625C1BEC5A82049E82487682`.
There is no durable journal or startup recovery path that consumes this state.

There is also a related top-level consequence. The normal installer `finally`
block unconditionally removes its private stage at lines 789-790. If a caught
publication reports incomplete rollback, this cleanup can remove the stranded
`.r-*` recovery bytes. The top level was not executed in this audit, per the
task constraint; this consequence is based on direct static inspection.

## 3. Required Results

| Required reproduction | PS7 | PS5.1 | Independent byte result |
|---|---|---|---|
| Source changed to B and restored during build | PASS | PASS | Frozen `SOURCE_A` was consumed; restored source and sealed output matched A. |
| Old public tuple appears after `BeginBuild` | PASS | PASS | Rejected; old three hashes unchanged; no manifest, seal, or snapshot. |
| Retained output path changed after identity | PASS | PASS | Write blocked by retained handle; published mod hash remained exact. |
| Staged member changed after initial validation | PASS | PASS | Rejected before publication; all three prior destination hashes exact. |
| Caught failure after first publication | PASS | PASS | Prior three-file tuple completely restored and independently rehashed. |
| Deliberate restore failure | PASS | PASS | Incomplete rollback and injected restore error both reported; old cfg retained at `.r-xi_ftag.cfg`. |
| Case-distinct `repo` / `REPO` sibling | PASS | PASS | Rejected before snapshot creation. |
| Junction before build cleanup | PASS | PASS | Rejected before cleanup; victim hash unchanged. |
| Junction introduced during install workflow | PASS | PASS | Stage/destination reparses rejected; external targets remained empty. |
| Destination ancestor rename under retained locks | PASS | PASS | Rename denied; publication completed with the exact all-new tuple. |
| Canonical IWD evidence | PASS | PASS | Physical order, manifest order, names, lengths, and hashes all exact; one lowercase cfg. |
| Fresh post-move/pre-bookkeeping fault | **FAIL** | **FAIL** | Mixed new mod with old IWD/cfg. |
| Fresh hard termination after first publication | **FAIL** | **FAIL** | New mod only; IWD/cfg absent. |

The caught interruption control and post-move fault are deliberately distinct.
The former throws before the second move and restores all prior bytes. The
latter proves that a successful move can exist without the in-memory record
rollback relies upon.

## 4. Exact Repair Bar

HOLD can be lifted only when all of these are true:

1. Persist a durable transaction record before any prior canonical member is
   moved. Bind transaction ID, canonical destination, private stage, exact
   old-or-absent identities, exact new identities, and transaction state.
2. Persist and flush move intent before every backup/publication move. After a
   move returns or throws, reconcile the retained identity at both possible
   locations before recording completion. Do not rely only on `$backedUp` or
   `$published` in memory.
3. Before any new staging, backup, cleanup, or publication, installer startup
   must detect unfinished transactions and idempotently restore the exact prior
   tuple, or complete a provably exact all-new tuple.
4. Never delete the private stage or `.r-*` members unless canonical pathname,
   length, and SHA-256 checks prove a complete commit or complete rollback.
   Preserve or quarantine recovery state when restoration is incomplete.
5. Add PS7 and PS5.1 fault schedules after every successful backup and publish
   move, including hard process termination. After restart recovery, the
   canonical destination must be exactly all-old or exactly all-new, never
   mixed or partial, and all child/temp/recovery state must be accounted for.

The smallest acceptable design is a durable, recoverable journal around the
current retained-handle moves. An atomic whole-directory replacement is also
acceptable if it preserves the install folder's required non-package content
and proves equivalent rollback semantics.

## 5. Passing Coverage

Both production parsers reported zero errors for all four reviewed files. The
complete shipped suite exited 0 with eight PASS groups and eleven attack/control
records per engine. Independent inspection confirmed exact old tuple hashes for
later-stage tampering and caught mid-publication rollback; the deliberately
incomplete rollback retained the exact old cfg and reported both failures.

Selected runtime inventory was complete for the production rules:

| Engine | Selected declarations | File records | Unique paths | Independent result |
|---|---:|---:|---:|---|
| PS7 7.6.4 | 1 runtime directory | 983 | 983 | Every path, length, and SHA-256 rehashed; exact set. |
| PS5.1.26100.9168 | 7 file declarations | 7 | 6 | Every declared record rehashed; engine/utility share one physical path. |

The PS7 inventory digest is
`95F08C50A3ED6313B6EDFAD5CFCC950F0A00F9A0BA6C45A899B058421C240F48`;
the PS5 inventory digest is
`F50AB687BF9C40F04BEC6E9F59C2876DBFE17990950570FE043840F0716F5DFD`.

The independent IWD fixture physically and manifest-ordinally recorded:

| Entry | Length | SHA-256 |
|---|---:|---|
| `Alpha/file.txt` | 5 | `73AB66A033C267E00B7429BB256F6DEB2734EBC4CD4FF5B564A8C9F9B2C8A719` |
| `xi_ftag.cfg` | 13 | `EBFB6060ABC14A3ABDAB90450C509855520F6FA2A736173C13E273803377CAE7` |
| `zeta/data.bin` | 4 | `A9CFB63E62BA10A591E684EBB4409AECF49C8FC9AE40986376C8EBA1D182238B` |

The manifest entries matched independently read archive bytes exactly, and the
embedded lowercase cfg hash matched the standalone cfg hash. Static inspection
also confirmed production uses `[Array]::Sort(..., [StringComparer]::Ordinal)`.

## 6. Commands And Exits

`COMMANDS.json` preserves every full executable/script path and argument. The
material final exits were:

| Command | PS7 exit | PS5.1 exit |
|---|---:|---:|
| Production parser | 0 | 0 |
| Selected runtime inventory | 0 | 0 |
| Complete existing suite | 0 | 0 |
| Independent 11-schedule runner | 0 | 0 |
| Final second-pass verifier | 0 | n/a |

The independent runner's exit 0 means all schedules completed and evidence was
written; it does not convert `approvalPass=false` schedules into target passes.

The first second-pass verifier execution exited 1 because an audit-only boolean
expression incorrectly composed the runtime-declaration check. Its actual 983
and seven-file rehashes were exact. The audit helper was corrected without
touching production, and the identical command then exited 0 with **92 checks,
zero failures**. This preliminary exit and disposition are retained in
`COMMANDS.json`.

## 7. Production Hashes

Initial hashes were captured before reading the implementations. Final hashes
and timestamps match exactly:

| Reviewed file | Bytes | SHA-256 |
|---|---:|---|
| `tools/Build-SourceSeal.ps1` | 67,519 | `091454D944C3CB2BA7389D658CB07057C22F38C4BBFDE8A33B1409BC54AA14A9` |
| `tools/Test-BuildSourceSeal.ps1` | 68,017 | `C0B90A91648415903C443E091522C9E6698AC19CFAFB95F9E645E82976B2BBA2` |
| `build.ps1` | 50,859 | `74E6EDBBBABF7ACF41C4801E3208E5D0CCFC44A0F8528FB082EB0EFDD9D7800F` |
| `install-steam-ftag-mod.ps1` | 33,061 | `96AB1FD459BC41F417B7AD8C54FD9152BF2948EB25369689928C504F1FBA8193` |

## 8. Cleanup And Limitations

Final audit state recorded zero children under the audit temp root, zero live
tracked child processes (final PIDs 23196 and 1748), zero residual reparse
points, zero private installer stages, and zero build-session roots. Both hard
crash child processes exited `-1` by deliberate termination and were confirmed
absent before cleanup.

No full OAT build was run, so actual OAT compatibility with the frozen mirror
remains unexecuted. The top-level Steam installer was not invoked; exact helper
definitions were exercised against audit-local NTFS paths and top-level control
flow was inspected statically. The adjacent manifest checksum remains a drift
detector rather than a signature. Kernel/admin compromise, hardware failure,
and post-install mutation remain outside this lane.

## 9. Evidence

Primary machine-readable evidence is `RESULT.json`, `RELIABILITY-PS7.json`,
`RELIABILITY-PS5.json`, `EXISTING-SUITE-PS7.json`,
`EXISTING-SUITE-PS5.json`, `RUNTIME-INVENTORY-PS7.json`,
`RUNTIME-INVENTORY-PS5.json`, `PARSE-PS7.json`, `PARSE-PS5.json`,
`VERIFICATION.json`, `FINAL-STATE.json`, and `COMMANDS.json`. Fresh helper
scripts are retained beside them. `EVIDENCE-HASHES.json` inventories all
pre-report evidence except itself and this report.

The single largest remaining reliability gap is the absence of a durable,
restartable installer transaction protocol.
