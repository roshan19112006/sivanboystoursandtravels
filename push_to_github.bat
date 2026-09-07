@echo off
title Push Sivan Boys Travels to GitHub
color 0b
echo ================================================================
echo Pushing Sivan Boys Tours and Travels to GitHub...
echo Repository: https://github.com/roshan19112006/sivanboystoursandtravels
echo ================================================================
cd /d "C:\Users\Barath\.gemini\antigravity\scratch\sivan-boys-travels"
git push -u origin main --force
echo.
echo ================================================================
echo All Done! You can now deploy on Vercel: https://vercel.com/new
echo ================================================================
pause
