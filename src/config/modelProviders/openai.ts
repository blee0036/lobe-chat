import { ModelProviderCard } from '@/types/llm';

// ref:
// https://platform.openai.com/docs/models
// https://platform.openai.com/docs/deprecations
const OpenAI: ModelProviderCard = {
  chatModels: [
    {
      description: 'Currently points to gpt-4o-mini-2024-07-18',
      displayName: 'GPT-4o mini',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini',
      maxOutput: 16_385,
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'Currently points to gpt-4o-2024-05-13',
      displayName: 'GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o',
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'GPT-4 Turbo with Vision',
      displayName: 'GPT-4 Turbo',
      enabled: true,
      functionCall: true,
      id: 'gpt-4-turbo',
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'GPT-4 Turbo 视觉版 (240409)',
      displayName: 'GPT-4 Turbo Vision (240409)',
      functionCall: true,
      id: 'gpt-4-turbo-2024-04-09',
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'Currently points to gpt-4-0125-preview',
      displayName: 'GPT-4 Turbo Preview',
      functionCall: true,
      id: 'gpt-4-turbo-preview',
      tokens: 128_000,
    },
    {
      displayName: 'GPT-4 Turbo Preview (0125)',
      functionCall: true,
      id: 'gpt-4-0125-preview',
      tokens: 128_000,
    },
    {
      description: 'Currently points to gpt-4-1106-vision-preview', // Will be discontinued on December 6, 2024
      displayName: 'GPT-4 Turbo Vision Preview',
      id: 'gpt-4-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 Turbo Vision Preview (1106)', // Will be discontinued on December 6, 2024
      id: 'gpt-4-1106-vision-preview',
      tokens: 128_000,
      vision: true,
    },
    {
      displayName: 'GPT-4 Turbo Preview (1106)',
      functionCall: true,
      id: 'gpt-4-1106-preview',
      tokens: 128_000,
    },
    {
      description: 'Currently points to gpt-4-0613',
      displayName: 'GPT-4',
      functionCall: true,
      id: 'gpt-4',
      tokens: 8192,
    },
    {
      displayName: 'GPT-4 (0613)',
      functionCall: true,
      id: 'gpt-4-0613',
      tokens: 8192,
    },
    {
      description: 'Currently points to gpt-4-32k-0613', // Will be discontinued on June 6, 2025
      displayName: 'GPT-4 32K',
      functionCall: true,
      id: 'gpt-4-32k',
      tokens: 32_768,
    },
    {
      displayName: 'GPT-4 32K (0613)', // Will be discontinued on June 6, 2025
      functionCall: true,
      id: 'gpt-4-32k-0613',
      tokens: 32_768,
    },
    {
      description:
        'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
      displayName: 'GPT-3.5 Turbo',
      functionCall: true,
      id: 'gpt-3.5-turbo',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (0125)',
      functionCall: true,
      id: 'gpt-3.5-turbo-0125',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (1106)',
      functionCall: true,
      id: 'gpt-3.5-turbo-1106',
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo Instruct',
      id: 'gpt-3.5-turbo-instruct',
      tokens: 4096,
    },
    {
      description: 'Currently points to gpt-3.5-turbo-16k-0613', // Will be discontinued on September 13, 2024
      displayName: 'GPT-3.5 Turbo 16K',
      id: 'gpt-3.5-turbo-16k',
      legacy: true,
      tokens: 16_385,
    },
    {
      displayName: 'GPT-3.5 Turbo (0613)', // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-0613',
      legacy: true,
      tokens: 4096,
    },
    {
      description: 'Currently points to gpt-3.5-turbo-16k-0613', // Will be discontinued on September 13, 2024
      id: 'gpt-3.5-turbo-16k-0613',
      legacy: true,
      tokens: 16_385,
    },
    {
      description: 'Currently points to gpt-4o-mini-2024-07-18',
      displayName: 'GPT-4o mini 2024-07-18',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-mini-2024-07-18',
      maxOutput: 16_385,
      tokens: 128_000,
      vision: true,
    },
    {
      description: 'Currently points to gpt-4o-2024-05-13',
      displayName: 'GPT-4o 2024-05-13',
      enabled: true,
      functionCall: true,
      id: 'gpt-4o-2024-05-13',
      tokens: 128_000,
      vision: true,
    },
    {
      description: '擅长通用对话任务',
      displayName: 'DeepSeek-V2',
      enabled: true,
      functionCall: true,
      id: 'deepseek-chat',
      tokens: 128_000,
    },
    {
      description: '擅长处理编程和数学任务',
      displayName: 'DeepSeek-Coder-V2',
      enabled: true,
      functionCall: true,
      id: 'deepseek-coder',
      tokens: 128_000,
    },
    {
      description:
        'Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of our mid-tier model, Claude 3 Sonnet.',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-5-sonnet-20240620',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Claude 3.5 Sonnet raises the industry bar for intelligence, outperforming competitor models and Claude 3 Opus on a wide range of evaluations, with the speed and cost of our mid-tier model, Claude 3 Sonnet.',
      displayName: 'Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3_5-sonnet',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: 'Claude 3 Sonnet 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet-20240229',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: 'Claude 3 Opus 20240229',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus-20240229',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: 'Claude 3 Haiku 20240307',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku-20240307',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Ideal balance of intelligence and speed for enterprise workloads. Maximum utility at a lower price, dependable, balanced for scaled deployments',
      displayName: 'Claude 3 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'claude-3-sonnet',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Most powerful model for highly complex tasks. Top-level performance, intelligence, fluency, and understanding',
      displayName: 'Claude 3 Opus',
      enabled: true,
      functionCall: true,
      id: 'claude-3-opus',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      description:
        'Fastest and most compact model for near-instant responsiveness. Quick and accurate targeted performance',
      displayName: 'Claude 3 Haiku',
      enabled: true,
      functionCall: true,
      id: 'claude-3-haiku',
      maxOutput: 4096,
      tokens: 200_000,
      vision: true,
    },
    {
      displayName: 'Claude 2.1',
      enabled: false,
      id: 'claude-2.1',
      maxOutput: 4096,
      tokens: 200_000,
    },
    {
      displayName: 'Claude 2.0',
      enabled: false,
      id: 'claude-2.0',
      maxOutput: 4096,
      tokens: 100_000,
    },
    {
      displayName: 'Claude Instant 1.2',
      enabled: false,
      id: 'claude-instant-1.2',
      maxOutput: 4096,
      tokens: 100_000,
    },
    {
      description: 'A legacy text-only model optimized for chat conversations',
      displayName: 'PaLM 2 Chat (Legacy)',
      id: 'chat-bison-001',
      legacy: true,
      maxOutput: 1024,
      // tokens: 4096 + 1024, // none tokens test
    },
    {
      description: 'A legacy model that understands text and generates text as an output',
      displayName: 'PaLM 2 (Legacy)',
      id: 'text-bison-001',
      legacy: true,
      maxOutput: 1024,
      tokens: 8196 + 1024,
    },
    {
      description: 'The best model for scaling across a wide range of tasks',
      displayName: 'Gemini 1.0 Pro',
      functionCall: true,
      id: 'gemini-pro',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description: 'The best image understanding model to handle a broad range of applications',
      displayName: 'Gemini 1.0 Pro Vision',
      id: 'gemini-1.0-pro-vision-latest',
      maxOutput: 4096,
      tokens: 12_288 + 4096,
      vision: true,
    },
    {
      description: 'The best image understanding model to handle a broad range of applications',
      displayName: 'Gemini 1.0 Pro Vision',
      id: 'gemini-pro-vision',
      maxOutput: 4096,
      tokens: 12_288 + 4096,
      vision: true,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. This is a stable model that supports tuning.',
      displayName: 'Gemini 1.0 Pro 001 (Tuning)',
      functionCall: true,
      id: 'gemini-1.0-pro-001',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. Released April 9, 2024.',
      displayName: 'Gemini 1.0 Pro 002 (Tuning)',
      id: 'gemini-1.0-pro-002',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description:
        'The best model for scaling across a wide range of tasks. This is the latest model.',
      displayName: 'Gemini 1.0 Pro Latest',
      id: 'gemini-1.0-pro-latest',
      maxOutput: 2048,
      tokens: 30_720 + 2048,
    },
    {
      description: 'Fast and versatile multimodal model for scaling across diverse tasks',
      displayName: 'Gemini 1.5 Flash',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-flash-latest',
      maxOutput: 8192,
      tokens: 1_048_576 + 8192,
      vision: true,
    },
    {
      description: 'Mid-size multimodal model that supports up to 1 million tokens',
      displayName: 'Gemini 1.5 Pro',
      enabled: true,
      functionCall: true,
      id: 'gemini-1.5-pro-latest',
      maxOutput: 8192,
      tokens: 1_048_576 + 8192,
      vision: true,
    },
    {
      description: 'The most capable model for highly complex tasks',
      displayName: 'Gemini 1.0 Ultra',
      id: 'gemini-ultra',
      maxOutput: 2048,
      tokens: 32_768,
    },
    {
      description: '通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Turbo',
      enabled: true,
      id: 'qwen-turbo',
      tokens: 8192,
    },
    {
      description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
      displayName: 'Qwen Plus',
      enabled: true,
      id: 'qwen-plus',
      tokens: 30_720,
    },
    {
      description:
        '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
      displayName: 'Qwen Max',
      enabled: true,
      id: 'qwen-max',
      tokens: 8192,
    },
    {
      displayName: 'Command R',
      id: 'command-r',
      tokens: 131_072, // https://huggingface.co/CohereForAI/c4ai-command-r-v01/blob/main/config.json
    },
  ],
  checkModel: 'gpt-4o-mini',
  enabled: true,
  id: 'openai',
  modelList: { showModelFetcher: true },
  name: 'OpenAI',
};

export default OpenAI;
