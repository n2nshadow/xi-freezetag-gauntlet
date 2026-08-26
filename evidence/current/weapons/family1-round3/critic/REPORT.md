# XI FreezeTag Weapon Alignment Critic Round 3 - Family 1

## Verdict

**HOLD.** Candidate `86A6086FBE90B57B51BBCA9B562B4666E928C180498CD26165E8AF94113F649B` wins **0 of 4** required states. Numeric sight direction, mandated optic source transforms, physical contacts, and suppressor alignment are not sufficient to override the hard fixed-camera visibility failures.

The single largest gap is **retained/duplicate native factory sight geometry with incorrect mesh ownership**. It creates competing sights in bare, remains as grey rear/iron posts when `tag_sights` is hidden for reflex/ACOG, and returns in suppressor because that state correctly keeps native sights visible.

## Identity And Freshness

- Candidate: `xi_ftag/.audit/weapon_alignment_builder_round2/candidates/family-01/viewmodel_t8_icr7_summon_round2_lod0.glb`; SHA-256 `86A6086FBE90B57B51BBCA9B562B4666E928C180498CD26165E8AF94113F649B`; expected hash match **PASS**.
- Accepted template: `mw2_ftag/model_export/viewmodel_ow2_hk416_lod0.glb`; SHA-256 `B2491A22FAB1B313F4815DFFC48F9426C3A60DF5029D5E86B85E175126E85632`.
- Promoted current: `xi_ftag/zone_raw/xi_ftag/model_export/viewmodel_t8_icr7_summon_lod0.glb`; SHA-256 `F2B9317376DA870B8659ADF9EA12C964E6F2F896B617279744E731D39F798471`.
- Candidate/current path alias: **NO**; byte alias: **NO**. Candidate/template path and byte aliases: **NO**.
- Adjacent builder report: `xi_ftag/.audit/weapon_alignment_builder_round2/candidates/family-01/viewmodel_t8_icr7_summon_round2_lod0.build.json`; SHA-256 `037778C5245854145944216B2FC023C26D41ABC9E29EBF5F14DE6367F5F435AB`. Freshness/path/hash/size check: **PASS**.
- Builder status remains `BUILT_UNVERIFIED` with `promotionReady=false`. Its own host-intersection diagnostics report `passed=false` with `503` reflex and `198` ACOG non-contact pairs; independent visual review therefore remains authoritative.

## State Scores

| State | Result | Numeric gates | Fixed-camera finding |
| --- | --- | --- | --- |
| bare | **FAIL** | direction 0.000000 deg <= 0.1 | Duplicate competing native sight structures obstruct the accepted sight picture. |
| reflex | **FAIL** | scale 0.377598602; ADS axis 6.603 px > 2 | Grey retained rear/iron posts remain in the sight picture although tag_sights is hidden. |
| acog | **FAIL** | scale 0.374398638; ADS axis 371.774 px > 2 | ACOG is visibly huge and far off-axis; grey retained rear/iron posts remain relative to clean Control A. |
| suppressor | **FAIL** | axis 0.000005 deg; contact -0.045996 | Suppressor axis/contact passes, but this state intentionally leaves native sights visible and therefore inherits the duplicate/retained sight obstruction. |

The bare direction delta is `0.0` degrees, within the `0.1` degree limit. Candidate native-sight geometry nevertheless has `2406` points / `1339` triangles versus Control A's `1216` points / `1224` triangles, and the ADS-up image shows duplicate competing structures.

The independently transformed active optic sources match the required scales and contact planes: reflex `[0.377598481, 0.377598488, 0.37759831]` with contact gap `-7.15e-07`, ACOG `[0.374398502, 0.374398385, 0.374398481]` with contact gap `-1.192e-06`. The visible axes still fail at 1920x1080: reflex ADS-up `6.602796` px and ACOG ADS-up `371.773604` px against the `2.0` px limit.

The suppressor independently passes axis/contact (`0.000005263` degrees; signed contact `-0.045995643`), but its state fails because correct weaponfile visibility exposes the same rejected native sights.

## HideTags And Visibility

All four weaponfiles have the correct literal `hideTags`/`visibleTag` contract, and every render tile records that contract. This does **not** make effective visibility pass: the grey posts survive reflex/ACOG hiding because they are retained in body-owned geometry, while bare/suppressor expose duplicate sight structures. Retained or duplicate sight obstruction is a hard HOLD regardless of socket residuals.

## Blind A/B

The anonymous pair set was assembled before reveal using candidate-hash parity. After scoring, `A` revealed as the accepted template control and `B` as the candidate. Result: **A wins 4-0; candidate B loses all four states**. The 20 pair sheets are under `renders/blind_pairs/family-01`; byte-identical anonymous raw copies are under `renders/blind_A/family-01` and `renders/blind_B/family-01`.

## Exact ADS-Up Evidence

- `bare` candidate: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate/family-01/bare_ads_up_fixed.png` (`7F77D79074A962E88F32C28FF8E639D8191D5C03F9C7844E4C62F1AF648BF8F0`); Control A: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate_template_control_A/family-01/bare_ads_up_fixed.png` (`6A734126B4F9ACE4C23581959BF6834ED0DD4F7455A25CC51EB103C34FAA6545`).
- `reflex` candidate: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate/family-01/reflex_ads_up_fixed.png` (`8FD39E14B8491E47895D23D65817F375F3CB6A0C8EF80D4F35C50ECF4B26C445`); Control A: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate_template_control_A/family-01/reflex_ads_up_fixed.png` (`0B29D3B11733EF39D4A3BC07B5D1419542CFC6D02433A261F6D5AD9D80E0F3B1`).
- `acog` candidate: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate/family-01/acog_ads_up_fixed.png` (`A670C77F9F1C0583BB85A7AF3F424FF5A19B74A87D7C2B3AEC515FB6C5AB36B8`); Control A: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate_template_control_A/family-01/acog_ads_up_fixed.png` (`B80357E8E4CACABAF40955500120744EE1D893C41C15409645D8F60EA1B9811C`).
- `suppressor` candidate: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate/family-01/suppressor_ads_up_fixed.png` (`0B8861328FC40950C98785731046DA5F32C9CD573225093F969AE61A51BE9733`); Control A: `xi_ftag/.audit/weapon_alignment_critic_round3_family1/renders/fixed/candidate_template_control_A/family-01/suppressor_ads_up_fixed.png` (`EE0559ACA496BF51B8B10F0B48B57A683BF7C19755F790F9BAE591F23B92B164`).

## Protocol And Coverage

- Exact copied 37-state matrix retained and hash-sealed; execution scope is Family 1's four states only.
- Exact lane-local XAnim decoder hash matches the source decoder: **PASS**.
- Exact Family 1 coverage: 4 states x 5 weaponfile XAnims = 20 candidate tiles and 20 accepted-control tiles.
- Every tile reloads its GLB from disk and records candidate/control and XAnim SHA-256 values.
- Resolution is 1920x1080; fixed camera derives only from the accepted HK416 native sight line.
- Raw fixed-camera render count: `20` candidate + `20` control. Blind raw copies: `40`; blind pair sheets: `20`.
- Missing external texture warnings are immaterial to this flat-material geometry protocol; all scored body/active geometry is harness-colored.

## Release Condition

Remove or correctly re-own the retained factory sight geometry so bare/suppressor show one clean native sight set and reflex/ACOG hide every native post. Then rerun the same 40-tile fixed-camera sweep and meet the `<=2 px` optic-axis gate, especially the oversized/off-axis ACOG.

No production, source, package, Steam, or git state was modified by this lane.
