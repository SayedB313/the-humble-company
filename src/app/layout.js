import './globals.css'

export const metadata = {
  title: 'Email Protocol - B2B Cold Email Marketing Agency',
  description: 'Boost your B2B revenue with expert cold email strategies and services from Email Protocol.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}