# XI FreezeTag Lethal Sentry Round 3 Independent Critic

Generated: 2026-08-25 UTC  
Verdict: **PASS**  
Hard bars: **13/13 PASS**

## Verdict

The mounted Round 2 candidate is one unmistakable full-size old-style machine gun on one coherent, grounded, sweep-capable mount. It has no second weapon, launcher, minigun, detached ammo box, loose belt/ammunition, deployed bipod, or overlapping weapon assembly. It clearly beats the rejected production composite represented by the user's controlling screenshot and the reproducible production GLB.

The corrected identity comparison also passes: the actual ground Frost Sentry remains a much smaller compact pedestal turret, visually distinct from the lethal sentry. The airborne Defroster Drone is a third, separate model and is not used as a substitute for the Frost Sentry in this verdict.

This is a visual/geometry/runtime-structure PASS, not a direct production promotion recommendation. The candidate uses four `audit/...` material names with no embedded textures, and material binding, compiled XModel behavior, and in-game shading were outside the allowed method.

## Identity Correction

The critic's first post-reveal diagnostic used the airborne Defroster Drone as the requested small ground-sentry control. That inference was wrong and is withdrawn. Before this verdict:

1. The actual ground Frost Sentry was identified from `_assetprofile.gsc::getFrostSentryModel()`.
2. Its GLB was independently hashed and structurally inventoried.
3. A new same-scale render was made against it.
4. The drone inventory/render was explicitly relabeled as an airborne identity control.

Selector evidence:

| Role | Selector | Asset | SHA-256 |
|---|---|---|---|
| Ground Frost Sentry | `getFrostSentryModel()` | `worldmodel_t8_sentry_deployed` | `580A7381B916FAFFBBBC812F785A42F1EBE61100B15ED4CE490B983356C9AD9E` |
| Lethal Sentry Grenade | `getSentryGrenadeModel()` | current production: `worldmodel_xi_sentry_old_clean` | `58C3532307E16A3F60E61A6DEC6A2FEBA3E267F625917AA1399EAEE4A21AEBAD` |
| Airborne Defroster Drone | `getDefrosterDroneModel()` | `worldmodel_t8_defroster_drone` | `2737870FF7A67C75D33DDD68D2158D7721E852869F5DA755207714A8AC5E15D5` |

Selector path: `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/zone_raw/xi_ftag/xi_ftag/_assetprofile.gsc`  
Selector SHA-256: `2247DDDA60A2E38F7D2842EAA4528A6E8A6E8B2390198CAB3F9F140F36CBC20C`

**Round 2 scope is the lethal Sentry Grenade candidate only. It changes neither the ground Frost Sentry nor the airborne Defroster Drone. No production asset was changed or promoted by Round 3.**

## Scores

| Category | Score / 10 | Finding |
|---|---:|---|
| Visual coherence | 8.5 | One gun, yoke, center post, and four-foot base read as one emplacement. |
| One-gun readability | 9.0 | Receiver, stock, and single long barrel remain continuous in all views. |
| Grounding | 8.5 | Four feet visually contact one plane; independent support-hull analysis passes. |
| Runtime suitability | 8.5 | 1,749 triangles, four surfaces, 12 joints, no textures, duplicates, degenerates, or non-manifold edges. |
| Audit integrity | 8.0 | Independent parser and sealed scoring are strong; score reflects the corrected identity error and weak Round 2 blind/ground evidence. |
| Overall mean | **8.5** | PASS |

## Candidate And Controls

Exactly two GLBs exist under the builder's `candidate` scope, and both were inventoried without trusting filenames:

| Role after content classification | Exact path | Bytes | SHA-256 |
|---|---|---:|---|
| Mounted lethal candidate | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_builder_round2/candidate/worldmodel_xi_sentry_lethal_round2_mounted_lod0.glb` | 165,964 | `D6F0827EB196E27966AE959FCAC026C20F98E312E7FB9C80CD9045824AEB9EE1` |
| Surf0 SAW control | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_builder_round2/candidate/control_weapon_saw_mg_setup_surf0_proxy_lod0.glb` | 81,208 | `8AEF0A1EA1F250B5444C75AD7EE1504845545291E14216A9D6E6483A05FF53C1` |

Additional read-only controls:

| Control | Exact path | Bytes | SHA-256 |
|---|---|---:|---|
| Rejected production lethal composite | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/zone_raw/xi_ftag/model_export/worldmodel_xi_sentry_old_clean_lod0.glb` | 304,020 | `58C3532307E16A3F60E61A6DEC6A2FEBA3E267F625917AA1399EAEE4A21AEBAD` |
| Actual ground Frost Sentry | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/zone_raw/xi_ftag/model_export/worldmodel_t8_sentry_deployed_lod0.glb` | 515,016 | `580A7381B916FAFFBBBC812F785A42F1EBE61100B15ED4CE490B983356C9AD9E` |
| Airborne Defroster Drone | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/zone_raw/xi_ftag/model_export/worldmodel_t8_defroster_drone_lod0.glb` | 173,136 | `2737870FF7A67C75D33DDD68D2158D7721E852869F5DA755207714A8AC5E15D5` |

## Concealed A/B Result

The assignment was randomized and sealed before renders or scores. Both artifacts were rendered together in one scene per view using one camera, one world scale, one neutral material, one light rig, and one ground plane.

- Commitment: `5428E0F1F7248249184C0BCE9CB652A5B5576EB579522137BBD7D706224C2B73`
- Scores recorded with mapping unknown: `2026-08-25T20:12:33.1642419Z`
- Mapping revealed after scoring: `2026-08-25T20:13:27.936768Z`
- Commitment verification: PASS
- A: visual mean `8.6`, visual hard bar PASS
- B: visual mean `5.4`, visual hard bar FAIL
- Blind preference: A
- Reveal: A = mounted candidate `D6F082...`; B = bipod-only control `8AEF0A...`

The five final views are front, side, rear three-quarter, top-ish, and gameplay-height. A reads as one long machine gun on a stable panning mount. B reads as one gun, but only on a front bipod with no stable sentry pan/yoke support.

## Direct Candidate Inventory

| Mesh | Interpreted role | Vertices | Triangles | Material | Joint |
|---|---|---:|---:|---|---|
| `surf1.001` | Four-foot legacy stand | 864 | 564 | `audit/xi_round2_tripod_olive` | `tag_base` |
| `Cylinder.003` | Mount hardware | 216 | 132 | `audit/xi_round2_hardware_brass` | `tag_swivel` |
| `Cylinder` | Mount yoke | 552 | 296 | `audit/xi_round2_mount_steel` | `tag_swivel` |
| `Mesh_0.001` | Single SAW machine gun | 1,211 | 757 | `audit/xi_round2_saw_gunmetal` | `tag_gun` |

Totals and integrity:

- Bounds: `41.920850 x 38.960377 x 38.201343`
- Vertex pool / referenced entries: `2,843 / 2,843`
- Triangles: `1,749`
- Meshes / primitives / materials: `4 / 4 / 4`
- Skin / joints: `1 / 12`
- Topological components: `78`; global assembly clusters: `1`; largest cluster: `100%` of triangles
- Loose vertices / degenerate triangles / redundant duplicate faces: `0 / 0 / 0`
- Boundary / non-manifold edges: `255 / 0`
- Hidden mesh nodes / unreferenced meshes / unreferenced materials: `0 / 0 / 0`
- Normals: `2,843`, all finite and unit length; zero negative winding tests
- All accessor numbers, world matrices, skin weights, and geometry are finite

The 255 boundary edges expose open-shell construction in the retained source art, not hidden duplicate geometry. All four materials are double-sided, which is a small fill-cost caveat, but the four-surface and 1,749-triangle budget remains conservative for this CoD4 asset class.

## Prohibited Geometry

| Rejected feature | Result | Exact evidence |
|---|---|---|
| Deployed bipod | Absent | Candidate gun has 757 faces; every face matches the 868-face surf0 control after `tag_flash` alignment. Exactly 111 control faces are removed from the bipod region bounded by `[4.330039,-5.555156,0]` and `[8.621229,5.555154,10.329177]`. |
| Detached ammo box | Absent | Candidate weapon is an exact surf0-only control subset. The only non-weapon meshes are stand, yoke, and mount hardware. |
| Loose belt/ammunition | Absent | No belt/ammo primitive or detached silhouette exists; top-ish and rear views show only the gun and mount. |
| Minigun | Absent | One elevated elongated mesh exists. No rotary barrel cluster appears in geometry or renders. |
| Launcher | Absent | No second weapon primitive, launcher silhouette, or launcher tag exists. |
| Secondary/spare weapon | Absent | Elevated elongated assembly count is exactly one. |
| Detached/overlapping assembly | Absent | All four candidate primitives form one global assembly cluster and remain visually joined around one yoke. |

All `1,211` mounted weapon vertices match control vertices within `1e-5`; maximum nearest distance is `0.0000041285`. All `757` mounted faces match control faces, with zero mounted faces absent from the control.

## Grounding And Sweep

The four stand-foot minimum heights are `0.000000`, `0.082990`, `0.095828`, and `0.187164`. The maximum spread is `0.187164` units, about `0.49%` of total model height, and all four feet read on one floor with contact shadows.

- At a `0.10` support band: hull area `712.919796`; centroid margin `-0.655987`.
- At a `0.20` support band: all four feet participate; hull area `1425.839001`; centroid is inside by `18.221908`.

This passes, but it also shows why the builder's minimum-Z-only grounding claim was insufficient by itself.

The hierarchy is coherent: `tag_origin -> tag_base -> tag_swivel -> j_pivot -> j_hinge -> tag_gun -> j_barrel_anchor -> j_barrel -> tag_barrel -> tag_flash`. `tag_brass` and `tag_clip` descend from `tag_gun`. The stand's 864 vertices stay on `tag_base`; 768 yoke/hardware vertices rotate on `tag_swivel`; 1,211 gun vertices follow `tag_gun`. A whole-entity yaw remains visually coherent, while yawing `tag_swivel` is the more physically plausible planted-base sweep.

`tag_flash` is at `[16.145991,0,35.915600]`; its local +Y resolves to world +X. It differs from barrel-to-flash by only `0.048968` degrees and from the gun's PCA axis by `2.263471` degrees. All 12 transforms are finite, orthogonal, unit scale, determinant 1, and cycle-free.

## Actual Frost Sentry

The corrected same-scale diagnostic clearly distinguishes the models:

| Metric | Lethal candidate | Ground Frost Sentry |
|---|---:|---:|
| Bounds X | 41.920850 | 23.336943 |
| Bounds Y | 38.960377 | 17.000000 |
| Bounds Z | 38.201343 | 20.755417 |
| Triangles | 1,749 | 5,641 |
| Physical read | Tall four-foot field mount and full-size long machine gun | Small circular pedestal and compact pistol-like turret |

The lethal model is `1.8405x` the Frost model's height, and its full assembly's longest extent is `1.7963x` the Frost model's. Its single gun alone is `38.855` units long versus the Frost model's entire `23.337`-unit longest extent. The Frost model is physically smaller despite denser source geometry.

Frost structural inventory: one mesh/primitive, 7,043 vertices, 5,641 triangles, one material, one skin, two joints, bounds `23.336943 x 17.000000 x 20.755417`, exact floor Z `0`, support-hull area `221.191017`, centroid inside by `6.952333`, no loose vertices or degenerates, one redundant duplicate face, four non-manifold edges, and all numeric data finite. These are properties of the untouched production control, not Round 2 changes.

Corrected render input hashes before and after rendering were identical:

- Lethal: `D6F0827EB196E27966AE959FCAC026C20F98E312E7FB9C80CD9045824AEB9EE1`
- Ground Frost Sentry: `580A7381B916FAFFBBBC812F785A42F1EBE61100B15ED4CE490B983356C9AD9E`

## Rejected Production Comparison

The user's live screenshot remains controlling qualitative evidence. The reproducible production GLB shows the same rejected failure: a stand wrapped around bulky overlapping turret/clutter with a detached minigun assembly at the front. The Round 2 candidate replaces that pile with one continuous machine-gun silhouette and one mount.

| Metric | Round 2 candidate | Rejected production |
|---|---:|---:|
| Pooled vertices | 2,843 | 5,323 |
| Triangles | 1,749 | 3,742 |
| File bytes | 165,964 | 304,020 |
| Redundant duplicate faces | 0 | 30 |
| Degenerate triangles | 0 | 1 |
| Non-manifold edges | 0 | 69 |

The candidate uses `53.26%` fewer triangles, `46.59%` fewer pooled vertices, and `45.41%` fewer file bytes.

## Audit Integrity

The independent parser reads GLB JSON/BIN directly, evaluates scene and bind-pose transforms, converts glTF Y-up to audit Z-up as `(x,-z,y)`, and computes topology, AABB assembly clustering, normals, finite values, support hulls, and tag axes. Builder validation JSON was not used for candidate measurements.

Builder claims independently corroborated: candidate/control hashes, geometry totals, the 111-face bipod trim, surf0-only weapon ancestry, and rejected production identity.

Builder evidence not accepted at face value:

- Round 2's own A/B map is disclosed in its render report, so it was not treated as concealed blind scoring.
- Round 2 grounding checks minimum Z but does not establish the four-foot support hull.
- Round 3 initially conflated the airborne drone with the ground Frost Sentry; this report records the error and bases the verdict only on the corrected inventory and render.

## Biggest Remaining Gap

The single biggest remaining visual gap is proportion: the oversized four-foot legacy stand dominates the machine gun, especially from the front and gameplay height. It reads as a heavy field emplacement rather than a compact sentry. This does not break one-gun readability, grounding, sweep plausibility, or distinction from the small Frost Sentry.

The separate release-evidence gap is material/runtime binding. The geometry is suitable for handoff, but direct promotion is withheld until a permitted materialized XModel and in-game check proves the four audit materials.

## Evidence Files

Machine-readable verdict:

`C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_critic_round3/RESULT.json`

Inventories:

| File | SHA-256 |
|---|---|
| `inventory.json` | `A7B6311DEE5C5A2280F2C467D12B1CFA9097C62800E263E4A63ACD126AC6D763` |
| `rejected-production-control-inventory.json` | `40589EB253B5EA5473EEA4A1A41FAF8A31970EB171016D14E1BF6A42339524C2` |
| `frost-sentry-control-inventory.json` | `5F447822188D03E0CC8EFCDA77E433D20DF9E69F40E45D4B314F5F09DC30F723` |
| `defroster-control-inventory.json` (airborne only) | `82ABD2DF9058C92BB011B9C1E0F55BBC40D074947AC16EF5659B1570A3F2DC33` |

Blind evidence:

| File | SHA-256 |
|---|---|
| `blind/commitment.json` | `C0A6AE16F92882C397E126A2AE7B651063FE0E484900F0D889ABCCF96D574B65` |
| `blind/blind-scores.json` | `A39BC0F0B2DE22BCE008F79081669957CB56A359B1AF158488649C9006CA9303` |
| `blind/mapping-reveal.json` | `1760E12C4E58CB21E27C6AFB593383679AB23BAB5E2AAC4E759478F98FF1E65C` |
| `renders/blind-render-manifest.json` | `141DC4063641B463A1C577FCE471A944DE6AC0608D7D46C1FF41FC596B82625A` |

Final blind render hashes:

| View | SHA-256 |
|---|---|
| Front | `FC035A543500687499912653CBA3F8DFD8691ED3B97E1AFDC8B9780336FB999C` |
| Side | `C27E0C459A3BDEABFB1EA20C7A978158514A525EF52BE8CE144A4009184DCB92` |
| Rear three-quarter | `5A5598B090E951609D264767CD8D66B27E8248F09DC21DCA87AC3B0E3E28DBBC` |
| Top-ish | `FAB77998B03A7C7C9FB4734FC478D6BAD3AD90B09CCCDCB4ED092FDC2333E561` |
| Gameplay-height | `B3E1F48EE691F04D6F7C202CCAF14E5A80403BADFDE9B6ED837E1862D0A0CC6F` |

Post-reveal diagnostics:

| Evidence | Exact path | SHA-256 |
|---|---|---|
| Corrected lethal vs ground Frost Sentry | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_critic_round3/renders/diagnostic-lethal-vs-ground-frost-sentry.png` | `62C0CB3CDB0CB09C5136A28FFF473F93AE827A25C41B38A5366A3D19352399C3` |
| Lethal vs airborne drone identity control | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_critic_round3/renders/diagnostic-lethal-vs-defroster.png` | `2A8F8D5EA9C0773DD9F01CDE0EF6F6723D0CE88F1214900CD2BE7D8AE0649132` |
| Candidate vs rejected production | `C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_critic_round3/renders/diagnostic-round2-vs-rejected-production.png` | `E6CF367836477BF9CEE26FC8057924F991AE7864C5A01D72C24E1335F88259C1` |

Corrected Frost render manifest SHA-256: `7750FFFEC4ECB76D0125EB7E94EE66BA6782BBD693B871E11203EAA505CD0E3A`  
Airborne identity render manifest SHA-256: `6DF26DD91B0BD3F84D43E7AB4CAA074424CD22E73724DF598B60D50810A991BF`  
Rejected comparison manifest SHA-256: `ECF0833BEC3879B1C9F20DB4CCE2EDA191405ADA45FEC5BDD81EE98DDAF0F196`

## Scope Compliance

All writes are under:

`C:/Users/shawn/Documents/Codex/2026-08-03/ok/work/cod4-freezetag/xi_ftag/.audit/sentry_critic_round3`

No production, builder, gameplay script, build file, Steam file, or git state was edited by this audit. No build, link, install, Steam launch, or game launch was performed. Work consisted of offline GLB parsing, hashing, and headless matched rendering only.

A read-only final `git status` showed an existing modified `_assetprofile.gsc` and the three production GLBs as untracked. Those entries were used as read-only evidence and left untouched; the GLB hashes and last-write times remained stable through the audit.
