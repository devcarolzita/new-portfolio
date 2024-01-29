import { Link } from 'react-router-dom';
import './index.css';

const Header = () => {
  return (
    <div className="nav-bar">
      <p>logo</p>
     <nav className="nav-bar-content">
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>About me</li>
        <li>Contact</li>
      </ul>
     </nav>
    </div>
  )
}

export default Header
