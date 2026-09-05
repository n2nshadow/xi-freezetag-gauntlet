# Family 01 World LOD Round2 Independent Critic

## Verdict

**HOLD.** Family 01 itself is structurally coherent, hash-bound, correctly packaged, and visually credible in the supplied offline evidence. It is not ready for promotion from the exact current full proving package.

The strongest current gap is the Backlot XModel margin. Independent execution of the repository budget check against the exact current `mod.ff` reports **993/1000 runtime XModel slots**, only seven hard engine slots free, with **70/70 mod-exclusive models**. This exceeds the script's normal 990 runtime safety ceiling. The proving builder obtains `assetBudgetValidated: true` only by overriding `MaxRuntimeXModelAssets` to 1000. That is hard-limit compliance, not compliance with the repository's default safety policy. No live Backlot run is supplied to show that this seven-slot margin survives real client/runtime behavior.

Live LOD switching and magazine-drop behavior also remain unproven. Compile, dump, static geometry, and Blender renders cannot establish switch distance/pop, reload/drop orientation, field consumption, or gameplay stability.

## Exact Current Package

The package was rebuilt after the initial critic pass. This report uses the current receipt built at `2026-09-05T05:21:02.0445292Z`, not the superseded earlier package.

- `mod.ff`: 31,283,691 bytes, SHA-256 `9B94CDC1FAA28859737DD6F1FA21EC3D2EC13C93E110B50175267CA898716D4C`.
- `xi_ftag.iwd`: 53,881,688 bytes, SHA-256 `BFF883EA4EC34AE28F534718C5F6090BBA57F7AD45322981BA22CB55F098C980`.
- Both hashes and byte counts independently match `proving-receipt.json`.
- The receipt's Family 01 delivery hash `A1620BE55DC7470776154613B953C01D9B2CAD09FC9AD99821E76CF6B21C3488` independently matches the current round-two `DELIVERY.json`.

No builder, production, Steam, candidate, or accepted-viewhands file was modified by this review.

## Provenance And Seals

- Rehashed all 1,098 entries in `family01_world_lods_round2/SHA256-MANIFEST.json`: zero missing, size, or SHA-256 mismatches; manifest seal matches.
- Rehashed all 3,443 entries in `family01_full_attachments_round1/SHA256-MANIFEST.json`: zero missing, size, or SHA-256 mismatches; manifest seal matches.
- Dumped xmodel metadata and GLBs from the exact current proving `mod.ff`. All 13 Family 01 compiled GLB hashes match the sealed `runtime-validation.json` round-trip hashes exactly.
- All five exact proving xmodel descriptors match the sealed round-two OAT replacement-dump descriptors byte for byte.
- The exact proving bytes therefore correspond to the same compiled artifacts used by the sealed compiled-render evidence, despite later additions of Families 02 and 03 to the full package.

## Compile And Payload

Independent OAT listing of the exact current `mod.ff` finishes with zero warnings and zero errors. It lists 2,114 content entries, including 88 XModel records, 451 materials, 578 images, and 11 linked weapons. All four Family 01 viewmodels, all four Family 01 worldmodels, and `worldmodel_xi_f01_magazine_round2` are present.

The exact IWD has 706 entries with no duplicate archive paths: 607 images, 95 loose weapon definitions, three sounds, and one root config. The four `g36c*` Family 01 definitions are loose IWD weapon overrides rather than linked weapon records in `mod.ff`; that packaging fact is acceptable only insofar as the runtime loads these loose overrides, which was not demonstrated live here.

Each archived definition contains exactly one `worldClipModel` field set to `worldmodel_xi_f01_magazine_round2`:

| Packaged weapon | World model in slots 1-7 | World clip model |
|---|---|---|
| `g36c_mp` | `worldmodel_xi_f01_bare_round1` | `worldmodel_xi_f01_magazine_round2` |
| `g36c_reflex_mp` | `worldmodel_xi_f01_reflex_round1` | `worldmodel_xi_f01_magazine_round2` |
| `g36c_acog_mp` | `worldmodel_xi_f01_acog_round1` | `worldmodel_xi_f01_magazine_round2` |
| `g36c_silencer_mp` | `worldmodel_xi_f01_suppressor_round1` | `worldmodel_xi_f01_magazine_round2` |

## World LOD Chains

The exact proving descriptors contain three LODs for every Family 01 world model at distances `320`, `900`, and `1000000`. Direct parsing of the exact compiled GLBs confirms the sealed triangle counts:

| State | LOD0 | LOD1 | LOD2 |
|---|---:|---:|---:|
| Bare | 15,683 | 12,316 | 8,042 |
| Reflex | 17,193 | 13,729 | 9,413 |
| ACOG | 16,775 | 12,942 | 8,179 |
| Suppressor | 19,106 | 14,518 | 8,554 |

Materials and attachments remain role-correct at every tier. Bare uses the two rifle materials; both optics use those plus the two authored optic materials; suppressor uses those plus its two authored suppressor materials. Exact compiled node/rig structure is present at every tier.

## Magazine Geometry

The exact compiled clip model is a single-LOD, 1,705-triangle object with two surfaces using only `mc/xi_t8_mtz556` and its cutout material. Its bounds are approximately `[-1.712, -7.777, -0.650]` to `[1.712, 0, 0.650]`. Direct visual inspection shows only the curved magazine and feed-lip geometry, with no receiver, stock, barrel, muzzle, or optic. This closes the previous whole-rifle `worldClipModel` defect at the payload level.

It does not prove that a live reload/drop event consumes the field with the intended origin, orientation, timing, collision, or lifetime. `worldclip-verification.json` correctly records `liveDropEventObserved: false`.

## Visual Critique

I inspected the actual sealed source, candidate LOD0/1/2, and compiled round-trip renders for bare, reflex, ACOG, suppressor, and magazine, including side, quarter, top/front, optic, and muzzle views. I also inspected the round-one first-person hip/ADS and compiled world-state evidence.

For a concealed quarter-view A/B test, each role's sealed source and compiled LOD0 render was copied under neutral A/B names and the key was withheld until after review. I could not reliably identify source versus compiled LOD0 in any of the four pairs at whole-weapon framing. The reveal was A = source and B = compiled LOD0 for all four. No attachment displacement, silhouette break, missing surface, or obvious compile-only shading fault was found.

LOD1 remains convincing in the offline views. LOD2 is visibly coarser under close inspection: receiver/handguard interpolation becomes more faceted, and the suppressor shows the clearest planar simplification. At an appropriate distant switch this may be acceptable, but the supplied render camera is not an engine-distance calibration. There is no actual transition sequence proving that the `900` threshold prevents visible pop.

The first-person round-one images show centered authored reflex/ACOG geometry and unchanged bare/suppressor framing, but they are explicitly data-composed Blender views. They do not prove live ADS alignment, reticle behavior, glass blending, hands/grip, animation, or audio.

## Backlot Budget

Independent current-package results:

- Linked materials: `451/760` local cap.
- Backlot runtime material union: `1710/2048`, 338 hard slots free.
- Backlot runtime XModels: `993/1000`, seven hard slots free.
- Concrete mod XModels: 71; verified stock references: 17; mod-exclusive XModels: `70/70`.
- Name union: 992; one map-specific duplicate slot (`weapon_saw_mg_setup`) raises actual slot use to 993.

The material budget is healthy. The XModel budget is not: the exact package fails the repository check at its default 990 safety threshold and passes only when the builder explicitly raises that threshold to the hard engine limit of 1000. The receipt should not present this as an unqualified budget validation.

## Required Closure

Before promotion, reduce the exact full package to at most the established 990 Backlot safety ceiling, or obtain an explicit, documented decision to replace that policy with hard-limit-only acceptance. Then capture a live isolated Backlot run of the exact receipt hashes showing all four third-person variants, LOD0-to-LOD1 and LOD1-to-LOD2 transitions, and an actual magazine drop/reload event. Until that exists, the correct independent disposition is **HOLD**.
