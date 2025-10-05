# DevOps & Cloud Documentation Project  
**Topic:** CI/CD with GitHub Actions for Static Website Deployment  
**Author:** Mackenzie O’Brien (Mackenzie.TechDocs)  
**Course Module:** WriteTech Accelerator — DevOps & Cloud Documentation  
**Date:** September 2025  

---

## 📖 Overview

This project simulates a real-world documentation engineering task in a **DevOps and Cloud-native environment**.  
It provides a full end-to-end guide for automating static website deployment using **GitHub Actions**, **Vercel**, and **Netlify**.

The goal is to help new developers and documentation writers understand **how to create, configure, and troubleshoot** a continuous integration and deployment (CI/CD) workflow — from zero setup to a live production deployment.

---

## 🧭 Project Structure

```
/docs/devops-cloud-documentation/
├── overview.md
├── setup.md
├── step_by_step.md
├── troubleshooting.md
├── summary.md
├── reflection.md
└── README.md
```

All visual assets and diagrams (e.g., workflow overviews, dashboard screenshots) are stored under:
```
/docs/devops-cloud-documentation/media/
```

---

## 📂 Documentation Sections

| File | Description |
|------|--------------|
| [overview.md](overview.md) | Introduces CI/CD concepts, explains GitHub Actions, and outlines project goals |
| [setup.md](setup.md) | Covers repository preparation, hosting setup (Vercel/Netlify), and secret configuration |
| [step_by_step.md](step_by_step.md) | Detailed walkthrough of the workflow YAML, build process, and deployment automation |
| [troubleshooting.md](troubleshooting.md) | Common CI/CD errors, causes, and resolutions for developers |
| [summary.md](summary.md) | Wrap-up of the project with validation steps and advanced optimization ideas |
| [reflection.md](reflection.md) | Personal and professional reflection on technical growth and writing insights |

---

## 🧰 Technologies and Tools Used

| Category | Tools |
|-----------|--------|
| **Version Control** | Git, GitHub |
| **CI/CD Platform** | GitHub Actions |
| **Hosting Providers** | Vercel, Netlify |
| **Languages** | Markdown, YAML |
| **Build Framework** | Node.js (static site build) |
| **Docs-as-Code** | Visual Studio Code, Git CLI |
| **Optional Extensions** | Vale, Spectral, YAML Lint, Prettier |

---

## ⚙️ Workflow Summary

This documentation demonstrates a complete DevOps automation workflow:

1. **Trigger:** Every `push` to the `main` branch  
2. **Build:** Executes `npm ci` and `npm run build`  
3. **Deploy:** Automatically deploys to Vercel or Netlify using GitHub Secrets  
4. **Validation:** Confirms deployment logs and production URLs  
5. **Error Handling:** Provides actionable fixes for CI/CD failures  

Example snippet from the workflow:
```yaml
name: Deploy Static Site
on:
  push:
    branches: [ main ]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - run: npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
```

---

## 🧠 Learning Objectives

- Understand **CI/CD pipelines** and workflow automation  
- Learn **GitHub Actions** syntax and configuration  
- Apply **Docs-as-Code** principles in a DevOps context  
- Document both **setup** and **troubleshooting** processes clearly  
- Demonstrate **technical writing proficiency** in cloud-based environments  

---

## 🎓 Reflection Summary

This project helped me:
- Deepen my knowledge of DevOps and CI/CD concepts  
- Practice real-world debugging and documentation clarity  
- Build empathy for developer pain points through structured guidance  
- Strengthen my identity as a **documentation engineer** who builds reproducible, automated systems  

> _“Great documentation doesn’t just explain a system — it automates understanding.”_

---

## 🏗 Future Enhancements

- Add **Spectral** or **Vale** checks for automated documentation linting  
- Integrate **Slack notifications** for deployment results  
- Include **Terraform automation** for multi-environment infrastructure setup  
- Expand guide to include **GitHub Pages** and **AWS S3** deployment options  

---

## 🪪 Credits

**Author:** Mackenzie O’Brien — [mackenzie.techdocs](https://github.com/mackenzie-techdocs)  
**Tools & Stack:** GitHub Actions · Node.js · Markdown · Vercel · Netlify  
**Created for:** *WriteTech Accelerator – DevOps & Cloud Module (2025)*  
**License:** MIT (Open for educational and portfolio use)

---

📎 **Next Project:**  
Explore the [API Documentation Rebuild](../../api-documentation/) and [Web3 Final Project](../../web3-documentation/) modules in the WriteTech Accelerator Portfolio.
