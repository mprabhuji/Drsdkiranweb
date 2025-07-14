import content from '../content/content.json'

export default function About() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">About</h1>
      <p>{content.doctor.bio}</p>
    </div>
  )
}
