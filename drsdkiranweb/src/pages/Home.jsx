import HeroBanner from '../components/home/HeroBanner'
import InfoCardGrid from '../components/home/InfoCardGrid'
import DoctorProfile from '../components/home/DoctorProfile'
import ServiceListMenu from '../components/home/ServiceListMenu'

export default function Home() {
  return (
    <>
      <HeroBanner />
      <InfoCardGrid />
      <DoctorProfile />
      <ServiceListMenu />
    </>
  )
}
