# Weapon Runtime Identity Round 3 Builder Report

## Verdict

**Runtime identity candidate: PASS**

**Visual alignment: HOLD (unchanged)**

**Promotion: STOPPED**

The exact candidate patch SHA-256 is
`9230c0e42120c2161ede0bd35792fd7622ca875fa71e62517a8c04e6fca1dc9f` (11016268 bytes, 236 paths).
It was not applied to production.

## Round 2 Blockers Closed

- **Committed-tree portability:** the patch is diffed from committed HEAD
  `30424acca3264c7b9c47a536436518231a9749db`. A real clean sparse clone passed `git apply --check`, reconstructed
  every candidate output exactly, and reproduced all 228 verifier inputs: 191 absent
  inputs were created and 37 tracked-but-stale inputs were replaced with sealed bytes.
- **External trust:** the promoted verifier has no trusted receipt digest or repository
  authority fallback. It requires a detached Ed25519 attestation, separate external
  authority/trust roots, and an out-of-band signer fingerprint. Repository audit roots
  and self-issued receipts signed by another key fail closed.
- **Deployment closure:** `holdWeaponFinish`, the dropped-weapon probe, primary/sidearm
  loadouts, and imported attachment integration probes route family/attachment identity
  through `getRuntimeWeaponFile`; empty results stop before give/switch/spawn calls.
- **Exact runtime readiness:** packaged GSC binds column 4 to the exact state policy,
  so the F01-A1/F02-A0 count-preserving swap fails at runtime as well as in the build gate.
- **Selection integrity:** resolver-local and post-resolver writes in deployment paths
  are rejected. Saved held selections remain retained while deployment resolves to A0.

## Retained Exact Positives

- 37 unique states, 20 READY and 17 HOLD.
- 1,110 ordered XAnim slots, 879 local hash checks, and 180 unique runtime XAnims.
- All three F10-A0 copies are `7ef916a91aebbe7b33cd6526940216bc14d37816d97672011ecac89a2fd5e76c`; `tag_scope_colt` remains visible
  and only `tag_silencer` is hidden.
- Missing root/receipt, tampered payload/receipt, stale candidate receipt, repository
  roots, and untrusted self-issued signatures all reject.

## Adversarial Evidence

All 13 runtime bypass mutations and all 9
trust-boundary mutations were rejected. The valid external attestation passed in the
clean committed-tree reconstruction with exact counts {"hold": 17, "presentLocalHashChecks": 879, "ready": 20, "requiredVerifierSources": 228, "states": 37, "uniqueXAnims": 180, "xanimFieldsPerState": 30, "xanimSlotsChecked": 1110}.

## Production Integrity

Before/after HEAD, status, tracked diff, staged diff, and source-set seals are identical:
`PASS`. No build, package, install, launch, Steam action, production
write, or promotion occurred. The separate visual verdict remains HOLD.
