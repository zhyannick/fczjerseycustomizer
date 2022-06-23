import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.main}>
      <img src="/background_fcz"/>
    <div className={styles.homepageTitle}>
        <h1>FCZ Jersey Designer</h1>
    </div>
    <div className={styles.homepageImg}>
        <img src="/fczlogo.png"/>
    </div>
    <div className={styles.personaliseButton}>
        <Link href="/personalize"><a>
            <button>Personalise</button>
        </a></Link>
    </div>



</div>

  )
}
