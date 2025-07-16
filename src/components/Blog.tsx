import React, { useState } from 'react';
import { Download } from 'lucide-react';

const Blog: React.FC = () => {
  // State for managing the email input field
  const [email, setEmail] = useState('');
  // State for managing the loading status of the subscription
  const [loading, setLoading] = useState(false);
  // State for displaying messages to the user (e.g., success, error)
  const [message, setMessage] = useState('');
  // State to track if the subscription was successful
  const [subscribed, setSubscribed] = useState(false);

  // IMPORTANT: This is the Web app URL you copied from Google Apps Script deployment!
  const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzx267eEPZr5_i8DllDtI6ALxjrwc_r8gJaHQWHKAUHAfcTmUueWbbDthvZu_EWn_eqbA/exec';

  // Function to handle the subscription form submission
  const handleSubscribe = async () => {
    // Basic email validation
    if (!email || !email.includes('@')) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true); // Set loading to true while the request is in progress
    setMessage(''); // Clear any previous messages

    try {
      const response = await fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
        // Important for Google Apps Script: redirect 'follow' is often needed
        redirect: 'follow'
      });

      // Google Apps Script usually returns text, not always JSON directly
      const textResponse = await response.text();
      let data;
      try {
        data = JSON.parse(textResponse);
      } catch (parseError) {
        console.error("Failed to parse JSON response:", textResponse, parseError);
        setMessage('Subscription failed: Invalid response from server.');
        return;
      }

      if (response.ok && data.success) { // Check if the HTTP status is OK and backend indicates success
        setMessage('Successfully subscribed! Thank you.');
        setSubscribed(true); // Mark as subscribed
        setEmail(''); // Clear the email input field
      } else {
        // Handle specific error messages from the backend, or a generic one
        setMessage(data.message || 'Subscription failed. Please try again.');
      }

    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('An unexpected error occurred. Please try again later.');
    } finally {
      setLoading(false); // Set loading to false once the request is complete
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

        {/* Newsletter Signup remains for future updates */}
        <div className="mt-16">
          <div className="glass p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-light text-white mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Get notified when I publish new insights on urban data science, spatial analysis, and city planning
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email} // Bind input value to state
                onChange={(e) => setEmail(e.target.value)} // Update state on change
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 transition-colors"
                disabled={loading || subscribed} // Disable input while loading or if already subscribed
              />
              <button
                onClick={handleSubscribe} // Call handleSubscribe on click
                className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-100 transition-colors"
                data-interactive
                disabled={loading || subscribed} // Disable button while loading or if already subscribed
              >
                {loading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </div>
            {/* Display messages to the user */}
            {message && (
              <p className={`mt-4 text-sm ${subscribed ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;