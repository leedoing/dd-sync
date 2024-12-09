'use client';

import { datadogRum } from '@datadog/browser-rum';

export function DatadogRUM() {
  datadogRum.init({
    applicationId: '267deee3-0bfc-439b-a059-e20ac7c1afd2',
    clientToken: 'pub438544fdaf9c6399426a1fa39453ef00',
    site: 'datadoghq.com',
    service: 'dd-sync',
    env: 'prod',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 97,
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
  });

  return null;
} 