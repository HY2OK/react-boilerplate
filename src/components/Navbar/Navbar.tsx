import { Link } from 'react-router-dom'

const Navbar = () => {
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
