import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Profile from './components/Profile';
import About from './pages/About';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
