import { Fragment } from "react";
import { Header, Navigation }from "../index";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  const [navOpen, setNavOpen] = useState(false);

  return(
    <Fragment>
      <div {...props}>{children}</div>
      <Navigation showMenu={navOpen}></Navigation>
      <Header openMenu={setNavOpen}></Header>
    </Fragment>
  )
}