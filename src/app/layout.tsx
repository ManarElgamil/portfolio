import '@/styles/globals.css'
import { personalInfo } from '@/data/portfolio'

export const metadata = {
  metadataBase: new URL('https://manarelgamil.dev'),
  title: `${personalInfo.name} - ${personalInfo.title}`,
  description: personalInfo.bio,
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio,
    type: 'website',
    images: [
      {
        url: '/images/logo.png',
        width: 32,
        height: 32,
        alt: `${personalInfo.name} Logo`,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}