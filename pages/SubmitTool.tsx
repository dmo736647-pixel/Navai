import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Layout } from '../components/Layout';
import { Send, CheckCircle, Sparkles, Star, Zap, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS } from '../constants';
import { ToolCategory } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

export const SubmitTool: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = TRANSLATIONS[currentLanguage]?.submitPage || TRANSLATIONS.en.submitPage;
  const categories = TRANSLATIONS[currentLanguage]?.categories || TRANSLATIONS.en.categories;
  const planIcons = [CheckCircle, Zap, Star];

  return (
    <Layout>
      <Helmet>
        <title>{t.pageTitle}</title>
        <meta name="description" content={t.metaDescription} />
        <link rel="canonical" href="https://navai.space/submit" />
      </Helmet>

      <div className="max-w-6xl mx-auto p-6 lg:p-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">{t.heading}</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-10">
          {t.plans.map((plan: { title: string; price: string; text: string }, index: number) => {
            const Icon = planIcons[index] || CheckCircle;
            return (
              <div key={plan.title} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="w-6 h-6 text-indigo-400" />
                  <span className="text-2xl font-bold text-white">{plan.price}</span>
                </div>
                <h2 className="text-lg font-bold text-white mb-2">{plan.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{plan.text}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.75fr] gap-8">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700 shadow-xl">
            <div className="flex items-start gap-4 mb-8 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
              <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{t.whatWeLookFor}</h3>
                <p className="text-gray-300">
                  {t.whatWeLookForText}
                </p>
              </div>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.toolName}</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.placeholders.toolName}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.websiteUrl}</label>
                  <input 
                    type="url" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.placeholders.websiteUrl}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.shortDescription}</label>
                <textarea 
                  rows={3}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder={t.placeholders.shortDescription}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.categories}</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                  {[ToolCategory.TEXT, ToolCategory.IMAGE, ToolCategory.VIDEO, ToolCategory.AUDIO, ToolCategory.CODING, ToolCategory.PRODUCTIVITY, ToolCategory.BUSINESS, ToolCategory.PRESENTATIONS, ToolCategory.DATA].map(category => (
                    <option key={category}>{categories[category]}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.email}</label>
                  <input 
                    type="email" 
                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder={t.placeholders.email}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">{t.labels.listingInterest}</label>
                  <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all">
                    {t.interests.map((interest: string) => (
                      <option key={interest}>{interest}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="pt-4">
                <button 
                  type="button"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-4 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t.submitButton}
                </button>
                <p className="text-center text-gray-500 text-sm mt-4">
                  {t.note}
                </p>
              </div>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <Sparkles className="w-6 h-6 text-indigo-400 mb-4" />
              <h2 className="text-xl font-bold text-white mb-3">{t.claimTitle}</h2>
              <p className="text-slate-400 leading-relaxed">
                {t.claimText}
              </p>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
              <ShieldCheck className="w-6 h-6 text-emerald-400 mb-4" />
              <h2 className="text-xl font-bold text-white mb-3">{t.policyTitle}</h2>
              <ul className="space-y-3 text-slate-400">
                {t.policies.map((policy: string) => (
                  <li key={policy}>{policy}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </Layout>
  );
};
