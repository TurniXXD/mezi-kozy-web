import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ParalaxHero from '@components/ParalaxHero'
//import { peopleQuery } from '@graphql/queries.graphql'

import styles from '@styles/Kapela.module.css'

export default function Kapela({ headerPosts, people }: { headerPosts: any; people: any }) {
	useEffect(() => {
		document.title = 'Mezi kozy | Kapela'
	}, [])

	return (
		<div className="page-wrapper">
			<Header headerPosts={headerPosts} />
			<ParalaxHero image="/../public/images/paralax/1-krmelec-koncert.png" />
			<div className="container mt-20">
				<div className="flex-row flex-center space-x-24">
					<div className="flex-col">
						<div className="flex-row">
							<h2 className="text-4xl mb-2">Jakub Vantuch</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Kytara a zpěv</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Metallica</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Nirvana</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Foo Fighters</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Tři sestry</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Horkýže slíže</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>AC/DC</span>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="flex-col">
						<div className="flex-row">
							<h2 className="text-4xl mb-2">Martin Kopřiva</h2>
						</div>
						<div className="flex-row flex-center">
							<span className="text-lg mb-4">Bicí, kytara, basa</span>
						</div>
						<div className="flex-row">
							<span className="text-lg mb-2">Oblíbená hudba:</span>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<div className="flex-col">
										<span>Metallica</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Nirvana</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>The Pretty Reckless</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Tři sestry</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>David Stypka & Bandjeez</span>
									</div>
								</div>
								<div className="flex-row">
									<div className="flex-col">
										<span>Mňága a Žďorp</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

// export async function getStaticProps() {
// 	const people = await peopleQuery

// 	return {
// 		props: { people },
// 		revalidate: 1,
// 	}
// }
