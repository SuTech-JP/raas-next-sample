import { NextRequest, NextResponse } from 'next/server';
import { getRaasConnectionConfig } from '@/config/raas';
import { get , post , put , del } from '@sutech-jp/raas-client-for-typescript';
const config = getRaasConnectionConfig(); //設定情報

export async function GET(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  const path = await parseRequest(request,props);
  const result = await get(config,{ tenant: 'sample',sub: 'sample-user01'}, path);
  return NextResponse.json(result);
}

export async function POST(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  const path = await parseRequest(request,props);
  const result = await post(config,{ tenant: 'sample',sub: 'sample-user01'}, path,request.body);
  return NextResponse.json(result);
}

export async function PUT(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  const path = await parseRequest(request,props);
  const result = await put(config,{ tenant: 'sample',sub: 'sample-user01'}, path,request.body);
  return NextResponse.json(result);
}

export async function DELETE(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  const path = await parseRequest(request,props);
  const result = await del(config,{ tenant: 'sample',sub: 'sample-user01'}, path);
  return NextResponse.json(result);
}

const parseRequest = async (request: NextRequest,props: { params: Promise<{ path: string[] }>}) => {
  const params = await props.params;
  const query = request.nextUrl.searchParams
  const queryParams:string[] = [];
  for (const key of query.keys()) {
    queryParams.push(`${key}=${query.get(key)}`);
  }
  return `/${params.path.join('/')}${queryParams.length > 0 ? `?${queryParams.join('&')}` : ''}`;
}