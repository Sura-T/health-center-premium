import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import Services from './components/Services';
import Doctors from './components/Doctors';
import ExecutiveHealthScreen from './pages/services/ExecutiveHealthScreen';
import MedicalConcierge from './pages/services/MedicalConcierge';
import AdvancedDiagnostics from './pages/services/AdvancedDiagnostics';
import LuxuryRecovery from './pages/services/LuxuryRecovery';
import BookAppointment from './pages/BookAppointment';
import BookConsultation from './pages/BookConsultation';
import AboutUs from './pages/AboutUs';
import ScrollToTop from './components/ScrollToTop';
import Contact from './pages/Contact';
import ScreeningAppointment from './pages/ScreeningAppointment';
import ConciergeEnrollment from './pages/ConciergeEnrollment';
import DiagnosticTest from './pages/DiagnosticTest';
import SuiteBooking from './pages/SuiteBooking';
import './index.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Doctors />
            </>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services/executive-health-screening" element={<ExecutiveHealthScreen />} />
          <Route path="/services/private-medical-concierge" element={<MedicalConcierge />} />
          <Route path="/services/advanced-diagnostics" element={<AdvancedDiagnostics />} />
          <Route path="/services/luxury-recovery-suites" element={<LuxuryRecovery />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/book-consultation" element={<BookConsultation />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/screening-appointment" element={<ScreeningAppointment />} />
          <Route path="/concierge-enrollment" element={<ConciergeEnrollment />} />
          <Route path="/diagnostic-test" element={<DiagnosticTest />} />
          <Route path="/suite-booking" element={<SuiteBooking />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App; 