@echo off
setlocal
set "APP_DIR=%~dp0"
cd /d "%APP_DIR%"

set "PORT="
for /f %%P in ('powershell -NoProfile -ExecutionPolicy Bypass -Command "$start=8787; $end=8799; for ($p = $start; $p -le $end; $p++) { $listener = $null; try { $listener = [Net.Sockets.TcpListener]::new([Net.IPAddress]::Parse('127.0.0.1'), $p); $listener.Start(); $listener.Stop(); Write-Output $p; break } catch { if ($listener) { $listener.Stop() } } }"') do set "PORT=%%P"

if "%PORT%"=="" (
  start "" "%APP_DIR%index.html"
  exit /b
)

py -3 --version >nul 2>nul
if %errorlevel%==0 (
  start "Blue Archive Tier Maker" /min py -3 -m http.server %PORT% --bind 127.0.0.1
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 2" >nul 2>nul
  start "" "http://127.0.0.1:%PORT%/"
  exit /b
)

python --version >nul 2>nul
if %errorlevel%==0 (
  start "Blue Archive Tier Maker" /min python -m http.server %PORT% --bind 127.0.0.1
  powershell -NoProfile -ExecutionPolicy Bypass -Command "Start-Sleep -Seconds 2" >nul 2>nul
  start "" "http://127.0.0.1:%PORT%/"
  exit /b
)

start "" "%APP_DIR%index.html"
