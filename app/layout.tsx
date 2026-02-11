import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds",
  description: "Professional Therapy & Counseling Services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f6f1e8] text-[#24351f] antialiased overflow-x-hidden">

        {/* Main wrapper to control width + responsiveness */}
        <div className="min-h-screen flex flex-col">

          {/* Page Content */}
          <main className="flex-1 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
            {children}
          </main>

        </div>

      </body>
    </html>
  );
}
