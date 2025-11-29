import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy for SEO headers
 * Sets X-Robots-Tag headers for API routes only
 * All other pages are allowed to be indexed
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // Set X-Robots-Tag: noindex for API routes only
  // This prevents API endpoints from being indexed by search engines
  if (pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // All other pages are allowed to be indexed
  return response;
}

// Configure which routes should run this proxy
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (public folder)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)',
  ],
};

