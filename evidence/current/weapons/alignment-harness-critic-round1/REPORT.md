# Weapon Alignment Harness Critic Round 1

## Verdict

**HOLD.** The sealed evaluator is not eligible for harness PASS. This is a
harness verdict only. It does not pass any weapon candidate. The builder's
current-production baseline independently reproduces as `HOLD`, `0 / 37`.

The decisive defect is byte binding: a coherently resealed state passes without
the evaluator opening a final raster. I substituted the SHA-256 of a retained,
real 1920x1080 composed raster whose decoded sight is 64 px off center into an
otherwise clean `F01-A1` record, recomputed the public JSON seals, and updated
the render hash. The state and terminal ADS gate both remained `PASS` with no
finding. An arbitrary hash for nonexistent raster bytes also passed. This
violates the hard bar's requirement that stale or missing images are HOLD.

## Artifact Identity

| Builder artifact | Expected SHA-256 | Actual | Result |
| --- | --- | --- | --- |
| `REPORT.md` | `0e5ac1e9369569262d20fd62f38852b19887c44cb66781db102b7f9ccad4738b` | same | PASS |
| `RESULT.json` | `00fdd4bd9cea6a4c65310f400ab82315721dc075d3d2c61362189ec00b913620` | same | PASS |
| `MATRIX.md` | `14c7dc8ee70db04d2907866420134dfaf4684ad958e72d61e4af7d3eb4a803f9` | same | PASS |

The sealed evaluator replay over the builder evidence is byte-identical to the
supplied result hash. A source-only Python replay, isolated from builder
`__pycache__`, is also byte-identical.

## Independent Replay

- Python 3.12 source-only unit suite: `9` tests PASS in `48.108s`.
- Adversarial fixtures: all `49 / 49` reject with their expected codes.
- Blender 3.6.0 stock controls: `5 / 5` reported positives and `5 / 5`
  physical negatives reproduce; output SHA-256 is
  `37d138d3c3df21411934938e9db358a75449a45d1072137935c7bfaac2374caf`.
- Stock reference replay is exact. Fresh and expected category SHA-256 are
  `0d4ee93b4a59e96e2f75c256d76278da59ed375dd21f726418026b7dff546f99`.
- Full Blender probe exit: `0`, with the same missing-texture warnings as the
  sealed run and no probe exception.
- Coverage: `37` unique states, `11` bare plus `26` attachment states, `222`
  phase records, `219` applicable, and exactly three N/A records:
  `F07-A0:reload_empty`, `F07-A1:reload_empty`, `F07-A3:reload_empty`.
- All `219` applicable records declare a 1920x1080 composed render and exact
  candidate/state/phase/XAnim/camera/composition JSON links.
- All `37` state results contain the same `11` separate gate names. Contact,
  scale/orientation, hide/show, and duplicate-geometry results are not merged.
- Fresh evaluator outcome is semantically identical to the builder outcome:
  `HOLD`, `0 / 37`. Its `103` changed leaves are only fresh evidence/raster
  hashes and dependent seals.

The retained raster selftest images visually and numerically reproduce a 0 px
positive, 32 px physical displacement, and 64 px engine-composed displacement.
The latter is `visual/retained-03-xi-composed-raster-90b0cba7/composed-witness.png`,
SHA-256 `d6dcddf28d5b2ff192a3d9c93c9052d3f6df2b25aca92ddab5ec0e8d12fe74f2`.

## Findings

### 1. Critical: final raster bytes are not bound

`tools/raster_witness.py:230-237` creates, analyzes, hashes, and then deletes the
PNG. `tools/blender_probe.py:1236-1237` declares every render transient and not
retained. The evaluator requires that condition at
`weapon_harness/evaluator.py:736`; at lines `1136-1201` it checks only JSON
seals and equality between declared hash strings. No raster path is required,
reopened, decoded, or hashed by the evaluator.

The supplied stale-image fixture is self-limiting. At
`tests/test_harness.py:854-867` it reseals the gate hash but deliberately leaves
the phase render hash unchanged, so fixture 48 proves only a string-link
mismatch. My coherent mutation updates both layers. It accepts:

- an arbitrary nonexistent raster hash
  `df012ac7127fac15150f638cd1e7ed0376757d4ecc187d71ee42b42781d4328e`;
- the actual 64 px bad raster hash
  `d6dcddf28d5b2ff192a3d9c93c9052d3f6df2b25aca92ddab5ec0e8d12fe74f2`.

Both mutants leave `F01-A1` and `terminalAdsUp` at `PASS` with zero findings.
Thus a stale, crooked, or fabricated image can replace a good image whenever
the producer coherently reseals its own claims.

### 2. High: stock controls do not exercise the evaluator's raster path

The builder report says the controls use the same extraction, composition,
camera, measurement, sealing, and replay paths. The implementation does not.

- `tools/real_control_selftest.py:294-310` derives cameras from the control
  geometry and calls `runtime.project`; it never calls `raster_witness`.
- Suppressor positives compare bone transforms at lines `455-476`.
- The M249 positive loads and animates geometry, but its two passing values are
  literal `0.0` arguments at lines `520-523`.
- The separate reference replay imports the earlier generator at lines
  `216-241`; exact replay confirms consistency with that generator, not
  independence from it.

The five physical negative copies are real and reject with the advertised
metrics. However, the positive path emits no final raster images. A blind stock
positive/negative visual comparison is therefore impossible, and these
controls cannot calibrate the candidate final-raster implementation.

### 3. High: key contact and visibility evidence is asserted

The gate names are separate, but some inputs are not independent measurements:

- Hidden pixels and hidden ownership counts are constructed as zero at
  `tools/blender_probe.py:1203`, `1250`, and `1425-1429`.
- Generic attachment `floats` is set to false whenever geometry and a socket
  exist at lines `1440-1449` and `1556-1566`.
- Suppressor target triangles are selected only by X proximity and X normal;
  contact delta is only `abs(target.x - source.x)` at lines `1522-1539`.
  Lateral Y/Z separation is not part of the gap metric.
- The evaluator consumes these values as authority at
  `weapon_harness/evaluator.py:2117-2175` and `2399-2427`.

This leaves a path for hidden geometry, a laterally floating suppressor, or a
mis-mounted attachment to be reported as passing contact/visibility.

### 4. High: final-raster sight landmarks are not independently resolved

`tools/blender_probe.py:482-513` paints every triangle owned by the alignment
tag green. `tools/raster_witness.py:170-180` reduces those pixels to one bounds
center, and lines `184-267` use that center as the terminal axis measurement.
There is no separate raster landmark for rear aperture, front post, or optic
center. A centered whole-tag silhouette does not prove rear/front collinearity
or a straight optical path. Model-space checks cannot cure this final-raster
defect under the hard bar.

### 5. High: no real source-trajectory positive reaches the pass path

The fresh evidence contains `185 / 185` declared authority asset records whose
hashes match actual bytes, and all 37 frame-index sets match the spec. The
evaluator also fails closed: ADS-fire trajectory is `HOLD` for all 37 states.
But every candidate and control trajectory array is empty and every real state
is `unmeasurable`. The only green path is synthetic, while the stock-control
script does not run the candidate evaluator path. A real frame-by-frame source
trajectory positive remains missing.

The F05 authority for `F05-A0/A1/A2/A3` is byte-identical to the accepted
template despite declaring independence. The evaluator correctly reports it as
template-derived and holds those states. Six additional source-authority gate
holds are reviewed-witness hash mismatches. Source authority summary is
`27 PASS / 10 HOLD`; trajectory summary is `0 PASS / 37 HOLD`.

### 6. Medium: the recursive manifest is incomplete

Every listed SHA-256 matches, and the builder CLI reports `PASS` after checking
79 rows. Recursive enumeration finds 104 files excluding `SHA256SUMS.txt`, with
25 unlisted `__pycache__/*.pyc` files. The verifier does not reject unlisted
files, so the builder report's recursive-manifest PASS is inaccurate.

I isolated Python imports from those caches and reproduced both evaluator
outputs exactly. Blender 3.10's cached `raster_witness` code object also equals
a fresh compile of source and its header matches source bytes. This rules out a
current bytecode divergence but does not make the manifest recursively complete.

## Required Remediation

1. Retain every terminal composed raster, bind a canonical relative path and
   SHA-256, then reopen and decode those exact bytes inside evaluation.
2. Measure rear/front or optic landmarks separately in the decoded final
   raster. Do not treat whole-tag bounds center as the sight picture.
3. Run untouched stock positives and physical negatives through the same
   composed-raster, contact, visibility, sealing, and evaluator path.
4. Replace hardcoded hidden/floating values and X-only suppressor contact with
   actual 3D and raster measurements.
5. Add a real source-sealed frame-by-frame recoil positive through the evaluator.
6. Add fixtures for coherent bad-raster reseal, nonexistent raster bytes,
   symmetric crooked landmarks, lateral suppressor displacement, and literal
   positive-control metrics.
7. Regenerate `SHA256SUMS.txt` over every lane file except the manifest and make
   verification fail on any unlisted file.

Until those conditions are met and independently rerun, missing trustworthy
image and calibration evidence remains **HOLD**.
