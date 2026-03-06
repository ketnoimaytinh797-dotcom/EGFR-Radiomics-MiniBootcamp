# EGFR Radiomics — Mini Bootcamp (Course Website)
This repository is a teaching website (like an online textbook) for high-school students.

## Publish the website (recommended: GitHub Desktop)
### 1) Create a GitHub repo
- Repo name: `EGFR-Radiomics-MiniBootcamp` (recommended, so everything works out-of-the-box)
- Visibility: `Public` (GitHub Pages is free for public repos)

### 2) Push the files from your computer
- Install GitHub Desktop
- Clone the empty repo `EGFR-Radiomics-MiniBootcamp` to your computer
- Copy all files in this folder into that repo folder
- In GitHub Desktop:
  - Commit message: `Initial course website`
  - Push / Publish

### 3) Turn on GitHub Pages
On GitHub.com:

- Repo → `Settings` → `Pages`
- Source: `GitHub Actions`
- Wait for the workflow to finish (green ✅ in the `Actions` tab)

Your site will be available at:

`https://ketnoimaytinh797-dotcom.github.io/EGFR-Radiomics-MiniBootcamp/`

## Notes
- This repo already contains a workflow that builds the Jupyter Book and deploys to GitHub Pages: `.github/workflows/deploy.yml`.
- If you change the repo name, also update it in `book/_config.yml` and in the notebook variables `GITHUB_USER` / `REPO_NAME`.
- The website is organized as a 5-day mini bootcamp, but the detail level follows the original 20-day learning track.

## Teacher materials
- Slides: `book/_static/slides/`
- Solutions: `teacher_solutions.zip` (also copied into the website static folder)
