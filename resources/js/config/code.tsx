export const middlewareCode = (
    token: string,
) => `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { captureRegistryEvent } from '@wandry/analytics-sdk;

// Add token to .env file as NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN=${token}
export function middleware(request: NextRequest) {
    captureRegistryEvent(request, proccess.env.NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN);

    return NextResponse.redirect(new URL('/home', request.url))
}
`;

export const proxyCode = (
    token: string,
) => `import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
import { captureRegistryEvent } from '@wandry/analytics-sdk;

// Add token to .env file as NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN=${token}
export function proxy(request: NextRequest) {
    captureRegistryEvent(request, proccess.env.NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN);

    return NextResponse.redirect(new URL('/home', request.url))
}
`;
