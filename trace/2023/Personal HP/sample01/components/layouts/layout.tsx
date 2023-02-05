import { Fragment } from "react";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
import { useState } from "react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <Fragment>
      <div>{children}</div>
      <Navigation setShowMenu={menuOpen}></Navigation>
      <Header setMenuOpen={setMenuOpen}></Header>
    </Fragment>
  )
}