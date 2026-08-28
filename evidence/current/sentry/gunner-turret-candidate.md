# Gunner Heli Turret Candidate

Status: **source geometry and isolated OpenAssetTools compile pass; live CoD4 validation pending**.

Snapshot 89 exposed one repeatable runtime warning: `Could not load xmodel "weapon_saw_mg_setup"`. The active script treated that model as a stock reference, but the installed CoD4 runtime does not provide it.

The candidate restores the recovered mounted SAW under the private name `worldmodel_xi_gunner_turret`. It retains three source LODs, the original rigid tag hierarchy, `mc/mtl_weapon_saw`, and the stock `weapon_clip_empty` physics preset. It changes only the Gunner Heli turret selector; the lethal and defrosting ground sentries remain separate models.

## Verified Inputs

- LOD0 SHA-256: `8605C95C6B1805F33533FC8202E612BC77629B0E720B9AF1A68467A8DCCA7BCE`
- LOD1 SHA-256: `86645713B97AEE3EF3C46A4EF257D82936240D7AB1FF239D2F28BCB85F59494E`
- LOD2 SHA-256: `8DB3A78ED6A9938E0C10872BDEBF0E5A01450201610B89712910031D257639ED`
- Render SHA-256: `63ECE0994EE804EBBEB339A3E58E7020BD8839C10E17AD9659E7FD065844824C`

## Isolated Compile

- OpenAssetTools: `0` warnings, `0` errors
- Output bytes: `52,288`
- Output SHA-256: `A0F237D151A9D8D2C5437B479598E81E5428852562363DBF39AC04FDF3F534F5`
- Compiled XModel matches: `1`
- Loaded render chain: `mc/mtl_weapon_saw`, `weapon_saw_col`, and the stock SAW specular image

The extra concrete XModel projects the tightest shipped map, `mp_vacant`, from `988` to `989` runtime XModels, below the `990` release safety ceiling. No map, BSP, or usermap content is part of this candidate.
