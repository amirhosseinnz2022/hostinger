
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import GamesItemsPage from '@/pages/GamesItemsPage';
import AboutUsPage from '@/pages/AboutUsPage';
import ContactUsPage from '@/pages/ContactUsPage';
import TermsPoliciesPage from '@/pages/TermsPoliciesPage';
import FaqPage from '@/pages/FaqPage';
import ScrollToTop from '@/components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="games" element={<GamesItemsPage />} />
          <Route path="about" element={<AboutUsPage />} />
          <Route path="contact" element={<ContactUsPage />} />
          <Route path="policies" element={<TermsPoliciesPage />} />
          <Route path="faq" element={<FaqPage />} />
          {/* You can add a 404 page here if needed */}
          <Route path="*" element={<HomePage />} /> {/* Fallback to HomePage or a 404 */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
  