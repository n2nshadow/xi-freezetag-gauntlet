# Full Asset Proving Status - 2026-09-05

## Disposition

HOLD. The current full proving package is structurally valid but exceeds the repository's normal Backlot runtime XModel safety limit.

The package was not copied to `zone_out` or Steam.

## Exact Rejected Checkpoint

- `mod.ff`: 31,283,691 bytes; SHA-256 `9B94CDC1FAA28859737DD6F1FA21EC3D2EC13C93E110B50175267CA898716D4C`.
- `xi_ftag.iwd`: 53,881,688 bytes; SHA-256 `BFF883EA4EC34AE28F534718C5F6090BBA57F7AD45322981BA22CB55F098C980`.
- Backlot runtime XModels: 993/1000 hard engine slots.
- Repository safety policy: at most 990 runtime XModel slots.
- Mod-exclusive XModels: 70/70.
- Backlot runtime materials: 1710/2048.

The independent critic report is `.asset_staging/recovery_20260904/gauntlet/family01_world_lods_round2_critic/REPORT.md`, SHA-256 `3994F21A418901A322E677A6FDA35937FDA3E3D6CC574AB567789E4ED7A54262`.

## Proven In This Checkpoint

- All eight accepted native viewhand records and 41 dependency hashes pass.
- Four accepted body candidates are staged: Ghost, Alice, Mara 3-2, and Raines.
- Family 1, RAM-7, and DM56 base/reflex/compact/suppressor states compile and are present.
- Finished-IWD field checks pass for all eight RAM-7 and DM56 weapon definitions.
- Obsolete `_xi` finish viewmodels and the replaced SC2010/MK14 base viewmodels are absent.
- The authored MK14 world model remains only as the temporary DM56 magazine fallback.

## Next Acceptance Round

Build one combined hide-tag viewmodel and one combined hide-tag worldmodel per weapon family, plus a dedicated magazine model. The visible base/reflex/compact/suppressor states must match the frozen round-3 renders without showing multiple attachments at once.

The immediate target is six new XModels total for RAM-7 and DM56 instead of sixteen state XModels plus two legacy fallback models. A future full package must pass the 990-slot Backlot safety gate without overriding it before live testing or promotion.
