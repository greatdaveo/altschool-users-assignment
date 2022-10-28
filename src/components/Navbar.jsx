import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  return (
    <nav className="nav-bar">
        <Link to="/" className="link">Home</Link>
        <Link to="/users" className="link">Users</Link>
    </nav>
  )
}
