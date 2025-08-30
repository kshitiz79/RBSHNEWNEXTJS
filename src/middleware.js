import { NextResponse } from 'next/server';

export function middleware(request) {
  // Protect admin API routes
  if (request.nextUrl.pathname.startsWith('/api/contact') && request.method !== 'POST') {
    const authCookie = request.cookies.get('admin-auth');
    
    if (!authCookie || authCookie.value !== 'authenticated') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/api/contact/:path*']
};