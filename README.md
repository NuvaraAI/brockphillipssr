# Brock Phillips Sr portfolio website

A personal portfolio built around professional experience, projects, continued learning, and published work. It includes ten case studies, a comprehensive master résumé, and a searchable archive of military, civilian, youth-program, security, and technology training.

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
- `TRAINING.json` supplies the training archive, categories, and supporting document links.
- `templates.mjs` renders the expanded career, résumé, and training views.
- `content/projects/` contains the detailed case studies.
- `src/` contains the original styles and progressive browser interactions.

Project status and dated evidence are explicit. Course completion is kept separate from vendor exam certification. Historical training does not imply a current credential. AI-assisted contributions are disclosed in the case studies. Public record copies are sanitized; private originals and redaction maps stay outside the repository.

## Visitor interactions

Visitors can search projects and training, read case studies, preview technology certificates, open supporting records, download full or concise résumés, and use the published business email or Nuvara contact page. The full content and downloads remain accessible without JavaScript.
