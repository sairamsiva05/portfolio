import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sairam Siva | Creative Portfolio",
  description: "A premium portfolio showcasing creative technology, visual design, and UI/UX expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} font-poppins antialiased selection:bg-accent-glow selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
