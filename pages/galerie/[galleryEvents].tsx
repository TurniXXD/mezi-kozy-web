import React from 'react'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import Header from '@components/Header'
import Footer from '@components/Footer'

import styles from '../styles/Galerie.module.css'

export default function GalerieEvent({ event }: any) {
	const title = `Mezi Kozy | ${event?.title}`

	return (
		<div className="page-wrapper">
			<Header />
			<NextSeo
				title={title}
				openGraph={{
					url: title,
					type: `website`,
					title: `this title`,
					site_name: `Default`,
				}}
			/>

			<Footer />
		</div>
	)
}

// export async function getServerSideProps({ context, query }: any) {
// 	const { event } = query

// 	console.log(context)
// 	return {
// 		props: { event },
// 	}
// }
