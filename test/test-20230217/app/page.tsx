"use client";

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useState, useEffect } from "react";
import { primitiveSample, notExistSample, anySmaple, unknownSmaple } from './basic/index'
import { logMessage, isUserSignedIn, isUserSignedIn2, sumProductPrice } from './function/index'
import { objectSample, typeAliasSample } from "./object/index";
import { ArraySmaple, TupleSample } from "./array/index";
import { GenericsBasicSample, GenericsAdvancedSample } from "./generics/index";
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch('/api/users')
      const data = await response.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])
  // primitiveSample()
  // notExistSample()
  // anySmaple()
  // unknownSmaple()
  // logMessage("Hello")
  // isUserSignedIn2("ABC")
  const sum = sumProductPrice(100, 200, 300, 400)
  // objectSample()
  // typeAliasSample()
  const colors = ArraySmaple()
  const tuple = TupleSample()
  const basicGeneritics = GenericsBasicSample()
  const advancedGenerics = GenericsAdvancedSample()
  return (
    <main className={styles.main}>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <p>================================</p>
        <p>{sum}</p>
        <p>{colors}</p>
        <p>{tuple}</p>
        <div className="">{basicGeneritics}</div>
        <div className="">{advancedGenerics}</div>
      </div>
    </main>
  )
}
