# DoCoG Project Page Guide

This is the public GitHub Pages repository for the DoCoG ECCV 2026 project
page: <https://docog-eccv.github.io>.

## Repository layout

- `index.html` is the primary project page.
- `docog-eccv.github.io/index.html` is a second site copy kept in the repository.
- `slides/` contains the public presentation linked from the primary page.
- `static/` contains page styles, scripts, figures, logos, and qualitative data.
- `docog-demo-backup.zip` is a historical backup of the standalone interactive
  demo work. It is not part of the live site.

When changing shared page content, update both index files unless a difference is
intentional. The primary page currently includes the Slides button and Spotlight
label; do not remove those differences accidentally.

## Current public features

- ECCV 2026 Spotlight project header and author list.
- The first three authors are visually emphasized as equal contributors.
- Public workshop information for eXCV, MUCG, and UniWorld.
- Teaser, abstract, method, qualitative examples, dataset, and results sections.
- Public Slides, Springer Paper, Google Scholar BibTeX, Hugging Face Space,
  YouTube Video, and Hugging Face Model links in the top action row.
- A visible official BibTeX section with a copy-to-clipboard button.
- Light mode by default. Dark mode is enabled only when a visitor clicks the
  theme button; system theme detection and persistence are intentionally disabled.
- Code and dataset controls remain marked as coming soon.

## Interactive demo backup

The upload-and-question interactive demo was removed from the live pages and
preserved in `docog-demo-backup.zip`. The archive contains these historical files:

- `index.html`
- `demo.html`
- `docog-eccv.github.io/index.html`
- `docog-eccv.github.io/demo.html`

The archived index files include the corresponding demo links and call-to-action
section. Keep the ZIP as an archive; do not extract or deploy it into the public
site without reviewing the entire demo implementation, configuration, privacy
notice, and network behavior first.

## Public repository safety

- Treat every committed file, including ZIP archives and Git history, as public.
- Never commit passwords, API keys, access tokens, private endpoints, credentials,
  personal data, private evaluation data, or confidential documents.
- Do not place secrets in HTML, JavaScript, comments, examples, archives, or Git
  history. Client-side values are visible to every visitor.
- Use only approved public URLs and assets. Add `rel="noopener noreferrer"` to
  external links opened with `target="_blank"`.
- Review archived files before restoring them; historical code may no longer match
  current security, privacy, or deployment requirements.
- Do not commit `.DS_Store`; it is ignored repository metadata.

## Safe update checklist

1. Make the smallest required change and preserve intentional differences between
   the two index files.
2. Confirm external URLs point to official public resources.
3. Search the diff for secrets, private hostnames, personal data, and accidental
   local paths.
4. Run `git diff --check` and inspect `git diff` before committing.
5. Stage only intended files. Keep `.DS_Store` and unrelated local changes out of
   commits.
6. Verify the live GitHub Pages site after pushing.
