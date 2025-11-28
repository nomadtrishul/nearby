import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Proxy for SEO headers
 * Sets X-Robots-Tag headers for API routes and staging/preview deployments
 */
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;

  // Check if we're in a production environment
  const isProduction = 
    process.env.NODE_ENV === 'production' && 
    process.env.VERCEL_ENV === 'production';

  // Set X-Robots-Tag: noindex for API routes
  if (pathname.startsWith('/api/')) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  // Set X-Robots-Tag: noindex for staging/preview deployments
  if (!isProduction) {
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

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

