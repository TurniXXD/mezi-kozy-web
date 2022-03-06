import React, { useEffect } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@components/Card'
import Link from 'next/link'

//import { homeQuery } from '@graphql/queries.graphql'

import img1 from '/public/images/1-krmelec-koncert.png'
import img2 from '/public/images/2-krmelec-koncert.png'
import img3 from '/public/images/3-krmelec-koncert.png'

import styles from '@styles/Home.module.css'

export default function Home({ headerPosts, home } /* : { headerPosts: any; home: any } */) {
	var settings = {
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		prevArrow: false,
    nextArrow: false,
		arrows: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	}

	useEffect(() => {
		document.title = 'Mezi kozy | Home'
		var ifr = document.getElementById('JotFormIFrame-220642188337356')
		var form =
			document.querySelectorAll('#JotFormIFrame-220642188337356 form') ||
			document.getElementById('JotFormIFrame-220642188337356')
		ifr.style.backgroundColor = 'white'
		//iframe.style.height = args[1] + 'px'
		if (ifr) {
			var src = ifr.src
			var iframeParams = []
			if (window.location.href && window.location.href.indexOf('?') > -1) {
				iframeParams = iframeParams.concat(
					window.location.href.substr(window.location.href.indexOf('?') + 1).split('&')
				)
			}
			if (src && src.indexOf('?') > -1) {
				iframeParams = iframeParams.concat(src.substr(src.indexOf('?') + 1).split('&'))
				src = src.substr(0, src.indexOf('?'))
			}
			iframeParams.push('isIframeEmbed=1')
			ifr.src = src + '?' + iframeParams.join('&')
		}
		window.handleIFrameMessage = function (e) {
			if (typeof e.data === 'object') {
				return
			}
			var args = e.data.split(':')
			var iframe
			if (args.length > 2) {
				iframe = document.getElementById('JotFormIFrame-' + args[args.length - 1])
			} else {
				iframe = document.getElementById('JotFormIFrame')
			}
			if (!iframe) {
				return
			}
			switch (args[0]) {
				case 'scrollIntoView':
					iframe.scrollIntoView()
					break
				case 'setHeight':
					iframe.style.height = args[1] + 'px'
					break
				case 'collapseErrorPage':
					if (iframe.clientHeight > window.innerHeight) {
						iframe.style.height = window.innerHeight + 'px'
					}
					break
				case 'reloadPage':
					window.location.reload()
					break
				case 'loadScript':
					if (!window.isPermitted(e.origin, ['jotform.com', 'jotform.pro'])) {
						break
					}
					var src = args[1]
					if (args.length > 3) {
						src = args[1] + ':' + args[2]
					}
					var script = document.createElement('script')
					script.src = src
					script.type = 'text/javascript'
					document.body.appendChild(script)
					break
				case 'exitFullscreen':
					if (window.document.exitFullscreen) window.document.exitFullscreen()
					else if (window.document.mozCancelFullScreen) window.document.mozCancelFullScreen()
					else if (window.document.mozCancelFullscreen) window.document.mozCancelFullScreen()
					else if (window.document.webkitExitFullscreen) window.document.webkitExitFullscreen()
					else if (window.document.msExitFullscreen) window.document.msExitFullscreen()
					break
			}
			var isJotForm = e.origin.indexOf('jotform') > -1 ? true : false
			if (isJotForm && 'contentWindow' in iframe && 'postMessage' in iframe.contentWindow) {
				var urls = { docurl: encodeURIComponent(document.URL), referrer: encodeURIComponent(document.referrer) }
				iframe.contentWindow.postMessage(JSON.stringify({ type: 'urls', value: urls }), '*')
			}
		}
		window.isPermitted = function (originUrl, whitelisted_domains) {
			var url = document.createElement('a')
			url.href = originUrl
			var hostname = url.hostname
			var result = false
			if (typeof hostname !== 'undefined') {
				whitelisted_domains.forEach(function (element) {
					if (hostname.slice(-1 * element.length - 1) === '.'.concat(element) || hostname === element) {
						result = true
					}
				})
				return result
			}
		}
		if (window.addEventListener) {
			window.addEventListener('message', handleIFrameMessage, false)
		} else if (window.attachEvent) {
			window.attachEvent('onmessage', handleIFrameMessage)
		}
	}, [])

	return (
		<div className="page-wrapper">
			<Header /* headerPosts={headerPosts} */ />
			<Slider {...settings}>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src={img1} alt="fajne" layout="fill" />
					</div>
				</div>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src={img2} alt="fajne" layout="fill" />
					</div>
				</div>
				<div className="flex-row bg-cover">
					<div className="paralax-wrapper next-image-wrapper">
						<Image src={img3} alt="fajne" layout="fill" />
					</div>
				</div>
			</Slider>
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
					<div className="tbl-break-hide flex-col flex w-3/12">
						<Card col={true}>
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
				<div className="flex flex-wrap flex-center xl:space-x-24">
					<div className="flex-col flex-center w-full xl:w-3/12">
						<iframe
							className="max-h-full w-60 sm:w-96"
							width="400"
							height="200"
							src="https://www.youtube.com/embed/PTQpzaPPw3w"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div className="flex-col flex-center w-full mt-12 xl:w-3/12 xl:mt-0">
						<iframe
							className="max-h-full w-60 sm:w-96"
							width="400"
							height="200"
							src="https://www.youtube.com/embed/kZxZ30HYOUc"
							title="YouTube video player"
							frameBorder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
						/>
					</div>
					<div className="flex-col flex-center w-3/12 ytb-last">
						<iframe
							className="max-h-full w-60 sm:w-96"
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
			<div className="container px-12 sm:px-16 mt-24">
				<div className="flex-row flex-center">
					<div className="flex-col">
						<div className="flex-row flex-center mb-8">
							<div className="flex-col">
								<h2 className="text-4xl">Napište nám</h2>
							</div>
						</div>
						<div className="flex-row">
							<iframe
								id="JotFormIFrame-220642188337356"
								title="General Inquiry Contact Form"
								onload="window.parent.scrollTo(0,0)"
								allowtransparency="true"
								allowfullscreen="true"
								allow="geolocation; microphone; camera"
								src="https://form.jotform.com/220642188337356"
								frameborder="0"
								style={{ minWidth: '100%', height: '539px', border: 'none', background: 'white' }}
								scrolling="no"
							/>
						</div>
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
