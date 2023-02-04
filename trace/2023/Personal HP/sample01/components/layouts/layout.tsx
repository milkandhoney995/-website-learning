import { Fragment } from "react";
import Header from "./header/header";
import Navigation from "./navigation/navigation";

function Layout({ children }) {
  return(
    <Fragment>
      <div>{children}</div>
      <Header></Header>
      <Navigation></Navigation>
    </Fragment>
  )
}
export default Layout;