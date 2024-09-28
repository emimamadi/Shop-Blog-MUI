import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Navbar } from "@/components/Navbar";

import  Footer  from "@/components/Footer";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

import { ThemeProvider } from "@mui/material/styles";
import theme from "@/components/theme";

import { store } from "@/redux/store";
import ReduxProvider from "@/redux/Provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop-Blog-MUI-API",
  description: "Shop-Blog-MUI-API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
              <Navbar />
              {children}
              <Footer />
            </ThemeProvider>
          </AppRouterCacheProvider>
        </body>
      </ReduxProvider>
    </html>
  );
}
