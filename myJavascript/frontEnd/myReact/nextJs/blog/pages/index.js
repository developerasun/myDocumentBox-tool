import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/navbar'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <p>asdfijapef</p>
      <p>as5664651wf</p>
      
      <Link href={"/ninja"}>
        <a>See Ninja Listing</a>
      </Link>
    </div>
  )
}
