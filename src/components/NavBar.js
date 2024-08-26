import { Link } from "react-router-dom";
import './Menu.css'

function Nav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <ul className="list">
        <li>
          <Link to="/tests">Tests</Link>
        </li>
        <li>
          <Link to="/catalogs">Catalogs</Link>
        </li>
       
      </ul>
      {/* <button class="search">Search</button> */}
    </nav>
  );
}
export default Nav;
