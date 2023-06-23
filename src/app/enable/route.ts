import { draftMode } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  draftMode().enable();
  const url = new URL(req.nextUrl);
  const searchParams = url.searchParams;
  const path = searchParams.get("path");

  return NextResponse.redirect(new URL(path || "/", url.origin));
}
