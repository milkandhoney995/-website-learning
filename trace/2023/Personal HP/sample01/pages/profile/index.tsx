import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
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
      },
  };
}