import { DEFAULT_SYSTEM_AGENT_CONFIG } from '@/const/settings';
import { type UserSystemAgentConfig } from '@/types/user/settings';

const protectedKeys = Object.keys(DEFAULT_SYSTEM_AGENT_CONFIG).filter(
  (key) => key !== 'followSystem',
);

const defaultTrueLey = new Set(['queryRewrite', 'autoSuggestion']);

export const parseSystemAgent = (envString: string = ''): Partial<UserSystemAgentConfig> => {
  console.log('[parseSystemAgent] START - Input:', envString);
  console.log('[parseSystemAgent] Protected keys:', protectedKeys);

  if (!envString) {
    console.log('[parseSystemAgent] Empty envString, returning {}');
    return {};
  }

  const config: Partial<UserSystemAgentConfig> = {};

  // Handle full-width commas and extra spaces
  let envValue = envString.replaceAll('，', ',').trim();

  const pairs = envValue.split(',');
  console.log('[parseSystemAgent] Pairs to process:', pairs);

  // Store default settings if there is a default=provider/model case
  let defaultSetting: { model: string; provider: string } | undefined;

  for (const pair of pairs) {
    const [key, value] = pair.split('=').map((s) => s.trim());
    console.log('[parseSystemAgent] Processing pair - key:', key, 'value:', value);

    if (key && value) {
      const [provider, ...modelParts] = value.split('/');
      const model = modelParts.join('/');

      if (!provider || !model) {
        throw new Error('Missing model or provider value');
      }

      // If it's the default key, save the default settings
      if (key === 'default') {
        defaultSetting = {
          model: model.trim(),
          provider: provider.trim(),
        };
        console.log('[parseSystemAgent] Found default setting:', defaultSetting);
        continue;
      }

      if (protectedKeys.includes(key)) {
        config[key as keyof UserSystemAgentConfig] = {
          enabled: defaultTrueLey.has(key) ? true : undefined,
          model: model.trim(),
          provider: provider.trim(),
        } as any;
        console.log('[parseSystemAgent] Added specific config for key:', key);
      }
    } else {
      throw new Error('Invalid environment variable format');
    }
  }

  // If there are default settings, apply them to all unconfigured system agents
  if (defaultSetting) {
    console.log('[parseSystemAgent] Applying default setting to all unconfigured keys');
    for (const key of protectedKeys) {
      if (!config[key as keyof UserSystemAgentConfig]) {
        config[key as keyof UserSystemAgentConfig] = {
          enabled: defaultTrueLey.has(key) ? true : undefined,
          model: defaultSetting.model,
          provider: defaultSetting.provider,
        } as any;
        console.log('[parseSystemAgent] Applied default to key:', key);
      } else {
        console.log('[parseSystemAgent] Key already configured, skipping:', key);
      }
    }
  }

  console.log('[parseSystemAgent] FINAL config:', JSON.stringify(config, null, 2));

  return config;
};
