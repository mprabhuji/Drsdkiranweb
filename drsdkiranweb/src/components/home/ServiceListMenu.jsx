import content from '../../content/content.json'

export default function ServiceListMenu() {
  return (
    <section className="p-4">
      <h2 className="text-xl font-bold mb-2">Services</h2>
      <ul className="list-disc list-inside">
        {content.services.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}
