import Image from 'next/image'
import Link from "next/link";
import profileImg from "public/images/header_mark01.svg"
import classes from "./header.module.scss";

export default function Header() {
  return(
    <header className={classes.header}>
      <h1>
        <Link
          href={`/profile`}
        >
          <Image
            src={profileImg}
            alt=""
          />
        </Link>
      </h1>
      <div>
        <span></span>
      </div>
      <Link className={classes.menuButton} href="">
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
        <span className={classes.menuButton__item}></span>
      </Link>
    </header>
  )
}