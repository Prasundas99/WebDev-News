import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

function Navbar() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
