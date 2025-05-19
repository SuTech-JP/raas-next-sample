import { NextRequest, NextResponse } from 'next/server';
import { getRaasConnectionConfig } from '@/config/raas';
import { get } from '@sutech-jp/raas-client-for-typescript';
const config = getRaasConnectionConfig(); //設定情報

export async function GET(request: NextRequest, props: { params: Promise<{ application: string; schema: string }> }) {
  const params = await props.params;
  const query = request.nextUrl.searchParams
  const queryParams:string[] = [];
  for (const key of query.keys()) {
    queryParams.push(`${key}=${query.get(key)}`);
  }
  const path = `/report/layouts/${params.application}/${params.schema}${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`;
  const result = await get(config,{ tenant: 'sample',sub: 'sample-user01'}, path);
  return NextResponse.json(result);
}
