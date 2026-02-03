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

  const t = TRANSLATIONS[currentLanguage];
  const description = tool.descriptions?.[currentLanguage] || tool.description;

  return (
    <Layout>
      <Helmet>
        <title>{tool.name} - NavAI Review & Details</title>
        <meta name="description" content={`Discover ${tool.name}: ${description.substring(0, 150)}...`} />
        <link rel="canonical" href={`https://navai.space/tool/${tool.id}`} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: tool.name,
            applicationCategory: String(tool.category),
            offers: { '@type': 'Offer', price: String(tool.pricing) },
            url: tool.affiliateUrl || tool.url,
            description: description
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
              <ul className="space-y-2 text-gray-400">
                <li className="flex justify-between">
                  <span>Website:</span>
                  <a href={tool.affiliateUrl || tool.url} target="_blank" rel={`noopener noreferrer ${tool.affiliateUrl ? 'nofollow sponsored' : ''}`} className="text-blue-400 hover:underline truncate max-w-[200px]">{tool.url}</a>
                </li>
                <li className="flex justify-between">
                  <span>Added:</span>
                  <span>{new Date().toLocaleDateString()}</span>
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
