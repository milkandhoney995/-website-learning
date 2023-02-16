import classes from "./navigation.module.scss";
import Link from "next/link";


const menuList = [
  { id: 1, href: "/profile", title: "PROFILE" },
  { id: 2, href: "/new", title: "NEW WORKS" },
  { id: 3, href: "/works", title: "WORKS" },
  { id: 4, href: "/gallery", title: "GALLERY" },
];

export default function Navigation(props) {
  return(
    <nav className={`${classes.nav} ${props.showMenu ? `${classes.nav__activeNav}` : ""}`}>
      <div className={classes.nav__content}>
        <ul className={classes.nav__menu}>
          {menuList.map((menu) => (
            <li key={menu.id}>
              <Link href={menu.href} onClick={props.onClick}>
                  {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <p className={classes.nav__copyright}>© YUHKO KAIDA</p>
      </div>
    </nav>
  )
}