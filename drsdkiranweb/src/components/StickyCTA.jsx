import { Link } from 'react-router-dom'

export default function StickyCTA() {
  return (
    <Link
      to="/appointment"
      className="fixed bottom-4 right-4 bg-blue-600 text-white py-2 px-4 rounded shadow-lg"
    >
      Book Now
    </Link>
  )
}
