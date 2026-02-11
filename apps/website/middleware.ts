
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// In a real production environment, use Vercel Edge Config or Redis to toggle this dynamically without redeploying.
// For this architecture, we check an Environment Variable.
const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Bypass assets, api routes, and next internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/static') ||
    pathname.includes('.') // file extensions like .svg, .png
  ) {
    return NextResponse.next();
  }

  // 2. If Maintenance is ON
  if (MAINTENANCE_MODE) {
    // If user is NOT on the maintenance page, redirect them there
    if (pathname !== '/maintenance') {
        const url = request.nextUrl.clone();
        url.pathname = '/maintenance';
        return NextResponse.rewrite(url);
    }
  } 
  
  // 3. If Maintenance is OFF
  else {
    // If user tries to access /maintenance manually, kick them to Home
    if (pathname === '/maintenance') {
        return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
