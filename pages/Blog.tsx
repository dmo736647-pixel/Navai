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
        <title>AI Insights & Guides - NavAI Blog</title>
        <meta name="description" content="Read the latest news, reviews, and guides about Artificial Intelligence tools and trends." />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">NavAI Blog</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Deep dives into the world of Artificial Intelligence. Tutorials, reviews, and industry insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-gray-800/50 rounded-2xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-900/10 group">
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-2 text-sm text-blue-400 font-medium mb-3">
                  <span className="bg-blue-500/10 px-3 py-1 rounded-full">{post.category}</span>
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
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <User size={14} />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.slug}`}
                  className="mt-4 flex items-center gap-2 text-white font-semibold hover:gap-3 transition-all"
                >
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
};
