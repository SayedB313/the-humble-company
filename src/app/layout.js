import './globals.css'

export const metadata = {
  title: 'ColdEmailPro',
  description: 'Expert cold email services for B2B sales',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}