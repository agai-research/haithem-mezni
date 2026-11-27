# Haithem Mezni — academic website

Bilingual (English / French) static website of Haithem Mezni, Associate Professor of Computer Science, University of Jendouba.

- Site address (GitHub Pages): https://agai-research.github.io/haithem-mezni/
- Pages: `en/` and `fr/` (home, research, publications, code, teaching, CV, contact)
- Content and generator: `source/` (edit `source/content.js`, then run `npm install` once and `node build.js https://site-address` in `source/`; copy the files of `source/dist/` to the root of this repository)

## Publishing with GitHub Pages

1. The repository must be **public** (GitHub Pages is not available for private repositories on a free account): Settings → General → Danger Zone → Change visibility.
2. Settings → Pages → Build and deployment → Source: **Deploy from a branch**, Branch: **main**, folder **/ (root)** → Save.
3. After one or two minutes the site is online at the address above.

## Custom domain (for example haithemmezni.com)

1. Buy the domain, then in Settings → Pages → Custom domain, enter it and save.
2. At the registrar, create four A records for `@` (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153) and a CNAME record for `www` pointing to `agai-research.github.io`.
3. Tick **Enforce HTTPS** once the DNS check succeeds.
4. Update the address used by search engines: `python3 set-site-url.py https://haithemmezni.com`, then commit and push.

## Contact form

The form sends messages through FormSubmit to haithem.mezni@fsjegj.rnu.tn. After the site is online, send one test message from the Contact page and click the activation link that FormSubmit emails to that address (once only).

## Indexing

Add the site to Google Search Console and Bing Webmaster Tools and submit `sitemap.xml`.
