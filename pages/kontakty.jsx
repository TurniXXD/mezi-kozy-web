import React, { useEffect } from 'react'
import Image from 'next/image'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ParalaxHero from '@components/ParalaxHero'
import Link from 'next/link'

import img1 from '/public/images/paralax/3-krmelec-koncert.png'

import styles from '@styles/Kontakty.module.css'

export default function Kontakty({ headerPosts }) {
	useEffect(() => {
		document.title = 'Mezi kozy | Kontakty'

		var ifr = document.getElementById('JotFormIFrame-220642188337356')
		var form = document.querySelectorAll('#JotFormIFrame-220642188337356 form') || document.getElementById('JotFormIFrame-220642188337356')
		ifr.style.backgroundColor = "white"
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
			<Header headerPosts={headerPosts} />
			<ParalaxHero image={img1} />
			<div className="container px-7 sm:px-16 mt-20">
				<div className="flex-row sm:justify-center sm:flex">
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
						<div className="flex-row flex-center space-x-8 mt-6">
							<div className="flex-col">
								<Link href="https://www.facebook.com/mezikozy">
									<a target="_blank" rel="noreferrer noopener" className="nav-item">
										<span className="typcn typcn-social-facebook-circular text-4xl"></span>
									</a>
								</Link>
							</div>
							<div className="flex-col">
								<Link href="https://www.instagram.com/mezi_kozy_band/">
									<a target="_blank" rel="noreferrer noopener" className="nav-item">
										<span className="typcn typcn-social-instagram-circular text-4xl"></span>
									</a>
								</Link>
							</div>
							<div className="flex-col">
								<Link href="https://www.youtube.com/channel/UCwPSwJ4u991KFb4BfeeoC2g">
									<a target="_blank" rel="noreferrer noopener" className="nav-item">
										<span className="typcn typcn-social-youtube-circular text-4xl"></span>
									</a>
								</Link>
							</div>
							<div className="flex-col">
								<Link href="mailto:kontakt@mezikozyband.cz">
									<a className="nav-item mb-1">
										<span className="typcn typcn-mail text-4xl"></span>
									</a>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	)
}
