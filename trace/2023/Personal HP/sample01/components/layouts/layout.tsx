import { Fragment } from "react";
import { Header, Navigation, Article }from "../index";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return(
    <Fragment>
      <div {...props}>{children}</div>
      <Navigation showMenu={navOpen} onClick={toggleNav}></Navigation>
      <Header openMenu={navOpen} onClick={toggleNav}></Header>
    </Fragment>
  )
}