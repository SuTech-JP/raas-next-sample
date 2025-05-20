import { NextResponse } from 'next/server'
import { getRaasConnectionConfig } from '@/config/raas'
import { deleteTenant } from '@sutech-jp/raas-client-for-typescript'
const config = getRaasConnectionConfig() //設定情報

export async function GET() {
  //実際には認証情報を利用する
  const tenant = 'dummy-tenant'
  return NextResponse.json(await deleteTenant(config, tenant)) //存在しないテナントなのでエラーになります
}
