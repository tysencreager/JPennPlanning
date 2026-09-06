import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { site } from '@/data/site';

interface NewsletterFormProps {
  source: string;
  /** extra fields to send along (e.g. assessment result) */
  extra?: Record<string, string>;
  placeholder?: string;
  buttonLabel?: string;
  successMessage?: string;
  className?: string;
}

export default function NewsletterForm({
  source,
  extra,
  placeholder = 'Your email',
  buttonLabel = 'Stay connected',
  successMessage = "You're in. Welcome — you belong here.",
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch(site.forms.newsletter, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source, ...extra }),
      });
      if (res.ok) {
        setStatus('success');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <p className={`font-display text-xl text-gold ${className}`} role="status">
        {successMessage}
      </p>
    );
  }

  return (
    <form onSubmit={submit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <label className="sr-only" htmlFor={`email-${source}`}>Email</label>
      <Input
        id={`email-${source}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        disabled={status === 'submitting'}
        className="h-11 bg-background/60 border-border focus-visible:ring-gold"
      />
      <Button type="submit" disabled={status === 'submitting'} className="h-11 eyebrow shrink-0" data-testid={`button-subscribe-${source}`}>
        {status === 'submitting' ? 'One moment…' : buttonLabel}
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
      {status === 'error' && (
        <p className="text-sm text-destructive sm:basis-full" role="alert">
          Something went wrong. Please try again or email {site.email}.
        </p>
      )}
    </form>
  );
}
