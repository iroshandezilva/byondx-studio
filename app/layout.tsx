import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Byondx | Design-led SaaS & Product Design Studio",
  description: "Byondx is a design-led studio shaping SaaS and software products that look and work better. We turn business value into design that drives revenue.",
  metadataBase: new URL("https://byondx.com"),
  openGraph: {
    type: "website",
    title: "Byondx | Design-led SaaS & Product Design Studio",
    description: "Byondx is a design-led studio shaping SaaS and software products that look and work better. We turn business value into design that drives revenue.",
    url: "https://byondx.com",
    siteName: "Byondx",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byondx | Design-led SaaS & Product Design Studio",
    description: "Byondx is a design-led studio shaping SaaS and software products that look and work better. We turn business value into design that drives revenue.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
