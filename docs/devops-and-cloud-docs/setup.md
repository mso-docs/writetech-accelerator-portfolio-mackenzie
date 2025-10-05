# Setup Instructions

This section covers everything you need before creating your GitHub Actions workflow.

We’ll prepare:
- Your local repository and dependencies
- Your hosting provider (Vercel or Netlify)
- Your environment variables and secrets

---

## Step 1: Prepare Your Local Project

1. Clone or create your static site project:
   ```bash
   git clone https://github.com/yourusername/my-static-site.git
   cd my-static-site
   ```

2. Install all dependencies:
   ```bash
   npm install
   ```
   > 💡 Tip: Always use `npm ci` in CI environments for faster, reproducible builds.

3. Build the project locally to verify success:
   ```bash
   npm run build
   ```
   Expected output:
   ```
   ✔ Build completed successfully
   Output directory: /build
   ```

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Initial commit with working build"
   git push origin main
   ```

---

## Step 2: Create a Hosting Account

You can deploy to **either** Vercel or Netlify. Both are free for personal projects.

### 🧭 Option A — Vercel

1. Go to [https://vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **“Add New Project”** and select your repository.
3. In the configuration panel:
   - **Framework preset:** Select `Other` if not detected.
   - **Build command:** `npm run build`
   - **Output directory:** `build` or `dist`
4. Once deployed, confirm your site works at `https://your-site.vercel.app`.

To enable automation, you’ll need your **Vercel Personal Access Token**:
- Go to **Account → Settings → Tokens**
- Click **“Generate Token”**
- Copy the token (it starts with `vercel_`)

> ⚠️ Keep this token private — it grants deploy access to your Vercel projects.

---

### 🌐 Option B — Netlify

1. Go to [https://app.netlify.com](https://app.netlify.com) and log in with GitHub.
2. Choose **“Add new site → Import from Git”**.
3. Select your repository.
4. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `build`
5. Click **Deploy Site** and confirm it’s live at `https://your-site.netlify.app`.

To automate deployments:
- Navigate to **User Settings → Applications → Personal Access Tokens**
- Click **“New Access Token”**, name it `github-actions`
- Copy the generated token.

---

## Step 3: Add Secrets to Your Repository

To deploy via GitHub Actions, you must store your tokens securely.

1. Go to your GitHub repository.  
2. Navigate to:
   ```
   Settings → Secrets and variables → Actions → New repository secret
   ```
3. Add the following (based on your host):
   | Name | Description |
   |------|--------------|
   | `VERCEL_TOKEN` | Your token from Vercel |
   | `NETLIFY_TOKEN` | Your token from Netlify |

These values are encrypted and only accessible by GitHub Actions.

> 💬 **Pro Tip:** You can add both tokens if you want the workflow to support either hosting provider.

---

## Step 4: Confirm Node.js Version (Optional)

Check your Node.js version — you’ll use this value in your workflow YAML:
```bash
node -v
```
Output example:
```
v18.17.1
```
This ensures compatibility with your build process.

---

✅ **At this point, your environment is ready.**
You have:
- A functioning static site
- A linked hosting provider
- Secure tokens configured
- A repository ready for CI/CD automation

Next, we’ll create the workflow that ties it all together.

→ [Proceed to Step-by-Step Guide](step_by_step.md)
