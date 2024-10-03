import './globals.css'

export const metadata = {
  title: 'Cold Email Associates',
  description: 'Expert cold email services for B2B sales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}