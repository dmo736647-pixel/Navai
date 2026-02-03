import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { useParams, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../blogData';
import { Calendar, User, ArrowLeft, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INITIAL_TOOLS } from '../constants';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);
  
  // Find a featured tool (prioritize Synthesia or other featured tools)
  const featuredTool = INITIAL_TOOLS.find(t => t.id === 'synthesia') || INITIAL_TOOLS.find(t => t.featured);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <Helmet>
        <title>{post.title} - NavAI Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} />
          Back to Blog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <article>
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-6 text-gray-400 border-b border-gray-800 pb-8">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <User size={20} />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white">{post.author}</div>
                      <div className="text-xs">Author</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={18} />
                    <span className="text-sm">{post.date}</span>
                  </div>
                </div>
              </header>

              <div 
                className="prose prose-invert prose-lg max-w-none
                  prose-headings:text-white prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8
                  prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-white
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:text-gray-300
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:text-gray-300"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Newsletter / CTA Section */}
            <div className="mt-16 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 rounded-2xl p-8 border border-blue-500/20 text-center">
              <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our Newsletter</h3>
              <p className="text-gray-400 mb-6">Get the latest AI tools and trends delivered to your inbox.</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Featured Tool Widget */}
            {featuredTool && (
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 border border-slate-700 sticky top-8 shadow-xl">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-yellow-400 font-bold tracking-wide uppercase text-xs">Featured Tool</span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{featuredTool.name}</h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3">{featuredTool.description}</p>
                
                <div className="space-y-3">
                  <a 
                    href={featuredTool.affiliateUrl || featuredTool.url}
                    target="_blank"
                    rel={`noopener noreferrer ${featuredTool.affiliateUrl ? 'nofollow sponsored' : ''}`}
                    className="block w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-500 text-white text-center font-bold rounded-xl transition-colors"
                  >
                    Try {featuredTool.name} Now
                  </a>
                  <Link 
                    to={`/tool/${featuredTool.id}`}
                    className="block w-full py-3 px-4 bg-slate-700 hover:bg-slate-600 text-white text-center font-medium rounded-xl transition-colors"
                  >
                    Read Review
                  </Link>
                </div>
                
                <div className="mt-6 pt-6 border-t border-slate-700/50">
                  <h4 className="text-xs font-semibold text-slate-500 uppercase mb-3">Why we love it</h4>
                  <ul className="space-y-2">
                    {featuredTool.features?.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </Layout>
  );
};

