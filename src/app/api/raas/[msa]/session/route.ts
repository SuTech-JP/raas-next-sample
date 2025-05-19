import { NextRequest, NextResponse } from 'next/server';
import { createSession, RaasSessionRequest } from '@sutech-jp/raas-client-for-typescript';
import { getRaasConnectionConfig, getRaasUserContext } from '@/config/raas';

export async function GET(request: NextRequest, { params }: { params: { msa: string } }) {
  return handleSessionRequest(request, params.msa);
}

export async function POST(request: NextRequest, { params }: { params: { msa: string } }) {
  return handleSessionRequest(request, params.msa);
}

export async function PUT(request: NextRequest, { params }: { params: { msa: string } }) {
  return handleSessionRequest(request, params.msa);
}

export async function DELETE(request: NextRequest, { params }: { params: { msa: string } }) {
  return handleSessionRequest(request, params.msa);
}

export async function PATCH(request: NextRequest, { params }: { params: { msa: string } }) {
  return handleSessionRequest(request, params.msa);
}

async function handleSessionRequest(request: NextRequest, msa: string) {
  try {
    const body = await request.json();
    const { subUrl, backUrl } = body;
    
    if (!backUrl) {
      return NextResponse.json(
        { error: 'backUrl is required' },
        { status: 400 }
      );
    }
    
    const sessionRequest: RaasSessionRequest = {
      mas: msa as 'report' | 'datatraveler',
      backUrl,
      subUrl,
    };
    
    const config = getRaasConnectionConfig();
    const userContext = getRaasUserContext();
    
    const session = await createSession(config, userContext, sessionRequest);
    return NextResponse.json(session);
  } catch (error) {
    console.error('Error handling session request:', error);
    return NextResponse.json(
      { error: 'Failed to create session' },
      { status: 500 }
    );
  }
}
