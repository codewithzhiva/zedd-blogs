
import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";

const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our newsletter. Check your email for the AI prompt pack!",
      });
      setEmail('');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 md:p-8">
      <h3 className="text-2xl font-bold mb-2">Join the AI Content Revolution</h3>
      <p className="text-gray-600 mb-4">
        Get weekly tips, tool reviews, and expert prompts delivered straight to your inbox.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full btn btn-primary py-3 font-semibold"
          disabled={isLoading}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe & Get Free AI Prompt Pack'}
        </button>
      </form>
      
      <p className="text-xs text-gray-500 mt-4">
        By subscribing, you agree to our Privacy Policy and to receive our emails. 
        You can unsubscribe at any time.
      </p>
    </div>
  );
};

export default NewsletterForm;
