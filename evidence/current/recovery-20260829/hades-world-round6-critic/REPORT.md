# Hades/Bruen World-Model Round 6 Independent Critic

## Strict Verdict

**HOLD. Do not promote.** Round 6 materially closes the criticized front purple canister-strap slit and passes every nonvisual gate, but it fails the sealed blind requirement. The candidate wins front three-quarter only; production decisively wins profile, rear three-quarter, and identity close. Candidate tally: 1 win, 3 losses, 0 ties, and only 1 decisive win. One loss is an automatic HOLD; this candidate has three.

## Frozen Inputs

- Round-6 candidate: `2E69C1A32CF3D5418F39E4ED6F497187A8E2B99AB54004E5C2985A69A3B09A77`, exact before and after, 1,020,332 bytes.
- Production world: `6A234017B0377A584365C93718501C8D7E4EF1F5F9809B9478BD0ABC4F4E25C0`, exact before and after, 1,091,336 bytes.
- Actual production view used for primary OAT: `B82BB33C153BEA73DF4DE4B38D44F3E31A8F4C4293985C543F7F33F76119A0C1`, exact before and after, 1,770,564 bytes.
- Round-5 control: `D8E207A31DC66497D168A1BCE84633234BAD609B46FDCF257718DDA379F6D300`, exact before and after, 1,020,180 bytes.

`analysis/INTEGRITY_BEFORE.json`, `analysis/INTEGRITY_AFTER.json`, and `analysis/INTEGRITY_COMPARISON.json` retain the seals and protected-path audit.

## Sealed Blind World Comparison

Eight fresh Blender 3.6 WORLD-only renders were made from the real production and candidate GLBs with one production-derived camera/light rig reused exactly. The renderer rejects any full path containing `viewmodel`. Cameras and lights are exactly matched for profile, front three-quarter, rear three-quarter, and identity close.

- Sealed key SHA-256: `7A500FED2E4EA0E883F6C0DD337D6C51B6B2165E6AEC714D05AF841602B3392C`
- Pre-reveal ballot SHA-256: `8ACBF74E5D871106D34CEB8B24B43F24920C44163015451CC3A64C2C3D8480CF`
- Ballot was written and hashed before the key was read.

| View | Blind vote | Revealed winner | Strength | Result |
| --- | --- | --- | --- | --- |
| profile | B | production | decisive | **fail** |
| front three-quarter | B | candidate | decisive | pass |
| rear three-quarter | B | production | decisive | **fail** |
| identity close | B | production | decisive | **fail** |

The front fix itself succeeds: the broad round-5 slit is materially closed, and the selected front view shows no new protrusion/flap, floating face, z-fight shimmer, palette discontinuity, or silhouette regression. The candidate still loses the other three views on overall surface continuity, silhouette/coherence, and identity legibility. That fails both visual rules: win-or-tie every view and at least two decisive candidate wins.

## Topology And Local Delta

| Metric | Round 5 | Round 6 | Production |
| --- | ---: | ---: | ---: |
| vertices | 14,063 | 14,065 | 15,108 |
| triangles | 9,984 | 9,986 | 10,000 |
| edges | 21,782 | 21,786 | 22,464 |
| components | 2,445 | 2,445 | 2,826 |
| boundary edges | 13,612 | 13,614 | 14,928 |
| boundary / edge | 0.6249196584 | 0.6248967227 | 0.6645299145 |
| wire / overconnected / degenerate | 0 / 0 / 0 | 0 / 0 / 0 | 0 / 0 / 0 |

Round 6 is exactly `+2` vertices and `+2` triangles, remains under the cap, preserves exactly 2,445 components, and has slightly better boundary density than round 5. Direct GLB decoding finds one changed primitive only. Every existing `POSITION`, `NORMAL`, `TANGENT`, `TEXCOORD_0`, `JOINTS_0`, and `WEIGHTS_0` element prefix is byte-identical, as is the complete existing index prefix. The appended global triangles are exactly `[8779,14063,14064]` and `[8779,8774,14064]`; materials, images, textures, skins, nodes, primitive material, and mode are unchanged. The patch is locally contained.

## UV, Materials, Palette, And Alpha

Flipped-V orientation classifies all `9,986 / 9,986` triangles; all 35 atlas regions are populated, unmatched triangles are 0, runtime material mismatches are 0, and UVs are finite and within the unit square. Only `mtl_wpn_t8_lmg_hades_mag_cloth_sig_02` gains faces, exactly `+2`. Runtime materials remain exactly `mc/xi_t8_bruenmk9` and `mc/xi_t8_bruenmk9_cutout`.

Direct Pillow RGBA decoding passes blue upper armor, purple receiver, dark-blue lower canister, ivory snake skin/head, populated snake eyes, opaque alpha, functional cutout alpha, and full `0..255` alpha in all required uber cutouts. The atlas report retains previously documented stale alpha summary values for some regions; actual decoded pixels pass and are authoritative here.

## Production-View OAT

The primary isolated OAT uses the actual production view at `B82BB33C...A0C1` for both variants; no staged HOLD view is used. Baseline and candidate Linker runs exit 0, both Unlinker `--list` runs exit 0, and all variants have 0 warnings and 0 errors.

| Pool | Baseline | Candidate | Delta | Exact names |
| --- | ---: | ---: | ---: | --- |
| XModel | 2 | 2 | 0 | yes |
| Material | 4 | 4 | 0 | yes |
| Image | 6 | 6 | 0 | yes |

## Scope Integrity

Before/after comparison passes for all four frozen inputs, 207 builder files, the 2,099-file production tree, the 24,167-file Steam tree, 129 view/optic/Hades files, the dashboard, Git index and HEAD, and 11,259 Git-status entries outside this sole critic directory. No production, Steam, Git, dashboard, builder, viewmodel, or optic file changed. No promotion was performed.

## Biggest Remaining Gap

The candidate remains visually inferior to production in three of four required views despite fixing the front slit. The minimum evidence-aligned correction is to retain the successful two-triangle front patch but restore production-equivalent continuity only on the side/rear/identity-visible canister strap and receiver surfaces responsible for those three losses, then reseal and rerun all four blind views. There is no honest one-face correction supported by this ballot.
