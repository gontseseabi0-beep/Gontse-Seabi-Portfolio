# Gontse Seabi | Personal Portfolio

A static e-portfolio website (HTML, CSS and JavaScript). No build step or installs needed.

## Files

- `index.html` : the page and all tab content
- `css/style.css` : styling (light and dark mode)
- `js/script.js` : tabs, network diagram, photo viewer, feedback email
- `images/` : portrait and gallery photos

## Run locally in VS Code

1. Open this folder in VS Code (File > Open Folder).
2. Install the **Live Server** extension, right-click `index.html` and choose **Open with Live Server**.

## Publish on GitHub Pages

1. Create a new repository on GitHub (for example `gontse-portfolio`), public.
2. In the VS Code terminal, inside this folder:
   ```
   git init
   git add .
   git commit -m "Add portfolio website"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/gontse-portfolio.git
   git push -u origin main
   ```
3. On GitHub: **Settings > Pages**, set Source to **Deploy from a branch**, Branch **main**, folder **/ (root)**, then Save.
4. After a minute your site is live at `https://YOUR-USERNAME.github.io/gontse-portfolio/`.

## Things to edit

- Search `index.html` for `todo` to find the draft notes. Update the wording, then delete those lines.
- Update the photo captions in the Gallery / Evidence tab.
- Student feedback quotes: replace the "No feedback has been added yet" box with real quotes.
