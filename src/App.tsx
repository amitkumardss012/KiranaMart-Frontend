import { lazy } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import AdminNavbar from './admin/components/AdminNavbar'
import Footer from './admin/components/Footer'
import AllAdmin from './admin/page/AllAdmin'
import OurTeamPage from './admin/page/OurTeamPage'
import ProtectedRoute, { AdminLoginProtected } from './admin/page/ProtectedRoute'
import './App.css'
import Header from './components/Home/Header'
const Home = lazy(() => import('./page/Home'))
const About = lazy(() => import('./page/About'))
const Contact = lazy(() => import('./page/Contact'))
const Franchise = lazy(() => import('./page/Franchise'))
const AdminLogin = lazy(() => import('./admin/page/Login'))
const AdminHome = lazy(() => import('./admin/page/AdminHome'))

function App() {
  const location = useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin')
  const isAdminLogin = location.pathname === '/admin/login'
  return (
    <>
      {isAdminLogin ? null : (isAdminRoute ? <AdminNavbar /> : <Header />)}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/franchise' element={<Franchise />} />
        <Route path='*' element={<div className='mt-40'>404 Page Not Found</div>} />

        {/* Admin Route  */}
        <Route path='/admin/login' element={<AdminLoginProtected><AdminLogin /></AdminLoginProtected>} />
        <Route path='/admin/dashboard' element={<ProtectedRoute><AdminHome /></ProtectedRoute>} />
        <Route path='/admin/all-admin' element={<ProtectedRoute><AllAdmin /></ProtectedRoute>} />
        <Route path='/admin/our-team' element={<ProtectedRoute><OurTeamPage /></ProtectedRoute>} />
      </Routes>
      {!isAdminRoute ? <Footer /> : ''}
    </>
  )
}

export default App
