import { Link } from 'wouter';
import Layout from '@/components/Layout';
import Starfield from '@/components/celestial/Starfield';
import { Container } from '@/components/Section';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <Layout onSky>
      <section className="sky sky-gradient relative min-h-[80svh] flex items-center overflow-hidden">
        <Starfield count={60} seed={97} />
        <Container size="sm" className="relative text-center pt-24">
          <p className="eyebrow text-gold mb-6">404</p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-ivory leading-[1]">This star isn&apos;t on the map.</h1>
          <p className="mt-6 text-ivory/70 text-lg">The page you&apos;re looking for has moved or never existed. You still belong here, though.</p>
          <Button asChild className="mt-9 eyebrow" data-testid="button-home">
            <Link href="/">Back home</Link>
          </Button>
        </Container>
      </section>
    </Layout>
  );
}
