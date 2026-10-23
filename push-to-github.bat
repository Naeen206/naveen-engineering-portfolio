@echo off
setlocal enabledelayedexpansion
title Push Naveen's Portfolio to GitHub
cd /d "%~dp0"

:: Ensure Git is in PATH
set "PATH=C:\Program Files\Git\cmd;C:\Program Files\Git\ucrt64\bin;%LOCALAPPDATA%\Programs\Git\cmd;%LOCALAPPDATA%\MinGit\cmd;%PATH%"

echo ==============================================================
echo        Naveen Kumar P - Portfolio GitHub Sync
echo ==============================================================
echo Repository: https://github.com/Naeen206/naveen-engineering-portfolio
echo.

:: Check for git
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Git was not found in your system.
    echo Please install Git for Windows from: https://git-scm.com/
    pause
    exit /b 1
)

echo [1/3] Checking Git status and staging changes...
git add -A
git diff --cached --quiet
if %errorlevel% neq 0 (
    echo Staging and committing updated portfolio files...
    git commit -m "update: polish portfolio files and documentation"
) else (
    echo Working tree is up to date.
)

echo.
echo [2/3] Verifying remote branch configuration...
git branch -M main
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    git remote add origin https://github.com/Naeen206/naveen-engineering-portfolio.git
)

echo.
echo [3/3] Uploading portfolio to GitHub...
echo (If a GitHub sign-in window appears in your browser, click 'Authorize')
echo.

git push -u origin main
set "PUSH_STATUS=%errorlevel%"

echo.
if %PUSH_STATUS% equ 0 (
    echo ==============================================================
    echo   SUCCESS! Your portfolio is now live on GitHub!
    echo   https://github.com/Naeen206/naveen-engineering-portfolio
    echo ==============================================================
    echo.
    echo Next Step:
    echo Enable GitHub Pages in your repo Settings ^> Pages ^> Branch: main
    echo to make it accessible at:
    echo   https://naeen206.github.io/naveen-engineering-portfolio/
) else (
    echo ==============================================================
    echo   NOTICE: Push could not complete automatically.
    echo ==============================================================
    echo Possible reasons:
    echo 1. The repository 'naveen-engineering-portfolio' has not been
    echo    created on your GitHub account yet.
    echo    -^> Visit https://github.com/new and create a repository named:
    echo        naveen-engineering-portfolio
    echo.
    echo 2. GitHub requires you to authorize or provide a Personal Access Token.
    echo.
    set /p CREATE_REPO="Would you like to open GitHub in your browser now? (Y/N): "
    if /i "!CREATE_REPO!"=="Y" (
        start https://github.com/new
    )
)

echo.
pause
