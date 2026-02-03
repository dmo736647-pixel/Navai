import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from './pages/Home';
import { ToolDetail } from './pages/ToolDetail';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { About } from './pages/About';
import { AffiliateDisclosure } from './pages/AffiliateDisclosure';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { SubmitTool } from './pages/SubmitTool';
import { LanguageProvider } from './contexts/LanguageContext';

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tool/:id" element={<ToolDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/submit" element={<SubmitTool />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/about" element={<About />} />
            <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
          </Routes>
        </Router>
      </LanguageProvider>
    </HelmetProvider>
  );
};

export default App;
