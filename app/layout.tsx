import type { Metadata } from 'next'
import Script from 'next/script'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID

// Microsoft Clarity (session recordings + heatmaps) for every explore. landing page.
// Same project id runs on the Shopify store so store + lander sessions land in one project.
const CLARITY_PROJECT_ID = 'xu6da2h16u'

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
      <head>
        <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${CLARITY_PROJECT_ID}");`}
        </Script>
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${META_PIXEL_ID}');fbq('track','PageView');`}
          </Script>
        )}
      </head>
      <body className={`font-sans antialiased`}>
        {META_PIXEL_ID && (
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
