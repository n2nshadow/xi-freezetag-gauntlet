# Ghost operator atlas round-3 independent critic

Date: 2026-08-29  
Scope: read-only production, sealed candidate, authored reference, prior evidence, and project-tool inspection. Critic artifacts were written only under this directory. Nothing was promoted.

## Verdict

**FAIL/HOLD. Do not promote the round-3 Ghost atlas candidate.**

The candidate is structurally neutral and compiles cleanly, but it loses the sealed blind visual comparison to production and introduces multiple hard-veto material failures. Its one relative improvement, a somewhat more recognizable central rear emblem in some views, does not offset the new beard, neck/vest island, opaque/backing-like, vest-stretch, and lower-leg UV artifacts.

**Largest remaining gap:** source-surface correspondence inside shared atlas tiles. The global nearest-triangle projection changes 8,210 of 8,939 UV rows, but tile containment does not stop a beard, decal, vest panel, or lower-leg vertex from landing on the wrong disconnected authored island within the same tile.

**Smallest next builder scope:** restart from production and repair only the rear-vest emblem loops. Freeze the production atlas RGB/alpha, both material JSON files, and every UV row outside an explicit rear-emblem vertex mask. Use source-surface/component identity, not tile-only proximity, and require the authored top rocker and central Gray Slammer/Gridlock emblem to remain recognizable in rear and both rear three-quarter views.

## Controlling findings

1. **The candidate lost the blind review.** The sealed mapping was verified before reveal as `A=production`, `B=candidate`. Production scored 26/40 and candidate 14/40. Candidate lost six of eight matched views and tied two; neither side earned an absolute release pass.
2. **Candidate visual vetoes are source-unproven.** Candidate B shows a fragmented patchwork beard, colored random islands around the neck/front vest, patch-edge breakup, a white backing-like grenade mark, a large dark stretched vest wedge, and blue/white lower-leg chevrons. These are absent from the authored card and from production A.
3. **The rear vest remains disqualifying.** Production already fragments the authored back emblem. Candidate makes part of the central emblem more recognizable in one rear view but still breaks it and adds other large wedges; it does not close the controlling production gap.
4. **The atlas alpha rewrite is not neutral.** Decoded RGB is byte-identical, but 579,448 alpha pixels change. Opaque pixels rise from 2,298,134 to 2,877,582; zero-alpha pixels fall by 125,637 and intermediate-alpha pixels fall by 453,811. The blind render does not validate these changes as authored cutouts.
5. **Structure and OAT are clean but insufficient.** Raw GLB containment, compiled counts, skeleton, weights, viewhands, and pool usage all pass. Those facts do not rescue the material vetoes.

## Hard criteria

| Gate | Result | Independent finding |
|---|---:|---|
| Face / beard semantics | **FAIL** | Candidate beard is a noisy patchwork; production and source are coherent gray/brown beard fibers. |
| Vest / patch / shirt semantics | **FAIL** | Candidate adds neck/vest specks, patch breakup, rear-emblem fragmentation, and a large side/rear vest wedge. |
| Jeans / knees / lower legs / boots | **FAIL** | Candidate adds conspicuous blue/white UV-stretch chevrons and source-unproven lower-leg shapes. |
| No opaque backing or random islands | **FAIL** | Candidate has a white backing-like grenade mark, colored neck islands, and large stretched vest/lower-leg regions. |
| Authored hair / glass / straps alpha | **FAIL** | Glass remains present, but the candidate package does not preserve the authored beard/hair read and rewrites 579,448 alpha pixels without a passing visual result. |
| No fragmented decals, cuffs, patches, holes, triangles | **FAIL** | Candidate triggers beard, vest, rear decal, pants/lower-leg, and triangle/wedge vetoes not proved by the source. |
| Only `TEXCOORD_0` differs in GLB | PASS | 30,807 bytes differ; zero are outside logical `TEXCOORD_0` bytes. |
| JSON / topology / positions / normals / indices | PASS | JSON chunk and document are exact; all listed accessors and indices are byte-identical. |
| Joints / weights / hierarchy / slots / filename | PASS | Exact raw equality; basename remains `playermodel_xi_ghost_5_1_lod0.glb`. |
| Viewhands / pool neutrality | PASS | Production hands input is unchanged; compiled hands payload differs only by harness zone-origin comment. No body or hands pool maximum is worsened. |
| Isolated OAT compile / roundtrip | PASS | Production and candidate compile and unlink with zero warnings/errors; all engine-facing counts match. |

## Blind review

The cryptographically randomized key was sealed at SHA-256 `421923944219870B4B2DF17B9469CD38324D8695390D6E48A33C9ECF95583F19`. The ballot SHA-256 is `1E807AB310A4230D725AD2CAFD4E17D45179A42D1632E7B1D199E5E96F19BE53` and was written before reading the key.

| Region | Production A | Candidate B | Result |
|---|---:|---:|---|
| Face / skin | 4 | 3 | Production preferred. |
| Beard / hair / glass | 4 | 1 | Production strongly preferred. |
| Front vest / patches / shirt | 4 | 2 | Production preferred. |
| Rear vest decal | 1 | 2 | Candidate relatively better, but both vetoed. |
| Wrists / cuffs / straps | 3 | 3 | Tie. |
| Jeans / knees | 3 | 1 | Production preferred. |
| Lower legs / boots | 4 | 1 | Production strongly preferred. |
| No random islands / backing | 3 | 1 | Production preferred; both remain below release. |
| **Total** | **26/40** | **14/40** | **Candidate loses.** |

Eight full views and five close-region panels are listed in `blind/MANIFEST-pre-reveal.json`. The supplied authored card is SHA-256 `6D698E7479E440F25A2CF755793E8E7C0E5B3810CF85C39AAFED598256FEAB4C`.

## Sealed hashes and containment

| Asset | SHA-256 | Verified |
|---|---|---:|
| Production body | `E3ECF995A3431F0FD561774AB58495D7CB632CC9C444F0D4CD7E8CC13D470437` | Yes |
| Candidate body | `3544E7E44F4CE5623A31CB98CD4759AC93D81C1BACB8B414C03D80A378897931` | Yes |
| Candidate DDS atlas | `37E22E89D9A49E1EFEBD6FD1FE5AF44251B7C66D9D0367595BFC472AFFC2F32A` | Yes |
| Production viewhands control | `C6E3C50502E9FD01CB08B8DAFED17CC8C6026D8016C33C58630FEC3DC23FD803` | Yes |

The body files are both 660,820 bytes. Candidate UVs are finite and inside `[0,1]`. Exactly 8,210/8,939 UV rows change, with maximum Euclidean UV delta `0.16312564`; all 30,807 changed bytes are inside `TEXCOORD_0`. JSON bytes, topology, positions, normals, indices, joints, weights, nodes, skins, scenes, hierarchy, material indexes/names, and model filename are unchanged.

The candidate DDS retains all decoded RGB pixels exactly and changes alpha only. This is independently recorded in `glb-containment-audit.json`.

## OAT compile and roundtrip

The final isolated package used the sealed candidate GLB, DDS, and candidate body material JSON files, with unchanged production specular and viewhands dependencies copied into a critic-only asset root. The sealed DDS was converted to a critic-only IWI using the pinned OAT v0.32.0 `ImageConverter.exe`. No production or builder file was changed.

| Metric | Production | Candidate |
|---|---:|---:|
| Link warnings / errors | 0 / 0 | 0 / 0 |
| XMODEL_EXPORT unlink warnings / errors | 0 / 0 | 0 / 0 |
| GLTF unlink warnings / errors | 0 / 0 | 0 / 0 |
| Compiled body vertices | 8,365 | 8,365 |
| Compiled body faces | 6,060 | 6,060 |
| Compiled body bones | 51 | 51 |
| Body objects / materials | 2 / 2 | 2 / 2 |
| Compiled hands vertices | 6,473 | 6,473 |
| Compiled hands faces / bones | 7,672 / 71 | 7,672 / 71 |
| Fastfile bytes | 437,400 | 440,976 |

Candidate body remains 2,446 vertices below the previously fresh-compiled production roster body maximum of 10,811. Hands remain 1,391 below the hands maximum of 7,864. The GLTF roundtrip has finite attributes, exact 51/71 skin-joint names and hierarchy, identical body non-UV accessor payloads, and identical hands accessor payloads. Hash-suffixed harness root-node names are the only expected naming difference.

Evidence: `oat-isolated-audit.json`, `oat-roundtrip-audit.json`, `oat-production.log`, and `oat-candidate.log`.

## Evidence limits

- These are deterministic Blender 3.6 and OAT diagnostics, not a fresh in-game runtime capture.
- The authored card provides the controlling front/three-quarter semantic reference. The retained full-resolution authored rear render was used only to confirm that the candidate's extra bars/wedges are not the authored rear emblem.
- Structural and compile passes prove ingestion and neutrality, not material correctness.

## Final action

Keep production unchanged. Do not promote any round-3 GLB, DDS/IWI, or material JSON. The next builder should be a production-started, rear-vest-emblem-only UV correction with a strict vertex mask and no atlas or alpha rewrite.
