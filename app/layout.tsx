import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'The Grange Carrier™ — The Last Harvest Carrier You\'ll Ever Buy | Field & Harvest Co.',
  description: 'Stop replacing flimsy carriers every season. The Grange Carrier is built from 600D Field-Weave™ canvas with a lifetime warranty. Trusted by 22,000+ gardeners.',
  icons: {
    icon: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitled_design_81.png?v=1765838127',
    apple: 'https://cdn.shopify.com/s/files/1/0651/8299/0379/files/Untitled_design_81.png?v=1765838127',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
