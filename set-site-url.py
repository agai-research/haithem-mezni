#!/usr/bin/env python3
"""Change the address of the site everywhere (canonical links, hreflang, sitemap, robots.txt, structured data, 404 page).
Usage, from the root of the repository:  python3 set-site-url.py https://haithemmezni.com
The current address is read from sitemap.xml, so the script can be run again after any change of address.
"""
import os, re, sys
if len(sys.argv) != 2 or not sys.argv[1].startswith("https://"):
    sys.exit("Usage: python3 set-site-url.py https://new-address")
new = sys.argv[1].rstrip("/")
root = os.path.dirname(os.path.abspath(__file__))
loc = re.search(r"<loc>(https://[^<]+?)/(en|fr)/", open(os.path.join(root, "sitemap.xml"), encoding="utf-8").read())
old = loc.group(1) if loc else "https://VOTRE-SITE"
if old == new:
    sys.exit(f"The site already uses {new}")
n = 0
for dp, dirs, files in os.walk(root):
    dirs[:] = [d for d in dirs if d not in (".git", "source", "node_modules")]
    for f in files:
        if f.endswith((".html", ".xml", ".txt")):
            p = os.path.join(dp, f)
            s = open(p, encoding="utf-8").read()
            if old in s:
                open(p, "w", encoding="utf-8").write(s.replace(old, new)); n += 1
print(f"{n} files updated: {old} -> {new}")
