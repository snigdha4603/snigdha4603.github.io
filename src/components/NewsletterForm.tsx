import React, { useState } from 'react';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [gotcha, setGotcha] = useState('');
  const [status, setStatus] = useState<'idle'|'success'|'error'|'loading'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('_gotcha', gotcha);
      const res = await fetch('https://getform.io/f/bronvyxa', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4 w-full">
      <input
        type="email"
        name="email"
        placeholder="Your email address"
        required
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 w-full max-w-md"
      />
      {/* Honeypot input to prevent spams */}
      <input
        type="hidden"
        name="_gotcha"
        value={gotcha}
        onChange={e => setGotcha(e.target.value)}
        style={{ display: 'none' }}
      />
      <button
        type="submit"
        className="px-8 py-3 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition-all duration-300"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? 'Submitting...' : 'Subscribe to Newsletter'}
      </button>
      {message && (
        <div className={`text-center text-sm mt-2 ${status === 'success' ? 'text-green-400' : 'text-red-400'}`}>{message}</div>
      )}
    </form>
  );
};

export default NewsletterForm;
