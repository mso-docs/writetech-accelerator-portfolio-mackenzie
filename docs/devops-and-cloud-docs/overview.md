# Overview

Continuous Integration and Continuous Deployment (CI/CD) are at the heart of modern DevOps workflows. They allow developers to automatically build, test, and deploy software whenever new code is committed to a repository.

This guide walks you through setting up a **CI/CD pipeline using GitHub Actions** to deploy a **static website** (e.g., built with Docusaurus, MkDocs, or React) to **Vercel** or **Netlify**.  
By the end, you’ll have a fully automated workflow that builds and deploys your site every time you push to the `main` branch — without ever clicking “Deploy” manually again.

---

## What Is CI/CD?

| Concept | Description |
|----------|--------------|
| **Continuous Integration (CI)** | Automates building and testing your project whenever code changes are pushed. Ensures your site always builds successfully. |
| **Continuous Deployment (CD)** | Automatically pushes the latest successful build to production or staging. Reduces human error and accelerates release cycles. |

In this project, we focus on **Continuous Deployment** for static sites — a lightweight and effective way to learn the fundamentals of DevOps automation.

---

## Why GitHub Actions?

GitHub Actions is a native automation platform built into GitHub repositories. It lets you define workflows in simple YAML files that run in the cloud whenever events (like `push` or `pull_request`) occur.

**Key Benefits:**
- 🔄 **Native Integration** — No third-party CI tool needed.
- 💸 **Free for public repos** — Generous build minutes for personal projects.
- 🔒 **Secure Secrets Management** — Tokens and keys are encrypted and stored in GitHub Secrets.
- 🧩 **Reusable Actions** — Thousands of prebuilt actions available on the [GitHub Marketplace](https://github.com/marketplace?type=actions).

---

## What You’ll Build

A simple, automated pipeline that:
1. Checks out your repository  
2. Installs dependencies  
3. Builds your static site  
4. Deploys automatically to Vercel or Netlify  

> **Goal:** Every commit to `main` triggers a workflow → builds your site → deploys it live in under two minutes.

---

## Example Use Case

You’ve built a documentation site with Docusaurus and want every update to publish instantly to your live domain on Vercel.  
You’ll configure GitHub Actions to:
- Build the Docusaurus site automatically using `npm run build`
- Deploy it to Vercel using your secure token
- Report the status back to the GitHub Actions dashboard

This is a foundational DevOps workflow — the same process used in production-grade pipelines.

---

## Prerequisites

Before beginning, make sure you have:
- ✅ A GitHub account and a repository with your static site code
- ✅ Basic familiarity with the command line
- ✅ Node.js and npm installed locally
- ✅ A **Vercel** or **Netlify** account for hosting
- ✅ (Optional) A verified custom domain name

---

## Project Goals

By following this documentation, you will:
- Understand how CI/CD works conceptually and practically
- Learn how to write and debug GitHub Actions YAML files
- Gain hands-on experience with environment variables and secrets
- Automate your documentation or personal site deployment pipeline
- Build confidence in working with DevOps tools

---

Next: [Setup Instructions →](setup.md)
