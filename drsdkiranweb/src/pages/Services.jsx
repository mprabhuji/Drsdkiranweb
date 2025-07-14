import content from '../content/content.json'

export default function Services() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Services</h1>
      <ul className="list-disc list-inside">
        {content.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </div>
  )
}
