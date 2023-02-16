import Image from "next/image";
import { Fragment } from "react";
import { Title } from '../../components/index'


export default function Home() {
  return(
    <Fragment>
      <Title title={'PROFILE'}></Title>
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
      props: {
          layout: "article",
          imgUrl: "'/images/back02.jpg'"
      },
  };
}