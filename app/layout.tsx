import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Richard Oelschlager — Webbutvecklare i Växjö',
  description:
    'Professionella hemsidor, webbutiker och bokningssystem för småföretag i Växjö. Snabbt, modernt, mobilanpassat.',
  keywords: 'webbutvecklare Växjö, hemsida småföretag, webbshop Växjö, bokningssystem',
  authors: [{ name: 'Richard Oelschlager' }],
  openGraph: {
    title: 'Richard Oelschlager — Webbutvecklare i Växjö',
    description: 'Moderna hemsidor för lokala företag i Växjö.',
    siteName: 'Richard Oelschlager',
    locale: 'sv_SE',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
