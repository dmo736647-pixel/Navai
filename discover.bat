@echo off
chcp 65001 >nul
echo ╔════════════════════════════════════════╗
echo ║  NavAI Auto-Discover Tools            ║
echo ║  自动化 AI 工具发现系统                   ║
echo ╚════════════════════════════════════════╝
echo.

REM 检查 Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ 错误：未检测到 Node.js
    echo 请先安装 Node.js: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js 已就绪
echo.

REM 检查依赖
echo 📦 检查依赖包...
if not exist "node_modules\puppeteer" (
    echo ⚠️  首次运行，正在安装依赖...
    echo.
    call npm install puppeteer axios cheerio
    if %ERRORLEVEL% NEQ 0 (
        echo ❌ 依赖安装失败
        pause
        exit /b 1
    )
    echo ✅ 依赖安装完成
    echo.
) else (
    echo ✅ 依赖已安装
    echo.
)

REM 运行发现脚本
echo 🚀 开始自动发现 AI 工具...
echo.

node scripts/discover-tools.js %*

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ✅ 任务完成！                         ║
    echo ║  请查看 discover-report.md 报告        ║
    echo ╚════════════════════════════════════════╝
) else (
    echo.
    echo ╔════════════════════════════════════════╗
    echo ║  ❌ 任务失败，请检查错误信息           ║
    echo ╚════════════════════════════════════════╝
)

echo.
pause
