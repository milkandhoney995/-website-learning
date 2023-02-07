import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { use } from 'react'

type User = {
  id: number;
  login: string;
};

const inter = Inter({ subsets: ['latin'] })
const fetchUsers: ()=> Promise<User[]> = async () => {
  const res = await fetch("https://api.github.com/users");
  return res.json();
}

export default function Page() {
  const users = use(fetchUsers());
  return (
    <div>
      <h1>Github Users!</h1>
      <div className="">
        {users.map((user) => {
          return (
            <div key={user.id}>
              {user.id}: {user.login}
            </div>
          );
        })}
      </div>
    </div>
  )
}
