import { Fragment } from "react";
import { Header, Navigation }from "../index";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  const menuList = [
    { id: 1, href: "/profile", title: "PROFILE" },
    { id: 2, href: "/new", title: "NEW WORKS" },
    { id: 3, href: "/works", title: "WORKS" },
    { id: 4, href: "/gallery", title: "GALLERY" },
  ];

  return(
    <Fragment>
      <div {...props}>{children}</div>
      <Navigation menus={menuList} showMenu={navOpen} onClick={toggleNav}></Navigation>
      <Header openMenu={navOpen} onClick={toggleNav}></Header>
    </Fragment>
  )
}