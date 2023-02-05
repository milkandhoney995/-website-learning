import classes from "./navigation.module.scss";
import Link from "next/link";

export default function Navigation(props) {
  return(
    <nav className={`${classes.nav} ${props.setShowMenu ? `${classes.nav__activeNav}` : ""}`}>
      <div className={classes.nav__content}>
        <ul className={classes.nav__menu}>
          <li>
            <Link href={`/profile`}>PROFILE</Link>
          </li>
          <li>
            <Link href={`/`}>NEW WORKS</Link>
          </li>
          <li>
            <Link href={`/`}>WORKS</Link>
          </li>
          <li>
            <Link href={`/`}>GALLERY</Link>
          </li>
        </ul>
        <p className={classes.nav__copyright}>© YUHKO KAIDA</p>
      </div>
    </nav>
  )
}