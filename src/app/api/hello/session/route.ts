import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return handleSessionRequest(request);
}

export async function POST(request: NextRequest) {
  return handleSessionRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleSessionRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleSessionRequest(request);
}

export async function PATCH(request: NextRequest) {
  return handleSessionRequest(request);
}

async function handleSessionRequest(request: NextRequest) {
  const token = request.headers.get('token');
  return NextResponse.json({ token });
}
