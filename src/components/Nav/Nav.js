import "./Nav.css";
import Logo from "../ui/Logo/Logo";

function Nav() {
  return (
    <nav className="Nav">
      <Logo />
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Categories</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Products</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
  );
}

export default Nav;