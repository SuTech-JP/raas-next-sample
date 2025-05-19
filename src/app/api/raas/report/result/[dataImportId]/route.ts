import { NextRequest, NextResponse } from 'next/server';
import { getRaasConnectionConfig } from '@/config/raas';
import { get } from '@sutech-jp/raas-client-for-typescript';
const config = getRaasConnectionConfig(); //設定情報

export async function GET(request: NextRequest, props: { params: Promise<{ dataImportId :string}> }) {
  const params = await props.params;
  const query = request.nextUrl.searchParams
  const queryParams:string[] = [];
  for (const key of query.keys()) {
    queryParams.push(`${key}=${query.get(key)}`);
  }
  const path = `/datatraveler/import/logs/${params.dataImportId}${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`;
  const userContext = { tenant: 'sample',sub: 'sample-user01'};
  const result = await get<{id: string, status: string}>(config,userContext, path);
  if(result.status === 'FINISH'){
    const details = await get<{ dataId: string, pdfUrl: string}[]>(config,userContext, `/datatraveler/import/logs/${params.dataImportId}/data`);
    return NextResponse.json({...result, details});
  }else{
    return NextResponse.json({...result});
  }
}
