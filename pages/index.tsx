import React, { useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@components/Card'
import Link from 'next/link'

//import { homeQuery } from '@graphql/queries.graphql'

import styles from '@styles/Home.module.css'

export default function Home({ headerPosts, home }: { headerPosts: any; home: any }) {
	var settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	useEffect(() => {
		document.title = 'Mezi kozy | Home'
	}, [])

	return (
		<div className="page-wrapper">
			<Header headerPosts={headerPosts} />
			<Slider {...settings}>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src="/../public/images/1-krmelec-koncert.png" alt="fajne" layout="fill" />
					</div>
				</div>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src="/../public/images/2-krmelec-koncert.png" alt="fajne" layout="fill" />
					</div>
				</div>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src="/../public/images/3-krmelec-koncert.png" alt="fajne" layout="fill" />
					</div>
				</div>
			</Slider>
			<div className="container mt-20">
				<div className="flex-row flex-center-h space-x-16">
					<div className="flex-col w-4/12">
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
								<div className="flex-row">
									<iframe
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
								<div className="flex-row">
									<iframe
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
					<div className="flex-col w-3/12">
						<Card>
							<div className="flex-row h-full">
								<div className="flex-col m-4">
									<div className="flex-row mb-4">
										<h2 className="text-2xl">Plán akcí</h2>
									</div>
									<Link href="/aktuality#frydek-mistek">
										<div className="flex-row">
											<a>
												<span>St 2.3. - Frýdek-Místek</span>
											</a>
										</div>
									</Link>
									<Link href="/aktuality#praha">
										<a className="flex-row">
											<span>So 12.3. - Praha</span>
										</a>
									</Link>
								</div>
							</div>
						</Card>
					</div>
				</div>
				<div className="flex-row flex-center pt-8">
					<div className="flex-col">
						<Link href="/aktuality">
							<a>
								<span className="text-2xl">Dozvědět se více...</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<div className="container mt-24">
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
				<div className="flex-row flex-center pt-8">
					<div className="flex-col">
						<Link href="/galerie">
							<a>
								<span className="text-2xl">Dozvědět se více...</span>
							</a>
						</Link>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

// export async function getStaticProps() {
// 	const home = await homeQuery

// 	return {
// 		props: { home },
// 		revalidate: 1,
// 	}
// }
