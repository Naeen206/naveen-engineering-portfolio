@echo off
title Naveen Kumar P - Portfolio Server
cd /d "%~dp0"
echo Starting portfolio on http://localhost:8080/ ...
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
pause
