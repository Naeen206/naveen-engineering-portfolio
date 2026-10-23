@echo off
title Push Naveen's Portfolio to GitHub
cd /d "%~dp0"
echo ==============================================================
echo   Uploading Naveen's Portfolio to GitHub:
echo   https://github.com/Naeen206/naveen-engineering-portfolio
echo ==============================================================
echo.
echo If a GitHub sign-in window appears in your browser, click 'Authorize'.
echo.
"%LOCALAPPDATA%\MinGit\cmd\git.exe" push -u origin main
echo.
if %errorlevel% equ 0 (
    echo ==============================================================
    echo   SUCCESS! Your portfolio has been uploaded to GitHub!
    echo ==============================================================
) else (
    echo.
    echo If GitHub asked for a password, note that GitHub requires a 
    echo Personal Access Token or browser login.
)
echo.
pause
