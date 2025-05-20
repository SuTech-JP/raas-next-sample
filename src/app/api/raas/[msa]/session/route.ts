import { NextRequest, NextResponse } from 'next/server'
import { createSession, RaasSessionRequest } from '@sutech-jp/raas-client-for-typescript'
import { getRaasConnectionConfig } from '@/config/raas'

const config = getRaasConnectionConfig() //設定情報

export async function POST(request: NextRequest, props: { params: Promise<{ msa: string }> }) {
  const params = await props.params
  return handleSessionRequest(request, params.msa)
}

async function handleSessionRequest(request: NextRequest, msa: string) {
  try {
    const body = await request.json()
    const { subUrl, backUrl } = body

    if (!backUrl) {
      return NextResponse.json({ error: 'backUrl is required' }, { status: 400 })
    }

    const sessionRequest: RaasSessionRequest = {
      mas: msa as 'report' | 'datatraveler',
      backUrl,
      subUrl,
    }

    //実際には認証情報を利用する
    const userContext = {
      tenant: 'sample',
      sub: 'sample-user01',
    }

    const session = await createSession(config, userContext, sessionRequest)
    return NextResponse.json(session)
  } catch (error) {
    console.error('Error handling session request:', error)
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 })
  }
}
