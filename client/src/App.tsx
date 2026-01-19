import { useEffect } from "react";
import { Switch, Route, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import WelcomePopup from "@/components/WelcomePopup";
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
import SaltLakeCityPage from "@/pages/SaltLakeCityPage";
import OgdenPage from "@/pages/OgdenPage";
import NotFound from "@/pages/not-found";

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
      <Route path="/salt-lake-city" component={SaltLakeCityPage} />
      <Route path="/ogden" component={OgdenPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <WelcomePopup />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
