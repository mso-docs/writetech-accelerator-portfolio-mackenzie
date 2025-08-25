# Documentation Tooling Project (Docusaurus Site)
This project involved auditing and restructuring documentation for [Astronomer] using Docusaurus.  
The audit focused on clarity, consistency, and user experience across **Astro**, **Astro CLI**, and **Astronomer Software** documentation.

## Live Site
[View Site](#)

## What I Improved
- **Terminology consistency:** Standardized usage of **DAG** (instead of lowercase “dag”) to align with Airflow conventions and reduce confusion.
- **Canonical deploy overview:** Recommended consolidating scattered deployment content into a single **“Deploy Overview”** page, supported by cross-links to minimize duplication and drift.
- **Visual onboarding aids:** Introduced Mermaid diagrams to explain complex processes (deploy flow, onboarding flow) in a concise, visual format.
- **Versioning transparency:** Elevated visibility of version selectors, restricted CLI releases, and compatibility notes to increase user trust and reduce support burden.

## Challenges
- **Product overlap:** Distinguishing between managed (Astro) and self-hosted (Astronomer Software) documentation, where processes are similar but not identical.
- **Content drift risks:** Multiple deployment entry points (CLI reference, Software deploy, Astro docs) risked falling out of sync without a clear canonical source.
- **Diagram simplification:** Creating visuals that communicated core concepts without overwhelming first-time readers required careful abstraction.

## What I Learned
- **Consistency builds credibility:** Even small terminology differences (e.g., DAG vs dag) impact how professional and trustworthy documentation feels.
- **Information architecture drives usability:** Clear entry points like a consolidated “Deploy Overview” page streamline navigation and reduce user friction.
- **Visuals accelerate comprehension:** Well-placed diagrams quickly orient users, especially for workflows like deploying projects or running a first DAG.
- **Version transparency matters:** Users value clear release notes, runtime compatibility guidance, and warnings about restricted versions.

---

## Supporting Diagrams

### Onboarding Flow: “Run Your First DAG on Astro”

```mermaid
flowchart TD
  A[Landing: Run your first DAG] --> B{Choose a path}
  B -->|Local tools| C[Astro CLI tutorial]
  B -->|No local tools| D[GitHub Actions tutorial]
  C --> E[Authenticate & Login]
  C --> F[Create Deployment]
  C --> G[Deploy DAGs]
  C --> H[Trigger Example DAG]
  D --> H
sequenceDiagram
  participant Dev as Developer
  participant CLI as Astro CLI
  participant Reg as Image Registry
  participant Dep as Airflow Deployment

  Dev->>CLI: run `astro deploy`
  CLI->>CLI: Bundle project (DAGs, dependencies, Dockerfile)
  CLI->>Reg: Push image
  Reg-->>Dep: New image available
  Dep->>Dep: Restart Airflow components
  Dev->>Dep: Open Airflow UI to validate
```