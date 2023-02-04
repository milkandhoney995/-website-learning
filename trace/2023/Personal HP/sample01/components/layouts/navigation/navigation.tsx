import classes from "./navigation.module.scss";
import Link from "next/link";

export default function Navigation() {
  return(
    <nav className={classes.nav}>
      <div className={classes.nav__content}>
        <ul className={classes.nav__menu}>
          <li>
            <Link href={`/profile`}>PROFILE</Link>
          </li>
        </ul>
        <p className=""></p>
      </div>
    </nav>
  )
}