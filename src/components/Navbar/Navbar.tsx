import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import app from '../../firebase'

const Navbar = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const auth = getAuth(app)

  useEffect(() => {
    const authChange = onAuthStateChanged(auth, (user) => {
      if (!user && pathname !== '/' && pathname !== '/sign') {
        navigate('/sign')
      } else if (user && (pathname === '/' || pathname === '/sign')) {
        navigate('/main')
      }
    })
    return () => authChange()
  }, [auth, navigate, pathname])

  return (
    <nav>
      <ul className="flex justify-end mr-5 gap-2 cursor-pointer">
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/sign`}>sign</Link>
        </li>
        <li>
          <Link to={`/main`}>main</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
