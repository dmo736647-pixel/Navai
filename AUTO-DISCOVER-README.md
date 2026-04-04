# 🤖 NavAI Auto-Discover 自动化发现系统

## 📖 简介

这是一个完全自动化的 AI 工具发现系统，可以自动从 Toolify.ai 等网站抓取最新的 AI 工具，并添加到你的 NavAI 平台中。

## ⚡ 快速开始

### 方法 1：使用一键启动脚本（推荐）

```bash
# 发现最新工具
npm run discover

# 或者直接使用 node
node scripts/discover-tools.js
```

### 方法 2：带参数运行

```bash
# 预览模式（不写入文件）
node scripts/discover-tools.js --dry-run

# 抓取所有分类
node scripts/discover-tools.js --all

# 预览 + 所有分类
node scripts/discover-tools.js --dry-run --all
```

## 🎯 工作流程

```
1. 启动无头浏览器
   ↓
2. 读取现有工具列表（去重）
   ↓
3. 从 Toolify.ai 抓取新工具
   ↓
4. 智能分析和分类
   ↓
5. 过滤已存在的工具
   ↓
6. 生成多语言描述（占位符）
   ↓
7. 自动添加到 constants.ts
   ↓
8. 生成详细报告
   ↓
9. 完成！
```

## 📋 输出

### 自动完成的任务：
- ✅ 工具 ID 自动生成
- ✅ 智能分类（基于关键词）
- ✅ 定价模式识别
- ✅ 标签提取
- ✅ 去重处理
- ✅ 代码格式化

### 生成的文件：
1. **constants.ts** - 更新后的工具列表
2. **constants.ts.backup** - 备份文件（可恢复）
3. **discover-report.md** - 详细报告

## 🔧 配置选项

编辑 `scripts/discover-tools.js` 中的 `CONFIG` 对象：

```javascript
const CONFIG = {
  sources: {
    toolify: {
      baseUrl: 'https://www.toolify.ai',
      endpoints: {
        new: '/zh/new',
        topFree: '/zh/top-free',
        trending: '/zh/trending'
      }
    }
  },
  // 分类映射
  categoryMap: {
    '生产力': 'PRODUCTIVITY',
    '图像': 'IMAGE',
    // ...
  }
};
```

## 📊 查看报告

运行后会自动生成 `discover-report.md`，包含：
- 新工具列表
- 分类信息
- 定价模式
- 直接链接

## ⚠️ 注意事项

1. **依赖安装**
   ```bash
   npm install puppeteer axios cheerio
   ```

2. **网络要求**
   - 需要能访问 toolify.ai
   - 建议使用稳定的网络连接

3. **翻译问题**
   - 当前版本多语言描述使用占位符
   - 需要手动翻译或集成翻译 API

4. **分类准确性**
   - 基于关键词匹配
   - 建议手动检查分类结果

## 🚨 故障排除

### 问题：抓取失败
```
解决方案：
1. 检查网络连接
2. 确认 toolify.ai 可访问
3. 增加超时时间（timeout 配置）
```

### 问题：Puppeteer 安装失败
```bash
# 使用国内镜像
export PUPPETEER_DOWNLOAD_HOST=https://npmmirror.com/mirrors
npm install puppeteer
```

### 问题：解析错误
```
解决方案：
1. 检查目标网站结构是否变化
2. 更新选择器（evaluate 函数中）
3. 查看错误日志定位问题
```

## 🔄 恢复备份

如果更新出现问题，可以恢复备份：

```bash
# Windows PowerShell
Copy-Item constants.ts.backup constants.ts -Force

# Linux/Mac
cp constants.ts.backup constants.ts
```

## 🎯 最佳实践

1. **定期运行**
   - 建议每周运行一次
   - 保持工具库更新

2. **检查报告**
   - 每次运行后查看报告
   - 手动验证新工具

3. **补充信息**
   - 添加详细的多语言描述
   - 完善标签系统
   - 添加特色工具标记

4. **版本控制**
   - 提交前检查 diff
   - 保留备份文件

## 📈 未来改进

- [ ] 集成翻译 API（Google Translate / DeepL）
- [ ] 支持更多数据源（ProductHunt, GitHub Trending）
- [ ] 自动添加工具图标
- [ ] 智能评分系统
- [ ] 批量图片处理
- [ ] 定时任务支持

## 💡 使用示例

### 场景 1：快速添加最新工具
```bash
# 运行自动发现
node scripts/discover-tools.js

# 查看生成的报告
cat discover-report.md

# 检查 diff
git diff constants.ts

# 确认无误后提交
git add constants.ts
git commit -m "Add new AI tools from auto-discovery"
```

### 场景 2：预览模式测试
```bash
# 先预览，不写入文件
node scripts/discover-tools.js --dry-run

# 查看输出，确认正常
# 然后正式运行
node scripts/discover-tools.js
```

### 场景 3：全面抓取
```bash
# 抓取所有分类的最新工具
node scripts/discover-tools.js --all

# 查看报告，筛选高质量工具
# 手动优化分类和描述
```

---

**🎉 现在你可以：**
```bash
# 最简单的方式
npm run discover

# 或者
node scripts/discover-tools.js
```

然后喝杯咖啡，等待系统自动完成所有工作！☕
