# Independent Family01 World Packing Critic

**PASS_FOR_PROVING_PACKAGE_ONLY**. No package-equivalence blocker found. **productionStatus: HOLD; liveAcceptance: OUTSTANDING.** This verdict concerns the frozen 12-file world-packing overlay, not deployment of the diagnostic FFs, beauty, or all-operator acceptance.

## Authority And Independence

- Exact current FF: `8CCDAC3C14E28EE2A6695E4E581A7838F2E4A5FA3C2021FF621945D2264C2619`.
- Exact current IWD: `5436B11220FEBDE0D106A6D98F268B1788218C5ADFF48A5815847F2D1F6337B6`.
- Rehashed the complete frozen candidate: 497 files, 495 sealed rows plus the manifest and anchor; exhaustive file-set closure and all 12 payload records pass. Replayed all 7,138 protected size/hash rows and checked protected-root additions: none changed or added.
- Reused the hash-bound OAT current/compiled GLBs, model-roster FF, and images. The current nine-model fixture was loaded solely from the exact current FF, not canonical model source. The critic independently decoded GLB accessors, constructed triangle counters, parsed actual IWD bytes, listed actual FFs, and inspected decompressed compiled structures. No builder comparison functions were imported.
- All critic writes are confined to this directory, enforced by a Python audit hook and explicit OAT output paths. No candidate, source, loader, full build output, map configuration, Steam, or production changes. No subagents. No full build or new render set.

## Geometry And Selection

All 12 state/LOD comparisons pass independently for both frozen raw authority versus raw candidate and exact-current OAT dump versus compiled candidate. Equality includes material identity, float32 positions/normals/UVs, named joint weights, winding, and duplicate multiplicity. Cyclic corner rotation and signed-zero normalization are allowed; reversed winding is not. Comparison uses actual weapon hideTags, not state labels in mesh names.

| Visible State | LOD0 Triangles | LOD1 Triangles | LOD2 Triangles |
|---|---:|---:|---:|
| bare | 15683 | 12316 | 8042 |
| suppressor | 19106 | 14518 | 8554 |
| reflex | 17193 | 13729 | 9413 |
| acog | 16775 | 12942 | 8179 |

Each of the 48 compiled surfaces has exactly one selector-only carrier vertex and one repeated-index, zero-area triangle. The carrier duplicates an authored position; no authored face uses it. No authored vertex is reweighted. Each surface has exactly one state selector, so hiding the opposite selector removes its entire complete-state surface group. No visible authored geometry was removed or added.

Native `tag_weapon`, `tag_brass`, and `tag_flash` hierarchy, transforms, and inverse binds are exact in raw and compiled comparisons. Only two identity-child world selectors are added per packed model. No native `tag_clip` exists in this authority and none was invented. World LOD distances remain exactly **320 / 900 / 1000000**; descriptor fields other than model-export paths are unchanged. Maximum compiled rigid LOD is 36,805 vertices, five bones; total surfaces per model are 18 and 30.

## Actual Compiled Structure

The critic decompressed the actual candidate FF and uniquely matched the contiguous 56-byte IW3 XSurface arrays by every ordered vertex/triangle count, then checked actual `partBits` words at offset +40 and rigid-list counts at +32 on all 48 surfaces. Each has exactly two rigid bone groups: the native authored group and its selector. Consecutive 28-byte XModelLodInfo records confirm distances, surface ranges, and aggregate bits; XModel headers confirm five bones, one root, and the complete surface count.

Array offsets in the decompressed FF are 97498 (bare/suppressor) and 3448766 (reflex/acog). These are compiled bytes, not source receipts or bits inferred solely from GLB membership. `compiled-binary-audit.json` records each surface offset and actual words.

The local OAT `LoaderXModel.cpp.template` at lines 544-548 and 597-648 establishes rigid bone membership to partBits construction. Local IW3 `IW3_Assets.h` at lines 409-437 defines the checked layout. CoD4 disassembly `_r_dobj_skin.asm` at lines 185-291 performs the hide-mask intersection and marks an intersecting surface skipped. The critic inspected this branch and its model-offset shift logic. This supports the offline selector mechanism; it is not a live DObj observation.

## Weapons, First Person, And Materials

The actual current IWD contains 95 weapon definitions. Exactly four definitions change, each in seven already-populated worldModel values plus hideTags: **28 world slots and four hideTags fields total**. Slot 2 retains the current finish normalization. Empty world slots, every gun slot, magazine reference, all 348 protected fields per patched weapon, key order, delimiters, and bytes outside allowed values are exact. Original hide-tag order/names are preserved; one opposite-world selector is appended using literal LF separators.

| Weapon | Visible State | Added Hide Tag | Hide Count |
|---|---|---|---:|
| g36c_mp | bare | tag_f01w_suppressor | 5/8 |
| g36c_silencer_mp | suppressor | tag_f01w_bare | 4/8 |
| g36c_reflex_mp | reflex | tag_f01w_acog | 5/8 |
| g36c_acog_mp | acog | tag_f01w_reflex | 5/8 |

All four candidate `sourceEntrySha256` pins independently match the actual current post-normalization IWD entries. `pin-and-negative-audit.json` records those pins and candidate hashes for the lead's pre-apply checks. The patch-only IWD contains exactly the four candidate definitions, byte-for-byte. OAT's compiled weapon dumps round-trip the intended world slots and hide-tag sequences.

Each added tag is absent from the corresponding actual first-person rig; original and patched hide sets produce identical first-person visible triangle multisets. Four first-person GLBs, the dedicated magazine GLB, and their five descriptors are byte-identical between current and candidate dumps. All six runtime material definitions are byte-identical. Their 12 unique color/normal/specular IWI dependencies are present in the actual unchanged IWD and actual linked asset inventories; all were loaded from the exact current mod. No texture, normal map, or material replacement is introduced.

## References And Slots

The actual linked model-roster fixture is exactly **65 - 4 + 2 = 63**, with 61 retained models from the frozen FF and only two packed models from disk. All four retired IDs are absent, including external references; the exact before/after sets are independently checked, not inferred from weapon counts.

Retired: `worldmodel_xi_f01_bare_round1`, `worldmodel_xi_f01_suppressor_round1`, `worldmodel_xi_f01_reflex_round1`, `worldmodel_xi_f01_acog_round1`.

Introduced: `worldmodel_xi_f01_bare_suppressor_pack1`, `worldmodel_xi_f01_reflex_acog_pack1`.

The complete 715-entry IWD overlay has no remaining retired-ID references. All model-valued weapon fields were enumerated using the IW3 schema. The 64 embedded rawfiles also have no retired references. The builder's IWD/rawfile audit alone did not cover typed FF dependencies; the critic closed that coverage gap independently:

- Targeted dump of all 11 current compiled weapons and 17 stringtables: no retired references.
- IW3 OAT has no enabled FX exporter. A small critic-only closure fixture therefore loads all 32 actual current FX assets and 11 compiled weapons directly from the exact current FF, then independently lists their linked dependencies. No retired Family01 model is pulled in. Only seven unrelated concrete models are reachable.
- Each retired name occurs exactly once in the entire decompressed current FF, its model-name string; no additional literal references were found. The typed closure check covers pointer references that a string scan alone cannot establish.

The candidate weapon fixture's 18 additional stock external FX/sound/xanim declarations are unchanged inherited dependency names, with **no new external XModels**. This is not full stock dependency closure or a drop-in release fixture. The lead's integrated build remains necessary.

The supplied unchanged 18-map audit projects **Backlot 987 -> 985**, **Vacant 992 -> 990**, preserving the **<=990** cap. These are arithmetic projections from an actual two-slot model-roster reduction, not live pool measurements or a completed 18-map integration run. The loader must remove all four old concrete zone IDs, not merely append the two new IDs.

## Blind Review And Adversarial Checks

The critic viewed all 12 real anonymous boards before opening the key and recorded `blind-prekey.md`. No A/B silhouette, rail/glass, muzzle, magazine, or shading difference was discerned. Lower-LOD simplification appears equally on both sides. The viewer resized the boards, so the critic additionally compared all 144 full-resolution frames: **72/72 pairs are pixel-identical, RMSE 0, foreground IoU 1**, nonblank, and full-rifle views unclipped. Every one of the 144 board frame rectangles also matches its referenced frame after the recorded alpha composition. The key was then checked against the fixed assignment recipe and reviewed renderer source. No new heavy render was needed.

The independent checkers pass **47 negative mutations plus one positive control**: position, normal, UV, named joint/weight, material, reversed winding, missing/duplicate triangles, wrong/missing/both hide selectors, visible or mis-scoped carriers, every weapon's worldModel2/hideTags/gunModel/magazine/damage/empty-slot drift, corrupted actual compiled partBits/rigid-list counts, and incorrect roster retention. Mutations were in memory only. Early critic-harness assumptions about model-less weapon counts and disabled FX export were corrected; they were not candidate defects or waived failed gates.

## Promotion Boundary

No package-only findings remain. The promotion manifest binds this completed report, completed RESULT, and the exact candidate delivery record without a circular manifest hash in RESULT. It authorizes only use of this frozen overlay in a lead-owned proving build, after exact source-entry pin and protected-field validation.

**Production HOLD and live acceptance OUTSTANDING remain mandatory.** The lead must run the full 18-map integration. Live hideTags/state switching, animated hand contact, LOD transitions, shadows/culling, reload/drop, and performance remain unobserved. Packed model bounds include both resident states. Offline diffuse/cutout image equality does not establish IW3 shader appearance, beauty, all-operator approval, or user-live acceptance.
