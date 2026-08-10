# STATE_MANIFEST.md — what the current files actually are

**Generated 2026-08-10 15:30 by `tools/manifest.py`. Do not hand-edit.**

Read this BEFORE rewriting any file below. If the copy you are holding
does not hash to the value here, your copy is stale — hand over a patch,
not a replacement. A whole file written from a stale base deletes
everything added since that base, and does it silently.

**Append-or-splice only, no exceptions:** `APP_STATE.md`, `REBA_PROGRAM.md`, `SESSIONS.md`

| File | sha256 (first 16) | lines | bytes | what it is |
|---|---|---:|---:|---|
| `REBA_PROGRAM.md` | `cf63d8f0fbf0aa62` | 1204 | 95223 | program state — decision log is authoritative |
| `SESSIONS.md` | `b431d120423d013c` | 469 | 21420 | the session stream — append/splice only, newest at top |
| `APP_STATE.md` | `608e89a3c0fa378f` | 543 | 37480 | app and schema rulings |
| `tracks.yaml` | `cfe6a263f16f8860` | 1272 | 68614 | all card copy — the only place card text lives |
| `CARD_STYLE.md` | `66ca151c458aaad2` | 178 | 9088 | card design law |
| `history_seed.yaml` | `7f1b126ab8f676e2` | 189 | 10023 | pre-app sessions, assertions, stand-downs |
| `tools/state.py` | `467c57d5f0f0f4b7` | 630 | 31397 | the state engine |
| `tools/render_cards.py` | `1daf4e0cb4b603c1` | 621 | 24318 | card renderer |
| `tools/audit_tracks.py` | `4320deba4aa9d20d` | 108 | 3769 | deck audit |
| `tools/build_app.py` | `273f7429717c1bd1` | 218 | 10266 | app builder |
| `index.html` | `88ab96065aef0938` | 978 | 160182 | the app |
| `sw.js` | `045924381ad38015` | 62 | 3419 | service worker — static cache key by ruling |

## Full digests

```
cf63d8f0fbf0aa6256434df9410302afd0ff82039eb7396de4c79435b6dae917  REBA_PROGRAM.md
b431d120423d013cda4ffbb1c73f54ea4171fa087a2d6447dd579361606491bd  SESSIONS.md
608e89a3c0fa378f0aeec71ead9fe9c3f27870a838757643e3a2b2568d82d7da  APP_STATE.md
cfe6a263f16f8860f44a46186ea08fa02b4512d38287e5d7450b35ef20a02abe  tracks.yaml
66ca151c458aaad2e47ffa45717db507eae7521f50e8400096da430229827e44  CARD_STYLE.md
7f1b126ab8f676e23d94005369d42d9a4c08d8bd63e0c9da4b38894d2f86ba0b  history_seed.yaml
467c57d5f0f0f4b771422cbb2ac18ae87af318c782f0836fc420c81bcb0ca3e8  tools/state.py
1daf4e0cb4b603c1573911c09049a8ebf00806315f3641fb747541dcfb321795  tools/render_cards.py
4320deba4aa9d20d005d7f6d035c022f4fefb01f8d5a033926f6c91ae65bfcf5  tools/audit_tracks.py
273f7429717c1bd1abac2c2ca759c88621f0ccb1875076f9b42e26674f7718be  tools/build_app.py
88ab96065aef093855de8ebdcc0279cd80806814145f7ada7b8770247681f619  index.html
045924381ad380152f9371ba0290ab16a4057be30e9f8006644363c4647dac02  sw.js
```
