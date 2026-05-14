import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex flex-wrap justify-center gap-4">
      <Link to="/" className="hover:underline">Login</Link>
      <Link to="/signup" className="hover:underline">Signup</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
      <Link to="/about" className="hover:underline">About</Link>
    </nav>
  );
}
