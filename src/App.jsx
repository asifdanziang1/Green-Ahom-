import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages imports
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import OurWork from './pages/OurWork';
import Impact from './pages/Impact';
import AnnualReports from './pages/AnnualReports';
import Gallery from './pages/Gallery';
import Partners from './pages/Partners';
import Volunteer from './pages/Volunteer';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import SectionsManager from './admin/pages/SectionsManager';
import SectionEditor from './admin/pages/SectionEditor';
import ProgramsManager from './admin/pages/ProgramsManager';
import BlogManager from './admin/pages/BlogManager';

function App() {
  const location = useLocation();

  // Hide global navigation and footer on the Admin panel screen to allow full-screen dashboard experience
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="app-root-layout">
      {!isAdminRoute && <Navigation />}
      
      <main className={`main-content-layout ${!isAdminRoute ? 'padding-nav' : ''}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/reports" element={<AnnualReports />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="sections" element={<SectionsManager />} />
            <Route path="sections/:pageId" element={<SectionEditor />} />
            <Route path="programs" element={<ProgramsManager />} />
            <Route path="blog" element={<BlogManager />} />
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}

      <style>{`
        .app-root-layout {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .main-content-layout {
          flex: 1;
        }

        .padding-nav {
          padding-top: 0px; /* Handled by local page styling hero paddings to allow beautiful fluid backgrounds */
        }
      `}</style>
    </div>
  );
}

export default App;
