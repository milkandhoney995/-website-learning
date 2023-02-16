import { Fragment } from "react";
import { Header, Navigation, Article }from "../index";
import { useState, useEffect } from "react";

type Props = {
  children: React.ReactNode;
}

export default function Layout({ children, ...props }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };
  
  const [pathname, setPathname] = useState('')
  useEffect(() => setPathname(location.pathname), [])
  if (pathname == '/') {
    return(
      <Fragment>
        <div {...props}>{children}</div>
        <Navigation showMenu={navOpen} onClick={toggleNav}></Navigation>
        <Header openMenu={navOpen} onClick={toggleNav}></Header>
      </Fragment>
    )
  } else {
    return(
      <Fragment>
        <Article imageUrl={"'/images/back01.jpg'"} {...props}>
          {children}
        </Article>
        <Navigation showMenu={navOpen} onClick={toggleNav}></Navigation>
        <Header openMenu={navOpen} onClick={toggleNav}></Header>
      </Fragment>
    )
  }
}