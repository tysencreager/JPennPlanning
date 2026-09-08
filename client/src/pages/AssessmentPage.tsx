import { useMemo, useState, useEffect } from 'react';
import { Link } from 'wouter';
import { ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/Layout';
import SEO, { createBreadcrumbSchema } from '@/components/SEO';
import Starfield from '@/components/celestial/Starfield';
import Constellation from '@/components/celestial/Constellation';
import NewsletterForm from '@/components/NewsletterForm';
import { Container, Eyebrow, Reveal } from '@/components/Section';
import { Button } from '@/components/ui/button';
import { personalConstellation } from '@/data/constellations';
import {
  questions,
  stars,
  results,
  scoreAnswers,
  dimmestStar,
  brightestStar,
  brightnessMap,
  type StarId,
} from '@/data/assessment';

type Stage = 'intro' | 'quiz' | 'result';

export default function AssessmentPage() {
  const [stage, setStage] = useState<Stage>('intro');
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const breadcrumb = createBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Affinity Astron Assessment', url: '/assessment' },
  ]);

  const scores = useMemo(() => scoreAnswers(answers), [answers]);
  const dim = dimmestStar(scores);
  const bright = brightestStar(scores);
  const brightness = brightnessMap(scores);
  const result = results[dim];

  const q = questions[index];
  const star = stars.find((s) => s.id === q.star)!;
  const total = questions.length;
  const progress = (index + (answers[q.id] !== undefined ? 1 : 0)) / total;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [stage, index]);

  const choose = (optionIndex: number) => {
    const next = { ...answers, [q.id]: optionIndex };
    setAnswers(next);
    window.setTimeout(() => {
      if (index < total - 1) setIndex(index + 1);
      else setStage('result');
    }, 260);
  };

  const restart = () => {
    setAnswers({});
    setIndex(0);
    setStage('intro');
  };

  return (
    <Layout onSky>
      <SEO
        title="What's Missing From Your Constellation? | Affinity Astron Assessment"
        description="Take the free 5-minute Affinity Astron assessment and discover the area of connection that's asking for your attention: Self, People, Community, or Purpose."
        path="/assessment"
        keywords="connection quiz, Affinity Astron assessment, find your dimmest star, self assessment for women, connection coaching quiz"
        schema={breadcrumb}
      />

      <section className="sky sky-gradient relative overflow-hidden min-h-[100svh] pt-36 md:pt-44 pb-24">
        <Starfield count={90} seed={53} clear={[20, 80]} />
        <Container size="md" className="relative">
          <AnimatePresence mode="wait">
            {/* ------------------------------------------------------------ */}
            {stage === 'intro' && (
              <motion.div key="intro" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.5 }}>
                <div className="grid lg:grid-cols-[1.3fr_1fr] gap-14 items-center">
                  <div>
                    <Eyebrow className="mb-6">Free 5-minute assessment</Eyebrow>
                    <h1 className="font-display text-5xl md:text-7xl font-light text-ivory leading-[1]" data-testid="text-assessment-title">
                      What&apos;s missing from your constellation?
                    </h1>
                    <p className="mt-7 text-lg md:text-xl text-ivory/75 leading-relaxed max-w-xl">
                      Discover the area of connection that&apos;s asking for your attention. Sixteen honest questions. No right answers. No numbers, no labels. Just your constellation, with one star asking to be seen.
                    </p>
                    <ul className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-3">
                      {stars.map((s) => (
                        <li key={s.id} className="flex gap-3">
                          <span className="text-gold" aria-hidden="true">✦</span>
                          <span className="text-ivory/85"><span className="eyebrow text-ivory">{s.name}</span><span className="block text-sm text-ivory/60 mt-0.5">{s.subtitle}</span></span>
                        </li>
                      ))}
                    </ul>
                    <Button size="lg" className="mt-10 eyebrow h-12 px-8" onClick={() => setStage('quiz')} data-testid="button-start-assessment">
                      Begin
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                  <div className="text-ivory max-w-sm w-full mx-auto hidden lg:block">
                    <Constellation data={personalConstellation} mode="view" showLabels strokeWidth={0.45} />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------ */}
            {stage === 'quiz' && (
              <motion.div key={`q-${q.id}`} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.35 }}>
                <div className="flex items-center justify-between mb-8">
                  <p className="eyebrow text-gold"><span aria-hidden="true">✦ </span>{star.name} <span className="text-ivory/50 normal-case tracking-normal font-sans">· {star.subtitle}</span></p>
                  <p className="eyebrow text-ivory/60" data-testid="text-progress">{index + 1} / {total}</p>
                </div>
                <div className="h-px bg-ivory/15 mb-12" aria-hidden="true">
                  <motion.div className="h-px bg-gold" initial={false} animate={{ width: `${progress * 100}%` }} transition={{ duration: 0.4 }} />
                </div>
                <h2 className="font-display text-3xl md:text-5xl font-light text-ivory leading-[1.1] max-w-3xl" data-testid="text-question">{q.text}</h2>
                <ul className="mt-10 grid gap-3 max-w-3xl">
                  {q.options.map((opt, i) => {
                    const selected = answers[q.id] === i;
                    return (
                      <li key={i}>
                        <button
                          type="button"
                          onClick={() => choose(i)}
                          className={`w-full text-left rounded-sm border px-6 py-5 transition-all ${selected ? 'border-gold bg-gold/15 text-ivory' : 'border-ivory/15 bg-sky-2/40 text-ivory/85 hover:border-gold/60 hover:bg-sky-2/70'}`}
                          data-testid={`button-option-${i}`}
                        >
                          <span className="font-label text-xs tracking-[0.2em] text-gold mr-4">{String.fromCharCode(65 + i)}</span>
                          <span className="text-base md:text-lg">{opt.text}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-10 flex items-center gap-4">
                  <Button type="button" variant="ghost" className="eyebrow text-ivory/70 hover:text-ivory" onClick={() => (index === 0 ? setStage('intro') : setIndex(index - 1))} data-testid="button-back">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back
                  </Button>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------------------------------ */}
            {stage === 'result' && (
              <motion.div key="result" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 items-center">
                  <div className="text-ivory max-w-md w-full mx-auto order-2 lg:order-1">
                    <Constellation data={personalConstellation} mode="view" showLabels brightness={brightness} strokeWidth={0.45} dim={0.12} />
                    <p className="mt-4 text-center text-xs text-ivory/50 font-label tracking-widest uppercase">Your constellation · brightest: {stars.find((s) => s.id === bright)?.name}</p>
                  </div>
                  <div className="order-1 lg:order-2">
                    <Eyebrow className="mb-6">{result.title}</Eyebrow>
                    <h1 className="font-display text-5xl md:text-7xl font-light text-ivory leading-[1]" data-testid="text-result-headline">{result.headline}</h1>
                    <div className="mt-7 space-y-4 text-lg text-ivory/80 leading-relaxed">
                      {result.body.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                    <p className="mt-8 font-display italic text-2xl text-gold-soft">Your constellation isn&apos;t broken.<br />One star is simply asking to be seen.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {stage === 'result' && (
        <>
          {/* the connection experiment */}
          <section className="py-24 md:py-32 bg-background">
            <Container size="sm">
              <Reveal>
                <Eyebrow className="mb-5">A small, practical connection experiment</Eyebrow>
                <h2 className="font-display text-4xl md:text-5xl font-light text-forest leading-[1.05]">{result.experiment.name}</h2>
                <div className="mt-8 space-y-5 text-lg text-foreground/85 leading-relaxed">
                  {result.experiment.steps.map((s, i) => <p key={i}>{s}</p>)}
                  <p className="font-display text-2xl text-forest">{result.experiment.closing}</p>
                </div>
                <p className="mt-10 eyebrow text-gold">Notice what happens. That&apos;s the point.</p>
              </Reveal>
            </Container>
          </section>

          {/* keep it + go deeper */}
          <section className="sky sky-gradient relative overflow-hidden py-24 md:py-32">
            <Starfield count={40} seed={59} />
            <Container size="md" className="relative">
              <div className="grid md:grid-cols-2 gap-12">
                <Reveal>
                  <Eyebrow className="mb-5">Keep your result</Eyebrow>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-ivory leading-[1.05]">Send my constellation and experiment to my inbox.</h2>
                  <p className="mt-4 text-ivory/70 text-sm">You&apos;ll also get occasional notes from the Journal. Unsubscribe anytime.</p>
                  <NewsletterForm
                    source="assessment"
                    extra={{ dimmest_star: dim, brightest_star: bright, scores: JSON.stringify(scores) }}
                    buttonLabel="Send it"
                    successMessage="Sent. Keep an eye on your inbox."
                    className="mt-6"
                  />
                </Reveal>
                <Reveal delay={0.1}>
                  <Eyebrow className="mb-5">Want to see what else your constellation has to say?</Eyebrow>
                  <h2 className="font-display text-3xl md:text-4xl font-light text-ivory leading-[1.05]">Explore Affinity Astron Coaching.</h2>
                  <p className="mt-4 text-ivory/70 leading-relaxed">This is where the H.O.P.E. framework begins: Heal, Observe, Passion &amp; Enlightenment. One star at a time.</p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button asChild className="eyebrow" data-testid="button-result-coaching">
                      <Link href="/coaching">
                        Explore Connection Coaching
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button type="button" variant="ghost" className="eyebrow text-ivory/70 hover:text-ivory" onClick={restart} data-testid="button-restart">
                      <RotateCcw className="w-4 h-4 mr-2" />
                      Start over
                    </Button>
                  </div>
                </Reveal>
              </div>
            </Container>
          </section>
        </>
      )}
    </Layout>
  );
}
