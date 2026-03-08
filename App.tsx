
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Language } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { DoctorList } from './pages/DoctorList';
import { DoctorDetail } from './pages/DoctorDetail';
import { ClinicDetail } from './pages/ClinicDetail';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { ForAgents } from './pages/Agents';
import { ForClinics } from './pages/ForClinics';
import { News } from './pages/News';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('ja');

  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header lang={lang} setLang={setLang} />
        {/* 固定ヘッダーの高さ（80px）に合わせたパディング */}
        <main className="flex-grow pt-20"> 
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/for-clinics" element={<ForClinics lang={lang} />} />
            <Route path="/for-agents" element={<ForAgents lang={lang} />} />
            <Route path="/doctors" element={<DoctorList lang={lang} />} />
            <Route path="/doctor/:id" element={<DoctorDetail lang={lang} />} />
            <Route path="/clinic/:id" element={<ClinicDetail lang={lang} />} />
            <Route path="/gallery" element={<Gallery lang={lang} />} />
            <Route path="/news" element={<News lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;
