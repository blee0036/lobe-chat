import { ModelParamsSchema } from '../standard-parameters';
import {
  AIChatModelCard,
  AIEmbeddingModelCard,
  AIImageModelCard,
  AIRealtimeModelCard,
  AISTTModelCard,
  AITTSModelCard,
} from '../types/aiModel';

export const gptImage1ParamsSchema: ModelParamsSchema = {
  imageUrls: { default: [] },
  prompt: { default: '' },
  size: {
    default: 'auto',
    enum: ['auto', '1024x1024', '1536x1024', '1024x1536'],
  },
};

export const openaiChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description: 'GPT-5.2 pro 使用更多计算来更深入地思考，并持续提供更好的答案。',
    displayName: 'GPT-5.2 pro',
    id: 'gpt-5.2-pro',
    maxOutput: 272_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-06',
    settings: {
      extendParams: ['textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      '跨领域编码和代理任务的最佳模型。GPT-5.2 在准确性、速度、推理、上下文识别、结构化思维和问题解决方面实现了飞跃。',
    displayName: 'GPT-5.2',
    enabled: true,
    id: 'gpt-5.2',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      'ChatGPT 中使用的 GPT-5.2 模型。结合了强大的语言理解与生成能力，适合对话式交互应用。',
    displayName: 'GPT-5.2 Chat',
    enabled: true,
    id: 'gpt-5.2-chat-latest',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      '跨领域编码和代理任务的最佳模型。GPT-5.1 在准确性、速度、推理、上下文识别、结构化思维和问题解决方面实现了飞跃。',
    displayName: 'GPT-5.1',
    enabled: true,
    id: 'gpt-5.1',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description: 'GPT-5.1 Codex Max 使用更多计算来更深入地思考，并持续提供更好的答案。',
    displayName: 'GPT-5.1 Codex Max',
    id: 'gpt-5.1-codex-max',
    maxOutput: 272_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-06',
    settings: {
      extendParams: ['textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      'ChatGPT 中使用的 GPT-5.1 模型。结合了强大的语言理解与生成能力，适合对话式交互应用。',
    displayName: 'GPT-5.1 Chat',
    enabled: true,
    id: 'gpt-5.1-chat-latest',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description: 'GPT-5 pro 使用更多计算来更深入地思考，并持续提供更好的答案。',
    displayName: 'GPT-5 pro',
    id: 'gpt-5-pro',
    maxOutput: 272_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 120, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-10-06',
    settings: {
      extendParams: ['textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description: 'GPT-5 Codex 是一个针对 Codex 或类似环境中的代理编码任务优化的 GPT-5 版本。',
    displayName: 'GPT-5 Codex',
    id: 'gpt-5-codex',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-15',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      '跨领域编码和代理任务的最佳模型。GPT-5 在准确性、速度、推理、上下文识别、结构化思维和问题解决方面实现了飞跃。',
    displayName: 'GPT-5',
    enabled: true,
    id: 'gpt-5',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      '更快、更经济高效的 GPT-5 版本，适用于明确定义的任务。在保持高质量输出的同时，提供更快的响应速度。',
    displayName: 'GPT-5 mini',
    enabled: true,
    id: 'gpt-5-mini',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 400_000,
    description: '最快、最经济高效的 GPT-5 版本。非常适合需要快速响应且成本敏感的应用场景。',
    displayName: 'GPT-5 nano',
    id: 'gpt-5-nano',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.05, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.005, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    settings: {
      extendParams: ['gpt5ReasoningEffort', 'textVerbosity'],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 400_000,
    description:
      'ChatGPT 中使用的 GPT-5 模型。结合了强大的语言理解与生成能力，适合对话式交互应用。',
    displayName: 'GPT-5 Chat',
    enabled: true,
    id: 'gpt-5-chat-latest',
    maxOutput: 128_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.125, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'OpenAI GPT-OSS 120B 是一款拥有 1200 亿参数的顶尖语言模型，内置浏览器搜索和代码执行功能，并具备推理能力。',
    displayName: 'GPT OSS 120B',
    id: 'gpt-oss-120b',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-06',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o4-mini 是我们最新的小型 o 系列模型。 它专为快速有效的推理而优化，在编码和视觉任务中表现出极高的效率和性能。',
    displayName: 'o4-mini',
    id: 'o4-mini',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.275, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-17',
    settings: {
      extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o4-mini-deep-research 是我们更快速、更实惠的深度研究模型——非常适合处理复杂的多步骤研究任务。它可以从互联网上搜索和综合信息，也可以通过 MCP 连接器访问并利用你的自有数据。',
    displayName: 'o4-mini Deep Research',
    id: 'o4-mini-deep-research',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-26',
    settings: {
      extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o3-pro 模型使用更多的计算来更深入地思考并始终提供更好的答案，仅支持 Responses API 下使用。',
    displayName: 'o3-pro',
    id: 'o3-pro',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-10',
    settings: {
      extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o3 是一款全能强大的模型，在多个领域表现出色。它为数学、科学、编程和视觉推理任务树立了新标杆。它也擅长技术写作和指令遵循。用户可利用它分析文本、代码和图像，解决多步骤的复杂问题。',
    displayName: 'o3',
    id: 'o3',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-16',
    settings: {
      extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o3-deep-research 是我们最先进的深度研究模型，专为处理复杂的多步骤研究任务而设计。它可以从互联网上搜索和综合信息，也可以通过 MCP 连接器访问并利用你的自有数据。',
    displayName: 'o3 Deep Research',
    id: 'o3-deep-research',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-26',
    settings: {
      extendParams: ['reasoningEffort'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o3-mini 是我们最新的小型推理模型，在与 o1-mini 相同的成本和延迟目标下提供高智能。',
    displayName: 'o3-mini',
    id: 'o3-mini',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.55, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-31',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o1 系列模型经过强化学习训练，能够在回答前进行思考，并执行复杂的推理任务。o1-pro 模型使用了更多计算资源，以进行更深入的思考，从而持续提供更优质的回答。',
    displayName: 'o1-pro',
    id: 'o1-pro',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 150, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 600, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-19',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 128_000,
    description:
      'o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。',
    displayName: 'o1-mini',
    id: 'o1-mini', // deprecated on 2025-10-27
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.55, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-12',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'o1是OpenAI新的推理模型，支持图文输入并输出文本，适用于需要广泛通用知识的复杂任务。该模型具有200K上下文和2023年10月的知识截止日期。',
    displayName: 'o1',
    id: 'o1',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-17',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_047_576,
    description: 'GPT-4.1 是我们用于复杂任务的旗舰模型。它非常适合跨领域解决问题。',
    displayName: 'GPT-4.1',
    id: 'gpt-4.1',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
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
    contextWindowTokens: 1_047_576,
    description:
      'GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。',
    displayName: 'GPT-4.1 mini',
    id: 'gpt-4.1-mini',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_047_576,
    description: 'GPT-4.1 nano 是最快，最具成本效益的GPT-4.1模型。',
    displayName: 'GPT-4.1 nano',
    id: 'gpt-4.1-nano',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。',
    displayName: 'GPT-4o mini',
    id: 'gpt-4o-mini',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-07-18',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 128_000,
    description: 'Currently points to gpt-4o-mini-2024-07-18',
    displayName: 'GPT-4o mini 2024-07-18',
    enabled: true,
    id: 'gpt-4o-mini-2024-07-18',
    maxOutput: 16_384,
    releasedAt: '2024-07-18',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o mini 搜索预览版是一个专门训练用于理解和执行网页搜索查询的模型，使用的是 Chat Completions API。除了令牌费用之外，网页搜索查询还会按每次工具调用收取费用。',
    displayName: 'GPT-4o mini Search Preview',
    id: 'gpt-4o-mini-search-preview',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-11',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o',
    id: 'gpt-4o',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-05-13',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT-4o 搜索预览版是一个专门训练用于理解和执行网页搜索查询的模型，使用的是 Chat Completions API。除了令牌费用之外，网页搜索查询还会按每次工具调用收取费用。',
    displayName: 'GPT-4o Search Preview',
    id: 'gpt-4o-search-preview',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-11',
    settings: {
      searchImpl: 'internal',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o 1120',
    id: 'gpt-4o-2024-11-20',
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-20',
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
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'GPT-4o 0513',
    id: 'gpt-4o-2024-05-13',
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-05-13',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'GPT Audio 是面向音频输入输出的通用聊天模型，支持在 Chat Completions API 中使用音频 I/O。',
    displayName: 'GPT Audio',
    id: 'gpt-audio',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },

        { name: 'audioInput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-28',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      //search: true,
    },
    contextWindowTokens: 128_000,
    description: 'GPT-4o Audio Preview 模型，支持音频输入输出',
    displayName: 'GPT-4o Audio Preview',
    id: 'gpt-4o-audio-preview',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-17',
    /*
    settings: {
      searchImpl: 'params',
    },
    */
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      //search: true,
    },
    contextWindowTokens: 128_000,
    description: 'GPT-4o mini Audio 模型，支持音频输入输出',
    displayName: 'GPT-4o mini Audio',
    id: 'gpt-4o-mini-audio-preview',
    maxOutput: 16_384,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-17',
    /*
    settings: {
      searchImpl: 'params',
    },
    */
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      'ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。',
    displayName: 'ChatGPT-4o',
    id: 'chatgpt-4o-latest',
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-08-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo',
    id: 'gpt-4-turbo',
    pricing: {
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Vision 0409',
    id: 'gpt-4-turbo-2024-04-09',
    pricing: {
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-04-09',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview',
    id: 'gpt-4-turbo-preview',
    pricing: {
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview 0125',
    id: 'gpt-4-0125-preview',
    pricing: {
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-01-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。',
    displayName: 'GPT-4 Turbo Preview 1106',
    id: 'gpt-4-1106-preview',
    pricing: {
      units: [
        { name: 'textInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2023-11-06',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4',
    id: 'gpt-4',
    pricing: {
      units: [
        { name: 'textInput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 8192,
    description:
      'GPT-4 提供了一个更大的上下文窗口，能够处理更长的文本输入，适用于需要广泛信息整合和数据分析的场景。',
    displayName: 'GPT-4 0613',
    id: 'gpt-4-0613',
    pricing: {
      units: [
        { name: 'textInput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 60, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2023-06-13',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo',
    id: 'gpt-3.5-turbo',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo 0125',
    id: 'gpt-3.5-turbo-0125',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-01-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 16_384,
    description:
      'GPT 3.5 Turbo，适用于各种文本生成和理解任务，Currently points to gpt-3.5-turbo-0125',
    displayName: 'GPT-3.5 Turbo 1106',
    id: 'gpt-3.5-turbo-1106',
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2023-11-06',
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'GPT 3.5 Turbo，适用于各种文本生成和理解任务，对指令遵循的优化',
    displayName: 'GPT-3.5 Turbo Instruct',
    id: 'gpt-3.5-turbo-instruct',
    pricing: {
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'codex-mini-latest 是 o4-mini 的微调版本，专门用于 Codex CLI。对于直接通过 API 使用，我们推荐从 gpt-4.1 开始。',
    displayName: 'Codex mini',
    id: 'codex-mini-latest',
    maxOutput: 100_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.375, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-01',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 8192,
    description:
      'computer-use-preview 模型是专为“计算机使用工具”设计的专用模型，经过训练以理解并执行计算机相关任务。',
    displayName: 'Computer Use Preview',
    id: 'computer-use-preview',
    maxOutput: 1024,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-11',
    settings: {
      extendParams: ['reasoningEffort'],
    },
    type: 'chat',
  },
  // 官转claude
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Opus 4.5 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4.5',
    enabled: true,
    id: 'claude-opus-4-5-guan-20251101',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-01',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Opus 4.5 Extended thinking 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4.5 Extended thinking',
    enabled: true,
    id: 'claude-opus-4-5-guan-20251101-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-01',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Haiku 4.5 是 Anthropic 最快且最智能的 Haiku 模型，具有闪电般的速度和扩展思考能力。',
    displayName: '官Claude Haiku 4.5',
    enabled: true,
    id: 'claude-haiku-4-5-guan-20251001',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 2, '5m': 1.25 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-16',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Haiku 4.5 Extended thinking 是 Anthropic 最快且最智能的 Haiku 模型，具有闪电般的速度和扩展思考能力。',
    displayName: '官Claude Haiku 4.5 Extended thinking',
    enabled: true,
    id: 'claude-haiku-4-5-guan-20251001-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 2, '5m': 1.25 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-16',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Sonnet 4.5 是 Anthropic 迄今为止最智能的模型。',
    displayName: '官Claude Sonnet 4.5',
    enabled: true,
    id: 'claude-sonnet-4-5-guan-20250929',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-30',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Sonnet 4.5 Extended thinking 是 Anthropic 迄今为止最智能的模型。',
    displayName: '官Claude Sonnet 4.5 Extended thinking',
    enabled: true,
    id: 'claude-sonnet-4-5-guan-20250929-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-30',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4.1 是 Anthropic 最新的用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4.1',
    enabled: true,
    id: 'claude-opus-4-1-guan-20250805',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-08-05',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4.1 Extended thinking 是 Anthropic 最新的用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4.1 Extended thinking',
    enabled: true,
    id: 'claude-opus-4-1-guan-20250805-thinking',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-08-05',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4',
    id: 'claude-opus-4-guan-20250514',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4 Extended thinking 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude Opus 4 Extended thinking',
    id: 'claude-opus-4-guan-20250514-thinking',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Sonnet 4 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。API 用户还可以对模型思考的时间进行细致的控制',
    displayName: '官Claude Sonnet 4',
    enabled: true,
    id: 'claude-sonnet-4-guan-20250514',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Sonnet 4 Extended thinking 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。API 用户还可以对模型思考的时间进行细致的控制',
    displayName: '官Claude Sonnet 4 Extended thinking',
    enabled: true,
    id: 'claude-sonnet-4-guan-20250514-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.7 Sonnet 0219',
    enabled: true,
    id: 'claude-3-7-sonnet-guan-20250219',
    maxOutput: 8192,
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.7 Sonnet Extended thinking',
    enabled: true,
    id: 'claude-3-7-sonnet-guan-20250219-thinking',
    maxOutput: 8192,
    releasedAt: '2025-02-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
    displayName: '官Claude 3.5 Haiku',
    enabled: true,
    id: 'claude-3-5-haiku-guan-20241022',
    maxOutput: 8192,
    releasedAt: '2024-11-05',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.5 Sonnet',
    enabled: true,
    id: 'claude-3-5-sonnet-guan-20241022',
    maxOutput: 8192,
    releasedAt: '2024-10-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: '官Claude 3.5 Sonnet 0620',
    id: 'claude-3-5-sonnet-guan-20240620',
    maxOutput: 8192,
    releasedAt: '2024-06-20',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。',
    displayName: '官Claude 3 Haiku',
    id: 'claude-3-haiku-guan-20240307',
    maxOutput: 4096,
    releasedAt: '2024-03-07',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Sonnet 在智能和速度方面为企业工作负载提供了理想的平衡。它以更低的价格提供最大效用，可靠且适合大规模部署。',
    displayName: '官Claude 3 Sonnet',
    id: 'claude-3-sonnet-guan-20240229',
    maxOutput: 4096,
    releasedAt: '2024-02-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Opus 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: '官Claude 3 Opus',
    enabled: true,
    id: 'claude-3-opus-guan-20240229',
    maxOutput: 4096,
    releasedAt: '2024-02-29',
    type: 'chat',
  },
  // 其他模型补全
  // claude
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Opus 4.5 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4.5',
    enabled: true,
    id: 'claude-opus-4-5-20251101',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-01',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Opus 4.5 Extended thinking 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4.5 Extended thinking',
    enabled: true,
    id: 'claude-opus-4-5-20251101-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-01',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Haiku 4.5 是 Anthropic 最快且最智能的 Haiku 模型，具有闪电般的速度和扩展思考能力。',
    displayName: 'Claude Haiku 4.5',
    enabled: true,
    id: 'claude-haiku-4-5-20251001',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 2, '5m': 1.25 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-16',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Haiku 4.5 Extended thinking 是 Anthropic 最快且最智能的 Haiku 模型，具有闪电般的速度和扩展思考能力。',
    displayName: 'Claude Haiku 4.5 Extended thinking',
    enabled: true,
    id: 'claude-haiku-4-5-20251001-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 2, '5m': 1.25 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-10-16',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Sonnet 4.5 是 Anthropic 迄今为止最智能的模型。',
    displayName: 'Claude Sonnet 4.5',
    enabled: true,
    id: 'claude-sonnet-4-5-20250929',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-30',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      structuredOutput: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Claude Sonnet 4.5 Extended thinking 是 Anthropic 迄今为止最智能的模型。',
    displayName: 'Claude Sonnet 4.5 Extended thinking',
    enabled: true,
    id: 'claude-sonnet-4-5-20250929-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheWrite', rate: 3.75, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-30',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4.1 是 Anthropic 最新的用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4.1',
    enabled: true,
    id: 'claude-opus-4-1-20250805',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-08-05',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4.1 Extended thinking 是 Anthropic 最新的用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4.1 Extended thinking',
    enabled: true,
    id: 'claude-opus-4-1-20250805-thinking',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-08-05',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4',
    id: 'claude-opus-4-20250514',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Opus 4 Extended thinking 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude Opus 4 Extended thinking',
    id: 'claude-opus-4-20250514-thinking',
    maxOutput: 32_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude Sonnet 4 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。API 用户还可以对模型思考的时间进行细致的控制',
    displayName: 'Claude Sonnet 4',
    enabled: true,
    id: 'claude-sonnet-4-20250514',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude Sonnet 4 Extended thinking 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。API 用户还可以对模型思考的时间进行细致的控制',
    displayName: 'Claude Sonnet 4 Extended thinking',
    enabled: true,
    id: 'claude-sonnet-4-20250514-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-23',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.7 Sonnet',
    id: 'claude-3-7-sonnet-20250219',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-02-24',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.7 Sonnet Extended thinking 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.7 Sonnet Extended thinking',
    id: 'claude-3-7-sonnet-20250219-thinking',
    maxOutput: 64_000,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-02-24',
    settings: {
      extendParams: ['disableContextCaching'],
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
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.5 Sonnet v2',
    id: 'claude-3-5-sonnet-20241022',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-10-22',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。',
    displayName: 'Claude 3.5 Sonnet',
    id: 'claude-3-5-sonnet-20240620',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-06-20',
    settings: {
      extendParams: ['disableContextCaching'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。',
    displayName: 'Claude 3.5 Haiku',
    enabled: true,
    id: 'claude-3-5-haiku-20241022',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.08, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 1.6, '5m': 1 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-11-05',
    settings: {
      extendParams: ['disableContextCaching'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。',
    displayName: 'Claude 3 Haiku',
    id: 'claude-3-haiku-20240307',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.03, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 0.5, '5m': 0.3 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-03-07',
    settings: {
      extendParams: ['disableContextCaching'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Sonnet 在智能和速度方面为企业工作负载提供了理想的平衡。它以更低的价格提供最大效用，可靠且适合大规模部署。',
    displayName: 'Claude 3 Sonnet',
    id: 'claude-3-sonnet-20240229', // 弃用日期 2025年7月21日
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 6, '5m': 3.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-02-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description:
      'Claude 3 Opus 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。',
    displayName: 'Claude 3 Opus',
    id: 'claude-3-opus-20240229',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 75, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: { prices: { '1h': 30, '5m': 18.75 }, pricingParams: ['ttl'] },
          name: 'textInput_cacheWrite',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2024-02-29',
    settings: {
      extendParams: ['disableContextCaching'],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 200_000,
    description:
      'Claude 2 为企业提供了关键能力的进步，包括业界领先的 200K token 上下文、大幅降低模型幻觉的发生率、系统提示以及一个新的测试功能：工具调用。',
    displayName: 'Claude 2.1',
    id: 'claude-2.1', // 弃用日期 2025年7月21日
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2023-11-21',
    type: 'chat',
  },
  {
    contextWindowTokens: 100_000,
    description:
      'Claude 2 为企业提供了关键能力的进步，包括业界领先的 200K token 上下文、大幅降低模型幻觉的发生率、系统提示以及一个新的测试功能：工具调用。',
    displayName: 'Claude 2.0',
    id: 'claude-2.0', // 弃用日期 2025年7月21日
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2023-07-11',
    type: 'chat',
  },
  // gemini
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 3.0 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 3.0 Pro Preview',
    enabled: true,
    id: 'gemini-3-pro-preview',
    maxOutput: 65_536,
    pricing: {
      units: [
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 200_000 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 12, upTo: 200_000 },
            { rate: 18, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-18',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      video: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 3.0 Flash Preview 是 Google 性价比最高的模型，提供全面的功能。',
    displayName: 'Gemini 3.0 Flash Preview',
    enabled: true,
    id: 'gemini-3-flash-preview',
    maxOutput: 65_536,
    pricing: {
      units: [
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.2, upTo: 200_000 },
            { rate: 0.4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 2, upTo: 200_000 },
            { rate: 4, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 12, upTo: 200_000 },
            { rate: 18, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-11-18',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description:
      'Nano Banana Pro 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    displayName: 'Nano Banana Pro (Preview)',
    id: 'gemini-3-pro-image-preview',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.9, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.9, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 90, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-11-20',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro',
    enabled: true,
    id: 'gemini-2.5-pro',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.31, strategy: 'fixed', unit: 'millionTokens' },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.25, upTo: 200_000 },
            { rate: 2.5, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 10, upTo: 200_000 },
            { rate: 15, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-06-17',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro Preview 06-05 (Paid)',
    id: 'gemini-2.5-pro-preview-06-05',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.31, strategy: 'fixed', unit: 'millionTokens' },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.25, upTo: 200_000 },
            { rate: 2.5, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 10, upTo: 200_000 },
            { rate: 15, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-06-05',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Pro Preview 是 Google 最先进的思维模型，能够对代码、数学和STEM领域的复杂问题进行推理，以及使用长上下文分析大型数据集、代码库和文档。',
    displayName: 'Gemini 2.5 Pro Preview 05-06 (Paid)',
    id: 'gemini-2.5-pro-preview-05-06',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.31, strategy: 'fixed', unit: 'millionTokens' },
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.25, upTo: 200_000 },
            { rate: 2.5, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 10, upTo: 200_000 },
            { rate: 15, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-05-06',
    settings: {
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description: 'Gemini 2.5 Flash 是 Google 性价比最高的模型，提供全面的功能。',
    displayName: 'Gemini 2.5 Flash',
    enabled: true,
    id: 'gemini-2.5-flash',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description: 'Gemini 2.5 Flash Preview 是 Google 性价比最高的模型，提供全面的功能。',
    displayName: 'Gemini 2.5 Flash Preview 05-20',
    id: 'gemini-2.5-flash-preview-05-20',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.0375, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-20',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description:
      'Nano Banana 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    displayName: 'Nano Banana',
    enabled: true,
    id: 'gemini-2.5-flash-image',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-09-26',
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description:
      'Nano Banana (Preview) 是 Google 最新、最快、最高效的原生多模态模型，它允许您通过对话生成和编辑图像。',
    displayName: 'Nano Banana (Preview)',
    enabled: true,
    id: 'gemini-2.5-flash-image-preview',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 30, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-26',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description: 'Gemini 2.5 Flash-Lite 是 Google 最小、性价比最高的模型，专为大规模使用而设计。',
    displayName: 'Gemini 2.5 Flash-Lite',
    id: 'gemini-2.5-flash-lite',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-22',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 65_536,
    description:
      'Gemini 2.5 Flash-Lite Preview 是 Google 最小、性价比最高的模型，专为大规模使用而设计。',
    displayName: 'Gemini 2.5 Flash-Lite Preview 06-17',
    id: 'gemini-2.5-flash-lite-preview-06-17',
    maxOutput: 65_536,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-11',
    settings: {
      extendParams: ['thinkingBudget', 'urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description:
      'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
    displayName: 'Gemini 2.0 Flash',
    id: 'gemini-2.0-flash',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description:
      'Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。',
    displayName: 'Gemini 2.0 Flash 001',
    id: 'gemini-2.0-flash-001',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.025, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    settings: {
      extendParams: ['urlContext'],
      searchImpl: 'params',
      searchProvider: 'google',
    },
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 32_768 + 8192,
    description: 'Gemini 2.0 Flash 预览模型，支持图像生成',
    displayName: 'Gemini 2.0 Flash Preview Image Generation',
    id: 'gemini-2.0-flash-preview-image-generation',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageGeneration', rate: 0.039, strategy: 'fixed', unit: 'image' },
      ],
    },
    releasedAt: '2025-05-07',
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description: 'Gemini 2.0 Flash 实验模型，支持图像生成',
    displayName: 'Gemini 2.0 Flash (Image Generation) Experimental',
    id: 'gemini-2.0-flash-exp-image-generation',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-14',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description: 'Gemini 2.0 Flash 模型变体，针对成本效益和低延迟等目标进行了优化。',
    displayName: 'Gemini 2.0 Flash-Lite',
    id: 'gemini-2.0-flash-lite',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description: 'Gemini 2.0 Flash 模型变体，针对成本效益和低延迟等目标进行了优化。',
    displayName: 'Gemini 2.0 Flash-Lite 001',
    id: 'gemini-2.0-flash-lite-001',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    type: 'chat',
  },
  {
    abilities: {
      imageOutput: true,
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 8192,
    description: 'Gemini 2.0 Flash 模型变体，针对成本效益和低延迟等目标进行了优化。',
    displayName: 'Gemini 2.0 Flash Exp',
    id: 'gemini-2.0-flash-exp',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-02-05',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 1_048_576 + 32_768,
    description:
      'LearnLM 是一个实验性的、特定于任务的语言模型，经过训练以符合学习科学原则，可在教学和学习场景中遵循系统指令，充当专家导师等。',
    displayName: 'LearnLM 2.0 Flash Experimental',
    id: 'learnlm-2.0-flash-experimental',
    maxOutput: 32_768,
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 40_959,
    description:
      'LearnLM 是一个实验性的、特定于任务的语言模型，经过训练以符合学习科学原则，可在教学和学习场景中遵循系统指令，充当专家导师等。',
    displayName: 'LearnLM 1.5 Pro Experimental',
    id: 'learnlm-1.5-pro-experimental',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-19',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_008_192,
    description: 'Gemini 1.5 Flash 002 是一款高效的多模态模型，支持广泛应用的扩展。',
    displayName: 'Gemini 1.5 Flash 002',
    id: 'gemini-1.5-flash-002', // Deprecated on 2025-09-24
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.018, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.075, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 2_008_192,
    description:
      'Gemini 1.5 Pro 002 是最新的生产就绪模型，提供更高质量的输出，特别在数学、长上下文和视觉任务方面有显著提升。',
    displayName: 'Gemini 1.5 Pro 002 (Paid)',
    id: 'gemini-1.5-pro-002', // Deprecated on 2025-09-24
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.3125, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-09-24',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_008_192,
    description: 'Gemini 1.5 Flash 8B 是一款高效的多模态模型，支持广泛应用的扩展。',
    displayName: 'Gemini 1.5 Flash 8B',
    id: 'gemini-1.5-flash-8b-latest',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0.01, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.0375, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-10-03',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768 + 8192,
    displayName: 'Gemma 3 1B',
    id: 'gemma-3-1b-it',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768 + 8192,
    displayName: 'Gemma 3 4B',
    id: 'gemma-3-4b-it',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768 + 8192,
    displayName: 'Gemma 3 12B',
    id: 'gemma-3-12b-it',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072 + 8192,
    displayName: 'Gemma 3 27B',
    id: 'gemma-3-27b-it',
    maxOutput: 8192,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 2048 + 8192,
    displayName: 'Gemma 3n E2B',
    id: 'gemma-3n-e2b-it',
    maxOutput: 2048,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 2048 + 8192,
    displayName: 'Gemma 3n E4B',
    id: 'gemma-3n-e4b-it',
    maxOutput: 2048,
    pricing: {
      units: [
        { name: 'textInput_cacheRead', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },

  // deepseek 官方
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 是 DeepSeek 最新发布的通用大模型，支持混合推理架构，具备更强的 Agent 能力。',
    displayName: 'DeepSeek V3.2',
    enabled: true,
    id: 'deepseek-chat',
    maxOutput: 8192,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 思考模式。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。',
    displayName: 'DeepSeek V3.2 Thinking',
    enabled: true,
    id: 'deepseek-reasoner',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-21',
    type: 'chat',
  },

  //cohere 官方
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 256_000,
    description:
      'Command A 是我们迄今为止性能最强的模型，在工具使用、代理、检索增强生成（RAG）和多语言应用场景方面表现出色。Command A 具有 256K 的上下文长度，仅需两块 GPU 即可运行，并且相比于 Command R+ 08-2024，吞吐量提高了 150%。',
    displayName: 'Command A 2503',
    enabled: true,
    id: 'command-a-03-2025',
    maxOutput: 8000,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'command-r-plus 是 command-r-plus-04-2024 的别名，因此如果您在 API 中使用 command-r-plus，实际上指向的就是该模型。',
    displayName: 'Command R+ 2404',
    id: 'command-r-plus-04-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Command R+ 是一个遵循指令的对话模型，在语言任务方面表现出更高的质量、更可靠，并且相比以往模型具有更长的上下文长度。它最适用于复杂的 RAG 工作流和多步工具使用。',
    displayName: 'Command R+ 2408',
    enabled: true,
    id: 'command-r-plus-08-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'command-r 是一种遵循指令的会话模型，与以前的模型相比，它以更高的质量、更可靠的方式和更长的上下文执行语言任务。它可用于复杂的工作流程，如代码生成、检索增强生成（RAG）、工具使用和代理。',
    displayName: 'Command R 2403',
    id: 'command-r-03-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description: 'command-r-08-2024 是 Command R 模型的更新版本，于 2024 年 8 月发布。',
    displayName: 'Command R 2408',
    enabled: true,
    id: 'command-r-08-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'Command R 是一个遵循指令的对话模型，在语言任务方面表现出更高的质量、更可靠，并且相比以往模型具有更长的上下文长度。它可用于复杂的工作流程，如代码生成、检索增强生成（RAG）、工具使用和代理。',
    displayName: 'Command R 2403',
    id: 'command-r-03-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      'command-r7b-12-2024 是一个小型且高效的更新版本，于 2024 年 12 月发布。它在 RAG、工具使用、代理等需要复杂推理和多步处理的任务中表现出色。',
    displayName: 'Command R7B 2412',
    id: 'command-r7b-12-2024',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.0375, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.15, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 4000,
    description:
      '一个遵循指令的对话模型，在语言任务中表现出高质量、更可靠，并且相比我们的基础生成模型具有更长的上下文长度。',
    displayName: 'Command',
    id: 'command',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    description:
      '为了缩短主要版本发布之间的时间间隔，我们推出了 Command 模型的每夜版本。对于 Command 系列，这一版本称为 command-cightly。请注意，command-nightly 是最新、最具实验性且（可能）不稳定的版本。每夜版本会定期更新，且不会提前通知，因此不建议在生产环境中使用。',
    displayName: 'Command Nightly',
    id: 'command-nightly',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 4000,
    description: '一个更小、更快的 Command 版本，几乎同样强大，但速度更快。',
    displayName: 'Command Light',
    id: 'command-light',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 4000,
    description:
      '为了缩短主要版本发布之间的时间间隔，我们推出了 Command 模型的每夜版本。对于 command-light 系列，这一版本称为 command-light-nightly。请注意，command-light-nightly 是最新、最具实验性且（可能）不稳定的版本。每夜版本会定期更新，且不会提前通知，因此不建议在生产环境中使用。',
    displayName: 'Command Light Nightly',
    id: 'command-light-nightly',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    description:
      'Aya Expanse 是一款高性能的 32B 多语言模型，旨在通过指令调优、数据套利、偏好训练和模型合并的创新，挑战单语言模型的表现。它支持 23 种语言。',
    displayName: 'Aya Expanse 32B',
    enabled: true,
    id: 'c4ai-aya-expanse-32b',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 8000,
    description:
      'Aya Expanse 是一款高性能的 8B 多语言模型，旨在通过指令调优、数据套利、偏好训练和模型合并的创新，挑战单语言模型的表现。它支持 23 种语言。',
    displayName: 'Aya Expanse 8B',
    enabled: true,
    id: 'c4ai-aya-expanse-8b',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 16_000,
    description:
      'Aya Vision 是一款最先进的多模态模型，在语言、文本和图像能力的多个关键基准上表现出色。它支持 23 种语言。这个 320 亿参数的版本专注于最先进的多语言表现。',
    displayName: 'Aya Vision 32B',
    enabled: true,
    id: 'c4ai-aya-vision-32b',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 16_000,
    description:
      'Aya Vision 是一款最先进的多模态模型，在语言、文本和图像能力的多个关键基准上表现出色。这个 80 亿参数的版本专注于低延迟和最佳性能。',
    displayName: 'Aya Vision 8B',
    enabled: true,
    id: 'c4ai-aya-vision-8b',
    maxOutput: 4000,
    pricing: {
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },

  // qwen
  {
    abilities: {
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '总参数 1T，激活参数 32B。 非思维模型中，在前沿知识、数学和编码方面达到了顶尖水平，更擅长通用 Agent 任务。 针对代理任务进行了精心优化，不仅能回答问题，还能采取行动。 最适用于即兴、通用聊天和代理体验，是一款无需长时间思考的反射级模型。',
    displayName: 'Kimi K2 Instruct',
    id: 'Moonshot-Kimi-K2-Instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-17',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      '通义千问代码模型开源版。最新的 qwen3-coder-480b-a35b-instruct 是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程、代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder 480B A35B',
    id: 'qwen-3-coder-480b',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 36, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen3-coder-plus',
    },
    contextWindowTokens: 1_048_576,
    description:
      '通义千问代码模型。最新的 Qwen3-Coder 系列模型是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程，代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder Plus',
    id: 'qwen3-coder-plus',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 6 * 0.2, strategy: 'fixed', unit: 'millionTokens' }, // tokens 32K ~ 128K
        { name: 'textInput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen3-coder-flash',
    },
    contextWindowTokens: 1_000_000,
    description:
      '通义千问代码模型。最新的 Qwen3-Coder 系列模型是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程，代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder Flash',
    id: 'qwen3-coder-flash',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1.5 * 0.2, strategy: 'fixed', unit: 'millionTokens' }, // tokens 32K ~ 128K
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-28',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      '通义千问代码模型开源版。最新的 qwen3-coder-480b-a35b-instruct 是基于 Qwen3 的代码生成模型，具有强大的Coding Agent能力，擅长工具调用和环境交互，能够实现自主编程、代码能力卓越的同时兼具通用能力。',
    displayName: 'Qwen3 Coder 480B A35B',
    id: 'qwen3-coder-480b-a35b-instruct',
    maxOutput: 65_536,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 9, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 36, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-235B-A22B）逻辑能力、通用能力、知识增强及创作能力均有大幅提升，适用于高难度强推理场景。',
    displayName: 'Qwen3 235B A22B Thinking 2507',
    enabled: true,
    id: 'qwen3-235b-a22b-thinking-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-25',
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于Qwen3的非思考模式开源模型，相较上一版本（通义千问3-235B-A22B）主观创作能力与模型安全性均有小幅度提升。',
    displayName: 'Qwen3 235B A22B Instruct 2507',
    enabled: true,
    id: 'qwen3-235b-a22b-instruct-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-22',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于Qwen3的思考模式开源模型，相较上一版本（通义千问3-30B-A3B）逻辑能力、通用能力、知识增强及创作能力均有大幅提升，适用于高难度强推理场景。',
    displayName: 'Qwen3 30B A3B Thinking 2507',
    id: 'qwen3-30b-a3b-thinking-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-30',
    settings: {
      extendParams: ['reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      '相较上一版本（Qwen3-30B-A3B）中英文和多语言整体通用能力有大幅提升。主观开放类任务专项优化，显著更加符合用户偏好，能够提供更有帮助性的回复。',
    displayName: 'Qwen3 30B A3B Instruct 2507',
    id: 'qwen3-30b-a3b-instruct-2507',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 235B A22B',
    id: 'qwen3-235b-a22b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 32B',
    id: 'qwen3-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 30B A3B',
    id: 'qwen3-30b-a3b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.75, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 14B',
    id: 'qwen3-14b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 8B',
    id: 'qwen3-8b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 4B',
    id: 'qwen3-4b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 1.7B',
    id: 'qwen3-1.7b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 0.6B',
    id: 'qwen3-0.6b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    config: {
      deploymentName: 'qwq-plus-latest', // expired on 2025-09-02
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen2.5 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平。',
    displayName: 'QwQ Plus',
    id: 'qwq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-06',
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
    config: {
      deploymentName: 'qwen-flash',
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问系列速度最快、成本极低的模型，适合简单任务。',
    displayName: 'Qwen Flash',
    enabled: true,
    id: 'qwen-flash',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          name: 'textInput',
          strategy: 'tiered',
          tiers: [
            { rate: 0.15, upTo: 0.128 },
            { rate: 0.6, upTo: 0.256 },
            { rate: 1.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textOutput',
          strategy: 'tiered',
          tiers: [
            { rate: 1.5, upTo: 0.128 },
            { rate: 6, upTo: 0.256 },
            { rate: 12, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
        {
          name: 'textInput_cacheRead',
          strategy: 'tiered',
          tiers: [
            { rate: 0.15 * 0.2, upTo: 0.128 },
            { rate: 0.6 * 0.2, upTo: 0.256 },
            { rate: 1.2 * 0.2, upTo: 'infinity' },
          ],
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-07-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
    config: {
      deploymentName: 'qwen-turbo-2025-07-15',
    },
    contextWindowTokens: 1_000_000, // Non-thinking mode
    description:
      '通义千问 Turbo 后续不再更新，建议替换为通义千问 Flash 。通义千问超大规模语言模型，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Turbo',
    id: 'qwen-turbo',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.3 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-15',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
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
    config: {
      deploymentName: 'qwen-plus-2025-07-28',
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问超大规模语言模型增强版，支持中文、英文等不同语言输入。',
    displayName: 'Qwen Plus',
    enabled: true,
    id: 'qwen-plus',
    maxOutput: 32_768,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 128_000]': 0.8 * 0.2,
              '[128_000, 256_000]': 2.4 * 0.2,
              '[256_000, infinity]': 4.8 * 0.2,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 128_000]': 0.8,
              '[128_000, 256_000]': 2.4,
              '[256_000, infinity]': 4.8,
            },
            pricingParams: ['textInputRange'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 128_000]_[false]': 2,
              '[0, 128_000]_[true]': 8,
              '[128_000, 256_000]_[false]': 20,

              '[128_000, 256_000]_[true]': 24,
              '[256_000, infinity]_[false]': 48,
              '[256_000, infinity]_[true]': 64,
            },
            pricingParams: ['textInputRange', 'thinkingMode'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    releasedAt: '2025-07-14',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      search: true,
    },
    config: {
      deploymentName: 'qwen-max-2025-01-25',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问千亿级别超大规模语言模型，支持中文、英文等不同语言输入，当前通义千问2.5产品版本背后的API模型。',
    displayName: 'Qwen Max',
    enabled: true,
    id: 'qwen-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 2.4 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    config: {
      deploymentName: 'qwen-long-latest',
    },
    contextWindowTokens: 10_000_000,
    description:
      '通义千问超大规模语言模型，支持长文本上下文，以及基于长文档、多文档等多个场景的对话功能。',
    displayName: 'Qwen Long',
    id: 'qwen-long',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-omni-turbo-latest', // expired on 2025-08-13
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen Omni Turbo',
    id: 'qwen-omni-turbo',
    maxOutput: 2048,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen-Omni 系列模型支持输入多种模态的数据，包括视频、音频、图片、文本，并输出音频与文本。',
    displayName: 'Qwen2.5 Omni 7B',
    id: 'qwen2.5-omni-7b',
    maxOutput: 2048,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-plus-2025-08-15',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问大规模视觉语言模型增强版。大幅提升细节识别能力和文字识别能力，支持超百万像素分辨率和任意长宽比规格的图像。',
    displayName: 'Qwen VL Plus',
    id: 'qwen-vl-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 0.8 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-max-2025-08-13',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问超大规模视觉语言模型。相比增强版，再次提升视觉推理能力和指令遵循能力，提供更高的视觉感知和认知水平。',
    displayName: 'Qwen VL Max',
    id: 'qwen-vl-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1.6 * 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 1.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    config: {
      deploymentName: 'qwen-vl-ocr-2025-04-13',
    },
    contextWindowTokens: 34_096,
    description:
      '通义千问OCR是文字提取专有模型，专注于文档、表格、试题、手写体文字等类型图像的文字提取能力。它能够识别多种文字，目前支持的语言有：汉语、英语、法语、日语、韩语、德语、俄语、意大利语、越南语、阿拉伯语。',
    displayName: 'Qwen VL OCR',
    id: 'qwen-vl-ocr',
    maxOutput: 4096,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-math-turbo-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Turbo',
    id: 'qwen-math-turbo',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-math-plus-latest',
    },
    contextWindowTokens: 4096,
    description: '通义千问数学模型是专门用于数学解题的语言模型。',
    displayName: 'Qwen Math Plus',
    id: 'qwen-math-plus',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-coder-turbo-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Turbo',
    id: 'qwen-coder-turbo',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    config: {
      deploymentName: 'qwen-coder-plus-latest',
    },
    contextWindowTokens: 131_072,
    description: '通义千问代码模型。',
    displayName: 'Qwen Coder Plus',
    id: 'qwen-coder-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 7, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 131_072,
    description:
      '基于 Qwen2.5-32B 模型训练的 QwQ 推理模型，通过强化学习大幅度提升了模型推理能力。模型数学代码等核心指标（AIME 24/25、LiveCodeBench）以及部分通用指标（IFEval、LiveBench等）达到DeepSeek-R1 满血版水平，各指标均显著超过同样基于 Qwen2.5-32B 的 DeepSeek-R1-Distill-Qwen-32B。',
    displayName: 'QwQ 32B',
    id: 'qwq-32b',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-06',
    settings: {
      searchImpl: 'params',
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description: 'QwQ模型是由 Qwen 团队开发的实验性研究模型，专注于增强 AI 推理能力。',
    displayName: 'QwQ 32B Preview',
    id: 'qwq-32b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-11-28',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-max-latest',
    },
    contextWindowTokens: 131_072,
    description:
      '通义千问QVQ视觉推理模型，支持视觉输入及思维链输出，在数学、编程、视觉分析、创作以及通用任务上都表现了更强的能力。',
    displayName: 'QVQ Max',
    id: 'qvq-max',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 32, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    config: {
      deploymentName: 'qvq-plus-latest',
    },
    contextWindowTokens: 131_072,
    description:
      '视觉推理模型。支持视觉输入及思维链输出，继qvq-max模型后推出的plus版本，相较于qvq-max模型，qvq-plus系列模型推理速度更快，效果和成本更均衡。',
    displayName: 'QVQ Plus',
    id: 'qvq-plus',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-15',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'QVQ模型是由 Qwen 团队开发的实验性研究模型，专注于提升视觉推理能力，尤其在数学推理领域。',
    displayName: 'QVQ 72B Preview',
    id: 'qvq-72b-preview',
    maxOutput: 16_384,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 36, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的7B规模的模型。',
    displayName: 'Qwen2.5 7B',
    id: 'qwen2.5-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的14B规模的模型。',
    displayName: 'Qwen2.5 14B',
    id: 'qwen2.5-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的32B规模的模型。',
    displayName: 'Qwen2.5 32B',
    id: 'qwen2.5-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 72B',
    id: 'qwen2.5-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 1_000_000,
    description: '通义千问2.5对外开源的72B规模的模型。',
    displayName: 'Qwen2.5 14B 1M',
    id: 'qwen2.5-14b-instruct-1m',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 7B',
    id: 'qwen2.5-math-7b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 4096,
    description: 'Qwen-Math 模型具有强大的数学解题能力。',
    displayName: 'Qwen2.5 Math 72B',
    id: 'qwen2.5-math-72b-instruct',
    maxOutput: 3072,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-23',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 7B',
    id: 'qwen2.5-coder-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 14B',
    id: 'qwen2.5-coder-14b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description: '通义千问代码模型开源版。',
    displayName: 'Qwen2.5 Coder 32B',
    id: 'qwen2.5-coder-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 72B',
    id: 'qwen2.5-vl-72b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 48, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5VL系列模型，在math和学科问题解答达到了接近Qwen2.5VL-72B的水平，回复风格面向人类偏好进行大幅调整，尤其是数学、逻辑推理、知识问答等客观类query，模型回复详实程度和格式清晰度明显改善。此版本为32B版本。',
    displayName: 'Qwen2.5 VL 32B',
    id: 'qwen2.5-vl-32b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 24, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-03-24',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      '指令跟随、数学、解题、代码整体提升，万物识别能力提升，支持多样格式直接精准定位视觉元素，支持对长视频文件（最长10分钟）进行理解和秒级别的事件时刻定位，能理解时间先后和快慢，基于解析和定位能力支持操控OS或Mobile的Agent，关键信息抽取能力和Json格式输出能力强，此版本为72B版本，本系列能力最强的版本。',
    displayName: 'Qwen2.5 VL 7B',
    id: 'qwen2.5-vl-7b-instruct',
    maxOutput: 8192,
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      '685B 满血版模型，2025年5月28日发布。DeepSeek-R1 在后训练阶段大规模使用了强化学习技术，在仅有极少标注数据的情况下，极大提升了模型推理能力。在数学、代码、自然语言推理等任务上，性能较高，能力较强。',
    displayName: 'DeepSeek R1 0528',
    id: 'deepseek-r1-0528',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-28',
    type: 'chat',
  },
  {
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 为自研 MoE 模型，671B 参数，激活 37B，在 14.8T token 上进行了预训练，在长文本、代码、数学、百科、中文能力上表现优秀。',
    displayName: 'DeepSeek V3',
    id: 'deepseek-v3',
    maxOutput: 8192,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-01-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-1.5B 是一个基于 Qwen2.5-Math-1.5B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 1.5B',
    id: 'deepseek-r1-distill-qwen-1.5b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-7B 是一个基于 Qwen2.5-Math-7B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 7B',
    id: 'deepseek-r1-distill-qwen-7b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-14B 是一个基于 Qwen2.5-14B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 14B',
    id: 'deepseek-r1-distill-qwen-14b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Qwen-32B 是一个基于 Qwen2.5-32B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-r1-distill-qwen-32b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-8B 是一个基于 Llama-3.1-8B 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 8B',
    id: 'deepseek-r1-distill-llama-8b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-R1-Distill-Llama-70B 是一个基于 Llama-3.3-70B-Instruct 的蒸馏大型语言模型，使用了 DeepSeek R1 的输出。',
    displayName: 'DeepSeek R1 Distill Llama 70B',
    id: 'deepseek-r1-distill-llama-70b',
    maxOutput: 16_384,
    organization: 'DeepSeek',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  // cloudflare
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 80_000,
    displayName: 'deepseek r1 (distill qwen 32b)',
    enabled: true,
    id: '@cf/deepseek-ai/deepseek-r1-distill-qwen-32b',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 24_000,
    displayName: 'qwq 32b',
    enabled: true,
    id: '@cf/qwen/qwq-32b',
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    displayName: 'qwen2.5 coder 32b',
    id: '@cf/qwen/qwen2.5-coder-32b-instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 80_000,
    displayName: 'gemma 3 12b',
    id: '@cf/google/gemma-3-12b-it',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 24_000,
    displayName: 'llama 3.3 70b',
    id: '@cf/meta/llama-3.3-70b-instruct-fp8-fast',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_000,
    displayName: 'llama 4 17b',
    id: '@cf/meta/llama-4-scout-17b-16e-instruct',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 128_000,
    displayName: 'mistral small 3.1 24b',
    id: '@cf/mistralai/mistral-small-3.1-24b-instruct',
    type: 'chat',
  },
  {
    contextWindowTokens: 8192,
    displayName: 'openchat-3.5-0106',
    id: '@cf/openchat/openchat-3.5-0106',
    type: 'chat',
  },
  {
    contextWindowTokens: 7500,
    displayName: 'qwen1.5-14b-chat-awq',
    enabled: true,
    id: '@cf/qwen/qwen1.5-14b-chat-awq',
    type: 'chat',
  },
  {
    contextWindowTokens: 128_000,
    displayName: 'llama 3.1 8b',
    id: '@cf/meta/llama-3.1-8b-instruct-fast',
    type: 'chat',
  },
  // 硅流
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 163_840,
    description:
      'DeepSeek-V3.1 是由深度求索（DeepSeek AI）发布的混合模式大语言模型，它在前代模型的基础上进行了多方面的重要升级。该模型的一大创新是集成了“思考模式”（Thinking Mode）和“非思考模式”（Non-thinking Mode）于一体，用户可以通过调整聊天模板灵活切换，以适应不同的任务需求。通过专门的训练后优化，V3.1 在工具调用和 Agent 任务方面的性能得到了显著增强，能够更好地支持外部搜索工具和执行多步复杂任务。该模型基于 DeepSeek-V3.1-Base 进行后训练，通过两阶段长文本扩展方法，大幅增加了训练数据量，使其在处理长文档和长篇代码方面表现更佳。作为一个开源模型，DeepSeek-V3.1 在编码、数学和推理等多个基准测试中展现了与顶尖闭源模型相媲美的能力，同时凭借其混合专家（MoE）架构，在保持巨大模型容量的同时，有效降低了推理成本。',
    displayName: 'DeepSeek V3.1',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-V3.1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 163_840,
    description:
      'DeepSeek-V3.1 是由深度求索（DeepSeek AI）发布的混合模式大语言模型，它在前代模型的基础上进行了多方面的重要升级。该模型的一大创新是集成了“思考模式”（Thinking Mode）和“非思考模式”（Non-thinking Mode）于一体，用户可以通过调整聊天模板灵活切换，以适应不同的任务需求。通过专门的训练后优化，V3.1 在工具调用和 Agent 任务方面的性能得到了显著增强，能够更好地支持外部搜索工具和执行多步复杂任务。该模型基于 DeepSeek-V3.1-Base 进行后训练，通过两阶段长文本扩展方法，大幅增加了训练数据量，使其在处理长文档和长篇代码方面表现更佳。作为一个开源模型，DeepSeek-V3.1 在编码、数学和推理等多个基准测试中展现了与顶尖闭源模型相媲美的能力，同时凭借其混合专家（MoE）架构，在保持巨大模型容量的同时，有效降低了推理成本。',
    displayName: 'DeepSeek V3.1 (Pro)',
    id: 'Pro/deepseek-ai/DeepSeek-V3.1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'Step3 是由阶跃星辰（StepFun）发布的前沿多模态推理模型，它基于拥有 321B 总参数和 38B 激活参数的专家混合（MoE）架构构建。该模型采用端到端设计，旨在最小化解码成本，同时在视觉语言推理方面提供顶级性能。通过多矩阵分解注意力（MFA）和注意力-FFN 解耦（AFD）的协同设计，Step3 在旗舰级和低端加速器上都能保持卓越的效率。在预训练阶段，Step3 处理了超过 20T 的文本 token 和 4T 的图文混合 token，覆盖十多种语言。该模型在数学、代码及多模态等多个基准测试中均达到了开源模型的领先水平。',
    displayName: 'Step 3',
    id: 'stepfun-ai/step3',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-31',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-Coder-480B-A35B-Instruct 是由阿里巴巴发布的、迄今为止最具代理（Agentic）能力的代码模型。它是一个拥有 4800 亿总参数和 350 亿激活参数的混合专家（MoE）模型，在效率和性能之间取得了平衡。该模型原生支持 256K（约 26 万） tokens 的上下文长度，并可通过 YaRN 等外推方法扩展至 100 万 tokens，使其能够处理大规模代码库和复杂的编程任务。Qwen3-Coder 专为代理式编码工作流设计，不仅能生成代码，还能与开发工具和环境自主交互，以解决复杂的编程问题。在多个编码和代理任务的基准测试中，该模型在开源模型中取得了顶尖水平，其性能可与 Claude Sonnet 4 等领先模型相媲美。',
    displayName: 'Qwen3 Coder 480B A35B Instruct',
    id: 'Qwen/Qwen3-Coder-480B-A35B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-23',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-Coder-30B-A3B-Instruct 是由阿里巴巴通义千问团队开发的 Qwen3 系列中的代码模型。作为一个经过精简优化的模型，它在保持高性能和高效率的同时，专注于提升代码处理能力。该模型在代理式编程（Agentic Coding）、自动化浏览器操作和工具调用等复杂任务上，于开源模型中表现出显著的性能优势。它原生支持 256K tokens 的长上下文，并可扩展至 1M tokens，从而能够更好地进行代码库级别的理解和处理。此外，该模型为 Qwen Code、CLINE 等平台提供了强大的代理编码支持，并设计了专门的函数调用格式。',
    displayName: 'Qwen3 Coder 30B A3B Instruct',
    id: 'Qwen/Qwen3-Coder-30B-A3B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-31',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.5V 是由智谱 AI（Zhipu AI）发布的最新一代视觉语言模型（VLM）该模型基于拥有 106B 总参数和 12B 激活参数的旗舰文本模型 GLM-4.5-Air 构建，采用了混合专家（MoE）架构，旨在以更低的推理成本实现卓越性能 GLM-4.5V 在技术上延续了 GLM-4.1V-Thinking 的路线，并引入了三维旋转位置编码（3D-RoPE）等创新，显著增强了对三维空间关系的感知与推理能力。通过在预训练、监督微调和强化学习阶段的优化，该模型具备了处理图像、视频、长文档等多种视觉内容的能力，在 41 个公开的多模态基准测试中达到了同级别开源模型的顶尖水平此外，模型还新增了“思考模式”开关，允许用户在快速响应和深度推理之间灵活选择，以平衡效率与效果。',
    displayName: 'GLM-4.5V',
    id: 'zai-org/GLM-4.5V',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-11',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-4.5 是一款专为智能体应用打造的基础模型，使用了混合专家（Mixture-of-Experts）架构。在工具调用、网页浏览、软件工程、前端编程领域进行了深度优化，支持无缝接入 Claude Code、Roo Code 等代码智能体中使用。GLM-4.5 采用混合推理模式，可以适应复杂推理和日常使用等多种应用场景。',
    displayName: 'GLM-4.5',
    id: 'zai-org/GLM-4.5',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 3.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 14, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-28',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-4.5-Air 是一款专为智能体应用打造的基础模型，使用了混合专家（Mixture-of-Experts）架构。在工具调用、网页浏览、软件工程、前端编程领域进行了深度优化，支持无缝接入 Claude Code、Roo Code 等代码智能体中使用。GLM-4.5 采用混合推理模式，可以适应复杂推理和日常使用等多种应用场景。',
    displayName: 'GLM-4.5-Air',
    id: 'zai-org/GLM-4.5-Air',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-28',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Pangu-Pro-MoE 72B-A16B 是一款 720 亿参数、激活 160 亿参的稀疏大语言模型，它基于分组混合专家（MoGE）架构，它在专家选择阶段对专家进行分组，并约束 token 在每个组内激活等量专家，从而实现专家负载均衡，显著提升模型在昇腾平台的部署效率。',
    displayName: 'Pangu Pro MoE 72B A16B',
    id: 'ascend-tribe/pangu-pro-moe',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'ERNIE-4.5-300B-A47B 是由百度公司开发的一款基于混合专家（MoE）架构的大语言模型。该模型总参数量为 3000 亿，但在推理时每个 token 仅激活 470 亿参数，从而在保证强大性能的同时兼顾了计算效率。作为 ERNIE 4.5 系列的核心模型之一，在文本理解、生成、推理和编程等任务上展现出卓越的能力。该模型采用了一种创新的多模态异构 MoE 预训练方法，通过文本与视觉模态的联合训练，有效提升了模型的综合能力，尤其在指令遵循和世界知识记忆方面效果突出。',
    displayName: 'ERNIE 4.5 300B A47B',
    id: 'baidu/ERNIE-4.5-300B-A47B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-30',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'Kimi K2 是一款具备超强代码和 Agent 能力的 MoE 架构基础模型，总参数 1T，激活参数 32B。在通用知识推理、编程、数学、Agent 等主要类别的基准性能测试中，K2 模型的性能超过其他主流开源模型。',
    displayName: 'Kimi K2 Instruct',
    id: 'moonshotai/Kimi-K2-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-11',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'Kimi K2 是一款具备超强代码和 Agent 能力的 MoE 架构基础模型，总参数 1T，激活参数 32B。在通用知识推理、编程、数学、Agent 等主要类别的基准性能测试中，K2 模型的性能超过其他主流开源模型。',
    displayName: 'Kimi K2 Instruct (Pro)',
    id: 'Pro/moonshotai/Kimi-K2-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-11',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Kimi-Dev-72B 是一款开源代码大模型，经过大规模强化学习优化，能输出稳健、可直接投产的补丁。该模型在 SWE-bench Verified 上取得 60.4 % 的新高分，刷新了开源模型在缺陷修复、代码评审等自动化软件工程任务上的纪录。',
    displayName: 'Kimi Dev 72B',
    id: 'moonshotai/Kimi-Dev-72B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-17',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Hunyuan-A13B-Instruct 参数量800 亿，激活 130 亿参数即可对标更大模型，支持“快思考/慢思考”混合推理；长文理解稳定；经 BFCL-v3 与 τ-Bench 验证，Agent 能力领先；结合 GQA 与多量化格式，实现高效推理。',
    displayName: 'Hunyuan A13B Instruct',
    id: 'tencent/Hunyuan-A13B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-27',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'MiniMax-M1 是开源权重的大规模混合注意力推理模型，拥有 4560 亿参数，每个 Token 可激活约 459 亿参数。模型原生支持 100 万 Token 的超长上下文，并通过闪电注意力机制，在 10 万 Token 的生成任务中相比 DeepSeek R1 节省 75% 的浮点运算量。同时，MiniMax-M1 采用 MoE（混合专家）架构，结合 CISPO 算法与混合注意力设计的高效强化学习训练，在长输入推理与真实软件工程场景中实现了业界领先的性能。',
    displayName: 'MiniMax M1 80K',
    id: 'MiniMaxAI/MiniMax-M1-80k',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-16',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'QwenLong-L1-32B 是首个使用强化学习训练的长上下文大型推理模型（LRM），专门针对长文本推理任务进行优化。该模型通过渐进式上下文扩展的强化学习框架，实现了从短上下文到长上下文的稳定迁移。在七个长上下文文档问答基准测试中，QwenLong-L1-32B 超越了 OpenAI-o3-mini 和 Qwen3-235B-A22B 等旗舰模型，性能可媲美 Claude-3.7-Sonnet-Thinking。该模型特别擅长数学推理、逻辑推理和多跳推理等复杂任务。',
    displayName: 'QwenLong L1 32B',
    id: 'Tongyi-Zhiwen/QwenLong-L1-32B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-05-26',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-235B-A22B-Thinking-2507 是由阿里巴巴通义千问团队开发的 Qwen3 系列大型语言模型中的一员，专注于高难度的复杂推理任务。该模型基于混合专家（MoE）架构，总参数量达 2350 亿，而在处理每个 token 时仅激活约 220 亿参数，从而在保持强大性能的同时提高了计算效率。作为一个专门的“思考”模型，它在逻辑推理、数学、科学、编程和学术基准测试等需要人类专业知识的任务上表现显著提升，达到了开源思考模型中的顶尖水平。此外，模型还增强了通用能力，如指令遵循、工具使用和文本生成，并原生支持 256K 的长上下文理解能力，非常适合用于需要深度推理和处理长文档的场景。',
    displayName: 'Qwen3 235B A22B Thinking 2507',
    id: 'Qwen/Qwen3-235B-A22B-Thinking-2507',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-25',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-235B-A22B-Instruct-2507 是由阿里云通义千问团队开发的 Qwen3 系列中的一款旗舰级混合专家（MoE）大语言模型。该模型拥有 2350 亿总参数，每次推理激活 220 亿参数。它是作为 Qwen3-235B-A22B 非思考模式的更新版本发布的，专注于在指令遵循、逻辑推理、文本理解、数学、科学、编程及工具使用等通用能力上实现显著提升。此外，模型增强了对多语言长尾知识的覆盖，并能更好地对齐用户在主观和开放性任务上的偏好，以生成更有帮助和更高质量的文本。',
    displayName: 'Qwen3 235B A22B Instruct 2507',
    id: 'Qwen/Qwen3-235B-A22B-Instruct-2507',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-30B-A3B-Thinking-2507 是由阿里巴巴通义千问团队发布的 Qwen3 系列的最新思考模型。作为一个拥有 305 亿总参数和 33 亿激活参数的混合专家（MoE）模型，它专注于提升复杂任务的处理能力。该模型在逻辑推理、数学、科学、编程和需要人类专业知识的学术基准测试上表现出显著的性能提升。同时，它在指令遵循、工具使用、文本生成和与人类偏好对齐等通用能力方面也得到了显著增强。模型原生支持 256K 的长上下文理解能力，并可扩展至 100 万 tokens。此版本专为“思考模式”设计，旨在通过详尽的逐步推理来解决高度复杂的任务，其 Agent 智能体能力也表现出色。',
    displayName: 'Qwen3 30B A3B Thinking 2507',
    id: 'Qwen/Qwen3-30B-A3B-Thinking-2507',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-30',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 262_144,
    description:
      'Qwen3-30B-A3B-Instruct-2507 是 Qwen3-30B-A3B 非思考模式的更新版本。这是一个拥有 305 亿总参数和 33 亿激活参数的混合专家（MoE）模型。该模型在多个方面进行了关键增强，包括显著提升了指令遵循、逻辑推理、文本理解、数学、科学、编码和工具使用等通用能力。同时，它在多语言的长尾知识覆盖范围上取得了实质性进展，并能更好地与用户在主观和开放式任务中的偏好对齐，从而能够生成更有帮助的回复和更高质量的文本。此外，该模型的长文本理解能力也增强到了 256K。此模型仅支持非思考模式，其输出中不会生成 `<think></think>` 标签。',
    displayName: 'Qwen3 30B A3B Instruct 2507',
    id: 'Qwen/Qwen3-30B-A3B-Instruct-2507',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-29',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 235B A22B',
    id: 'Qwen/Qwen3-235B-A22B',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 32B',
    id: 'Qwen/Qwen3-32B',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 30B A3B',
    id: 'Qwen/Qwen3-30B-A3B',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 14B',
    id: 'Qwen/Qwen3-14B',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 8B (Free)',
    id: 'Qwen/Qwen3-8B',
    organization: 'Qwen',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-28',
    settings: {
      extendParams: ['enableReasoning', 'reasoningBudgetToken'],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.1V-9B-Thinking 是由智谱 AI 和清华大学 KEG 实验室联合发布的一款开源视觉语言模型（VLM），专为处理复杂的多模态认知任务而设计。该模型基于 GLM-4-9B-0414 基础模型，通过引入“思维链”（Chain-of-Thought）推理机制和采用强化学习策略，显著提升了其跨模态的推理能力和稳定性。',
    displayName: 'GLM-4.1V 9B Thinking (Free)',
    enabled: true,
    id: 'THUDM/GLM-4.1V-9B-Thinking',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-02',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 65_536,
    description:
      'GLM-4.1V-9B-Thinking 是由智谱 AI 和清华大学 KEG 实验室联合发布的一款开源视觉语言模型（VLM），专为处理复杂的多模态认知任务而设计。该模型基于 GLM-4-9B-0414 基础模型，通过引入“思维链”（Chain-of-Thought）推理机制和采用强化学习策略，显著提升了其跨模态的推理能力和稳定性。',
    displayName: 'GLM-4.1V 9B Thinking (Pro)',
    id: 'Pro/THUDM/GLM-4.1V-9B-Thinking',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-07-02',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-Z1-Rumination-32B-0414 是一个具有沉思能力的深度推理模型（与 OpenAI 的 Deep Research 对标）。与典型的深度思考模型不同，沉思模型采用更长时间的深度思考来解决更开放和复杂的问题。',
    displayName: 'GLM-Z1-Rumination 32B 0414',
    id: 'THUDM/GLM-Z1-Rumination-32B-0414',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-Z1-32B-0414 是一个具有深度思考能力的推理模型。该模型基于 GLM-4-32B-0414 通过冷启动和扩展强化学习开发，并在数学、代码和逻辑任务上进行了进一步训练。与基础模型相比，GLM-Z1-32B-0414 显著提升了数学能力和解决复杂任务的能力。',
    displayName: 'GLM-Z1 32B 0414',
    id: 'THUDM/GLM-Z1-32B-0414',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-Z1-9B-0414 是 GLM 系列的小型模型，仅有 90 亿参数，但保持了开源传统的同时展现出惊人的能力。尽管规模较小，该模型在数学推理和通用任务上仍表现出色，其总体性能在同等规模的开源模型中已处于领先水平。',
    displayName: 'GLM-Z1 9B 0414 (Free)',
    id: 'THUDM/GLM-Z1-9B-0414',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'GLM-4-32B-0414 是 GLM 系列的新一代开源模型，拥有 320 亿参数。该模型性能可与 OpenAI 的 GPT 系列和 DeepSeek 的 V3/R1 系列相媲美。',
    displayName: 'GLM-4 32B 0414',
    id: 'THUDM/GLM-4-32B-0414',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.89, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.89, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'GLM-4-9B-0414 是 GLM 系列的小型模型，拥有 90 亿参数。该模型继承了 GLM-4-32B 系列的技术特点，但提供了更轻量级的部署选择。尽管规模较小，GLM-4-9B-0414 仍在代码生成、网页设计、SVG 图形生成和基于搜索的写作等任务上展现出色能力。',
    displayName: 'GLM-4 9B 0414 (Free)',
    id: 'THUDM/GLM-4-9B-0414',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-04-14',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-4-9B-Chat 是智谱 AI 推出的 GLM-4 系列预训练模型中的开源版本。该模型在语义、数学、推理、代码和知识等多个方面表现出色。除了支持多轮对话外，GLM-4-9B-Chat 还具备网页浏览、代码执行、自定义工具调用（Function Call）和长文本推理等高级功能。模型支持 26 种语言，包括中文、英文、日语、韩语和德语等。在多项基准测试中，GLM-4-9B-Chat 展现了优秀的性能，如 AlignBench-v2、MT-Bench、MMLU 和 C-Eval 等。该模型支持最大 128K 的上下文长度，适用于学术研究和商业应用',
    displayName: 'GLM-4 9B Chat (Free)',
    id: 'THUDM/glm-4-9b-chat',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-06-04',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'GLM-4-9B-Chat 是智谱 AI 推出的 GLM-4 系列预训练模型中的开源版本。该模型在语义、数学、推理、代码和知识等多个方面表现出色。除了支持多轮对话外，GLM-4-9B-Chat 还具备网页浏览、代码执行、自定义工具调用（Function Call）和长文本推理等高级功能。模型支持 26 种语言，包括中文、英文、日语、韩语和德语等。在多项基准测试中，GLM-4-9B-Chat 展现了优秀的性能，如 AlignBench-v2、MT-Bench、MMLU 和 C-Eval 等。该模型支持最大 128K 的上下文长度，适用于学术研究和商业应用',
    displayName: 'GLM-4 9B Chat (Pro)',
    id: 'Pro/THUDM/glm-4-9b-chat',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-06-04',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1-0528-Qwen3-8B 是通过从 DeepSeek-R1-0528 模型蒸馏思维链到 Qwen3 8B Base 获得的模型。该模型在开源模型中达到了最先进（SOTA）的性能，在 AIME 2024 测试中超越了 Qwen3 8B 10%，并达到了 Qwen3-235B-thinking 的性能水平。该模型在数学推理、编程和通用逻辑等多个基准测试中表现出色，其架构与 Qwen3-8B 相同，但共享 DeepSeek-R1-0528 的分词器配置。',
    displayName: 'DeepSeek R1 0528 Qwen3 8B (Free)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-R1-0528-Qwen3-8B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 98_304,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-R1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 是一款拥有 6710 亿参数的混合专家（MoE）语言模型，采用多头潜在注意力（MLA）和 DeepSeekMoE 架构，结合无辅助损失的负载平衡策略，优化推理和训练效率。通过在 14.8 万亿高质量tokens上预训练，并进行监督微调和强化学习，DeepSeek-V3 在性能上超越其他开源模型，接近领先闭源模型。',
    displayName: 'DeepSeek V3(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-V3',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 98_304,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1 (Pro)',
    id: 'Pro/deepseek-ai/DeepSeek-R1',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 是一款拥有 6710 亿参数的混合专家（MoE）语言模型，采用多头潜在注意力（MLA）和 DeepSeekMoE 架构，结合无辅助损失的负载平衡策略，优化推理和训练效率。通过在 14.8 万亿高质量tokens上预训练，并进行监督微调和强化学习，DeepSeek-V3 在性能上超越其他开源模型，接近领先闭源模型。',
    displayName: 'DeepSeek V3 (Pro)',
    id: 'Pro/deepseek-ai/DeepSeek-V3',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1-Distill-Qwen-32B 是基于 Qwen2.5-32B 通过知识蒸馏得到的模型。该模型使用 DeepSeek-R1 生成的 80 万个精选样本进行微调，在数学、编程和推理等多个领域展现出卓越的性能。在 AIME 2024、MATH-500、GPQA Diamond 等多个基准测试中都取得了优异成绩，其中在 MATH-500 上达到了 94.3% 的准确率，展现出强大的数学推理能力。',
    displayName: 'DeepSeek R1 Distill Qwen 32B',
    id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-32B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1-Distill-Qwen-14B 是基于 Qwen2.5-14B 通过知识蒸馏得到的模型。该模型使用 DeepSeek-R1 生成的 80 万个精选样本进行微调，展现出优秀的推理能力。在多个基准测试中表现出色，其中在 MATH-500 上达到了 93.9% 的准确率，在 AIME 2024 上达到了 69.7% 的通过率，在 CodeForces 上获得了 1481 的评分，显示出在数学和编程领域的强大实力。',
    displayName: 'DeepSeek R1 Distill Qwen 14B',
    id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-14B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1-Distill-Qwen-7B 是基于 Qwen2.5-Math-7B 通过知识蒸馏得到的模型。该模型使用 DeepSeek-R1 生成的 80 万个精选样本进行微调，展现出优秀的推理能力。在多个基准测试中表现出色，其中在 MATH-500 上达到了 92.8% 的准确率，在 AIME 2024 上达到了 55.5% 的通过率，在 CodeForces 上获得了 1189 的评分，作为 7B 规模的模型展示了较强的数学和编程能力。',
    displayName: 'DeepSeek R1 Distill Qwen 7B (Free)',
    id: 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1-Distill-Qwen-7B 是基于 Qwen2.5-Math-7B 通过知识蒸馏得到的模型。该模型使用 DeepSeek-R1 生成的 80 万个精选样本进行微调，展现出优秀的推理能力。在多个基准测试中表现出色，其中在 MATH-500 上达到了 92.8% 的准确率，在 AIME 2024 上达到了 55.5% 的通过率，在 CodeForces 上获得了 1189 的评分，作为 7B 规模的模型展示了较强的数学和编程能力。',
    displayName: 'DeepSeek R1 Distill Qwen 7B (Pro)',
    id: 'Pro/deepseek-ai/DeepSeek-R1-Distill-Qwen-7B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'DeepSeek-V2.5 是 DeepSeek-V2-Chat 和 DeepSeek-Coder-V2-Instruct 的升级版本，集成了两个先前版本的通用和编码能力。该模型在多个方面进行了优化，包括写作和指令跟随能力，更好地与人类偏好保持一致。DeepSeek-V2.5 在各种评估基准上都取得了显著的提升，如 AlpacaEval 2.0、ArenaHard、AlignBench 和 MT-Bench 等。',
    displayName: 'DeepSeek V2.5',
    id: 'deepseek-ai/DeepSeek-V2.5',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.33, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.33, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 4096,
    description:
      'DeepSeek-VL2 是一个基于 DeepSeekMoE-27B 开发的混合专家（MoE）视觉语言模型，采用稀疏激活的 MoE 架构，在仅激活 4.5B 参数的情况下实现了卓越性能。该模型在视觉问答、光学字符识别、文档/表格/图表理解和视觉定位等多个任务中表现优异。',
    displayName: 'DeepSeek VL2',
    id: 'deepseek-ai/deepseek-vl2',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.99, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.99, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'QVQ-72B-Preview 是由 Qwen 团队开发的专注于视觉推理能力的研究型模型，其在复杂场景理解和解决视觉相关的数学问题方面具有独特优势。',
    displayName: 'QVQ 72B Preview',
    id: 'Qwen/QVQ-72B-Preview',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 9.9, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 9.9, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'QwQ 是 Qwen 系列的推理模型。与传统的指令调优模型相比，QwQ 具备思考和推理能力，能够在下游任务中实现显著增强的性能，尤其是在解决困难问题方面。QwQ-32B 是中型推理模型，能够在与最先进的推理模型（如 DeepSeek-R1、o1-mini）的对比中取得有竞争力的性能。该模型采用 RoPE、SwiGLU、RMSNorm 和 Attention QKV bias 等技术，具有 64 层网络结构和 40 个 Q 注意力头（GQA 架构中 KV 为 8 个）。',
    displayName: 'QwQ 32B',
    id: 'Qwen/QwQ-32B',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-7B-Instruct 是阿里云发布的最新大语言模型系列之一。该 7B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 7B Instruct (Free)',
    id: 'Qwen/Qwen2.5-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-7B-Instruct 是阿里云发布的最新大语言模型系列之一。该 7B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 7B Instruct (Pro)',
    id: 'Pro/Qwen/Qwen2.5-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-14B-Instruct 是阿里云发布的最新大语言模型系列之一。该 14B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 14B Instruct',
    id: 'Qwen/Qwen2.5-14B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.7, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-32B-Instruct 是阿里云发布的最新大语言模型系列之一。该 32B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 32B Instruct',
    id: 'Qwen/Qwen2.5-32B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 72B Instruct',
    id: 'Qwen/Qwen2.5-72B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5-72B-Instruct 是阿里云发布的最新大语言模型系列之一。该 72B 模型在编码和数学等领域具有显著改进的能力。它支持长达 128K tokens 的输入，可以生成超过 8K tokens 的长文本。该模型还提供了多语言支持，覆盖超过 29 种语言，包括中文、英文等。模型在指令跟随、理解结构化数据以及生成结构化输出（尤其是 JSON）方面都有显著提升',
    displayName: 'Qwen2.5 72B Instruct 128K',
    id: 'Qwen/Qwen2.5-72B-Instruct-128K',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-Coder-7B-Instruct 是阿里云发布的代码特定大语言模型系列的最新版本。该模型在 Qwen2.5 的基础上，通过 5.5 万亿个 tokens 的训练，显著提升了代码生成、推理和修复能力。它不仅增强了编码能力，还保持了数学和通用能力的优势。模型为代码智能体等实际应用提供了更全面的基础',
    displayName: 'Qwen2.5 Coder 7B Instruct (Free)',
    id: 'Qwen/Qwen2.5-Coder-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-Coder-7B-Instruct 是阿里云发布的代码特定大语言模型系列的最新版本。该模型在 Qwen2.5 的基础上，通过 5.5 万亿个 tokens 的训练，显著提升了代码生成、推理和修复能力。它不仅增强了编码能力，还保持了数学和通用能力的优势。模型为代码智能体等实际应用提供了更全面的基础',
    displayName: 'Qwen2.5 Coder 7B Instruct (Pro)',
    id: 'Pro/Qwen/Qwen2.5-Coder-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-Coder-32B-Instruct 是基于 Qwen2.5 开发的代码特定大语言模型。该模型通过 5.5 万亿 tokens 的训练，在代码生成、代码推理和代码修复方面都取得了显著提升。它是当前最先进的开源代码语言模型，编码能力可与 GPT-4 相媲美。模型不仅增强了编码能力，还保持了在数学和通用能力方面的优势，并支持长文本处理',
    displayName: 'Qwen2.5 Coder 32B Instruct',
    id: 'Qwen/Qwen2.5-Coder-32B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.26, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen2-7B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 7B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它能够处理大规模输入。该模型在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型，并在某些任务上展现出与专有模型相当的竞争力。Qwen2-7B-Instruct 在多项评测中均优于 Qwen1.5-7B-Chat，显示出显著的性能提升',
    displayName: 'Qwen2 7B Instruct (Free)',
    id: 'Qwen/Qwen2-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    contextWindowTokens: 32_768,
    description:
      'Qwen2-7B-Instruct 是 Qwen2 系列中的指令微调大语言模型，参数规模为 7B。该模型基于 Transformer 架构，采用了 SwiGLU 激活函数、注意力 QKV 偏置和组查询注意力等技术。它能够处理大规模输入。该模型在语言理解、生成、多语言能力、编码、数学和推理等多个基准测试中表现出色，超越了大多数开源模型，并在某些任务上展现出与专有模型相当的竞争力。Qwen2-7B-Instruct 在多项评测中均优于 Qwen1.5-7B-Chat，显示出显著的性能提升',
    displayName: 'Qwen2 7B Instruct (Pro)',
    id: 'Pro/Qwen/Qwen2-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2-VL 是 Qwen-VL 模型的最新迭代版本，在视觉理解基准测试中达到了最先进的性能，包括 MathVista、DocVQA、RealWorldQA 和 MTVQA 等。Qwen2-VL 能够理解超过 20 分钟的视频，用于高质量的基于视频的问答、对话和内容创作。它还具备复杂推理和决策能力，可以与移动设备、机器人等集成，基于视觉环境和文本指令进行自动操作。除了英语和中文，Qwen2-VL 现在还支持理解图像中不同语言的文本，包括大多数欧洲语言、日语、韩语、阿拉伯语和越南语等',
    displayName: 'Qwen2 VL 72B Instruct',
    id: 'Qwen/Qwen2-VL-72B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 32_768,
    description:
      'Qwen2.5-VL 是 Qwen 系列的新成员，具备强大的视觉理解能力，能分析图像中的文本、图表和布局，并能理解长视频和捕捉事件，它可以进行推理、操作工具，支持多格式物体定位和生成结构化输出，优化了视频理解的动态分辨率与帧率训练，并提升了视觉编码器效率。',
    displayName: 'Qwen2.5 VL 7B Instruct (Pro)',
    id: 'Pro/Qwen/Qwen2.5-VL-7B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0.35, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5-VL-32B-Instruct 是通义千问团队推出的多模态大模型，是 Qwen2.5-VL 系列的一部分。该模型不仅精通识别常见物体，还能分析图像中的文本、图表、图标、图形和布局。它可作为视觉智能体，能够推理并动态操控工具，具备使用电脑和手机的能力。此外，这个模型可以精确定位图像中的对象，并为发票、表格等生成结构化输出。相比前代模型 Qwen2-VL，该版本在数学和问题解决能力方面通过强化学习得到了进一步提升，响应风格也更符合人类偏好。',
    displayName: 'Qwen2.5 VL 32B Instruct',
    id: 'Qwen/Qwen2.5-VL-32B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 1.89, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 1.89, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 131_072,
    description:
      'Qwen2.5-VL 是 Qwen2.5 系列中的视觉语言模型。该模型在多方面有显著提升：具备更强的视觉理解能力，能够识别常见物体、分析文本、图表和布局；作为视觉代理能够推理并动态指导工具使用；支持理解超过 1 小时的长视频并捕捉关键事件；能够通过生成边界框或点准确定位图像中的物体；支持生成结构化输出，尤其适用于发票、表格等扫描数据。',
    displayName: 'Qwen2.5 VL 72B Instruct',
    id: 'Qwen/Qwen2.5-VL-72B-Instruct',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 4.13, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 32_768,
    description:
      'InternLM2.5-7B-Chat 是一个开源的对话模型，基于 InternLM2 架构开发。该 7B 参数规模的模型专注于对话生成任务，支持中英双语交互。模型采用了最新的训练技术，旨在提供流畅、智能的对话体验。InternLM2.5-7B-Chat 适用于各种对话应用场景，包括但不限于智能客服、个人助手等领域',
    displayName: 'InternLM2.5 7B Chat (Free)',
    id: 'internlm/internlm2_5-7b-chat',
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 0, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'chat',
  },
  // 其他
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 128_000,
    description: 'ChatGPT-4o 绘图 plus渠道',
    displayName: 'ChatGPT-4o 绘图 plus渠道',
    enabled: true,
    id: 'gpt-4o-image',
    releasedAt: '2024-11-20',
    type: 'chat',
  },
  {
    abilities: {
      vision: true,
    },
    contextWindowTokens: 128_000,
    description: 'ChatGPT-4o 绘图 pro渠道',
    displayName: 'ChatGPT-4o 绘图 pro渠道',
    enabled: true,
    id: 'gpt-4o-image-vip',
    releasedAt: '2024-11-20',
    type: 'chat',
  },
  {
    contextWindowTokens: 131_072,
    description:
      'Qwen3是一款能力大幅提升的新一代通义千问大模型，在推理、通用、Agent和多语言等多个核心能力上均达到业界领先水平，并支持思考模式切换。',
    displayName: 'Qwen3 235B A22B FP8',
    enabled: true,
    id: 'Qwen3-235B-A22B-FP8',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-R1',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-V3 是一款拥有 6710 亿参数的混合专家（MoE）语言模型，采用多头潜在注意力（MLA）和 DeepSeekMoE 架构，结合无辅助损失的负载平衡策略，优化推理和训练效率。通过在 14.8 万亿高质量tokens上预训练，并进行监督微调和强化学习，DeepSeek-V3 在性能上超越其他开源模型，接近领先闭源模型。',
    displayName: 'DeepSeek V3(SL)',
    enabled: true,
    id: 'deepseek-ai/DeepSeek-V3',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(Fast)',
    enabled: true,
    id: 'deepseek-ai/deepseek-r1-nv',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek-R1 0528 版本',
    displayName: 'DeepSeek R1 0528 (Fireworks)',
    enabled: true,
    id: 'DeepSeek-R1-0528',
    type: 'chat',
  },
  {
    abilities: {
      reasoning: true,
    },
    contextWindowTokens: 65_536,
    description:
      'DeepSeek-R1 是一款强化学习（RL）驱动的推理模型，解决了模型中的重复性和可读性问题。在 RL 之前，DeepSeek-R1 引入了冷启动数据，进一步优化了推理性能。它在数学、代码和推理任务中与 OpenAI-o1 表现相当，并且通过精心设计的训练方法，提升了整体效果。',
    displayName: 'DeepSeek R1(AZ)',
    enabled: true,
    id: 'deepseek-reasoner-az',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2',
    displayName: 'DeepSeek V3.2',
    enabled: true,
    id: 'deepseek-v3.2',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 EXP',
    displayName: 'DeepSeek V3.2 EXP',
    enabled: true,
    id: 'deepseek-v3.2-exp',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
    },
    contextWindowTokens: 131_072,
    description:
      'DeepSeek V3.2 Speciale',
    displayName: 'DeepSeek V3.2 Speciale',
    enabled: true,
    id: 'deepseek-v3.2-speciale',
    maxOutput: 65_536,
    pricing: {
      currency: 'CNY',
      units: [
        { name: 'textInput_cacheRead', rate: 1, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-21',
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      search: true,
    },
    contextWindowTokens: 200_000,
    description:
      '智谱最新旗舰模型 GLM-4.6 (355B) 在高级编码、长文本处理、推理与智能体能力上全面超越前代，尤其在编程能力上对齐 Claude Sonnet 4，成为国内顶尖的 Coding 模型。',
    displayName: 'GLM-4.6',
    enabled: true,
    id: 'glm-4.6',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 0.4,
              '[0, 0.032]_[0.0002, infinity]': 0.6,
              '[0.032, 0.2]': 0.8,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 2,
              '[0, 0.032]_[0.0002, infinity]': 3,
              '[0.032, 0.2]': 4,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 8,
              '[0, 0.032]_[0.0002, infinity]': 14,
              '[0.032, 0.2]': 16,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
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
    contextWindowTokens: 200_000,
    description:
      '智谱最新旗舰模型 GLM-4.7 (355B) 在高级编码、长文本处理、推理与智能体能力上全面超越前代，尤其在编程能力上对齐 Claude Sonnet 4，成为国内顶尖的 Coding 模型。',
    displayName: 'GLM-4.7',
    enabled: true,
    id: 'glm-4.7',
    maxOutput: 131_072,
    pricing: {
      currency: 'CNY',
      units: [
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 0.4,
              '[0, 0.032]_[0.0002, infinity]': 0.6,
              '[0.032, 0.2]': 0.8,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput_cacheRead',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 2,
              '[0, 0.032]_[0.0002, infinity]': 3,
              '[0.032, 0.2]': 4,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textInput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
        {
          lookup: {
            prices: {
              '[0, 0.032]_[0, 0.0002]': 8,
              '[0, 0.032]_[0.0002, infinity]': 14,
              '[0.032, 0.2]': 16,
            },
            pricingParams: ['textInput', 'textOutput'],
          },
          name: 'textOutput',
          strategy: 'lookup',
          unit: 'millionTokens',
        },
      ],
    },
    settings: {
      extendParams: ['enableReasoning'],
      searchImpl: 'params',
    },
    type: 'chat',
  },
];

export const openaiEmbeddingModels: AIEmbeddingModelCard[] = [
  {
    contextWindowTokens: 8192,
    description: '最强大的向量化模型，适用于英文和非英文任务',
    displayName: 'Text Embedding 3 Large',
    id: 'text-embedding-3-large',
    maxDimension: 3072,
    pricing: {
      currency: 'USD',
      units: [{ name: 'textInput', rate: 0.13, strategy: 'fixed', unit: 'millionTokens' }],
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
  {
    contextWindowTokens: 8192,
    description: '高效且经济的新一代 Embedding 模型，适用于知识检索、RAG 应用等场景',
    displayName: 'Text Embedding 3 Small',
    id: 'text-embedding-3-small',
    maxDimension: 1536,
    pricing: {
      currency: 'USD',
      units: [{ name: 'textInput', rate: 0.02, strategy: 'fixed', unit: 'millionTokens' }],
    },
    releasedAt: '2024-01-25',
    type: 'embedding',
  },
];

// 语音合成模型
export const openaiTTSModels: AITTSModelCard[] = [
  {
    description: '最新的文本转语音模型，针对实时场景优化速度',
    displayName: 'TTS-1',
    id: 'tts-1',
    pricing: {
      units: [{ name: 'textInput', rate: 15, strategy: 'fixed', unit: 'millionCharacters' }],
    },
    type: 'tts',
  },
  {
    description: '最新的文本转语音模型，针对质量进行优化',
    displayName: 'TTS-1 HD',
    id: 'tts-1-hd',
    pricing: {
      units: [{ name: 'textInput', rate: 30, strategy: 'fixed', unit: 'millionCharacters' }],
    },
    type: 'tts',
  },
  {
    description:
      'GPT-4o mini TTS 是一个基于 GPT-4o mini 构建的文本转语音模型，这是一种快速且强大的语言模型。使用它可以将文本转换为自然听起来的语音文本。最大输入标记数为 2000。',
    displayName: 'GPT-4o Mini TTS',
    id: 'gpt-4o-mini-tts',
    pricing: {
      units: [
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 12, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'tts',
  },
];

// 语音识别模型
export const openaiSTTModels: AISTTModelCard[] = [
  {
    description: '通用语音识别模型，支持多语言语音识别、语音翻译和语言识别。',
    displayName: 'Whisper',
    id: 'whisper-1',
    pricing: {
      units: [
        {
          name: 'audioInput',
          rate: 0.0001, // $0.006 per minute => $0.0001 per second
          strategy: 'fixed',
          unit: 'second',
        },
      ],
    },
    type: 'stt',
  },
  {
    contextWindowTokens: 16_000,
    description:
      'GPT-4o Transcribe 是一种使用 GPT-4o 转录音频的语音转文本模型。与原始 Whisper 模型相比，它提高了单词错误率，并提高了语言识别和准确性。使用它来获得更准确的转录。',
    displayName: 'GPT-4o Transcribe',
    id: 'gpt-4o-transcribe',
    maxOutput: 2000,
    pricing: {
      units: [
        { name: 'textInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'stt',
  },
  {
    contextWindowTokens: 16_000,
    description:
      'GPT-4o Mini Transcribe 是一种使用 GPT-4o 转录音频的语音转文本模型。与原始 Whisper 模型相比，它提高了单词错误率，并提高了语言识别和准确性。使用它来获得更准确的转录。',
    displayName: 'GPT-4o Mini Transcribe',
    id: 'gpt-4o-mini-transcribe',
    maxOutput: 2000,
    pricing: {
      units: [
        { name: 'textInput', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput', rate: 3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    type: 'stt',
  },
];

// 图像生成模型
export const openaiImageModels: AIImageModelCard[] = [
  // https://platform.openai.com/docs/models/gpt-image-1
  {
    description: 'ChatGPT 原生多模态图片生成模型',
    displayName: 'GPT Image 1',
    enabled: true,
    id: 'gpt-image-1',
    parameters: gptImage1ParamsSchema,
    pricing: {
      units: [
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 1.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: {
            prices: {
              high_1024x1024: 0.167,
              high_1024x1536: 0.25,
              high_1536x1024: 0.25,
              low_1024x1024: 0.011,
              low_1024x1536: 0.016,
              low_1536x1024: 0.016,
              medium_1024x1024: 0.042,
              medium_1024x1536: 0.063,
              medium_1536x1024: 0.063,
            },
            pricingParams: ['quality', 'size'],
          },
          name: 'imageGeneration',
          strategy: 'lookup',
          unit: 'image',
        },
      ],
    },
    resolutions: ['1024x1024', '1024x1536', '1536x1024'],
    type: 'image',
  },
  {
    description: '成本更低的 GPT Image 1 版本，原生支持文本与图像输入并生成图像输出。',
    displayName: 'GPT Image 1 Mini',
    enabled: true,
    id: 'gpt-image-1-mini',
    parameters: gptImage1ParamsSchema,
    pricing: {
      units: [
        { name: 'textInput', rate: 2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.2, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput_cacheRead', rate: 0.25, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageOutput', rate: 8, strategy: 'fixed', unit: 'millionTokens' },
        {
          lookup: {
            prices: {
              low_1024x1024: 0.005,
              low_1024x1536: 0.006,
              low_1536x1024: 0.006,
              medium_1024x1024: 0.011,
              medium_1024x1536: 0.015,
              medium_1536x1024: 0.015,
            },
            pricingParams: ['quality', 'size'],
          },
          name: 'imageGeneration',
          strategy: 'lookup',
          unit: 'image',
        },
      ],
    },
    releasedAt: '2025-10-06',
    resolutions: ['1024x1024', '1024x1536', '1536x1024'],
    type: 'image',
  },
  {
    description:
      '最新的 DALL·E 模型，于2023年11月发布。支持更真实、准确的图像生成，具有更强的细节表现力',
    displayName: 'DALL·E 3',
    id: 'dall-e-3',
    parameters: {
      prompt: { default: '' },
      quality: {
        default: 'standard',
        enum: ['standard', 'hd'],
      },
      size: {
        default: '1024x1024',
        enum: ['1024x1024', '1792x1024', '1024x1792'],
      },
    },
    pricing: {
      units: [
        {
          lookup: {
            prices: {
              hd_1024x1024: 0.08,
              hd_1024x1792: 0.12,
              hd_1792x1024: 0.12,
              standard_1024x1024: 0.04,
              standard_1024x1792: 0.08,
              standard_1792x1024: 0.08,
            },
            pricingParams: ['quality', 'size'],
          },
          name: 'imageGeneration',
          strategy: 'lookup',
          unit: 'image',
        },
      ],
    },
    resolutions: ['1024x1024', '1024x1792', '1792x1024'],
    type: 'image',
  },
  {
    description: '第二代 DALL·E 模型，支持更真实、准确的图像生成，分辨率是第一代的4倍',
    displayName: 'DALL·E 2',
    id: 'dall-e-2',
    parameters: {
      imageUrl: { default: null },
      prompt: { default: '' },
      size: {
        default: '1024x1024',
        enum: ['256x256', '512x512', '1024x1024'],
      },
    },
    pricing: {
      units: [
        {
          lookup: {
            prices: {
              '1024x1024': 0.02,
              '256x256': 0.016,
              '512x512': 0.018,
            },
            pricingParams: ['size'],
          },
          name: 'imageGeneration',
          strategy: 'lookup',
          unit: 'image',
        },
      ],
    },
    resolutions: ['256x256', '512x512', '1024x1024'],
    type: 'image',
  },
];

// GPT-4o 和 GPT-4o-mini 实时模型
export const openaiRealtimeModels: AIRealtimeModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 32_000,
    description: '通用实时模型，支持文本与音频的实时输入输出，并支持图像输入。',
    displayName: 'GPT Realtime',
    id: 'gpt-realtime',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'audioInput', rate: 32, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 64, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },

        { name: 'textInput', rate: 4, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 16, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.4, strategy: 'fixed', unit: 'millionTokens' },

        { name: 'imageInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'imageInput_cacheRead', rate: 0.5, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-08-28',
    type: 'realtime',
  },
  {
    contextWindowTokens: 16_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 241217',
    id: 'gpt-4o-realtime-preview',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'audioInput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
  {
    contextWindowTokens: 32_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 250603',
    id: 'gpt-4o-realtime-preview-2025-06-03',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'audioInput', rate: 40, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 80, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2025-06-03',
    type: 'realtime',
  },
  {
    contextWindowTokens: 16_000,
    description: 'GPT-4o 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Realtime 241001',
    id: 'gpt-4o-realtime-preview-2024-10-01', // deprecated on 2025-10-10
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'audioInput', rate: 100, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 200, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 2.5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 5, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-10-01',
    type: 'realtime',
  },
  {
    contextWindowTokens: 128_000,
    description: 'GPT-4o-mini 实时版本，支持音频和文本实时输入输出',
    displayName: 'GPT-4o Mini Realtime',
    id: 'gpt-4o-mini-realtime-preview',
    maxOutput: 4096,
    pricing: {
      units: [
        { name: 'audioInput', rate: 10, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioOutput', rate: 20, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'audioInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput_cacheRead', rate: 0.3, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textInput', rate: 0.6, strategy: 'fixed', unit: 'millionTokens' },
        { name: 'textOutput', rate: 2.4, strategy: 'fixed', unit: 'millionTokens' },
      ],
    },
    releasedAt: '2024-12-17',
    type: 'realtime',
  },
];

export const allModels = [
  ...openaiChatModels,
  ...openaiEmbeddingModels,
  ...openaiTTSModels,
  ...openaiSTTModels,
  ...openaiImageModels,
  ...openaiRealtimeModels,
];

export default allModels;
