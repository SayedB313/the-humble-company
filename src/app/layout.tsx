import './globals.css'
import { Montserrat } from 'next/font/google'
import { Metadata } from 'next'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'The Humble Company | Government Relations Growth & Client Acquisition',
  description: 'The Humble Company empowers government relations (GR) firms to accelerate growth, win high-value clients, and stand out in a competitive landscape. Full-service business development and exclusive opportunity matching for GR agencies.',
  keywords: 'strategic advisory, growth capital, equity raising, strategic partnerships, joint ventures, minority recapitalization, market expansion, business transformation, investment advisory',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' }
    ],
    apple: [
      { url: '/apple-touch-icon.png' }
    ]
  },
  robots: 'index, follow',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#14213D',
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <head>
        <meta httpEquiv="x-dns-prefetch-control" content="on" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#14213D" />
        <script type="text/javascript" src="https://embed.cal.com/embed.js" async></script>
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}