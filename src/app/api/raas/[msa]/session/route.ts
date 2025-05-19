import { NextRequest, NextResponse } from 'next/server';

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
  return NextResponse.json({
    application: msa,
    url: '',
    newUrl: ''
  });
}
