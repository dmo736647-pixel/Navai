import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';

export const PrivacyPolicy: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacy Policy - NavAI</title>
        <meta name="description" content="Privacy Policy for NavAI - AI Tools Navigator" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-blue-400">Privacy Policy</h1>
          <p className="mb-4 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">1. Introduction</h2>
            <p className="mb-4 text-gray-300">
              Welcome to NavAI ("we," "our," or "us"). We respect your privacy and are committed to protecting your personal data. 
              This privacy policy will inform you as to how we look after your personal data when you visit our website (navai.space) 
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">2. Data We Collect</h2>
            <p className="mb-4 text-gray-300">
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data:</strong> Includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
            <p className="mb-4 text-gray-300">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-300 space-y-2">
              <li>To provide and improve our service.</li>
              <li>To analyze usage of our website (e.g., Google Analytics).</li>
              <li>To serve advertisements (e.g., Google AdSense).</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">4. Cookies and Advertising</h2>
            <p className="mb-4 text-gray-300">
              We use cookies to enhance your experience. Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to your website or other websites.
            </p>
            <p className="mb-4 text-gray-300">
              Google's use of advertising cookies enables it and its partners to serve ads to your users based on their visit to your sites and/or other sites on the Internet.
              Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">Ads Settings</a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">5. Third-Party Links</h2>
            <p className="mb-4 text-gray-300">
              This website includes links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. 
              We do not control these third-party websites and are not responsible for their privacy statements.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};
