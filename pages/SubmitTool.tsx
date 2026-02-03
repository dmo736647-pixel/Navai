import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export const SubmitTool: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Submit AI Tool - NavAI</title>
        <meta name="description" content="Submit your AI tool to NavAI directory. Reach thousands of AI enthusiasts and professionals." />
      </Helmet>

      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Submit Your AI Tool</h1>
          <p className="text-xl text-gray-400">
            Join the fastest growing AI tool directory. Get discovered by thousands of users daily.
          </p>
        </div>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
          <div className="flex items-start gap-4 mb-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
            <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Why Submit?</h3>
              <p className="text-gray-300">
                NavAI connects your tool with early adopters, developers, and businesses looking for AI solutions. 
                Standard submission is free.
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Tool Name *</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="e.g. SuperAI"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Website URL *</label>
                <input 
                  type="url" 
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Short Description *</label>
              <textarea 
                rows={3}
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Describe your tool in 1-2 sentences..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Categories</label>
              <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                <option>Text & Writing</option>
                <option>Image Generation</option>
                <option>Video Creation</option>
                <option>Audio & Music</option>
                <option>Programming</option>
                <option>Productivity</option>
                <option>Business & Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Your Email *</label>
              <input 
                type="email" 
                className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="founder@example.com"
              />
            </div>

            <div className="pt-4">
              <button 
                type="button" // Changed to button to prevent form submission for demo
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Submit Tool
              </button>
              <p className="text-center text-gray-500 text-sm mt-4">
                By submitting, you agree to our Terms of Service. We review all submissions within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
