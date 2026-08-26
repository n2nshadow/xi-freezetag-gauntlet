# XI FreezeTag Lethal Sentry Material Critic Round 5

## Verdict

**PASS** for the offline material/UV/visual gate.

The authoritative challenger preserves the accepted geometry winner exactly outside the permitted material/image/texture/sampler JSON bindings. It presents one source-faithful stock SAW receiver on one coherent grounded legacy tripod/yoke mount. The material set is minimal by required semantic role, every visible surface is readable and coherent, and the randomized blind A/B found no source-fidelity loss.

**Single biggest remaining gap:** OAT/CoD4 material conversion and real in-game lighting were not exercised. This report makes no package, Steam, OAT, or in-game runtime claim.

## Authoritative Inputs

| Input | Size | SHA-256 | Result |
|---|---:|---|---|
| Round 4 material challenger | 165,728 | `9EDE3C17FF16D750700781F8B62DC2EE06F08A2E36DF203A46CAEE4C7B914D51` | Required hash exact |
| Round 2 accepted geometry winner | 165,964 | `D6F0827EB196E27966AE959FCAC026C20F98E312E7FB9C80CD9045824AEB9EE1` | Required hash exact |
| Legacy tripod/material source | 304,020 | `58C3532307E16A3F60E61A6DEC6A2FEBA3E267F625917AA1399EAEE4A21AEBAD` | Independently hashed |
| Stock SAW/material source | 106,148 | `08D434AACEE4E53065E60F5447904594B16946684BACE54DE858370099655283` | Independently hashed |
| Ground Frost Sentry control | 515,016 | `580A7381B916FAFFBBBC812F785A42F1EBE61100B15ED4CE490B983356C9AD9E` | Independently hashed |
| Airborne Defroster Drone control | 173,136 | `2737870FF7A67C75D33DDD68D2158D7721E852869F5DA755207714A8AC5E15D5` | Independently hashed |

## Exact Geometry Proof

The challenger and accepted winner have the same BIN chunk:

- length: identical
- SHA-256: `3BC2E194744F6D0023DED35839E503FD56441EE5FE64062A53ED80BF7DBC010B`
- byte comparison: identical

The independent parser then proved:

- all 25 accessor definitions are exactly equal;
- all 25 logical accessor byte streams are exactly equal, including strided/sparse-safe extraction logic;
- all 25 buffer-view definitions and full buffer-view byte ranges are exactly equal;
- all index accessor bytes are equal;
- all node, scene, skin, tag/joint, transform, mesh-attribute, and bound definitions are equal;
- all recomputed primitive position bounds match their declared bounds;
- the full GLB JSON becomes byte-canonically equal after removing only `materials`, `images`, `textures`, `samplers`, and each primitive's `material` index;
- no other JSON difference exists.

The candidate contains 17 nodes, 12 tag/joint nodes, one skin, four meshes, four primitives, 2,843 vertices, and 1,749 triangles. The named render objects occur exactly once each: `legacy_tripod`, `mount_hardware`, `mount_yoke`, and `saw_receiver`. That is one SAW receiver and one three-part grounded mount. Because the entire accepted geometry payload and topology are unchanged, the prior three-weapon pile cannot have returned through this material-only challenger.

Machine-readable proof: `STRUCTURAL_AUDIT.json` and `MACHINE_CHECKS.json`.

## Material and Reference Proof

The candidate declares exactly three materials in this order:

1. `mc/mtl_sentry_bo`
2. `mc/mtl_weapon_saw_misc_nocamo`
3. `mc/mtl_weapon_saw`

Bindings are:

- legacy tripod -> `mc/mtl_sentry_bo`;
- mount hardware and yoke -> `mc/mtl_weapon_saw_misc_nocamo`;
- SAW receiver -> `mc/mtl_weapon_saw`.

Each material is referenced. Each of the four textures and four images is referenced. No sampler is declared because every texture uses the glTF default sampler. There are zero audit/debug material names and zero unreferenced materials, textures, images, or samplers.

The three independently expanded material closures are exact to their named source definitions, including PBR factors, `doubleSided`, base-color texture, normal texture, image URI, and default sampler semantics. The two stock SAW materials share the same source texture pair but preserve the stock source's distinct receiver and misc/no-camo names. Those semantic roles are both used, so the three-material set is the smallest set that preserves the selected source identities without inventing a synthetic mount material.

Candidate image URIs are exactly the union of source-declared URIs:

- `../images/weapon_sentry_gun_col.dds`
- `../images/weapon_sentry_gun_nml.dds`
- `../images/weapon_saw_col.dds`
- `../images/$identitynormalmap.dds`

All resolve from the candidate GLB, all are external, and none uses `data:` or `bufferView` embedding. Every payload has one or more same-hash copies outside the builder lane. DDS evidence:

| Image | Size | SHA-256 |
|---|---:|---|
| `weapon_sentry_gun_col.dds` | 1,048,704 | `5E77D9948A8C4F00C5A7796F5DD296E3C5EADD30E7E814FE01814759A7E222CC` |
| `weapon_sentry_gun_nml.dds` | 349,680 | `395561C17BFC5CE54DF0132DD068CBAA5E0FA2519236457E0266CC0021BB28D3` |
| `weapon_saw_col.dds` | 349,672 | `78C46428E014B45D1AAA3A8082A2D308654E109CF1B401AA59EC66701C8FAFEA` |
| `$identitynormalmap.dds` | 132 | `CE9B0ED111BDAA932B5FEB145ABF9D7252F7A35C10C1E2647B6D924D2BF34A96` |

All material alpha modes default to `OPAQUE`; all are double-sided. Both base-color DDS files have alpha exactly 1.0. Normal-map alpha does not feed surface opacity.

Machine-readable proof: `MATERIAL_AUDIT.json` and `RENDER_MANIFEST.json`.

## Source UV Proof

Full source accessor equality is not the correct comparison because the accepted winner stores extracted and reindexed source subsets. The independent audit therefore compares IEEE-754 UV bytes at indexed triangle-corner level:

- Legacy tripod: candidate has 564 UV triangles; source `surf1` has 564; every candidate UV triangle is bit-exact in the source multiset.
- SAW receiver: candidate has 757 UV triangles; source `surf0` has 868; every candidate UV triangle is bit-exact in the source multiset.

The source material closures on those primitives are also exact. Synthetic hardware/yoke UVs are finite, contain no UV-degenerate triangles, and use the exact existing stock misc/no-camo closure. No new material, image, texture, sampler, or asset was created for them.

## Rendered Gate

Blender 5.2.0 LTS imported all four DDS payloads as actual image data: sentry color `1024x1024`, sentry normal `512x512`, SAW color `1024x512`, and identity normal `1x1`. Blender reported compressed-GPU-format warnings and used its uncompressed fallback; `has_data` is true for every image and each material node points at the verified DDS path.

Final review renders:

- `renders/candidate_front_muzzle.png`
- `renders/candidate_side.png`
- `renders/candidate_rear.png`
- `renders/candidate_top_oblique.png`
- `renders/candidate_gameplay_height.png`

The five-view inspection found no source-inconsistent UV stretching, black/missing-texture patches, unintended transparency or alpha cutout, missing/reversed/backface surfaces, z-fighting signature, detached parts, floating mount contact, unreadable weapon darkness under calibrated neutral inspection light, or return of the old three-weapon pile. The SAW, yoke, swivel, and tripod remain distinct and attached. The legacy source and stock SAW source appearances are recorded in `renders/source_legacy_side.png` and `renders/source_stock_saw_side.png`.

Detailed human ballot: `VISUAL_INSPECTION.md`.

## Blind A/B

The comparison control used the exact accepted winner geometry, then independently imported material datablocks from the authoritative legacy and stock SAW GLBs and relinked their source-declared image basenames to hash-verified DDS payloads. A cryptographic random bit concealed candidate/control panel order. The script did not print the mapping.

Before reveal, the critic voted TIE in front, side, and top-oblique views. After the ballot was written, the hidden mapping revealed:

- A / left: authoritative candidate;
- B / right: independent source-material control.

The challenger therefore did not lose source fidelity. Evidence is in `blind/BALLOT_PRE_REVEAL.md`, `blind/HIDDEN_MAPPING.json`, and `blind/REVEAL.md`.

## Role Distinction

Production `_assetprofile.gsc` independently maps the ground Frost Sentry to `worldmodel_t8_sentry_deployed` and the airborne Defroster Drone to `worldmodel_t8_defroster_drone`. At one common orthographic scale:

- lethal candidate: `41.92 x 38.96 x 38.20`, long SAW plus tall three-leg mount;
- ground Frost Sentry: `23.34 x 17.00 x 20.76`, compact pedestal/pistol turret;
- Defroster Drone: `49.33 x 56.17 x 14.85`, broad shallow aircraft.

`renders/identity_lethal_frost_drone_same_scale.png` confirms three clearly different silhouettes and roles.

## Hard-Bar Decision

| Requirement | Result |
|---|---|
| Exact accepted geometry and accessor/index bytes | PASS |
| Skeleton/tags/transforms/bounds unchanged | PASS |
| One SAW on one coherent grounded mount | PASS |
| Minimal referenced-only source material set | PASS |
| No audit/debug/invented/embedded/missing references | PASS |
| Legacy tripod UV/material source fidelity | PASS |
| Stock SAW receiver UV/material source fidelity | PASS |
| Plausible stock material on synthetic mount parts | PASS |
| Five-view actual-texture visual inspection | PASS |
| Blind source-control comparison | PASS, three-view tie |
| Distinct from Frost Sentry and Defroster Drone | PASS |
| OAT/in-game runtime proof | NOT CLAIMED; outside this gate |

**Final: PASS.**
