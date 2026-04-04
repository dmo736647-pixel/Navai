import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { BLOG_POSTS } from '../blogData';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const Blog: React.FC = () => {
  return (
    <Layout>
      <Helmet>
        <title>AI Tools Blog - Expert Reviews, Guides & Tutorials | NavAI</title>
        <meta name="description" content="Expert reviews, in-depth tutorials, and the latest news about AI tools. Learn how to choose and use the best AI solutions for your workflow." />
        <link rel="canonical" href="https://navai.space/blog" />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-sm font-medium mb-6">
            <span>📚</span>
            <span>Expert AI Tool Reviews & Guides</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">NavAI Blog</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Deep dives into the world of Artificial Intelligence. Expert tutorials, honest reviews, comparisons, and industry insights to help you make informed decisions.
          </p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-3xl p-8 lg:p-12 border border-indigo-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
                  Featured Guide
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Top 5 Free AI Tools Every Student Should Use in 2026
                </h2>
                <p className="text-gray-300 mb-6">
                  Explore the best free AI tools for students in 2026—from writing help to research assistants—that can boost productivity and academic success.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                  <span>📅 Feb 3, 2026</span>
                  <span>⏱️ 8 min read</span>
                  <span>👤 Navai Editorial Team</span>
                </div>
                <a href="/blog/top-5-free-ai-tools-students-2026" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Read Full Guide
                  <span className="text-lg">→</span>
                </a>
              </div>
              <div className="bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl p-8 flex items-center justify-center min-h-[250px]">
                <div className="text-center">
                  <div className="text-6xl mb-4">🎓</div>
                  <div className="text-white font-bold text-xl">Student's AI Toolkit 2026</div>
                  <div className="text-indigo-300 mt-2">Free Tools That Actually Work</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { name: 'Reviews', count: 24, icon: '⭐', color: 'yellow' },
              { name: 'Tutorials', count: 18, icon: '📖', color: 'blue' },
              { name: 'Comparisons', count: 12, icon: '⚖️', color: 'purple' },
              { name: 'Tools', count: 32, icon: '🛠️', color: 'green' },
              { name: 'Trends', count: 15, icon: '📈', color: 'pink' },
              { name: 'Monetization', count: 8, icon: '💰', color: 'indigo' }
            ].map((cat) => (
              <button
                key={cat.name}
                className="bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-4 border border-gray-700 hover:border-indigo-500/50 transition-all text-center group"
              >
                <div className="text-2xl mb-2">{cat.icon}</div>
                <div className="text-white font-medium text-sm group-hover:text-indigo-400 transition-colors">{cat.name}</div>
                <div className="text-gray-500 text-xs mt-1">{cat.count} posts</div>
              </button>
            ))}
          </div>
        </div>

        {/* All Posts Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 group">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm font-medium mb-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    post.category.includes('Review') ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' :
                    post.category.includes('Tutorial') ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                    post.category.includes('Comparison') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                    post.category.includes('Trend') ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' :
                    'bg-green-500/10 text-green-400 border border-green-500/20'
                  }`}>
                    {post.category}
                  </span>
                </div>
                
                <Link to={`/blog/${post.slug}`} className="block mb-3">
                  <h2 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>
                
                <p className="text-gray-400 mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-700/50">
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <User size={12} />
                      {post.author.split(' ')[0]}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <span className="text-xs text-gray-600">
                    {Math.floor(post.content.length / 1000)} min read
                  </span>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="mt-4 flex items-center gap-2 text-blue-400 font-semibold hover:gap-3 transition-all text-sm"
                >
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 rounded-3xl p-8 lg:p-12 border border-indigo-500/30 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated with AI Insights</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Get weekly AI tool reviews, tutorials, and industry insights delivered to your inbox. No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
            <button className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-lg transition-colors whitespace-nowrap">
              Subscribe Free
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-4">Join 10,000+ AI enthusiasts</p>
        </div>
      </div>
    </Layout>
  );
};
