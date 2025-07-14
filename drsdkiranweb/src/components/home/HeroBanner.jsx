import { Link } from 'react-router-dom'
import content from '../../content/content.json'

export default function HeroBanner() {
  const { title, subtitle, cta } = content.hero
  return (
    <section className="text-center py-20 bg-blue-100">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="mb-6 text-lg">{subtitle}</p>
      <Link
        to="/appointment"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {cta}
      </Link>
    </section>
  )
}
