import { Footer } from '@eccomerce/footer';
import './global.css';
import { Header } from "@eccomerce/header"
import { ReduxProvider } from '../redux/provider';

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
      <ReduxProvider>
        <nav><Header/></nav>        
          {children}
          <Footer/>
        </ReduxProvider>                     
      </body>
    </html>
  );
}
