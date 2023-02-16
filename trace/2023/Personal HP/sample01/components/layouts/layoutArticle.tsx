import Head from 'next/head'
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
      <Head>
        <title>Personal HP - {children.props.title}</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Article imageUrl={props.imageUrl} {...props}>
        {children}
      </Article>
      <Navigation showMenu={navOpen} onClick={toggleNav}></Navigation>
      <Header openMenu={navOpen} onClick={toggleNav}></Header>
    </Fragment>
  )
}