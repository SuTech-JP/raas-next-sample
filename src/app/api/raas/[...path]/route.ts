import { NextRequest, NextResponse } from 'next/server';


export async function GET(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  return NextResponse.json({});
}

export async function POST(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  return NextResponse.json({});
}

export async function PUT(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  return NextResponse.json({});
}

export async function DELETE(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  return NextResponse.json({});
}

export async function PATCH(request: NextRequest, props: { params: Promise<{ path: string[] }> }) {
  return NextResponse.json({});
}
