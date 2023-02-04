import Head from 'next/head'
import Image from 'next/image'
import Link from "next/link";
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { Fragment } from "react";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Personal HP - sample01</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
      </div>
    </Fragment>
  )
}
