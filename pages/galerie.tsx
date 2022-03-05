import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ParalaxHero from '@components/ParalaxHero'

//import { galleryEventsQuery } from '@graphql/queries.graphql'

import styles from '@styles/Galerie.module.css'

export default function Galerie({ events, headerPosts }: { events: any; headerPosts: any }) {
	useEffect(() => {
		document.title = 'Mezi kozy | Galerie'
	}, [])

	return (
		<div className="page-wrapper">
			<Header headerPosts={headerPosts} />
			<ParalaxHero image="/public/images/paralax/2-krmelec-koncert.png" />
			<div className="container mt-20">
				<div className="flex-row flex-center mb-8">
					<div className="flex-col">
						<h2 className="text-4xl">Videa z akcí</h2>
					</div>
				</div>
				<div className="flex-row flex-center space-x-24">
					<div className="flex-col w-3/12">
						<iframe
							width="400"
							height="200"
							src="https://www.youtube.com/embed/PTQpzaPPw3w"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div className="flex-col w-3/12">
						<iframe
							width="400"
							height="200"
							src="https://www.youtube.com/embed/kZxZ30HYOUc"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div className="flex-col w-3/12">
						<iframe
							width="400"
							height="200"
							src="https://www.youtube.com/embed/kZxZ30HYOUc"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

// export async function getStaticProps() {
// 	const events = await galleryEventsQuery

// 	return {
// 		props: { events },
// 		revalidate: 1,
// 	}
// }
