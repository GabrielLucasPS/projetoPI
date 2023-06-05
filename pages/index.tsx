import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<Head>
				<title>SID locações</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" sizes="350x350" href="/assets/favicon.png" />
			</Head>
			<main>
				<div className={styles.background}>
					<div className={styles.counteiner}>
						<div className={styles.titles}>
							<h1 className={styles.title1}>COMEMORAR É SOBRE</h1>
							<h1 className={styles.title2}>COMUNICAR A FELICIDADE</h1>
						</div>
						<div className={styles.buttons}>
							<a href={'/contato'} className={styles.btn1}>
								<div>Sobre nós</div>
							</a>
							<a href={'/products'} className={styles.btn2}>
								<div>Promoções</div>
							</a>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}
