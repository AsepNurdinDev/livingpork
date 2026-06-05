import type { Metadata } from "next";
import { ThemeProvider } from "@/src/components/ThemeProvider"; 
import Navbar from "@/components/layout/Navbar"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Living Pork",
  description: "Daging babi segar berkualitas",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // 1. Tambahkan suppressHydrationWarning di sini
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Script ini berjalan SEBELUM paint pertama, mencegah flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}