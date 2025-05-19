import { NextRequest, NextResponse } from 'next/server';
import { getRaasConnectionConfig } from '@/config/raas';
import { deleteTenant } from '@sutech-jp/raas-client-for-typescript';
const config = getRaasConnectionConfig(); //設定情報

export async function GET(request: NextRequest, props: { params: Promise<{ dataImportId :string}> }) {
    return NextResponse.json(await deleteTenant(config, 'dummy-tenant')); //存在しないテナントなのでエラーになります
}
