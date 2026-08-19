# Wonder Promo Code — static clone

Plain static HTML/CSS/JS clone of wonderpromocode.com. No build step, no
Node/Astro required. Open `index.html` directly in a browser, or serve the
`site/` folder with any static file server (nginx, Caddy, `python -m http.server`,
Netlify/Vercel static hosting, S3, etc.) — everything is relative paths, so it
works from any subpath/domain.

## Referral code

The promo code wired into every page (hero, CTA sections, checkout links,
copy-to-clipboard widget) is **ANDY626**, replacing the original ALMA465. It
appears in visible copy and in the `auto_applied_promo_code` query param on
every link to wonder.com.

## Structure

- `index.html`, `locations.html`, `about.html`, etc. — top-level pages
- `blog/` — the 3 ported blog posts (`wonder-vs-ubereats.html`,
  `wonder-vs-grubhub.html`, `wonder-delivery-zones.html`)
- `css/style.css` — all styling; the color palette lives in the `:root` block
  at the very top of the file (CSS custom properties: `--cream`, `--mint`,
  `--butter`, `--forest`, `--ink`, etc.). Everything else in the stylesheet
  (layout, spacing, type scale) is untouched from the original — swap hex
  values there to retheme further.
- `js/main.js` — shared behavior: nav background-on-scroll, and the
  copy-to-clipboard button on the promo code card. Loaded on every page.

## Known limitations

- **Location images are not included.** Pages reference
  `images/locations/<slug>.webp` (hero backgrounds on the homepage's city
  cards, per-neighborhood cards on state pages, and blog post hero images).
  Those files were never downloaded — only the live HTML/CSS was. Supply
  actual `.webp` files under `site/images/locations/` matching the slugs
  used in the markup (e.g. `williamsburg.webp`, `hoboken.webp`,
  `astoria.webp`, ...) to make them appear. Unsplash-hosted stock photos
  (step images, hero photo) are untouched hotlinks and work as-is.
- **Neighborhood/city detail sub-pages are not part of the clone.** Some
  state pages (e.g. `nyc.html`) link to per-neighborhood pages like
  `nyc/astoria.html` or `nyc/97th-and-columbus.html`. Raw source for those
  wasn't provided, so they're not built — the links point at the expected
  relative path but the target files don't exist yet.
- **Two blog posts referenced but not ported.** The blog index lists
  "Wonder+ Subscription Review" (`blog/wonder-plus-review.html`) and
  "Wonder + Grubhub" (`blog/wonder-grubhub-acquisition.html`) as upcoming
  posts, but raw HTML for those two wasn't in the source set, so only the
  3 posts that were provided are built.
- Favicon/manifest links (`/favicon.ico`, `/site.webmanifest`, etc.) are left
  as root-absolute paths from the original site and aren't included as files.
  Harmless 404s if unresolved; add real favicon files at the site root and
  they'll pick up automatically.
- The clipboard-copy button relies on `navigator.clipboard`, which most
  browsers only expose on `https://` or `localhost` — it will silently no-op
  when opening `index.html` straight off disk via `file://`. Works normally
  once hosted.
