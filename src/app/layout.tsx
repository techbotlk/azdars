import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Azdars - Delivers The Best",
  description: "Azdars delivers full-spectrum digital solutions: Software Development, Web Design, Graphic Design, Video Editing, and Digital Marketing. Delivering the best for your business.",
  keywords: "Software Development, Web Design, Digital Marketing, Azdars, Sri Lanka, Digital Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
