import React, { useState } from 'react';

const Blog: React.FC = () => {
  // State for managing the email input field
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Function to handle the Getform.io subscription form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setLoading(true);
    setMessage('');
    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('_gotcha', ''); // Honeypot field
      const res = await fetch('https://getform.io/f/bronvyxa', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setSuccess(true);
        setMessage('Successfully subscribed! Thank you.');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch {
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="blog" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light mb-4">
            Blog & <span className="iridescent-text font-medium">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Stay tuned! New blog posts and insights are coming soon.
          </p>
        </div>

        {/* Newsletter Signup with Getform.io */}
        <div className="mt-16">
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-light text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new insights on urban data science, spatial analysis, and city planning
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto items-center justify-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                disabled={loading || success}
                required
              />
              {/* Honeypot input to prevent spams */}
              <input type="hidden" name="_gotcha" style={{ display: 'none' }} />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-interactive
                disabled={loading || success}
              >
                {loading ? 'Subscribing...' : success ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {/* Display messages to the user */}
            {message && (
              <p className={`mt-4 text-sm ${success ? 'text-green-400' : 'text-red-400'}`}>{message}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;