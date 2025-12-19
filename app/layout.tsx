import type { Metadata } from "next";
import { Rubik, Poppins, Architects_Daughter } from "next/font/google";
import "./globals.css";
import TopNav from "./components/TopNav";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const architects_daughter = Architects_Daughter({
  variable: "--font-architects-daughter",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Gitrankhub",
  description: "A platform to rank GitHub repositories based on various metrics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} ${rubik.className} ${architects_daughter.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >

          <TopNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
