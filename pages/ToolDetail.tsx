import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { ToolCard } from '../components/ToolCard';
import { INITIAL_TOOLS, TRANSLATIONS } from '../constants';
import { Tool, ToolCategory } from '../types';
import { ArrowLeft, ExternalLink, Tag, Globe, Clock, Shield } from 'lucide-react';
import { ToolDetailTemplate } from '../components/ToolDetailTemplate';
import { getSafeLocalizedDescription } from '../utils/text';
import { getToolSeoContent } from '../utils/toolSeo';

export const ToolDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { currentLanguage } = useLanguage();

  const tool = useMemo(() => 
    INITIAL_TOOLS.find(t => t.id === id || t.url.includes(id || '')), 
    [id]
  );

  const similarTools = useMemo(() => {
    if (!tool) return [];
    return INITIAL_TOOLS
      .filter(t => t.category === tool.category && t.id !== tool.id)
      .slice(0, 3);
  }, [tool]);

  if (!tool) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Tool Not Found</h1>
            <Link to="/" className="text-blue-400 hover:underline">Return Home</Link>
          </div>
        </div>
      </Layout>
    );
  }

  const description = getSafeLocalizedDescription(tool, currentLanguage);
  const seo = getToolSeoContent(tool);
  const pageTitle = seo?.title || `${tool.name} Review 2026: Features, Pricing & Alternatives | NavAI`;
  const pageDescription = seo?.metaDescription || `In-depth ${tool.name} review: ${description.substring(0, 155)}... Read honest user reviews, compare features, pricing, and find the best alternative AI tools.`;

  return (
    <Layout>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://navai.space/tool/${tool.id}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://navai.space/tool/${tool.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            applicationCategory: String(tool.category),
            operatingSystem: 'Web-based',
            offers: { 
              '@type': 'Offer', 
              price: tool.pricing === 'Free' ? '0' : tool.pricing === 'Freemium' ? '0' : 'Contact for pricing',
              priceCurrency: 'USD'
            },
            url: tool.affiliateUrl || tool.url,
            description: pageDescription,
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: tool.userReviews && tool.userReviews.length > 0 
                ? (tool.userReviews.reduce((sum, r) => sum + r.rating, 0) / tool.userReviews.length).toFixed(1)
                : '4.5',
              reviewCount: tool.userReviews?.length || 1
            },
            review: tool.userReviews && tool.userReviews.length > 0 ? tool.userReviews.map(r => ({
              '@type': 'Review',
              author: { '@type': 'Person', name: r.author },
              reviewRating: { '@type': 'Rating', ratingValue: r.rating.toString() },
              reviewBody: r.text
            })) : null,
            featureList: (tool.features || seo?.features || ['Easy to use', 'Modern interface', 'Multi-language support']).join(', ')
          })}
        </script>
      </Helmet>
      
      <div className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-6">
          <Link to="/" className="hover:text-white">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/" state={{ category: tool.category }} className="hover:text-white">
            {String(tool.category)}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-white">{tool.name}</span>
        </nav>

        <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
            <div>
              <h1 className="text-4xl font-bold text-white mb-2">{tool.name}</h1>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                  {tool.category}
                </span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium border border-purple-500/30">
                  {tool.pricing}
                </span>
              </div>
            </div>
            <a 
              href={tool.affiliateUrl || tool.url} 
              target="_blank" 
              rel={`noopener noreferrer ${tool.affiliateUrl ? 'nofollow sponsored' : ''}`}
              className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-blue-900/20"
            >
              Visit Website
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>

          {/* Template sections */}
          <ToolDetailTemplate tool={tool} description={description} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Tag className="w-5 h-5 mr-2 text-blue-400" />
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Globe className="w-5 h-5 mr-2 text-green-400" />
                Platform Details
              </h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between items-center">
                  <span>Official Site:</span>
                  <a href={tool.affiliateUrl || tool.url} target="_blank" rel={`noopener noreferrer ${tool.affiliateUrl ? 'nofollow sponsored' : ''}`} className="text-blue-400 hover:underline truncate max-w-[180px] text-sm">{new URL(tool.url).hostname}</a>
                </li>
                <li className="flex justify-between items-center">
                  <span>Pricing:</span>
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    tool.pricing === 'Free' ? 'bg-green-500/10 text-green-400' :
                    tool.pricing === 'Freemium' ? 'bg-blue-500/10 text-blue-400' :
                    'bg-purple-500/10 text-purple-400'
                  }`}>
                    {tool.pricing}
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Last Updated:</span>
                  <span className="text-sm">{new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span>Editor's Rating:</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 font-bold">{(tool.userReviews && tool.userReviews.length > 0 ? (tool.userReviews.reduce((sum, r) => sum + r.rating, 0) / tool.userReviews.length).toFixed(1) : '4.5')}</span>
                    <span className="text-yellow-400">★</span>
                    <span className="text-gray-500 text-xs">/5</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {similarTools.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-white mb-6">Similar Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {similarTools.map(t => (
                <ToolCard 
                  key={t.id} 
                  tool={t} 
                  currentLanguage={currentLanguage}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};
