import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from '@/pages/Login';
import Home from '@/pages/Home';
import '@/assets/styles/styles.scss';

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
