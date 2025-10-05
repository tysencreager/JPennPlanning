import { Switch, Route, Redirect } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import EventsPage from "@/pages/EventsPage";
import GalleryPage from "@/pages/GalleryPage";
import QuizPage from "@/pages/QuizPage";
import BookPage from "@/pages/BookPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import CancellationPolicy from "@/pages/CancellationPolicy";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/events" component={EventsPage} />
      <Route path="/gallery" component={GalleryPage} />
      <Route path="/quiz" component={QuizPage} />
      <Route path="/book" component={BookPage} />
      <Route path="/testimonials">
        <Redirect to="/gallery" />
      </Route>
      <Route path="/contact" component={ContactPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/cancellation-policy" component={CancellationPolicy} />
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
