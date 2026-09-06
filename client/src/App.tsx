import { useEffect } from 'react';
import { Switch, Route, Redirect, useLocation, useParams } from 'wouter';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import CoachingPage from '@/pages/CoachingPage';
import EventsPage from '@/pages/EventsPage';
import SpeakingPage from '@/pages/SpeakingPage';
import WritingPage from '@/pages/WritingPage';
import JournalPage from '@/pages/JournalPage';
import JournalPostPage from '@/pages/JournalPostPage';
import ConnectionsPage from '@/pages/ConnectionsPage';
import AssessmentPage from '@/pages/AssessmentPage';
import AffinityAstronPage from '@/pages/AffinityAstronPage';
import ContactPage from '@/pages/ContactPage';
import BookPage from '@/pages/BookPage';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import CancellationPolicy from '@/pages/CancellationPolicy';
import SaltLakeCityPage from '@/pages/SaltLakeCityPage';
import OgdenPage from '@/pages/OgdenPage';
import NotFound from '@/pages/not-found';

/** Old blog URLs keep working: /blog/:slug -> /journal/:slug */
function BlogPostRedirect() {
  const { slug } = useParams<{ slug: string }>();
  return <Redirect to={`/journal/${slug}`} replace />;
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    // in-page anchors (e.g. #find-your-connection) handle their own scroll
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [location]);

  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/coaching" component={CoachingPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/speaking" component={SpeakingPage} />
      <Route path="/writing" component={WritingPage} />
      <Route path="/journal" component={JournalPage} />
      <Route path="/journal/:slug" component={JournalPostPage} />
      <Route path="/connections" component={ConnectionsPage} />
      <Route path="/assessment" component={AssessmentPage} />
      <Route path="/affinity-astron" component={AffinityAstronPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/book" component={BookPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cancellation-policy" component={CancellationPolicy} />
      <Route path="/salt-lake-city" component={SaltLakeCityPage} />
      <Route path="/ogden" component={OgdenPage} />

      {/* Redirects from the previous site's URLs */}
      <Route path="/services">{() => <Redirect to="/coaching" replace />}</Route>
      <Route path="/quiz">{() => <Redirect to="/assessment" replace />}</Route>
      <Route path="/gallery">{() => <Redirect to="/connections" replace />}</Route>
      <Route path="/testimonials">{() => <Redirect to="/connections" replace />}</Route>
      <Route path="/blog">{() => <Redirect to="/journal" replace />}</Route>
      <Route path="/blog/:slug" component={BlogPostRedirect} />

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
