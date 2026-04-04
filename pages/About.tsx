import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { Sparkles, Target, Users, Globe, CheckCircle, Zap, Shield, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>About NavAI - Your Trusted AI Tools Navigator</title>
        <meta name="description" content="NavAI is a curated directory of 200+ AI tools, helping 100,000+ users monthly find the perfect AI solutions for their needs. Discover, compare, and choose the best AI tools." />
        <link rel="canonical" href="https://navai.space/about" />
      </Helmet>
      
      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
            <Sparkles size={16} />
            <span>Trusted by 100,000+ Users Monthly</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Your Trusted Guide to the{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
              AI Revolution
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            NavAI helps builders, creators, and professionals discover, compare, and choose the best AI tools from over 200+ curated solutions across 8 categories.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-indigo-400 mb-2">200+</div>
            <div className="text-gray-400 text-sm">AI Tools Curated</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">100K+</div>
            <div className="text-gray-400 text-sm">Monthly Users</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">8</div>
            <div className="text-gray-400 text-sm">Tool Categories</div>
          </div>
          <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700 text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">9</div>
            <div className="text-gray-400 text-sm">Languages Supported</div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 lg:p-12 border border-gray-700 shadow-xl mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-8 h-8 text-indigo-400" />
            <h2 className="text-3xl font-bold text-white">Our Mission</h2>
          </div>
          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
            With thousands of new AI tools launching every month, finding the right tool for your specific needs can be overwhelming. 
            We manually curate, test, and categorize tools to ensure you only see the ones that bring real value.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            Our goal is to democratize access to AI technology by providing comprehensive, unbiased reviews and comparisons 
            in multiple languages, making AI accessible to everyone, regardless of their technical background or location.
          </p>
        </div>

        {/* Why Choose NavAI */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Why Choose NavAI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 bg-indigo-600/20 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Curated Selection</h3>
              <p className="text-gray-400 text-sm">
                We don't just list everything. Every tool is manually reviewed and tested to ensure quality and reliability.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Multi-language Support</h3>
              <p className="text-gray-400 text-sm">
                Available in 9 languages including English, Chinese, Japanese, Spanish, and more. AI should be accessible to everyone.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Builder Focused</h3>
              <p className="text-gray-400 text-sm">
                Tools are categorized by use case to help you build, create, and automate more efficiently.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-green-500/50 transition-all">
              <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI-Powered Discovery</h3>
              <p className="text-gray-400 text-sm">
                Our AI assistant helps you find the perfect tool based on your specific needs and requirements.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-yellow-500/50 transition-all">
              <div className="w-12 h-12 bg-yellow-600/20 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Unbiased Reviews</h3>
              <p className="text-gray-400 text-sm">
                Independent, honest reviews with real user feedback. We maintain editorial independence.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-pink-500/50 transition-all">
              <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Always Updated</h3>
              <p className="text-gray-400 text-sm">
                New tools added weekly. We stay on top of the latest AI trends and releases.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 rounded-2xl p-8 lg:p-12 border border-indigo-500/20 mb-12">
          <h2 className="text-3xl font-bold text-white text-center mb-8">What We Cover</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'Text & Writing', icon: '📝' },
              { name: 'Image Generation', icon: '🎨' },
              { name: 'Video Creation', icon: '🎬' },
              { name: 'Audio & Music', icon: '🎵' },
              { name: 'Coding Tools', icon: '💻' },
              { name: 'Productivity', icon: '⚡' },
              { name: 'Business & Marketing', icon: '💼' },
              { name: 'AI Companions', icon: '🤖' }
            ].map((cat) => (
              <div key={cat.name} className="bg-gray-800/50 rounded-xl p-4 border border-gray-700 text-center hover:border-indigo-500/50 transition-all">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="text-white font-medium text-sm">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Standards */}
        <div className="bg-gray-800/50 rounded-2xl p-8 lg:p-12 border border-gray-700 mb-12">
          <h2 className="text-3xl font-bold text-white mb-6">Our Editorial Standards</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Hands-on Testing</h3>
                <p className="text-gray-400">
                  We actually use every tool we review. Our team tests features, performance, and real-world usability.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Transparent Methodology</h3>
                <p className="text-gray-400">
                  Clear rating criteria based on features, ease of use, value for money, and customer support.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Regular Updates</h3>
                <p className="text-gray-400">
                  Reviews are updated quarterly to reflect new features, pricing changes, and user feedback.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">Community Feedback</h3>
                <p className="text-gray-400">
                  We incorporate real user reviews and feedback to provide balanced perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 rounded-2xl p-8 lg:p-12 border border-indigo-500/20">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-gray-300 text-center">
              Have a tool suggestion, feedback, or partnership inquiry? We'd love to hear from you.
            </p>
            
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 font-medium w-20">Email:</span>
                  <a href="mailto:support@navai.space" className="hover:text-indigo-400 transition-colors">support@navai.space</a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-indigo-400 font-medium w-20">Response:</span>
                  <span>Within 24-48 hours</span>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 text-sm mb-4">
                For tool submissions, please use our{' '}
                <a href="/submit" className="text-indigo-400 hover:underline">Submit Tool</a> page.
              </p>
              <p className="text-gray-500 text-xs">
                NavAI is powered by Gemini Flash & Pro • © {new Date().getFullYear()} All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
