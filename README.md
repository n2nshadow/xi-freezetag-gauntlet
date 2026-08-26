# XI FreezeTag Gauntlet Dashboard

Open `index.html` directly. The dashboard has no server, package manager,
external font, CDN, or network dependency.

## Files

- `index.html` contains the facts, scorecards, current round, evidence links,
  and chronological ledger.
- `styles.css` contains the responsive and print layout.
- `dashboard.js` provides the local clock and blind A/B vote persistence only.

## Update A Snapshot

1. In `index.html`, search for `SNAPSHOT FACTS`.
2. Update the snapshot number and time, the passed-gate total, the progress-bar
   `aria-valuenow`, and its matching percentage in `styles.css`.
3. Keep the winning bar and system scorecards in sync. Use `is-pass`,
   `is-fail`, or `is-unknown` on checkpoints and `status-pass`, `status-fail`,
   or `status-unknown` on verdict labels.
4. Update the budget numbers, progress values, headroom, IWD inventory, and
   supported-map count from the current build evidence.
5. Replace the current round's builder and critic assignments, probe, verdict,
   gap, and relative evidence paths.
6. Append each new round to the bottom of the history list. Keep failed rounds;
   the ledger is chronological evidence, not only a summary of the latest state.

## Evidence Levels

- **Structural** means static files, manifests, counts, or package inspection.
- **Runtime** means CoD4 emitted the required probe result in an engine log.
- **User live** means a person completed hands-on play and recorded acceptance.

Never promote structural evidence to runtime, or an automated runtime pass to a
user-live pass. That distinction is the release gate.

## Blind Votes

The A/B form stores one advisory vote in browser `localStorage` under
`xi-ftag-gauntlet-visual-vote-v1`. It does not modify project files. Once a vote
is accepted, record its outcome in the relevant round entry in `index.html`.

Keep evidence links relative to this directory so they continue to work when
the page is opened with a `file:///` URL.
