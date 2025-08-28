import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the request is for admin routes (excluding login)
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    // Check for authentication token in cookies
    const token = request.cookies.get('token')?.value;
    
    if (!token) {
      // Redirect to login if no token found
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
  ],
};
