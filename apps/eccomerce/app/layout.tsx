import { Footer } from '@eccomerce/footer';
import './global.css';
import { Header } from "@eccomerce/header"

export const metadata = {
  title: 'sivitex',
  description: 'women clothings',
};

export interface RootLayoutProps {
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav><Header/></nav>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
