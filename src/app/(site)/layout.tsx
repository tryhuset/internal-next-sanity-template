import "../globals.css";
import Link from "next/link";
import { getPages } from "@/src/sanity/sanity-utils";

export const metadata = {
  title: "Next + Sanity",
  description: "Template page for next + sanity",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        <header>
          <Link href="/">Home</Link>
          <div>
            <h2>Page links without preview enabled:</h2>
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`}>
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
