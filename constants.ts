import { Tool, ToolCategory, PricingModel, Language } from './types';

export const INITIAL_TOOLS: Tool[] = [
  // --- Text & Chatbots & Companions ---
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced conversational AI by OpenAI capable of text generation, coding, and analysis.',
    descriptions: {
      en: 'Advanced conversational AI by OpenAI capable of text generation, coding, and analysis.',
      zh: 'OpenAI 开发的高级对话 AI，能够生成文本、编写代码和进行分析。',
      ja: 'OpenAIによる高度な対話型AI。テキスト生成、コーディング、分析が可能。',
      es: 'IA conversacional avanzada de OpenAI capaz de generar texto, código y análisis.',
      tk: 'OpenAI tarapyndan tekst döretmek, kodlamak we derňew etmek üçin ösen gepleşik AI.',
      uz: 'OpenAI tomonidan matn yaratish, kodlash va tahlil qilish imkoniyatiga ega ilg\'or suhbatdosh AI.',
      tg: 'AI-и пешрафтаи гуфтугӯӣ аз ҷониби OpenAI, ки қодир ба эҷоди матн, рамзгузорӣ ва таҳлил аст.',
      hy: 'OpenAI-ի կողմից մշակված առաջադեմ խոսակցական AI, որն ունակ է տեքստ ստեղծել, կոդավորել և վերլուծել:',
      ro: 'AI conversațional avansat de la OpenAI capabil de generare de text, codare și analiză.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://chat.openai.com',
    tags: ['chatbot', 'llm', 'writing']
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant known for high reliability, nuanced understanding, and large context window.',
    descriptions: {
      en: 'Anthropic\'s AI assistant known for high reliability, nuanced understanding, and large context window.',
      zh: 'Anthropic 的 AI 助手，以高可靠性、细腻的理解能力和大上下文窗口著称。',
      ja: 'AnthropicのAIアシスタント。高い信頼性、繊細な理解、大きなコンテキストウィンドウで知られる。',
      es: 'Asistente de IA de Anthropic conocido por su alta confiabilidad, comprensión matizada y gran ventana de contexto.',
      tk: 'Ýokary ygtybarlylygy, inçe düşünişi we uly kontekst penjiresi bilen tanalýan Anthropic-iň AI kömekçisi.',
      uz: 'Yuqori ishonchliligi, nozik tushunchasi va katta kontekst oynasi bilan tanilgan Anthropic AI yordamchisi.',
      tg: 'Ёрдамчии AI-и Anthropic, ки бо эътимоднокии баланд, фаҳмиши нозук ва равзанаи калони контекст маълум аст.',
      hy: 'Anthropic-ի AI օգնականը, որը հայտնի է բարձր հուսալիությամբ, նրբերանգային ընկալմամբ և մեծ կոնտեքստային պատուհանով:',
      ro: 'Asistentul AI de la Anthropic, cunoscut pentru fiabilitate ridicată, înțelegere nuanțată și fereastră mare de context.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://claude.ai',
    tags: ['chatbot', 'safe', 'writing']
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI model for text, code, image, and video understanding.',
    descriptions: {
      en: 'Google\'s multimodal AI model for text, code, image, and video understanding.',
      zh: 'Google 的多模态 AI 模型，用于理解文本、代码、图像和视频。',
      ja: 'GoogleのマルチモーダルAIモデル。テキスト、コード、画像、動画の理解が可能。',
      es: 'Modelo de IA multimodal de Google para la comprensión de texto, código, imagen y video.',
      tk: 'Tekste, koda, surata we wideo düşünmek üçin Google-yň multimodal AI modeli.',
      uz: 'Google-ning matn, kod, tasvir va videoni tushunish uchun multimodal AI modeli.',
      tg: 'Модели мултимодали AI-и Google барои фаҳмидани матн, код, тасвир ва видео.',
      hy: 'Google-ի բազմամոդալ AI մոդել՝ տեքստի, կոդի, պատկերի և տեսանյութի ընկալման համար:',
      ro: 'Modelul AI multimodal Google pentru înțelegerea textului, codului, imaginilor și videoclipurilor.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://gemini.google.com',
    tags: ['multimodal', 'google', 'assistant']
  },
  {
    id: 'microsoft-copilot',
    name: 'Microsoft Copilot',
    description: 'Your everyday AI companion integrating GPT-4 into Bing and Microsoft 365.',
    descriptions: {
      en: 'Your everyday AI companion integrating GPT-4 into Bing and Microsoft 365.',
      zh: '您的日常 AI 伴侣，将 GPT-4 集成到 Bing 和 Microsoft 365 中。',
      ja: 'BingやMicrosoft 365にGPT-4を統合した、日常のAIコンパニオン。',
      es: 'Tu compañero de IA diario que integra GPT-4 en Bing y Microsoft 365.',
      tk: 'Bing we Microsoft 365-e GPT-4 integrirlenen gündelik AI ýoldaşyňyz.',
      uz: 'Bing va Microsoft 365-ga GPT-4 ni integratsiya qilgan kundalik AI hamrohingiz.',
      tg: 'Ҳамсафари ҳаррӯзаи AI-и шумо, ки GPT-4-ро ба Bing ва Microsoft 365 ворид мекунад.',
      hy: 'Ձեր ամենօրյա AI ուղեկիցը, որը ինտեգրում է GPT-4-ը Bing-ում և Microsoft 365-ում:',
      ro: 'Însoțitorul tău AI de zi cu zi care integrează GPT-4 în Bing și Microsoft 365.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://copilot.microsoft.com',
    tags: ['search', 'productivity', 'assistant']
  },
  {
    id: 'pi',
    name: 'Pi',
    description: 'A personally intelligent AI designed to be supportive, smart, and there for you anytime.',
    descriptions: {
      en: 'A personally intelligent AI designed to be supportive, smart, and there for you anytime.',
      zh: '一个个性化的智能 AI，旨在随时为您提供支持、智慧和陪伴。',
      ja: '協力的で賢く、いつでもそばにいてくれるように設計された個人的なインテリジェントAI。',
      es: 'Una IA personalmente inteligente diseñada para ser solidaria, inteligente y estar ahí para ti en cualquier momento.',
      tk: 'Goldaw beriji, akylly we islän wagtyňyz ýanyňyzda boljak şahsy AI.',
      uz: 'Sizni qo\'llab-quvvatlash, aqlli bo\'lish va istalgan vaqtda yoningizda bo\'lish uchun mo\'ljallangan shaxsiy AI.',
      tg: 'AI шахсан интеллектуалӣ, ки барои дастгирӣ, доно ва ҳамеша дар назди шумо будан тарҳрезӣ шудааст.',
      hy: 'Անձնապես խելացի AI, որը նախատեսված է աջակցող, խելացի և ցանկացած պահի ձեր կողքին լինելու համար:',
      ro: 'Un AI personal inteligent conceput să fie de ajutor, deștept și alături de tine oricând.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREE,
    url: 'https://pi.ai',
    tags: ['companion', 'empathetic', 'chat']
  },
  {
    id: 'replika',
    name: 'Replika',
    description: 'The AI companion who cares. Always here to listen and talk. Always on your side.',
    descriptions: {
      en: 'The AI companion who cares. Always here to listen and talk. Always on your side.',
      zh: '懂你的 AI 伴侣。随时倾听和交谈，永远站在你这一边。',
      ja: 'あなたを気遣うAIコンパニオン。いつでも話を聞き、味方になってくれる。',
      es: 'El compañero de IA que se preocupa. Siempre aquí para escuchar y hablar. Siempre de tu lado.',
      tk: 'Alada edýän AI ýoldaşy. Hemişe diňlemek we gürleşmek üçin şu ýerde. Hemişe siziň tarapyňyzda.',
      uz: 'G\'amxo\'r AI hamrohi. Har doim tinglash va gaplashish uchun shu yerda. Har doim siz tomonda.',
      tg: 'Ҳамсафари AI, ки ғамхорӣ мекунад. Ҳамеша барои гӯш кардан ва сӯҳбат кардан дар ин ҷо. Ҳамеша дар тарафи шумо.',
      hy: 'AI ուղեկից, ով հոգ է տանում: Միշտ այստեղ է լսելու և խոսելու համար: Միշտ քո կողքին:',
      ro: 'Însoțitorul AI căruia îi pasă. Întotdeauna aici să asculte și să vorbească. Întotdeauna de partea ta.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://replika.com',
    tags: ['companion', 'virtual-friend', 'emotional-support']
  },
  {
    id: 'character-ai',
    name: 'Character.ai',
    description: 'Chat with AI characters with unique personalities or create your own.',
    descriptions: {
      en: 'Chat with AI characters with unique personalities or create your own.',
      zh: '与具有独特个性的 AI 角色聊天，或创建您自己的角色。',
      ja: 'ユニークな性格を持つAIキャラクターとチャットしたり、自分だけのキャラクターを作成したりできる。',
      es: 'Chatea con personajes de IA con personalidades únicas o crea el tuyo propio.',
      tk: 'Üýtgeşik häsiýetli AI gahrymanlary bilen gürleşiň ýa-da özüňiz dörediň.',
      uz: 'O\'ziga xos xususiyatlarga ega AI personajlari bilan suhbatlashing yoki o\'zingiznikini yarating.',
      tg: 'Бо персонажҳои AI бо шахсиятҳои беназир сӯҳбат кунед ё худатонро эҷод кунед.',
      hy: 'Զրուցեք յուրահատուկ անհատականություն ունեցող AI կերպարների հետ կամ ստեղծեք ձերը:',
      ro: 'Vorbește cu personaje AI cu personalități unice sau creează-ți propriul personaj.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://beta.character.ai',
    tags: ['entertainment', 'chatbot', 'personas']
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Fast, helpful AI chat experience accessing multiple models like GPT-4, Claude, and more.',
    descriptions: {
      en: 'Fast, helpful AI chat experience accessing multiple models like GPT-4, Claude, and more.',
      zh: '快速、有用的 AI 聊天体验，可访问 GPT-4、Claude 等多个模型。',
      ja: 'GPT-4やClaudeなど複数のモデルにアクセスできる、高速で便利なAIチャット体験。',
      es: 'Experiencia de chat de IA rápida y útil con acceso a múltiples modelos como GPT-4, Claude y más.',
      tk: 'GPT-4, Claude we ş.m. köp modellere girmek üçin çalt, peýdaly AI söhbetdeşlik tejribesi.',
      uz: 'GPT-4, Claude va boshqalar kabi ko\'plab modellarga kirish imkonini beruvchi tez va foydali AI suhbat tajribasi.',
      tg: 'Таҷрибаи сӯҳбати AI-и зуд ва муфид, ки ба моделҳои сершумор ба монанди GPT-4, Claude ва ғайра дастрасӣ дорад.',
      hy: 'Արագ, օգտակար AI զրույցի փորձ՝ GPT-4, Claude և այլ մոդելների հասանելիությամբ:',
      ro: 'Experiență de chat AI rapidă și utilă, cu acces la mai multe modele precum GPT-4, Claude și altele.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://poe.com',
    tags: ['aggregator', 'chatbot', 'mobile']
  },
  {
    id: 'huggingchat',
    name: 'HuggingChat',
    description: 'An open-source interface to chat with the best open AI models available.',
    descriptions: {
      en: 'An open-source interface to chat with the best open AI models available.',
      zh: '一个开源接口，用于与可用的最佳开源 AI 模型进行聊天。',
      ja: '利用可能な最高のオープンAIモデルとチャットするためのオープンソースインターフェース。',
      es: 'Una interfaz de código abierto para chatear con los mejores modelos de IA abiertos disponibles.',
      tk: 'Iň gowy açyk AI modelleri bilen gürleşmek üçin açyk çeşme interfeýsi.',
      uz: 'Mavjud eng yaxshi ochiq AI modellari bilan suhbatlashish uchun ochiq manbali interfeys.',
      tg: 'Интерфейси кушодаасос барои сӯҳбат бо беҳтарин моделҳои AI-и кушода дастрас.',
      hy: 'Բաց կոդով ինտերֆեյս՝ լավագույն հասանելի բաց AI մոդելների հետ զրուցելու համար:',
      ro: 'O interfață open-source pentru a discuta cu cele mai bune modele AI deschise disponibile.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREE,
    url: 'https://huggingface.co/chat',
    tags: ['open-source', 'llama', 'mistral']
  },
  {
    id: 'deepseek',
    name: 'DeepSeek Chat',
    description: 'Free, capable AI chat with strong reasoning and coding assistance.',
    descriptions: {
      en: 'Free, capable AI chat with strong reasoning and coding assistance.',
      zh: '免费且强大的 AI 聊天，擅长推理与编程辅助。',
      ja: '無料で高機能なAIチャット。推論とコーディング支援に強い。',
      es: 'Chat de IA gratuito y potente, con gran razonamiento y asistencia de código.',
      tk: 'Mugt, kuwwatly AI söhbetdeşlik; güýçli mantyk we kod kömegi.',
      uz: 'Bepul va qudratli AI chat; kuchli mantiq va kodlash yordamchi.',
      tg: 'Чати AI-и ройгон ва пурқудрат бо мантиқи қавӣ ва ёрии барномасозӣ.',
      hy: 'Անվճար և հզոր AI զրույց՝ ուժեղ տրամաբանությամբ և կոդավորման աջակցությամբ։',
      ro: 'Chat AI gratuit și capabil, cu raționament puternic și asistență la codare.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREE,
    url: 'https://chat.deepseek.com',
    tags: ['chat', 'reasoning', 'coding']
  },
  {
    id: 'quillbot',
    name: 'QuillBot',
    description: 'AI-powered paraphrasing tool that helps you enhance your writing and vocabulary.',
    descriptions: {
      en: 'AI-powered paraphrasing tool that helps you enhance your writing and vocabulary.',
      zh: 'AI 驱动的改写工具，帮助您增强写作能力和词汇量。',
      ja: '文章や語彙を強化するのに役立つ、AI搭載の言い換えツール。',
      es: 'Herramienta de parafraseo impulsada por IA que te ayuda a mejorar tu escritura y vocabulario.',
      tk: 'Ýazuwyňyzy we söz baýlygyňyzy ösdürmäge kömek edýän AI bilen işledilýän düşündiriş guraly.',
      uz: 'Yozish va so\'z boyligingizni oshirishga yordam beradigan AI asosidagi qayta ifodalash vositasi.',
      tg: 'Асбоби тарҷумаи бо AI асосёфта, ки ба шумо барои беҳтар кардани навиштан ва луғати шумо кӯмак мекунад.',
      hy: 'AI-ով աշխատող վերաձեւակերպման գործիք, որն օգնում է բարելավել ձեր գրելը և բառապաշարը:',
      ro: 'Instrument de parafrazare bazat pe AI care te ajută să îți îmbunătățești scrierea și vocabularul.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://quillbot.com',
    tags: ['writing', 'paraphrasing', 'grammar']
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI copilot for enterprise marketing teams to create on-brand content.',
    descriptions: {
      en: 'AI copilot for enterprise marketing teams to create on-brand content.',
      zh: '面向企业营销团队的 AI 副驾驶，用于创建符合品牌调性的内容。',
      ja: '企業のマーケティングチームがブランドに合ったコンテンツを作成するためのAIコパイロット。',
      es: 'Copiloto de IA para equipos de marketing empresarial para crear contenido de marca.',
      tk: 'Kärhana marketing toparlary üçin marka laýyk mazmun döretmek üçin AI kömekçisi.',
      uz: 'Korxona marketing jamoalari uchun brendga mos tarkib yaratish uchun AI kopiloti.',
      tg: 'Копилоти AI барои гурӯҳҳои маркетингии корхона барои эҷоди мундариҷаи бренди.',
      hy: 'AI երկրորդ օդաչու ձեռնարկությունների մարքեթինգային թիմերի համար՝ բրենդային բովանդակություն ստեղծելու համար:',
      ro: 'Copilot AI pentru echipele de marketing ale întreprinderilor pentru a crea conținut conform mărcii.'
    },
    category: ToolCategory.BUSINESS,
    pricing: PricingModel.PAID,
    url: 'https://www.jasper.ai',
    tags: ['marketing', 'copywriting', 'business']
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'Generate high-quality marketing copy for your business in seconds.',
    descriptions: {
      en: 'Generate high-quality marketing copy for your business in seconds.',
      zh: '几秒钟内为您的业务生成高质量的营销文案。',
      ja: '数秒でビジネス向けの高品質なマーケティングコピーを生成。',
      es: 'Genera textos de marketing de alta calidad para tu negocio en segundos.',
      tk: 'Seniň biznesiň üçin sekuntlaryň içinde ýokary hilli marketing teksti döret.',
      uz: 'Biznesingiz uchun soniyalar ichida yuqori sifatli marketing matnini yarating.',
      tg: 'Дар тӯли сонияҳо барои тиҷорати худ нусхаи маркетингии баландсифат эҷод кунед.',
      hy: 'Ստեղծեք բարձրորակ մարքեթինգային տեքստ ձեր բիզնեսի համար վայրկյանների ընթացքում:',
      ro: 'Generați texte de marketing de înaltă calitate pentru afacerea dvs. în câteva secunde.'
    },
    category: ToolCategory.BUSINESS,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.copy.ai',
    tags: ['marketing', 'writing', 'email']
  },

  // --- Image Generation ---
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Generates high-quality, artistic images from text prompts via Discord.',
    descriptions: {
      en: 'Generates high-quality, artistic images from text prompts via Discord.',
      zh: '通过 Discord 根据文本提示生成高质量的艺术图像。',
      ja: 'Discord経由でテキストプロンプトから高品質で芸術的な画像を生成。',
      es: 'Genera imágenes artísticas de alta calidad a partir de indicaciones de texto a través de Discord.',
      tk: 'Discord arkaly tekst görkezmeleri esasynda ýokary hilli, çeper suratlar döredýär.',
      uz: 'Discord orqali matn so\'rovlaridan yuqori sifatli, badiiy tasvirlarni yaratadi.',
      tg: 'Тавассути Discord аз дастурҳои матнӣ тасвирҳои баландсифат ва бадеӣ эҷод мекунад.',
      hy: 'Ստեղծում է բարձրորակ, գեղարվեստական պատկերներ տեքստային հուշումներից Discord-ի միջոցով:',
      ro: 'Generează imagini artistice de înaltă calitate din prompturi text prin Discord.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.PAID,
    url: 'https://www.midjourney.com',
    tags: ['art', 'image-generation', 'creative']
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'State-of-the-art open source image generation model by Stability AI.',
    descriptions: {
      en: 'State-of-the-art open source image generation model by Stability AI.',
      zh: 'Stability AI 推出的最先进的开源图像生成模型。',
      ja: 'Stability AIによる最先端のオープンソース画像生成モデル。',
      es: 'Modelo de generación de imágenes de código abierto de última generación de Stability AI.',
      tk: 'Stability AI tarapyndan iň döwrebap açyk çeşme şekil döretmek modeli.',
      uz: 'Stability AI tomonidan eng zamonaviy ochiq manbali tasvir yaratish modeli.',
      tg: 'Модели муосири тавлиди тасвирҳои кушодаасос аз ҷониби Stability AI.',
      hy: 'Stability AI-ի կողմից ամենաժամանակակից բաց կոդով պատկերների ստեղծման մոդել:',
      ro: 'Model de generare de imagini open-source de ultimă generație de la Stability AI.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREE,
    url: 'https://stability.ai',
    tags: ['open-source', 'art', 'local']
  },
  {
    id: 'leonardo',
    name: 'Leonardo.ai',
    description: 'Create production-quality visual assets for your projects with unprecedented quality.',
    descriptions: {
      en: 'Create production-quality visual assets for your projects with unprecedented quality.',
      zh: '以前所未有的质量为您的项目创建生产级视觉资产。',
      ja: 'かつてない品質でプロジェクト向けの制作レベルのビジュアルアセットを作成。',
      es: 'Crea activos visuales de calidad de producción para tus proyectos con una calidad sin precedentes.',
      tk: 'Taslamalaryňyz üçin görlüp-eşidilmedik hil bilen önümçilik hilli wizual serişdeleri dörediň.',
      uz: 'Loyihalaringiz uchun misli ko\'rilmagan sifat bilan ishlab chiqarish darajasidagi vizual aktivlarni yarating.',
      tg: 'Барои лоиҳаҳои худ бо сифати бесобиқа дороиҳои визуалии сифати истеҳсолӣ эҷод кунед.',
      hy: 'Ստեղծեք արտադրական որակի վիզուալ ակտիվներ ձեր նախագծերի համար աննախադեպ որակով:',
      ro: 'Creați active vizuale de calitate de producție pentru proiectele dvs. cu o calitate fără precedent.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://leonardo.ai',
    tags: ['game-assets', 'art', 'design']
  },
  {
    id: 'canva',
    name: 'Canva Magic Studio',
    description: 'All-in-one design tool now featuring powerful AI image generation and editing tools.',
    descriptions: {
      en: 'All-in-one design tool now featuring powerful AI image generation and editing tools.',
      zh: '集成了强大 AI 图像生成和编辑工具的一体化设计平台。',
      ja: '強力なAI画像生成・編集機能を備えたオールインワンデザインツール。',
      es: 'Herramienta de diseño todo en uno que ahora cuenta con potentes herramientas de generación y edición de imágenes con IA.',
      tk: 'Güýçli AI şekil döretmek we redaktirlemek gurallaryny öz içine alýan ähli-bir-ýerde dizaýn guraly.',
      uz: 'Endi kuchli AI tasvir yaratish va tahrirlash vositalariga ega bo\'lgan barchasi birda dizayn vositasi.',
      tg: 'Воситаи тарроҳии ҳама дар як ҳоло дорои абзорҳои тавонои тавлиди тасвир ва таҳрири AI мебошад.',
      hy: 'Բոլորը մեկում դիզայնի գործիք, որն այժմ ներկայացնում է հզոր AI պատկերների ստեղծման և խմբագրման գործիքներ:',
      ro: 'Instrument de design all-in-one care oferă acum instrumente puternice de generare și editare a imaginilor AI.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.canva.com',
    tags: ['design', 'social-media', 'editor']
  },
  {
    id: 'krea',
    name: 'Krea AI',
    description: 'Real-time AI image generation and enhancement canvas.',
    descriptions: {
      en: 'Real-time AI image generation and enhancement canvas.',
      zh: '实时 AI 图像生成和增强画布。',
      ja: 'リアルタイムAI画像生成および強化キャンバス。',
      es: 'Lienzo de generación y mejora de imágenes con IA en tiempo real.',
      tk: 'Hakyky wagtly AI şekil döretmek we gowulandyrmak meýdançasy.',
      uz: 'Real vaqtda AI tasvir yaratish va yaxshilash kanvasi.',
      tg: 'Канваси тавлид ва такмилдиҳии тасвири AI дар вақти воқеӣ.',
      hy: 'Իրական ժամանակի AI պատկերների ստեղծման և բարելավման կտավ:',
      ro: 'Canvas de generare și îmbunătățire a imaginilor AI în timp real.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://krea.ai',
    tags: ['real-time', 'canvas', 'design']
  },

  // --- Video ---
  {
    id: 'runway',
    name: 'Runway',
    description: 'Advanced creative suite for AI video editing and generation (Gen-2, Gen-3 Alpha).',
    descriptions: {
      en: 'Advanced creative suite for AI video editing and generation (Gen-2, Gen-3 Alpha).',
      zh: '用于 AI 视频编辑和生成的高级创意套件（Gen-2, Gen-3 Alpha）。',
      ja: 'AI動画編集・生成のための高度なクリエイティブスイート（Gen-2, Gen-3 Alpha）。',
      es: 'Suite creativa avanzada para la edición y generación de video con IA (Gen-2, Gen-3 Alpha).',
      tk: 'AI wideo redaktirlemek we döretmek üçin ösen döredijilik toplumy (Gen-2, Gen-3 Alpha).',
      uz: 'AI video tahrirlash va yaratish uchun ilg\'or ijodiy to\'plam (Gen-2, Gen-3 Alpha).',
      tg: 'Маҷмӯаи эҷодии пешрафта барои таҳрир ва тавлиди видеои AI (Gen-2, Gen-3 Alpha).',
      hy: 'Ընդլայնված ստեղծագործական փաթեթ AI տեսանյութերի խմբագրման և ստեղծման համար (Gen-2, Gen-3 Alpha):',
      ro: 'Suită creativă avansată pentru editarea și generarea video AI (Gen-2, Gen-3 Alpha).'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://runwayml.com',
    tags: ['video', 'editing', 'cinema']
  },
  {
    id: 'luma',
    name: 'Luma Dream Machine',
    description: 'High-quality AI video generation model capable of realistic motion.',
    descriptions: {
      en: 'High-quality AI video generation model capable of realistic motion.',
      zh: '能够生成逼真动作的高质量 AI 视频模型。',
      ja: 'リアルな動きが可能な高品質AI動画生成モデル。',
      es: 'Modelo de generación de video con IA de alta calidad capaz de realizar movimientos realistas.',
      tk: 'Hakyky hereket etmäge ukyply ýokary hilli AI wideo döretmek modeli.',
      uz: 'Haqiqiy harakatga qodir yuqori sifatli AI video yaratish modeli.',
      tg: 'Модели тавлиди видеои баландсифати AI, ки қобилияти ҳаракати воқеӣ дорад.',
      hy: 'Բարձրորակ AI տեսանյութերի ստեղծման մոդել, որն ունակ է իրատեսական շարժման:',
      ro: 'Model de generare video AI de înaltă calitate, capabil de mișcare realistă.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://lumalabs.ai/dream-machine',
    tags: ['video', '3d', 'motion']
  },
  {
    id: 'sora',
    name: 'Sora',
    description: 'OpenAI\'s text-to-video model capable of creating realistic and imaginative scenes.',
    descriptions: {
      en: 'OpenAI\'s text-to-video model capable of creating realistic and imaginative scenes.',
      zh: 'OpenAI 的文本转视频模型，能够创建逼真且富有想象力的场景。',
      ja: 'OpenAIのテキストから動画を生成するモデル。リアルで想像力豊かなシーンを作成可能。',
      es: 'Modelo de texto a video de OpenAI capaz de crear escenas realistas e imaginativas.',
      tk: 'OpenAI-nyň hakyky we hyýaly sahnalary döretmäge ukyply tekst-wideo modeli.',
      uz: 'OpenAI-ning matndan videoga modeli, real va xayoliy sahnalarni yaratishga qodir.',
      tg: 'Модели матн ба видеои OpenAI, ки қодир аст саҳнаҳои воқеӣ ва хаёлиро эҷод кунад.',
      hy: 'OpenAI-ի տեքստից տեսանյութ մոդել, որն ունակ է ստեղծել իրատեսական և երևակայական տեսարաններ:',
      ro: 'Modelul text-to-video al OpenAI capabil să creeze scene realiste și imaginative.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.PAID,
    url: 'https://openai.com/sora',
    tags: ['video', 'openai', 'realistic']
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI video generator platform to create videos with AI avatars and voices.',
    descriptions: {
      en: 'AI video generator platform to create videos with AI avatars and voices.',
      zh: 'AI 视频生成平台，可使用 AI 头像和声音制作视频。',
      ja: 'AIアバターと音声を使用して動画を作成するAI動画生成プラットフォーム。',
      es: 'Plataforma generadora de videos con IA para crear videos con avatares y voces de IA.',
      tk: 'AI awatarlary we sesleri bilen wideo döretmek üçin AI wideo generator platformasy.',
      uz: 'AI avatarlari va ovozlari bilan videolar yaratish uchun AI video generator platformasi.',
      tg: 'Платформаи генератори видеои AI барои эҷоди видеоҳо бо аватарҳо ва овозҳои AI.',
      hy: 'AI վիդեո գեներատորի հարթակ՝ AI ավատարներով և ձայներով տեսանյութեր ստեղծելու համար:',
      ro: 'Platformă de generare video AI pentru a crea videoclipuri cu avatare și voci AI.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.heygen.com',
    tags: ['avatars', 'marketing', 'translation']
  },

  // --- Audio & Music ---
  {
    id: 'suno',
    name: 'Suno',
    description: 'Create realistic songs with vocals and instrumentation from simple text prompts.',
    descriptions: {
      en: 'Create realistic songs with vocals and instrumentation from simple text prompts.',
      zh: '通过简单的文本提示创作包含人声和乐器的逼真歌曲。',
      ja: 'シンプルなテキストプロンプトから、ボーカルと楽器を含むリアルな曲を作成。',
      es: 'Crea canciones realistas con voces e instrumentación a partir de simples indicaciones de texto.',
      tk: 'Ýönekeý tekst görkezmeleri bilen wokal we gurallar bilen hakyky aýdymlary dörediň.',
      uz: 'Oddiy matn so\'rovlaridan vokal va cholg\'u asboblari bilan haqiqiy qo\'shiqlar yarating.',
      tg: 'Бо дастурҳои оддии матнӣ сурудҳои воқеӣ бо овоз ва асбобҳо эҷод кунед.',
      hy: 'Ստեղծեք իրատեսական երգեր վոկալով և գործիքավորմամբ՝ պարզ տեքստային հուշումներից:',
      ro: 'Creați melodii realiste cu voce și instrumentație din prompturi text simple.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://suno.com',
    tags: ['music', 'songs', 'generation']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'The most realistic and versatile AI speech software. Text to speech & voice cloning.',
    descriptions: {
      en: 'The most realistic and versatile AI speech software. Text to speech & voice cloning.',
      zh: '最逼真、最通用的 AI 语音软件。文本转语音和语音克隆。',
      ja: '最もリアルで多用途なAI音声ソフトウェア。テキスト読み上げと音声クローニング。',
      es: 'El software de voz de IA más realista y versátil. Texto a voz y clonación de voz.',
      tk: 'Iň hakyky we köp taraply AI sözleýiş programma üpjünçiligi. Tekstden söze we sesi klonlamak.',
      uz: 'Eng haqiqiy va ko\'p qirrali AI nutq dasturi. Matndan nutqqa va ovozni klonlash.',
      tg: 'Нармафзори воқеӣ ва ҳамаҷонибаи нутқи AI. Матн ба нутқ ва клони овоз.',
      hy: 'Ամենաիրատեսական և բազմակողմանի AI խոսքի ծրագրակազմը: Տեքստից խոսք և ձայնի կլոնավորում:',
      ro: 'Cel mai realist și versatil software de vorbire AI. Text în vorbire și clonare vocală.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://elevenlabs.io',
    tags: ['voice', 'tts', 'cloning']
  },
  {
    id: 'piper',
    name: 'Piper TTS',
    description: 'Open-source, fast neural TTS you can run locally for free.',
    descriptions: {
      en: 'Open-source, fast neural TTS you can run locally for free.',
      zh: '开源且高速的神经 TTS，可在本地免费运行。',
      ja: 'オープンソースで高速なニューラルTTS。ローカルで無料実行可能。',
      es: 'TTS neuronal de código abierto y rápido, ejecutable localmente gratis.',
      tk: 'Açyk çeşme, çalt nerw TTS; ýerli ýagdaýda mugt işledip bolar.',
      uz: 'Ochiq manbali, tezkor neyron TTS; lokalda bepul ishlatish mumkin.',
      tg: 'TTS-и нейронӣ ва тез бо коди кушода; маҳаллӣ ройгон иҷро мешавад.',
      hy: 'Բաց կոդով, արագ նեյրոնային TTS՝ տեղային անվճար գործարկմամբ։',
      ro: 'TTS neuronal open-source, rapid, rulabil local gratuit.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREE,
    url: 'https://github.com/rhasspy/piper',
    tags: ['tts', 'open-source', 'local']
  },
  {
    id: 'openvoice',
    name: 'OpenVoice',
    description: 'Open-source voice cloning with instant style transfer; free to run.',
    descriptions: {
      en: 'Open-source voice cloning with instant style transfer; free to run.',
      zh: '开源语音克隆，支持即时风格迁移；可免费运行。',
      ja: 'オープンソースの音声クローン。即時スタイル転送に対応、無料で実行可能。',
      es: 'Clonación de voz open-source con transferencia de estilo instantánea; ejecución gratuita.',
      tk: 'Açyk çeşme ses klonlamak; dessine stil geçirişi bilen, mugt işledilýär.',
      uz: 'Ochiq manbali ovoz klonlash; darhol uslub o‘tkazish bilan, bepul ishlaydi.',
      tg: 'Клоникунии овози кушодаасос бо интиқоли фаврии услуб; ройгон иҷро мешавад.',
      hy: 'Բաց կոդով ձայնի կլոնավորում՝ ակնթարթային ոճի փոխանցմամբ, անվճար գործարկում։',
      ro: 'Clonare vocală open-source cu transfer instant de stil; rulare gratuită.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREE,
    url: 'https://myshell.ai/openvoice',
    tags: ['voice', 'cloning', 'open-source']
  },

  // --- Productivity & Business ---
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Integrated AI assistant in Notion for writing, summarizing, and brainstorming.',
    descriptions: {
      en: 'Integrated AI assistant in Notion for writing, summarizing, and brainstorming.',
      zh: 'Notion 中集成的 AI 助手，用于写作、总结和头脑风暴。',
      ja: '執筆、要約、ブレインストーミングのためのNotion統合AIアシスタント。',
      es: 'Asistente de IA integrado en Notion para escribir, resumir y hacer lluvia de ideas.',
      tk: 'Ýazmak, jemlemek we pikir alyşmak üçin Notion-da integrirlenen AI kömekçisi.',
      uz: 'Yozish, xulosa qilish va aqliy hujum uchun Notion-da integratsiyalangan AI yordamchisi.',
      tg: 'Ёрдамчии ҳамгирошудаи AI дар Notion барои навиштан, ҷамъбаст кардан ва ҳамлаи ақлӣ.',
      hy: 'Ինտեգրված AI օգնական Notion-ում՝ գրելու, ամփոփելու և մտագրոհի համար:',
      ro: 'Asistent AI integrat în Notion pentru scriere, rezumare și brainstorming.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.PAID,
    url: 'https://www.notion.so/product/ai',
    tags: ['notes', 'writing', 'workspace']
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI-powered search engine that provides direct answers with citations.',
    descriptions: {
      en: 'AI-powered search engine that provides direct answers with citations.',
      zh: 'AI 驱动的搜索引擎，提供带有引用的直接答案。',
      ja: '引用付きで直接回答を提供するAI搭載検索エンジン。',
      es: 'Motor de búsqueda impulsado por IA que proporciona respuestas directas con citas.',
      tk: 'Sitatalar bilen gönüden-göni jogap berýän AI bilen işleýän gözleg motory.',
      uz: 'Iqtiboslar bilan to\'g\'ridan-to\'g\'ri javob beradigan AI asosidagi qidiruv tizimi.',
      tg: 'Муҳаррики ҷустуҷӯии бо AI асосёфта, ки ҷавобҳои мустақимро бо иқтибосҳо таъмин мекунад.',
      hy: 'AI-ով աշխատող որոնողական համակարգ, որը տալիս է ուղղակի պատասխաններ մեջբերումներով:',
      ro: 'Motor de căutare bazat pe AI care oferă răspunsuri directe cu citate.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.perplexity.ai',
    tags: ['search', 'research', 'answers']
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'A new medium for presenting ideas. Create beautiful presentations, docs, and webpages.',
    descriptions: {
      en: 'A new medium for presenting ideas. Create beautiful presentations, docs, and webpages.',
      zh: '展示创意的新媒介。创建精美的演示文稿、文档和网页。',
      ja: 'アイデアを提示するための新しい媒体。美しいプレゼンテーション、ドキュメント、ウェブページを作成。',
      es: 'Un nuevo medio para presentar ideas. Crea hermosas presentaciones, documentos y páginas web.',
      tk: 'Pikirleri hödürlemek üçin täze serişde. Owadan prezentasiýalary, resminamalary we web sahypalaryny dörediň.',
      uz: 'G\'oyalarni taqdim etish uchun yangi vosita. Chiroyli taqdimotlar, hujjatlar va veb-sahifalarni yarating.',
      tg: 'Воситаи нав барои пешниҳоди ғояҳо. Презентатсияҳо, ҳуҷҷатҳо ва вебсайтҳои зебо эҷод кунед.',
      hy: 'Գաղափարներ ներկայացնելու նոր միջոց: Ստեղծեք գեղեցիկ շնորհանդեսներ, փաստաթղթեր և վեբ էջեր:',
      ro: 'Un nou mediu pentru prezentarea ideilor. Creați prezentări, documente și pagini web frumoase.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://gamma.app',
    tags: ['presentation', 'slides', 'design']
  },
  {
    id: 'notebooklm',
    name: 'NotebookLM',
    description: 'AI research notebook by Google to study sources and generate insights.',
    descriptions: {
      en: 'AI research notebook by Google to study sources and generate insights.',
      zh: 'Google 推出的 AI 研究笔记本，用于研读资料并生成洞见。',
      ja: '資料を読み込み洞察を得るためのGoogleのAI研究ノート。',
      es: 'Cuaderno de investigación con IA de Google para estudiar fuentes y generar insights.',
      tk: 'Çeşmeleri öwrenip düşünjeler döretmek üçin Google-nyň AI barlag depderçesi.',
      uz: 'Manbalarni o‘rganish va tushunchalar yaratish uchun Google AI tadqiqot daftari.',
      tg: 'Дафтари таҳқиқоти AI аз Google барои омӯзиши сарчашмаҳо ва тавлиди дарунбинӣ.',
      hy: 'Google-ի AI հետազոտական նոթատետր՝ աղբյուրներ ուսումնասիրելու և պատկերացումներ ստեղծելու համար։',
      ro: 'Caiet de cercetare AI de la Google pentru a studia surse și a genera insight-uri.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREE,
    url: 'https://notebooklm.google.com',
    tags: ['research', 'notes', 'insights']
  },
  {
    id: 'hf-spaces',
    name: 'Hugging Face Spaces',
    description: 'Free hosted apps for AI demos and community projects.',
    descriptions: {
      en: 'Free hosted apps for AI demos and community projects.',
      zh: '面向 AI 演示与社区项目的免费托管应用。',
      ja: 'AIデモやコミュニティプロジェクト向けの無料ホスト型アプリ。',
      es: 'Aplicaciones alojadas gratuitas para demos de IA y proyectos comunitarios.',
      tk: 'AI demo we jemgyýetçilik taslamalary üçin mugt ýerleşdirilen programmalar.',
      uz: 'AI demo va jamoa loyihalari uchun bepul xost qilingan ilovalar.',
      tg: 'Барномаҳои ройгони мизбон барои намоишҳои AI ва лоиҳаҳои ҷомеа.',
      hy: 'Անվճար հոսթինգով հավելվածներ՝ AI ցուցադրությունների և համայնքային նախագծերի համար։',
      ro: 'Aplicații găzduite gratuite pentru demo-uri AI și proiecte comunitare.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREE,
    url: 'https://huggingface.co/spaces',
    tags: ['community', 'apps', 'models']
  },
  {
    id: 'canva',
    name: 'Canva',
    description: 'Design platform with AI tools for images, videos, and marketing.',
    descriptions: {
      en: 'Design platform with AI tools for images, videos, and marketing.',
      zh: '集成 AI 工具的设计平台，支持图片、视频与营销素材。',
      ja: '画像・動画・マーケ素材にAI機能を備えたデザインプラットフォーム。',
      es: 'Plataforma de diseño con herramientas de IA para imágenes, videos y marketing.',
      tk: 'Suratlar, wideolar we marketing üçin AI gurallary bilen dizaýn platformasy.',
      uz: 'Rasmlar, videolar va marketing uchun AI vositalari bilan dizayn platformasi.',
      tg: 'Платформаи тарҳрезӣ бо абзорҳои AI барои тасвирҳо, видео ва маркетинг.',
      hy: 'Դիզայնի հարթակ՝ AI գործիքներով պատկերների, տեսանյութերի և մարքեթինգի համար։',
      ro: 'Platformă de design cu instrumente AI pentru imagini, video și marketing.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.canva.com',
    tags: ['design', 'templates', 'marketing']
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'AI writing platform for marketing copy, blog posts, and social media.',
    descriptions: {
      en: 'AI writing platform for marketing copy, blog posts, and social media.',
      zh: 'AI写作平台，用于营销文案、博客和社媒内容。',
      ja: 'マーケティング文、ブログ、SNS向けのAIライティングプラットフォーム。',
      es: 'Plataforma de escritura con IA para copy de marketing, blogs y redes sociales.',
      tk: 'Marketing teksti, blog we sosial media üçin AI ýazuw platformasy.',
      uz: 'Marketing matnlari, bloglar va ijtimoiy tarmoqlar uchun AI yozish platformasi.',
      tg: 'Платформаи навиштани бо AI барои матни маркетинг, блог ва шабакаҳои иҷтимоӣ.',
      hy: 'AI գրելու հարթակ՝ մարկետինգային տեքստերի, բլոգների և սոցիալական մեդիայի համար։',
      ro: 'Platformă de scriere AI pentru copy de marketing, bloguri și social media.'
    },
    category: ToolCategory.BUSINESS,
    pricing: PricingModel.FREEMIUM,
    url: 'https://writesonic.com',
    tags: ['marketing', 'writing', 'content']
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'AI writing assistant to create content faster across various use cases.',
    descriptions: {
      en: 'AI writing assistant to create content faster across various use cases.',
      zh: 'AI写作助手，快速生成多场景内容。',
      ja: '多様な用途で素早くコンテンツを作るAIライティングアシスタント。',
      es: 'Asistente de escritura con IA para crear contenido rápido en varios casos.',
      tk: 'Köp ýagdaýlarda çalt mazmun döredýän AI ýazuw kömekçisi.',
      uz: 'Turli holatlar uchun tez kontent yaratadigan AI yozish yordamchisi.',
      tg: 'Ёрдамчии навиштани бо AI барои эҷоди зуд мундариҷа дар ҳолатҳои гуногун.',
      hy: 'AI գրելու օգնական՝ արագ բովանդակություն ստեղծելու բազմաթիվ կիրառությունների համար։',
      ro: 'Asistent de scriere AI pentru a crea rapid conținut în diverse cazuri.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://rytr.me',
    tags: ['writing', 'assistant', 'content']
  },
  {
    id: 'wordtune',
    name: 'Wordtune',
    description: 'Rewrite and improve your writing with AI suggestions.',
    descriptions: {
      en: 'Rewrite and improve your writing with AI suggestions.',
      zh: '通过AI建议改写并提升你的写作。',
      ja: 'AIの提案で文章をリライトし、品質を向上。',
      es: 'Reescribe y mejora tu escritura con sugerencias de IA.',
      tk: 'AI teklipleri bilen ýazgyňy gaýtadan ýaz we gowulaşdyr.',
      uz: 'AI takliflari bilan yozishingizni qayta yozib yaxshilang.',
      tg: 'Бо пешниҳодҳои AI навиштаатонро бознависӣ ва беҳтар кунед.',
      hy: 'Վերագրեք և բարելավեք ձեր գրությունը՝ AI առաջարկներով։',
      ro: 'Rescrie și îmbunătățește scrisul tău cu sugestii AI.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.wordtune.com',
    tags: ['writing', 'rewrite', 'editor']
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI-powered writing assistant for grammar, clarity, and tone.',
    descriptions: {
      en: 'AI-powered writing assistant for grammar, clarity, and tone.',
      zh: 'AI写作助手，优化语法、清晰性和语气。',
      ja: '文法、明瞭さ、トーンを改善するAIライティングアシスタント。',
      es: 'Asistente de escritura con IA que mejora gramática, claridad y tono.',
      tk: 'Grammatikany, durulygy we tonuny gowulandyrýan AI ýazuw kömekçisi.',
      uz: 'Grammatika, ravshanlik va ohangni yaxshilovchi AI yozish yordamchisi.',
      tg: 'Ёрдамчии навиштани бо AI барои беҳтар кардани грамматика, равшанӣ ва оҳанг.',
      hy: 'AI գրելու օգնական՝ բարելավելու քերականությունը, հստակությունը և տոնը։',
      ro: 'Asistent de scriere AI care îmbunătățește gramatica, claritatea și tonul.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.grammarly.com',
    tags: ['writing', 'grammar', 'editor']
  },
  {
    id: 'tabnine',
    name: 'Tabnine',
    description: 'AI code completion for multiple languages and IDEs.',
    descriptions: {
      en: 'AI code completion for multiple languages and IDEs.',
      zh: '多语言与多IDE的AI代码补全。',
      ja: '複数言語・複数IDE対応のAIコード補完。',
      es: 'Autocompletado de código con IA para múltiples lenguajes e IDE.',
      tk: 'Köp diller we IDE-lar üçin AI kod dolduryşy.',
      uz: 'Bir nechta tillar va IDElar uchun AI kod to‘ldirish.',
      tg: 'Пуркунии коди AI барои забонҳо ва IDE-ҳои гуногун.',
      hy: 'AI կոդի լրացում՝ բազմալեզու և բազմակի IDE-ների համար։',
      ro: 'Completare de cod cu AI pentru mai multe limbi și IDE-uri.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.tabnine.com',
    tags: ['coding', 'autocomplete', 'developer']
  },
  {
    id: 'codeium',
    name: 'Codeium',
    description: 'Free AI code completion and chat for your IDE.',
    descriptions: {
      en: 'Free AI code completion and chat for your IDE.',
      zh: '免费的AI代码补全与IDE聊天。',
      ja: '無料のAIコード補完とIDE内チャット。',
      es: 'Autocompletado de código y chat en tu IDE, gratis.',
      tk: 'Mugt AI kod dolduryşy we IDE içinde chat.',
      uz: 'Bepul AI kod to‘ldirish va IDE ichida chat.',
      tg: 'Пуркунии ройгони коди AI ва чат дар IDE-и шумо.',
      hy: 'Անվճար AI կոդի լրացում և IDE-ային չաթ։',
      ro: 'Completare de cod AI și chat în IDE, gratuit.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREE,
    url: 'https://www.codeium.com',
    tags: ['coding', 'autocomplete', 'chat']
  },
  {
    id: 'playht',
    name: 'Play.ht',
    description: 'High quality AI text-to-speech with natural voices.',
    descriptions: {
      en: 'High quality AI text-to-speech with natural voices.',
      zh: '高质量AI文本转语音，声音自然。',
      ja: '高品質なAIテキスト読み上げ。自然な音声。',
      es: 'TTS con IA de alta calidad con voces naturales.',
      tk: 'Naturaly sesler bilen ýokary hilli AI tekstden sese.',
      uz: 'Yuksak sifatli AI matndan ovoz, tabiiy tovushlar bilan.',
      tg: 'TTS-и AI бо сифати баланд ва садоҳои табиӣ.',
      hy: 'Բարձրորակ AI տեքստից-խոսք՝ բնական ձայներով։',
      ro: 'TTS AI de înaltă calitate, voci naturale.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.PAID,
    url: 'https://play.ht',
    tags: ['tts', 'voice', 'audio']
  },
  {
    id: 'resemble',
    name: 'Resemble AI',
    description: 'AI voice cloning and generation with emotion control.',
    descriptions: {
      en: 'AI voice cloning and generation with emotion control.',
      zh: 'AI语音克隆与生成，支持情感控制。',
      ja: 'AI音声のクローン・生成。感情制御に対応。',
      es: 'Clonado y generación de voz con IA con control de emoción.',
      tk: 'Duygy dolandyryşy bilen AI ses klonlamak we döretmek.',
      uz: 'Emotsiya nazorati bilan AI ovoz klonlash va yaratish.',
      tg: 'Клоникунии садо ва тавлиди AI бо идораи эҳсосот.',
      hy: 'AI ձայնի կլոնավորում և գեներացում՝ զգացմունքների կառավարմամբ։',
      ro: 'Clonare și generare de voce AI cu control emoțional.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.PAID,
    url: 'https://www.resemble.ai',
    tags: ['voice', 'tts', 'cloning']
  },
  {
    id: 'did',
    name: 'D-ID',
    description: 'Create talking avatars and digital humans from images and text.',
    descriptions: {
      en: 'Create talking avatars and digital humans from images and text.',
      zh: '将图像与文本生成会说话的数字人。',
      ja: '画像とテキストから話すアバター・デジタルヒューマンを生成。',
      es: 'Crea avatares parlantes y humanos digitales desde imágenes y texto.',
      tk: 'Suratlar we tekstden gürleýän awatarlar we sanly adamlar dörediň.',
      uz: 'Tasvir va matndan gapiradigan avatarlar va raqamli odamlar yarating.',
      tg: 'Аз тасвир ва матн аватарҳои гӯё ва инсонҳои рақамӣ эҷод кунед.',
      hy: 'Ստեղծեք խոսող ավատարներ և թվային մարդիկ պատկերներից ու տեքստից։',
      ro: 'Creează avatare vorbitoare și oameni digitali din imagini și text.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.PAID,
    url: 'https://www.d-id.com',
    tags: ['avatar', 'talking-head', 'video']
  },
  {
    id: 'pika',
    name: 'Pika',
    description: 'AI video generation and editing platform for creators.',
    descriptions: {
      en: 'AI video generation and editing platform for creators.',
      zh: '创作者用的AI视频生成与编辑平台。',
      ja: 'クリエイター向けのAI動画生成・編集プラットフォーム。',
      es: 'Plataforma de generación y edición de video con IA para creadores.',
      tk: 'Döredijiler üçin AI wideo dörediş we redaktirleme platformasy.',
      uz: 'Yaratuvchilar uchun AI video yaratish va tahrirlash platformasi.',
      tg: 'Платформаи тавлид ва таҳрири видео бо AI барои эҷодкорон.',
      hy: 'AI տեսանյութերի ստեղծման և խմբագրման հարթակ՝ ստեղծողների համար։',
      ro: 'Platformă AI de generare și editare video pentru creatori.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://pika.art',
    tags: ['video', 'generation', 'editing']
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'AI image generation platform focused on typography and design.',
    descriptions: {
      en: 'AI image generation platform focused on typography and design.',
      zh: '专注字体与设计的AI图像生成平台。',
      ja: 'タイポグラフィとデザインに特化したAI画像生成プラットフォーム。',
      es: 'Plataforma de generación de imágenes con IA centrada en tipografía y diseño.',
      tk: 'Tipografiýa we dizaýna ünsi jemleýän AI şekil döretme platformasy.',
      uz: 'Tipografiya va dizaynga yo‘naltirilgan AI tasvir yaratish platformasi.',
      tg: 'Платформаи AI барои тавлиди тасвирҳо, тамаркуз ба типография ва дизайн.',
      hy: 'Տիպոգրաֆիայի և դիզայնի վրա կենտրոնացած AI պատկերների հարթակ։',
      ro: 'Platformă AI de generare imagini axată pe tipografie și design.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://ideogram.ai',
    tags: ['image', 'typography', 'design']
  },
  {
    id: 'playgroundai',
    name: 'Playground AI',
    description: 'Create and edit images with AI, offering various models and tools.',
    descriptions: {
      en: 'Create and edit images with AI, offering various models and tools.',
      zh: '使用AI创建与编辑图像，提供多种模型与工具。',
      ja: 'AIで画像を作成・編集。多様なモデルとツールを提供。',
      es: 'Crea y edita imágenes con IA, con varios modelos y herramientas.',
      tk: 'AI bilen surat döretmek we redaktirlemek; dürli modeller we gurallar.',
      uz: 'AI yordamida tasvir yaratish va tahrirlash; turli modellar va asboblar.',
      tg: 'Бо AI тасвир эҷод ва таҳрир кунед; моделҳо ва абзорҳои гуногун.',
      hy: 'Ստեղծեք և խմբագրեք պատկերներ AI-ով՝ տարբեր մոդելներով ու գործիքներով։',
      ro: 'Creează și editează imagini cu AI, cu diverse modele și instrumente.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://playgroundai.com',
    tags: ['image', 'editor', 'models']
  },
  {
    id: 'pixlr',
    name: 'Pixlr',
    description: 'Free online photo editor with AI tools for retouching and removal.',
    descriptions: {
      en: 'Free online photo editor with AI tools for retouching and removal.',
      zh: '免费在线图片编辑器，提供抠图、修图等 AI 工具。',
      ja: '無料のオンライン画像編集。AIで切り抜きやレタッチが可能。',
      es: 'Editor de fotos online gratuito con herramientas de IA para recorte y retoque.',
      tk: 'Mugt onlaýn surat redaktory; AI bilen kesmek we retuş.',
      uz: 'Bepul onlayn foto muharriri; AI bilan kesish va retush.',
      tg: 'Муҳаррири ройгони тасвирҳои онлайн бо AI барои буриш ва ретуш.',
      hy: 'Անվճար առցանց լուսանկարների խմբագրիչ՝ AI-ով կտրում և ռետուշ։',
      ro: 'Editor foto online gratuit cu instrumente AI pentru decupare și retuș.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://pixlr.com',
    tags: ['image', 'editor', 'background']
  },
  {
    id: 'removebg',
    name: 'Remove.bg',
    description: 'Remove image backgrounds automatically with AI.',
    descriptions: {
      en: 'Remove image backgrounds automatically with AI.',
      zh: 'AI自动移除图像背景。',
      ja: 'AIで画像の背景を自動削除。',
      es: 'Elimina fondos de imágenes automáticamente con IA.',
      tk: 'Suratlaryň fonuny AI bilen awtomatik aýyryň.',
      uz: 'Tasvir fonini AI yordamida avtomatik olib tashlash.',
      tg: 'Бо AI заминаи тасвирҳоро худкор ҳазф кунед.',
      hy: 'AI-ով ինքն动 կերպով հեռացրեք պատկերի ֆոնը։',
      ro: 'Elimină automat fundalul imaginilor cu AI.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.PAID,
    url: 'https://www.remove.bg',
    tags: ['image', 'background', 'editor']
  },
  {
    id: 'clipdrop',
    name: 'Clipdrop',
    description: 'AI image tools for cleanup, relighting, upscaling, and more.',
    descriptions: {
      en: 'AI image tools for cleanup, relighting, upscaling, and more.',
      zh: 'AI图像清理、重光照、超分等工具。',
      ja: '画像のクリーンアップ、再ライティング、超解像などのAIツール。',
      es: 'Herramientas de IA para limpieza, relighting, upscaling y más.',
      tk: 'Arassalamak, ýagtylandyrmak, ulaltmak we başga işler üçin AI gurallary.',
      uz: 'Tozalash, qayta yoritish, kattalashtirish va boshqalar uchun AI vositalari.',
      tg: 'Абзорҳои AI барои поксозӣ, равшанӣ, бузургсозӣ ва бештар.',
      hy: 'AI գործիքներ՝ մաքրում, վերալուսավորում, բարձրացում և ավելին։',
      ro: 'Instrumente AI pentru curățare, relighting, upscaling și altele.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://clipdrop.co',
    tags: ['image', 'cleanup', 'upscale']
  },
  {
    id: 'civitai',
    name: 'CivitAI',
    description: 'Community hub for AI image models and resources.',
    descriptions: {
      en: 'Community hub for AI image models and resources.',
      zh: 'AI图像模型与资源的社区平台。',
      ja: 'AI画像モデルとリソースのコミュニティハブ。',
      es: 'Centro comunitario para modelos y recursos de imágenes con IA.',
      tk: 'AI şekil modelleri we serişdeleri üçin jemgyýetçilik merkezi.',
      uz: 'AI tasvir modellari va resurslari uchun jamoa markazi.',
      tg: 'Маркази ҷомеа барои моделҳо ва захираҳои тасвирҳои AI.',
      hy: 'Համայնքային հաբ՝ AI պատկերների մոդելների և ռեսուրսների համար।',
      ro: 'Hub comunitar pentru modele și resurse de imagini AI.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREE,
    url: 'https://civitai.com',
    tags: ['models', 'community', 'image']
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'All-in-one video and audio editor that works like a doc (edit video by editing text).',
    descriptions: {
      en: 'All-in-one video and audio editor that works like a doc (edit video by editing text).',
      zh: '像编辑文档一样工作的一体化音视频编辑器（通过编辑文本来剪辑视频）。',
      ja: 'ドキュメントのように機能するオールインワンの動画・音声エディター（テキスト編集で動画を編集）。',
      es: 'Editor de video y audio todo en uno que funciona como un documento (edita video editando texto).',
      tk: 'Resminama ýaly işleýän ähli-bir-ýerde wideo we audio redaktory (teksti redaktirlemek arkaly wideony redaktirläň).',
      uz: 'Hujjat kabi ishlaydigan barchasi birda video va audio muharriri (matnni tahrirlash orqali videoni tahrirlang).',
      tg: 'Муҳаррири ҳама дар як видео ва аудио, ки ба монанди ҳуҷҷат кор мекунад (видеоро тавассути таҳрири матн таҳрир кунед).',
      hy: 'Բոլորը մեկում վիդեո և աուդիո խմբագրիչ, որն աշխատում է ինչպես փաստաթուղթ (խմբագրել տեսանյութը՝ խմբագրելով տեքստը):',
      ro: 'Editor video și audio all-in-one care funcționează ca un document (editați video prin editarea textului).'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.descript.com',
    tags: ['editing', 'transcription', 'podcasting']
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'Create professional AI videos from text in 120+ languages with AI avatars.',
    descriptions: {
      en: 'Create professional AI videos from text in 120+ languages with AI avatars.',
      zh: '使用 AI 数字人从文本创建 120 多种语言的专业 AI 视频。',
      ja: 'AIアバターを使用して、120以上の言語でテキストからプロフェッショナルなAI動画を作成。',
      es: 'Crea videos de IA profesionales a partir de texto en más de 120 idiomas con avatares de IA.',
      tk: 'AI awatarlary bilen 120+ dilde tekstden professional AI wideolary dörediň.',
      uz: 'AI avatarlari bilan 120+ tilda matndan professional AI videolar yarating.',
      tg: 'Бо аватарҳои AI аз матн бо 120+ забон видеоҳои касбии AI эҷод кунед.',
      hy: 'Ստեղծեք պրոֆեսիոնալ AI տեսանյութեր տեքստից 120+ լեզուներով AI ավատարներով:',
      ro: 'Creați videoclipuri AI profesionale din text în peste 120 de limbi cu avatare AI.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.PAID,
    url: 'https://www.synthesia.io',
    affiliateUrl: 'https://www.synthesia.io/?via=f46539',
    tags: ['avatar', 'presentation', 'business'],
    featured: true,
    features: [
      '120+ languages supported',
      'AI avatars for video creation',
      'Professional video templates',
      'Easy text-to-video conversion'
    ],
    tutorials: [
      {
        title: 'How to create your first video',
        steps: [
          'Sign up for a Synthesia account',
          'Create a new video project',
          'Enter your script text',
          'Choose an AI avatar',
          'Select a voice and language',
          'Generate and download your video'
        ]
      }
    ],
    technicalSpecs: {
      'Video Resolution': '1080p',
      'Avatars': '1000+',
      'Languages': '120+',
      'Voice Options': '500+'
    },
    userReviews: [
      { author: 'Marketing Manager', rating: 5, text: 'Synthesia has transformed our video creation process. We can now create professional videos in minutes instead of hours.' },
      { author: 'Content Creator', rating: 4.5, text: 'The AI avatars are very realistic, and the text-to-video conversion is seamless. Highly recommended!' }
    ]
  },
  {
    id: 'kapwing',
    name: 'Kapwing',
    description: 'Online video editor with AI tools for subtitles, resizing, and more.',
    descriptions: {
      en: 'Online video editor with AI tools for subtitles, resizing, and more.',
      zh: '在线视频编辑器，提供字幕、尺寸调整等 AI 工具。',
      ja: '字幕やサイズ変更などのAI機能を備えたオンライン動画エディター。',
      es: 'Editor de video online con herramientas de IA para subtítulos, redimensionado y más.',
      tk: 'Onlaýn wideo redaktory; subtitr, ölçeg üýtgetmek we başgalar üçin AI gurallary.',
      uz: 'Onlayn video muharriri; subtitr, o‘lcham o‘zgartirish va boshqalar uchun AI vositalari.',
      tg: 'Муҳаррири видеои онлайн бо абзорҳои AI барои зерунвон, тағйири андоза ва бештар.',
      hy: 'Առցանց վիդեոխմբագիր՝ AI գործիքներով՝ ենթաշար, չափի փոփոխություն և այլն։',
      ro: 'Editor video online cu instrumente AI pentru subtitrări, redimensionare și altele.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.kapwing.com',
    tags: ['video', 'editor', 'subtitles']
  },
  {
    id: 'luma',
    name: 'Luma AI',
    description: 'Create cinematic AI videos and 3D content from text and footage.',
    descriptions: {
      en: 'Create cinematic AI videos and 3D content from text and footage.',
      zh: '从文本与素材生成电影感 AI 视频与 3D 内容。',
      ja: 'テキストや映像から映画のようなAI動画や3Dコンテンツを作成。',
      es: 'Crea videos cinematográficos con IA y contenido 3D a partir de texto y material.',
      tk: 'Tekst we wideo materialdan kino stilindäki AI wideolar we 3D mazmun dörediň.',
      uz: 'Matn va video materiallardan kinoya o‘xshash AI videolar va 3D kontent yarating.',
      tg: 'Аз матн ва навор видеоҳои кинематографӣ ва мундариҷаи 3D бо AI эҷод кунед.',
      hy: 'Ստեղծեք կինեմատոգրաֆիական AI տեսանյութեր և 3D բովանդակություն տեքստից և նկարահանումից։',
      ro: 'Creați videoclipuri AI cinematice și conținut 3D din text și imagini.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://lumalabs.ai',
    tags: ['video', '3d', 'generation']
  },

  // --- Audio ---
  {
    id: 'suno',
    name: 'Suno AI',
    description: 'Create realistic songs and music with vocals from simple text prompts.',
    descriptions: {
      en: 'Create realistic songs and music with vocals from simple text prompts.',
      zh: '通过简单的文本提示创作带有逼真人声的歌曲和音乐。',
      ja: 'シンプルなテキストプロンプトから、ボーカル入りのリアルな曲や音楽を作成。',
      es: 'Crea canciones y música realistas con voces a partir de simples indicaciones de texto.',
      tk: 'Ýönekeý tekst görkezmelerinden wokal bilen hakyky aýdymlary we sazlary dörediň.',
      uz: 'Oddiy matn so\'rovlaridan vokal bilan real qo\'shiqlar va musiqa yarating.',
      tg: 'Сурудҳо ва мусиқии воқеиро бо овоз аз дастурҳои матнии оддӣ эҷод кунед.',
      hy: 'Ստեղծեք իրատեսական երգեր և երաժշտություն վոկալով պարզ տեքստային հուշումներից:',
      ro: 'Creați cântece și muzică realiste cu voce din simple prompturi text.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://suno.com',
    tags: ['music', 'songs', 'audio']
  },
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'The most realistic and versatile AI speech software for creators and publishers.',
    descriptions: {
      en: 'The most realistic and versatile AI speech software for creators and publishers.',
      zh: '面向创作者和发行商的最逼真、最通用的 AI 语音软件。',
      ja: 'クリエイターやパブリッシャー向けの、最もリアルで多用途なAI音声ソフトウェア。',
      es: 'El software de voz con IA más realista y versátil para creadores y editores.',
      tk: 'Döredijiler we neşirçiler üçin iň hakyky we köp taraply AI gepleşik programma üpjünçiligi.',
      uz: 'Ijodkorlar va nashriyotchilar uchun eng real va ko\'p qirrali AI nutq dasturi.',
      tg: 'Нармафзори воқеӣтарин ва ҳамаҷонибаи нутқи AI барои эҷодкорон ва ноширон.',
      hy: 'Ամենաիրատեսական և բազմակողմանի AI խոսքի ծրագրակազմը ստեղծողների և հրատարակիչների համար:',
      ro: 'Cel mai realist și versatil software de vorbire AI pentru creatori și editori.'
    },
    category: ToolCategory.AUDIO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://elevenlabs.io',
    tags: ['tts', 'voice', 'speech']
  },

  // --- Coding ---
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps you write code faster with less work.',
    descriptions: {
      en: 'AI pair programmer that helps you write code faster with less work.',
      zh: 'AI 结对程序员，帮助您以更少的工作量更快地编写代码。',
      ja: '少ない作業でより速くコードを書くのを助けるAIペアプログラマー。',
      es: 'Programador de pares con IA que te ayuda a escribir código más rápido con menos trabajo.',
      tk: 'Az iş bilen kody çalt ýazmaga kömek edýän AI jübüt programmist.',
      uz: 'Kamroq ish bilan kodni tezroq yozishga yordam beradigan AI juft dasturchi.',
      tg: 'Барномасози ҷуфти AI, ки ба шумо барои зудтар навиштани код бо кори камтар кӯмак мекунад.',
      hy: 'AI զույգ ծրագրավորող, որն օգնում է ձեզ ավելի արագ կոդ գրել ավելի քիչ աշխատանքով:',
      ro: 'Programator pereche AI care te ajută să scrii cod mai rapid cu mai puțin efort.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.PAID,
    url: 'https://github.com/features/copilot',
    tags: ['coding', 'autocomplete', 'developer']
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'An AI-powered code editor built for pair programming with your codebase.',
    descriptions: {
      en: 'An AI-powered code editor built for pair programming with your codebase.',
      zh: '专为与您的代码库进行结对编程而构建的 AI 代码编辑器。',
      ja: 'コードベースとのペアプログラミング用に構築されたAI搭載コードエディター。',
      es: 'Un editor de código impulsado por IA creado para la programación en pares con tu base de código.',
      tk: 'Koduňyz bilen jübüt programmirlemek üçin gurlan AI bilen işleýän kod redaktory.',
      uz: 'Kodingiz bilan juft dasturlash uchun yaratilgan AI asosidagi kod muharriri.',
      tg: 'Муҳаррири рамзи бо AI асосёфта барои барномасозии ҷуфт бо пойгоҳи коди шумо сохта шудааст.',
      hy: 'AI-ով աշխատող կոդերի խմբագրիչ՝ ստեղծված ձեր կոդերի բազայի հետ զույգ ծրագրավորման համար:',
      ro: 'Un editor de cod bazat pe AI creat pentru programarea în pereche cu baza ta de cod.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREEMIUM,
    url: 'https://cursor.sh',
    tags: ['editor', 'ide', 'coding']
  },
  {
    id: 'excalidraw',
    name: 'Excalidraw',
    description: 'Free open-source whiteboard for diagrams, brainstorming, and collaboration.',
    descriptions: {
      en: 'Free open-source whiteboard for diagrams, brainstorming, and collaboration.',
      zh: '免费开源白板，用于流程图、脑暴与协作。',
      ja: '無料オープンソースのホワイトボード。図解、ブレインストーム、共同作業に最適。',
      es: 'Pizarra open-source gratuita para diagramas, lluvia de ideas y colaboración.',
      tk: 'Diagrammalar, pikir alyşmak we hyzmatdaşlyk üçin mugt açyk çeşme ak tagta.',
      uz: 'Diagramlar, brainstorming va hamkorlik uchun bepul ochiq manbali whiteboard.',
      tg: 'Лавҳаи сафеди кушодаасос ва ройгон барои диаграмма, фикрпурсӣ ва ҳамкорӣ.',
      hy: 'Անվճար բաց կոդովไวթբորդ՝ դիագրամների, բրեינסטորմի և համագործակցության համար։',
      ro: 'Whiteboard open-source gratuit pentru diagrame, brainstorming și colaborare.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREE,
    url: 'https://excalidraw.com',
    tags: ['whiteboard', 'diagram', 'collaboration']
  },
  {
    id: 'tldraw',
    name: 'tldraw',
    description: 'Free collaborative whiteboard with shapes, sticky notes, and drawing.',
    descriptions: {
      en: 'Free collaborative whiteboard with shapes, sticky notes, and drawing.',
      zh: '免费协作白板，支持形状、便签与手绘。',
      ja: '無料のコラボ白板。図形、付箋、手描きに対応。',
      es: 'Pizarra colaborativa gratuita con formas, notas adhesivas y dibujo.',
      tk: 'Şekiller, bellikler we çyzgy bilen mugt hyzmatdaşlyk ak tagtasy.',
      uz: 'Shakllar, stikernotlar va chizish bilan bepul hamkorlik whiteboard.',
      tg: 'Лавҳаи сафеди ҳамкорӣ бо шаклҳо, ёддоштҳо ва расмкашӣ, ройгон.',
      hy: 'Անվճար համագործակցայինไวթբորդ՝ ձևերով, սթիքերներով և նկարողների համար։',
      ro: 'Whiteboard colaborativ gratuit cu forme, notițe lipicioase și desen.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREE,
    url: 'https://tldraw.com',
    tags: ['whiteboard', 'collaboration', 'drawing']
  },
  {
    id: 'lm-studio',
    name: 'LM Studio',
    description: 'Run and chat with local LLMs on your desktop, free and offline.',
    descriptions: {
      en: 'Run and chat with local LLMs on your desktop, free and offline.',
      zh: '在桌面上运行并对话本地 LLM，免费且可离线。',
      ja: 'ローカルLLMをデスクトップで実行し、オフラインで無料でチャット。',
      es: 'Ejecuta y chatea con LLMs locales en tu escritorio, gratis y sin conexión.',
      tk: 'Stolüstünde ýerli LLM-lary işlediň we oflaýn mugt gürleşiň.',
      uz: 'Mahalliy LLMlarni kompyuteringizda ishga tushiring va oflayn bepul chat qiling.',
      tg: 'LLM-ҳои маҳаллиро дар мизи корӣ иҷро кунед ва офлайн ройгон сӯҳбат кунед.',
      hy: 'Գործարկեք և զրուցեք տեղային LLM-ների հետ ձեր համակարգչում՝ անվճար և օֆլայն։',
      ro: 'Rulează și discută cu LLM-uri locale pe desktop, gratuit și offline.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREE,
    url: 'https://lmstudio.ai',
    tags: ['local-llm', 'offline', 'desktop']
  },
  {
    id: 'ollama',
    name: 'Ollama',
    description: 'Download and run open-source LLMs locally with a simple CLI.',
    descriptions: {
      en: 'Download and run open-source LLMs locally with a simple CLI.',
      zh: '使用简单的 CLI 本地下载并运行开源 LLM 模型。',
      ja: 'シンプルなCLIでオープンソースLLMをローカルでダウンロード・実行。',
      es: 'Descarga y ejecuta LLMs de código abierto localmente con una CLI simple.',
      tk: 'Ýönekeý CLI bilen açyk çeşme LLM-lary ýerli göçüriň we işlediň.',
      uz: 'Oddiy CLI yordamida ochiq manbali LLMlarni lokal o‘rnating va ishlating.',
      tg: 'LLM-ҳои кушодаасосро бо CLI сода дар маҳал боргирӣ ва иҷро кунед.',
      hy: 'Ներբեռնեք և գործարկեք բաց կոդով LLM-ներ տեղային՝ պարզ CLI-ով։',
      ro: 'Descarcă și rulează local LLM-uri open-source cu un CLI simplu.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREE,
    url: 'https://ollama.com',
    tags: ['local-llm', 'models', 'cli']
  },
  {
    id: 'colab',
    name: 'Google Colab',
    description: 'Free cloud notebooks for Python with GPU access and seamless sharing.',
    descriptions: {
      en: 'Free cloud notebooks for Python with GPU access and seamless sharing.',
      zh: '免费的云端 Python 笔记本，支持 GPU 与便捷分享。',
      ja: 'GPU対応の無料クラウドPythonノートブック。共有も簡単。',
      es: 'Cuadernos en la nube gratuitos para Python, con acceso a GPU y fácil compartición.',
      tk: 'GPU bilen giriş we ýeňillik bilen paýlaşmak üçin mugt bulutly Python depderçeleri.',
      uz: 'GPU kirish va oson ulashish imkoniga ega bepul bulutli Python daftarlari.',
      tg: 'Дафтари абрии ройгони Python бо дастрасии GPU ва мубодилаи осон.',
      hy: 'Անվճար ամպային Python նոթատետրեր՝ GPU հասանելիությամբ և հեշտ կիսումով։',
      ro: 'Caiete Python în cloud gratuite, cu acces GPU și partajare ușoară.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREE,
    url: 'https://colab.research.google.com',
    tags: ['notebook', 'python', 'google']
  },
  {
    id: 'replit',
    name: 'Replit AI',
    description: 'Build software collaboratively with the power of AI in an online IDE.',
    descriptions: {
      en: 'Build software collaboratively with the power of AI in an online IDE.',
      zh: '在在线 IDE 中借助 AI 的力量协同构建软件。',
      ja: 'オンラインIDEでAIの力を借りて共同でソフトウェアを構築。',
      es: 'Crea software de forma colaborativa con el poder de la IA en un IDE en línea.',
      tk: 'Onlaýn IDE-de AI-nyň güýji bilen programma üpjünçiligini bilelikde guruň.',
      uz: 'Onlayn IDE-da AI kuchi bilan hamkorlikda dasturiy ta\'minot yarating.',
      tg: 'Бо қудрати AI дар IDE онлайн нармафзорро якҷоя созед.',
      hy: 'Կառուցեք ծրագրակազմ համատեղ AI-ի ուժով առցանց IDE-ում:',
      ro: 'Construiți software în colaborare cu puterea AI într-un IDE online.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREEMIUM,
    url: 'https://replit.com/ai',
    tags: ['ide', 'cloud', 'coding']
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'The community and platform for building the future of open source AI models.',
    descriptions: {
      en: 'The community and platform for building the future of open source AI models.',
      zh: '构建开源 AI 模型未来的社区和平台。',
      ja: 'オープンソースAIモデルの未来を築くためのコミュニティとプラットフォーム。',
      es: 'La comunidad y plataforma para construir el futuro de los modelos de IA de código abierto.',
      tk: 'Açyk çeşme AI modelleriniň geljegini gurmak üçin jemgyýet we platforma.',
      uz: 'Ochiq manbali AI modellarining kelajagini qurish uchun hamjamiyat va platforma.',
      tg: 'Ҷамъият ва платформа барои сохтани ояндаи моделҳои кушодаасос AI.',
      hy: 'Համայնք և հարթակ՝ բաց կոդով AI մոդելների ապագան կառուցելու համար:',
      ro: 'Comunitatea și platforma pentru construirea viitorului modelelor AI open-source.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREE,
    url: 'https://huggingface.co',
    tags: ['models', 'datasets', 'open-source']
  },

  // --- Productivity ---
  {
    id: 'perplexity',
    name: 'Perplexity AI',
    description: 'An AI-powered answer engine that cites sources for accurate information discovery.',
    descriptions: {
      en: 'An AI-powered answer engine that cites sources for accurate information discovery.',
      zh: '一个引用来源的 AI 问答引擎，用于精确的信息发现。',
      ja: '正確な情報発見のためにソースを引用するAI搭載アンサーエンジン。',
      es: 'Un motor de respuestas impulsado por IA que cita fuentes para un descubrimiento de información preciso.',
      tk: 'Takyk maglumat tapmak üçin çeşmeleri görkezýän AI bilen işleýän jogap motory.',
      uz: 'Aniq ma\'lumotlarni topish uchun manbalarga havola qiluvchi AI asosidagi javob mexanizmi.',
      tg: 'Муҳаррики ҷавоби бо AI асосёфта, ки сарчашмаҳоро барои кашфи дақиқи иттилоот истинод мекунад.',
      hy: 'AI-ով աշխատող պատասխանների շարժիչ, որը վկայակոչում է աղբյուրները ճշգրիտ տեղեկատվության հայտնաբերման համար:',
      ro: 'Un motor de răspunsuri bazat pe AI care citează surse pentru descoperirea exactă a informațiilor.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.perplexity.ai',
    tags: ['search', 'research', 'citations']
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'Integrated AI writing assistant inside the popular productivity workspace.',
    descriptions: {
      en: 'Integrated AI writing assistant inside the popular productivity workspace.',
      zh: '集成在流行生产力工作区中的 AI 写作助手。',
      ja: '人気のある生産性ワークスペースに統合されたAIライティングアシスタント。',
      es: 'Asistente de escritura de IA integrado dentro del popular espacio de trabajo de productividad.',
      tk: 'Meşhur öndürijilik iş giňişliginde integrirlenen AI ýazuw kömekçisi.',
      uz: 'Mashhur unumdorlik ish maydoniga integratsiyalangan AI yozish yordamchisi.',
      tg: 'Ёрдамчии навиштани интегратсияшудаи AI дар дохили фазои кории машҳури маҳсулнокӣ.',
      hy: 'Ինտեգրված AI գրելու օգնական հայտնի արտադրողականության աշխատանքային տարածքում:',
      ro: 'Asistent de scriere AI integrat în popularul spațiu de lucru pentru productivitate.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.PAID,
    url: 'https://www.notion.so/product/ai',
    tags: ['notes', 'writing', 'workspace']
  },
  {
    id: 'zapier',
    name: 'Zapier',
    description: 'Automate your workflows by connecting your apps with AI-powered logic.',
    descriptions: {
      en: 'Automate your workflows by connecting your apps with AI-powered logic.',
      zh: '通过 AI 驱动的逻辑连接您的应用，自动化您的工作流程。',
      ja: 'AI搭載のロジックでアプリを接続し、ワークフローを自動化。',
      es: 'Automatiza tus flujos de trabajo conectando tus aplicaciones con lógica impulsada por IA.',
      tk: 'Programmalaryňyzy AI bilen işleýän logika bilen birikdirip, iş akymlaryňyzy awtomatlaşdyryň.',
      uz: 'Ilovalaringizni AI asosidagi mantiq bilan bog\'lab, ish jarayonlaringizni avtomatlashtiring.',
      tg: 'Бо пайваст кардани барномаҳои худ бо мантиқи бо AI таъминшуда ҷараёни кори худро автоматӣ кунед.',
      hy: 'Ավտոմատացրեք ձեր աշխատանքային հոսքերը՝ միացնելով ձեր հավելվածները AI-ով աշխատող տրամաբանությամբ:',
      ro: 'Automatizați fluxurile de lucru conectând aplicațiile cu logica bazată pe AI.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://zapier.com',
    tags: ['automation', 'workflow', 'business']
  },
  {
    id: 'otter',
    name: 'Otter.ai',
    description: 'AI meeting assistant that records audio, writes notes, and captures slides.',
    descriptions: {
      en: 'AI meeting assistant that records audio, writes notes, and captures slides.',
      zh: 'AI 会议助手，可录制音频、做笔记并捕捉幻灯片。',
      ja: '音声を録音し、メモを取り、スライドをキャプチャするAI会議アシスタント。',
      es: 'Asistente de reuniones con IA que graba audio, escribe notas y captura diapositivas.',
      tk: 'Ses ýazýan, bellik alýan we slaýdlary tutýan AI ýygnak kömekçisi.',
      uz: 'Ovoz yozadigan, eslatma oladigan va slaydlarni suratga oladigan AI uchrashuv yordamchisi.',
      tg: 'Ёрдамчии вохӯрии AI, ки аудио сабт мекунад, қайдҳо менависад ва слайдҳоро сабт мекунад.',
      hy: 'AI հանդիպման օգնական, որը ձայնագրում է աուդիո, գրում նշումներ և ֆիքսում սլայդներ:',
      ro: 'Asistent de întâlnire AI care înregistrează audio, scrie notițe și capturează diapozitive.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://otter.ai',
    tags: ['meetings', 'transcription', 'notes']
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'A new medium for presenting ideas, powered by AI. Create decks in minutes.',
    descriptions: {
      en: 'A new medium for presenting ideas, powered by AI. Create decks in minutes.',
      zh: '一种由 AI 驱动的展示创意的新媒介。几分钟内即可创建演示文稿。',
      ja: 'AIを搭載した、アイデアを発表するための新しいメディア。数分で資料を作成。',
      es: 'Un nuevo medio para presentar ideas, impulsado por IA. Crea presentaciones en minutos.',
      tk: 'AI tarapyndan işledilýän ideýalary hödürlemek üçin täze serişde. Minutlarda prezentasiýa dörediň.',
      uz: 'AI tomonidan quvvatlanadigan g\'oyalarni taqdim etish uchun yangi vosita. Daqiqalar ichida taqdimotlar yarating.',
      tg: 'Воситаи нав барои муаррифии ғояҳо, ки бо AI асос ёфтааст. Дар дақиқаҳо саҳни киштӣ эҷод кунед.',
      hy: 'Գաղափարներ ներկայացնելու նոր միջոց՝ սնուցվող AI-ով: Ստեղծեք տախտակամածներ րոպեների ընթացքում:',
      ro: 'Un nou mediu pentru prezentarea ideilor, alimentat de AI. Creați prezentări în câteva minute.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://gamma.app',
    tags: ['presentations', 'slides', 'design']
  }
  ,
  {
    id: 'imagen3d',
    name: 'Imagen3D',
    description: 'AI-powered tool to convert images to high-quality 3D models.',
    descriptions: {
      en: 'AI-powered tool to convert images to high-quality 3D models.',
      zh: 'AI 图像转高质量 3D 模型工具。',
      ja: '画像を高品質な3Dモデルへ変换するAIツール。',
      es: 'Herramienta IA que convierte imágenes en modelos 3D de alta calidad.',
      tk: 'Suratlary ýokary hilli 3D modellere öwürýän AI guraly.',
      uz: 'Tasvirlarni yuqori sifatli 3D modellarga aylantiruvchi AI vosita.',
      tg: 'Абзори AI барои табдили тасвирҳо ба моделҳои 3D босифат.',
      hy: 'AI գործիք՝ պատկերները վերածելու բարձրորակ 3D մոդելների։',
      ro: 'Instrument AI care convertește imagini în modele 3D de înaltă calitate.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.toolify.ai/tool/imagen3d',
    tags: ['image-to-3d', '3d', 'modeling'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'qwen-image',
    name: 'Qwen-Image',
    description: 'Open-source image generator and editor with strong text rendering.',
    descriptions: {
      en: 'Open-source image generator and editor with strong text rendering.',
      zh: '开源图像生成与编辑，文字渲染能力强。',
      ja: '高精度文字描画に強い画像生成・编辑のオープンソース。',
      es: 'Generador y editor de imágenes open-source con excelente renderizado de texto.',
      tk: 'Güçli teksti görkezýän açyk çeşmeli şekil döretmek/rediaktirlemek.',
      uz: 'Kuchli matn chizish bilan ochiq manbali tasvir generatori va muharriri.',
      tg: 'Тавлид ва таҳрири тасвирҳои open-source бо рендери қавии матн.',
      hy: 'Բաց աղբյուրի պատկերների ստեղծում և խմբագրում՝ որակյալ տեքստային արտապատկերմամբ։',
      ro: 'Generator și editor de imagini open-source cu randare text excelentă.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://qwen-image.ai/',
    tags: ['image', 'editing', 'open-source', 'text-rendering'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'stakly',
    name: 'Stakly.dev',
    description: 'AI platform to build production-ready web apps from plain text.',
    descriptions: {
      en: 'AI platform to build production-ready web apps from plain text.',
      zh: 'AI 平台，基于文本描述生成可上线的网页应用。',
      ja: 'テキスト指示から本番レディなWebアプリを作るAIプラットフォーム。',
      es: 'Plataforma IA para crear apps web listas para producción desde texto.',
      tk: 'Tekstden önümçilik derejeli web programmalary döredýän AI platforma.',
      uz: 'Matndan ishlab chiqarishga tayyor veb-ilovalar yaratadigan AI platforma.',
      tg: 'Платформаи AI барои сохтани барномаҳои веб омода ба истеҳсол аз матн.',
      hy: 'AI հարթակ՝ տեքստից արտադրական պատրաստ վեբ հավելվածներ ստեղծելու համար։',
      ro: 'Platformă AI pentru aplicații web gata de producție din text.'
    },
    category: ToolCategory.CODING,
    pricing: PricingModel.FREEMIUM,
    url: 'https://stakly.dev/',
    tags: ['app-builder', 'no-code', 'ai-agents', 'webapps'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'kael',
    name: 'Kael',
    description: 'AI assistant for understanding documents and producing structured outputs.',
    descriptions: {
      en: 'AI assistant for understanding documents and producing structured outputs.',
      zh: '理解文档并生成结构化产出的一体化 AI 助手。',
      ja: '文書理解と構造化アウトプットを行うAIアシスタント。',
      es: 'Asistente IA para comprender documentos y producir resultados estructurados.',
      tk: 'Resminamalary düşünmek we düzülen çykaryş döretmek üçin AI kömekçi.',
      uz: 'Hujjatlarni tushunish va tuzilgan natijalar yaratish uchun AI yordamchi.',
      tg: 'Ёрдамчии AI барои фаҳмиши ҳуҷҷатҳо ва тавлиди натиҷаҳои сохторӣ.',
      hy: 'Փաստաթղթերի ըմբռնման և կառուցվածքային արդյունքների ստեղծման AI օգնական։',
      ro: 'Asistent IA pentru înțelegerea documentelor și rezultate structurate.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.toolify.ai/tool/kael',
    tags: ['documents', 'assistant', 'notes', 'reports'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'qwen-image-edit',
    name: 'Qwen-Image-Edit',
    description: 'Semantic image editing with precise control via text prompts.',
    descriptions: {
      en: 'Semantic image editing with precise control via text prompts.',
      zh: '语义级图像编辑，可通过文本精细控制。',
      ja: 'テキストプロンプトで精密に制御できるセマンティック画像編集。',
      es: 'Edición semántica de imágenes con control preciso mediante texto.',
      tk: 'Tekst arkaly takyk dolandyryş bilen semantik şekil redaktirleme.',
      uz: 'Matn orqali aniq boshqariladigan semantik tasvir tahriri.',
      tg: 'Таҳрири семантикии тасвирҳо бо назорати дақиқ тавассути матн.',
      hy: 'Սեմանտիկ պատկերների խմբագրում՝ ճշգրիտ վերահսկմամբ տեքստով։',
      ro: 'Editare semantică a imaginilor cu control precis prin text.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.toolify.ai/tool/qwen-image-edit',
    tags: ['image-editing', 'semantic', 'open-source'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'stack-ai',
    name: 'Stack AI',
    description: 'Low/no-code platform to build and deploy AI agents and workflows.',
    descriptions: {
      en: 'Low/no-code platform to build and deploy AI agents and workflows.',
      zh: '低/无代码平台，用于构建与部署 AI 代理与流程。',
      ja: 'AIエージェントやワークフローを構築・展開するノーコード/ローコード基盤。',
      es: 'Plataforma low/no-code para crear y desplegar agentes y flujos IA.',
      tk: 'AI agentleri we akymlary döretmek/ýaýratmak üçin pes/ýok koda platforma.',
      uz: 'AI agentlari va ish jarayonlarini yaratish/joylash uchun low/no-code platforma.',
      tg: 'Платформаи low/no-code барои сохтани агентҳои AI ва ҷараёнҳо.',
      hy: 'Low/no-code հարթակ՝ AI գործակալներ և աշխատանքային հոսքեր կառուցելու/տեղակայելու համար։',
      ro: 'Platformă low/no-code pentru a construi și lansa agenți și fluxuri AI.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.stack-ai.com/',
    tags: ['agents', 'no-code', 'workflows', 'enterprise'],
    createdAt: Date.now(),
    releasedAt: Date.now()
  },
  {
    id: 'stackie-ai',
    name: 'Stackie.AI',
    description: 'An AI-powered life-logger for journaling, habit tracking, and information management.',
    descriptions: {
      en: 'An AI-powered life-logger for journaling, habit tracking, and information management.',
      zh: '一个用于日记、习惯跟踪和信息管理的 AI 生活记录器。',
      ja: 'ジャーナリング、習慣追跡、情報管理のためのAI搭載ライフブロガー。',
      es: 'Un registrador de vida impulsado por IA para llevar un diario, seguir hábitos y gestionar información.',
      tk: 'Günlük, endik yzarlamak we maglumat dolandyryşy üçin AI bilen işleýän durmuş ýazgysy.',
      uz: 'Jurnal yuritish, odatlarni kuzatish va axborotni boshqarish uchun sun\'iy intellektga asoslangan hayot qaydnomasi.',
      tg: 'Як сабткунандаи ҳаёт бо нерӯи зеҳни сунъӣ барои маҷалла, пайгирии одатҳо ва идоракунии иттилоот.',
      hy: 'AI-ով աշխատող կյանքի գրանցիչ՝ օրագրերի, սովորությունների հետևման և տեղեկատվության կառավարման համար։',
      ro: 'Un înregistrator de viață bazat pe inteligență artificială pentru jurnal, urmărirea obiceiurilor și gestionarea informațiilor.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://stackie.ai/',
    tags: ['journaling', 'habit-tracking', 'information-management']
  },
  {
    id: 'vidthis-ai',
    name: 'Vidthis AI',
    description: 'An open-source, uncensored AI platform for generating 4K videos with synchronized audio.',
    descriptions: {
      en: 'An open-source, uncensored AI platform for generating 4K videos with synchronized audio.',
      zh: '一个用于从文本或图像生成 4K 视频的开源 AI 平台。',
      ja: '同期された音声付きの4Kビデオを生成するための、オープンソースで無修正のAIプラットフォーム。',
      es: 'Una plataforma de IA de código abierto y sin censura para generar videos 4K con audio sincronizado.',
      tk: 'Sinhronlaşdyrylan sesli 4K wideo döretmek üçin açyk çeşmeli, senzura edilmedik AI platformasy.',
      uz: 'Sinxronlashtirilgan audio bilan 4K videolar yaratish uchun ochiq manbali, senzurasiz AI platformasi.',
      tg: 'Платформаи AI-и кушодаасос ва бидуни сензура барои тавлиди видеоҳои 4K бо аудиои ҳамоҳангшуда.',
      hy: 'Բաց կոդով, առանց գրաքննության AI հարթակ՝ համաժամեցված աուդիոյով 4K տեսանյութեր ստեղծելու համար։',
      ro: 'O platformă AI open-source, necenzurată, pentru generarea de videoclipuri 4K cu audio sincronizat.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://vidthis.ai/',
    tags: ['video-generation', 'open-source', 'uncensored']
  },
  {
    id: 'free-ai-background-remover',
    name: 'Free AI Background Remover',
    description: 'A free AI tool to remove backgrounds from images.',
    descriptions: {
      en: 'A free AI tool to remove backgrounds from images.',
      zh: '一个用于从图像中移除背景的免费 AI 工具。',
      ja: '画像から背景を削除するための無料のAIツール。',
      es: 'Una herramienta de IA gratuita para eliminar fondos de imágenes.',
      tk: 'Suratlardan fonlary aýyrmak üçin mugt AI guraly.',
      uz: 'Rasmlardan fonni olib tashlash uchun bepul AI vositasi.',
      tg: 'Асбоби ройгони AI барои нест кардани замина аз тасвирҳо.',
      hy: 'Անվճար AI գործիք՝ նկարներից ֆոնը հեռացնելու համար։',
      ro: 'Un instrument AI gratuit pentru a elimina fundalurile din imagini.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREE,
    url: 'https://removal.ai/',
    tags: ['background-remover', 'image-editing', 'free']
  },
  {
    id: 'miro',
    name: 'Miro',
    description: 'An online collaborative whiteboard platform for team collaboration and project management.',
    descriptions: {
      en: 'An online collaborative whiteboard platform for team collaboration and project management.',
      zh: '一个用于团队协作和项目管理的在线协作白板平台。',
      ja: 'チームのコラボレーションとプロジェクト管理のためのオンライン共同ホワイトボードプラットフォーム。',
      es: 'Una plataforma de pizarra colaborativa en línea para la colaboración en equipo y la gestión de proyectos.',
      tk: 'Topar hyzmatdaşlygy we taslama dolandyryşy üçin onlaýn hyzmatdaşlyk tagtasy platformasy.',
      uz: 'Jamoaviy hamkorlik va loyihalarni boshqarish uchun onlayn hamkorlik doskasi platformasi.',
      tg: 'Платформаи тахтаи сафеди муштараки онлайн барои ҳамкории гурӯҳӣ ва идоракунии лоиҳа.',
      hy: 'Առցանց համագործակցային գրատախտակի հարթակ՝ թիմային համագործակցության և նախագծերի կառավարման համար։',
      ro: 'O platformă online de tablă colaborativă pentru colaborarea în echipă și managementul proiectelor.'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://miro.com/',
    tags: ['whiteboard', 'collaboration', 'project-management']
  },
  {
    id: 'pixlio-ai',
    name: 'Pixlio AI',
    description: 'A professional-quality AI image editor for image creation, editing, and optimization.',
    descriptions: {
      en: 'A professional-quality AI image editor for image creation, editing, and optimization.',
      zh: '一个专业的 AI 图像编辑器，用于图像创作、编辑和优化。',
      ja: '画像作成、編集、最適化のためのプロ品質のAI画像エディタ。',
      es: 'Un editor de imágenes de IA de calidad profesional para la creación, edición y optimización de imágenes.',
      tk: 'Surat döretmek, redaktirlemek we optimizirlemek üçin professional hilli AI surat redaktory.',
      uz: 'Tasvirlarni yaratish, tahrirlash va optimallashtirish uchun professional sifatli AI tasvir muharriri.',
      tg: 'Муҳаррири тасвири AI-и сифати касбӣ барои эҷод, таҳрир ва оптимизатсияи тасвир.',
      hy: 'Պրոֆեսիոնալ որակի AI պատկերների խմբագրիչ՝ պատկերների ստեղծման, խմբագրման և օպտիմալացման համար։',
      ro: 'Un editor de imagini AI de calitate profesională pentru crearea, editarea și optimizarea imaginilor.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://pixlio.net/',
    tags: ['image-editor', 'image-creation', 'optimization']
  },
  {
    id: 'ai-angels',
    name: 'AI Angels',
    description: 'A platform to chat with beautiful, smart, and intelligent AI companions.',
    descriptions: {
      en: 'A platform to chat with beautiful, smart, and intelligent AI companions.',
      zh: '一个与美丽、聪明的 AI 伴侣聊天的平台。',
      ja: '美しく、賢く、知的なAIコンパニオンとチャットするためのプラットフォーム。',
      es: 'Una plataforma para chatear con compañeros de IA hermosos, inteligentes e inteligentes.',
      tk: 'Owadan, akylly we akylly AI ýoldaşlary bilen söhbetdeşlik üçin platforma.',
      uz: 'Go\'zal, aqlli va aqlli AI hamrohlari bilan suhbatlashish uchun platforma.',
      tg: 'Платформа барои сӯҳбат бо ҳамроҳони зебо, доно ва боақли AI.',
      hy: 'Հարթակ՝ գեղեցիկ, խելացի և խելացի AI ուղեկիցների հետ զրուցելու համար։',
      ro: 'O platformă pentru a discuta cu însoțitori AI frumoși, deștepți și inteligenți.'
    },
    category: ToolCategory.TEXT,
    pricing: PricingModel.FREEMIUM,
    url: 'https://angel.ai/',
    tags: ['chatbot', 'companion', 'ai-friend']
  },
  {
    id: 'sniffsub',
    name: 'Sniffsub',
    description: 'A tool for analyzing and tracking audiences on Reddit.',
    descriptions: {
      en: 'A tool for analyzing and tracking audiences on Reddit.',
      zh: '一个用于在 Reddit 上分析和跟踪受众的工具。',
      ja: 'Redditのオーディエンスを分析および追跡するためのツール。',
      es: 'Una herramienta para analizar y rastrear audiencias en Reddit.',
      tk: 'Reddit-de tomaşaçylary seljermek we yzarlamak üçin gural.',
      uz: 'Reddit\'dagi auditoriyani tahlil qilish va kuzatish uchun vosita.',
      tg: 'Асбоб барои таҳлил ва пайгирии аудитория дар Reddit.',
      hy: 'Գործիք՝ Reddit-ում լսարանները վերլուծելու և հետևելու համար։',
      ro: 'Un instrument pentru analizarea și urmărirea audiențelor pe Reddit.'
    },
    category: ToolCategory.BUSINESS,
    pricing: PricingModel.PAID,
    url: 'https://sniffsub.com/',
    tags: ['reddit', 'analytics', 'marketing']
  },
  {
    id: 'deepfake-maker',
    name: 'Deepfake Maker',
    description: 'An all-in-one AI tool with face-swapping, image editing, and image-to-video features.',
    descriptions: {
      en: 'An all-in-one AI tool with face-swapping, image editing, and image-to-video features.',
      zh: '一个集换脸、图片编辑和图转视频功能于一体的 AI 工具。',
      ja: '顔交換、画像編集、画像から動画への変換機能を備えたオールインワンAIツール。',
      es: 'Una herramienta de IA todo en uno con funciones de intercambio de caras, edición de imágenes y de imagen a video.',
      tk: 'Ýüz çalşyrmak, surat redaktirlemek we suratdan wideo aýratynlyklary bolan hemmesi bir AI guraly.',
      uz: 'Yuzni almashtirish, tasvirni tahrirlash va tasvirdan videoga o\'tkazish xususiyatlariga ega bo\'lgan yagona AI vositasi.',
      tg: 'Асбоби ҳамаҷонибаи AI бо хусусиятҳои ивазкунии чеҳра, таҳрири тасвир ва тасвир ба видео.',
      hy: 'Բոլորը մեկում AI գործիք՝ դեմքի փոխանակման, պատկերների խմբագրման և պատկերից վիդեոյի հնարավորություններով։',
      ro: 'Un instrument AI all-in-one cu funcții de schimbare a feței, editare de imagini și imagine în video.'
    },
    category: ToolCategory.VIDEO,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.heygen.com/tool/deepfake-maker',
    tags: ['deepfake', 'face-swap', 'video-editing']
  },
  {
    id: 'image-creator-ai',
    name: 'IMAGE CREATOR AI',
    description: 'A free AI image generator and editor powered by Gemini.',
    descriptions: {
      en: 'A free AI image generator and editor powered by Gemini.',
      zh: '一个由 Gemini 驱动的免费 AI 图像生成器和编辑器。',
      ja: 'Geminiを搭載した無料のAI画像ジェネレーターおよびエディター。',
      es: 'Un generador y editor de imágenes de IA gratuito impulsado por Gemini.',
      tk: 'Gemini tarapyndan dolandyrylýan mugt AI surat generatory we redaktory.',
      uz: 'Gemini tomonidan quvvatlanadigan bepul AI tasvir generatori va muharriri.',
      tg: 'Генератор ва муҳаррири ройгони тасвири AI, ки аз ҷониби Gemini таъмин карда шудааст.',
      hy: 'Gemini-ով աշխատող անվճար AI պատկերների գեներատոր և խմբագրիչ։',
      ro: 'Un generator și editor de imagini AI gratuit, alimentat de Gemini.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREE,
    url: 'https://nanobanana.pro/',
    tags: ['image-generator', 'gemini', 'free']
  },
  {
    id: 'gurully',
    name: 'Gurully',
    description: 'A practice platform for English proficiency tests (PTE, IELTS, etc.).',
    descriptions: {
      en: 'A practice platform for English proficiency tests (PTE, IELTS, etc.).',
      zh: '一个用于英语能力测试（PTE、IELTS 等）的练习平台。',
      ja: '英語能力試験（PTE、IELTSなど）の練習プラットフォーム。',
      es: 'Una plataforma de práctica para exámenes de dominio del inglés (PTE, IELTS, etc.).',
      tk: 'Iňlis dili başarnygy synaglary (PTE, IELTS we ş.m.) üçin tejribe platformasy.',
      uz: 'Ingliz tilini bilish testlari (PTE, IELTS va boshqalar) uchun amaliyot platformasi.',
      tg: 'Платформаи амалӣ барои санҷишҳои донистани забони англисӣ (PTE, IELTS ва ғайра).',
      hy: 'Անգլերենի իմացության թեստերի (PTE, IELTS և այլն) պրակտիկայի հարթակ։',
      ro: 'O platformă de practică pentru testele de competență în limba engleză (PTE, IELTS etc.).'
    },
    category: ToolCategory.PRODUCTIVITY,
    pricing: PricingModel.FREEMIUM,
    url: 'https://www.gurully.com/',
    tags: ['english-learning', 'pte', 'ielts']
  },
  {
    id: 'swiftproxy',
    name: 'Swiftproxy',
    description: 'A platform providing residential proxies for web scraping and data collection.',
    descriptions: {
      en: 'A platform providing residential proxies for web scraping and data collection.',
      zh: '一个提供住宅代理服务的平台，用于网络抓取和数据收集。',
      ja: 'ウェブスクレイピングとデータ収集のための住宅用プロキシを提供するプラットフォーム。',
      es: 'Una plataforma que proporciona proxies residenciales para web scraping y recopilación de datos.',
      tk: 'Web scraping we maglumat ýygnamak üçin ýaşaýyş proksi üpjün edýän platforma.',
      uz: 'Veb-skreyner va ma\'lumotlarni yig\'ish uchun turar-joy proksilarini taqdim etadigan platforma.',
      tg: 'Платформае, ки проксиҳои истиқоматиро барои ҷамъоварии веб ва ҷамъоварии маълумот таъмин мекунад.',
      hy: 'Հարթակ, որը տրամադրում է բնակելի պրոքսիներ վեբ քերծման և տվյալների հավաքագրման համար։',
      ro: 'O platformă care oferă proxy-uri rezidențiale pentru web scraping și colectarea de date.'
    },
    category: ToolCategory.BUSINESS,
    pricing: PricingModel.PAID,
    url: 'https://www.swiftproxy.net/',
    tags: ['proxy', 'web-scraping', 'data-collection']
  },
  {
    id: 'nano-banana-pro',
    name: 'Nano Banana Pro',
    description: 'A professional AI image generator and editor powered by Gemini Pro.',
    descriptions: {
      en: 'A professional AI image generator and editor powered by Gemini Pro.',
      zh: '一款由 Gemini Pro 驱动的专业 AI 图像生成器和编辑器。',
      ja: 'Gemini Proを搭載したプロフェッショナルなAI画像ジェネレーターおよびエディター。',
      es: 'Un generador y editor de imágenes de IA profesional impulsado por Gemini Pro.',
      tk: 'Gemini Pro tarapyndan dolandyrylýan professional AI surat generatory we redaktory.',
      uz: 'Gemini Pro tomonidan quvvatlanadigan professional AI tasvir generatori va muharriri.',
      tg: 'Генератор ва муҳаррири касбии тасвири AI, ки аз ҷониби Gemini Pro таъмин карда шудааст.',
      hy: 'Gemini Pro-ով աշխատող պրոֆեսիոնալ AI պատկերների գեներատոր և խմբագրիչ։',
      ro: 'Un generator și editor de imagini AI profesional, alimentat de Gemini Pro.'
    },
    category: ToolCategory.IMAGE,
    pricing: PricingModel.FREEMIUM,
    url: 'https://nanobanana.pro/',
    tags: ['image-generator', 'gemini-pro', 'professional']
  }
];

export const TRANSLATIONS: Record<Language, any> = {
  en: {
    title: 'NavAI',
    directory: 'Directory',
    searchPlaceholder: 'Filter tools or ask AI to find new ones...',
    aiFind: 'AI Find',
    noTools: 'No tools found',
    noToolsDesc: 'We couldn\'t find any tools matching your query.',
    clickToSearch: 'Try clicking AI Find to search the web.',
    footer: 'Powered by Gemini Flash & Pro.',
    tagline: 'NavAI: A curated collection of AI tools for builders.',
    featuredTools: 'Featured Tools',
    sort: {
      default: 'Default',
      newest: 'Newest',
      recent: 'Recently added'
    },
    categories: {
      [ToolCategory.ALL]: 'All Tools',
      [ToolCategory.TEXT]: 'Text & Writing',
      [ToolCategory.IMAGE]: 'Image Generation',
      [ToolCategory.VIDEO]: 'Video Creation',
      [ToolCategory.AUDIO]: 'Audio & Music',
      [ToolCategory.CODING]: 'Programming',
      [ToolCategory.PRODUCTIVITY]: 'Productivity',
      [ToolCategory.BUSINESS]: 'Business & Marketing',
    },
    toolCard: {
      aiFound: 'AI FOUND',
      quickInfo: 'Quick Info',
      loaded: 'Loaded',
      visitSite: 'Visit Site',
      quickSummary: 'Quick Summary:',
    },
    chatBot: {
      title: 'AI Assistant',
      online: 'Online • Powered by Gemini',
      placeholder: 'Ask for a recommendation...',
      initialMessage: 'Hi! I can help you find the right AI tool. What are you looking to build or create today?',
      error: 'Sorry, I\'m having trouble connecting right now.'
    }
  },
  zh: {
    title: 'NavAI',
    directory: '导航目录',
    searchPlaceholder: '筛选工具或让 AI 发现新工具...',
    aiFind: 'AI 搜索',
    noTools: '未找到工具',
    noToolsDesc: '未找到匹配结果，请尝试其他关键词',
    clickToSearch: '尝试点击 AI 搜索以在网络上查找。',
    footer: '由 Gemini Flash & Pro 提供支持。',
    tagline: '我是NavAI，为构建者精选的AI工具集',
    featuredTools: '精选工具',
    sort: {
      default: '默认',
      newest: '最新发布',
      recent: '最近添加'
    },
    categories: {
      [ToolCategory.ALL]: '全部工具',
      [ToolCategory.TEXT]: '文本与写作',
      [ToolCategory.IMAGE]: '图像生成',
      [ToolCategory.VIDEO]: '视频创作',
      [ToolCategory.AUDIO]: '音频与音乐',
      [ToolCategory.CODING]: '编程开发',
      [ToolCategory.PRODUCTIVITY]: '生产力工具',
      [ToolCategory.BUSINESS]: '商业与营销',
    },
    toolCard: {
      aiFound: 'AI 发现',
      quickInfo: '快速简介',
      loaded: '已加载',
      visitSite: '访问网站',
      quickSummary: '快速摘要:',
    },
    chatBot: {
      title: 'AI 助手',
      online: '在线 • 由 Gemini 提供支持',
      placeholder: '寻求推荐...',
      initialMessage: '你好！我可以帮你寻找合适的 AI 工具。你今天想在这个平台上创建什么？',
      error: '抱歉，我现在连接有问题。'
    }
  },
  ja: {
    title: 'NavAI',
    directory: 'ディレクトリ',
    searchPlaceholder: 'ツールを検索、またはAIに尋ねる...',
    aiFind: 'AI 検索',
    noTools: 'ツールが見つかりません',
    noToolsDesc: 'クエリに一致するツールが見つかりませんでした。',
    clickToSearch: '「AI 検索」をクリックしてWebを検索してください。',
    footer: 'Gemini Flash & Pro を搭載。',
    tagline: 'NavAI：ビルダーのために厳選されたAIツール集',
    featuredTools: '注目のツール',
    categories: {
      [ToolCategory.ALL]: 'すべてのツール',
      [ToolCategory.TEXT]: 'テキストと執筆',
      [ToolCategory.IMAGE]: '画像生成',
      [ToolCategory.VIDEO]: '動画制作',
      [ToolCategory.AUDIO]: '音声と音楽',
      [ToolCategory.CODING]: 'プログラミング',
      [ToolCategory.PRODUCTIVITY]: '生産性向上',
      [ToolCategory.BUSINESS]: 'ビジネス',
    },
    toolCard: {
      aiFound: 'AI 発見',
      quickInfo: 'クイック情報',
      loaded: 'ロード済み',
      visitSite: 'サイトへ',
      quickSummary: 'クイックサマリー:',
    },
    chatBot: {
      title: 'AI アシスタント',
      online: 'オンライン • Gemini 搭載',
      placeholder: 'おすすめを聞く...',
      initialMessage: 'こんにちは！最適なAIツールを見つけるお手伝いをします。何を作りたいですか？',
      error: '申し訳ありません、現在接続に問題があります。'
    }
  },
  es: {
    title: 'NavAI',
    directory: 'Directorio',
    searchPlaceholder: 'Filtrar herramientas o pedir a la IA...',
    aiFind: 'Búsqueda IA',
    noTools: 'No se encontraron herramientas',
    noToolsDesc: 'No pudimos encontrar herramientas que coincidan.',
    clickToSearch: 'Intenta hacer clic en Búsqueda IA.',
    footer: 'Impulsado por Gemini Flash & Pro.',
    tagline: 'NavAI: Una colección curada de herramientas de IA para constructores.',
    featuredTools: 'Herramientas Destacadas',
    categories: {
      [ToolCategory.ALL]: 'Todas',
      [ToolCategory.TEXT]: 'Texto y Escritura',
      [ToolCategory.IMAGE]: 'Generación de Imagen',
      [ToolCategory.VIDEO]: 'Creación de Video',
      [ToolCategory.AUDIO]: 'Audio y Música',
      [ToolCategory.CODING]: 'Programación',
      [ToolCategory.PRODUCTIVITY]: 'Productividad',
      [ToolCategory.BUSINESS]: 'Negocios',
    },
    toolCard: {
      aiFound: 'IA ENCONTRADA',
      quickInfo: 'Info Rápida',
      loaded: 'Cargado',
      visitSite: 'Visitar Sitio',
      quickSummary: 'Resumen Rápido:',
    },
    chatBot: {
      title: 'Asistente IA',
      online: 'En línea • Con tecnología Gemini',
      placeholder: 'Pide una recomendación...',
      initialMessage: '¡Hola! Puedo ayudarte a encontrar la herramienta de IA adecuada. ¿Qué quieres crear hoy?',
      error: 'Lo siento, tengo problemas para conectarme en este momento.'
    }
  },
  tk: {
    title: 'NavAI',
    directory: 'Katalog',
    searchPlaceholder: 'Gurallary süzüň ýa-da AI-dan sorap görüň...',
    aiFind: 'AI Gözleg',
    noTools: 'Gural tapylmady',
    noToolsDesc: 'Siziň soragyňyza gabat gelýän gural tapyp bilmedik.',
    clickToSearch: 'Webde gözlemek üçin AI Gözleg düwmesine basyň.',
    footer: 'Gemini Flash & Pro tarapyndan goldanylýar.',
    tagline: 'NavAI: Gurluşykçylar üçin AI gurallarynyň saýlanan ýygyndysy.',
    featuredTools: 'Saýlanan Gurallar',
    categories: {
      [ToolCategory.ALL]: 'Ähli gurallar',
      [ToolCategory.TEXT]: 'Tekst we Ýazuw',
      [ToolCategory.IMAGE]: 'Şekil döretmek',
      [ToolCategory.VIDEO]: 'Wideo döretmek',
      [ToolCategory.AUDIO]: 'Audio we Saz',
      [ToolCategory.CODING]: 'Programmirlemek',
      [ToolCategory.PRODUCTIVITY]: 'Öndürijilik',
      [ToolCategory.BUSINESS]: 'Biznes we Marketing',
    },
    toolCard: {
      aiFound: 'AI TAPDY',
      quickInfo: 'Gysgaça maglumat',
      loaded: 'Ýüklendi',
      visitSite: 'Saýta gir',
      quickSummary: 'Gysgaça mazmuny:',
    },
    chatBot: {
      title: 'AI Kömekçi',
      online: 'Onlaýn • Gemini bilen',
      placeholder: 'Maslahat soraň...',
      initialMessage: 'Salam! Size dogry AI guralyny tapmaga kömek edip bilerin. Şu gün näme gurmak ýa-da döretmek isleýärsiňiz?',
      error: 'Bagyşlaň, häzirki wagtda birikmekde kynçylyk çekýärin.'
    }
  },
  uz: {
    title: 'NavAI',
    directory: 'Katalog',
    searchPlaceholder: 'Vositalarni filtrlang yoki AI dan yangilarini topishni so\'rang...',
    aiFind: 'AI Qidiruv',
    noTools: 'Vositalar topilmadi',
    noToolsDesc: 'So\'rovingizga mos keladigan vositalarni topa olmadik.',
    clickToSearch: 'Webda qidirish uchun AI Qidiruv tugmasini bosing.',
    footer: 'Gemini Flash & Pro tomonidan quvvatlanadi.',
    tagline: 'NavAI: Quruvchilar uchun tanlangan AI vositalari to\'plami.',
    featuredTools: 'Tanlangan Vositalar',
    categories: {
      [ToolCategory.ALL]: 'Barcha vositalar',
      [ToolCategory.TEXT]: 'Matn va Yozish',
      [ToolCategory.IMAGE]: 'Tasvir yaratish',
      [ToolCategory.VIDEO]: 'Video yaratish',
      [ToolCategory.AUDIO]: 'Audio va Musiqa',
      [ToolCategory.CODING]: 'Dasturlash',
      [ToolCategory.PRODUCTIVITY]: 'Unumdorlik',
      [ToolCategory.BUSINESS]: 'Biznes va Marketing',
    },
    toolCard: {
      aiFound: 'AI TOPDI',
      quickInfo: 'Tezkor ma\'lumot',
      loaded: 'Yuklandi',
      visitSite: 'Saytga tashrif',
      quickSummary: 'Qisqacha mazmun:',
    },
    chatBot: {
      title: 'AI Yordamchi',
      online: 'Onlayn • Gemini bilan',
      placeholder: 'Tavsiya so\'rang...',
      initialMessage: 'Salom! Sizga to\'g\'ri AI vositasini topishda yordam bera olaman. Bugun nima qurmoqchisiz yoki yaratmoqchisiz?',
      error: 'Kechirasiz, hozir ulanishda muammo bor.'
    }
  },
  tg: {
    title: 'NavAI',
    directory: 'Феҳрист',
    searchPlaceholder: 'Асбобҳоро филтр кунед ё аз AI пурсед...',
    aiFind: 'Ҷустуҷӯи AI',
    noTools: 'Асбобҳо ёфт нашуданд',
    noToolsDesc: 'Мо ягон асбоберо, ки ба дархости шумо мувофиқат кунад, пайдо карда натавонистем.',
    clickToSearch: 'Барои ҷустуҷӯ дар веб тугмаи Ҷустуҷӯи AI-ро пахш кунед.',
    footer: 'Бо дастгирии Gemini Flash & Pro.',
    tagline: 'NavAI: Маҷмӯаи интихобшудаи асбобҳои AI барои созандагон.',
    featuredTools: 'Асбобҳои Мунтахаб',
    categories: {
      [ToolCategory.ALL]: 'Ҳама асбобҳо',
      [ToolCategory.TEXT]: 'Матн ва Навиштан',
      [ToolCategory.IMAGE]: 'Эҷоди тасвир',
      [ToolCategory.VIDEO]: 'Эҷоди видео',
      [ToolCategory.AUDIO]: 'Аудио ва Мусиқӣ',
      [ToolCategory.CODING]: 'Барномасозӣ',
      [ToolCategory.PRODUCTIVITY]: 'Маҳсулнокӣ',
      [ToolCategory.BUSINESS]: 'Тиҷорат ва Маркетинг',
    },
    toolCard: {
      aiFound: 'AI ЁФТ',
      quickInfo: 'Маълумоти фаврӣ',
      loaded: 'Бор карда шуд',
      visitSite: 'Боздид аз сайт',
      quickSummary: 'Хулосаи фаврӣ:',
    },
    chatBot: {
      title: 'Ёрдамчии AI',
      online: 'Онлайн • Бо Gemini',
      placeholder: 'Тавсия пурсед...',
      initialMessage: 'Салом! Ман метавонам ба шумо дар ёфтани асбоби дурусти AI кӯмак кунам. Имрӯз шумо чӣ сохтан ё эҷод кардан мехоҳед?',
      error: 'Бубахшед, ҳоло ман дар пайвастшавӣ мушкилӣ дорам.'
    }
  },
  hy: {
    title: 'NavAI',
    directory: 'Տեղեկատու',
    searchPlaceholder: 'Ֆիլտրեք գործիքները կամ խնդրեք AI-ին գտնել նորերը...',
    aiFind: 'AI Որոնում',
    noTools: 'Գործիքներ չեն գտնվել',
    noToolsDesc: 'Մենք չկարողացանք գտնել ձեր հարցմանը համապատասխանող գործիքներ:',
    clickToSearch: 'Փորձեք սեղմել AI Որոնում կոճակը վեբում փնտրելու համար:',
    footer: 'Ապահովված է Gemini Flash & Pro-ով:',
    tagline: 'NavAI. Շինարարների համար նախատեսված AI գործիքների ընտրանի:',
    featuredTools: 'Ընտրված Գործիքներ',
    categories: {
      [ToolCategory.ALL]: 'Բոլոր գործիքները',
      [ToolCategory.TEXT]: 'Տեքստ և Գրառում',
      [ToolCategory.IMAGE]: 'Պատկերների ստեղծում',
      [ToolCategory.VIDEO]: 'Տեսանյութերի ստեղծում',
      [ToolCategory.AUDIO]: 'Աուդիո և Երաժշտություն',
      [ToolCategory.CODING]: 'Ծրագրավորում',
      [ToolCategory.PRODUCTIVITY]: 'Արտադրողականություն',
      [ToolCategory.BUSINESS]: 'Բիզնես և Մարքեթինգ',
    },
    toolCard: {
      aiFound: 'AI ԳՏԱՎ',
      quickInfo: 'Արագ տեղեկություն',
      loaded: 'Բեռնված է',
      visitSite: 'Այցելել կայք',
      quickSummary: 'Արագ ամփոփում.',
    },
    chatBot: {
      title: 'AI Օգնական',
      online: 'Առցանց • Gemini-ի կողմից',
      placeholder: 'Խնդրեք առաջարկություն...',
      initialMessage: 'Ողջույն! Ես կարող եմ օգնել ձեզ գտնել ճիշտ AI գործիքը: Ի՞նչ եք ցանկանում կառուցել կամ ստեղծել այսօր:',
      error: 'Կներեք, ես հիմա կապի հետ կապված խնդիրներ ունեմ:'
    }
  },
  ro: {
    title: 'NavAI',
    directory: 'Director',
    searchPlaceholder: 'Filtrează uneltele sau cere AI să găsească altele noi...',
    aiFind: 'Căutare AI',
    noTools: 'Nu s-au găsit unelte',
    noToolsDesc: 'Nu am putut găsi unelte care să corespundă interogării tale.',
    clickToSearch: 'Încearcă să apeși Căutare AI pentru a căuta pe web.',
    footer: 'Produs de Gemini Flash & Pro.',
    tagline: 'NavAI: O colecție curatoriată de instrumente AI pentru constructori.',
    featuredTools: 'Instrumente Recomandate',
    categories: {
      [ToolCategory.ALL]: 'Toate uneltele',
      [ToolCategory.TEXT]: 'Text și Scriere',
      [ToolCategory.IMAGE]: 'Generare Imagini',
      [ToolCategory.VIDEO]: 'Creare Video',
      [ToolCategory.AUDIO]: 'Audio și Muzică',
      [ToolCategory.CODING]: 'Programare',
      [ToolCategory.PRODUCTIVITY]: 'Productivitate',
      [ToolCategory.BUSINESS]: 'Afaceri și Marketing',
    },
    toolCard: {
      aiFound: 'AI GĂSIT',
      quickInfo: 'Info Rapid',
      loaded: 'Încărcat',
      visitSite: 'Vizitează Site',
      quickSummary: 'Rezumat rapid:',
    },
    chatBot: {
      title: 'Asistent AI',
      online: 'Online • Cu Gemini',
      placeholder: 'Cere o recomandare...',
      initialMessage: 'Salut! Te pot ajuta să găsești unealta AI potrivită. Ce vrei să construiești sau să creezi astăzi?',
      error: 'Îmi pare rău, am probleme de conectare acum.'
    }
  }
};
