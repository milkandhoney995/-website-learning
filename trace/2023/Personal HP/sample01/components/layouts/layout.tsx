import { Fragment } from "react";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
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