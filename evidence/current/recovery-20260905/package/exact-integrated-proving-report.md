# Exact Integrated Proving Checkpoint

## Status

PASS_FOR_SEALED_PROVING_PACKAGE_ONLY. Production and Steam remain HOLD. Live animation, ADS, firing, gameplay, and user acceptance are still required.

## Exact Build

- Profile: full-roster-exact-operators-and-weapons-proving
- Built UTC: 2026-09-05T10:11:43.3810175Z
- Map accounting scope: mp_backlot
- Runtime XModel slots: 987 / 1000
- Runtime XModel name union: 986
- Map-specific duplicate slots: 1 (weapon_saw_mg_setup)
- Strict XI XModel safety limit: 990
- Strict-limit headroom: 3 slots
- Runtime material union: 1716 / 2048
- Fastfile materials: 457 / 760

This is the first exact integrated measurement after both independently reviewed packages were admitted through hash-bound, proving-only gates:

- Families 2/3 RAM-7 and DM56 combined attachment models
- Family 8 suppressed Renetti surface repair

The prior 993-slot checkpoint and the intermediate 984/986 source projections are superseded for subsequent body-review budget decisions by this exact 987-slot runtime measurement. Operator body replacements remain slot-neutral only when they retain an already-loaded canonical playermodel ID.

## Package Fingerprints

- mod.ff: 31,853,072 bytes, SHA-256 8CCDAC3C14E28EE2A6695E4E581A7838F2E4A5FA3C2021FF621945D2264C2619
- xi_ftag.iwd: 53,473,205 bytes, SHA-256 5436B11220FEBDE0D106A6D98F268B1788218C5ADFF48A5815847F2D1F6337B6
- xi_ftag.cfg: 33,100 bytes, SHA-256 E0E777C6D0CD38744D4795B86FF28BD453083D908F7A695B482C81AAF1C82AA4
- proving-receipt.json: 7,186 bytes, SHA-256 F48AE7ABFC25CAFBF0B00323394670A5D50ECEAE2AE069B2E84D89D26052652C
- Build-GhostIcrProving.ps1: 100,557 bytes, SHA-256 3CF85E18C02C7A1CECD8C2B2A55678B1DFC329F33399027F96581C582D69836C

## Promotion Bindings

- Family23 promotion manifest: D778429B96C93ED7B72EFAE69FCBC009A90B91BB5454D5C72CCC88BFD84ED14F
- Family08 promotion manifest: 1AE6DD928BAAC898A60583C10AB66779A9F3B86930C0CC4F0E6983D95BF16128
- Latest viewhands manifest: A12F0C623B7FECE7CF0A6A8A41EB629199B92D3EDCE3820FDBB40F37E15AAEE0
- Latest native viewhands reference: E018D0AC5ECF5F6435D8085491F43B186570F980DD18771274BA175C9CEA8F95

The proving loader verifies exact manifest lengths and SHA-256 values, all bound model/descriptor/weapon/material payloads, reviewed weapon-field deltas, protected fields after package normalization, the final IWD weapon payloads, and both runtime asset limits.

## Included Review State

- All eight accepted authored viewarm sets are loaded from the sealed native reference.
- Mace 5_1 and Mara 3_1 are the only independently reviewed third-person body replacements staged in this exact package.
- Family 1 weapon/attachment candidate remains in its previously validated proving path.
- Families 2, 3, and 8 are independently reviewed and hash-bound.
- Alice, Ghost, Iskra, Mara 3_2, Raines, and Talon body work is not promoted by this checkpoint.

## Outstanding

- Live engine/user test of the exact package
- Animation, ADS, firing, reload, drop, audio, and attachment behavior
- Remaining six third-person operator body decisions
- User acceptance before any production or Steam deployment

No production package or Steam installation was changed.
