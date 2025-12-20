import { useState, useEffect } from 'react';
import { X, Send, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const POPUP_STORAGE_KEY = 'jpenn_welcome_popup_seen';

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem(POPUP_STORAGE_KEY);
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem(POPUP_STORAGE_KEY, 'true');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mojaezzw', {
        method: 'POST',
        body: JSON.stringify({ email, source: 'welcome_popup' }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        localStorage.setItem(POPUP_STORAGE_KEY, 'true');
        // Close popup after showing success message
        setTimeout(() => {
          setIsOpen(false);
        }, 2000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && handleClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 bg-ring/10 rounded-full flex items-center justify-center mb-4">
            <Sparkles className="w-6 h-6 text-ring" />
          </div>
          <DialogTitle className="font-serif text-2xl text-center">
            Welcome to J Penn Planning!
          </DialogTitle>
          <DialogDescription className="text-center">
            Stay updated on upcoming events, event trends, and exclusive content. Join our community!
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          {status === 'success' ? (
            <div className="text-center py-4">
              <p className="text-green-600 font-medium">Thanks for subscribing!</p>
              <p className="text-sm text-muted-foreground mt-1">We'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'submitting'}
              />
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1"
                  onClick={handleClose}
                  disabled={status === 'submitting'}
                >
                  No thanks
                </Button>
                <Button
                  type="submit"
                  className="flex-1"
                  disabled={status === 'submitting'}
                >
                  <Send className="w-4 h-4 mr-2" />
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
