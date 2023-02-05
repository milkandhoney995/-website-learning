import Image from 'next/image'
import Link from "next/link";
import profileImg from "public/images/header_mark01.svg"
import classes from "./header.module.scss";
import { useState } from "react";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
};
  return(
    <>
    <header className={classes.header}>
      <h1 className={classes.header__mark}>
        <Link
          href={`/profile`}
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
      <Link className={classes.menuButton} href="" onClick={toggleNav}>
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
      </Link>
    </header>
    <style jsx>
      {`
        .menuButton__item:first-child, .menuButton__item:last-child {
          opacity: ${navOpen ? "0" : "1"}
        }
      `}
    </style>
    </>
  )
}