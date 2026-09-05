# Iskra61 Body Round4 Builder Report

## Disposition

**Scoped repair complete. Structural/offline checks PASS. Overall HOLD: shared body pose calibration pending.**

The lead reports that fresh Ghost/Mara critics found the stock control itself folding in idle/fire.
Accordingly, the current pose renders and numeric checks are diagnostic only, not acceptance.
This builder has not repaired or modified the shared evaluator. Accepted viewarms, shared files,
production, Steam installation, and dashboard were not modified. No subagents or promotion manifest.

Write root: `F:\CodexData\Documents\Codex\2026-08-03\ok\work\cod4-freezetag-recovery-20260904\xi_ftag\.asset_staging\recovery_20260904\gauntlet\iskra61_body_round4`

## Concrete Repair

Exactly **217 positive JOINTS_0 index bytes** changed across four candidate GLBs.
Selected tile-34 metal vertices changed from `j_mainroot` to `j_shoulderraise_le`.
No vertex position, normal, UV, weight magnitude, index, triangle, material, texture, bind matrix,
node, hierarchy, descriptor, or other candidate byte changed. No geometry was removed.

| LOD | Triangles / cap | Vertices | Affected triangles | Edited vertices/bytes |
|---:|---:|---:|---:|---:|
| 0 | 28,499 / 28,499 | 32,546 | 72 | 84 |
| 1 | 22,000 / 22,000 | 26,776 | 71 | 83 |
| 2 | 15,000 / 15,000 | 20,152 | 13 | 25 |
| 3 | 10,000 / 10,000 | 14,770 | 13 | 25 |

The candidate subtree has 13 files: only its four LOD GLBs differ from authoritative Round3.
The twelve critic observations are not twelve unique meshes: they resolve to six indexed
metal components per LOD, repeatedly visible across the affected poses. Every one of the
twelve matched LOD0 face indices falls inside the exact repair selection.

See [exact scope](metrics/exact-scope-audit.json) and [source/repair audit](metrics/source-provenance-and-repair.json).

## Why Rebind, Not Delete

The authoritative raw torso SMD contains 1,938 triangles of
`mtl_c_t8_mp_spe_seraph_superhero_metal`. Ordered raw triangle UV corners match
the full source GLB after the authored atlas transform with maximum error
`4.463195802e-08`.
The independently fitted raw-to-source position transform has maximum residual
`0.0009579530123` model units.
Both checks constrain the ordered face correspondence; it is not based on appearance.

Combined position/UV nearest-surface correspondence maps every selected runtime vertex
to raw triangles rigidly authored on `j_charm` or `j_charm_heart`, never ordinary body metal.
Every match beats all non-accessory metal alternatives. Lower-LOD decimation explains
nonzero correspondence distances: maximum position distance `0.328349918`, atlas UV
distance `0.00298601179`. Per-vertex raw material line numbers, barycentric coordinates,
raw corners, competing distances, and exact changed byte offsets are retained.

The SMD explicitly makes both joints children of `j_charm_driver`.
The preserved white Kitty Six is authored on `j_charm`, and its already accepted Round3
runtime mapping is `j_shoulderraise_le`. Applying the same existing runtime driver to
its metal hardware and sibling heart preserves their authored bind-space relationship.
This is an explicit projection into the existing 51-joint runtime contract, not a claim
that the raw SMD directly names the CoD4 attachment. No new joint or guessed placement was added.
Deleting these source-derived accessory remnants would discard authored hardware.

## Preserved Identity

Every LOD retains the complete white Kitty Six: **332 triangles / 356 vertices / 12 indexed pieces**.
Its full selection and weights are unchanged from accepted Round3.
The separate colored hair/cutout shell remains **676 / 521 / 384 / 257 triangles** by LOD;
the authored 676/373/1 hair signature is not confused with the white accessory.
All other opaque/cutout geometry, source material palette, face, ears/headphones,
backpack, holster and clothing remain unchanged. The blind identity comparison shows
the same authored character, with the existing runtime reduction visible.

See [raw authored identities](metrics/raw-authored-identity-validation.json),
[blind identity](evidence/visual/blind-ab-identity.png), and
[white assembly](evidence/visual/white-assembly-all-lods.png).

## Structural And OAT Checks

- All 11 staged GLBs parse and pass finite attributes, valid indices, triangle area,
  normal, weight normalization, influence count, and joint-reference checks.
- Four candidate and four OAT-dumped LODs retain the stock 51-name parent hierarchy,
  two surfaces, and uint16-safe local indices. Candidate documents and binds are byte-identical to Round3.
- All four triangle caps are met exactly. IWI use is **524,360 / 1,048,576 bytes**.
- Opaque/cutout material contracts, DDS/IWI headers, diffuse payload equality,
  candidate-to-OAT IWI equality, and 91 PNG decodes pass.
- OAT v0.32 build/list/dump each reports zero warnings and zero errors.
  The new `iskra_6_1_round4_oat.ff` is **2,164,732 bytes**.
- Strict named-joint semantic roundtrip passes all four LODs:
  position tolerance 1e-5, normal .007, UV .0005, weight .0001,
  inverse bind .006. The complementary prior validator checks local binds at 1e-5
  and descriptor equality. These are structural checks, not pose acceptance.

See [OAT logs and fastfile](metrics/oat-validation.json),
[strict roundtrip](metrics/oat-strict-semantic-roundtrip.json),
[full roundtrip](operators/iskra/metrics/oat-semantic-roundtrip.json),
and [GLB validation](metrics/glb-validation.json).

## Diagnostic Visual Evidence Only

81 fresh renders include 20 pose/LOD combinations in two opposing full-body views,
10 unchanged Round3 pose controls, source/candidate identity views, and accessory details.
All 40 current candidate pose views contain zero distant >=2-pixel foreground components
under a joint-agnostic detector requiring at least 20 pixels of separation.
The Round3 controls still expose 22 confirmed observations across both directions;
the original front-view twelve observations are covered by the repair.
This establishes a visible scoped difference in these images, **not calibrated pose acceptance**.

The same proxy buffers show zero movement in every unaffected posed vertex, and shared-driver
metal-to-white distances differ by at most `4.352e-14`.
These algebraic diagnostics do not validate the shared evaluator's stock animation semantics.
No old numeric pose PASS is used in the acceptance gates.

The initial inherited run camera clipped a lower-LOD foot and contaminated its outer-background
sample. Shared A/B cameras were widened to fit every LOD with 40-pixel borders; no detector
threshold or candidate geometry was changed. Context cameras were corrected for the existing
OBJ import rotation. These are local evidence-framing changes, not evaluator repair.

Blind observations were written before key reveal: identity A=full source, B=Round4;
pose A=Round3, B=Round4. This is label-blind builder QA, not independent criticism.
Pose boards prominently carry a calibration-pending notice.

See [front diagnostic board](evidence/visual/all-poses-all-lods-front.png),
[reverse diagnostic board](evidence/visual/all-poses-all-lods-back.png),
[image measurements](metrics/all-pose-lod-fragment-audit.json),
and [calibration notice](operators/iskra/metrics/POSE_CALIBRATION_PENDING.md).

## Provenance And Isolation

Round3's 469 checksum entries and sealed Round2's 701 entries verify again after work.
Round2 delivery manifest matches `11EA2182DBBB3927C826ABC3E9E53C3BDC6FD0C3B6DE4C386AC8D635F0F2D2BD`.
All 22 critic-manifest entries, all four raw SMD hashes, and the read-only stock fastfiles verify.
The four copied core geometry/pose/parser modules are byte-identical to Round3.
Only local evidence orchestration/cameras and the explicitly scoped repair/validation code were added.

All generated output stayed under this F: Round4 root. Blender executed from a hash-verified
temporary F: copy. It was removed after Blender exited, before the lead's storage note.
The rerun script now references the installed executable directly without further tool copies.
OAT read staged F: copies of stock fastfiles. Installed Blender/Steam files were read only.
This is a configured write-root and protected-input hash audit, not an OS write-history proof.

See [final isolation](metrics/final-isolation-and-provenance.json),
[runtime provenance](metrics/runtime-provenance.json), and [reproduction](scripts/README.md).

### Storage Handoff

No newly duplicated runtime tool remains: `tools/blender-3.6` is absent.
No further tool copies or cleanup deletions were made after the storage note.
Retained duplicate stock-fastfile and Round3-source inputs are itemized with byte counts
in [storage audit](metrics/storage-duplication-audit.json). The lead owns any later cleanup:
first wait for consumers to exit, repoint to verified originals, then reseal the changed package.

## Handoff And Remaining Risk

1. Await the lead's calibrated shared body pose evaluator; do not fix it in this isolated task.
2. Rerun calibrated five-pose/four-LOD inspection and obtain a fresh independent critic.
   Whole-body deformation and no-detached-fragment acceptance remain pending.
3. Live IW3 shader, transition, gameplay, memory and user proving remain outstanding.
4. Original custom-joint secondary motion is not represented by the fixed runtime skeleton;
   this repair deliberately shares the accepted white assembly's rigid attachment.

Candidate directory: `operators/iskra/candidate/zone_raw/xi_ftag`.
No production installation and no promotion manifest were produced.

### Candidate SHA-256

- LOD0: `9FF017DC314728BCFB08AA565CA2C440BC352CD6154FF7D071D72D25E773147B`
- LOD1: `4F6D117912DDDF30E7AE5BC684946F87A6B20F922DD59D67BE41D366A742CDAA`
- LOD2: `FA4DC48D92BBEE9D4FB47BDC8D5A828270462F77EB745A823CB5266AB2EB6746`
- LOD3: `A72130B8B3FDE67B93B3A5335F6E1E9A5C00D664F562B4B00248F50B2271160C`

Primary handoff: [RESULT.json](RESULT.json) and [SHA256SUMS.txt](SHA256SUMS.txt).
