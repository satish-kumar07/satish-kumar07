import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";

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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground antialiased`}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
