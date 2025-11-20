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

export const authRegistryCode = (
    token: string,
) => `import { NextRequest, NextResponse } from "next/server"

import { capturePrivateRegistryEvent } from '@wandry/analytics-sdk;

// Add token to .env file as NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN=${token}

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  // Get token from Authorization header.
  const authHeader = request.headers.get("authorization")
  const token = authHeader?.replace("Bearer ", "")
 
  // Or from query parameters.
  const queryToken = request.nextUrl.searchParams.get("token")
 
  // Check if token is valid.
  if (!isValidToken(token || queryToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }
 
  // Check if token can access this component.
  if (!hasAccessToComponent(token, params.name)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }
 
  // Return the component.
  const component = await getComponent(params.name)

  capturePrivateRegistryEvent(request, proccess.env.NEXT_PUBLIC_WANDRY_REGISTRY_TOKEN);

  return NextResponse.json(component)
}`;
