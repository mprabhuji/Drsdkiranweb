import { Outlet } from 'react-router-dom'
import HeaderNavbar from '../components/HeaderNavbar'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'

export default function LayoutMain() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  )
}
