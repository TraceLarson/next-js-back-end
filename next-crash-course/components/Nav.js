import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav className={navStyles.nav}>
      <ul className={navStyles.navList}>
        <li className={navStyles.navItem}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
