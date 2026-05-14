import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';

export default function App() {
  return (
    <BrowserRouter>
      <nav className="p-4 bg-indigo-600 text-white flex gap-4 justify-center">
        <Link to="/">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
