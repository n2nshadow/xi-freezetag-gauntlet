# Alice41 Crash Rigor Mortis Body Round2 Builder Report

Generated: 2026-09-05 09:50 UTC

## Disposition

**Offline builder evidence: PASS. Production release: HOLD.**

This is builder-owned evidence for the single authorized LOD1/LOD2 lower-leg repair. It is not an independent critic approval and emits no promotion manifest. The game was not built, installed, or launched.

## Scope And Repair

Round2 was seeded from the authoritative round1 candidate. Only these runtime assets differ from round1:

| Asset | Round1 | Round2 | Geometry |
|---|---|---|---|
| `playermodel_xi_alice_4_1_lod1.glb` | `66B0CFE671FA152985E8B1497A158B2B387B1FDA6AB3DE9FBE1BB6AEDB7FF228` | `B74D982EB829A1FCBE5BAD302816559A802B84E38A05566890BF97B25827E090` | 8,324 vertices; 7,000 triangles |
| `playermodel_xi_alice_4_1_lod2.glb` | `F97549B2B56F0F311E6680A7E74E0FC265B38DD06FAC37837661DED3B1EC8EA0` | `303C35C49F20968ADCAE869605A9202B0A58B66A0F5149EB8C7BD5CEC77F660D` | 6,328 vertices; 4,500 triangles |

The decimator now derives a spatial guard from the untouched aligned source bounds. For LOD1 and LOD2, every target-group face intersecting the lower 38% of the source vertical span is protected. The guard is evaluated in both bulk and priority passes, alongside the frozen material-boundary and small-component protections. The lower-body cutoff is Blender Z `27.667375926971435`; 773 lower-body vertices are protected in each bulk pass. The priority groups contain no vertices in that spatial band, so their measured lower-body intersection is zero while the guard remains active.

This repairs complete shin-to-boot/foot chains rather than satisfying a lower-band count target. Visual silhouette evidence is the authoritative gate.

## Preserved Runtime Data

The repair receipt and noninterference replay prove these data remain byte-identical to round1:

| Preserved asset/class | SHA-256 or result |
|---|---|
| LOD0 | `A576E4C7BFC1B614FF400F58B20CEA269278B7FD9959AF7888DBA585EEC9884F` |
| LOD3 | `59B741EB46A61DBC98E2EB7628DF871F71C6D129B34FED02D77E119C7DAC5569` |
| XModel descriptor | `3F6026D6AC5410F3056E15EDD6C6F4054E9DE7E6DFC0295CBDDFBBB9E4000DB9` |
| Opaque material | `25BF2DBF6710DFE1520679F845E663F41DFD9EBFC9EAC5A3078F0C6571C6738D` |
| Cutout and glass material files | `CB3A85317FB1E604356F5456902645E2A12D3F8559C99FCA0525EAF0777F743C` |
| Color IWI | `976798D4DEDBDFAB30FB565EDF601F099F49995906D8C468811DB47FE8C50CF6` |
| Specular IWI | `6525D68B2B4269CBD816F8F6BFEC861B09DAA0BF56BEEA43D61934E8172015BF` |
| Source tree | No added, removed, or changed files |

All four candidate LODs retain the exact 51-joint stock order, hierarchy, local bind, and inverse bind. Every vertex has at most four influences, the serialized positive-weight floor is 0.0102, all required channels are finite, UV tile classes remain correct, and every primitive uses `uint16` indices below the 65,535 limits.

## Four-Angle Visual Gate

Fresh deterministic evidence contains 39 textured views and 16 all-opaque clay views. All renders are nonblank and contain measurable lower-body pixels. The repaired LODs compare to unchanged passing LOD0 as follows:

| LOD/view | Full silhouette IoU | Lower-body IoU | Clay gate |
|---|---:|---:|---|
| LOD1 front | 0.952690 | 0.983337 | PASS |
| LOD1 3/4 | 0.939699 | 0.959781 | PASS |
| LOD1 side | 0.924193 | 0.977563 | PASS |
| LOD1 back | 0.952530 | 0.984060 | PASS |
| LOD2 front | 0.921685 | 0.974636 | PASS |
| LOD2 3/4 | 0.914030 | 0.940824 | PASS |
| LOD2 side | 0.903326 | 0.972883 | PASS |
| LOD2 back | 0.921030 | 0.975318 | PASS |

The minimum repaired lower-body IoU is 0.959781 for LOD1 and 0.940824 for LOD2. Front, 3/4, side, and back clay silhouettes all show continuous shins joined to the boots and feet. Pixel replay also places the candidate much closer to authored source than current production: mean source silhouette IoU 0.961798 versus 0.698648.

The sealed self-blind review was written before reveal. Reveal mapped source=A, candidate=B, current=C; the candidate tied the source-faithful identity bar and clearly beat current. The randomized LOD mapping was I=LOD0, II=LOD2, III=LOD1, IV=LOD3; all four were marked intact in textured and clay sheets. Verdict: `PASS_LOD1_LOD2_LOWER_LEG_CONTINUITY`.

## Five Stock Poses

| Pose | Frozen sample frame | Candidate edge ratio p99.9 | Result |
|---|---:|---:|---|
| idle | 63.00 | 4.380960 | PASS |
| run | 6.72 | 5.208137 | PASS |
| crouch | 142.50 | 5.030794 | PASS |
| fire | 6.30 | 4.826256 | PASS |
| death | 43.46 | 5.210341 | PASS |

All poses parse, deform, render, and pass the frozen stock-relative edge checks with no collapsed-edge failure.

## OAT 0.32 Closure

The isolated OpenAssetTools 0.32 replay passes link, list, corrected complete dump, and semantic roundtrip. Link/list/complete-dump logs finish with 0 warnings and 0 errors. The fastfile is 814,685 bytes with SHA-256 `81DB3C0A6BEAFB05DC4BF3B93E8A4C07A7ECA0A38D54BCCE587239B7C481D008`.

Both dumped custom IWIs are byte-exact. All four LOD semantics and the normalized XModel descriptor pass. Maximum observed roundtrip deltas are: position 0; normal 0.006895542; UV 0.000488222; weight 0.000045538; local bind 0.000009537; inverse bind 0.005043983. OAT may reorder its dumped skin-joint array; validation remaps by exact bone name and confirms hierarchy, bind, and influence semantics.

The initial dump diagnostic, which omitted the candidate image search path, is retained and explicitly superseded by the clean corrected dump.

## Package And Noninterference

The canonical replacement adds 0 runtime XModels, 0 mod-exclusive XModels, 1 material, and conservatively 1 custom image. Projection remains 993 runtime XModels, 70 mod-exclusive XModels, and 1,711/2,048 materials. The signed package baseline is already above the repository XModel safety limit (993 versus 990), so the pre-existing production HOLD remains; this repair causes no new envelope break.

Noninterference replay passes:

- All 329 critic-sealed protected round1/origin/production/shared-tool/Steam records remain byte-identical.
- All 359 files enumerated by the prior critic manifest remain byte-identical, with no additions or removals.
- Round2 source is byte-identical to round1.
- Round2 candidate has exactly two deltas: LOD1 and LOD2.
- LOD0, LOD3, descriptor, materials, IWIs, production fastfiles, OAT executables, and stock Steam fastfiles are unchanged.
- No promotion manifest exists.

No production, Steam, shared tool, prior builder/critic evidence, viewarm, weapon, menu, or other-operator asset was written. No game build, install, or launch was performed.

## Evidence Index

- `metrics/lod12-repair-build.json`: scoped rebuild and protected-file receipt.
- `metrics/round2-validation.json`: candidate validation.
- `evidence_round2/machine/machine-audit.json`: structural/material/IWI/OAT machine replay.
- `evidence_round2/machine/render-analysis.json`: textured and clay pixel measurements.
- `evidence_round2/blind/reveal-and-verdict.json`: sealed self-blind reveal.
- `evidence_round2/machine/pose-and-render-manifest.json`: five stock poses and render jobs.
- `evidence_round2/machine/oat-closure.json`: OAT 0.32 closure.
- `evidence_round2/machine/pool-envelope.json`: package-budget replay.
- `evidence_round2/machine/noninterference.json`: exact allowed-delta and protected-input proof.
- `SHA256-MANIFEST.json`: complete round2 file inventory, excluding only its self-referential hash.

## Builder Conclusion

`PASS_OFFLINE_BUILDER_EVIDENCE_LOD1_LOD2_SHIN_BOOT_CONTINUITY`

The requested repair is complete at the builder-evidence level. Independent critic review and any later authorized live-engine test remain separate gates; production promotion remains on HOLD.
