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
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/*
          Script jalan SEBELUM paint pertama — tidak ada flash.
          Default: LIGHT. Dark hanya aktif jika user sebelumnya memilih dark.
          Sengaja TIDAK pakai prefers-color-scheme agar default selalu terang.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  if (localStorage.getItem('theme') === 'dark') {
                    document.documentElement.classList.add('dark');
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