# Family08 Renetti OAT Weapon-Schema Audit

Status: **PASS**  
Recorded: 2026-09-05T04:46:51.8678390-04:00

## Question

Family08 Round 3 was held because its source weapon contains `twoHanded=1` and
`adsTransBlendTime=0.1`, while the OAT round-trip dump contains neither field.
This audit tests whether that is a candidate defect or an IW3/OAT serialization
limit.

## Controls

1. The stock `common_mp.ff` dump of `colt45_silencer_mp` contains 501 serialized
   fields and omits both `twoHanded` and `adsTransBlendTime`.
2. The exact current production XI Renetti weapon source was copied into an
   isolated runtime and compiled with OAT v0.32.0 while loading the current XI
   `mod.ff`. Link, list, and weapon dump all completed with 0 warnings and 0
   errors.
3. The production source and Round 3 candidate source each contain 356 parsed
   fields. They preserve `twoHanded=1` and `adsTransBlendTime=0.1`; their only
   semantic differences are the intended `gunModel` and `worldModel` values.
4. The production-baseline and Round 3 compiled dumps each contain 501 fields.
   After normalizing CRLF/LF line endings, their only differences are the same
   intended `gunModel` and `worldModel` values. The raw third difference was
   only newline encoding inside `notetrackSoundMap`.

## Verdict

`twoHanded` and `adsTransBlendTime` are source-only fields that this IW3 OAT
toolchain does not serialize into the compiled weapon dump. Requiring them in
the dump is an invalid gate. The correct gate is:

- both values remain exact in candidate source;
- protected alternate model slots remain exact;
- a same-compiler production baseline differs from the candidate only at the
  explicitly authorized primary `gunModel` and `worldModel` fields.

Family08 Round 3 satisfies that schema gate. This audit does not itself promote
the asset; a focused builder must reissue the evidence under the corrected bar,
then a fresh critic must inspect the complete output.

## Evidence

- Stock weapon dump SHA-256:
  `B0B60E74E66E94A746EE64BFF0BB766E73303EEE18DBA97D2D6046C83E29FB68`
- Production weapon source SHA-256:
  `5D74EB8A3469BAEC7369A5E3D2B9DCCCC26709A82AE7FDD10D2E45D806F6C4EF`
- Round 3 candidate source SHA-256:
  `7FCB377B11A8CAE003278F9D14430E22FEE85D68653D8985E64DB2654B0305AD`
- Production-baseline dump SHA-256:
  `2698A2DBAFCDAFA77D6FC186D668BD0A8B69D4A38870B4E378823807FDDC4394`
- Round 3 candidate dump SHA-256:
  `C8C426727022801AF2628C544CA2EA89BCA7DAC7EF7A65190D0E9A80B8EB7F4C`
- Production-baseline fastfile SHA-256:
  `3EB7F8CBD00A0A7A311CEB34B244959D9D6064EB5B733D82AA757B953585E232`
- Round 3 candidate weapon fastfile SHA-256:
  `2DA79FCDC6FE77EA38CD56DD50460943F2FAAAECE5B6DBB1B6FE23B1C19ABF26`
- Linker SHA-256:
  `1A5CB7499458BEF359F55FF2A78C72E5822F62455599AB291B590DA747C0233B`
- Unlinker SHA-256:
  `8475AF247240D34B29AA51AE5C84B3E4AED2F7100BB5C689FD3FA1EA666F4A7F`

