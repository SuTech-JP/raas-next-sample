import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return handleRequest(request);
}

export async function POST(request: NextRequest) {
  return handleRequest(request);
}

export async function PUT(request: NextRequest) {
  return handleRequest(request);
}

export async function DELETE(request: NextRequest) {
  return handleRequest(request);
}

export async function PATCH(request: NextRequest) {
  return handleRequest(request);
}

interface SpecialRouteHandler {
  matches(path: string): boolean;
  handle(request: NextRequest): Promise<NextResponse>;
}

class SessionRouteHandler implements SpecialRouteHandler {
  matches(path: string): boolean {
    return path === '/api/hello/session';
  }

  async handle(request: NextRequest): Promise<NextResponse> {
    const token = request.headers.get('token');
    return NextResponse.json({ token });
  }
}

const specialRouteHandlers: SpecialRouteHandler[] = [
  new SessionRouteHandler(),
];

async function handleRequest(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  for (const handler of specialRouteHandlers) {
    if (handler.matches(path)) {
      return handler.handle(request);
    }
  }
  
  let body = null;
  try {
    body = await request.json();
  } catch (e) {
  }
  
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });
  
  const method = request.method;
  
  const queryParams: Record<string, string> = {};
  request.nextUrl.searchParams.forEach((value, key) => {
    queryParams[key] = value;
  });
  
  return NextResponse.json({
    message: 'Hello from the API',
    path,
    method,
    body,
    headers,
    queryParams,
    timestamp: new Date().toISOString()
  });
}
