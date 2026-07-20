# JMM Construction NYC — Website

Marketing website for **JMM Construction**, a NYC subcontractor specializing in
**carpentry, tile, concrete, painting, and taping** — interior & exterior.

- **Phone:** 347-228-4257
- **Email:** jmmconstructionnyc@gmail.com
- **Instagram:** [@jmmconstructionnyc](https://instagram.com/jmmconstructionnyc)
- **Service area:** All 5 boroughs of NYC & the tri-state area
- **Credentials:** NYC DCA Licensed Contractor · Licensed & Insured · Free Estimates · 100% Job Guarantee

## What's in here

| File | Purpose |
|------|---------|
| `index.html` | The website (single page, responsive) |
| `assets/css/styles.css` | Styles |
| `assets/js/main.js` | Mobile menu, scroll effects, estimate form |
| `assets/img/logo.svg` | JMM logo |
| `assets/img/qr.png` / `qr.svg` | QR code that links to the live site |
| `flyer.html` | Print-ready double-sided 4"×6" postcard flyer **with the QR code built in** |

## Deploying the website (GitHub Pages)

The site is built to live at **`https://d1obrand0.github.io/d1obrand0/`** — this is
the address the flyer's QR code points to.

To publish it:

1. Merge this branch into your default branch (`main`), **or** in the repo go to
   **Settings → Pages** and set **Source = Deploy from a branch**, then pick this
   branch and the `/ (root)` folder.
2. A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) will also
   auto-deploy on every push to `main`. The first time, enable Pages under
   **Settings → Pages → Source = GitHub Actions**.
3. Wait ~1 minute, then visit `https://d1obrand0.github.io/d1obrand0/`.

> If you later move to a custom domain (e.g. `jmmconstructionnyc.com`), regenerate
> the QR code to point at the new address (see below) and reprint the flyers.

## Printing the flyer

Open `flyer.html` in a browser and click **Print**. Choose paper size **4×6 in**
(or "Actual size"), turn on **Background graphics**, and print/export to PDF.
It produces two sides — front and back. The QR code is embedded, so the file is
self-contained and can be emailed to a print shop as-is.

## Regenerating the QR code (if the web address changes)

```bash
pip install segno
python3 -c "import segno; segno.make('https://YOUR-NEW-URL/', error='h').save('assets/img/qr.png', scale=12, border=2, dark='#111111')"
```

Then update the URL text in `flyer.html` and re-embed the new QR image.
