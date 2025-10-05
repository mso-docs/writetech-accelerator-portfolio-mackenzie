# Troubleshooting and Common Errors

Even the most carefully written GitHub Actions workflows can fail due to environment issues, syntax errors, or misconfigured secrets.

This section helps you identify, debug, and fix the most common issues encountered while setting up CI/CD for static site deployment.

---

## How to Read Workflow Logs

Each GitHub Actions run generates a detailed log for every step in the workflow.

1. Go to your repository → **Actions**
2. Click on your workflow name (e.g., “Deploy Static Site”)
3. Select the latest run → **“build-and-deploy”**
4. Expand any step to view full terminal output

> 💡 **Tip:** Use the “Re-run jobs” button to quickly test fixes without new commits.

---

## Common Error Scenarios

### 1. Build Fails During `npm ci`

**Example Log Output:**

```bash
npm ERR! missing script: build
Error: Process completed with exit code 1.
```

**Cause:**

- The `build` script is missing in your `package.json`
- The workflow is using the wrong Node.js version

**Fix:**

1. Add a build script if missing:

   ```json
   {
     "scripts": {
       "build": "react-scripts build"
     }
   }
   ```

2. Ensure your local Node.js version matches the one defined in the workflow:

   ```yaml
   with:
     node-version: 18
   ```

---

### 2. `vercel: command not found`

**Example Log:**

```bash
Error: vercel: command not found
Error: Process completed with exit code 127.
```

**Cause:**

- Vercel CLI isn’t installed globally or the build didn’t include it in dependencies.

**Fix:**

Add a step to install Vercel CLI before deployment:

```yaml
- name: Install Vercel CLI
  run: npm install -g vercel
```

Or use NPX to run it directly (recommended):

```yaml
run: npx vercel --token ${{ secrets.VERCEL_TOKEN }} --prod
```

---

### 3. Authentication Failed or Missing Token

**Example Log:**

```bash
Error! No existing credentials found. Please run `vercel login`.
Error: Missing or invalid Vercel token.
```

**Cause:**

- Your secret (`VERCEL_TOKEN` or `NETLIFY_TOKEN`) is missing or expired.

**Fix:**

1. Go to your repository → **Settings → Secrets and Variables → Actions**
2. Add or update your token under:
   - `VERCEL_TOKEN`
   - `NETLIFY_TOKEN`
3. Re-run the workflow after saving.

> ⚠️**CAUTION:** Tokens usually expire if you revoke them or change your password.

---

### 4. “Directory Not Found” or `build` Missing

**Example Log:**

```bash
Error: The directory "build" does not exist.
```

**Cause:**

- The build command generated output in a different folder (`dist`, `public`, etc.)
- Your workflow is pointing to the wrong directory

**Fix:**

Check your project’s build output:

```bash
npm run build
```

If the output directory is `dist`, update the workflow:

```yaml
run: npx netlify deploy --dir=dist --prod --auth ${{ secrets.NETLIFY_TOKEN }}
```

---

### 5. Workflow Syntax Errors

**Example Log:**

```bash
yaml: line 25: did not find expected key
```

**Cause:**

- Indentation or spacing issues in `deploy.yml`

**Fix:**

- Use 2 spaces per indent (no tabs)
- Validate your YAML using:
  - [YAML Lint](https://www.yamllint.com/)
  - VS Code YAML extension

> 💬 **Pro Tip:** When debugging YAML, comment out blocks (`#`) and reintroduce them gradually.

---

### 6. Workflow Timeout or “Job Canceled”

**Example Log:**

```bash
Error: The operation was canceled.
Error: Process completed with exit code 143.
```

**Cause:**

- The workflow exceeded the 6-hour GitHub Actions job limit.
- Your build process is too heavy or hangs indefinitely.

**Fix:**

1. Optimize dependencies and reduce build size.
2. Add caching to speed up installs:

   ```yaml
   - name: Cache Node modules
     uses: actions/cache@v4
     with:
       path: ~/.npm
       key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
   ```

3. Add a timeout:

   ```yaml
   timeout-minutes: 20
   ```

---

### 7. Site Deploys Successfully but Doesn’t Update

**Symptom:**

The workflow completes, but the live site doesn’t reflect the latest changes.

**Cause:**

- Cache not invalidated on Vercel or Netlify
- Deployed to a staging URL, not production

**Fix:**

- For Vercel, ensure the `--prod` flag is used:

  ```bash
  npx vercel --prod
  ```

- For Netlify, make sure your deploy command includes:

  ```bash
  npx netlify deploy --prod
  ```

---

## Advanced Debugging Techniques

### 1. Enable Debug Logging
In your repository’s **Actions secrets**, add:

```bash
ACTIONS_RUNNER_DEBUG = true
ACTIONS_STEP_DEBUG = true
```

These environment variables provide deeper logs.

### 2. Use “Continue on Error”

For non-critical steps:

```yaml
- name: Optional Deploy Step
  run: npx netlify deploy ...
  continue-on-error: true
```

### 3. Test Locally

You can test GitHub Actions locally using [act](https://github.com/nektos/act):

```bash
brew install act
act -j build-and-deploy
```

---

## Common Best Practices

Follow the best practices below to ensure your workflow runs smoothly:

| Best Practice | Why It Matters |
|----------------|----------------|
| Keep YAML indentation consistent | Prevents syntax errors |
| Always commit `package-lock.json` | Ensures reproducible builds |
| Use short branch names (`main`) | Simplifies workflow triggers |
| Name workflows clearly | Makes debugging easier in the Actions dashboard |
| Document your secrets in README | Helps new contributors set up their environment |

---

## Quick Reference: Common Fixes

Check out the table below to see fixes to common issues:

| Issue | Root Cause | Fix |
|-------|-------------|-----|
| “Missing build script” | No build command in `package.json` | Add `"build": "npm run build"` |
| “Token invalid” | Expired API token | Regenerate in provider dashboard |
| “Command not found” | Missing CLI dependency | Install via `npm install -g` |
| “Workflow didn’t trigger” | Wrong branch or event | Check `on:` section in YAML |
| “Empty build folder” | Misconfigured output path | Match `--dir` to actual folder |

---

## Next Steps

Now that you can troubleshoot your pipeline confidently, proceed to the final summary for wrap-up, optimization tips, and next-phase improvements.

Next article: [Summary and Next Steps](summary.md)
