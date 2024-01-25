import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/molecules/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-slate-100 overflow-hidden`}>
        <Sidebar />
        <main className="flex-1 mx-auto md:py-4 md:pe-4 overflow-hidden max-h-screen">
          <div className="w-full h-full md:min-h-fit min-h-screen overflow-auto bg-white rounded-lg px-5 md:py-5 py-0">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
