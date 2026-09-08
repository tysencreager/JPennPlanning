import type { ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import StagingBanner from '@/components/StagingBanner';

interface LayoutProps {
  children: ReactNode;
  /** page opens with a night-sky hero (nav starts transparent/light) */
  onSky?: boolean;
}

export default function Layout({ children, onSky = false }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation onSky={onSky} />
      <main className={`flex-1 ${onSky ? '' : 'pt-24 md:pt-28'}`}>{children}</main>
      <Footer />
      <StagingBanner />
    </div>
  );
}
