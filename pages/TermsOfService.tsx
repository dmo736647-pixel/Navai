import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';

export const TermsOfService: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Terms of Service - NavAI</title>
        <meta name="description" content="Terms of Service for NavAI - AI Tools Navigator" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-blue-400">Terms of Service</h1>
          <p className="mb-4 text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
          
          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="mb-4 text-gray-300">
              By accessing our website at navai.space, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">2. Use License</h2>
            <p className="mb-4 text-gray-300">
              Permission is granted to temporarily download one copy of the materials (information or software) on NavAI's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">3. Disclaimer</h2>
            <p className="mb-4 text-gray-300">
              The materials on NavAI's website are provided on an 'as is' basis. NavAI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="mb-4 text-gray-300">
              Further, NavAI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">4. Limitations</h2>
            <p className="mb-4 text-gray-300">
              In no event shall NavAI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on NavAI's website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-white">5. Accuracy of Materials</h2>
            <p className="mb-4 text-gray-300">
              The materials appearing on NavAI's website could include technical, typographical, or photographic errors. NavAI does not warrant that any of the materials on its website are accurate, complete or current. NavAI may make changes to the materials contained on its website at any time without notice.
            </p>
          </section>
        </div>
      </div>
    </Layout>
  );
};
