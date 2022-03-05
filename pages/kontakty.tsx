import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ParalaxHero from '@components/ParalaxHero'

import img1 from '/public/images/paralax/3-krmelec-koncert.png'

import styles from '@styles/Kontakty.module.css'

export default function Kontakty({ headerPosts }: { headerPosts: any }) {
	useEffect(() => {
		document.title = 'Mezi kozy | Kontakty'
	}, [])

	return (
		<div className="page-wrapper">
			<Header headerPosts={headerPosts} />
			<ParalaxHero image={img1} />
			<div className="container mt-20"></div>

			<Footer />
		</div>
	)
}
