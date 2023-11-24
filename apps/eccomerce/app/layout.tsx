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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      </head>
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
