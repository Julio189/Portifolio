import './globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-[#081b29]'>
        {children}
      </body>
    </html>
  )
}