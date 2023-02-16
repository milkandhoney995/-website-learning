import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Fragment } from "react";
import Slider from '@/components/slider/slider';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Fragment>
      </Fragment>
      <Slider></Slider>
    </>
  )
}

export async function getStaticProps() {
  return {
      props: {
          layout: "home",
      },
  };
}