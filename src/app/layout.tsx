import type { Metadata } from 'next'
import { Inter , Almarai } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'

const inter = Inter({ subsets: ['latin'] })
const almarai = Almarai({  weight: '400', subsets: ['arabic'], variable: '--font-almarai', })







export const metadata: Metadata = {
  title: 'Roza Bath & Body',
  description: 'Site web ecommerce Roza Bath & Body',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    
    <html lang="fr" className='!scroll-smooth'>
      
      <body className={`${almarai.className} bg-[#e8d1dd] text-gray-950 h-auto overflow-y-scroll overflow-x-hidden `}>
      <Header />
        {children}
      </body>
    </html>
  )
}
