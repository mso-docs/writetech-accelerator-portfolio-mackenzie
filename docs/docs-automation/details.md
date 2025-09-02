# Docs Automation — Vale, Spectral, Redocly

This folder contains sample files and outputs used to demonstrate automated documentation checks and builds.

## What’s here
- `sample.md` — Markdown for Vale & link checking
- `openapi.yaml` — Minimal OpenAPI 3.0 spec for Spectral + Redocly
- `site/` — Generated static docs output (created by the workflow)

## Workflows
- **Lint Markdown & Links**: `.github/workflows/vale.yml`
  - Runs Vale on Markdown files
  - Runs lychee link checker

- **OpenAPI Lint & Docs Build**: `.github/workflows/spectral.yml`
  - Spectral lints all `*.yaml`
  - Redocly builds a static HTML site from `openapi.yaml`

## Local testing
```bash
# Vale (requires installing Vale locally)
vale --version
vale .

# Spectral (requires Node and spectral-cli)
spectral --version
spectral lint docs/docs-automation/openapi.yaml

# Redocly (requires Node and redocly/cli)
redocly --version
redocly build-docs docs/docs-automation/openapi.yaml --output ./local-site/index.html

# Docs Automation — Vale, Spectral, Redocly

This folder contains sample files and outputs used to demonstrate automated documentation checks and builds.

## What’s here
- `sample.md` — Markdown for Vale & link checking
- `openapi.yaml` — Minimal OpenAPI 3.0 spec for Spectral + Redocly
- `site/` — Generated static docs output (created by the workflow)

## Workflows
- **Lint Markdown & Links**: `.github/workflows/vale.yml`
  - Runs Vale on Markdown files
  - Runs lychee link checker

- **OpenAPI Lint & Docs Build**: `.github/workflows/spectral.yml`
  - Spectral lints all `*.yaml`
  - Redocly builds a static HTML site from `openapi.yaml`

## Local testing
```bash
# Vale (requires installing Vale locally)
vale --version
vale .

# Spectral (requires Node and spectral-cli)
spectral --version
spectral lint docs/docs-automation/openapi.yaml

# Redocly (requires Node and redocly/cli)
redocly --version
redocly build-docs docs/docs-automation/openapi.yaml --output ./local-site/index.html


## quick start
```bash
git init writetech-accelerator-portfolio-yourname
cd writetech-accelerator-portfolio-yourname
# add the files above…
git add .
git commit -m "Add Vale, Spectral, and Redocly automation"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
