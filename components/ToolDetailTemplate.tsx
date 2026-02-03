import React from 'react';
import { Tool } from '../types';
import { Tag, CheckCircle, PlayCircle, ListChecks, Star, ExternalLink, Zap } from 'lucide-react';

interface Props {
  tool: Tool;
  description: string;
}

export const ToolDetailTemplate: React.FC<Props> = ({ tool, description }) => {
  const features = tool.features && tool.features.length > 0 
    ? tool.features 
    : [
        `Streamlined workflow with ${tool.name}`,
        `High reliability and modern UI`,
        `Supports multiple languages`,
        `Easy integration and quick start`
      ];

  const tutorials = tool.tutorials && tool.tutorials.length > 0 
    ? tool.tutorials 
    : [
        { 
          title: `Quick Start with ${tool.name}`, 
          steps: [
            'Open the official website and create an account',
            'Choose a template or start from scratch',
            'Follow on-screen instructions to generate your first result',
            'Save and export in the desired format'
          ]
        }
      ];

  const specs = tool.technicalSpecs && Object.keys(tool.technicalSpecs).length > 0
    ? tool.technicalSpecs
    : {
        'Pricing Model': String(tool.pricing),
        'Category': String(tool.category),
        'Tags': tool.tags.join(', ')
      };

  const reviews = tool.userReviews && tool.userReviews.length > 0 
    ? tool.userReviews 
    : [
        { author: 'NavAI User', rating: 5, text: `Great experience with ${tool.name}. Easy to use and powerful.` }
      ];

  return (
    <>
      {/* Hero / CTA Section */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 mb-12 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent pointer-events-none" />
        
        {tool.featured && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Star size={12} fill="currentColor" /> Featured Choice
          </div>
        )}

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
          {tool.name}
        </h1>
        
        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href={tool.affiliateUrl || tool.url} 
            target="_blank" 
            rel={`noopener noreferrer ${tool.affiliateUrl ? 'nofollow sponsored' : ''}`}
            className={`
              group relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl
              ${tool.featured 
                ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-950 hover:from-yellow-300 hover:to-orange-400 shadow-lg shadow-orange-500/20' 
                : 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-500/25'
              }
            `}
          >
            Visit Official Website
            <ExternalLink size={20} className="transition-transform group-hover:translate-x-1" />
            {tool.featured && <Zap size={20} className="absolute -top-2 -right-2 text-yellow-200 animate-pulse" fill="currentColor" />}
          </a>
        </div>
        
        <p className="mt-6 text-sm text-slate-500">
          {tool.pricing === 'Paid' ? 'Start your free trial today' : 'Try it out for free'} • No credit card required for sign up
        </p>
      </div>

      <section className="prose prose-invert max-w-none mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
        <p className="text-lg text-slate-300 leading-relaxed">{description}</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center">
            <Tag className="w-5 h-5 mr-3 text-blue-400" /> Categories & Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1.5 bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-lg text-sm font-medium">
              {tool.category}
            </span>
            {tool.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm hover:bg-slate-700 transition-colors">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800 hover:border-slate-700 transition-colors">
          <h3 className="text-lg font-bold text-white mb-6 flex items-center">
            <CheckCircle className="w-5 h-5 mr-3 text-green-400" /> Key Features
          </h3>
          <ul className="space-y-3">
            {features.map((f, idx) => (
              <li key={idx} className="flex items-start text-slate-300">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>


      <section className="bg-gray-900/50 p-6 rounded-lg border border-gray-700 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
          <ListChecks className="w-5 h-5 mr-2 text-indigo-400" /> Tutorials
        </h3>
        <div className="space-y-6">
          {tutorials.map((tut, i) => (
            <div key={i} className="border border-gray-700 rounded-lg p-4">
              <h4 className="text-white font-semibold mb-2">{tut.title}</h4>
              <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                {tut.steps.map((s, j) => <li key={j}>{s}</li>)}
              </ol>
              {tut.videoUrl && (
                <a href={tut.videoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-blue-400 mt-3">
                  <PlayCircle className="w-4 h-4 mr-1" /> Watch Video
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">Technical Specs</h3>
          <dl className="grid grid-cols-1 gap-3">
            {Object.entries(specs).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-4">
                <dt className="text-gray-400">{k}</dt>
                <dd className="text-gray-200">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-700">
          <h3 className="text-lg font-semibold text-white mb-4">User Reviews</h3>
          <div className="space-y-4">
            {reviews.map((r, idx) => (
              <div key={idx} className="border border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-200 font-medium">{r.author}</span>
                  <span className="text-gray-400 text-sm">({r.rating}/5)</span>
                </div>
                <p className="text-gray-300">{r.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
