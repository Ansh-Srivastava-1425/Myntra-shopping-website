@echo off
echo Pushing Myntra project to GitHub...
echo.

echo Initializing Git repository...
git init

echo Adding remote repository...
git remote add origin https://github.com/Ansh-Srivastava-1425/Myntra-shopping-website.git

echo Adding all files...
git add .

echo Committing files...
git commit -m "Initial commit: Myntra MERN Stack E-commerce Website with GSAP animations"

echo Pushing to GitHub...
git branch -M main
git push -u origin main

echo.
echo Project successfully pushed to GitHub!
echo Repository: https://github.com/Ansh-Srivastava-1425/Myntra-shopping-website.git
echo.
pause