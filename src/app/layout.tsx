import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CodeSmith Pro - AI-Powered Developer Tools",
    template: "%s | CodeSmith Pro",
  },
  description:
    "Your AI pair-programmer for real-world development tasks. Explain, debug, refactor, and document your code with the power of AI. Ship faster, learn smarter.",
  keywords: [
    "AI coding assistant",
    "code explanation",
    "code debugging",
    "code refactoring",
    "developer tools",
    "AI pair programmer",
    "code documentation",
    "programming help",
  ],
  authors: [{ name: "CodeSmith Pro" }],
  creator: "CodeSmith Pro",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://codesmith.pro",
    siteName: "CodeSmith Pro",
    title: "CodeSmith Pro - AI-Powered Developer Tools",
    description:
      "Your AI pair-programmer for real-world development tasks. Ship faster, learn smarter.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CodeSmith Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeSmith Pro - AI-Powered Developer Tools",
    description:
      "Your AI pair-programmer for real-world development tasks. Ship faster, learn smarter.",
    images: ["/og-image.png"],
    creator: "@codesmithpro",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="relative min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
