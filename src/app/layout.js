import { Inter } from 'next/font/google'
import './globals.css'
import 'swiper/css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Histomapping',
  description: 'History mapping with digital methods.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
