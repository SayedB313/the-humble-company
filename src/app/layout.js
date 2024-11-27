import './globals.css'

export const metadata = {
  title: 'Vector Asylum | AI-Powered Deal Sourcing Platform',
  description: 'Enterprise-grade deal sourcing platform powered by AI and data intelligence. Transform your investment firm\'s deal flow with our advanced technology.',
  keywords: 'deal flow, investment opportunities, AI deal sourcing, institutional investors, deal pipeline',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>{children}</body>
    </html>
  )
}