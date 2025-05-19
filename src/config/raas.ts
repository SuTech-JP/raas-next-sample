import { RaasConnectionConfig, RaasClientContext, RaasSessionRequest, createSession } from '@sutech-jp/raas-client-for-typescript';

type RaasUserContext = RaasClientContext;

export const getRaasConnectionConfig = (): RaasConnectionConfig => {
  const isProduction = process.env.NODE_ENV === 'production';
  
  return {
    app: process.env.RAAS_APP || '[ask sutech]',
    token: process.env.RAAS_TOKEN || '[ask sutech]',
    landscape: isProduction ? 'prod' : 'dev',
  };
};

export const getRaasUserContext = (): RaasUserContext => {
  return {
    tenant: 'sample',
    sub: 'sample-user01',
  };
};
