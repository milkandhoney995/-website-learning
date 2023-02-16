import Image from "next/image";
import { Fragment } from "react";
import { Title } from '../../components/index'


export default function Works() {
  return(
    <Fragment>
      <div className="works__wrapper">
        <Title title={'WORKS'}></Title>
      </div>
    </Fragment>
  )
}

export async function getStaticProps() {
  return {
      props: {
          layout: "article",
          title: "works",
          imgUrl: "'/images/back02.jpg'"
      },
  };
}