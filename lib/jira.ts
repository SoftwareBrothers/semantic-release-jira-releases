import JiraClient from 'jira-connector';

import { PluginConfig, PluginContext } from './types';

export function makeClient(config: PluginConfig, context: PluginContext): JiraClient {
  const basicAuth = context.env.JIRA_AUTH ? {
    base64: context.env.JIRA_AUTH,
  } : {
    email: context.env.JIRA_EMAIL,
    api_token: context.env.JIRA_TOKEN,
  };
  return new JiraClient({
    host: config.jiraHost,
    basic_auth: basicAuth,
  });
}
