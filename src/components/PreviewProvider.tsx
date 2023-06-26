"use client";

import { useMemo } from "react";
import { LiveQueryProvider } from "next-sanity/preview";
import { getClient } from "@/src/sanity/lib/client";

export default function PreviewProvider({
  children,
  token,
}: {
  children: React.ReactNode;
  token: string;
}) {
  const client = useMemo(() => getClient({ token }), [token]);

  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
