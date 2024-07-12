import { config } from "@/config";
import { UserButton } from "@/features/auth/user-button";
import { ThemeToggle } from "@/features/theme/theme-toggle";
import { cn } from "@/lib/utils";
import type { LayoutParams } from "@/types/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: config.title,
  description: config.description,
};

export default async function RootLayout({ children }: LayoutParams<{}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" {...config} />
      </head>
      <body className={cn("min-h-screen h-full", inter.className)}>
        <Provider>
          <div className="grid min-h-screen grid-rows-[auto_1fr]">
            <nav className="flex w-full items-center justify-end gap-2 border-b px-5 py-3">
              <ThemeToggle />
              <UserButton />
            </nav>
            <main>{children}</main>
          </div>
        </Provider>
      </body>
    </html>
  );
}
