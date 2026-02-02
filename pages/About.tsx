import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';

export const About: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About Us - NavAI</title>
        <meta name="description" content="About NavAI - Your trusted guide to the AI revolution." />
      </Helmet>
      
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-blue-400">About NavAI</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 mb-6">
              NavAI is a curated directory of the best Artificial Intelligence tools available today. Our mission is to help builders, creators, and professionals navigate the rapidly exploring AI landscape.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              With thousands of new AI tools launching every month, finding the right tool for your specific needs can be overwhelming. We manually curate, test, and categorize tools to ensure you only see the ones that bring real value.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Why NavAI?</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-300 space-y-2">
              <li><strong>Curated Selection:</strong> We don't just list everything. We pick tools that work.</li>
              <li><strong>Multi-language Support:</strong> We believe AI should be accessible to everyone, regardless of language.</li>
              <li><strong>Builder Focused:</strong> Our tools are categorized to help you build, create, and automate.</li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              Have a tool suggestion or feedback? We'd love to hear from you. 
              <br />
              Email us at: support@navai.space
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
