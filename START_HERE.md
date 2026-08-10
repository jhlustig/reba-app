# START_HERE.md — read this before you touch anything

Reba, Golden Retriever, gun dog program run solo by Jason in Shreveport LA.
Goal is a finished personal hunting duck dog. Where test polish and hunting
utility diverge, hunting wins.

**Truth lives in `~/Documents/Reba` on Jason's Mac.** Everything you can see in
project knowledge, in a chat, or pasted into a message is a COPY. Copies go
stale. Copies carry no evidence of their own age. Act accordingly.

---

## The three laws

### 1. State files are append-or-splice. Never a whole-file replacement.

`REBA_PROGRAM.md` · `SESSIONS.md` · `APP_STATE.md`

Hand over the lines that changed — a decision-log entry, a session block, one
patched row. **Never hand over a complete rewritten file.** A whole file written
from a stale base deletes everything added since that base, and it does it
silently, with no error and nothing in the diff to look at unless someone
happens to check.

This is not hypothetical. See the incident below.

`tracks.yaml` is not on that list only because it is machine-audited — but the
same instinct applies: patch the card, re-run the renderer.

### 2. Check `STATE_MANIFEST.md` before you rewrite anything.

It carries the sha256, line count and byte size of every canonical file. If the
copy you are holding does not hash to what the manifest says, **your copy is
stale and you do not get to write a whole file.** Regenerate it after any change:

```
python3 tools/manifest.py --stamp YYYY-MM-DD
python3 tools/manifest.py --check      # exit 1 if the repo has drifted
```

### 3. One file, one address.

Every file has exactly one path. Project knowledge mirrors the repo layout
exactly — `tools/state.py` is at `tools/state.py`, not at `claude/state.py` and
not also at the root. Two addresses for one file means retrieval picks one and
you never find out which.

---

## What happened on 2026-08-10, so it does not happen again

A session was asked to add four decision-log entries to `REBA_PROGRAM.md`. It
handed back a complete rewritten file. That file was built on a copy from 08-08.

It silently dropped:

- **all 22 decision-log entries from 08-09**, plus 5 from 08-08 — 27 rulings
- the standing constraints **DATES ARE AMERICA/CHICAGO** and **PUBLISHING IS
  PART OF FINISHING**
- the current deck stamp, reverted `08-09·91f` / 47 cards → `08-08` / 46 cards

Nothing detected it. It was caught by hand-diffing against the repo before the
write landed. Root cause: **project knowledge held two documents at the path
`REBA_PROGRAM.md`** — one uploaded 08-08, one 08-09 — and retrieval served the
old one. `history_seed.yaml` was duplicated the same way.

The three laws above each close one link in that chain. Law 3 kills the
duplicate. Law 2 makes the staleness visible. Law 1 makes it harmless even if
the first two fail.

This was the second occurrence. The first — "THE DECISION LOG LOST SEVEN
LINES" — is itself an entry in the log it damaged, 2026-08-09.

---

## Read order

1. **`STATE_MANIFEST.md`** — confirm what you are holding is current
2. **`REBA_PROGRAM.md`** — decision log at the top, newest first. Authoritative
   over anything you recall or anything said in a chat.
3. **`CARD_STYLE.md`** — before producing any card, sheet, or new track. Not a
   suggestion; new stacks inherit it exactly.
4. **`SESSIONS.md`** — the session stream. Newest at the top. Append-only.
   Never edited, never deleted.
5. **`tracks.yaml`** — all card copy. The ONLY place card text lives.

`TRACK_MAP.md` is a proposal, not built state, until its lines appear in the
decision log as built. Working track letters are A/B/C/D/E.

---

## Verify before you claim anything is done

```
cd ~/Documents/Reba && source .venv/bin/activate

python3 tools/render_cards.py --outdir out
python3 tools/render_cards.py --outdir out --avery
python3 tools/audit_tracks.py tracks.yaml
python3 tools/state.py --yaml tracks.yaml --sessions SESSIONS.md --seed history_seed.yaml
python3 tools/build_app.py
python3 tools/manifest.py --stamp YYYY-MM-DD
```

Run from the repo root, never from inside `tools/`.

**`state.py` does not print stand-down lift progress on the console.** The
`N/M sessions` line is total banking, which is a different number. For a lift
condition, read the JSON:

```
python3 tools/state.py --json /tmp/st.json --quiet
# then: st["cards"]["MK-3"]["stood_down"]["progress"]
```

**Publishing is part of finishing.** Any change to `index.html` or `sw.js` ends
by confirming with Jason, pushing to github.com/jhlustig/reba-app, and verifying
the live site at https://jhlustig.github.io/reba-app/. A built app that is not
on the phone is not a finished job. `sw.js` is static by the 08-09 ruling — a
publish is `index.html` alone unless the worker's own logic changes.

---

## Standing rules for the program itself

- Nothing enters a track without a stated numeric PASS criterion. No "advance
  when it feels right."
- Every cross-track dependency is named explicitly, by track and stage number.
- Anything that could hurt the dog if run early gets a Gate card, not a footnote.
- Push back. If Jason is about to skip a gate, say so plainly. Marking desire is
  the asset he cannot rebuy.
- Explain before you build. Reasoning first, artifact second. Plain language in
  chat; full detail belongs in the files.
- Verify claims about methods and equipment. Do not assert from memory.
- Assume solo work. Drills needing a helper are a fallback, not a default.
- Every session that changes program state ends with a new dated decision-log
  line — proposed to Jason for approval, never written silently.
