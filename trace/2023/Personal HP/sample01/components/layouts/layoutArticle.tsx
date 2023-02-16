import { Fragment } from "react";
import { Header, Navigation, Article }from "../index";
import { useState } from "react";

type Props = {
  children: React.ReactNode;
}

export default function LayoutArticle({ children, ...props }: Props) {
  const [navOpen, setNavOpen] = useState(false);
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

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