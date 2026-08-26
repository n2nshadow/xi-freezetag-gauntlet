# XI FreezeTag Lethal Sentry OAT/Promotion Builder Round 6

## Verdict

**PASS** for the requested isolated OAT and promotion-recipe gate.

The exact Round-4 material challenger links under the production asset name `worldmodel_xi_sentry_old_clean` in three isolated OAT v0.32.0 contexts. XModel, GLB, material, and image unlink evidence is complete; the promotion-minimal context resolves the otherwise unstaged SAW misc material from `common_mp`; and all 157 deterministic checks pass.

This audit did **not** promote production and makes no in-game rendering, lighting, collision, animation, muzzle-effect, or runtime-pool claim.

## Decision Boundary

The exact minimal recipe is not a one-file copy. The authoritative GLB contains four external DDS URIs, and none of those literal DDS targets currently exists beside the production model. The sealed recipe therefore:

1. atomically replaces the lethal GLB;
2. creates the four exact DDS files named by its unchanged URI table;
3. leaves the XModel JSON, materials, IWIs, asset profile, zone source, Frost Sentry, and Defroster Drone unchanged.

Only the lethal model identity is replaced. The four creates are source dependencies of that GLB, not additional model-identity changes. `promotion-map.json` contains exact preconditions, source and target hashes, atomic-write requirements, protected invariants, and reverse-order rollback rules.

## Authoritative Inputs

| Input | Bytes | SHA-256 | Result |
|---|---:|---|---|
| Round-4 material challenger | 165,728 | `9EDE3C17FF16D750700781F8B62DC2EE06F08A2E36DF203A46CAEE4C7B914D51` | Exact required hash |
| Current lethal production GLB | 304,020 | `58C3532307E16A3F60E61A6DEC6A2FEBA3E267F625917AA1399EAEE4A21AEBAD` | Unchanged; sealed rollback payload |
| Production lethal XModel JSON | 299 | `68929F3834097C09003DF63DB1148D776D61A38E70500F2E149BE8F5DAF2377C` | Copied byte-exact; no promotion write |
| Round-5 critic | n/a | recorded in `manifests/VERIFICATION.json` | `PASS`; OAT was not previously claimed |

The private and promotion-minimal GLBs are byte-exact copies of the authoritative challenger under the production filename `worldmodel_xi_sentry_old_clean_lod0.glb`.

## Private Tree

The audit-only tree contains only the needed source inputs and generated evidence:

- `private/zone_raw/model_export`: authoritative candidate under the production GLB filename;
- `private/zone_raw/xmodel`: byte-exact production metadata;
- `private/zone_raw/materials/mc`: sentry, SAW misc/no-camo, and SAW material definitions;
- `private/zone_raw/images`: four exact GLB DDS dependencies, SAW spec DDS, five OAT-converted IWIs, and the exact production sentry spec IWI;
- `private/zone_raw_minimal`: candidate, exact production sentry material/IWIs, all four external DDS files, and no private SAW material JSON or SAW IWI;
- `private/zone_source`: three one-XModel probe zones plus an exact copy of the production stock-render ignore list.

No private zone source names `worldmodel_t8_sentry_deployed` or `worldmodel_t8_defroster_drone`.

## External GLB Images

The candidate URI table is exact and fully resolved in both private promotion trees:

| URI | Bytes | SHA-256 |
|---|---:|---|
| `../images/weapon_sentry_gun_col.dds` | 1,048,704 | `5E77D9948A8C4F00C5A7796F5DD296E3C5EADD30E7E814FE01814759A7E222CC` |
| `../images/weapon_sentry_gun_nml.dds` | 349,680 | `395561C17BFC5CE54DF0132DD068CBAA5E0FA2519236457E0266CC0021BB28D3` |
| `../images/weapon_saw_col.dds` | 349,672 | `78C46428E014B45D1AAA3A8082A2D308654E109CF1B401AA59EC66701C8FAFEA` |
| `../images/$identitynormalmap.dds` | 132 | `CE9B0ED111BDAA932B5FEB145ABF9D7252F7A35C10C1E2647B6D924D2BF34A96` |

There are zero embedded images, invented URIs, unsafe absolute/data URIs, or missing private-tree targets. The promotion map creates exactly these four currently absent production DDS paths.

## OAT Toolchain

| Tool/reference | SHA-256 |
|---|---|
| OAT `Linker.exe` v0.32.0 | `1A5CB7499458BEF359F55FF2A78C72E5822F62455599AB291B590DA747C0233B` |
| OAT `Unlinker.exe` v0.32.0 | `8475AF247240D34B29AA51AE5C84B3E4AED2F7100BB5C689FD3FA1EA666F4A7F` |
| OAT `ImageConverter.exe` v0.32.0 | `FB0EFD4172DC741CEB2329D000118C6262EEA2D9103A24092FB4AA0CA4218906` |
| Read-only `common.ff` | `DD269840AD20F4C67CD96D1F42B0E5571BC61645C91B1866B65BD08036A6B306` |
| Read-only `common_mp.ff` | `602C068B34F6A32147BFC7727B4F18B6A37FE47B4E99C68F5E25C6507C637320` |

Exact argument arrays and log paths are in `OAT_RUNS.json`.

## Conversion and Link Results

The image converter produced five IWIs with exit code 0. Its successful stdout was empty, so output hashes are the proof of conversion. The converted sentry color/normal IWIs are not byte-identical to the existing production IWIs; no equivalence is claimed. The promotion-minimal tree instead uses the exact production IWI bytes.

The DDS-only negative probe failed exactly as expected: without converted IWIs in the asset search tree, OAT reported a missing IW3 image and ended with 6 errors. This proves that resolvable glTF DDS URIs and linkable IW3 `image` assets are separate requirements in OAT v0.32.0.

| Context | Inputs/origins | Link result | Fastfile |
|---|---|---|---|
| Private closure | All three materials and six images from private disk; technique sets from `common.ff` | 0 warnings, 0 errors | 50,473 bytes, `0764F33E...F70D6BB` |
| Stock resident | Production ignore list active; private disk closure also available; stock SAW assets recorded as references | 0 warnings, 0 errors | 39,400 bytes, `32FBED2F...FBBCFF7` |
| Promotion minimal | Exact production sentry material/IWIs; no private SAW material/IWIs; SAW misc from `common_mp` | 0 warnings, 0 errors | 39,408 bytes, `BF846EEC...6E4967` |

The minimal linker log states:

- `mc/mtl_sentry_bo` loaded from disk;
- `mc/mtl_weapon_saw_misc_nocamo` loaded from `common_mp`;
- `worldmodel_xi_sentry_old_clean` loaded from disk;
- zero warnings and zero errors.

This closes the engine-side graph without material or IWI promotion.

## Unlink Results

All three contexts were listed and unlinked to XMODEL_EXPORT and GLB with zero warnings/errors. Materials unlinked cleanly. The private context contains all three materials; resident/minimal output contains sentry plus misc/no-camo, while stock `mc/mtl_weapon_saw` remains a reference.

An image-only unlink from the FF alone returned process code 0 but its completion summary reported 6 errors because IW3 pixel payloads are external to the FF. A deterministic six-entry private IWD was then supplied through `--search-path`; all six images unlinked to DDS with zero warnings/errors. The four external GLB DDS hashes and the SAW spec DDS hash round-tripped exactly.

## Compiled XModel

The authoritative source and all three compiled contexts agree on four surfaces, 1,749 triangles, three materials, and twelve tags/joints.

| Surface | Source render vertices | Compiled pooled positions | Triangles | Material |
|---|---:|---:|---:|---|
| legacy tripod / `surf0` | 864 | 356 | 564 | `mc/mtl_sentry_bo` |
| mount hardware / `surf1` | 216 | 72 | 132 | `mc/mtl_weapon_saw_misc_nocamo` |
| mount yoke / `surf2` | 552 | 160 | 296 | `mc/mtl_weapon_saw_misc_nocamo` |
| SAW receiver / `surf3` | 1,211 | 512 | 757 | `mc/mtl_weapon_saw` |
| **Total** | **2,843** | **1,100** | **1,749** | **3 materials** |

The difference between 2,843 GLB render vertices and 1,100 XMODEL_EXPORT positions is representational: GLB splits positions across normal/UV discontinuities, while XMODEL_EXPORT keeps normal/UV values at triangle corners. The OAT-dumped GLB references the exact source per-surface render-vertex counts and preserves all triangle counts.

Compiled bounds in XMODEL_EXPORT coordinates are:

- minimum: `[-22.708826, -19.395699, 0.000000]`;
- maximum: `[19.212023, 19.564678, 38.201344]`;
- extent: `[41.920849, 38.960377, 38.201344]`.

These match the candidate bounds under OAT's evidenced glTF-to-XModel axis conversion.

## Tag Order

Source GLB skin order:

`tag_origin, tag_base, tag_swivel, j_pivot, j_hinge, tag_gun, j_barrel_anchor, j_barrel, tag_barrel, tag_flash, tag_brass, tag_clip`

Compiled XModel order:

`tag_origin, tag_base, tag_swivel, j_pivot, j_hinge, tag_gun, j_barrel_anchor, tag_brass, tag_clip, j_barrel, tag_barrel, tag_flash`

OAT deterministically reorders the branch so parents precede children. All three compiled contexts have the same 12-entry order, parent indices, triangle/material assignments, and bounds. Order preservation is not claimed; exact source and compiled orders are recorded.

## Material and Image References

Compiled material order is exact:

1. `mc/mtl_sentry_bo`
2. `mc/mtl_weapon_saw_misc_nocamo`
3. `mc/mtl_weapon_saw`

The sentry material references its existing specular, normal, and color image names. Both SAW materials reference the stock SAW specular, identity normal, and color image names. Unlinked material JSON preserves these references. The minimal zone records the two technique sets, three SAW images, and `mc/mtl_weapon_saw` as resident references; `mc/mtl_weapon_saw_misc_nocamo` is resolved from `common_mp` and emitted because it is not currently in the ignore list.

## IW3 Representational Capacities

OAT v0.32.0's IW3 asset declarations use 8-bit XModel bone/surface counts and 16-bit XSurface vertex/triangle counts and triangle indices. This evidences representable maxima of 255 bones, 255 surfaces, and 65,535 per-surface vertices/triangles/indices; it does not establish every runtime pool or rendering limit. Source: [OAT v0.32.0 `IW3_Assets.h`](https://raw.githubusercontent.com/Laupetin/OpenAssetTools/v0.32.0/src/Common/Game/IW3/IW3_Assets.h), especially lines 389-403 and 501-531.

The compiled candidate uses:

- 12 bones;
- 4 surfaces;
- at most 512 pooled positions on one surface;
- at most 757 triangles on one surface;
- maximum triangle vertex index 1,099.

All are within those representational capacities, and OAT linked all three zones without an engine-format limit error.

## Role Separation

Production `_assetprofile.gsc` still returns three distinct model names:

| Role | Asset | GLB SHA-256 |
|---|---|---|
| Ground Frost Sentry | `worldmodel_t8_sentry_deployed` | `580A7381B916FAFFBBBC812F785A42F1EBE61100B15ED4CE490B983356C9AD9E` |
| Lethal Sentry | `worldmodel_xi_sentry_old_clean` | candidate `9EDE3C17FF16D750700781F8B62DC2EE06F08A2E36DF203A46CAEE4C7B914D51` |
| Airborne Defroster Drone | `worldmodel_t8_defroster_drone` | `2737870FF7A67C75D33DDD68D2158D7721E852869F5DA755207714A8AC5E15D5` |

Production `xi_ftag.zone` contains each XModel reference exactly once. Neither control appears in a private probe or promotion write operation. Their XModel JSON and GLB hashes are protected invariants in `promotion-map.json` and the verifier.

## Promotion and Rollback

`promotion-map.json` is the authoritative recipe. Its five operations are:

1. replace `zone_raw/xi_ftag/model_export/worldmodel_xi_sentry_old_clean_lod0.glb` after checking the old production hash;
2. create `weapon_sentry_gun_col.dds` only if absent;
3. create `weapon_sentry_gun_nml.dds` only if absent;
4. create `weapon_saw_col.dds` only if absent;
5. create `$identitynormalmap.dds` only if absent.

Every write uses a same-directory temporary file, a pre-rename hash check, and an atomic rename/replace. Rollback runs in reverse: delete a created DDS only if its hash still equals this audit's payload, then restore the old GLB only if the current target is still the promoted candidate and the rollback payload still has the old production hash.

No promotion was executed.

## Hard-Bar Summary

| Requirement | Result |
|---|---|
| Exact candidate and authoritative critic PASS | PASS |
| All four external GLB images exact and resolved | PASS |
| OAT image conversion behavior evidenced | PASS |
| Private dependency closure links | PASS |
| Stock-resident behavior links | PASS |
| Promotion-minimal production-IWI/common_mp behavior links | PASS |
| XModel/GLB/material/image unlink evidence | PASS |
| Tags, order, bounds, triangles, vertices, materials inspected | PASS |
| IW3 representational capacities checked without overclaim | PASS |
| Frost Sentry and Defroster Drone remain distinct | PASS |
| Minimal reversible promotion map | PASS |
| Production changed | NO |
| In-game/runtime appearance proved | NOT CLAIMED |

**Final: PASS for isolated OAT and promotion readiness.**

## Verification

Run the read-only verifier with the bundled Python runtime:

```powershell
& 'C:\Users\shawn\.cache\codex-runtimes\codex-primary-runtime\dependencies\python\python.exe' '.\verify_round6.py' --write '.\manifests\VERIFICATION.json'
```

Expected result: `PASS`, 157/157 checks, zero failures. Validate the final evidence seal with `verify_sha256.py` after `SHA256SUMS.txt` is present.
