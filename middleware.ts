// middleware.ts
import createIntlMiddleware from 'next-intl/middleware';

export default createIntlMiddleware({
  // Specify your locales
  locales: ['en', 'bn'], 
  defaultLocale: 'en', // Set your default locale
  localePrefix: 'never'
});

// Configure paths where the middleware applies
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'], // Apply middleware only to specific paths
};
