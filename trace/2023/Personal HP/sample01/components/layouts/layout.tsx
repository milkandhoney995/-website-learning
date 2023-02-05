import { Fragment } from "react";
import Header from "./header/header";
import Navigation from "./navigation/navigation";
import { useState } from "react";

function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
    <Fragment>
      <div>{children}</div>
      <Header setMenuOpen={setMenuOpen}></Header>
      <Navigation></Navigation>
    </Fragment>
  )
}
export default Layout;