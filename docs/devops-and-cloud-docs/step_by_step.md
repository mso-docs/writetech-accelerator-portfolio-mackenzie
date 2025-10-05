# Step-by-Step Guide

Now that your environment is ready and your tokens are securely stored in GitHub, it’s time to build your first automation pipeline.

This section will walk you through creating a **GitHub Actions workflow** that builds and deploys your static website to **Vercel** or **Netlify** automatically.

---

## Step 1: Create a Workflow Directory

In your local repository, create a new directory for GitHub Actions:

```bash
mkdir -p .github/workflows
cd .github/workflows
```

Inside this folder, every `.yml` or `.yaml` file represents an **independent automation workflow**.  
You can have multiple workflows — for testing, building, linting, or deployment.

---

## Step 2: Add Your Workflow File

Create a new file named `deploy.yml`:

```bash
touch deploy.yml
```

Then open it in your preferred editor (VS Code, Vim, etc.).

---

## Step 3: Define the Workflow Structure

Paste the following into `deploy.yml`:

```yaml
name: Deploy Static Site

on:
  push:
    branches:
      - main
  workflow_dispatch: # optional manual trigger

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to Vercel
        if: ${{ secrets.VERCEL_TOKEN != '' }}
        run: npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod

      - name: Deploy to Netlify
        if: ${{ secrets.NETLIFY_TOKEN != '' }}
        run: npx netlify deploy --dir=build --prod --auth ${{ secrets.NETLIFY_TOKEN }}
```

---

## Step 4: Understand Each Section

Let’s break this down:

| Section | Purpose |
|----------|----------|
| `name:` | The name that appears in your GitHub Actions dashboard. |
| `on:` | Defines the event that triggers the workflow — here, every push to `main`. |
| `jobs:` | A workflow consists of one or more jobs (in this case, just one). |
| `runs-on:` | Specifies the virtual machine OS — `ubuntu-latest` is recommended. |
| `steps:` | Sequential commands or actions to run, each in its own container. |

---

### Step Breakdown

The sections below break down each step in the process, so it is easier to understand.

#### Checkout repository

```yaml
- name: Checkout repository
  uses: actions/checkout@v4
```

Downloads your repository files into the workflow’s runner environment.

---

#### Set up Node.js

```yaml
- name: Set up Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 18
```

Ensures the correct version of Node.js is available — this must match your local version to avoid build inconsistencies.

---

#### Install dependencies

```yaml
- name: Install dependencies
  run: npm ci
```

Installs dependencies based on the `package-lock.json` file.  
`npm ci` guarantees reproducible builds and is faster than `npm install`.

---

#### Build site

```yaml
- name: Build site
  run: npm run build
```

Runs your project’s build command.  
Expected output in the workflow log:

```bash
> docusaurus build
[INFO] Building static site...
[INFO] Successfully built into /build
```

---

#### Deploy to Hosting Provider

You can deploy to one or both providers depending on which secrets are configured.

##### Vercel deployment

The following code snippet shows you how you would deploy to Vercel:

```yaml
- name: Deploy to Vercel
  if: ${{ secrets.VERCEL_TOKEN != '' }}
  run: npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
```

This uses the Vercel CLI to deploy directly from the workflow.  
If your `VERCEL_TOKEN` secret is missing, this step will be skipped automatically.

##### Netlify deployment

The following code snippet shows you how you would deploy to Netlify:

```yaml
- name: Deploy to Netlify
  if: ${{ secrets.NETLIFY_TOKEN != '' }}
  run: npx netlify deploy --dir=build --prod --auth ${{ secrets.NETLIFY_TOKEN }}
```

Deploys the `/build` directory to your Netlify site.

---

## Step 5: Commit and Push Your Workflow

Once the file is complete, add and push it:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deployment workflow"
git push origin main
```

Within a few seconds, GitHub will detect the new workflow and automatically trigger it.

---

## Step 6: Monitor the Workflow

Next, you will need to follow the steps below to ensure your build deploys:

1. Navigate to your repository on GitHub.  
2. Click the **“Actions”** tab.  
3. Select **Deploy Static Site** from the left sidebar.  
4. You’ll see real-time logs for each step.

We've provided a successful run example below:

```bash
✅ build-and-deploy completed
✅ Site built successfully
✅ Deployment URL: https://myproject.vercel.app
```

### How to Resolve Errors

If something goes wrong, you can expand each step to view the command logs.

---

## Step 7: Optional — Trigger Manually

The `workflow_dispatch` event allows you to run the workflow manually without a push.

You can do so by following the steps below:

- Go to **Actions → Deploy Static Site → Run workflow**
- Choose the branch and click **Run workflow**

This is helpful when testing or re-deploying without changing code.

---

## Step 8: Verify the Deployment

After the workflow completes:

- For **Vercel**, open your dashboard → Project → “Deployments” → Confirm a new deployment exists.
- For **Netlify**, navigate to your site → “Deploys” tab → Check the timestamp of the latest build.

Your website should now reflect the latest commit from GitHub.

---

## Example Workflow Output

A successful GitHub Actions log might look like:

```bash
Run npm ci
added 547 packages in 12s

Run npm run build
> react-scripts build
✔ Build completed in 42.3s

Run npx vercel --token ***
✅  Production: https://myapp.vercel.app [copied to clipboard]
```

---

## Step 9: Enhancements

Once the core pipeline is working, consider adding:

| Enhancement | Description |
|--------------|-------------|
| **Pre-deploy tests** | Run Jest or Playwright before deployment |
| **Linting** | Add Vale or ESLint steps for content and code quality |
| **Branch-based deploys** | Deploy `main` to production, `dev` to staging |
| **Notifications** | Add Slack/Discord messages on success or failure |
| **Caching** | Cache `node_modules` for faster builds |

Example snippet for caching dependencies:

```yaml
- name: Cache Node modules
  uses: actions/cache@v4
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
```

---

## Step 10: Confirm Success Criteria

Use the criteria below to confirm your workflow is successfully integrated:

✅ Workflow triggers automatically on `main` push  
✅ Build completes without errors  
✅ Deployment URL updates automatically  
✅ Tokens stored securely via GitHub Secrets  

---

## Next Steps

You’ve just created a fully automated deployment pipeline with GitHub Actions — a foundational DevOps workflow used across countless production environments.

Next up: [Troubleshooting and Common Errors →](troubleshooting.md)
