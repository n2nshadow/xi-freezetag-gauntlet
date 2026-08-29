# XI Ghost rear-emblem Round 4 independent critic

Date: 2026-08-29  
Scope: read-only production, sealed Round 4 candidate, prior rejected Round 3 package, authored full-resolution body, pinned OAT project/toolchain, and read-only Steam fastfiles. All critic-created files are contained under this directory.

## Verdict

**PASS - staging promotion review only.**

The sealed Round 4 candidate passes the required fresh-blind visual gate, exact GLB containment gate, prior-regression gate, isolated OAT compile/unlink gate, pool-neutrality gate, and final read-only containment rehash. It may be considered by a separate staging promotion review. This verdict does **not** authorize production replacement, install, commit, or Steam modification.

Production remains unchanged.

## Sealed inputs

| Input | SHA-256 | Result |
|---|---|---:|
| Production body | `E3ECF995A3431F0FD561774AB58495D7CB632CC9C444F0D4CD7E8CC13D470437` | Verified |
| Round 4 candidate | `B8F99F41F67AABD5C724E5584F43A48132C510A472A9D93C78C4F7FE152BB4F4` | Verified |
| Prior Round 3 body | `3544E7E44F4CE5623A31CB98CD4759AC93D81C1BACB8B414C03D80A378897931` | Verified |
| Production viewhands | `C6E3C50502E9FD01CB08B8DAFED17CC8C6026D8016C33C58630FEC3DC23FD803` | Verified |

Both Round 4 body files are exactly 660,820 bytes.

## Fresh-blind visual gate

The critic rendered production and candidate independently in Blender 3.6 with the same production DDS, material setup, orthographic framing, six fixed yaws, key/fill/rim lights, Eevee settings, color management, and 1536x2048 output. One OS-CSPRNG mapping was applied consistently to every view.

- Sealed key SHA-256: `CFE02BAD7CE55038D659E14C4F322CB3133A0F0796432B197C98284D2A115D64`
- Frozen ballot SHA-256: `A66851B0E1BFBAA912DC8625F87A00851AD1041954C419A1052100AC4B8DF601`
- Ballot freeze receipt: `authoredReferenceConsulted=false`, `identityKeyOpened=false`
- Frozen vote: B wins rear, rear-left three-quarter, and rear-right three-quarter
- Reveal: `A=production`, `B=candidate`

| View/gate | Result | Independent evidence |
|---|---:|---|
| Rear | Candidate wins | Better lower-rocker/white-arc centering and central registration. |
| Rear-left three-quarter | Candidate wins | Better circular arc and lettering continuity through the oblique view. |
| Rear-right three-quarter | Candidate wins | Same registration improvement; candidate completes the required sweep. |
| Front | Exact tie | 0 differing RGBA pixels; no difference bounding box. |
| Left | Allowed edge-only tie | 3,395 pixels in a 34-pixel-wide upper-back strip; 0 alpha differences. |
| Right | Allowed edge-only tie | 2,199 pixels in a 23-pixel-wide upper-back strip; 0 alpha differences. |
| Alpha/silhouette | Exact tie | 0 alpha-different pixels in all six views. |
| Beard, neck, vest island, wrists, pants, boots | Exact tie | All front pixels are identical; no new artifact is present. |

The authored full-resolution body was introduced only after the ballot hash was frozen. It is explicitly non-voting. Its body SHA-256 is `90E3DEE917126F61C8703EE0B8B3E34FF0DCE3489CFDE2F8CF0910A689D30180`; the post-reveal sheet confirms the intended Gray Slammers/Gridlock circular rear emblem.

## GLB containment

The critic-owned GLB parser maps every changed file byte back to its accessor row. Round 4 changes exactly 110 file bytes in exactly 24 `TEXCOORD_0` rows of accessor 2, affecting 25 triangles:

`467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 482, 484, 485, 490, 493, 497, 498, 499, 503, 504, 505`

Affected position bounds are `X[-8.430279,-6.683447] Y[46.648232,60.194092] Z[-5.924678,5.094744]`, which isolates the centered upper-rear emblem surface. `GLB_AUDIT.json` lists every changed byte offset and each production/candidate UV pair.

All other data is byte/semantic identical:

- GLB header, chunk descriptors, and entire JSON chunk
- topology, positions, normals, tangents, indices, joints, and weights
- nodes, scenes, hierarchy, skins, skeleton, inverse-bind data, and material slots/names
- all unchanged `TEXCOORD_0` rows and every non-UV accessor
- filename and candidate-folder scope; the candidate folder contains only the sealed body

The Round 4 candidate supplies no texture, material, or viewhands override. Both render and OAT use byte-identical production dependencies. Key frozen hashes include:

| Dependency | SHA-256 |
|---|---|
| Body atlas DDS | `EADC7C86A60B395A9EFA3EF11D13CD6FB290411E307F673B585154BE4F17774F` |
| Main body material | `709BADC6010409A414A203EAD513E541124F1AF1222C4BA892899675346F1761` |
| Body glass material | `B7E44930FEF689D846C295EFFF9A1247858B7815D4AFBEDF4FEE35C12D9D4C8C` |
| Viewhands material | `E18CF04E34F3865A11B0B43F981FDC9F1D487C0AD7BFA3E52E6E21093D5AAC1F` |
| Viewhands glass material | `3ECEEA458140AEE38DA002E2A346ED295019919BC2388740125DB408880DD58B` |

Decoded atlas semantics are frozen independently: RGB SHA-256 `14D53398391D24001A84CD95F9B42ED8B61801E2B65D1297ED78E274F8ECF672`, alpha SHA-256 `D4D7AED42D7DD9C12B93FB815E153E6A3D62A2951453DDEA0BB5D83374783D8B`, dimensions 2048x2048. Round 4 changes neither RGB nor alpha.

## Round 3 regression

The rejected global remap changed 30,807 file bytes and 8,210 UV rows across essentially the full body (6,055 affected triangles), and its package rewrote 579,448 alpha pixels. Round 4 changes 110 bytes, 24 rear rows, 25 triangles, and zero atlas pixels.

Same-camera post-reveal comparisons confirm that Round 3's fragmented beard, colored neck/front-vest islands, patch breakup, backing-like grenade mark, stretched side/rear vest wedge, lower-leg chevrons, and alpha rewrite are absent. Round 4's beard/neck, vest, wrist, pants, and boot regions are pixel-exact to production, while its only side-view differences are the permitted rear-emblem edge pixels.

## Independent OAT

The final isolated OAT v0.32.0 run compiled production and candidate separately, then unlinked each fastfile as both `XMODEL_EXPORT` and `GLTF`.

| Metric | Production | Candidate |
|---|---:|---:|
| Compile warnings/errors | 0 / 0 | 0 / 0 |
| XMODEL_EXPORT unlink warnings/errors | 0 / 0 | 0 / 0 |
| GLTF unlink warnings/errors | 0 / 0 | 0 / 0 |
| Body vertices/faces/bones | 8,365 / 6,060 / 51 | 8,365 / 6,060 / 51 |
| Body objects/materials | 2 / 2 | 2 / 2 |
| Hands vertices/faces/bones | 6,473 / 7,672 / 71 | 6,473 / 7,672 / 71 |
| Hands objects/materials | 2 / 2 | 2 / 2 |
| Fastfile images/materials/XModels | 4 / 4 / 2 | 4 / 4 / 2 |
| Fastfile bytes | 437,400 | 437,416 |

Body bone order/parents and material names are identical. Compiled hands content is identical after excluding the expected hash-specific harness zone-origin comment. Candidate body and hands remain 2,446 and 1,391 vertices below the previously fresh-compiled production roster maxima; no body, hands, material, image, or XModel pool increases.

## Containment

The final containment audit rehashed every frozen production body/viewhands/material/image dependency and found no change. It also verifies unchanged hashes for the pinned OAT binaries/project fastfile and all five Steam fastfiles read during compilation. Every generated render, copied OAT dependency, cache, fastfile, unlink product, log, and report resolves under this critic directory.

No production promotion, install, commit, Steam write, or production asset write was performed.

## Residual note

The non-voting authored body shows a cleaner emblem than either runtime body because production's existing modeled dark overlaps still interrupt the center. Those overlaps are byte-identical in Round 4 and are not a candidate regression. The candidate satisfies the stated relative visual gate without expanding scope to geometry or unrelated UVs.

## Final action

Retain production unchanged. Permit only a separate **staging promotion review** of the sealed Round 4 GLB. Any production change still requires its own explicit promotion decision.
