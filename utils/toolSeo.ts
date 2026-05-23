import { Tool } from '../types';

export interface ToolSeoContent {
  title: string;
  metaDescription: string;
  heroTitle: string;
  overview: string[];
  features: string[];
  tutorialTitle: string;
  tutorialSteps: string[];
  specs: Record<string, string>;
  faq: { question: string; answer: string }[];
}

const localLlmAlternatives = 'Ollama, LM Studio, GPT4All, Jan, Open WebUI';

const TOOL_SEO: Record<string, ToolSeoContent> = {
  'stakly': {
    title: 'Stakly.dev Review 2026: Prompt-to-App AI Tool, Features & Alternatives | NavAI',
    metaDescription: 'Stakly.dev review for builders comparing prompt-to-app AI tools, no-code app generation, web app features, pricing, and alternatives.',
    heroTitle: 'Stakly.dev Review: Prompt-to-App AI Web App Builder',
    overview: [
      'Stakly.dev is a prompt-to-app AI platform for turning plain text requirements into production-ready web applications. It is most relevant for founders, product teams, and builders who want to move from an idea to a working web app faster than a traditional design-and-code workflow.',
      'The strongest search intent around Stakly.dev is not just the brand name. Users also compare it with AI app builders, no-code web app tools, and prompt-to-app workflows such as Mural-style product planning to working application handoff.'
    ],
    features: [
      'Prompt-to-app workflow for creating web apps from natural language requirements',
      'Useful for MVPs, internal tools, landing pages, and early product prototypes',
      'No-code friendly flow for non-technical founders and product operators',
      'Helps convert planning notes and product ideas into structured web app output',
      'Best evaluated alongside other AI app builders and no-code development tools'
    ],
    tutorialTitle: 'How to evaluate Stakly.dev for prompt-to-app projects',
    tutorialSteps: [
      'Start with a specific app brief that includes users, screens, data, and desired workflow',
      'Generate a first version in Stakly.dev and compare the output against your original requirements',
      'Check whether the generated app can be edited, exported, deployed, or connected to your preferred stack',
      'Compare the result with alternatives for no-code app building, AI agents, and product prototyping'
    ],
    specs: {
      'Best For': 'Prompt-to-app prototypes, AI-generated web apps, MVP exploration',
      'Primary Users': 'Founders, indie hackers, product managers, no-code builders',
      'Category': 'AI app builder / no-code development',
      'Alternatives To Compare': 'Bolt, Lovable, Replit, Bubble, Framer, Webflow'
    },
    faq: [
      {
        question: 'What is Stakly.dev used for?',
        answer: 'Stakly.dev is used to generate web applications from plain text prompts, making it useful for MVPs, prototypes, and no-code product experiments.'
      },
      {
        question: 'Is Stakly.dev a no-code tool?',
        answer: 'Stakly.dev is positioned as an AI app builder, so it can help non-technical users create app-like outputs without starting from manual code.'
      },
      {
        question: 'What are Stakly.dev alternatives?',
        answer: 'Common alternatives to compare include Bolt, Lovable, Replit, Bubble, Framer, Webflow, and other AI app builder platforms.'
      }
    ]
  },
  'ollama': {
    title: 'Ollama Review 2026: Run Local LLMs on Mac, Windows & Linux | NavAI',
    metaDescription: 'Ollama review for running local LLMs, open-source AI models, private offline AI, setup steps, features, and alternatives like LM Studio.',
    heroTitle: 'Ollama Review: Run Local LLMs on Your Computer',
    overview: [
      'Ollama is one of the most popular ways to download and run open-source large language models locally. It is especially useful for developers, researchers, and privacy-conscious users who want local AI models without relying on a hosted chatbot for every task.',
      'The biggest reason to try Ollama is control: you can run supported models on your own machine, experiment through a simple CLI, and build local AI workflows with tools such as Open WebUI or developer integrations.'
    ],
    features: [
      'Run supported open-source LLMs locally from a simple command-line workflow',
      'Useful for private AI experiments, local development, and offline model testing',
      'Works well with model families such as Llama, Mistral, Gemma, and other local models',
      'Developer-friendly setup for APIs, local apps, and AI coding experiments',
      'Strong alternative to hosted chat tools when privacy and local control matter'
    ],
    tutorialTitle: 'How to start with Ollama',
    tutorialSteps: [
      'Install Ollama from the official website for your operating system',
      'Choose a model that fits your machine, such as a smaller Llama or Mistral variant',
      'Run the model locally from the command line and test a few prompts',
      'Add a UI or integration such as Open WebUI if you want a browser-based chat experience'
    ],
    specs: {
      'Best For': 'Local LLMs, private AI, developer testing, offline model experiments',
      'Primary Interface': 'Command line and local API',
      'Pricing': 'Free',
      'Alternatives To Compare': localLlmAlternatives
    },
    faq: [
      {
        question: 'Is Ollama free?',
        answer: 'Yes. Ollama is free to use for downloading and running supported local AI models on your own computer.'
      },
      {
        question: 'Is Ollama private?',
        answer: 'Ollama can run models locally, which can improve privacy compared with sending every prompt to a hosted AI service. Your actual privacy depends on your model, integrations, and setup.'
      },
      {
        question: 'What are the best Ollama alternatives?',
        answer: `Popular alternatives include ${localLlmAlternatives}. LM Studio is often easier for users who prefer a desktop app instead of a CLI.`
      }
    ]
  },
  'lm-studio': {
    title: 'LM Studio Review 2026: Run Local AI Models Without Coding | NavAI',
    metaDescription: 'LM Studio review covering local LLM chat, offline AI models, desktop setup, privacy benefits, features, and alternatives like Ollama.',
    heroTitle: 'LM Studio Review: Run Local AI Models Without Coding',
    overview: [
      'LM Studio is a desktop app for discovering, downloading, and chatting with local AI models. It is a strong option for people who want the benefits of local LLMs but prefer a visual interface over a command-line workflow.',
      'The tool is most useful for testing open-source models, comparing model behavior, and running private AI chats on your own machine. It is often compared with Ollama because both focus on local AI, but LM Studio is generally more approachable for desktop users.'
    ],
    features: [
      'Desktop interface for discovering and running local LLMs',
      'Useful for offline AI chat, model comparison, and private experimentation',
      'Lower learning curve than CLI-first local AI tools',
      'Good fit for writers, researchers, students, and non-developers testing open models',
      'Can be compared with Ollama when choosing between GUI and command-line workflows'
    ],
    tutorialTitle: 'How to start with LM Studio',
    tutorialSteps: [
      'Install LM Studio from the official website',
      'Browse compatible local AI models and choose one that fits your hardware',
      'Download the model and start a local chat session',
      'Compare responses across models before using one for daily research or writing tasks'
    ],
    specs: {
      'Best For': 'Local AI chat, offline model testing, desktop LLM workflows',
      'Primary Interface': 'Desktop application',
      'Pricing': 'Free',
      'Alternatives To Compare': localLlmAlternatives
    },
    faq: [
      {
        question: 'Is LM Studio free?',
        answer: 'LM Studio is free to download and use for running compatible local AI models on your desktop.'
      },
      {
        question: 'LM Studio vs Ollama: which is better?',
        answer: 'LM Studio is usually easier for users who want a desktop interface. Ollama is often better for developers who prefer a CLI, local API, and scriptable workflows.'
      },
      {
        question: 'Can LM Studio run AI models offline?',
        answer: 'Yes. After downloading a compatible model, LM Studio can run local AI chat on your machine without depending on a hosted chatbot for each prompt.'
      }
    ]
  }
};

export const getToolSeoContent = (tool: Tool): ToolSeoContent | undefined => TOOL_SEO[tool.id];
