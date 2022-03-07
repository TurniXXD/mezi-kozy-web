import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ParalaxHero from '@components/ParalaxHero'

//import { postsQuery } from '@graphql/queries.graphql'

import img1 from '/public/images/paralax/krmel-cropped-d.jpg'

import styles from '@styles/Aktuality.module.css'

export default function Aktuality({ headerPosts, posts }: { headerPosts: any; posts: any }) {
	useEffect(() => {
		document.title = 'Mezi kozy | Aktuality'
	}, [])

	return (
		<div className="page-wrapper">
			<Header /* headerPosts={headerPosts} */ />
			<div className="subpages-hero">
				<Image src={img1} alt="fajne" height={500} width={2000} />
			</div>
			<div className="container mt-20">
				<div className="flex-row sm:justify-center space-x-16">
					<div className="flex-col xl:w-4/12">
						<div className="flex-row mb-20">
							<div className="flex-col">
								<div className="flex-row">
									<h2 className="text-2xl mb-2">Dobročinný koncert na pomoc ukrajině</h2>
								</div>
								<div className="flex-row">
									<span className="text-lg mb-4">
										St 2.3. -{' '}
										<Link href="https://goo.gl/maps/oYieiFy4SgqGoZ5U6">
											<a target="_blank" rel="noreferrer noopener">
												Smoke District FM
											</a>
										</Link>{' '}
									</span>
								</div>
								<div className="flex-row">
									<p className="mb-8">
										Vzhledem k situaci na Ukrajině a naší neschopnosti pouze sedět a nečině sledovat krutou realitu jsme
										se rozhodli uspořádat benefiční koncert na pomoc ukrajině. Dobrovolné vstupné a část výdělku na baru
										půjde na účet zřízený velvyslanectvím Ukrajiny a účet organizace Člověk v tísni. Celý koncert bude
										také možnost sledovat online na našem instagramu.
									</p>
								</div>
								<div className="flex-row hidden sm:flex">
									<iframe
										className="hidden sm:block"
										width="450"
										height="300"
										src="https://www.youtube.com/embed/PTQpzaPPw3w"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
								</div>
							</div>
						</div>
						<div className="flex-row">
							<div className="flex-col">
								<div className="flex-row">
									<h2 className="text-2xl mb-2">Dobročinný koncert na pomoc ukrajině</h2>
								</div>
								<div className="flex-row">
									<span className="text-lg mb-4">
										So 12.3. -{' '}
										<Link href="https://goo.gl/maps/oYieiFy4SgqGoZ5U6">
											<a target="_blank" rel="noreferrer noopener">
												Někde v praze
											</a>
										</Link>{' '}
									</span>
								</div>
								<div className="flex-row">
									<p className="mb-8">
										Po úspěchu minulého koncertu a vybrání pěkného příspěvku na pomoc Ukrajině jsme byli osloveni
										neziskovou organizací{' '}
										<Link href="https://www.medvidekstesti.cz/">
											<a target="_blank" rel="noreferrer noopener">
												Medvídek Štěstí
											</a>
										</Link>{' '}
										a byla nám nabídnuta možnost zahrát si ve větším stylu a mít možnost vybrat ještě víc peněz, které
										ve výsledku zachrání nevinné životy.
									</p>
								</div>
								<div className="flex-row hidden sm:flex">
									<iframe
										className="hidden sm:block"
										width="450"
										height="300"
										src="https://www.youtube.com/embed/PTQpzaPPw3w"
										title="YouTube video player"
										frameBorder="0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
									/>
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
// 	const posts = await postsQuery

// 	return {
// 		props: { posts },
// 		revalidate: 1,
// 	}
// }
