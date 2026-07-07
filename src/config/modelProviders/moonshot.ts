import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.moonshot.cn/docs/intro#模型列表
const Moonshot: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 262_144,
      description: 'Kimi K2.7 Code is Kimi latest coding model with text, image and video inputs.',
      displayName: 'Kimi K2.7 Code',
      enabled: true,
      functionCall: true,
      id: 'kimi-k2.7-code',
      reasoning: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description: 'Kimi K2.7 Code HighSpeed is the faster output variant of Kimi K2.7 Code.',
      displayName: 'Kimi K2.7 Code HighSpeed',
      functionCall: true,
      id: 'kimi-k2.7-code-highspeed',
      reasoning: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Kimi K2.6 is a multimodal model for long-context coding, reasoning and agent tasks.',
      displayName: 'Kimi K2.6',
      enabled: true,
      functionCall: true,
      id: 'kimi-k2.6',
      reasoning: true,
      video: true,
      vision: true,
    },
    {
      contextWindowTokens: 262_144,
      description:
        'Kimi K2 0905 preview improves agentic coding, frontend generation and long-context understanding.',
      displayName: 'Kimi K2 0905',
      enabled: true,
      functionCall: true,
      id: 'kimi-k2-0905-preview',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Kimi K2 0711 preview is a trillion-parameter MoE model for coding and agent workflows.',
      displayName: 'Kimi K2 0711',
      functionCall: true,
      id: 'kimi-k2-0711-preview',
    },
    {
      contextWindowTokens: 262_144,
      description: 'Kimi K2 Turbo preview is the high-throughput K2 variant.',
      displayName: 'Kimi K2 0905 Turbo',
      functionCall: true,
      id: 'kimi-k2-turbo-preview',
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Kimi Latest follows the latest Kimi assistant model and supports image understanding.',
      displayName: 'Kimi Latest',
      enabled: true,
      functionCall: true,
      id: 'kimi-latest',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description:
        'Kimi Thinking Preview is a multimodal thinking model for deeper reasoning tasks.',
      displayName: 'Kimi Thinking Preview',
      enabled: true,
      id: 'kimi-thinking-preview',
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 8192,
      description:
        'Moonshot V1 8K 专为生成短文本任务设计，具有高效的处理性能，能够处理8,192个tokens，非常适合简短对话、速记和快速内容生成。',
      displayName: 'Moonshot V1 8K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-8k',
    },
    {
      contextWindowTokens: 32_768,
      description:
        'Moonshot V1 32K 提供中等长度的上下文处理能力，能够处理32,768个tokens，特别适合生成各种长文档和复杂对话，应用于内容创作、报告生成和对话系统等领域。',
      displayName: 'Moonshot V1 32K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-32k',
    },
    {
      contextWindowTokens: 128_000,
      description:
        'Moonshot V1 128K 是一款拥有超长上下文处理能力的模型，适用于生成超长文本，满足复杂的生成任务需求，能够处理多达128,000个tokens的内容，非常适合科研、学术和大型文档生成等应用场景。',
      displayName: 'Moonshot V1 128K',
      enabled: true,
      functionCall: true,
      id: 'moonshot-v1-128k',
    },
  ],
  checkModel: 'kimi-latest',
  description:
    'Moonshot 是由北京月之暗面科技有限公司推出的开源平台，提供多种自然语言处理模型，应用领域广泛，包括但不限于内容创作、学术研究、智能推荐、医疗诊断等，支持长文本处理和复杂生成任务。',
  id: 'moonshot',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://platform.moonshot.cn/docs/intro',
  name: 'Moonshot',
  settings: {
    disableBrowserRequest: true, // CORS error
    proxyUrl: {
      placeholder: 'https://api.moonshot.cn/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://www.moonshot.cn',
};

export default Moonshot;
