import content from '../../content/content.json'

export default function DoctorProfile() {
  const { name, specialty, bio } = content.doctor
  return (
    <section className="p-4 text-center">
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="italic mb-2">{specialty}</p>
      <p>{bio}</p>
    </section>
  )
}
