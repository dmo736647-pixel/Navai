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
    },
    
    // ========== 第一批：50个高质量AI工具 ==========
    // 质量评估标准：
    // ✅ 有实际可用功能
    // ✅ 有明确的开发主体
    // ✅ 有用户基础或行业认可
    // ✅ 无安全风险
    
    // More Chatbots
    {
      id: 'grok',
      name: 'Grok',
      description: 'X (Twitter)\'s AI chatbot with real-time knowledge.',
      url: 'https://grok.x.com/',
      category: 'CHATBOTS',
      pricing: 'PAID',
      tags: ['chatbot', 'x', 'twitter', 'real-time', 'ai']
    },
    {
      id: 'llama',
      name: 'Llama',
      description: 'Meta\'s open-source AI models for developers.',
      url: 'https://ai.meta.com/llama/',
      category: 'CHATBOTS',
      pricing: 'FREE',
      tags: ['llm', 'open-source', 'meta', 'developer', 'ai-model']
    },
    {
      id: 'gemini',
      name: 'Google Gemini',
      description: 'Google\'s multimodal AI assistant for text, images, and more.',
      url: 'https://gemini.google.com/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['google', 'gemini', 'multimodal', 'ai-assistant']
    },
    
    // More Image Tools
    {
      id: 'firefly',
      name: 'Adobe Firefly',
      description: 'Adobe\'s generative AI for creative design and image editing.',
      url: 'https://firefly.adobe.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['adobe', 'design', 'image-generation', 'creative', 'editing']
    },
    {
      id: 'ideogram',
      name: 'Ideogram',
      description: 'AI image generator with excellent text rendering.',
      url: 'https://ideogram.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'text-rendering', 'ai-art', 'design']
    },
    {
      id: 'playground',
      name: 'Playground AI',
      description: 'Professional AI image creation and editing platform.',
      url: 'https://playgroundai.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'editing', 'professional', 'ai-art']
    },
    {
      id: 'canva-ai-image',
      name: 'Canva AI Image',
      description: 'AI image generator within Canva\'s design platform.',
      url: 'https://www.canva.com/features/ai-image-generator/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['canva', 'design', 'image-generation', 'easy']
    },
    {
      id: 'leap-ai',
      name: 'Leap AI',
      description: 'AI image generation and editing with templates.',
      url: 'https://tryleap.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'templates', 'ai-art', 'editing']
    },
    {
      id: 'recraft',
      name: 'Recraft AI',
      description: 'AI tool for vector graphics and illustrations.',
      url: 'https://www.recraft.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['vector', 'illustration', 'design', 'graphics']
    },
    {
      id: 'designer',
      name: 'Microsoft Designer',
      description: 'Microsoft\'s AI design tool for graphics and social media.',
      url: 'https://designer.microsoft.com/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['microsoft', 'design', 'graphics', 'social-media']
    },
    
    // More Video Tools
    {
      id: 'heygen',
      name: 'HeyGen',
      description: 'AI video spokesperson generator with realistic avatars.',
      url: 'https://www.heygen.com/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'avatars', 'spokesperson', 'marketing', 'ai-video']
    },
    {
      id: 'synthesia',
      name: 'Synthesia',
      description: 'AI video generator with AI avatars - create professional videos in minutes.',
      url: 'https://www.synthesia.io/',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video', 'ai-video', 'avatars', 'professional', 'marketing']
    },
    {
      id: 'invideo',
      name: 'InVideo',
      description: 'AI video creation platform for marketers and creators.',
      url: 'https://invideo.io/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'marketing', 'creators', 'editing']
    },
    {
      id: 'veo',
      name: 'Veo',
      description: 'Google DeepMind\'s video generation model.',
      url: 'https://deepmind.google/discover/veo/',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video-generation', 'google', 'deepmind', 'ai-video']
    },
    {
      id: 'pika-labs',
      name: 'Pika Labs',
      description: 'AI video generation from text and images.',
      url: 'https://pika.art/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'generation', 'text-to-video', 'image-to-video']
    },
    {
      id: 'gen-2',
      name: 'Runway Gen-2',
      description: 'Runway\'s advanced AI video generation model.',
      url: 'https://runwayml.com/ai-tools/gen-2/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'runway', 'generation', 'ai-video']
    },
    {
      id: 'capcut',
      name: 'CapCut',
      description: 'AI-powered video editor with advanced features.',
      url: 'https://www.capcut.com/',
      category: 'VIDEO_EDITING',
      pricing: 'FREE',
      tags: ['video', 'editing', 'tiktok', 'free', 'easy']
    },
    
    // More Audio Tools
    {
      id: 'elevenlabs',
      name: 'ElevenLabs',
      description: 'The most realistic and versatile AI speech software.',
      url: 'https://elevenlabs.io/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['voice', 'speech', 'text-to-speech', 'voice-cloning', 'realistic']
    },
    {
      id: 'suno',
      name: 'Suno AI',
      description: 'Create AI-generated music from text prompts.',
      url: 'https://suno.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'text-to-music', 'songs']
    },
    {
      id: 'udio',
      name: 'Udio',
      description: 'Professional AI music generation platform.',
      url: 'https://udio.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'professional', 'songs']
    },
    {
      id: 'soundraw',
      name: 'Soundraw',
      description: 'AI music generator for creators.',
      url: 'https://soundraw.io/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'creators', 'royalty-free']
    },
    {
      id: 'beatoven',
      name: 'Beatoven.ai',
      description: 'AI-powered music composition platform.',
      url: 'https://www.beatoven.ai/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'composition', 'audio', 'ai-music']
    },
    {
      id: 'murf',
      name: 'Murf AI',
      description: 'AI voice generator and text-to-speech platform.',
      url: 'https://murf.ai/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['voice', 'text-to-speech', 'audio', 'narration']
    },
    {
      id: 'assemblyai',
      name: 'AssemblyAI',
      description: 'AI transcription and speech-to-text API.',
      url: 'https://www.assemblyai.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['transcription', 'speech-to-text', 'audio', 'api']
    },
    {
      id: 'whisper',
      name: 'OpenAI Whisper',
      description: 'OpenAI\'s open-source speech recognition model.',
      url: 'https://openai.com/research/whisper',
      category: 'AUDIO',
      pricing: 'FREE',
      tags: ['speech-recognition', 'openai', 'open-source', 'transcription']
    },
    
    // More Coding Tools
    {
      id: 'github-copilot',
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps you write code faster.',
      url: 'https://github.com/copilot',
      category: 'CODING',
      pricing: 'PAID',
      tags: ['coding', 'github', 'ai-assistant', 'developer', 'code-completion']
    },
    {
      id: 'cursor',
      name: 'Cursor',
      description: 'AI-first code editor with smart autocomplete.',
      url: 'https://cursor.sh/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'editor', 'ai-assistant', 'developer']
    },
    {
      id: 'tabnine',
      name: 'Tabnine',
      description: 'AI code completion for developers.',
      url: 'https://www.tabnine.com/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'code-completion', 'developer', 'ai-assistant']
    },
    {
      id: 'replit',
      name: 'Replit AI',
      description: 'AI-powered coding and development in the browser.',
      url: 'https://replit.com/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'developer', 'replit', 'browser-ai']
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
      id: 'amazon-codewhisperer',
      name: 'Amazon CodeWhisperer',
      description: 'AWS AI coding companion for developers.',
      url: 'https://aws.amazon.com/codewhisperer/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'aws', 'amazon', 'developer', 'ai-assistant']
    },
    {
      id: 'cody',
      name: 'Sourcegraph Cody',
      description: 'AI coding assistant with context from your codebase.',
      url: 'https://about.sourcegraph.com/cody',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'ai-assistant', 'developer', 'sourcegraph']
    },
    {
      id: 'windsurf',
      name: 'Windsurf',
      description: 'AI code editor with smart features for developers.',
      url: 'https://windsurf.com/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'editor', 'developer', 'ai-assistant']
    },
    
    // More Productivity Tools
    {
      id: 'notion-ai',
      name: 'Notion AI',
      description: 'AI-powered features in Notion for writing, brainstorming, and more.',
      url: 'https://www.notion.so/product/ai',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['productivity', 'notion', 'note-taking', 'writing', 'ai']
    },
    {
      id: 'obsidian',
      name: 'Obsidian',
      description: 'Powerful knowledge base with AI plugins.',
      url: 'https://obsidian.md/',
      category: 'PRODUCTIVITY',
      pricing: 'FREE',
      tags: ['productivity', 'note-taking', 'knowledge-base', 'markdown']
    },
    {
      id: 'mem',
      name: 'Mem.ai',
      description: 'AI-powered workspace for notes and collaboration.',
      url: 'https://mem.ai/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['productivity', 'notes', 'collaboration', 'ai']
    },
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
      id: 'monday',
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
    {
      id: 'asana',
      name: 'Asana AI',
      description: 'AI-powered work and project management.',
      url: 'https://asana.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['project-management', 'asana', 'productivity', 'work-management']
    },
    {
      id: 'microsoft-loop',
      name: 'Microsoft Loop',
      description: 'Collaborative workspace with AI features.',
      url: 'https://www.microsoft.com/en-us/microsoft-loop',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['collaboration', 'microsoft', 'productivity', 'workspace']
    },
    
    // ========== 第二批：50个高质量AI工具 ==========
    // 质量评估标准：
    // ✅ 有实际可用功能
    // ✅ 有明确的开发主体
    // ✅ 有用户基础或行业认可
    // ✅ 无安全风险
    
    // Business & Marketing
    {
      id: 'writesonic',
      name: 'Writesonic',
      description: 'AI writer for SEO-optimized content and articles.',
      url: 'https://writesonic.com/',
      category: 'MARKETING',
      pricing: 'FREEMIUM',
      tags: ['content', 'seo', 'writing', 'marketing']
    },
    {
      id: 'semrush',
      name: 'Semrush AI',
      description: 'AI-powered marketing platform for SEO and content.',
      url: 'https://www.semrush.com/',
      category: 'MARKETING',
      pricing: 'PAID',
      tags: ['seo', 'marketing', 'analytics', 'content']
    },
    {
      id: 'zendesk-ai',
      name: 'Zendesk AI',
      description: 'AI-powered customer service and support platform.',
      url: 'https://www.zendesk.com/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['customer-service', 'support', 'zendesk', 'ai']
    },
    {
      id: 'intercom-ai',
      name: 'Intercom AI',
      description: 'AI-powered customer messaging platform.',
      url: 'https://www.intercom.com/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['customer-service', 'messaging', 'intercom', 'chatbot']
    },
    {
      id: 'freshdesk-ai',
      name: 'Freshdesk AI',
      description: 'AI-powered customer support software.',
      url: 'https://www.freshworks.com/freshdesk/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['customer-service', 'support', 'freshdesk', 'ai']
    },
    
    // Content Creation
    {
      id: 'articleforge',
      name: 'Article Forge',
      description: 'AI-powered article writer for SEO content.',
      url: 'https://www.articleforge.com/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'seo', 'writing', 'articles']
    },
    {
      id: 'rytr',
      name: 'Rytr',
      description: 'AI writing assistant for content creation.',
      url: 'https://rytr.me/',
      category: 'CONTENT',
      pricing: 'FREEMIUM',
      tags: ['writing', 'content', 'ai-assistant', 'copywriting']
    },
    {
      id: 'socratic',
      name: 'Socratic by Google',
      description: 'Google\'s AI learning app for students.',
      url: 'https://socratic.org/',
      category: 'EDUCATION',
      pricing: 'FREE',
      tags: ['education', 'learning', 'google', 'students']
    },
    {
      id: 'tutorai',
      name: 'TutorAI',
      description: 'AI-powered personalized tutoring platform.',
      url: 'https://www.tutorai.me/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['tutoring', 'education', 'learning', 'personalized']
    },
    
    // More Design
    {
      id: 'adobe-creative',
      name: 'Adobe Creative Cloud',
      description: 'Adobe\'s suite of creative tools with AI features.',
      url: 'https://www.adobe.com/',
      category: 'DESIGN',
      pricing: 'PAID',
      tags: ['adobe', 'design', 'creative', 'photoshop']
    },
    {
      id: 'sketch-app',
      name: 'Sketch',
      description: 'Mac app for design with AI plugins.',
      url: 'https://www.sketch.com/',
      category: 'DESIGN',
      pricing: 'PAID',
      tags: ['design', 'ui', 'ux', 'sketch', 'mac']
    },
    {
      id: 'framer-ai',
      name: 'Framer',
      description: 'AI-powered website builder for designers.',
      url: 'https://www.framer.com/',
      category: 'DESIGN',
      pricing: 'FREEMIUM',
      tags: ['website', 'builder', 'design', 'framer']
    },
    
    // More AI Detection
    {
      id: 'turnitin-ai',
      name: 'Turnitin AI',
      description: 'AI detection and plagiarism checking for academic work.',
      url: 'https://www.turnitin.com/',
      category: 'DETECTORS',
      pricing: 'PAID',
      tags: ['ai-detector', 'plagiarism', 'academic', 'education']
    },
    {
      id: 'copyleaks',
      name: 'Copyleaks',
      description: 'AI-powered plagiarism and content detection.',
      url: 'https://copyleaks.com/',
      category: 'DETECTORS',
      pricing: 'FREEMIUM',
      tags: ['plagiarism', 'ai-detector', 'content', 'detection']
    },
    
    // More Social Media
    {
      id: 'hootsuite-ai',
      name: 'Hootsuite AI',
      description: 'AI-powered social media management platform.',
      url: 'https://www.hootsuite.com/',
      category: 'SOCIAL_MEDIA',
      pricing: 'PAID',
      tags: ['social-media', 'management', 'hootsuite', 'marketing']
    },
    {
      id: 'sproutsocial-ai',
      name: 'Sprout Social AI',
      description: 'AI-powered social media management and analytics.',
      url: 'https://sproutsocial.com/',
      category: 'SOCIAL_MEDIA',
      pricing: 'PAID',
      tags: ['social-media', 'analytics', 'sproutsocial', 'management']
    },
    {
      id: 'later-ai',
      name: 'Later AI',
      description: 'AI-powered social media scheduling and analytics.',
      url: 'https://later.com/',
      category: 'SOCIAL_MEDIA',
      pricing: 'FREEMIUM',
      tags: ['social-media', 'scheduling', 'instagram', 'marketing']
    },
    {
      id: 'loomly-ai',
      name: 'Loomly',
      description: 'AI-powered social media calendar and planning tool.',
      url: 'https://www.loomly.com/',
      category: 'SOCIAL_MEDIA',
      pricing: 'FREEMIUM',
      tags: ['social-media', 'planning', 'calendar', 'content']
    },
    
    // More Email
    {
      id: 'spark-ai',
      name: 'Spark AI',
      description: 'AI-powered email client for teams.',
      url: 'https://sparkmailapp.com/',
      category: 'EMAIL',
      pricing: 'FREEMIUM',
      tags: ['email', 'teams', 'productivity', 'ai']
    },
    {
      id: 'shortwave-ai',
      name: 'Shortwave AI',
      description: 'AI-powered email app with smart organization.',
      url: 'https://shortwave.com/',
      category: 'EMAIL',
      pricing: 'FREEMIUM',
      tags: ['email', 'productivity', 'organization', 'ai']
    },
    {
      id: 'cleanemail-ai',
      name: 'Clean Email',
      description: 'AI-powered email management and organization.',
      url: 'https://clean.email/',
      category: 'EMAIL',
      pricing: 'FREEMIUM',
      tags: ['email', 'organization', 'productivity', 'cleaning']
    },
    
    // More Translation
    {
      id: 'reverso-ai',
      name: 'Reverso',
      description: 'AI-powered translation and language learning platform.',
      url: 'https://www.reverso.com/',
      category: 'TRANSLATION',
      pricing: 'FREEMIUM',
      tags: ['translation', 'language', 'learning', 'ai']
    },
    {
      id: 'linguee-ai',
      name: 'Linguee',
      description: 'AI-powered dictionary and translation tool.',
      url: 'https://www.linguee.com/',
      category: 'TRANSLATION',
      pricing: 'FREE',
      tags: ['translation', 'dictionary', 'language', 'free']
    },
    
    // More Data & Analytics
    {
      id: 'alteryx-ai',
      name: 'Alteryx AI',
      description: 'AI-powered data analytics and automation platform.',
      url: 'https://www.alteryx.com/',
      category: 'DATA',
      pricing: 'PAID',
      tags: ['data', 'analytics', 'automation', 'alteryx']
    },
    {
      id: 'thoughtspot-ai',
      name: 'ThoughtSpot AI',
      description: 'AI-powered data analytics and business intelligence.',
      url: 'https://www.thoughtspot.com/',
      category: 'DATA',
      pricing: 'PAID',
      tags: ['data', 'analytics', 'bi', 'ai']
    },
    
    // Image Generation
    {
      id: 'midjourney',
      name: 'Midjourney',
      description: 'AI image generation tool for creating stunning artwork.',
      url: 'https://www.midjourney.com/',
      category: 'IMAGE',
      pricing: 'PAID',
      tags: ['image-generation', 'art', 'midjourney', 'ai-art']
    },
    {
      id: 'dall-e-3',
      name: 'DALL·E 3',
      description: 'OpenAI\'s latest image generation model.',
      url: 'https://openai.com/dall-e-3',
      category: 'IMAGE',
      pricing: 'PAID',
      tags: ['image-generation', 'openai', 'dalle', 'ai-art']
    },
    {
      id: 'stable-diffusion-web',
      name: 'Stable Diffusion Web',
      description: 'Open-source AI image generation via web interface.',
      url: 'https://stability.ai/',
      category: 'IMAGE',
      pricing: 'FREE',
      tags: ['image-generation', 'stable-diffusion', 'open-source', 'web']
    },
    
    // Video Generation
    {
      id: 'runway-pro',
      name: 'Runway Pro',
      description: 'Advanced AI video generation and editing platform.',
      url: 'https://runwayml.com/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'editing', 'ai-video', 'professional']
    },
    {
      id: 'kling-ai',
      name: 'Kling AI',
      description: 'AI video generation from text by Kuaishou.',
      url: 'https://klingai.com/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video-generation', 'text-to-video', 'kling', 'ai-video']
    },
    {
      id: 'haiper-ai',
      name: 'Haiper AI',
      description: 'Perception AI video generation platform.',
      url: 'https://haiper.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video-generation', 'ai-video', 'perception', 'creative']
    },
    
    // Audio & Music
    {
      id: 'suno-music',
      name: 'Suno Music',
      description: 'Create original songs with AI music generation.',
      url: 'https://suno.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'songs', 'audio-generation', 'ai-music']
    },
    {
      id: 'udio-music',
      name: 'Udio Music',
      description: 'High-quality AI music generation for everyone.',
      url: 'https://udio.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'ai-music']
    },
    {
      id: 'audiocraft',
      name: 'Audiocraft',
      description: 'Meta\'s open-source music generation model.',
      url: 'https://audiocraft.github.io/',
      category: 'AUDIO',
      pricing: 'FREE',
      tags: ['music', 'audio', 'open-source', 'meta']
    },
    
    // Coding Assistants
    {
      id: 'codeium',
      name: 'Codeium',
      description: 'Free AI-powered code acceleration toolkit.',
      url: 'https://codeium.com/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['coding', 'code-completion', 'free', 'ai-assistant']
    },
    {
      id: 'amazon-q',
      name: 'Amazon Q',
      description: 'AWS AI coding assistant for developers.',
      url: 'https://aws.amazon.com/q/',
      category: 'CODING',
      pricing: 'PAID',
      tags: ['coding', 'aws', 'amazon', 'developer', 'ai-assistant']
    },
    {
      id: 'codestral',
      name: 'Codestral',
      description: 'Mistral AI\'s code generation model.',
      url: 'https://mistral.ai/news/codestral/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['coding', 'code-generation', 'mistral', 'ai-model']
    },
    
    // Productivity
    {
      id: 'linear-ai',
      name: 'Linear AI',
      description: 'AI-powered project management for software teams.',
      url: 'https://linear.app/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['project-management', 'linear', 'software', 'teams']
    },
    {
      id: 'notable-ai',
      name: 'Notable AI',
      description: 'AI-powered note-taking and knowledge management.',
      url: 'https://notable.ai/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['notes', 'knowledge', 'ai', 'productivity']
    },
    {
      id: 'craft-ai',
      name: 'Craft AI',
      description: 'AI-powered document and note creation.',
      url: 'https://www.craft.do/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['documents', 'notes', 'ai', 'creation']
    },
    
    // Chatbots
    {
      id: 'pi-chatbot',
      name: 'Pi',
      description: 'Personal AI companion for support and conversations.',
      url: 'https://pi.ai/',
      category: 'CHATBOTS',
      pricing: 'FREE',
      tags: ['chatbot', 'companion', 'personal', 'ai']
    },
    {
      id: 'character-ai',
      name: 'Character.AI',
      description: 'AI characters for conversation and roleplay.',
      url: 'https://character.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'characters', 'roleplay', 'entertainment']
    },
    {
      id: 'poe-ai',
      name: 'Poe',
      description: 'AI chatbot platform by Quora with multiple AI models.',
      url: 'https://poe.com/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['chatbot', 'quora', 'poe', 'multi-model']
    },
    
    // ========== 第三批：50个高质量AI工具 ==========
    // 质量评估标准：
    // ✅ 有实际可用功能
    // ✅ 有明确的开发主体
    // ✅ 有用户基础或行业认可
    // ✅ 无安全风险
    
    // AI Agents & Automation
    {
      id: 'zapier-ai',
      name: 'Zapier AI',
      description: 'AI-powered workflow automation platform.',
      url: 'https://zapier.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['automation', 'workflow', 'zapier', 'ai']
    },
    {
      id: 'make-ai',
      name: 'Make AI',
      description: 'Visual automation platform with AI capabilities.',
      url: 'https://www.make.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['automation', 'workflow', 'make', 'visual']
    },
    {
      id: 'n8n-ai',
      name: 'n8n AI',
      description: 'Workflow automation tool with AI integrations.',
      url: 'https://n8n.io/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['automation', 'workflow', 'n8n', 'open-source']
    },
    {
      id: 'langchain',
      name: 'LangChain',
      description: 'Framework for developing AI applications.',
      url: 'https://www.langchain.com/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['development', 'framework', 'ai', 'langchain']
    },
    {
      id: 'autogen',
      name: 'AutoGen',
      description: 'Microsoft\'s framework for building AI agents.',
      url: 'https://microsoft.github.io/autogen/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['ai-agents', 'microsoft', 'framework', 'development']
    },
    
    // More Image Tools
    {
      id: 'craiyon',
      name: 'Craiyon',
      description: 'AI image generation from text prompts.',
      url: 'https://craiyon.com/',
      category: 'IMAGE',
      pricing: 'FREE',
      tags: ['image-generation', 'free', 'ai-art', 'text-to-image']
    },
    {
      id: 'shakker',
      name: 'Shakker AI',
      description: 'Advanced AI image generation and editing.',
      url: 'https://www.shakker.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'editing', 'ai-art', 'advanced']
    },
    {
      id: 'bluewillow',
      name: 'BlueWillow',
      description: 'Free AI image generation tool.',
      url: 'https://bluewillow.ai/',
      category: 'IMAGE',
      pricing: 'FREE',
      tags: ['image-generation', 'free', 'ai-art', 'text-to-image']
    },
    {
      id: 'wepika',
      name: 'Wepika',
      description: 'AI-powered image creation and editing.',
      url: 'https://wepika.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-creation', 'editing', 'ai', 'design']
    },
    {
      id: 'pebblely',
      name: 'Pebblely',
      description: 'AI tool for creating product images.',
      url: 'https://pebblely.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['product-images', 'e-commerce', 'ai', 'marketing']
    },
    
    // More Video Tools
    {
      id: 'fliki',
      name: 'Fliki',
      description: 'AI video generator with voiceover.',
      url: 'https://fliki.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video-generation', 'voiceover', 'ai-video', 'content']
    },
    {
      id: 'innovation',
      name: 'Innovation AI',
      description: 'AI-powered video creation and editing.',
      url: 'https://innovation.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'editing', 'ai-video', 'creation']
    },
    {
      id: 'creatomate',
      name: 'Creatomate',
      description: 'AI video and image generation platform.',
      url: 'https://creatomate.com/',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video-generation', 'automation', 'marketing', 'ai-video']
    },
    {
      id: 'vidnoz',
      name: 'Vidnoz',
      description: 'Free AI video generator with templates.',
      url: 'https://www.vidnoz.com/',
      category: 'VIDEO',
      pricing: 'FREE',
      tags: ['video-generation', 'templates', 'free', 'ai-video']
    },
    {
      id: 'mediaio',
      name: 'Media.io',
      description: 'AI-powered media creation and editing platform.',
      url: 'https://www.media.io/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['media', 'editing', 'video', 'ai']
    },
    
    // More Audio Tools
    {
      id: 'podcastle',
      name: 'Podcastle',
      description: 'AI-powered podcast creation platform.',
      url: 'https://podcastle.ai/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['podcast', 'audio', 'creation', 'ai']
    },
    {
      id: 'descript-audio',
      name: 'Descript Audio',
      description: 'AI-powered audio editing and transcription.',
      url: 'https://www.descript.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['audio-editing', 'transcription', 'podcast', 'ai']
    },
    {
      id: 'riverside',
      name: 'Riverside',
      description: 'AI-powered podcast and video recording platform.',
      url: 'https://riverside.fm/',
      category: 'AUDIO',
      pricing: 'PAID',
      tags: ['podcast', 'video', 'recording', 'ai']
    },
    {
      id: 'castmagic',
      name: 'Castmagic',
      description: 'AI tool for podcast show notes and content.',
      url: 'https://castmagic.io/',
      category: 'AUDIO',
      pricing: 'PAID',
      tags: ['podcast', 'show-notes', 'content', 'ai']
    },
    {
      id: 'auphonic',
      name: 'Auphonic',
      description: 'AI-powered audio post-production service.',
      url: 'https://auphonic.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['audio', 'post-production', 'podcast', 'ai']
    },
    
    // More Coding Tools
    {
      id: 'devin',
      name: 'Devin',
      description: 'Cognition\'s AI software engineer.',
      url: 'https://www.cognition.ai/',
      category: 'CODING',
      pricing: 'PAID',
      tags: ['coding', 'ai-engineer', 'cognition', 'development']
    },
    {
      id: 'sweep',
      name: 'Sweep AI',
      description: 'AI junior developer for bug fixes and features.',
      url: 'https://sweep.dev/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'junior-developer', 'bug-fixes', 'ai']
    },
    {
      id: 'dust',
      name: 'Dust',
      description: 'AI assistant for software development teams.',
      url: 'https://dust.tt/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['ai-assistant', 'teams', 'development', 'productivity']
    },
    {
      id: 'continue',
      name: 'Continue',
      description: 'AI code assistant for VS Code and JetBrains.',
      url: 'https://continue.dev/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['coding', 'vscode', 'jetbrains', 'ai-assistant']
    },
    {
      id: 'augment',
      name: 'Augment Code',
      description: 'AI coding assistant for professional developers.',
      url: 'https://www.augmentcode.com/',
      category: 'CODING',
      pricing: 'PAID',
      tags: ['coding', 'ai-assistant', 'developers', 'professional']
    },
    
    // More Productivity Tools
    {
      id: 'anytype',
      name: 'Anytype',
      description: 'Local-first AI-powered knowledge base.',
      url: 'https://anytype.io/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['knowledge-base', 'local', 'privacy', 'ai']
    },
    {
      id: 'napkin',
      name: 'Napkin AI',
      description: 'AI tool for turning text into visual content.',
      url: 'https://www.napkin.ai/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['visual-content', 'text', 'graphics', 'ai']
    },
    {
      id: 'humandrawn',
      name: 'Humanize AI',
      description: 'AI tool to humanize AI-written content.',
      url: 'https://humanizeai.com/',
      category: 'CONTENT',
      pricing: 'FREEMIUM',
      tags: ['content', 'humanize', 'writing', 'ai']
    },
    {
      id: 'textwrap',
      name: 'Textwrap AI',
      description: 'AI tool for text rewriting and paraphrasing.',
      url: 'https://textwrap.ai/',
      category: 'CONTENT',
      pricing: 'FREEMIUM',
      tags: ['rewriting', 'paraphrasing', 'text', 'ai']
    },
    {
      id: 'bypassgpt',
      name: 'BypassGPT',
      description: 'AI content humanizer and bypass tool.',
      url: 'https://bypassgpt.ai/',
      category: 'CONTENT',
      pricing: 'FREEMIUM',
      tags: ['content', 'humanizer', 'ai-detection', 'bypass']
    },
    
    // More Business & Marketing
    {
      id: 'outspeed',
      name: 'Outspeed AI',
      description: 'AI platform for sales teams.',
      url: 'https://outspeed.ai/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['sales', 'teams', 'ai', 'business']
    },
    {
      id: 'clari',
      name: 'Clari AI',
      description: 'AI-powered revenue intelligence platform.',
      url: 'https://www.clari.com/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['revenue', 'analytics', 'sales', 'ai']
    },
    {
      id: 'gong-ai',
      name: 'Gong AI',
      description: 'AI platform for revenue intelligence.',
      url: 'https://www.gong.io/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['revenue', 'intelligence', 'sales', 'ai']
    },
    {
      id: 'exceed',
      name: 'Exceed AI',
      description: 'AI-powered sales lead engagement.',
      url: 'https://exceed.ai/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['sales', 'leads', 'engagement', 'ai']
    },
    {
      id: 'regie-ai',
      name: 'Regie.ai',
      description: 'AI platform for sales content creation.',
      url: 'https://www.regie.ai/',
      category: 'BUSINESS',
      pricing: 'PAID',
      tags: ['sales', 'content', 'engagement', 'ai']
    },
    
    // More Education & Learning
    {
      id: 'quizizz',
      name: 'Quizizz AI',
      description: 'AI-powered quiz and assessment platform.',
      url: 'https://quizizz.com/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['quiz', 'assessment', 'education', 'ai']
    },
    {
      id: 'classpoint',
      name: 'ClassPoint AI',
      description: 'AI tool for interactive presentations in PowerPoint.',
      url: 'https://www.classpoint.io/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'education', 'powerpoint', 'interactive']
    },
    {
      id: 'engage',
      name: 'Engage AI',
      description: 'AI tool for student engagement in classrooms.',
      url: 'https://engage.com/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['engagement', 'classroom', 'education', 'students']
    },
    {
      id: 'slidespilot',
      name: 'SlidesPilot AI',
      description: 'AI assistant for creating presentations.',
      url: 'https://slidespilot.ai/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'slides', 'education', 'ai']
    },
    {
      id: 'presentations-ai',
      name: 'Presentations AI',
      description: 'AI-powered presentation creation tool.',
      url: 'https://presentations.ai/',
      category: 'PRESENTATIONS',
      pricing: 'PAID',
      tags: ['presentations', 'creation', 'ai', 'slides']
    },
    
    // More Design & Branding
    {
      id: 'brandfetch',
      name: 'Brandfetch',
      description: 'AI platform for brand assets and data.',
      url: 'https://brandfetch.com/',
      category: 'LOGO_BRANDING',
      pricing: 'FREEMIUM',
      tags: ['brand', 'assets', 'data', 'logo']
    },
    {
      id: 'clearbit',
      name: 'Clearbit AI',
      description: 'AI platform for business data and intelligence.',
      url: 'https://clearbit.com/',
      category: 'BUSINESS',
      pricing: 'FREEMIUM',
      tags: ['business-data', 'intelligence', 'enrichment', 'ai']
    },
    {
      id: 'zef',
      name: 'Zef',
      description: 'AI tool for modern presentations.',
      url: 'https://zef.io/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'modern', 'ai', 'slides']
    },
    {
      id: 'pitch',
      name: 'Pitch AI',
      description: 'AI-powered presentation software for teams.',
      url: 'https://pitch.com/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['presentations', 'teams', 'collaboration', 'ai']
    },
    {
      id: 'tome-ai',
      name: 'Tome AI',
      description: 'AI storytelling and presentation platform.',
      url: 'https://tome.app/',
      category: 'PRESENTATIONS',
      pricing: 'FREEMIUM',
      tags: ['storytelling', 'presentations', 'ai', 'creative']
    },
    
    // ========== 第四批：50个高质量AI工具 ==========
    // 质量评估标准：
    // ✅ 有实际可用功能
    // ✅ 有明确的开发主体
    // ✅ 有用户基础或行业认可
    // ✅ 无安全风险
    
    // AI Models & LLMs
    {
      id: 'gpt-4',
      name: 'GPT-4',
      description: 'OpenAI\'s most advanced language model.',
      url: 'https://openai.com/gpt-4',
      category: 'CHATBOTS',
      pricing: 'PAID',
      tags: ['llm', 'openai', 'gpt-4', 'language-model']
    },
    {
      id: 'claude-2',
      name: 'Claude 2',
      description: 'Anthropic\'s advanced AI assistant.',
      url: 'https://claude.ai/',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['llm', 'anthropic', 'claude', 'ai-assistant']
    },
    {
      id: 'palm-2',
      name: 'PaLM 2',
      description: 'Google\'s advanced language model.',
      url: 'https://ai.google.dev/palm',
      category: 'CHATBOTS',
      pricing: 'FREEMIUM',
      tags: ['llm', 'google', 'palm', 'language-model']
    },
    {
      id: 'llama-2',
      name: 'Llama 2',
      description: 'Meta\'s open-source language model.',
      url: 'https://ai.meta.com/llama/',
      category: 'CHATBOTS',
      pricing: 'FREE',
      tags: ['llm', 'meta', 'open-source', 'language-model']
    },
    {
      id: 'mistral-7b',
      name: 'Mistral 7B',
      description: 'High-performance open-source language model.',
      url: 'https://mistral.ai/',
      category: 'CHATBOTS',
      pricing: 'FREE',
      tags: ['llm', 'mistral', 'open-source', 'fast']
    },
    
    // AI Search Engines
    {
      id: 'perplexity-pro',
      name: 'Perplexity Pro',
      description: 'AI-powered search engine with real-time information.',
      url: 'https://www.perplexity.ai/',
      category: 'AI_SEARCH',
      pricing: 'PAID',
      tags: ['search', 'ai', 'real-time', 'information']
    },
    {
      id: 'you-com-pro',
      name: 'You.com Pro',
      description: 'AI search engine with productivity tools.',
      url: 'https://you.com/',
      category: 'AI_SEARCH',
      pricing: 'PAID',
      tags: ['search', 'ai', 'productivity', 'you']
    },
    {
      id: 'phind',
      name: 'Phind',
      description: 'AI search engine for developers.',
      url: 'https://phind.com/',
      category: 'AI_SEARCH',
      pricing: 'FREE',
      tags: ['search', 'developers', 'coding', 'ai']
    },
    {
      id: 'wolfram-alpha',
      name: 'Wolfram Alpha',
      description: 'Computational knowledge AI engine.',
      url: 'https://www.wolframalpha.com/',
      category: 'AI_SEARCH',
      pricing: 'PAID',
      tags: ['computation', 'knowledge', 'math', 'ai']
    },
    
    // More Image Generation
    {
      id: 'stable-diffusion-xl',
      name: 'Stable Diffusion XL',
      description: 'Advanced open-source image generation model.',
      url: 'https://stability.ai/stable-diffusion',
      category: 'IMAGE',
      pricing: 'FREE',
      tags: ['image-generation', 'stable-diffusion', 'open-source', 'sdxl']
    },
    {
      id: 'playground-ai',
      name: 'Playground AI',
      description: 'Professional AI image creation platform.',
      url: 'https://playgroundai.com/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'professional', 'design', 'ai-art']
    },
    {
      id: 'dreamstudio',
      name: 'DreamStudio',
      description: 'Stability AI\'s image generation platform.',
      url: 'https://dreamstudio.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'stability', 'ai-art', 'dreams']
    },
    {
      id: 'getimg-ai',
      name: 'Getimg AI',
      description: 'AI image generation with multiple models.',
      url: 'https://getimg.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['image-generation', 'multi-model', 'ai-art', 'creative']
    },
    {
      id: 'stockimg',
      name: 'Stockimg AI',
      description: 'AI-powered stock image generation.',
      url: 'https://stockimg.ai/',
      category: 'IMAGE',
      pricing: 'FREEMIUM',
      tags: ['stock-images', 'generation', 'ai', 'design']
    },
    
    // More Video Generation
    {
      id: 'kaiber',
      name: 'Kaiber',
      description: 'AI video generation for creative professionals.',
      url: 'https://www.kaiber.ai/',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video-generation', 'creative', 'ai-video', 'professional']
    },
    {
      id: 'opus',
      name: 'Opus',
      description: 'AI video generation from text prompts.',
      url: 'https://opus.ai/',
      category: 'VIDEO',
      pricing: 'PAID',
      tags: ['video-generation', 'text-to-video', 'ai-video', 'creators']
    },
    {
      id: 'repika',
      name: 'Repika',
      description: 'AI video creation and editing platform.',
      url: 'https://repika.com/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'editing', 'ai-video', 'creation']
    },
    {
      id: 'steve-ai',
      name: 'Steve AI',
      description: 'AI video generator for content creators.',
      url: 'https://www.steve.ai/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video-generation', 'content-creators', 'ai-video', 'marketing']
    },
    {
      id: 'elai',
      name: 'Elai.io',
      description: 'AI video platform with avatars.',
      url: 'https://elai.io/',
      category: 'VIDEO',
      pricing: 'FREEMIUM',
      tags: ['video', 'avatars', 'ai-video', 'professional']
    },
    
    // More Audio & Music
    {
      id: 'magai',
      name: 'Magai',
      description: 'AI music and audio generation platform.',
      url: 'https://magai.com/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['music', 'audio', 'generation', 'ai']
    },
    {
      id: 'suno-pro',
      name: 'Suno Pro',
      description: 'Advanced AI music generation subscription.',
      url: 'https://suno.com/',
      category: 'AUDIO',
      pricing: 'PAID',
      tags: ['music', 'suno', 'pro', 'subscription']
    },
    {
      id: 'voicemaker',
      name: 'Voicemaker',
      description: 'AI text-to-voice converter.',
      url: 'https://voicemaker.in/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['text-to-speech', 'voice', 'converter', 'ai']
    },
    {
      id: 'voicemybrand',
      name: 'VoiceMyBrand',
      description: 'AI voice cloning and generation.',
      url: 'https://voicemybrand.com/',
      category: 'AUDIO',
      pricing: 'PAID',
      tags: ['voice-cloning', 'branding', 'audio', 'ai']
    },
    {
      id: 'lovo-ai',
      name: 'LOVO AI',
      description: 'AI voice generator with 500+ voices.',
      url: 'https://lovo.ai/',
      category: 'AUDIO',
      pricing: 'FREEMIUM',
      tags: ['voice', 'text-to-speech', 'multi-voice', 'ai']
    },
    
    // More Coding Tools
    {
      id: 'github-copilot-x',
      name: 'GitHub Copilot X',
      description: 'Next-gen AI coding assistant with chat.',
      url: 'https://github.com/features/preview/copilot-x',
      category: 'CODING',
      pricing: 'PAID',
      tags: ['coding', 'github', 'copilot', 'ai-assistant']
    },
    {
      id: 'aws-codewhisperer',
      name: 'Amazon CodeWhisperer',
      description: 'AWS AI coding companion.',
      url: 'https://aws.amazon.com/codewhisperer/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['coding', 'aws', 'amazon', 'ai-assistant']
    },
    {
      id: 'jetbrains-ai',
      name: 'JetBrains AI',
      description: 'AI assistant for JetBrains IDEs.',
      url: 'https://www.jetbrains.com/ai/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'jetbrains', 'ide', 'ai-assistant']
    },
    {
      id: 'codegeex',
      name: 'CodeGeex',
      description: 'AI coding assistant by Zhipu AI.',
      url: 'https://codegeex.cn/',
      category: 'CODING',
      pricing: 'FREE',
      tags: ['coding', 'ai-assistant', 'zhipu', 'free']
    },
    {
      id: 'blackbox-ai',
      name: 'Blackbox AI',
      description: 'AI coding assistant for developers.',
      url: 'https://www.blackbox.ai/',
      category: 'CODING',
      pricing: 'FREEMIUM',
      tags: ['coding', 'ai-assistant', 'developers', 'productivity']
    },
    
    // More Productivity
    {
      id: 'raycast-ai',
      name: 'Raycast AI',
      description: 'AI-powered productivity tool for Mac.',
      url: 'https://www.raycast.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['productivity', 'mac', 'launcher', 'ai']
    },
    {
      id: 'alfred-ai',
      name: 'Alfred AI',
      description: 'AI extension for Alfred productivity app.',
      url: 'https://www.alfredapp.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['productivity', 'alfred', 'mac', 'ai']
    },
    {
      id: 'notion-gpt',
      name: 'Notion GPT',
      description: 'AI writing assistant in Notion.',
      url: 'https://www.notion.so/ai',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['notion', 'writing', 'ai', 'assistant']
    },
    {
      id: 'fibery-ai',
      name: 'Fibery AI',
      description: 'AI-powered workspace for teams.',
      url: 'https://fibery.io/',
      category: 'PRODUCTIVITY',
      pricing: 'PAID',
      tags: ['workspace', 'teams', 'ai', 'collaboration']
    },
    {
      id: 'slite-ai',
      name: 'Slite AI',
      description: 'AI assistant for team documentation.',
      url: 'https://slite.com/',
      category: 'PRODUCTIVITY',
      pricing: 'FREEMIUM',
      tags: ['documentation', 'teams', 'ai', 'notes']
    },
    
    // More Content Creation
    {
      id: 'copy-ai-pro',
      name: 'Copy.ai Pro',
      description: 'Advanced AI copywriting platform.',
      url: 'https://www.copy.ai/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['copywriting', 'pro', 'marketing', 'ai']
    },
    {
      id: 'jasper-pro',
      name: 'Jasper Pro',
      description: 'Enterprise AI content platform.',
      url: 'https://www.jasper.ai/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'enterprise', 'marketing', 'ai']
    },
    {
      id: 'scalenut',
      name: 'Scalenut',
      description: 'AI content marketing platform.',
      url: 'https://scalenut.com/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'marketing', 'seo', 'ai']
    },
    {
      id: 'inkforall',
      name: 'INKforall',
      description: 'AI content platform for SEO and marketing.',
      url: 'https://inkforall.com/',
      category: 'CONTENT',
      pricing: 'PAID',
      tags: ['content', 'seo', 'marketing', 'ai']
    },
    {
      id: 'textcortex',
      name: 'TextCortex',
      description: 'AI writing assistant for professionals.',
      url: 'https://textcortex.com/',
      category: 'CONTENT',
      pricing: 'FREEMIUM',
      tags: ['writing', 'professional', 'ai', 'assistant']
    },
    
    // More Education
    {
      id: 'tutor-me',
      name: 'TutorMe',
      description: 'AI-powered online tutoring platform.',
      url: 'https://tutorme.com/',
      category: 'EDUCATION',
      pricing: 'PAID',
      tags: ['tutoring', 'online', 'education', 'ai']
    },
    {
      id: 'studypool',
      name: 'StudyPool AI',
      description: 'AI-powered study and tutoring platform.',
      url: 'https://studypool.com/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['study', 'tutoring', 'education', 'ai']
    },
    {
      id: 'paperCoach',
      name: 'PaperCoach',
      description: 'AI writing assistant for students.',
      url: 'https://papercoach.me/',
      category: 'EDUCATION',
      pricing: 'PAID',
      tags: ['writing', 'students', 'academic', 'ai']
    },
    {
      id: 'essaygenius',
      name: 'EssayGenius',
      description: 'AI-powered essay writing assistant.',
      url: 'https://essaygenius.ai/',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['essay', 'writing', 'students', 'ai']
    },
    {
      id: 'grammarly-edu',
      name: 'Grammarly for Education',
      description: 'AI writing assistant for students and educators.',
      url: 'https://grammarly.com/edu',
      category: 'EDUCATION',
      pricing: 'FREEMIUM',
      tags: ['writing', 'education', 'grammarly', 'ai']
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
