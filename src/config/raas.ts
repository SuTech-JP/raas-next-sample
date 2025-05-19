import { RaasConnectionConfig } from '@sutech-jp/raas-client-for-typescript';

export const getRaasConnectionConfig = (): RaasConnectionConfig => {
  if (!process.env.RAAS_APP || !process.env.RAAS_TOKEN) {
    throw new Error('RAAS_APP and RAAS_TOKEN must be set');
  }
  return {
    app: process.env.RAAS_APP,
    token: process.env.RAAS_TOKEN,
    landscape: 'dev',//prodは
  };
};
