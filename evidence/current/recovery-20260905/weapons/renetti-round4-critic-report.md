# Family 08 Renetti Surface Round 4 Independent Critic

Recorded: 2026-09-05T09:36:10Z

## Verdict

**PASS_FOR_PROVING_PACKAGE_ONLY**

`safeForSealedProvingPackage=true` is justified for a new, sealed proving-package integration only. This is not a release approval, production promotion, Steam deployment, or runtime-behavior finding. The sealed Round 4 verdict was not trusted; its hashes, payloads, geometry, weapon schema, and accounting inputs were checked independently.

The Round 4 roster statement `988 - 10 + 2 = 980` is **rejected**. It mixes an older viewhands checkpoint with a later Family23 delta and does not describe the current exact integrated proof scope. The corrected same-scope projection is **993 - 17 + 8 + 2 = 986**. An integrated rebuild and measured runtime XModel count remain mandatory before any release claim.

## Gate Summary

| Gate | Result | Independent finding |
|---|---|---|
| Round 4 seal and delivery records | PASS | 218/218 sealed entries and 15/15 delivery records match |
| Carried Round 3 bytes | PASS | all 179 Round 3 files have one unambiguous byte-identical Round 4 copy |
| View/world geometry and IW3 limits | PASS | all four runtime models and all four fresh compiled dumps pass |
| Collar contact and daylight review | PASS | 18 exact shared ring vertices per role/LOD; eight contact views show no daylight slit |
| Authored material identity | PASS | donor suppressor materials and counts retained; only the 72-triangle collar addition is new |
| Weapon schema | PASS | exact required fields retained; only primary `gunModel`/`worldModel` differ after newline normalization |
| Weapon ownership | PASS | exact `mp/colt45_silencer_mp`; Family13 `skorpion_silencer_mp` excluded |
| Fresh OAT compile/list/dump | PASS | candidate models, candidate weapon, and production baseline complete with 0 warnings/0 errors |
| XModel accounting | PASS_FOR_PROJECTION_ONLY | scope-matched projection is 986; integrated measurement is pending |
| Pairwise A/B render review | PASS | candidate contact is continuous with no fractured wedge, silhouette loss, or unintended piece |

All offline proving gates pass with the accounting qualification above. Release gates do not pass because no integrated rebuild or live runtime capture was supplied.

## Integrity And Carry

- Round 4 `SHA256-MANIFEST.json`: 218 declared files, 218 exact size/hash matches, 86,760,346 declared bytes, no duplicate paths, no missing files, and no unlisted files other than the intentionally self-omitted manifest. The package has 219 files including that manifest. Manifest SHA-256: `BC80BE7320B1F13245FB223F2A0C5D27DE1C4E5D827A6A9825FEBADADC66E903`.
- Round 4 `delivery-manifest.json`: all 15 recursively discovered `{path,bytes,sha256}` records match. SHA-256: `28AE294E9F37BB53B7E7130E5DCB5A8780AFD301A5F65D90F36D7F841EF26601`.
- Round 3 seal: 178 declared entries all match; 179 files exist including its self-omitted manifest. Manifest SHA-256: `76ED8693F3060E62F5A06DCEF49B95351349C09D06B0B8997D1A07A12F76AA6C`.
- Every Round 3 file, including its manifest, maps to exactly one byte-identical Round 4 file: 158 at the same relative path and 21 under `inherited_round3/`. There are no absent or ambiguous carries.
- Lead schema audit: all 10 declared hash records match. Its manifest SHA-256 is `86226EA7B411C9D25CDCEA9C7CBF710ABD3B8A7F68844C4BAEFF71212552028D`; all 26 lead-control files carried into Round 4 are byte-identical to their external sources.

Hash integrity binds the old `980` text but does not make that text correct. The accounting claim is superseded below.

## Geometry

Independent low-level GLB parsing covered positions, normals, UVs, indices, joints, weights, primitive mode, finite values, triangle area, hierarchy, and IW3 per-surface/model limits.

| Role / LOD | Surfaces | Bones | Triangles | Fresh dump match |
|---|---:|---:|---:|---|
| view LOD0 | 7 | 9 | 8,626 | PASS |
| world LOD0 | 8 | 4 | 8,398 | PASS |
| world LOD1 | 8 | 4 | 6,376 | PASS |
| world LOD2 | 8 | 4 | 5,594 | PASS |

World triangles strictly descend. The four-model total is 28,994, below 65,535. All referenced indices and joints are in range, weights are normalized, and no zero-area triangles were found.

Runtime-to-fresh-dump semantic comparison matched every triangle with zero missing triangles and zero bone mismatches. Maximum position error is `0`; maximum normal error is `0.0068922937` (limit `0.007`); maximum UV error is `0.0009764433` (limit `0.001`).

Against the accepted Round 2 geometry, all source triangles remain present. Each target has exactly 72 allowed extra triangles, all under the suppressor body material, with zero other unmatched triangles and zero bone mismatches:

| Role / LOD | Accepted source | Candidate | Authorized extra |
|---|---:|---:|---:|
| view LOD0 | 8,554 | 8,626 | 72 |
| world LOD0 | 8,326 | 8,398 | 72 |
| world LOD1 | 6,304 | 6,376 | 72 |
| world LOD2 | 5,522 | 5,594 | 72 |

## Contact And Daylight

Direct indexed-vertex intersection between the suppressor body and Renetti barrel was recomputed for runtime and fresh compiled-dump geometry. Every view/world LOD has exactly 18 shared vertices at distance `0`, all four radial quadrants represented, and a complete ring. Maximum angular gaps are:

- view LOD0: `24.252995` degrees
- world LOD0: `22.960188` degrees
- world LOD1: `23.550910` degrees
- world LOD2: `23.111989` degrees

All are within the 25-degree full-circumference criterion. The eight exact-dump high-contrast contact images (view/world side, top, oblique, and muzzle-front) were inspected directly. No continuous magenta background slit crosses the collar/base seat; no fractured collar wedge or detached component is visible. The exact shared ring is the controlling geometric result; the masks are corroborating raster evidence.

## Authored Materials

The original suppressor donors were re-read from the two SMDs:

- View donor: 930 suppressor triangles, comprising 926 body and 4 decal triangles; SHA-256 `F09D718E390721D1616FFC124BCA46729FD513E387CAF873B16C6D8380240874`.
- World donor: 934 suppressor triangles, comprising 926 body and two 4-triangle decals; SHA-256 `B66BAC2BF60280411BD2BA3A95DDE77F4531D22331391E5A9E945593BAD5C2F2`.

The candidate preserves those decal counts and maps the original 926 body triangles to the authored body material. The only addition is the authorized 72-triangle collar, producing 998 body-material triangles in each role/LOD. No material was added or substituted by the repair.

All five suppressor material JSON files parse cleanly and retain their intended techniques and texture identities. Every non-stock referenced texture has both DDS and IWI payloads. Seventy carried `images`, `materials`, and `xanim` files are byte-identical to the accepted Round 2 files (46 images, 10 material JSON files, 14 xanim files). This proves asset identity, not live animation behavior.

## Weapon Schema And Ownership

The sole candidate runtime weapon file is exactly `runtime/weapons/mp/colt45_silencer_mp`. Candidate OAT source, list, and dump all use exact weapon asset ID `mp/colt45_silencer_mp`.

Production and candidate source files each parse as one valid IW3 `WEAPONFILE` with 356 unique fields and no duplicates. Both retain:

- `twoHanded=1`
- `adsTransBlendTime=0.1`

After only CRLF/LF/CR normalization within values, the source files differ in exactly two fields:

- `gunModel`: `viewmodel_xi_renetti` -> `viewmodel_f08_renetti_suppressor_surface_round3`
- `worldModel`: `worldmodel_xi_renetti` -> `worldmodel_f08_renetti_suppressor_surface_round3`

All 31 protected fields (`gunModel2` through `gunModel16`, `worldModel2` through `worldModel16`, and `worldClipModel`) are exact. Every unrelated source field is exact. Raw-only differences in `hideTags` and `notetrackSoundMap` disappear under the permitted newline normalization.

Fresh production and candidate OAT dumps each contain 501 unique fields. They omit source-only `twoHanded` and `adsTransBlendTime` and, after newline normalization, differ only in the two authorized primary model fields. The stock `common_mp` dump also has 501 unique fields and omits both source-only fields, confirming that omission is stock serializer behavior rather than candidate loss.

`skorpion_silencer_mp` occurs zero times in candidate runtime, zones, OAT lists, and round-trip payloads. The inherited `fireSound=weap_skorpionsd_fire_npc` and `fireSoundPlayer=weap_skorpionsd_fire_plr` values are unchanged production sound aliases; they are not Family13 weapon ownership and do not name `skorpion_silencer_mp`.

## Fresh OAT Replay

Using OAT 0.32 (`Linker.exe` SHA-256 `1A5CB7499458BEF359F55FF2A78C72E5822F62455599AB291B590DA747C0233B`; `Unlinker.exe` SHA-256 `8475AF247240D34B29AA51AE5C84B3E4AED2F7100BB5C689FD3FA1EA666F4A7F`), isolated compile/list/dump replays produced zero warnings and zero errors for candidate models, candidate weapon, and production weapon baseline.

- Candidate model FF: 629,632 bytes, SHA-256 `2F06CE160674ABCB967610495F1AF7EB1576CE703710028B32DF4F557BFEE2D3`; exact sealed match.
- Candidate weapon FF: 735,472 bytes, SHA-256 `2DA79FCDC6FE77EA38CD56DD50460943F2FAAAECE5B6DBB1B6FE23B1C19ABF26`; exact sealed match.
- Candidate weapon dump: 11,088 bytes, SHA-256 `C8C426727022801AF2628C544CA2EA89BCA7DAC7EF7A65190D0E9A80B8EB7F4C`; exact sealed match.
- Production baseline FF: 105,732 bytes, SHA-256 `3EB7F8CBD00A0A7A311CEB34B244959D9D6064EB5B733D82AA757B953585E232`; exact lead-control match.
- Production dump: 11,038 bytes, SHA-256 `2698A2DBAFCDAFA77D6FC186D668BD0A8B69D4A38870B4E378823807FDDC4394`; exact lead-control match.

All seven model-dump files reproduced the sealed bytes, including the four GLBs. The final model dump used a short temporary output path because OAT's legacy Windows file opening fails at the longer critic path; the earlier path-length failure was not used as evidence. All temporary replay files were removed before sealing this critic root.

## Pairwise Render Review

The eight neutral A/B pairs were reviewed at collar side, collar top, collar oblique, and muzzle-front for both view and world roles. The candidate is acceptable in all eight: its collar seat is continuous, the repair does not damage the outer suppressor silhouette, and no unintended part, material swap, float, or visible daylight seam appears. Muzzle-front views are materially equivalent apart from the intended hidden collar contact. The carried key was used to associate those observations with candidate/source identities; the builder's verdict was not used.

## Corrected XModel Accounting

The Round 4 `980` claim is invalid and is not inherited.

The exact integrated proof checkpoint is the rejected package recorded at `2026-09-05T05:21:02.0445292Z`:

- `mod.ff`: 31,283,691 bytes, recorded SHA-256 `9B94CDC1FAA28859737DD6F1FA21EC3D2EC13C93E110B50175267CA898716D4C`
- `xi_ftag.iwd`: 53,881,688 bytes, recorded SHA-256 `BFF883EA4EC34AE28F534718C5F6090BBA57F7AD45322981BA22CB55F098C980`
- measured Backlot runtime XModels: `993/1000`
- name union: 992, plus one map-specific duplicate slot for `weapon_saw_mg_setup`, yielding 993

The historical package binaries are no longer retained, so this review does not pretend to rehash absent files. The baseline is anchored to the retained status file (1,959 bytes, SHA-256 `1887B8A4ECA9C3B899FBDA1C8C4523A2A29E130B685E86CFC42918031D8F084E`), the prior independent checkpoint report (8,093 bytes, SHA-256 `3994F21A418901A322E677A6FDA35937FDA3E3D6CC574AB567789E4ED7A54262`), and the retained linker log (116,985 bytes, SHA-256 `034525B82972247A8B9AB17FC5D8E1FE0614F6F9E5529FA8DC6DAA4B85EA4418`).

The same linker log loads each of the eight canonical player body IDs exactly once: `playermodel_xi_alice_4_1`, `playermodel_xi_ghost_5_1`, `playermodel_xi_iskra_6_1`, `playermodel_xi_mace_5_1`, `playermodel_xi_mara_3_1`, `playermodel_xi_mara_3_2`, `playermodel_xi_raines_5_1`, and `playermodel_xi_talon_1_1`. Approved body replacements among these are therefore slot-neutral on this scope.

The corrected Family23 Round 2 evidence was independently rehashed: all 66 seal entries match. Its exact 95-weapon checkpoint replay retires 17 unique primary-slot model IDs and introduces 8, so `993 - 17 + 8 = 984`. Current Family23 anchors are:

- `SHA256-MANIFEST.json`: `2C5EB03CF34FFAEE396CB35BDE6383B7D775A22458D21C6E67E047365D870187`
- `weapon-field-patch-manifest.json`: `A6B54F637FB5A383734C7F62192143067AD493E74A0B188F18E10E638B313855`
- `REPORT.md`: `8A95ADB5DF4554ED473E5F1DAA4F6D837527AAA4168AF9FDEEE4EF6AD0036315`
- `RESULT.json`: `EB12569A537FBA7A7527A2EB66064C338687EE776518CF72EF321E0819543216`

Applying Renetti to that same 95-weapon scope retires zero model IDs and introduces exactly two primary IDs. The old `viewmodel_xi_renetti` and `worldmodel_xi_renetti` remain referenced by `colt45_mp` and protected/non-primary `colt45_silencer_mp` slots. The exact projection is therefore:

`993 - 17 + 8 + 0 - 0 + 2 = 986`

Equivalently, `984 + 2 = 986`. This is four below the repository's 990 safety policy and 14 below the hard engine ceiling. It is a source-enumerated complete-state projection, not an integrated pool measurement.

## Outstanding And Boundary

The following remain explicitly outstanding:

- live animation behavior
- live ADS alignment and transitions
- live firing behavior, effects, and audio
- integrated sealed-package rebuild
- measured Backlot/runtime XModel pool count for the rebuilt package
- integrated package/runtime behavior and stability

No release claim is authorized until the integrated rebuild is hashed and its runtime XModel count is measured on the same scope. Production, Steam, dashboard, source candidates, accepted assets, and other family roots were not altered. All critic writes are confined to `family08_renetti_surface_round4_critic`.
