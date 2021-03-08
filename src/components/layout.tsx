import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Header } from './header';
import { Footer } from './footer';

type LayoutProps = {
  showHeader?: boolean;
};

export const Layout: FunctionComponent<LayoutProps> = ({
  showHeader = true,
  children,
}) => (
  <div className="wrapper">
    {showHeader && <Header />}
    {children}
    <Footer />
  </div>
);
