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
    tags: ['avatar', 'presentation', 'business']
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
    noToolsDesc: '未找到匹配您查询的工具。',
    clickToSearch: '尝试点击 AI 搜索以在网络上查找。',
    footer: '由 Gemini Flash & Pro 提供支持。',
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