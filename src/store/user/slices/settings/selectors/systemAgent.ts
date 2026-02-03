import type { UserStore } from '@/store/user';
import { settingsSelectors } from './settings';

const currentSystemAgent = (s: UserStore) => settingsSelectors.currentSystemAgent(s);

const translation = (s: UserStore) => currentSystemAgent(s).translation;
const topic = (s: UserStore) => currentSystemAgent(s).topic;
const thread = (s: UserStore) => currentSystemAgent(s).thread;
const agentMeta = (s: UserStore) => currentSystemAgent(s).agentMeta;
const queryRewrite = (s: UserStore) => currentSystemAgent(s).queryRewrite;
const historyCompress = (s: UserStore) => currentSystemAgent(s).historyCompress;
const generationTopic = (s: UserStore) => currentSystemAgent(s).generationTopic;

export const systemAgentSelectors = {
  agentMeta,
  generationTopic,
  historyCompress,
  queryRewrite,
  thread,
  topic,
  translation,
};
