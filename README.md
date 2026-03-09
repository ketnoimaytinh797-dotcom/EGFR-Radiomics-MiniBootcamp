# EGFR Radiomics - Mini Bootcamp Course Website

This repository is a teaching website like an online textbook for high school students.

## Publish the website using GitHub Desktop

### 1 Create a GitHub repo
- Repo name: EGFR-Radiomics-MiniBootcamp
- Visibility: Public

### 2 Push the files from your computer
- Install GitHub Desktop
- Clone the empty repo EGFR-Radiomics-MiniBootcamp to your computer
- Copy all files in this folder into that repo folder
- In GitHub Desktop:
  - Commit message: Initial course website
  - Push or Publish

### 3 Turn on GitHub Pages
On GitHub.com:

- Repo -> Settings -> Pages
- Source: GitHub Actions
- Wait for the workflow to finish with green check in the Actions tab

Your site will be available at:

https://ketnoimaytinh797-dotcom.github.io/EGFR-Radiomics-MiniBootcamp/

## Notes
- This repo already contains a workflow that builds the Jupyter Book and deploys to GitHub Pages: .github/workflows/deploy.yml
- If you change the repo name, also update it in book/_config.yml and in the notebook loader cells
- The notebooks are written for demo CSV files in the data folder and can also run on Google Colab
- A short student guide is available in book/student_guide.md

## Public materials
- Slides: book/_static/slides/
- Demo results used in the slides: book/_static/results/
