import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Login from '@/pages/Login';
import Home from '@/pages/Home';

import Footer from '@/components/organisms/Footer/Footer';
import Header from '@/components/organisms/Header/Header';

import '@/assets/styles/styles.scss';

const AppContent: React.FC = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname === '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
