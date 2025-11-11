# GitHub Repository Setup Guide

## Step 1: Create Repository on GitHub

1. Go to https://github.com/new
2. Repository name: `portfolio`
3. Description: "Portfolio website for UI/UX Designer Mohamed Hossam"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize this repository with a README" (you already have one)
6. **DO NOT** add .gitignore or license (you already have them)
7. Click **"Create repository"**

## Step 2: Push Your Code

After creating the repository, run these commands:

```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/ShreefHossam/portfolio
2. Click **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"gh-pages"** branch
5. Click **Save**

## Step 4: Deploy Your Site

Once the repository is created and GitHub Pages is enabled, run:

```bash
npm run deploy
```

Your portfolio will be live at: **https://ShreefHossam.github.io/portfolio**

---

**Note:** If you get authentication errors, you may need to:
- Use a Personal Access Token instead of password
- Or set up SSH keys for authentication

