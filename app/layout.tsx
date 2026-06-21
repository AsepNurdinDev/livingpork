import type { Metadata } from "next";
import { ThemeProvider } from "@/src/components/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://livingpork.com"),

  title: {
    default: "Living Pork | Daging Babi Segar Berkualitas",
    template: "%s | Living Pork",
  },

  description:
    "Living Pork menyediakan daging babi segar berkualitas, higienis, dan terpercaya untuk kebutuhan rumah tangga, restoran, hotel, dan usaha kuliner.",

  keywords: [
    "daging babi",
    "daging babi segar",
    "jual daging babi",
    "supplier daging babi",
    "daging babi berkualitas",
    "babi segar",
    "pork fresh",
    "pork supplier",
    "pork indonesia",
    "daging babi premium",
    "daging babi bali",
    "living pork",
    "pork meat",
    "daging babi restoran",
    "daging babi hotel",
  ],

  authors: [{ name: "Living Pork" }],
  creator: "Living Pork",
  publisher: "Living Pork",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://livingpork.com",
    siteName: "Living Pork",
    title: "Living Pork | Daging Babi Segar Berkualitas",
    description:
      "Daging babi segar berkualitas tinggi untuk kebutuhan rumah tangga, restoran, hotel, dan usaha kuliner.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Living Pork",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Living Pork",
    description: "Daging babi segar berkualitas tinggi dan terpercaya.",
    images: ["/og-image.jpg"],
  },

  alternates: {
    canonical: "https://livingpork.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="id"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
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
          <ScrollToTop />
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}