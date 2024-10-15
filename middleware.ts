import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // templates or localization should now rewrite api/_next requests
  console.log("middeware was triggered", req.url);

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - icons (icons folder)
     * - manifest.webmanifest (web manifest file)
     * - images (images folder)
     */
    "/((?!api|ingest|_next/static|_next/image|icons|favicon.ico|manifest.webmanifest|images|artist-tools|privacy-policy|terms-of-service).*)",
  ],
};
