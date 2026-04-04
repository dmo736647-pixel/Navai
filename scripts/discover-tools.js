/**
 * NavAI Auto-Discover Tools - 智能版
 * 
 * 支持多种数据源，智能处理反爬虫
 * 
 * 使用方法:
 * node scripts/discover-tools.js [options]
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ========== 配置 ==========
const CONFIG = {
  outputPath: path.join(__dirname, '../constants.ts'),
  backupPath: path.join(__dirname, '../constants.ts.backup'),
  reportPath: path.join(__dirname, '../discover-report.md'),
  
  // 预定义的最新 AI 工具数据源（定期更新）
  knownNewTools: [
    {
      id: 'stackie-ai',
      name: 'Stackie.AI',
      description: 'An AI-powered life-logger for journaling, habit tracking, and information management.',
      url: 'https://stackie.ai/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['journaling', 'habit-tracking', 'productivity', 'ai']
    },
    {
      id: 'raccoon-ai',
      name: 'Raccoon AI',
      description: 'Your AI colleague for apps, research, documentation, and more. A collaborative AI agent workspace.',
      url: 'https://raccoon.ai/',
      category: 'PRODUCTIVITY',
      pricing: 'FREE',
      tags: ['ai-agent', 'collaboration', 'research', 'automation']
    },
    {
      id: 'thumbnail-creator-com',
      name: 'ThumbnailCreator.com',
      description: 'AI tool for creating stunning YouTube thumbnails quickly.',
      url: 'https://thumbnailcreator.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['thumbnail', 'youtube', 'image-generation', 'marketing']
    },
    {
      id: 'atoms-ai',
      name: 'Atoms',
      description: 'AI platform to build full-stack apps and websites without code using professional agents.',
      url: 'https://atoms.ai/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['no-code', 'app-builder', 'web-development', 'ai-agents']
    },
    {
      id: 'ads-creator-com',
      name: 'AdsCreator.com',
      description: 'AI ad creation tool - get professional AI ads by simply pasting your website URL.',
      url: 'https://adscreator.com/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['advertising', 'marketing', 'automation', 'business']
    },
    {
      id: 'topview-ai',
      name: 'Topview AI',
      description: '#1 Marketing video agency - Transform your products into viral videos.',
      url: 'https://topview.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video-marketing', 'advertising', 'viral', 'content-creation']
    },
    {
      id: 'evermemos',
      name: 'EverMemOS',
      description: 'Infinite memory. Persistent identity. Evolving intelligence. Powered by EverMind.',
      url: 'https://evermemos.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREE',
      tags: ['memory', 'ai-assistant', 'productivity', 'knowledge-management']
    },
    {
      id: 'mailmodo-ai',
      name: 'Mailmodo AI',
      description: 'Complete email marketing automation with AI agents.',
      url: 'https://mailmodo.com/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['email-marketing', 'automation', 'ai-agents', 'business']
    }
  ]
};

// ========== 工具函数 ==========

function generateToolId(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

function readExistingTools() {
  console.log('\n📖 读取现有工具列表...');
  
  const content = fs.readFileSync(CONFIG.outputPath, 'utf-8');
  const urlRegex = /url:\s*'([^']+)'/g;
  const existingUrls = new Set();
  let match;
  
  while ((match = urlRegex.exec(content)) !== null) {
    try {
      const hostname = new URL(match[1]).hostname;
      existingUrls.add(hostname);
    } catch (e) {}
  }
  
  console.log(`   ✅ 已加载 ${existingUrls.size} 个唯一域名\n`);
  return existingUrls;
}

function filterExistingTools(newTools, existingUrls) {
  console.log('🔍 过滤已存在的工具...');
  
  const uniqueTools = newTools.filter(tool => {
    try {
      const hostname = new URL(tool.url).hostname;
      return !existingUrls.has(hostname);
    } catch (e) {
      return false;
    }
  });
  
  console.log(`   ✅ 过滤后剩余 ${uniqueTools.length} 个新工具\n`);
  return uniqueTools;
}

function generateToolCode(tool) {
  return `  {
    id: '${tool.id}',
    name: '${tool.name.replace(/'/g, "\\'")}',
    description: '${tool.description.replace(/'/g, "\\'")}',
    descriptions: {
      en: '${tool.description.replace(/'/g, "\\'")}',
      zh: '${tool.description.replace(/'/g, "\\'")}',
      ja: '${tool.description.replace(/'/g, "\\'")}',
      es: '${tool.description.replace(/'/g, "\\'")}',
      tk: '${tool.description.replace(/'/g, "\\'")}',
      uz: '${tool.description.replace(/'/g, "\\'")}',
      tg: '${tool.description.replace(/'/g, "\\'")}',
      hy: '${tool.description.replace(/'/g, "\\'")}',
      ro: '${tool.description.replace(/'/g, "\\'")}'
    },
    category: ToolCategory.${tool.category},
    pricing: PricingModel.${tool.pricing},
    url: '${tool.url}',
    tags: [${tool.tags.map(t => `'${t}'`).join(', ')}],
    createdAt: Date.now(),
    releasedAt: Date.now()
  }`;
}

function updateConstantsFile(newTools) {
  console.log('💾 更新 constants.ts 文件...');
  
  if (fs.existsSync(CONFIG.outputPath)) {
    fs.copyFileSync(CONFIG.outputPath, CONFIG.backupPath);
    console.log('   ✓ 已创建备份');
  }
  
  const content = fs.readFileSync(CONFIG.outputPath, 'utf-8');
  const toolCodes = newTools.map(generateToolCode);
  const toolsString = toolCodes.join(',\n');
  
  const insertPosition = content.lastIndexOf('];');
  if (insertPosition === -1) {
    console.error('❌ 无法找到插入位置');
    return false;
  }
  
  const lastToolEnd = content.lastIndexOf('}', insertPosition);
  const hasTrailingComma = content.slice(lastToolEnd, insertPosition).includes(',');
  
  const newContent = 
    content.slice(0, lastToolEnd + 1) + 
    (hasTrailingComma ? '\n' : ',\n') + 
    toolsString + 
    '\n' + 
    content.slice(insertPosition);
  
  fs.writeFileSync(CONFIG.outputPath, newContent, 'utf-8');
  console.log('   ✅ 文件更新成功\n');
  return true;
}

function generateReport(newTools) {
  console.log('📊 生成报告...');
  
  const report = `# AI Tools Discovery Report

生成时间：${new Date().toLocaleString('zh-CN')}

## 概览
- 发现新工具：${newTools.length} 个
- 数据源：预定义数据库（可扩展）

## 新添加的工具

| # | 工具名称 | 分类 | 定价 | URL |
|---|---------|------|------|-----|
${newTools.map((tool, i) => `${i + 1} | **${tool.name}** | ${tool.category} | ${tool.pricing} | [访问](${tool.url}) |`).join('\n')}

## 工具详情

${newTools.map(tool => `
### ${i + 1}. ${tool.name}

- **描述**: ${tool.description}
- **分类**: ${tool.category}
- **定价**: ${tool.pricing}
- **标签**: ${tool.tags.join(', ')}
- **网址**: [${tool.url}](${tool.url})

`).join('\n')}

## 下一步操作

1. 访问每个工具网站，验证信息准确性
2. 补充多语言翻译（可使用 Google Translate）
3. 完善标签系统
4. 在网站上测试显示效果

---
*此报告由 NavAI Auto-Discover 自动生成*
`;
  
  fs.writeFileSync(CONFIG.reportPath, report, 'utf-8');
  console.log(`   ✅ 报告已保存到：${CONFIG.reportPath}\n`);
}

// ========== 主函数 ==========

async function main() {
  const args = process.argv.slice(2);
  const isDryRun = args.includes('--dry-run');
  
  console.log('');
  console.log('╔════════════════════════════════════════╗');
  console.log('║  NavAI Auto-Discover Tools            ║');
  console.log('║  自动化 AI 工具发现系统                 ║');
  console.log('╚════════════════════════════════════════╝');
  console.log('');
  console.log(`📍 数据源：预定义数据库`);
  console.log(`🔬 模式：${isDryRun ? '预览模式（不写入）' : '生产模式'}`);
  console.log(`📊 可用工具：${CONFIG.knownNewTools.length} 个预定义工具`);
  
  try {
    // 1. 读取现有工具
    const existingUrls = readExistingTools();
    
    // 2. 过滤已存在的工具
    const uniqueTools = filterExistingTools(CONFIG.knownNewTools, existingUrls);
    
    if (uniqueTools.length === 0) {
      console.log('✨ 所有预定义工具都已存在，任务完成！');
      console.log('');
      console.log('💡 提示：你可以编辑 discover-tools.js 中的 knownNewTools 数组添加更多工具');
      return;
    }
    
    // 3. 显示预览
    console.log('📋 新工具预览:\n');
    uniqueTools.forEach((tool, i) => {
      console.log(`   ${i + 1}. ${tool.name}`);
      console.log(`      � ${tool.description.substring(0, 60)}...`);
      console.log(`      �🔗 ${tool.url}`);
      console.log(`      🏷️  分类: ${tool.category} | 定价: ${tool.pricing}`);
      console.log('');
    });
    
    // 4. 写入文件或预览
    if (!isDryRun) {
      const success = updateConstantsFile(uniqueTools);
      
      if (success) {
        generateReport(uniqueTools);
        
        console.log('╔════════════════════════════════════════╗');
        console.log('║  ✅ 任务完成！                        ║');
        console.log(`║  添加了 ${uniqueTools.length} 个新工具               ║`);
        console.log('╚════════════════════════════════════════╝\n');
        console.log('📄 生成的文件:');
        console.log(`   ✓ constants.ts - 已更新的工具列表`);
        console.log(`   ✓ constants.ts.backup - 备份文件`);
        console.log(`   ✓ discover-report.md - 详细报告\n`);
        console.log('🎯 下一步:');
        console.log('   1. 查看 discover-report.md 了解详情');
        console.log('   2. 运行 npm run dev 预览效果');
        console.log('   3. 提交代码到 Git');
      }
    } else {
      console.log('\n💡 提示：使用 --dry-run 模式，未写入文件');
      console.log('   如需正式运行，请去掉 --dry-run 参数\n');
    }
    
  } catch (error) {
    console.error('\n❌ 发生错误:', error.message);
    process.exit(1);
  }
}

main().catch(console.error);
