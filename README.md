# Brock Phillips Sr portfolio website

A personal portfolio built around projects, professional experience, and contact. The website includes ten case studies, eight course-completion records, published writing, and a résumé based on the reviewed master.

Website: [nuvaraai.github.io/brockphillipssr](https://nuvaraai.github.io/brockphillipssr/)

## Build

Requires Node.js 20 or later.

```sh
npm ci
npm run build
```

The build writes static HTML, CSS, and JavaScript to `docs/`. Assets and public document copies are retained in that directory. GitHub Pages serves `docs/` from the `main` branch; `.nojekyll` preserves the static output.

## Content

- `CONTENT.json` defines the introduction, project summaries, course records, and publication.
- `RESUME.json` supplies the résumé page from reviewed professional and project records.
- `content/projects/` contains the detailed case studies.
- `src/` contains the original styles and progressive browser interactions.

Project status and dated evidence are explicit. Course completion is kept separate from vendor exam certification. AI-assisted contributions are disclosed in the case studies. Certificate identifiers and original private documents are excluded from publication.

## Visitor interactions

Visitors can filter and search projects, read individual case studies, preview course records, open certificate PDFs, view and download the résumé, and use the published business email or Nuvara contact page. Projects and downloads remain accessible without JavaScript.
