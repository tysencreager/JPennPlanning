import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow, Reveal } from '@/components/Section';

/**
 * "Find your connection" — gives someone their problem and lets them
 * find the solution, instead of making them guess a service category.
 */
const paths = [
  { problem: 'I need help finding myself.', to: '/coaching', label: 'Connection Coaching' },
  { problem: 'I want to bring people together.', to: '/events', label: 'Events & Experiences' },
  { problem: 'I need Jessica in front of my audience.', to: '/speaking', label: 'Speaking' },
  { problem: "I want to read what she's created.", to: '/writing', label: 'Books & Journal' },
];

export default function ServiceBreakdown({ id = 'find-your-connection', tone = 'ivory' }: { id?: string; tone?: 'ivory' | 'sky' }) {
  const isSky = tone === 'sky';
  return (
    <section id={id} className={`${isSky ? 'sky sky-gradient' : 'bg-card'} py-24 md:py-32 scroll-mt-24`}>
      <Container size="md">
        <Reveal className="text-center mb-14">
          <Eyebrow align="center" className="mb-5">Find your connection</Eyebrow>
          <h2 className={`font-display text-4xl md:text-5xl font-light ${isSky ? 'text-ivory' : 'text-forest'}`}>
            Start with what you need.
          </h2>
        </Reveal>
        <ul className="divide-y divide-border/70">
          {paths.map((p, i) => (
            <Reveal key={p.to} delay={i * 0.06}>
              <li>
                <Link
                  href={p.to}
                  className={`group flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-7 ${isSky ? 'text-ivory' : 'text-foreground'}`}
                  data-testid={`link-path-${p.to.replace('/', '')}`}
                >
                  <span className="font-display text-2xl md:text-3xl font-light">“{p.problem}”</span>
                  <span className="eyebrow text-gold flex items-center gap-2 group-hover:gap-3 transition-all">
                    {p.label}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </li>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
