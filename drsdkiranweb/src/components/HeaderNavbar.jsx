import { Link } from 'react-router-dom'

export default function HeaderNavbar() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="container mx-auto flex flex-wrap gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/education">Education</Link>
        <Link to="/appointment">Appointment</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </nav>
    </header>
  )
}
