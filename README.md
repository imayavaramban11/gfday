# 💕 GF Day Website

A cute, single-page site to wish your girlfriend on GF Day — envelope intro, flip
cards with reasons you love her, a love letter, a photo gallery, a countdown to
your next date, and a little "love meter" button game.

No build tools, no frameworks — just `index.html`, `style.css`, and `script.js`.

## 📁 Files

```
gf-day-site/
├── index.html
├── style.css
├── script.js
├── assets/
│   └── images/     ← put your photos here
└── README.md
```

## ✏️ How to customize

Open **script.js** — everything you'd want to change is at the very top:

- `GF_NAME` — her name, shown in the big title
- `COUNTDOWN_TARGET` — date/time of your next date night, anniversary, etc.
- `COUNTDOWN_LABEL` — the text under the countdown
- `REASONS` — the list of "reasons I love you" (shown on the flip cards)
- `GALLERY_IMAGES` — list your photo filenames here once you've added them

To add photos:
1. Drop your images into `assets/images/` (e.g. `photo1.jpg`, `photo2.jpg`)
2. In `script.js`, uncomment / add lines in `GALLERY_IMAGES`:
   ```js
   const GALLERY_IMAGES = [
     "assets/images/photo1.jpg",
     "assets/images/photo2.jpg",
   ];
   ```

To edit the love letter text, open **index.html** and edit the paragraph
inside `<div class="letter-paper">`.

## 🚀 Deploying to GitHub Pages

1. Create a new repository on GitHub (e.g. `gf-day`), don't initialize it with a README.
2. From inside this `gf-day-site` folder, run:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages**.
4. Under "Build and deployment", set **Source** to `Deploy from a branch`,
   branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then your site will be live at:
   ```
   https://<your-username>.github.io/<repo-name>/
   ```

That's it — no build step needed since it's plain HTML/CSS/JS.

## 💡 Ideas to go further

- Add background music with an `<audio>` tag and a mute/play button
- Add a "reasons" counter that only unlocks a new card each day
- Password-protect nothing — keep it simple and just send the link 💌
