/**
 * Parse Better-Auth SSO providers from environment variable
 * Supports comma-separated list (both English and Chinese commas)
 * @param providersEnv - Raw environment variable value (e.g., "google,github")
 * @returns Array of enabled provider names
 */
export const parseSSOProviders = (providersEnv?: string): string[] => {
  const providers = providersEnv?.trim();

  if (!providers) {
    return [];
  }

  // Remove surrounding quotes if present (handles both single and double quotes)
  let cleanedProviders = providers;
  if ((cleanedProviders.startsWith('"') && cleanedProviders.endsWith('"')) ||
    (cleanedProviders.startsWith("'") && cleanedProviders.endsWith("'"))) {
    cleanedProviders = cleanedProviders.slice(1, -1);
  }

  return cleanedProviders
    .split(/[,，]/)
    .map((p) => p.trim())
    .filter(Boolean);
};
