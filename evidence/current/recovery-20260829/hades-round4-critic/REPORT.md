# Hades/Bruen Visual-and-Optic Critic Round 4

## Strict Verdict

**FAIL/HOLD**

The sealed view candidate is a clear visual improvement over production in a matched blind comparison, but it does not satisfy the hard criteria. There is no sealed world candidate, OAT is therefore ineligible, compile is unproven, the optics are visibly unseated, ACOG/holographic transmission is not usable, and physical connectivity/open-edge quality is not established.

## Sealed Identity And Package

- `bruenmk9-view-feature-body.glb` independently hashes to `0A87523EAB9E649DD80E7FD5E4B3F96068799BAFBF0C46338FF800D9A928AA3D`, exactly matching the seal.
- `bruenmk9-view-rigged-optics.glb` independently hashes to `C4F916CF2FD0F7DE0964E3106207A3D26016DD4A92CC028B3A9E3C0CAC81EDD2`, exactly matching the seal.
- Production view hashes to `B82BB33C153BEA73DF4DE4B38D44F3E31A8F4C4293985C543F7F33F76119A0C1`.
- Production world hashes to `6A234017B0377A584365C93718501C8D7E4EF1F5F9809B9478BD0ABC4F4E25C0`.
- No sealed world GLB exists in `v4-final`. `identity-world.png` declares the sealed composed **view** GLB as its model; it is an identity perspective only, not a world candidate.
- Package completeness: **fail**. Sealed view exists; sealed world does not.

## Blind A/B

Seven production/sealed pairs were rendered with the same cameras, body atlas, optic atlas, lighting, state masks, and Blender 3.6 EEVEE path. Each pair received an independent cryptographic A/B assignment. The ballot was frozen before reading the key.

| View | Blind vote | Unsealed winner | Hard result |
|---|---:|---|---|
| iron hip | B | sealed candidate | fail: loose/jagged pale pieces remain visible |
| iron ADS | A | sealed candidate | pass for iron alignment only |
| ACOG ADS | B | sealed candidate | fail: floating mount and dark/non-usable transmission |
| holographic ADS | A | sealed candidate | fail: floating mount and opaque black sight panel |
| reflex ADS | A | sealed candidate | fail: floating mount; reticle corruption itself is repaired |
| identity profile | tie | tie | fail: detached/loose-looking snake presentation remains |
| identity world | tie | tie | not world-candidate evidence |

Unsealed preference was sealed candidate 5, production 0, ties 2. Unconditional pass votes were 0. The visual improvement does not override the hard failures.

## Connectivity And Open Edges

Independent Blender import/topology audits found:

| Model | Triangles | Connected components | Boundary edges | Boundary density |
|---|---:|---:|---:|---:|
| source view rigged | 21,323 | 3,497 | 25,085 | 0.563366 |
| sealed view body | 13,412 | 2,205 | 15,216 | 0.548799 |
| sealed composed view | 19,103 | 5,210 | 26,457 | 0.631688 |
| production view | 14,399 | 5,358 | 24,243 | 0.718950 |
| production world | 10,000 | 2,826 | 14,928 | 0.664530 |

The source itself is heavily islanded, so component count alone is not a defect proof. It does prove that a single mesh/object and rigid skinning do not establish physical connectivity. The sealed body still has 1,173 components of at most two triangles. Its ivory snake-skin region has 6 components and 308 boundary edges; the ivory head region has 14 components and 251 boundary edges. The hip/identity images also show pale detached blocks, jagged hanging pieces, and an open-looking underside. Physical connectivity and the no-loose-pale/open-underside criterion therefore **fail**.

The independent production-world result agrees with `hades-world-production-final-glb-validation.json`: all 35 atlas regions map, but `boundary-edge-density` fails.

## Rail, Helpers, And ADS

- The final composition has the expected optic mesh families and every optic vertex is rigidly bound at weight 1.0 to `tag_acog`, `tag_ak47_mount`, or `tag_reflex_sight`.
- All three helper bones are co-located at the same imported head `[-1.807271, 0, 3.966733]` with the same parent. The composition profile names `tag_sights_on` as the native mount, but that bone is absent from the sealed skeleton. Helper names exist, but rail/helper identity is not independently established.
- The builder manifest reports pre-export rail contact `gap=-0.08`. The imported final GLB and sealed ADS images contradict usable seating: ACOG and holographic mounts visibly float above the rail. Against the recorded rail `z p98=4.234479`, imported opaque minima are approximately `4.381006` (ACOG, +0.146528) and `4.401557` (holo, +0.167078).
- Reflex has a near-body base vertex distance of `0.027282`, but its dominant sight housing still reads visibly suspended in ADS. Visual seating remains a hard fail.
- Iron ADS is centered and readable in the sealed candidate. The three optic ADS states are not acceptable because seating and visibility are hard criteria.

## Optic Transparency And Corruption

- ACOG authored lens alpha is present and preserved (`60..255`, mean `183.317`), but the sealed ADS aperture remains dark, supplies no useful reticle, and is not a usable transmitted sight picture. ACOG transmission: **fail**.
- Holographic reticle material preserves nearly opaque source alpha (`254..255`), producing the visible black rectangular panel. Transparent usable holographic optic: **fail**.
- Reflex lens alpha is preserved (`0..231`, mean `83.405`). Reflex reticle alpha is correctly derived from color (`0..255`, mean `3.87`), and the sealed render has a clean dot with no black square. Reflex corruption repair: **pass**. Reflex as an installed optic: **fail** because seating is wrong.

## Hades Identity And Materials

Independent UV classification mapped every sealed-body triangle to one of the 35 authored atlas regions with zero unmatched faces. The sealed body preserves source counts for the identity-critical regions: snake skin `1,440`, snake head `773`, snake eyes `168`, blue uber surface `881`, purple uber surface `920`, and the four authored uber decal quads.

The staged atlas supports the intended blue/purple/ivory finish. Snake skin is graded `#DDD3C1`, snake head `#D9C8C4`, upper armor `#526FA3`, receiver block `#61558E`, and lower canister `#3F466F`. Large surfaces remain blue/purple/dark. Uber decal tiles preserve authored alpha exactly and use the cutout runtime material.

This artifact evidence is real, but the authoritative import plan is stale: it excludes the uber/snake presentation sources and omits the corresponding palette/class declarations. The sealed artifact cannot be reproduced from the current plan without relying on older staged state.

## Seven Named Gates

All seven named gates remain **FAIL** as production gates:

| Gate | Verdict | Independent finding |
|---|---|---|
| `hades-required-view-features` | FAIL | Staged/sealed geometry contains the features, but the authoritative plan excludes the required uber/snake view sources. |
| `hades-required-world-features` | FAIL | Plan omits required presentation world inputs and no sealed world candidate exists. |
| `hades-blue-purple-ivory-palette` | FAIL | Staged atlas satisfies the artifact condition; authoritative plan records only one ivory grade and cannot reproduce it. |
| `hades-ivory-is-assigned-to-snake-skin` | FAIL | Sealed artifact assignment is correct; authoritative plan leaves main/head grades null. |
| `hades-large-surfaces-remain-blue-purple-dark` | FAIL | Sealed artifact condition is correct; authoritative plan omits upper-armor grade. |
| `hades-uber-decals-use-authored-cutout-alpha` | FAIL | Atlas alpha/cutout behavior is correct; authoritative plan omits the required class declarations. |
| `hades-production-final-glb-atlas-and-topology` | FAIL | Production world maps all regions but independently fails boundary/open-edge density. |

## OAT And Compile

- OAT run: **no**.
- Reason: the rule requires a complete sealed view+world package; only sealed view artifacts exist.
- Compile status: **unproven**.
- Production promotion status: **hold**.

## Biggest Gap

The single biggest gap is the absence of an actual sealed world candidate. It prevents package completeness, world-feature review, OAT, and any compile claim.

## Smallest Next Builder Scope

Build and seal exactly one staging-only world GLB from the already staged Hades world reference and the same 35-region atlas. Include its SHA-256, independent topology/UV audit, and real world-model profile/identity renders. Do not promote production and do not label a view render as world evidence. This scope only makes the next package reviewable; the existing view optic seating/transparency and loose-geometry failures will still need a later correction.
