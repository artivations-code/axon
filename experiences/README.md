# Beyond The Sun interactive experiences

Twelve self-contained HTML pages plus a hub (`index.html`). No build step, no server, no dependencies beyond one Google Fonts stylesheet per page.

## Open locally
Double-click any `.html` file, or open `experiences/index.html` for the hub.

## Publish
Any static host works (GitHub Pages, Netlify, Cloudflare Pages, Squarespace file upload). Upload the whole `experiences/` folder; links between pages are relative.

## Embed one experience in Squarespace
1. Upload the page as a file (Settings → Files) or host it elsewhere and copy its URL.
2. Add a Code block to the Squarespace page with:
   ```html
   <iframe src="https://YOUR-HOST/experiences/05-adoption-constellation.html"
           title="The Adoption Constellation"
           style="width:100%;height:90vh;border:0;border-radius:20px"
           loading="lazy"></iframe>
   ```
3. Pasting a page's full source into a Code block also works. Each page is one file.

## Edit the words
Every page keeps its editable content in labeled JavaScript data objects near the top of its `<script>`. Each script opens with a comment explaining what to change. Logic stays below the data.

## What persists
Pages save the person's work in that browser's `localStorage` only. Nothing is sent anywhere. "Start fresh" clears it. Export (text or JSON) is how work leaves the device; import brings a JSON file back.

## Labels used inside the pages
- **Example, replace me**: seeded content that shows the structure.
- **Draft**: original writing that Katy reviews or replaces.
- **Needs source confirmation**: a factual claim to verify before publishing.
- **Not yet documented**: a data slot that stays visibly empty until a sourced entry exists.

## Render check
```
node tools/render-check.js experiences/<file>.html
```
The script needs Playwright with Chromium installed. It renders at 1280px and 400px, reports console errors and horizontal overflow, and writes screenshots.
