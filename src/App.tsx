import { BrowserRouter as Router, Route, Routes, useLocation, Link } from 'react-router-dom';

import Login from '@/pages/Login/Login';
import Home from '@/pages/Home/Home';

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

      <div className='not-show'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>
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
