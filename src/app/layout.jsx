import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from 'sonner'

import "./globals.css";

export const metadata = {
  title: "Lunatic Music",
  description: "Created By Utkarsh aka Lunatic",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">


        <body>
          <ThemeProvider
            attribute="class"
            forcedTheme='dark'
            storageKey='gamehub-theme'
          >
            <Toaster theme="light" position='bottom-center' />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
