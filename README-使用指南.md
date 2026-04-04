# 🤖 NavAI 自动化发现系统 - 完整使用指南

## 📍 文档和工具位置

所有文件都在你的项目根目录：`D:\ceshi\navai---ai-tools-navigator\`

### 📄 重要文件：
```
📁 navai---ai-tools-navigator/
├── 📄 discover.bat              ← Windows 一键启动（双击！）
├── 📄 QUICK-START.md            ← 快速开始指南
├── 📄 AUTO-DISCOVER-README.md   ← 完整文档
├── 📄 README-使用指南.md        ← 本文件（中文详细说明）
├── 📂 scripts/
│   └── discover-tools.js        ← 核心自动化脚本
└── 📄 package.json              ← 已添加 discover 命令
```

---

## 🚀 三种使用方法

### 方法 1️⃣：双击运行（最简单！⭐⭐⭐⭐⭐）

**适合人群**：所有人，特别是新手

**步骤**：
```
1. 打开「此电脑」或「文件资源管理器」
2. 进入文件夹：D:\ceshi\navai---ai-tools-navigator
3. 找到文件：discover.bat（图标是个小齿轮⚙️）
4. 双击它！
5. 等待自动运行完成
6. 查看生成的 discover-report.md 报告
```

**优点**：
- ✅ 最简单，不需要记命令
- ✅ 自动检查并安装依赖
- ✅ 图形化界面，进度清晰
- ✅ 错误提示友好

---

### 方法 2️⃣：使用 npm 命令（推荐⭐⭐⭐⭐）

**适合人群**：开发者，习惯命令行

**前提**：需要先安装依赖（首次运行）

```bash
# 首次运行，安装依赖
npm install puppeteer axios cheerio --save-dev
```

**使用命令**：

```bash
# 🎯 基础用法：发现最新工具
npm run discover

# 👀 预览模式：只看不写（测试用）
npm run discover:dry

# 📦 全部抓取：所有分类都抓取
npm run discover:all
```

**步骤**：
```bash
# 1. 打开终端（PowerShell 或 CMD）
# 2. 进入项目目录
cd D:\ceshi\navai---ai-tools-navigator

# 3. 运行发现命令
npm run discover

# 4. 等待完成（约 1-2 分钟）
# 5. 查看报告和输出
```

---

### 方法 3️⃣：直接使用 node 命令（高级⭐⭐⭐）

**适合人群**：高级开发者

```bash
# 基础用法
node scripts/discover-tools.js

# 预览模式
node scripts/discover-tools.js --dry-run

# 抓取所有分类
node scripts/discover-tools.js --all

# 预览 + 所有分类
node scripts/discover-tools.js --dry-run --all
```

---

## 📋 完整的运行流程

### 当你运行命令后，会发生什么？

```
你运行了：npm run discover
        ↓
🤖 自动化系统启动
        ↓
【步骤 1】检查依赖
   → 如果缺少 puppeteer，会自动安装
   → 如果已安装，跳过
        ↓
【步骤 2】启动无头浏览器
   → 启动 Chrome（无界面模式）
   → 准备抓取数据
        ↓
【步骤 3】读取现有工具
   → 读取 constants.ts 文件
   → 提取所有工具的 URL
   → 建立去重数据库
        ↓
【步骤 4】访问 Toolify.ai
   → 打开 https://www.toolify.ai/zh/new
   → 等待页面加载
   → 解析 HTML 结构
        ↓
【步骤 5】抓取工具信息
   → 提取工具名称
   → 提取工具描述
   → 提取定价信息
   → 提取工具链接
        ↓
【步骤 6】智能分析
   → 生成工具 ID
   → 自动分类（基于关键词）
   → 识别定价模式
   → 生成标签
        ↓
【步骤 7】去重过滤
   → 对比现有工具库
   → 移除已存在的工具
   → 保留真正的新工具
        ↓
【步骤 8】生成代码
   → 使用模板生成标准代码
   → 格式化输出
   → 添加多语言占位符
        ↓
【步骤 9】更新文件
   → 备份 constants.ts
   → 插入新工具代码
   → 保存文件
        ↓
【步骤 10】生成报告
   → 创建 discover-report.md
   → 列出所有新工具
   → 包含分类和链接
        ↓
✅ 完成！
```

---

## 📊 运行输出示例

当你运行命令后，会看到类似这样的输出：

```
╔════════════════════════════════════════╗
║  NavAI Auto-Discover Tools            ║
║  自动化 AI 工具发现系统                 ║
╚════════════════════════════════════════╝

📍 数据源：toolify
🔬 模式：生产模式
📊 范围：最新工具

🚀 启动无头浏览器...
✅ 浏览器就绪

📖 读取现有工具列表...
   ✅ 已加载 180 个唯一域名

🕷️  正在抓取 Toolify: /zh/new...
   ✅ 抓取到 15 个工具

🔍 过滤已存在的工具...
   ✅ 过滤后剩余 8 个新工具

📋 新工具预览:

   1. Stackie.AI
      一个用于 journaling、习惯追踪、信息管理和 AI 辅助学习的生活记录器。
      https://stackie.ai/

   2. Raccoon AI
      适用于应用、研究、文档及其他一切任务的 AI 同事。
      https://raccoon.ai/

   3. ThumbnailCreator.com
      AI 工具，用于快速创建令人惊艳的 YouTube 缩略图。
      https://thumbnailcreator.com/

   ... (更多工具)

💾 更新 constants.ts 文件...
   ✓ 已创建备份
   ✅ 文件更新成功

📊 生成报告...
   ✅ 报告已保存到：discover-report.md

╔════════════════════════════════════════╗
║  ✅ 任务完成！                        ║
║  添加了 8 个新工具                     ║
╚════════════════════════════════════════╝
```

---

## 📄 生成的报告文件

运行完成后，会生成 **`discover-report.md`** 文件，内容如下：

```markdown
# AI Tools Discovery Report

生成时间：2026-04-02 10:30:45

## 概览
- 发现新工具：8 个
- 数据源：Toolify.ai

## 新添加的工具

| 工具名称 | 分类 | 定价 | URL |
|---------|------|------|-----|
| Stackie.AI | PRODUCTIVITY | FREEMIUM | [链接](https://stackie.ai/) |
| Raccoon AI | PRODUCTIVITY | FREE | [链接](https://raccoon.ai/) |
| ThumbnailCreator.com | IMAGE | FREEMIUM | [链接](https://thumbnailcreator.com/) |
| Atoms | CODING | FREEMIUM | [链接](https://atoms.ai/) |
| AdsCreator.com | BUSINESS | FREEMIUM | [链接](https://adscreator.com/) |
| Topview AI | VIDEO | FREEMIUM | [链接](https://topview.ai/) |
| EverMemOS | PRODUCTIVITY | FREE | [链接](https://evermemos.com/) |
| Mailmodo AI | BUSINESS | FREEMIUM | [链接](https://mailmodo.com/) |

## 使用说明
1. 检查新工具是否正确分类
2. 补充多语言描述（需要调用翻译 API）
3. 添加更多标签以提高搜索准确性
4. 测试工具链接是否有效

---
*此报告由 NavAI Auto-Discover 自动生成*
```

---

## ✅ 运行完成后的检查清单

### 1. 查看生成的文件
```bash
# 检查这些文件是否存在
📄 constants.ts          ← 应该已更新
📄 constants.ts.backup   ← 备份文件（以防万一）
📄 discover-report.md    ← 详细报告
```

### 2. 查看 git diff
```bash
# 查看修改了什么
git diff constants.ts

# 确认无误后添加
git add constants.ts
```

### 3. 测试新工具
```bash
# 启动开发服务器
npm run dev

# 在浏览器中访问
# http://localhost:5173/

# 搜索新添加的工具名称
# 检查是否正确显示
```

### 4. 提交代码
```bash
git commit -m "feat: 自动添加 8 个新 AI 工具"
git push
```

---

## ⚠️ 常见问题和解决方法

### ❌ 问题 1：npm run discover 命令不存在

**原因**：package.json 未更新或终端未刷新

**解决**：
```bash
# 方法 1：重启终端
# 关闭当前终端，重新打开

# 方法 2：直接使用 node
node scripts/discover-tools.js

# 方法 3：双击 discover.bat
```

---

### ❌ 问题 2：缺少依赖（puppeteer 未安装）

**提示**：`Error: Cannot find module 'puppeteer'`

**解决**：
```bash
# 安装依赖
npm install puppeteer axios cheerio --save-dev

# 如果下载慢，使用国内镜像
set PUPPETEER_DOWNLOAD_HOST=https://npmmirror.com/mirrors
npm install puppeteer
```

---

### ❌ 问题 3：抓取失败

**提示**：`Failed to navigate to https://www.toolify.ai`

**原因**：
- 网络连接问题
- 目标网站无法访问
- 防火墙/代理阻止

**解决**：
```bash
# 1. 检查网络
ping www.toolify.ai

# 2. 手动在浏览器打开测试
# https://www.toolify.ai/zh/new

# 3. 检查代理设置
# 如果使用代理，确保配置正确

# 4. 稍后重试
# 可能是临时网络问题
```

---

### ❌ 问题 4：解析错误

**提示**：`Cannot read properties of null`

**原因**：
- 网站结构变化
- 选择器过期

**解决**：
```bash
# 1. 查看错误日志
# 找出具体的选择器问题

# 2. 更新 discover-tools.js 中的选择器
# 在 scrapeToolify 函数中

# 3. 或者联系我更新脚本
```

---

### ❌ 问题 5：恢复备份

**如果不满意更新结果，可以恢复**：

```bash
# Windows PowerShell
Copy-Item constants.ts.backup constants.ts -Force

# 或者使用 git
git checkout constants.ts
```

---

## 💡 最佳实践建议

### 1. 定期运行
```bash
# 建议每周运行一次
# 保持工具库更新

# 可以设置提醒
# 每周一上午运行一次
```

### 2. 使用预览模式测试
```bash
# 第一次使用时，先用预览模式
npm run discover:dry

# 查看输出，确认正常
# 然后正式运行
npm run discover
```

### 3. 检查报告
```bash
# 每次运行后
# 打开 discover-report.md
# 快速浏览新工具
# 标记需要手动优化的
```

### 4. 批量优化
```bash
# 积累 5-10 个工具后
# 统一补充多语言描述
# 完善标签系统
# 添加特色标记
```

---

## 🎯 实际使用示例

### 场景 1：首次使用

```bash
# 1. 安装依赖（首次）
npm install puppeteer axios cheerio --save-dev

# 2. 预览模式测试
npm run discover:dry

# 3. 查看输出，确认正常

# 4. 正式运行
npm run discover

# 5. 查看报告
cat discover-report.md

# 6. 检查 diff
git diff constants.ts

# 7. 提交
git add constants.ts
git commit -m "feat: 首次自动发现 AI 工具"
```

### 场景 2：每周例行更新

```bash
# 每周一上午

# 1. 运行发现
npm run discover

# 2. 查看报告
# 发现添加了 5 个新工具

# 3. 快速检查
git diff constants.ts

# 4. 提交
git commit -m "feat: 每周例行更新 - 添加 5 个新工具"

# 5. 推送到仓库
git push
```

### 场景 3：全面抓取

```bash
# 想一次性抓取所有分类

# 1. 运行全量抓取
npm run discover:all

# 2. 查看报告
# 可能发现 30-50 个工具

# 3. 筛选高质量工具
# 手动编辑 constants.ts
# 保留最相关的

# 4. 提交
git commit -m "feat: 批量添加 30 个 AI 工具"
```

---

## 📈 效率对比

| 任务 | 手动方式 | 自动化系统 |
|------|---------|-----------|
| 浏览网站找工具 | 15-30 分钟 | 0 分钟 ✅ |
| 复制工具信息 | 10-20 分钟 | 0 分钟 ✅ |
| 分类判断 | 5-10 分钟 | 0 分钟 ✅ |
| 编写代码 | 20-40 分钟 | 0 分钟 ✅ |
| 去重检查 | 5-10 分钟 | 0 分钟 ✅ |
| 生成报告 | 5-10 分钟 | 0 分钟 ✅ |
| **总时间** | **60-120 分钟** | **1-2 分钟** ⚡ |

**效率提升：50-100 倍！** 🚀

---

## 🎉 总结

### 你现在有：
- ✅ 完整的自动化发现系统
- ✅ 三种使用方式（双击/命令/node）
- ✅ 详细的文档说明
- ✅ 智能分类和去重
- ✅ 自动生成报告

### 使用超简单：
```bash
# 方式 1：双击 discover.bat
# 方式 2：npm run discover
# 方式 3：node scripts/discover-tools.js
```

### 然后：
1. ☕ 喝杯咖啡
2. ⏱️ 等待 1-2 分钟
3. 📄 查看报告
4. ✅ 检查提交

**就这么简单！** 🎊

---

## 📞 需要帮助？

如果遇到问题：
1. 查看本文档的「常见问题」部分
2. 查看控制台错误信息
3. 检查网络连接
4. 查看日志文件

**祝你使用愉快！** 🚀
