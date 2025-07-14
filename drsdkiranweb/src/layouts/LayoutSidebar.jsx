import { Outlet } from 'react-router-dom'
import HeaderNavbar from '../components/HeaderNavbar'
import Footer from '../components/Footer'
import StickyCTA from '../components/StickyCTA'

export default function LayoutSidebar({ sidebar }) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNavbar />
      <div className="flex flex-1">
        <aside className="hidden md:block w-64 bg-gray-100 p-4">
          {sidebar}
        </aside>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Footer />
      <StickyCTA />
    </div>
  )
}
