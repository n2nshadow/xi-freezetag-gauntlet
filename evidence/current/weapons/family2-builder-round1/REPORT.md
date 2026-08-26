# Family 2 VAPR-XKG Builder Continuation

## Verdict

**HOLD. No state passed and no production promotion was performed.**

The exact candidate remains byte-identical at `7418FA455010EA64115752E149F7BFF17D43F7C0DA3E76D2B4480696C6528C94` (1862416 bytes). Its manifest and pre/post evaluator hashes agree. The production preimage remains `594F2687A47D8FED38234E74673BD255B149C58D145F3B667D4C08C7A42C8881`.

No exact-candidate, engine-composed 1920x1080 terminal ADS-up raster exists in this lane. The game was not launched, as required. Consequently the fixed center witness `[960,540]`, visible sight/optic center <= 2 px gate, and all hip/ADS-fire/reload/reload-empty visual inspections are unproven for every state.

## Independent Mandatory Gates

| State | Runtime identity | Engine terminal | Phase visuals | Exact-candidate offline diagnostics | Verdict |
| --- | --- | --- | --- | --- | --- |
| F02-A0 bare (`g3_mp`) | PASS | MISSING | MISSING | FAIL | HOLD |
| F02-A1 reflex (`g3_reflex_mp`) | PASS | MISSING | MISSING | FAIL | HOLD |
| F02-A2 acog (`g3_acog_mp`) | PASS | MISSING | MISSING | FAIL | HOLD |
| F02-A3 suppressor (`g3_silencer_mp`) | PASS | MISSING | MISSING | FAIL | HOLD |

No row inherits a result from another state. PASS above applies only to the exact current weapon/runtime identity bytes; it is not a weapon-alignment pass.

## Exact-Candidate Diagnostics

These are diagnostic projections of the exact final candidate under the reparsed viewhands + weapon XAnim composition. They are not engine rasters and cannot pass the visual gate.

| State | Hip max delta px | Terminal landmark offsets px | Terminal axis separation px | ADS-fire max delta px |
| --- | ---: | --- | ---: | ---: |
| F02-A0 | 2784.395 | rear=741.258, front=3803.058 | 3699.221 | 3976.449 |
| F02-A1 | 1828.240 | opticalCenter=1280.335, opticalAxisFar=2673.482 | 1571.063 | 2810.153 |
| F02-A2 | 1835.255 | opticalCenter=1161.354, opticalAxisFar=2675.735 | 1994.475 | 2816.502 |
| F02-A3 | 2784.395 | rear=741.258, front=3803.058 | 3699.221 | 3976.449 |

All six matrix sweeps (`idle`, `adsUp`, `adsFireRecoil`, `fire`, `reload`, `reloadEmpty`) fail for all four states. The candidate `j_gun` frame differs from the untouched M16 XAnim authoring root by a maximum matrix-element residual of 1.0 against a 0.00001 limit.

## Physical Findings

- F02-A0 bare: iron rear-position delta is 0.298680 model units (limit 0.05), direction delta is 1.436296 degrees (limit 0.1), and one iron component floats 1.340791 units from the body.
- F02-A1 reflex: optical witness fits, but the reimport is 5486 versus 5566 sealed-source triangles, scale delta is 0.001382485, rail contact fails, and 142 non-contact intersections are detected.
- F02-A2 ACOG: optical witness and rail contact fit, but the reimport is 5776 versus 5856 sealed-source triangles; source-faithful topology therefore fails.
- F02-A3 suppressor: scale, nominal axis, and nominal muzzle offset fit, but 99 non-contact body intersections are detected; its visible bare irons also fail.

Hide/show and duplicate-geometry checks pass, and every selectable F02 attachment mesh remains present for runtime filtering. No selectable attachment was removed or hidden to manufacture a pass. This continuation copied no Family 1 candidate geometry; Family 1 was used only as projection/composition authority evidence.

## Physical Negatives

Each negative is a full export cloned from the same exact candidate, with real active-state mesh geometry displaced. All selectable attachment geometry remains present. All four negatives reject through the same evaluator and have no engine raster authority.

| State | Fixture SHA-256 | Geometry moved | All selectable geometry retained | Rejected |
| --- | --- | --- | --- | --- |
| F02-A0 | `46A58EF6D6C7038CF1393E9B0F8F6B605B9E65B883D9156053AE8396E0AC2519` | yes | yes | yes |
| F02-A1 | `0EC60C6492C15794F53F4DBF1E873E2334511445AF286691669860FCD38FF817` | yes | yes | yes |
| F02-A2 | `8A5FEF5521964805E102D0B22D6BEB921A607FBADDAA3E2C39EA8457FAAB80A5` | yes | yes | yes |
| F02-A3 | `3A211558E1DFA774D6E21D5C4C2ABD4CBD1331195849396DA13251DD0536EE0C` | yes | yes | yes |

The negative calibration demonstrates sensitivity only. It cannot upgrade the positive candidate, which already fails every state.

## Authority And Drift

- Current runtime identity and current source/XAnim rehash-reparse pass for all four exact weapon states.
- Fresh stock CoD4 M4 bare/reflex/ACOG/suppressor and M249 grip category positives pass while their physical negatives fail.
- Independent stock semantic equivalence remains failed: the regenerated lane report is not byte-identical to the sealed passing source and contains rejected M4 suppressor-basis and M249 hand-contact differences.
- Corrected stock projection composition verification passes with zero matrix difference from the current passing implementation.
- The candidate manifest runtime-identity seal still matches. Its stock-calibration and Family 1 runtime-axis seals are stale and were deliberately not rewritten.
- All current F02 source-authored trajectory states pass, but that report remains top-level false because it retains an older failed stock bare/suppressor control. Neither source authority result can substitute for exact candidate engine rasters.

## Promotion

No production source, `zone_raw`, build output, Steam content, package, or game launch was modified or invoked. The candidate was not promoted. `RESULT.json` is the machine-readable verdict; `SHA256SUMS.txt` hashes every exact positive and negative candidate plus the final evidence set, and intentionally excludes itself.
