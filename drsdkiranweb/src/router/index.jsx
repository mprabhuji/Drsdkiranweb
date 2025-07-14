import { createBrowserRouter } from 'react-router-dom'
import LayoutMain from '../layouts/LayoutMain'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Education from '../pages/Education'
import Appointment from '../pages/Appointment'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'

const router = createBrowserRouter([
  {
    element: <LayoutMain />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      { path: '/services', element: <Services /> },
      { path: '/education', element: <Education /> },
      { path: '/appointment', element: <Appointment /> },
      { path: '/contact', element: <Contact /> },
      { path: '/blog', element: <Blog /> }
    ]
  }
])

export default router
