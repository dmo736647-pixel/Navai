import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';

export const AffiliateDisclosure: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>Affiliate Disclosure - NavAI</title>
        <meta name="description" content="Affiliate Disclosure for NavAI" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto p-6 lg:p-8">
        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-blue-400">Affiliate Disclosure</h1>
          
          <div className="prose prose-invert max-w-none text-gray-300">
            <p className="mb-4">
              Last Updated: {new Date().toLocaleDateString()}
            </p>

            <p className="mb-4">
              NavAI believes in transparency and honesty on the web. In compliance with the Federal Trade Commission (FTC) guidelines, we want to disclose that some of the links on this website are affiliate links.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">What is an Affiliate Link?</h2>
            <p className="mb-4">
              An affiliate link is a specific URL that contains a unique tracking code. If you click on an affiliate link on NavAI and make a purchase, we may receive a small commission at no additional cost to you. The price you pay remains the same whether you use our affiliate link or go directly to the vendor's website.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Our Editorial Integrity</h2>
            <p className="mb-4">
              Our goal is to provide the most helpful and accurate information about AI tools. We only recommend products and services that we believe will add value to our readers. The inclusion of affiliate links does not influence our editorial content, reviews, or comparisons.
            </p>
            <p className="mb-4">
              We carefully vet the tools listed on our platform. However, we cannot guarantee the performance or quality of any third-party products. We encourage you to do your own research before making any purchase.
            </p>

            <h2 className="text-2xl font-bold text-white mt-8 mb-4">Affiliate Programs</h2>
            <p className="mb-4">
              NavAI is a participant in various affiliate programs designed to provide a means for sites to earn advertising fees by advertising and linking to partner sites. These programs may include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>PartnerStack</li>
              <li>Impact Radius</li>
              <li>Individual AI Tool Affiliate Programs</li>
            </ul>

            <p className="mt-8 pt-8 border-t border-gray-700 text-sm text-gray-400">
              If you have any questions regarding this disclosure, please feel free to contact us at support@navai.space.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};
