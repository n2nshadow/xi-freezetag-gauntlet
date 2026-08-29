# Hades/Bruen World-Model Round 5 Independent Critic

## Strict Verdict

**HOLD. Do not promote.** The sealed candidate passes hash, topology, UV/material, palette/alpha, artifact-materialization, and corrected production-view OAT gates. It fails the mandatory visual rule because it decisively loses the front three-quarter blind view to production. The final blind tally is candidate 3, production 1, ties 0; a candidate loss in any view is an automatic HOLD.

## Frozen Inputs

- Candidate SHA-256: `D8E207A31DC66497D168A1BCE84633234BAD609B46FDCF257718DDA379F6D300`, exact expected match, 1,020,180 bytes.
- Production world SHA-256: `6A234017B0377A584365C93718501C8D7E4EF1F5F9809B9478BD0ABC4F4E25C0`, exact expected match, 1,091,336 bytes.
- Actual production view used by primary OAT: `B82BB33C153BEA73DF4DE4B38D44F3E31A8F4C4293985C543F7F33F76119A0C1`, exact expected match, 1,770,564 bytes.
- Staged HOLD view `C4F916CF2FD0F7DE0964E3106207A3D26016DD4A92CC028B3A9E3C0CAC81EDD2` was hashed for provenance only and was not used by the promotion-relevant OAT.
- Final rehashes after all audits remained exact. No production, source, Steam, Git index, dashboard, builder, view, or optic asset was edited.

## Blind World Comparison

Eight fresh Blender 3.6 renders were made from the real production and candidate world GLBs with one production-derived camera/light rig reused exactly. The four cameras are profile, front three-quarter, rear three-quarter, and identity close. The renderer rejects any path containing `viewmodel`.

The random key was sealed at SHA-256 `78E8F75448CE770FECD82AFC7BC16E154D602B4A23B0C2B048586EBE4FCF4F89`. The per-view ballot was frozen before reveal at SHA-256 `FAE0623B178AC549C5AB4F52F3028854A7719CE4BF2DCCD453462B81B8B2B9A7`.

| View | Blind vote | Revealed winner | Strength | Result |
| --- | --- | --- | --- | --- |
| profile | B | candidate | decisive | pass |
| front three-quarter | B | production | decisive | **fail** |
| rear three-quarter | B | candidate | decisive | pass |
| identity close | B | candidate | decisive | pass |

Candidate wins 3, production wins 1, ties 0. The candidate has three decisive wins, but it does not win or exact-tie every view. In the losing front view, the candidate exposes a dark open slit on the front-visible purple canister band and presents coarser pale/dark surface slicing than production. That is a material visual regression. Palette and cutout behavior tie because both renders use the same sealed atlas.

## Topology And UV

| Metric | Candidate | Production | Delta |
| --- | ---: | ---: | ---: |
| vertices | 14,063 | 15,108 | -1,045 |
| triangles | 9,984 | 10,000 | -16 |
| edges | 21,782 | 22,464 | -682 |
| connected components | 2,445 | 2,826 | -381 |
| boundary edges | 13,612 | 14,928 | -1,316 |
| boundary edges / edge | 0.6249196584 | 0.6645299145 | -0.0396102561 |
| boundary edges / triangle | 1.3633814103 | 1.4928000000 | -0.1294185897 |
| wire edges | 0 | 0 | 0 |
| overconnected edges | 0 | 0 | 0 |

At a separate `1e-5` coordinate weld, candidate components are 1,498 versus production 1,785, and boundary density per edge is 0.5328434974 versus 0.6054295277. There are no collapsed, degenerate, non-triangle, wire, or overconnected faces/edges. The candidate is one mesh plus one armature and stays below the 10,000-triangle cap.

UV orientation independently resolves as flipped V (`9984` classified when flipped versus `6763` without flip). All 9,984 candidate triangles classify, all 35 atlas regions are populated, unmatched triangles are 0, UV values are finite and inside the unit square, and runtime class assignments have 0 mismatches. Materials are exactly `mc/xi_t8_bruenmk9` and `mc/xi_t8_bruenmk9_cutout`.

## Palette And Alpha

Direct Pillow RGBA decoding passes blue upper armor, purple receiver, dark-blue lower canister, ivory snake skin/head, populated snake eyes, opaque alpha, functional alpha in every cutout tile, and full `0..255` alpha in all four required uber decal regions.

The atlas build report's alpha summary is stale relative to the PNG. One non-uber stamp reports maximum `243` while the PNG is `170`, and several rounded means differ. This is an evidence-metadata follow-up, not an actual cutout failure; the actual PNG pixels and runtime material assignments were audited directly.

## Corrected Production-View OAT

Primary OAT pairs both worlds with the actual current production view at `B82BB33C...A0C1`; the staged HOLD view is not used. Both baseline and candidate Linker runs exit 0, both Unlinker `--list` runs exit 0, and both variants have 0 warnings and 0 errors.

| Pool | Baseline | Candidate | Delta | Exact names |
| --- | ---: | ---: | ---: | --- |
| XModel | 2 | 2 | 0 | yes |
| Material | 4 | 4 | 0 | yes |
| Image | 6 | 6 | 0 | yes |

Exact names are retained in `analysis/OAT_PRODUCTION_VIEW_AUDIT.json` and the complete Linker/Unlinker logs.

## Provenance And Round 4

The candidate and retained prior OAT input are both 1,020,180 bytes at the exact candidate hash. A direct byte-sequence comparison and a fresh copy probe both reproduce the candidate exactly. All four authored SMD inputs independently exist at their claimed hashes.

The authoritative import plan is stale: it lists only base+magazine world sources, explicitly excludes uber/snake presentation inputs, retains a nominal 3,200-face budget, and lacks the complete palette/class declarations. The original Round 4 builder directory is absent. Because this sealed artifact is independently materializable byte-for-byte from the retained input, the stale plan is a documented follow-up here; it must be repaired before a source-driven rebuild or later promotion attempt.

Round 4 held chiefly because no real sealed world candidate, world-only evidence, or eligible OAT existed. Round 5 fixes all three gaps. This HOLD is different and narrower: the real world candidate fails one of four strict blind views.

## Smallest Next Correction

Close only the front-visible slit/open face in the candidate's purple canister strap, preserving the current atlas, UV region assignments, palette, and all other geometry. The candidate has 16 triangles of budget headroom. Reseal it and rerun the same four-view blind comparison plus corrected production-view OAT. Do not promote this candidate.
