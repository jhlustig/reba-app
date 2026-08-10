# STATE_MANIFEST.md — what the current files actually are

**Generated 2026-08-10 by `tools/manifest.py`. Do not hand-edit.**

Read this BEFORE rewriting any file below. If the copy you are holding
does not hash to the value here, your copy is stale — hand over a patch,
not a replacement. A whole file written from a stale base deletes
everything added since that base, and does it silently.

**Append-or-splice only, no exceptions:** `APP_STATE.md`, `REBA_PROGRAM.md`, `SESSIONS.md`

| File | sha256 (first 16) | lines | bytes | what it is |
|---|---|---:|---:|---|
| `REBA_PROGRAM.md` | `cf63d8f0fbf0aa62` | 1204 | 95223 | program state — decision log is authoritative |
| `SESSIONS.md` | `81912e23b32c1931` | 463 | 20943 | the session stream — append/splice only, newest at top |
| `APP_STATE.md` | `608e89a3c0fa378f` | 543 | 37480 | app and schema rulings |
| `tracks.yaml` | `4af4b9e34300ccaa` | 982 | 51991 | all card copy — the only place card text lives |
| `CARD_STYLE.md` | `5302fd850df96be5` | 147 | 6841 | card design law |
| `history_seed.yaml` | `754aefb581fe1c0b` | 181 | 9275 | pre-app sessions, assertions, stand-downs |
| `tools/state.py` | `dabb17cd5dbdd1c5` | 515 | 23945 | the state engine |
| `tools/render_cards.py` | `1daf4e0cb4b603c1` | 621 | 24318 | card renderer |
| `tools/audit_tracks.py` | `5040bb693b5f2007` | 90 | 2890 | deck audit |
| `tools/build_app.py` | `b9363b944d249321` | 171 | 7594 | app builder |
| `index.html` | `08a73d240642a993` | 885 | 125557 | the app |
| `sw.js` | `af141aa024afab49` | 55 | 2948 | service worker — static cache key by ruling |

## Full digests

```
cf63d8f0fbf0aa6256434df9410302afd0ff82039eb7396de4c79435b6dae917  REBA_PROGRAM.md
81912e23b32c193159ca66b49b924e1b25f46dc85455bd364364218d5cd972eb  SESSIONS.md
608e89a3c0fa378f0aeec71ead9fe9c3f27870a838757643e3a2b2568d82d7da  APP_STATE.md
4af4b9e34300ccaaed9bb59e4b0833d8e6a49b77d7b9e0a947415af75063b6fb  tracks.yaml
5302fd850df96be57e7b44a553d87f50a7294893277ecd6583a1faf9d8a2fbfa  CARD_STYLE.md
754aefb581fe1c0be27c945030eb8218555fbb6a3d601bc3edc2f2d790bb7b07  history_seed.yaml
dabb17cd5dbdd1c5c697b7af87dc9239b2493a8b4b27530bed5190b05682ff0f  tools/state.py
1daf4e0cb4b603c1573911c09049a8ebf00806315f3641fb747541dcfb321795  tools/render_cards.py
5040bb693b5f20071bc74eb23a53b6d258d8b1efc9a183a6f674f3e4ba762fdb  tools/audit_tracks.py
b9363b944d249321256687a6d28fc0d0c6bd3b8350f4d55a6d04b025e360d05d  tools/build_app.py
08a73d240642a993924547c4cf3686188e4366a7ad45ce383950f0d0d9178cf0  index.html
af141aa024afab49bfd7aef0218a1507ab0804a5e12735599d03f13810354439  sw.js
```
