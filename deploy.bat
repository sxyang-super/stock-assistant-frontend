@echo off
echo 🚀 Starting Stock Assistant frontend deployment...

REM Install dependencies
echo 📦 Installing dependencies...
call npm install

REM Build project
echo 🔨 Building project...
call npm run build

REM Check if build was successful
if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful!
    echo 📁 Build files located in dist/ directory
    echo 🌐 You can deploy the dist/ directory to any static hosting service
) else (
    echo ❌ Build failed!
    exit /b 1
)