// src/middleware.js
import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";

const intlMiddleware = createMiddleware({
  locales: ['en', 'rom', 'gm'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

export default async function middleware(request: NextRequest) {

  const current_req = request.nextUrl.pathname;
  const accessToken = request.cookies.get('accessToken')?.value;

  //check dealer
  if (current_req.includes('/dealer')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
    }

    try {
      // Decode and validate the access token
      const { role } = jwtDecode<{ role: 'user' | 'dealer' }>(accessToken);

      if (role !== 'dealer') {
        return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
    }
  }

  //check user
  if (current_req.includes('/user')) {
    if (!accessToken) {
      return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
    }

    try {
      // Decode and validate the access token
      const { role } = jwtDecode<{ role: 'user' | 'dealer' }>(accessToken);

      if (role !== 'user') {
        return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL(`/signin?next=${current_req}`, request.url));
    }
  }

  const intlResponse = await intlMiddleware(request);
  if (intlResponse) {
    return intlResponse;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|_vercel|.*\\..*).*)', // Apply middleware to all pages except static assets and API routes
  ],
};
