import content from '../../content/content.json'

export default function InfoCardGrid() {
  return (
    <section className="grid gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3">
      {content.infoCards.map((card) => (
        <div key={card.title} className="border rounded p-4 shadow-sm bg-white">
          <h3 className="font-semibold mb-2">{card.title}</h3>
          <p>{card.text}</p>
        </div>
      ))}
    </section>
  )
}
