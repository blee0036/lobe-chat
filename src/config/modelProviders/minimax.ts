import { ModelProviderCard } from '@/types/llm';

// ref: https://platform.minimaxi.com/document/Models
const Minimax: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_048_576,
      description:
        'MiniMax native multimodal agent model with 1M context for coding, tools, image and video understanding.',
      displayName: 'MiniMax M3',
      enabled: true,
      functionCall: true,
      id: 'MiniMax-M3',
      reasoning: true,
      vision: true,
    },
    {
      contextWindowTokens: 204_800,
      description:
        'MiniMax agentic productivity model for coding, office workflows and multi-step tool use.',
      displayName: 'MiniMax M2.7',
      enabled: true,
      functionCall: true,
      id: 'MiniMax-M2.7',
      reasoning: true,
    },
    {
      contextWindowTokens: 204_800,
      description:
        'High-speed variant of MiniMax M2.7 for lower latency agent and coding workflows.',
      displayName: 'MiniMax M2.7 Highspeed',
      functionCall: true,
      id: 'MiniMax-M2.7-highspeed',
      reasoning: true,
    },
    {
      contextWindowTokens: 204_800,
      description: 'MiniMax M2.5 model optimized for real-world productivity, coding and tool use.',
      displayName: 'MiniMax M2.5',
      enabled: true,
      functionCall: true,
      id: 'MiniMax-M2.5',
      reasoning: true,
    },
    {
      contextWindowTokens: 204_800,
      description: 'High-speed variant of MiniMax M2.5 for fast coding and productivity workloads.',
      displayName: 'MiniMax M2.5 Highspeed',
      functionCall: true,
      id: 'MiniMax-M2.5-highspeed',
      reasoning: true,
    },
  ],
  checkModel: 'MiniMax-M3',
  description:
    'MiniMax 是 2021 年成立的通用人工智能科技公司，致力于与用户共创智能。MiniMax 自主研发了不同模态的通用大模型，其中包括万亿参数的 MoE 文本大模型、语音大模型以及图像大模型。并推出了海螺 AI 等应用。',
  id: 'minimax',
  modelsUrl: 'https://platform.minimaxi.com/document/Models',
  name: 'Minimax',
  settings: {
    disableBrowserRequest: true, // CORS error
    proxyUrl: {
      placeholder: 'https://api.minimax.chat/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    sdkType: 'openai',
  },
  url: 'https://www.minimaxi.com',
};

export default Minimax;
