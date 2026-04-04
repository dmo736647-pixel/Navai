# 🚀 NavAI 自动化发现系统 - 快速使用指南

## 📋 三种使用方式

### 方式 1：双击运行（最简单）⭐

```
直接双击：discover.bat
```

**适合人群**：不想记命令的用户

**流程**：
1. 双击 `discover.bat`
2. 自动检查并安装依赖
3. 自动运行发现脚本
4. 查看报告
5. 完成！

---

### 方式 2：使用 npm 命令

```bash
# 发现最新工具
npm run discover

# 预览模式（不写入文件）
npm run discover -- --dry-run

# 抓取所有分类
npm run discover -- --all
```

**适合人群**：习惯使用命令行

---

### 方式 3：直接使用 node

```bash
# 基础使用
node scripts/discover-tools.js

# 带参数
node scripts/discover-tools.js --dry-run --all
```

**适合人群**：高级用户

---

## 🎯 完整工作流程演示

### 第一步：运行发现脚本

```bash
# Windows 用户直接双击
discover.bat

# 或者命令行
npm run discover
```

### 第二步：查看输出

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

### 第三步：查看报告

打开 `discover-report.md` 文件，内容如下：

```markdown
# AI Tools Discovery Report

生成时间：2026-04-01 23:45:30

## 概览
- 发现新工具：8 个
- 数据源：Toolify.ai

## 新添加的工具

| 工具名称 | 分类 | 定价 | URL |
|---------|------|------|-----|
| Stackie.AI | PRODUCTIVITY | FREEMIUM | [链接](https://stackie.ai/) |
| Raccoon AI | PRODUCTIVITY | FREE | [链接](https://raccoon.ai/) |
| ThumbnailCreator.com | IMAGE | FREEMIUM | [链接](https://thumbnailcreator.com/) |
...

## 使用说明
1. 检查新工具是否正确分类
2. 补充多语言描述（需要调用翻译 API）
3. 添加更多标签以提高搜索准确性
4. 测试工具链接是否有效
```

### 第四步：检查结果

```bash
# 查看 git diff
git diff constants.ts

# 确认无误后提交
git add constants.ts
git commit -m "feat: 自动添加 8 个新 AI 工具"
```

---

## ⚡ 常用命令速查

### 基础命令
```bash
# 发现最新工具
npm run discover

# 预览（不写入）
npm run discover -- --dry-run

# 抓取所有分类
npm run discover -- --all

# 预览 + 所有分类
npm run discover -- --dry-run --all
```

### 高级用法
```bash
# 直接运行脚本
node scripts/discover-tools.js

# 带参数
node scripts/discover-tools.js toolify --all

# 仅预览
node scripts/discover-tools.js --dry-run
```

---

## 🔧 故障排除

### 问题 1：依赖安装失败
```bash
# 手动安装依赖
npm install puppeteer axios cheerio

# 如果 puppeteer 下载慢，使用国内镜像
set PUPPETEER_DOWNLOAD_HOST=https://npmmirror.com/mirrors
npm install puppeteer
```

### 问题 2：抓取失败
```
可能原因：
1. 网络连接问题
2. 目标网站无法访问
3. 选择器过期

解决方案：
1. 检查网络
2. 手动访问 toolify.ai 测试
3. 查看错误日志
```

### 问题 3：恢复备份
```bash
# PowerShell
Copy-Item constants.ts.backup constants.ts -Force

# Git 恢复
git checkout constants.ts
```

---

## 📊 自动化程度对比

| 功能 | 手动添加 | 自动化系统 |
|------|---------|-----------|
| 发现工具 | ❌ 人工浏览 | ✅ 自动抓取 |
| 提取信息 | ❌ 手动复制 | ✅ 自动解析 |
| 智能分类 | ❌ 人工判断 | ✅ 关键词匹配 |
| 生成 ID | ❌ 手动创建 | ✅ 自动生成 |
| 去重检查 | ❌ 人工对比 | ✅ 自动过滤 |
| 代码格式化 | ❌ 手动编写 | ✅ 模板生成 |
| 生成报告 | ❌ 手动整理 | ✅ 自动输出 |
| 多语言 | ⚠️ 需翻译 API | ⚠️ 需翻译 API |

**时间对比**：
- 手动添加 10 个工具：约 30-60 分钟
- 自动化系统：约 1-2 分钟 ⚡

---

## 🎯 最佳实践建议

### 1. 定期运行
```bash
# 建议每周运行一次
# 可以设置定时任务
# Windows: 任务计划程序
# Mac/Linux: cron
```

### 2. 检查报告
```bash
# 每次运行后查看 report 文件
# 快速浏览新工具列表
# 标记需要手动优化的项目
```

### 3. 批量优化
```bash
# 积累一定数量后
# 统一补充多语言描述
# 完善标签系统
# 添加特色标记
```

### 4. 版本控制
```bash
# 提交前检查
git diff constants.ts

# 保留备份
# 如有问题可快速回滚
```

---

## 💡 进阶技巧

### 技巧 1：自定义数据源
编辑 `scripts/discover-tools.js`：

```javascript
const CONFIG = {
  sources: {
    toolify: { /* ... */ },
    producthunt: {  // 添加新源
      baseUrl: 'https://www.producthunt.com',
      endpoints: ['/topics/artificial-intelligence']
    }
  }
};
```

### 技巧 2：集成翻译 API
在 `generateMultiLanguageDescriptions` 函数中：

```javascript
async function generateMultiLanguageDescriptions(enDescription) {
  // 调用 Google Translate API
  const translations = await translate(enDescription, {
    to: ['zh', 'ja', 'es']
  });
  
  return {
    en: enDescription,
    zh: translations[0],
    ja: translations[1],
    // ...
  };
}
```

### 技巧 3：定时任务
创建 `.github/workflows/auto-discover.yml`：

```yaml
name: Auto Discover Tools

on:
  schedule:
    - cron: '0 0 * * 0'  # 每周日运行

jobs:
  discover:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm install
      - run: npm run discover
      - uses: stefanzweifel/git-auto-commit-action@v4
        with:
          commit_message: 'Auto: Add new AI tools'
```

---

## 🎉 总结

现在你拥有了一个完整的自动化 AI 工具发现系统！

**只需一个命令**：
```bash
npm run discover
```

**或者双击**：
```
discover.bat
```

**然后喝杯咖啡，等待完成即可！** ☕

系统会自动：
- ✅ 抓取最新工具
- ✅ 智能分类
- ✅ 去重过滤
- ✅ 生成代码
- ✅ 创建报告

**你要做的**：
1. 运行命令
2. 查看报告
3. 检查 diff
4. 提交代码

就这么简单！🚀
