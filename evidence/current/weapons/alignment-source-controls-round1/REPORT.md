# Weapon Alignment Source Controls - Round 1

Audit date: 2026-08-26

## Scope and verdict

This was a read-only source archaeology pass. No production asset, weapon definition,
script, model, or animation was changed.

Exact roots used below:

- REPO = C:\Users\shawn\Documents\Codex\2026-08-03\ok\work\cod4-freezetag
- XI = C:\Users\shawn\Documents\Codex\2026-08-03\ok\work\cod4-freezetag\xi_ftag
- STOCK = XI\.asset_staging\stock_reference\common_mp

The strongest independent controls are the untouched stock CoD4 M4 family for bare
iron, reflex, ACOG, and suppressor alignment, and the untouched stock CoD4 M249
SAW/SAW-grip pair for foregrip alignment. They are stronger than mw2_ftag or current
XI placements because each stock weapon definition binds a known hand model, gun
model, hide-tag selection, purpose-built XAnim, and FOV into one shipped runtime
contract.

The recovered mw2_ftag/Open Warfare material is useful provenance, but is not an
independent placement oracle. Open Warfare swaps complete weapon-definition names;
it never computes an attachment transform.

## Evidence ranking

1. Direct external positives: STOCK\weapons, STOCK\model_export, STOCK\xmodel, and
   STOCK\xanim.
2. Exact stock-model probes: XI\zone_out\stock_model_export_probe\model_export.
   These expose the CoD XMODEL_EXPORT bone origins, bases, and rigid vertex owners.
3. Convenient in-mod launchers: XI\zone_raw\xi_ftag\weapons\mp\xi_stock_m4_mp,
   xi_stock_m4_reflex_mp, xi_stock_m4_acog_mp, xi_stock_m4_silencer_mp,
   xi_stock_saw_mp, and xi_stock_saw_grip_mp. Their relevant tuples mirror stock,
   but stock itself remains the oracle.
4. Recovered/custom references: REPO\mw2_ftag, REPO\openwarfare, REPO\weapons\xi,
   and XI\source_data. These are evidence about lineage, not correctness.

REPO\mw2_ftag\openwarfare\_dynamicattachments.gsc:87-103 constructs a new weapon
name and gives that weapon. Its SHA-256 is
2F40D25DA705BC5260E7B95105EB512D90377D3ABDB978E590C382FD6B3BF011.
REPO\mw2_ftag\mp\attachmenttable.csv only supplies attachment/suffix metadata
(SHA-256 DC13C4A10548C53EDAC1F04CD43BD7A8D1607A7078CFB0B22C33077F7465A1FA).
Neither file establishes a model-space mount, optic axis, bore axis, or camera center.

## CoD4 runtime contract

The stock hand-model hierarchy in
STOCK\model_export\viewmodel_base_viewhands_lod0.glb is:

    tag_view
    +-- tag_ads
    |   +-- tag_torso
    |       +-- tag_weapon
    +-- tag_cambone
        +-- tag_camera

The gun root j_gun is composed at the hand model's tag_weapon branch. Attachment
geometry is rigidly owned by named gun-model bones/tags, and hideTags selects which
branch is rendered. Runtime XAnims address bones by name. Each decoded stock M4
ADS-up clip is a version-17, one-track animation of tag_ads.

Therefore ADS does not reduce to a static attachment translation. tag_ads moves the
weapon/hands branch relative to the sibling tag_camera branch. At the full-ADS
sample, the relevant quantity is the complete camera-relative transform:

    inverse(M_tag_camera) * M_tag_weapon * M_j_gun * M_sight

For iron/optics, the sight center must project onto the camera center and the sight's
forward axis must be collinear with camera forward. For a muzzle device, the host
contact origin and bore basis must agree. For a foregrip, the grip basis/contact must
also remain compatible with the dedicated hand animations through motion. Origin
alone is insufficient in every category.

CoD model coordinates are +X forward toward the muzzle, +Y left, and +Z up. The
repository's converter at XI\tools\validate-viewhands-xanim.py uses:

    (X, Y, Z)_CoD -> (X, Z, -Y)_GLB

Thus a GLB-space visual comparison must be converted before interpreting lateral
or vertical displacement. A tag contract is its full origin plus 3x3 basis, not only
the three position numbers.

## Stock geometric invariants

The direct M4 probe
XI\zone_out\stock_model_export_probe\model_export\viewmodel_m4_mp_lod0.xmodel_export
shows identity bases for all of these tags:

- tag_acog, tag_iron_sight, and tag_reflex_sight:
  (-0.149859, -0.008398, 3.581402) CoD.
- tag_flash: (23.870098, 0.015750, 2.503874) CoD.
- Rigid vertex ownership is real: 437 vertices belong to tag_acog, 420 to
  tag_iron_sight, and 209 to tag_reflex_sight.

The stock silenced M4 probe
XI\zone_out\stock_model_export_probe\model_export\viewmodel_m4_and_silencer_mp_lod0.xmodel_export
places j_silencer at exactly the base M4 tag_flash:

- j_silencer start: (23.870098, 0.015750, 2.503874), identity basis.
- silenced tag_flash: (34.095158, 0.015750, 2.503874), identity basis.
- Net muzzle advance: (+10.225060, 0, 0), with no lateral or vertical drift.
- 27 suppressor-body vertices are rigidly owned by j_silencer.

The stock M249 probe
XI\zone_out\stock_model_export_probe\model_export\viewmodel_m249_mp_lod0.xmodel_export
places tag_foregrip at (10.841662, 0, -0.399686), identity basis, with 90 rigidly
owned grip vertices.

## Independent controls and proposed fixtures

All proposed fixtures belong under
XI\.audit\weapon_alignment_source_controls_round1\fixtures and must use copied
scratch assets only. They are proposals; no fixture was created in this pass.

### 1. Bare iron ADS

External positive P_IRON_STOCK_M4: load STOCK\weapons\m4_mp unchanged with
handModel viewmodel_base_viewhands, gunModel viewmodel_m4_mp, visible
tag_iron_sight, ADS FOV 50, and viewmodel_M4_iron_ADS_up/down. Sample the final
ADS frame under the CoD4 runtime and record signed screen-space sight-center error.

Deliberate negative N_IRON_TAGADS_Y_P075: keep that complete tuple unchanged except
for a scratch ADS-up clip whose final tag_ads translation has +0.75 CoD Y added.
This moves the entire sight/weapon branch left relative to tag_camera and must fail.

### 2. Reflex/red-dot

External positive P_REFLEX_STOCK_M4: load STOCK\weapons\m4_reflex_mp unchanged.
It uses the same hand/gun models as base M4, hides tag_iron_sight, tag_acog, and
tag_g36_scope, exposes tag_reflex_sight, and uses
viewmodel_M4_reflex_ADS_up/down at ADS FOV 50.

Deliberate negative N_REFLEX_BIND_Y_P075: in a scratch copy of the stock M4 model,
translate the tag_reflex_sight bind branch +0.75 CoD Y while leaving the stock
weapon definition and ADS XAnim unchanged. The red-dot center must move off the
camera ray while the rest of the weapon remains the positive control.

### 3. ACOG/scope

External positive P_ACOG_STOCK_M4: load STOCK\weapons\m4_acog_mp unchanged. It
exposes tag_acog, hides tag_iron_sight, tag_reflex_sight, and tag_g36_scope, uses
viewmodel_M4_acog_ADS_up/down plus viewmodel_M4_acog_ADS_fire, and changes ADS FOV
to 30.

Deliberate negative N_ACOG_AXIS_Z_P3DEG: in a scratch stock-M4 copy, preserve the
tag_acog origin but yaw its basis +3 degrees about CoD +Z. This isolates optical-axis
failure from rail-contact failure; the scope can remain seated while its axis misses
camera forward.

### 4. Suppressor muzzle contact/axis

External positive P_SILENCER_STOCK_M4_PAIR: compare unchanged STOCK\weapons\m4_mp
and m4_silencer_mp. The latter changes gunModel to viewmodel_m4_and_silencer_mp,
sets silenced=1, and deliberately retains the base iron ADS clips. Require exact
base-tag_flash to j_silencer contact and a +X-only muzzle extension as measured
above.

Deliberate negative N_SILENCER_CONTACT_AXIS: in a scratch silenced-M4 model, move
j_silencer by (0, +0.50, +0.50) CoD and yaw its basis +5 degrees about +Z. The same
test must report both non-contact and non-collinearity.

### 5. Foregrip contact/orientation

External positive P_FOREGRIP_STOCK_SAW_PAIR: compare unchanged STOCK\weapons\saw_mp
and saw_grip_mp on the same viewmodel_m249_mp. saw_mp hides tag_foregrip.
saw_grip_mp exposes it and switches to viewmodel_m249_idle_fgrip,
viewmodel_m249_fire_fgrip, and viewmodel_m249_fire_ads_fgrip while retaining
viewmodel_m249_ads_up/down. Validate palm/grip contact at idle, fire, and ADS-fire,
not only one static frame.

Deliberate negative N_FOREGRIP_Z_P075_ROLL_P15: in a scratch M249 copy, move the
tag_foregrip branch +0.75 CoD Z and roll it +15 degrees about CoD +X while retaining
all stock fgrip animations. It must fail both hand contact and grip orientation.

## XAnim fingerprints and decoded endpoints

Endpoints are final tag_ads translations in CoD (X,Y,Z). Cross-axis residual is
sqrt(Y^2 + Z^2); it is diagnostic within a controlled family, not a universal
alignment threshold across unrelated models.

| XAnim path under XI | Frames/rate | Endpoint; residual | SHA-256 |
|---|---:|---|---|
| .asset_staging\stock_reference\common_mp\xanim\viewmodel_m4_iron_ads_up | 13/30 | (-4.193000,+0.011792,-0.093985); 0.0947 | B5E95CB7ABB3BA98B977F3D43F03E801B9212CB0F07B181656FC26176C06AD9D |
| .asset_staging\stock_reference\common_mp\xanim\viewmodel_m4_reflex_ads_up | 13/30 | (-4.052200,+0.011636,-0.143800); 0.1443 | BE081D36988A55A92B1C4398586166EAFB6E765217569559FEBB5E3902443275 |
| .asset_staging\stock_reference\common_mp\xanim\viewmodel_m4_acog_ads_up | 13/30 | (-3.914300,+0.011647,-0.110792); 0.1114 | BB8BD2BCE443E3BFF9351C715EF1C9DB2B3851E8213860D20FA9DBB0391731BC |
| .asset_staging\xanim_real_dump\xanim\viewmodel_mw2_m16_ads_up | 12/30 | (-4.061100,+0.011460,-0.216438); 0.2167 | 4079A7EC4B35F6C2CB0A513B90F28E6E4114248178019C78B915F42A47339462 |
| .asset_staging\xanim_real_dump\xanim\viewmodel_ow2_m16a4_reflex_ads_up | 13/24 | (-4.994100,+0.011656,-0.322838); 0.3230 | E1507E3D2AAF1D1BAD2869D49F1A3538AF834EE23A3DD3B382062A4B9B103069 |
| .asset_staging\xanim_real_dump\xanim\viewmodel_ow2_m16a4_acog_ads_up | 13/24 | (-4.994100,+0.011641,-0.310880); 0.3111 | 473ECD0D9F4C14371EB61E64E87FA4FCCE8CEF8FD6EC1505D313CF6EF76DAEA5 |

Paired stock XAnim SHA-256 values:

- viewmodel_m4_iron_ads_down:
  39ECCF8CF0822B9BC5F36DA1B99B43E35A0783A262AEA0E26C4740B9C6C70377
- viewmodel_m4_reflex_ads_down:
  E55F3B4401E378628F91CB03B254D0649FAE888B7651B3E21721121002E387BB
- viewmodel_m4_acog_ads_down:
  A99ABE97FF373E41D999C392D5AD469073A7D5B0DDDE73FA8EEFAC430D2258FE
- viewmodel_m249_ads_up / viewmodel_m249_ads_down:
  AEC565BBEEABC4EF580764370A87840D384E6786C90BE396716BD02B4097A929 /
  95CB83CDE714CC1BFF4E6D51C454962921184F9189E2A1BFA026F5228C8A1D9A
- viewmodel_m249_idle_fgrip:
  FC369D3A477E03B3F808F55DD943037F49B71A0D587611A77FE60A201AD33399
- viewmodel_m249_fire_fgrip:
  1EB04CBD58862B8BE736055F4ED1018EE4D31BAD561B9EE472010BCA295936A5
- viewmodel_m249_fire_ads_fgrip:
  092D6135186A0B79E5146096A8CFC8C359CE98FB50F910D2230997ACFD63E423

## Why matching an existing off-center transform is invalid

The current REPO\weapons\xi\g3_mp, g3_reflex_mp, g3_acog_mp, and g3_silencer_mp
all select viewmodel_t8_vapr_vampire, but their ADS clips come from the recovered
MW2 M16 lane: viewmodel_mw2_m16_ADS_up/down or
viewmodel_ow2_m16a4_reflex/acog_ads_up/down. The source model itself is
REPO\mw2_ftag\model_export\viewmodel_ow2_m16a4_lod0.glb
(SHA-256 F35CDC7BC049D50F195B001989E9A311FCAFB270E6AFF4BD9135C9650281CB9F),
not the current VAPR receiver. The current route therefore mixes receiver geometry,
retained template attachments, and another weapon family's camera-relative clips.

The private M16 full-ADS cross-axis residuals above are about 2.2x, 2.2x, and 2.8x
their stock-M4 iron/reflex/ACOG counterparts. That numerical comparison is not by
itself a universal failure rule, but it demonstrates that copying the private lane's
screen-space result cannot serve as an independent stock control.

There is also circular placement logic. XI\tools\compose-t8-weapon-attachments.py
(SHA-256 03DB2688165FEB509F72EEA29C6F04D74FEB84561B9D38413776835361587B77)
reads source and target binds at lines 193-205, then uses only the target position
for placement and explicitly omits the target basis at lines 207-210. With
--level-attachment-bottoms, lines 463-470 define the first attachment's current
lower Z as the rail height and move later attachments to match it. A shared bias in
the first attachment is consequently propagated, not disproved.

Finally, XI\source_data\sva545_conversion_profile.json retains template meshes for
tag_acog, tag_reflex, and tag_silencer. Agreement with those retained transforms is
agreement with the same inheritance chain. It tests repeatability, not truth.

## Acceptance rule

Before judging any production weapon, the measurement harness must pass each
untouched external positive and reject its deliberately displaced negative using the
same runtime, FOV, final-frame sampling, projection, and axis/contact calculations.
A harness that passes both members of a pair is not measuring the requested
contract. Production alignment should then be solved against the validated stock
camera/tag/basis contract, never against an existing custom transform merely because
another custom weapon already shares it.

## Core asset fingerprints

- STOCK\model_export\viewmodel_base_viewhands_lod0.glb:
  4E52E9CD84F8C1AD5444510FE277FDD3C053CD845DE45B4908F7E3368691F3F5
- STOCK\model_export\viewmodel_m4_mp_lod0.glb:
  F6C39DA0BDBABEBF74D54DDEB0BA1496CDD510964723AB627DF22CE4F7A801D5
- STOCK\model_export\viewmodel_m4_and_silencer_mp_lod0.glb:
  F78FA79EE3BA57F8AB56232F13E1D05614F45619CEB56E6D489F34174CD710D9
- STOCK\model_export\viewmodel_m249_mp_lod0.glb:
  383A991692FD697ADF45C6E5BB11D09A96AEFD4EA12CDDFA397E0744C385931E
- STOCK\weapons\m4_mp:
  1B315A16749E7F02086AFC82BE0971F81B2F792D9416ED793FC4BA8E296DA2FB
- STOCK\weapons\m4_reflex_mp:
  B2BAAB181249867DEB4FB33FC57EA98684257381C1712B13E11C96D7AD06A138
- STOCK\weapons\m4_acog_mp:
  8F96655E3A29269AE5791F197A5F4CCE5C2A2C94A07AF5789F9DC45DC0BF551E
- STOCK\weapons\m4_silencer_mp:
  1ACF007D740708BAA2D483CFC3EDF3785C8773DF86423BFB4533BD1FCF7888E6
- STOCK\weapons\saw_mp:
  643B7A0EC9389B5C74FEBC7A1D991F1B1B3FD5B5776B54ED5B0B17865F3C8AB8
- STOCK\weapons\saw_grip_mp:
  0E18DCD7781A262D3C677FE1B89FA139EF2AC2B1B7909925FA382B765D48F4D4
