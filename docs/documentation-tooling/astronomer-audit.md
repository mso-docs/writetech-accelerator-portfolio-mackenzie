---
id: astronomer-audit
title: Astronomer Documentation Audit (Astro, Astro CLI, Software)
description: Findings, diagrams, and recommendations from a focused review of Astronomer docs (Astro, Astro CLI, and Software), including deploy flows and onboarding.
sidebar_position: 10
tags: [astronomer, astro, airflow, documentation, audit]
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> This page summarizes a short audit of Astronomer’s documentation and proposes improvements with diagrams you can adapt for onboarding and deployment guides.

## Scope Reviewed

- **Astronomer Software docs landing** (version 0.37, version switcher, IA, “Most popular”).  
  Source: Astronomer Software documentation.  
  *URL reviewed:* astronomer.io/docs/software/
- **Astro CLI release notes** (current stable versions and dates).  
  *URL reviewed:* astronomer.io/docs/astro/cli/release-notes/
- **Run your first dag on Astro** (onboarding/tutorial).  
  *URL reviewed:* astronomer.io/docs/astro/run-first-dag/
- **Deploy code to Astronomer Software using the Astro CLI** (end-to-end deploy).  
  *URL reviewed:* astronomer.io/docs/software/deploy-cli/

> See “References” at the end for direct links.

---

## Executive Summary

**Strengths**
- Clear product segmentation across **Astro**, **Astro CLI**, **Software**, **Learn**.
- Software docs prominently show a **version selector** and “Most popular” links.
- **Release notes** are fresh and specific (Airflow 3 support, restricted versions).
- Deployment docs clearly outline **image deploys** and **DAG-only** options.

**Opportunities**
1. **Terminology consistency:** Prefer **DAG** uppercase in headings/body for clarity and alignment with Airflow terminology.
2. **Reduce duplication/drift:** Establish a canonical “Deploy overview” and keep per-surface pages scoped; rely on cross-links for depth.
3. **Lead with visuals:** Add a compact “What gets deployed?” visual near the top of deploy tutorials.

---

## Information Architecture (Current → Proposed)

### Current High-Level IA (simplified)

```mermaid
flowchart LR
  A[Global Nav] --> B[Astro]
  A --> C[Astro CLI]
  A --> D[Software (0.37 selector)]
  A --> E[Learn]

  D --> D1[Overview + Popular]
  D --> D2[Get started]
  D --> D3[Install]
  D --> D4[Develop]
  D --> D5[Administration]
  D --> D6[Observability]
  D --> D7[Runtime]
  D --> D8[Troubleshoot]
  D --> D9[Release notes]
  D --> D10[Reference]
```
