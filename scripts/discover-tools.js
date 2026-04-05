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
    // Chatbots & Assistants
    {
      id: 'pi-ai',
      name: 'Pi',
      description: 'An AI companion for conversations, advice, and emotional support.',
      url: 'https://pi.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'ai-companion', 'conversational', 'assistant']
    },
    {
      id: 'claude-ai',
      name: 'Claude',
      description: 'Anthropic\'s AI assistant for safe and helpful conversations.',
      url: 'https://claude.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'ai-assistant', 'anthropic', 'safe-ai']
    },
    {
      id: 'bing-chat',
      name: 'Bing Chat',
      description: 'Microsoft\'s AI-powered chat with web search integration.',
      url: 'https://www.bing.com/chat',
      category: 'AI_SEARCH',
      pricing: 'FREE',
      tags: ['chatbot', 'search', 'microsoft', 'ai-search']
    },
    
    // AI Search
    {
      id: 'you-com',
      name: 'You.com',
      description: 'AI search engine with chat, research, and coding capabilities.',
      url: 'https://you.com/',
      category: 'AI_SEARCH',
      pricing: 'FREEMIUM',
      tags: ['search-engine', 'ai-search', 'research', 'coding']
    },
    {
      id: 'consensus-app',
      name: 'Consensus',
      description: 'Search engine for research papers - find answers in scientific literature.',
      url: 'https://consensus.app/',
      category: 'AI_SEARCH',
      pricing: 'FREEMIUM',
      tags: ['research', 'papers', 'science', 'academic']
    },
    
    // Marketing & SEO
    {
      id: 'copy-ai',
      name: 'Copy.ai',
      description: 'AI copywriting platform for marketing, social media, and sales content.',
      url: 'https://www.copy.ai/',
      category: 'MARKETING',
      pricing: 'FREEMIUM',
      tags: ['copywriting', 'marketing', 'content', 'sales']
    },
    {
      id: 'jasper-ai',
      name: 'Jasper',
      description: 'AI content platform for teams - create blogs, ads, and social posts.',
      url: 'https://www.jasper.ai/',
      category: 'MARKETING',
      pricing: 'PAID',
      tags: ['content', 'marketing', 'copywriting', 'team']
    },
    {
      id: 'surfer-seo',
      name: 'Surfer SEO',
      description: 'AI SEO tool to optimize content and rank higher on Google.',
      url: 'https://surferseo.com/',
      category: 'MARKETING',
      pricing: 'PAID',
      tags: ['seo', 'content', 'optimization', 'google']
    },
    
    // Design & UI/UX
    {
      id: 'canva-ai',
      name: 'Canva AI',
      description: 'AI-powered design tools within Canva for creating graphics, videos, and more.',
      url: 'https://www.canva.com/ai-image-generator/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['design', 'graphics', 'canva', 'ai-design']
    },
    {
      id: 'figma-ai',
      name: 'Figma AI',
      description: 'AI features in Figma for UI design, prototyping, and collaboration.',
      url: 'https://www.figma.com/ai/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['design', 'ui', 'ux', 'prototyping']
    },
    {
      id: 'adobe-firefly',
      name: 'Adobe Firefly',
      description: 'Adobe\'s generative AI for creative design and image editing.',
      url: 'https://firefly.adobe.com/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['adobe', 'design', 'image-generation', 'creative']
    },
    
    // Education & Learning
    {
      id: 'khanmigo',
      name: 'Khanmigo',
      description: 'Khan Academy\'s AI tutor for personalized learning and tutoring.',
      url: 'https://www.khanacademy.org/khanmigo',
      category: 'EDUCATION',
      pricing: 'PAID',
      tags: ['education', 'tutor', 'learning', 'khan-academy']
    },
    {
      id: 'duolingo-max',
      name: 'Duolingo Max',
      description: 'AI-powered language learning with personalized lessons and explanations.',
      url: 'https://www.duolingo.com/max',
      category: 'EDUCATION',
      pricing: 'PAID',
      tags: ['language', 'learning', 'education', 'duolingo']
    },
    {
      id: 'quizlet-plus',
      name: 'Quizlet Plus',
      description: 'AI-enhanced flashcards and study tools for better learning.',
      url: 'https://quizlet.com/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['flashcards', 'study', 'education', 'learning']
    },
    
    // Content Creation
    {
      id: 'content-at-scale',
      name: 'Content at Scale',
      description: 'AI content generator for SEO-optimized blog posts and articles.',
      url: 'https://contentatscale.ai/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'blogging', 'seo', 'writing']
    },
    {
      id: 'writer-com',
      name: 'Writer.com',
      description: 'AI writing platform for teams with brand voice consistency.',
      url: 'https://writer.com/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['writing', 'content', 'team', 'brand-voice']
    },
    {
      id: 'frase-io',
      name: 'Frase',
      description: 'AI content and SEO platform for research, writing, and optimization.',
      url: 'https://www.frase.io/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'seo', 'research', 'writing']
    },
    
    // AI Detectors
    {
      id: 'originality-ai',
      name: 'Originality.ai',
      description: 'AI content detector and plagiarism checker for written content.',
      url: 'https://originality.ai/',
      category: 'DETECTORS',
      pricing: 'PAID',
      tags: ['ai-detector', 'plagiarism', 'content', 'originality']
    },
    {
      id: 'gptzero',
      name: 'GPTZero',
      description: 'Detect AI-generated content and analyze text originality.',
      url: 'https://gptzero.me/',
      category: 'DETECTORS',
      pricing: 'FREEMIUM',
      tags: ['ai-detector', 'content', 'detection', 'analysis']
    },
    {
      id: 'content-at-scale-detector',
      name: 'Content at Scale Detector',
      description: 'Free AI content detector to check if text was written by AI.',
      url: 'https://contentatscale.ai/ai-content-detector/',
      category: 'DETECTORS',
      pricing: 'FREE',
      tags: ['ai-detector', 'content', 'detection', 'free']
    },
    
    // Avatars & Characters
    {
      id: 'did-com',
      name: 'D-ID',
      description: 'AI platform for creating talking avatars and videos from photos.',
      url: 'https://d-id.com/',
      category: 'AVATARS',
      pricing: 'FREEMIUM',
      tags: ['avatars', 'talking-avatars', 'video', 'photo-to-video']
    },
    {
      id: 'synthesia',
      name: 'Synthesia',
      description: 'AI video generator with AI avatars - create professional videos in minutes.',
      url: 'https://www.synthesia.io/',
      category: 'AVATARS',
      pricing: 'PAID',
      tags: ['video', 'ai-video', 'avatars', 'professional', 'marketing']
    },
    {
      id: 'heygen',
      name: 'HeyGen',
      description: 'AI video spokesperson generator - create videos with realistic avatars.',
      url: 'https://www.heygen.com/',
      category: 'AVATARS',
      pricing: 'FREEMIUM',
      tags: ['video', 'avatars', 'spokesperson', 'marketing']
    },
    
    // Presentations
    {
      id: 'beautiful-ai',
      name: 'Beautiful.ai',
      description: 'AI presentation maker for beautiful and professional slides.',
      url: 'https://www.beautiful.ai/',
      category: 'PRESENTATIONS',
      pricing: 'PAID',
      tags: ['presentations', 'slides', 'design', 'professional']
    },
    {
      id: 'tome-app',
      name: 'Tome',
      description: 'AI storytelling and presentation tool with AI-generated content.',
      url: 'https://tome.app/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'storytelling', 'ai-content', 'slides']
    },
    {
      id: 'gamma-app',
      name: 'Gamma',
      description: 'A new medium for presenting ideas, powered by AI - create decks in minutes.',
      url: 'https://gamma.app/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'slides', 'design', 'ai-powered']
    },
    
    // Data & Analytics
    {
      id: 'tableau-gpt',
      name: 'Tableau GPT',
      description: 'AI-powered analytics and data visualization in Tableau.',
      url: 'https://www.tableau.com/products/tableau-gpt',
      category: 'DATA',
      pricing: 'PAID',
      tags: ['data', 'analytics', 'visualization', 'tableau']
    },
    {
      id: 'power-bi-copilot',
      name: 'Power BI Copilot',
      description: 'AI assistant for data analysis and visualization in Power BI.',
      url: 'https://www.microsoft.com/en-us/power-platform/products/power-bi/copilot',
      category: 'DATA',
      pricing: 'PAID',
      tags: ['data', 'analytics', 'power-bi', 'microsoft']
    },
    
    // Social Media
    {
      id: 'buffer-ai',
      name: 'Buffer AI',
      description: 'AI-powered social media management and content creation.',
      url: 'https://buffer.com/ai',
      category: 'SOCIAL_MEDIA',
      pricing: 'FREEMIUM',
      tags: ['social-media', 'content', 'marketing', 'scheduling']
    },
    {
      id: 'lately-ai',
      name: 'Lately',
      description: 'AI social media content generator that repurposes long-form content.',
      url: 'https://www.lately.ai/',
      category: 'SOCIAL_MEDIA',
      pricing: 'PAID',
      tags: ['social-media', 'content', 'marketing', 'repurposing']
    },
    
    // Email & Communication
    {
      id: 'superhuman-ai',
      name: 'Superhuman AI',
      description: 'AI-powered email client for blazing fast email productivity.',
      url: 'https://superhuman.com/',
      category: 'EMAIL',
      pricing: 'PAID',
      tags: ['email', 'productivity', 'ai-assistant', 'fast']
    },
    {
      id: 'compose-ai',
      name: 'Compose AI',
      description: 'AI writing assistant for emails, messages, and any text input.',
      url: 'https://www.compose.ai/',
      category: 'EMAIL',
      pricing: 'FREEMIUM',
      tags: ['email', 'writing', 'ai-assistant', 'productivity']
    },
    
    // Video Editing
    {
      id: 'runway-ml',
      name: 'Runway ML',
      description: 'Professional AI video editing and generation platform.',
      url: 'https://runwayml.com/',
      category: 'VIDEO_EDITING',
      pricing: 'FREEMIUM',
      tags: ['video', 'editing', 'ai-video', 'professional']
    },
    {
      id: 'descript',
      name: 'Descript',
      description: 'AI-powered video and audio editor with transcription and editing.',
      url: 'https://www.descript.com/',
      category: 'VIDEO_EDITING',
      pricing: 'FREEMIUM',
      tags: ['video', 'audio', 'editing', 'transcription']
    },
    {
      id: 'pika-labs',
      name: 'Pika Labs',
      description: 'AI video generation from text and images.',
      url: 'https://pika.art/',
      category: 'VIDEO_EDITING',
      pricing: 'FREEMIUM',
      tags: ['video', 'generation', 'ai-video', 'text-to-video']
    },
    
    // Logo & Branding
    {
      id: 'looka',
      name: 'Looka',
      description: 'AI logo maker and brand identity design platform.',
      url: 'https://looka.com/',
      category: 'LOGO_BRANDING',
      pricing: 'FREEMIUM',
      tags: ['logo', 'branding', 'design', 'ai-design']
    },
    {
      id: 'namecheap-logo',
      name: 'Namecheap Logo Maker',
      description: 'Free AI logo generator with professional design options.',
      url: 'https://www.namecheap.com/logo-maker/',
      category: 'LOGO_BRANDING',
      pricing: 'FREE',
      tags: ['logo', 'branding', 'design', 'free']
    },
    
    // Resume & CV
    {
      id: 'resume-worded',
      name: 'Resume Worded',
      description: 'AI-powered resume and LinkedIn profile optimization.',
      url: 'https://resumeworded.com/',
      category: 'RESUME_CV',
      pricing: 'FREEMIUM',
      tags: ['resume', 'cv', 'career', 'job']
    },
    {
      id: 'killer-resume',
      name: 'Killer Resume',
      description: 'AI resume builder with professional templates and optimization.',
      url: 'https://www.killerresume.com/',
      category: 'RESUME_CV',
      pricing: 'FREEMIUM',
      tags: ['resume', 'cv', 'templates', 'professional']
    },
    
    // Translation
    {
      id: 'deepl',
      name: 'DeepL',
      description: 'High-quality AI translation for text and documents.',
      url: 'https://www.deepl.com/',
      category: 'TRANSLATION',
      pricing: 'FREEMIUM',
      tags: ['translation', 'language', 'ai-translation', 'documents']
    },
    {
      id: 'google-translate',
      name: 'Google Translate',
      description: 'Free AI translation tool supporting 100+ languages.',
      url: 'https://translate.google.com/',
      category: 'TRANSLATION',
      pricing: 'FREE',
      tags: ['translation', 'language', 'free', 'google']
    },
    
    // More Chatbots & Assistants
    {
      id: 'anthropic-claude',
      name: 'Claude 3',
      description: 'Anthropic\'s latest AI assistant with improved reasoning and safety.',
      url: 'https://claude.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'ai-assistant', 'anthropic', 'claude']
    },
    {
      id: 'mistral-ai',
      name: 'Mistral AI',
      description: 'Fast and efficient AI models for chat and reasoning.',
      url: 'https://mistral.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'ai-model', 'mistral', 'fast']
    },
    {
      id: 'cohere-ai',
      name: 'Cohere',
      description: 'Enterprise AI platform for text generation and understanding.',
      url: 'https://cohere.com/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'enterprise', 'text-generation', 'cohere']
    },
    
    // More Image Tools
    {
      id: 'stable-diffusion',
      name: 'Stable Diffusion',
      description: 'Open-source AI image generation model from Stability AI.',
      url: 'https://stability.ai/',
      category: 'IMAGE',
      pricing: 'FREE',
      tags: ['image-generation', 'stable-diffusion', 'open-source', 'ai-art']
    },
    {
      id: 'dall-e',
      name: 'DALL·E 3',
      description: 'OpenAI\'s latest image generation model.',
      url: 'https://openai.com/dall-e-3',
      category: 'IMAGE',
      pricing: 'PAID',
      tags: ['image-generation', 'openai', 'dalle', 'ai-art']
    },
    {
      id: 'flux-ai',
      name: 'Flux',
      description: 'High-quality image generation from Black Forest Labs.',
      url: 'https://blackforestlabs.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'flux', 'ai-art', 'high-quality']
    },
    
    // More Video Tools
    {
      id: 'sora',
      name: 'Sora',
      description: 'OpenAI\'s video generation model (coming soon).',
      url: 'https://openai.com/sora',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video-generation', 'openai', 'sora', 'ai-video']
    },
    {
      id: 'luma-ai',
      name: 'Luma AI',
      description: '3D generation and video creation with AI.',
      url: 'https://lumalabs.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', '3d', 'generation', 'luma']
    },
    
    // More Audio Tools
    {
      id: 'udio',
      name: 'Udio',
      description: 'Professional AI music generation platform.',
      url: 'https://udio.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'udio']
    },
    {
      id: 'soundraw',
      name: 'Soundraw',
      description: 'AI music generator for creators.',
      url: 'https://soundraw.io/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'soundraw']
    },
    
    // More Coding Tools
    {
      id: 'tabnine',
      name: 'Tabnine',
      description: 'AI code completion for developers.',
      url: 'https://www.tabnine.com/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'code-completion', 'developer', 'tabnine']
    },
    {
      id: 'sourcegraph',
      name: 'Sourcegraph Cody',
      description: 'AI coding assistant with context from your codebase.',
      url: 'https://about.sourcegraph.com/cody',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'ai-assistant', 'developer', 'sourcegraph']
    },
    {
      id: 'replit-ai',
      name: 'Replit AI',
      description: 'AI-powered coding and development in the browser.',
      url: 'https://replit.com/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'developer', 'replit', 'browser-ai']
    },
    
    // More Productivity Tools
    {
      id: 'trello-ai',
      name: 'Trello AI',
      description: 'AI features in Trello for project management.',
      url: 'https://trello.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['project-management', 'trello', 'productivity', 'ai']
    },
    {
      id: 'monday-ai',
      name: 'Monday.com AI',
      description: 'AI-powered work management platform.',
      url: 'https://monday.com/',
      category: 'PRODUCTIVITY',
      pricing: 'PAID',
      tags: ['project-management', 'monday', 'productivity', 'work-management']
    },
    {
      id: 'clickup-ai',
      name: 'ClickUp AI',
      description: 'AI features in ClickUp for productivity.',
      url: 'https://clickup.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['project-management', 'clickup', 'productivity']
    },
    
    // More Design Tools
    {
      id: 'figma-dev',
      name: 'Figma',
      description: 'Collaborative design tool with AI features.',
      url: 'https://www.figma.com/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['design', 'ui', 'ux', 'collaboration', 'figma']
    },
    {
      id: 'canva',
      name: 'Canva',
      description: 'Graphic design platform with AI tools.',
      url: 'https://www.canva.com/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['design', 'graphics', 'canva', 'easy']
    },
    
    // More Education Tools
    {
      id: 'grammarly',
      name: 'Grammarly',
      description: 'AI writing assistant for grammar and writing.',
      url: 'https://www.grammarly.com/',
      category: 'TEXT',
      pricing: 'FREEMIUM',
      tags: ['writing', 'grammar', 'editing', 'grammarly']
    },
    {
      id: 'quillbot',
      name: 'QuillBot',
      description: 'AI paraphrasing and writing tool.',
      url: 'https://quillbot.com/',
      category: 'TEXT',
      pricing: 'FREEMIUM',
      tags: ['writing', 'paraphrasing', 'quillbot', 'editing']
    },
    
    // More Business Tools
    {
      id: 'hubspot-ai',
      name: 'HubSpot AI',
      description: 'AI-powered CRM and marketing platform.',
      url: 'https://www.hubspot.com/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['crm', 'marketing', 'hubspot', 'business']
    },
    {
      id: 'salesforce-einstein',
      name: 'Salesforce Einstein',
      description: 'AI features in Salesforce CRM.',
      url: 'https://www.salesforce.com/products/einstein/overview/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['crm', 'salesforce', 'business', 'einstein']
    },
    
    // More Social Media Tools
    {
      id: 'canva-social',
      name: 'Canva Social',
      description: 'AI social media content creation.',
      url: 'https://www.canva.com/social-media/',
      category: 'SOCIAL_MEDIA',
      pricing: 'FREEMIUM',
      tags: ['social-media', 'content', 'canva', 'marketing']
    },
    
    // More Logo Tools
    {
      id: 'brandmark',
      name: 'Brandmark',
      description: 'AI logo maker and brand design.',
      url: 'https://brandmark.io/',
      category: 'LOGO_BRANDING',
      pricing: 'FREEMIUM',
      tags: ['logo', 'branding', 'design', 'brandmark']
    },
    
    // More Resume Tools
    {
      id: 'resume-ai',
      name: 'Resume AI',
      description: 'AI resume builder for job seekers.',
      url: 'https://www.resume-ai.com/',
      category: 'RESUME_CV',
      pricing: 'FREEMIUM',
      tags: ['resume', 'cv', 'job', 'career']
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

${newTools.map((tool, i) => `
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
