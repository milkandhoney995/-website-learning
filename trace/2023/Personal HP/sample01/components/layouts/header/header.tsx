import Image from 'next/image'
import Link from "next/link";
import profileImg from "public/images/header_mark01.svg"
import classes from "./header.module.scss";

type PropsType = {
  openMenu: boolean
  onClick: () => void
}

export default function Header(props: PropsType) {
  return(
    <header className={classes.header}>
      <h1 className={classes.header__mark}>
        <Link
          href={`/`}
        >
          <Image
            src={profileImg}
            alt=""
          />
        </Link>
      </h1>
      <div className={classes.header__name}>
        VIOCE ARTIST
        <span>
          YUHIKO
          <br />
          KAIDA
        </span>
      </div>
      <Link className={`${classes.menuButton} ${props.openMenu ? `${classes.active}` : ""}`} href="" onClick={props.onClick}>
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
      </Link>
    </header>
  )
}