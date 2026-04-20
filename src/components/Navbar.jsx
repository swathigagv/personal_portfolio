import { Link } from 'react-router-dom'
export default function Navbar(){
    return(
        <nav className="navbar">
        <h2 className="navbar-brand">Personal portfolio</h2>
        <ul className="navbar-links">
            <li className='nav-link'><Link to='/'>Home</Link></li>
            <li className='nav-link'><Link to='/about'>About Me</Link></li>
            <li className='nav-link'><Link to='/Skills'>Skills</Link></li>
            <li className='nav-link'><Link to='/projects'>Projects</Link></li>
            <li className='nav-link'><Link to='/contact'>Contact Me</Link></li>
        </ul>
        </nav>

    )
}