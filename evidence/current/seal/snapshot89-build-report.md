# Snapshot 89 Build Report

## Verdict

**PASS for a reversible local user test. HOLD for release or permanent visual promotion.**

OpenAssetTools linked the sealed source snapshot with **0 warnings and 0 errors**. The build retained one exact three-file runtime tuple and wrote a hash-bound 5,985-file source manifest.

## Runtime Tuple

| File | Bytes | SHA-256 |
|---|---:|---|
| `mod.ff` | 24,587,852 | `8B0F3FEBFF5B102EF04D4F42FBF5942B31D7230EC3E35CF45FBB64296B1A0B20` |
| `xi_ftag.iwd` | 29,853,466 | `0369317BD4388B2B1B2DB0C65B782CDAB78ED74B93210C3BDAC1E1155240F686` |
| `xi_ftag.cfg` | 32,679 | `FAC54B773A165A6440EF4A96647E98864691F896BC5F13876E0E270918183410` |

The IWD contains exactly 519 entries, including 340 reachable runtime images and all 72 XI announcer clips. The shipped 18-map rotation stays at or below the 990-XModel release threshold; `mp_vacant` measures 988/1000.

## Reversible Steam Test

At 2026-08-28 16:44 EDT, the exact tuple above was clean-installed into the main `xi_ftag` Steam mod directory. Every destination hash matched the sealed manifest. The prior runtime was moved intact to `_backup_xi_ftag_20260828_164451_dbe64e08` before publication. The active test uses stock `mp_shipment`; concurrent custom-map work is not part of the tuple.

## Honest Hold

Ghost Round 6 viewhands are an exact-hash, isolated live diagnostic. They use only eight weighted joints and have no finger articulation. The diagnostic may be installed for comparison, but it is forbidden from permanent promotion and does not count as the arms being fixed.

Concurrent custom-map work belongs to another agent and was not packaged, modified, or published by this build.
