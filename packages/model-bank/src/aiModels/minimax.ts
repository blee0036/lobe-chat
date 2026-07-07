import { AIChatModelCard, AIImageModelCard } from '../types/aiModel';

const minimaxChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576,
    description:
      'MiniMax M3 is a native multimodal agent model with 1M context and text, image and video input support.',
    displayName: 'MiniMax M3',
    enabled: true,
    id: 'MiniMax-M3',
    maxOutput: 512_000,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput_cacheRead', rate: 0.06, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'MiniMax M2.7 is a recent agentic productivity and coding model.',
    displayName: 'MiniMax M2.7',
    enabled: true,
    id: 'MiniMax-M2.7',
    maxOutput: 196_608,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput', rate: 0.18, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.72, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'High-speed variant of MiniMax M2.7 for lower-latency agent workflows.',
    displayName: 'MiniMax M2.7 Highspeed',
    id: 'MiniMax-M2.7-highspeed',
    maxOutput: 196_608,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'MiniMax M2.5 is optimized for real-world productivity, coding and tool use.',
    displayName: 'MiniMax M2.5',
    enabled: true,
    id: 'MiniMax-M2.5',
    maxOutput: 196_608,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput', rate: 0.12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.48, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description: 'High-speed variant of MiniMax M2.5 for fast coding and productivity workloads.',
    displayName: 'MiniMax M2.5 Highspeed',
    id: 'MiniMax-M2.5-highspeed',
    maxOutput: 196_608,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 204_800,
    description:
      'MiniMax M2.1 is a recent M2-series agentic model with structured outputs and tool use.',
    displayName: 'MiniMax M2.1',
    id: 'MiniMax-M2.1',
    maxOutput: 131_072,
    pricing: {
      currency: 'USD',
      units: [
        { name: 'textInput_cacheRead', rate: 0.03, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 204_800,
    description: '专为高效编码与Agent工作流而生',
    displayName: 'MiniMax M2',
    enabled: true,
    id: 'MiniMax-M2',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-27',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 1_000_192,
    description: '全新自研推理模型。全球领先：80K 思维链 x 1M 输入，效果比肩海外顶尖模型',
    displayName: 'MiniMax M1',
    id: 'MiniMax-M1',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-16',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_000_192,
    description:
      '在 MiniMax-01系列模型中，我们做了大胆创新：首次大规模实现线性注意力机制，传统 Transformer架构不再是唯一的选择。这个模型的参数量高达4560亿，其中单次激活459亿。模型综合性能比肩海外顶尖模型，同时能够高效处理全球最长400万token的上下文，是GPT-4o的32倍，Claude-3.5-Sonnet的20倍。',
    displayName: 'MiniMax Text 01',
    id: 'MiniMax-Text-01',
    maxOutput: 40_000,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-15',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
];

const minimaxImageModels: AIImageModelCard[] = [
  {
    description: '全新图像生成模型，画面表现细腻，支持文生图、图生图',
    displayName: 'Image 01',
    enabled: true,
    id: 'image-01',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
  {
    description: '图像生成模型，画面表现细腻，支持文生图并进行画风设置',
    displayName: 'Image 01 Live',
    enabled: true,
    id: 'image-01-live',
    parameters: {
      aspectRatio: {
        default: '1:1',
        enum: ['1:1', '16:9', '4:3', '3:2', '2:3', '3:4', '9:16', '21:9'],
      },
      prompt: {
        default: '',
      },
      seed: { default: null },
    },
    releasedAt: '2025-02-28',
    type: 'image',
  },
];

export const allModels = [...minimaxChatModels, ...minimaxImageModels];

export default allModels;
