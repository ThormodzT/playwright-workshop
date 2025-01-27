# 🚀 CI/CD with GitHub Actions - A Practical Guide

## Introduction 🎯

Welcome to the world of **CI/CD (Continuous Integration and Continuous Delivery/Deployment)**! We've already touched upon the basics of CI/CD in previous slides, but now we're diving deeper with a focus on **GitHub Actions**, a powerful and flexible CI/CD tool integrated directly into GitHub repositories.

---

## Why Choose GitHub Actions? 🤖

There are many CI/CD tools out there like **Jenkins, CircleCI, GitLab CI/CD, Travis CI**, but we're focusing on **GitHub Actions** because:

- It's **built into GitHub**, making it easy to integrate with your repositories.
- Offers **free build minutes** for public repositories.
- Supports **multi-platform builds** (Linux, macOS, Windows).
- Provides an extensive **marketplace with pre-built actions**.
- Easy to configure using simple **YAML-based workflows**.

---

## Understanding GitHub Actions 🛠️

GitHub Actions allows us to define workflows that automate **building, testing, and deploying** our applications.

### Key Concepts 📚

| Concept      | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| **Workflow** | A set of jobs defined in a YAML file that run automatically.     |
| **Job**      | A group of steps that run in sequence within a workflow.         |
| **Step**     | An individual task within a job, such as running a script.       |
| **Action**   | A pre-built unit of functionality (e.g., checkout, testing).     |
| **Runner**   | The virtual machine where your job executes.                     |
| **Event**    | The trigger that starts the workflow (push, PR, schedule, etc.). |

---

## GitHub Actions Workflow Structure 🏗️

A typical workflow file (`.github/workflows/main.yml`) looks like this:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Install Dependencies
        run: npm install

      - name: Run Tests
        run: npm test

      - name: Build Project
        run: npm run build

      - name: Deploy
        run: echo "Deploying to production..."
```

### Breakdown:

1. **Triggers (on)** - Runs when a `push` or `pull_request` is made on the `main` branch.
2. **Jobs** - Contains one or more tasks, like `build-and-test`.
3. **Steps** - Each task to be executed, such as checking out code, installing dependencies, running tests, and deploying.

---

## Setting Up Your CI/CD Pipeline 🏎️

### Step 1: Enable GitHub Actions

1. Go to your GitHub repository.
2. Click on `Actions` tab.
3. Select a workflow template or create your own.

### Step 2: Define Your Workflow

Create a `.github/workflows/ci-cd-pipeline.yml` file and customize the process.

### Step 3: Run the Workflow

Once code is pushed, GitHub Actions automatically triggers the workflow.

---

## Common CI/CD Use Cases 💡

1. **Running Unit and Integration Tests**

   - Ensure your application works as expected.
   - Example:

   ```yaml
   - name: Run Jest Tests
     run: npm run test
   ```

2. **Linting and Code Quality Checks**

   - Use tools like **ESLint, Prettier, Husky** to maintain clean code.

   ```yaml
   - name: Run ESLint
     run: npm run lint
   ```

3. **Building and Packaging Applications**

   - Prepare your app for deployment.

   ```yaml
   - name: Build React App
     run: npm run build
   ```

4. **Deploying to Production**
   - Automate deployments to **AWS, Firebase, Vercel, Heroku**, etc.
   ```yaml
   - name: Deploy to Firebase
     run: firebase deploy --token ${{ secrets.FIREBASE_TOKEN }}
   ```

---

## Secrets Management 🔐

Use **GitHub Secrets** to store API keys, passwords, and sensitive data.

1. Go to your repository settings.
2. Navigate to `Secrets and variables > Actions`.
3. Add your secrets (`AWS_ACCESS_KEY`, `FIREBASE_TOKEN`, etc.).
4. Access secrets in workflows using:

```yaml
env:
  API_KEY: ${{ secrets.MY_API_KEY }}
```

---

## Best Practices for GitHub Actions ✅

1. **Keep Workflows DRY (Don't Repeat Yourself)**

   - Use **composite actions** to reuse steps across multiple workflows.

2. **Use Caching for Dependencies**

   - Cache dependencies to speed up builds:

   ```yaml
   - name: Cache npm dependencies
     uses: actions/cache@v3
     with:
       path: ~/.npm
       key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
       restore-keys: |
         ${{ runner.os }}-node-
   ```

3. **Run Workflows Only When Necessary**

   - Avoid running on every push; use filters:

   ```yaml
   on:
     push:
       paths:
         - "src/**"
         - ".github/workflows/**"
   ```

4. **Fail Fast Strategy**
   - Run **critical checks first** to fail the workflow early.

---

## Troubleshooting CI/CD Issues 🕵️‍♂️

Encountering issues? Here’s what you can do:

- **Check Logs:** GitHub provides detailed logs under the Actions tab.
- **Use `debug` Mode:** Add `ACTIONS_RUNNER_DEBUG=true` to environment variables.
- **Retry Workflow:** Sometimes, network failures cause builds to fail.
- **Check Permissions:** Ensure GitHub token has the necessary permissions for deployments.

---

## Advanced CI/CD Strategies 🚀

1. **Matrix Builds**

   - Run tests across multiple environments:

   ```yaml
   strategy:
     matrix:
       os: [ubuntu-latest, windows-latest]
       node: [14, 16]
   ```

2. **Scheduled Builds**

   - Run tests periodically using cron jobs:

   ```yaml
   on:
     schedule:
       - cron: "0 0 * * 1" # Every Monday at midnight
   ```

3. **Monorepo Management**
   - Trigger workflows only for affected packages in monorepos.

---

## Conclusion 🎉

CI/CD with **GitHub Actions** makes the software development lifecycle faster, more reliable, and efficient. By leveraging the power of **automated testing, builds, and deployments**, developers can focus more on coding and less on manual operations.

---

## Additional Resources 📚

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Awesome GitHub Actions](https://github.com/sdras/awesome-actions)
- [Free GitHub Actions Templates](https://github.com/marketplace?type=actions)
