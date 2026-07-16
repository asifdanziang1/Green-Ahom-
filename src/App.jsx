import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import BottomNavigation from './components/BottomNavigation';


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

// Program Pages Imports
import Education from './pages/Education';
import Health from './pages/Health';
import Relief from './pages/Relief';
import AnimalCare from './pages/AnimalCare';
import CommunityDevelopment from './pages/CommunityDevelopment';
import WomenEmpowerment from './pages/WomenEmpowerment';
import DisasterManagement from './pages/DisasterManagement';
import EnvironmentProtection from './pages/EnvironmentProtection';

function App() {
  return (
    <div className="app-root-layout">
      <Navigation />
      
      <main className="main-content-layout padding-nav">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/education" element={<Education />} />
          <Route path="/work/health" element={<Health />} />
          <Route path="/work/relief" element={<Relief />} />
          <Route path="/work/animal-care" element={<AnimalCare />} />
          <Route path="/work/community-development" element={<CommunityDevelopment />} />
          <Route path="/work/women-empowerment" element={<WomenEmpowerment />} />
          <Route path="/work/disaster-management" element={<DisasterManagement />} />
          <Route path="/work/environment-protection" element={<EnvironmentProtection />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/reports" element={<AnnualReports />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
      <BottomNavigation />

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
