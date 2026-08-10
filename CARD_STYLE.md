# CARD_STYLE.md — Reba Field Card System

House style for every training card. Any new stack inherits this without renegotiation.

## Physical spec

| Item | Value |
|---|---|
| Trim size | 6 × 4 in (landscape) |
| Imposition | 2 per US Letter sheet, crop marks, no bleed |
| Lamination | 5 mil pouch, corners rounded |
| Binding | One master ring, upper-left punch |
| Ordering | Cards contiguous by track so the ring can be split without re-sorting |

## Palette

| Token | Hex | Use |
|---|---|---|
| Green | `#2F4A32` | Marks stripe + accents |
| Rust | `#8C3B2A` | Whistle stripe + accents |
| Tan | `#9A7C42` | Lines stripe + accents |
| Slate | `#3F5A6B` | Water stripe + accents |
| Clay | `#7A5240` | **Hunt** stripe + accents — reservation spent 2026-08-10 |
| Olive | `#6B6A2F` | Puppy stripe + accents |
| Teal | `#2C5B57` | Obedience stripe + accents |
| Indigo | `#3B426E` | Place stripe + accents |
| Plum | `#6A3B58` | Force stripe + accents |
| Alert | `#A32E1E` | Gate cards only — top/bottom bars, header rule |
| Gray | `#F3F2EE` | Troubleshooting table fill |
| Line | `#C6C2B6` | Hairlines |
| Ink | `#232720` | Body text |
| Muted | `#6B6F64` | Footer |

Track identity is carried by the **edge stripe colour only**. Everything else stays constant across tracks.

**The palette is now closed — nine tracks, nine colours, no reservations left.** Clay was
the last reserved colour and Hunt took it on 2026-08-10; the four added in the same pass
finish the set, so the next person to write Puppy, Obedience, Place or Force is not blocked
on a colour ruling the way Hunt was.

How the four were chosen, so a tenth is not picked by eye:

- **Contrast with white ≥ 5.6:1.** The two-letter tag is reversed out in white on the
  stripe. The deck's own floor is Tan at 3.94:1 and every new colour clears it comfortably.
- **Pairwise CIELAB ΔE ≥ 15 across all ten**, which is what the built four already managed
  among themselves (17.2). Two stripes a handler cannot tell apart at arm's length in a
  truck at first light are one stripe.
- **Nothing near Alert `#A32E1E`.** A red-ish track stripe reads as a gate card, which is
  the one colour meaning in this deck that must never be ambiguous. Force is the pressure
  track and the obvious wrong answer was to make it red; it is Plum for exactly that reason.
- **Nothing near Muted `#6B6F64`**, the footer grey. A neutral grey stripe reads as a
  colour that failed to print. This ruled out the otherwise-best candidate.

## Card anatomy

- **Edge stripe** — 0.20 in wide, 0.10 in from the left edge, track colour, with the two-letter track tag reversed out in white at the top. Inset rather than bled so trim variance doesn't matter.
- **Header** — small caps label (`WHISTLE n` / `WHISTLE` / `REFERENCE` / `STOP`) in the accent colour, card name in 13.5 pt bold ink, accent rule beneath.
- **Body** — auto-fit: the largest size in the 10.6 → 6.4 pt ladder whose content occupies ≤ 93% of the frame. Most cards land at 10.6 pt.
- **Footer** — `Reba · Track Name` left, the **card ID** right, 6.4 pt muted.

## Row structure (standardised on Track B's original)

Every **stage** card has exactly three blocks:

1. **DRILL** — what you physically do. Setup and goal merged; no separate goal line.
2. **PASS** — the numeric gate. Reps, distance, sessions. This is the card's reason to exist.
3. **IF / THEN** — 2–3 failure→fix pairs in a filled table with a track-coloured header row.

**Reference** cards and **track title** cards are a single prose block, no rows.

**Gate** cards are reference cards with the Alert treatment. Reserved for hard stops between tracks.

## Card IDs (decided 2026-08-04)

The footer carries an ID, not a position. A stage keeps its own stage number so the
footer agrees with the header; everything else takes a letter.

| Card type | ID | Example |
|---|---|---|
| Stage | `TAG-n` | `WH-2` is Whistle 2 |
| Track title | `TAG-T` | `WH-T` |
| Reference | `TAG-Rn` | `MK-R4` |
| Gate | `TAG-G` | `LN-G` |

**Why not a running position.** Position numbering made the footer lie: a gate between
stages 5 and 6 pushed `Lines 6` onto card `LN-08`. Worse, inserting a reference card
renumbered every card after it — a reprint of cards whose content never changed. IDs are
insert-stable: a fourth reference becomes `R4` and nothing else moves. Same reasoning that
retired lettering in favour of names.

## Naming (decided 2026-08-03)

Tracks are identified by **name**, not letter. Set `meta.labels: name` in `tracks.yaml`;
`letter` is kept only as a legacy fallback and is no longer printed.

| Track | Short | Tag | Built |
|---|---|---|---|
| Puppy Foundation | Puppy | `PP` | no |
| Basic Obedience | Obedience | `OB` | no |
| Kennel & Place | Place | `PL` | no |
| Force & Collar | Force | `FO` | no |
| Steadiness & Marking | Marks | `MK` | yes |
| Whistle Sit → Casting | Whistle | `WH` | yes |
| Lining & Blinds | Lines | `LN` | yes |
| Water | Water | `WA` | yes |
| Blind & Hunt Day | Hunt | `HU` | no |

Tags are two characters, fixed to the track forever, and must not collide — this is why
they are two and not one (Puppy/Place, Force/... ). **Reserve the tag when the track is
named, not when it is written.** Adding tracks to the front of the program renumbers
nothing and reprints nothing.

## Stage cards vs reference cards

Different reading contexts, so different voice and length.

**Stage card** — prescriptive, read in the field with gloves on. Terse, one axis, no
explanation. DRILL / PASS / IF-THEN.

**Reference card** — diagnostic, read at the kitchen table after a session went wrong.
Longer and more discursive than a stage card, deliberately.

**The authoring test:** if it is needed every rep, it belongs on the stage card. If it is
needed only when something breaks, it belongs on a reference card — **and every stage
where that failure can occur must carry a "See ..." pointer to it.** A reference card no
stage points to will not be found by a handler who does not already know it exists.

Reference cards carry `trigger:` in `tracks.yaml`:

| trigger | meaning |
|---|---|
| `failure` | Pushed by the app when a logged failure mode RECURS. Never on one instance. |
| `prerequisite` | Surfaced BEFORE the stage that needs it. Pushing after a failure is too late — Water Safety read after she is staggering is worthless. |
| `browse` | Never pushed. Available on demand. |

## Primary surface (decided 2026-08-09)

**The phone is the primary surface. The 6 x 4 is the backup.** Every card is designed
to read on a 380 px screen first and to print second. This completes the 2026-08-08
app-first ruling, which made the phone the reference copy of the deck but left the
printed card driving how copy was shaped.

Paper still matters — battery, water, glare, and a bank with no signal — and prints on
demand. It just no longer sets the layout.

## The word budget (decided 2026-08-09)

Body copy auto-fits, and `render_cards.py` warns below **8.2 pt**. That number began as
a legibility floor for a laminated card. It is now enforced for a different reason and
survives the move to a screen unchanged.

**It is a word budget.** Copy that overruns is not shrunk, it is cut, and that is the
only reason these drills are four lines rather than four paragraphs. A drill nobody
finishes reading at first light fails the same way on glass as on paper.

- A `WARN: ... below 8.2pt floor` means **trim the copy**. Never lower the floor.
- If a card genuinely needs the extra words, it is usually two cards. WH-2 splitting out
  WH-R3 on 2026-08-08 is the worked example.
- Field text and teaching method are different reading moments. The stage card is
  glanceable mid-drill; the mechanics belong on a reference card, read at home.

## Rules for new stacks

- **Seven stages and one track title card are fixed. References and Gate cards are added as
  the track needs them.** Amended 2026-08-10; it previously read "three reference cards, 11
  cards per track," which the built deck has never obeyed — Marks carries five references
  and runs to 13, Whistle carries three plus a gate and runs to 12, Water solved the same
  problem the other way by carrying a gate and only two references. Hunt is 12. The
  eleven was a design intention that got written down as a rule and then quietly outvoted
  by four tracks in a row; a rule the deck does not follow is worse than no rule, because
  the next person builds to it and then has to argue their way back out. **What is actually
  load-bearing is the seven stages** — that is the shape of a track — and the word budget,
  which caps what any one card can say. The card count was never doing work.
- Nothing enters a track without a stated **PASS** criterion — no "advance when it feels right".
- Any dependency on another track is named explicitly on the card, by track and stage number.
- Anything that could hurt the dog if run early gets a Gate card, not a footnote.
- Attribution and the AI-assistance disclaimer live on the track title card, not on every card.
