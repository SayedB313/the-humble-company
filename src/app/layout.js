import './globals.css'

export const metadata = {
  title: 'Vector Summit | AI-Powered Business Intelligence Platform',
  description: 'Enterprise-grade business intelligence platform powered by AI and data intelligence. Transform your business strategy with our advanced technology.',
  keywords: 'business intelligence, AI strategy, data intelligence, enterprise solutions, business transformation',
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