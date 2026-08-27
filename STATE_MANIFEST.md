# STATE_MANIFEST.md — what the current files actually are

**Generated 2026-08-27 by `tools/manifest.py`. Do not hand-edit.**

Read this BEFORE rewriting any file below. If the copy you are holding
does not hash to the value here, your copy is stale — hand over a patch,
not a replacement. A whole file written from a stale base deletes
everything added since that base, and does it silently.

**Append-or-splice only, no exceptions:** `APP_STATE.md`, `REBA_PROGRAM.md`, `SESSIONS.md`

| File | sha256 (first 16) | lines | bytes | what it is |
|---|---|---:|---:|---|
| `START_HERE.md` | `60e7677c225928f8` | 157 | 6846 | the three laws — read first, and hash-checked for that reason |
| `REBA_PROGRAM.md` | `66d68a95b0ff5207` | 1499 | 119464 | program state — decision log is authoritative |
| `SESSIONS.md` | `f6839fad840980de` | 998 | 34387 | the session stream — append/splice only, newest at top |
| `APP_STATE.md` | `ba3690669ef84aa2` | 625 | 43917 | app and schema rulings |
| `tracks.yaml` | `ab4a583408f1b8ef` | 1288 | 68881 | all card copy — the only place card text lives |
| `CARD_STYLE.md` | `66ca151c458aaad2` | 178 | 9088 | card design law |
| `history_seed.yaml` | `7f1b126ab8f676e2` | 189 | 10023 | pre-app sessions, assertions, stand-downs |
| `tools/state.py` | `b9c087a1f3b6628f` | 639 | 31820 | the state engine |
| `tools/render_cards.py` | `1daf4e0cb4b603c1` | 621 | 24318 | card renderer |
| `tools/audit_tracks.py` | `5350b9bbf6843dfb` | 109 | 3790 | deck audit |
| `tools/build_app.py` | `effce2b4e79ffbbf` | 316 | 14343 | app builder |
| `index.html` | `211b241b7a05f67c` | 1901 | 210758 | the app |
| `sw.js` | `d9b13b17a6aa6396` | 62 | 3415 | service worker — static cache key by ruling |

## Full digests

```
60e7677c225928f8d014e78b30e93090d143e80276dd538c3732717643198378  START_HERE.md
66d68a95b0ff52075e13d582cb558c8b75fdf54b06fe528e513b094fed0448f3  REBA_PROGRAM.md
f6839fad840980dede2052441d7bdced83cf6f0dd8e87c3529ad7a29953df507  SESSIONS.md
ba3690669ef84aa27f877ae14c4325ba1038b420cc28d8a711c90d12098650f0  APP_STATE.md
ab4a583408f1b8ef14ecca42cb425a7b50d3b4e3b49f3c4439b6e070aa057d6c  tracks.yaml
66ca151c458aaad2e47ffa45717db507eae7521f50e8400096da430229827e44  CARD_STYLE.md
7f1b126ab8f676e23d94005369d42d9a4c08d8bd63e0c9da4b38894d2f86ba0b  history_seed.yaml
b9c087a1f3b6628f7e02912ddc847d9dbb623b60f611044bea1e247d9915d599  tools/state.py
1daf4e0cb4b603c1573911c09049a8ebf00806315f3641fb747541dcfb321795  tools/render_cards.py
5350b9bbf6843dfbc87a6626a2d7b420726126aaa813f538fdae6ef481b2917e  tools/audit_tracks.py
effce2b4e79ffbbf81c6ccc0a71fab8a04060b9403fd4916298f94d076478752  tools/build_app.py
211b241b7a05f67cf7c0aaeb8e066784966bd71d255efc387b3c2bbc78adc4be  index.html
d9b13b17a6aa63965cccd06306066f999c1807d90d6db93c17ccc691d8e0b230  sw.js
```
