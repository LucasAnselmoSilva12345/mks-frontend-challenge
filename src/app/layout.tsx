import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Provider } from '@/util/Provider';
import '../scss/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MKS Sistema - Sua Loja Online de Eletrônicos',
  description:
    'Descubra o melhor em eletrônicos na MKS Sistema. De celulares a computadores, de relógios a fones de ouvido, nós temos o que você precisa para se manter conectado e atualizado. Navegue agora e entre no futuro da tecnologia.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
