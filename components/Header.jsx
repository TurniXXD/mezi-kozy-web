import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Card from '@components/Card'

import img1 from '/public/images/logo/logo-black.png'

// function for splitting posts in equal halfs => two columns
const postsTestData = [
	{
		id: '1',
		title: '19.11. Hospoda 1',
	},
	{
		id: '2',
		title: '4.12. Hospoda 1',
	},
	{
		id: '3',
		title: '10.1. Hospoda 1',
	},
	{
		id: '4',
		title: '20.1. Hospoda 1',
	},
]

export default function Header(/*{ headerPosts } /* : any */) {
	const [menu, setMenu] = useState(false)

	useEffect(() => {
		const menuEl = document.getElementsByClassName('menu')[0]
		const links = document.getElementsByClassName('links')[0]
		const container = document.getElementById('navbar-mobile')

		console.log('kokot')
		// if (menu)  menuEl.className = 'active'
		// else  menuEl.className = 'not-active'
		if (menu) {
			menuEl.className = 'menu mobile-nav-item active'
			links.className = 'links nav-items flex-col xl:flex-row justify-center pb-8 xl:pb-0'
		} else {
			menuEl.className = 'menu mobile-nav-item not-active'
			links.className = 'links nav-items flex-col xl:flex-row justify-center pb-8 xl:pb-0 tbl-break-hide'
		}

		// for (var i = 0; i < links.length; i++) {
		// 	if (links[i].style.display === 'flex') {
		// 		links[i].style.display = 'none'
		// 		links[i].style.flexDirection = 'unset'
		// 		links[i].style.alignItems = 'unset'
		// 		container.style.height = '12.5vh'
		// 		document.getElementsByTagName('body')[0].style.overflow = 'auto'
		// 	} else {
		// 		links[i].style.display = 'flex'
		// 		links[i].style.flexDirection = 'row'
		// 		links[i].style.alignItems = 'center'
		// 		container.style.height = '100vh'
		// 		document.getElementsByTagName('body')[0].style.overflow = 'hidden'
		// 	}
		// }
	}, [menu])

	return (
		<div className="header-wrapper">
			<nav>
				<ul id="mobile-nav" className="visible xl:hidden flex-row nav-items mx-0 justify-between">
					<li className="mobile-nav-item flex-col nav-item ml-2 sm:ml-8">
						<Link href="/">
							<a className="nav-item">MEZI KOZY</a>
						</Link>
					</li>
					<li onClick={() => setMenu((state) => !state)} className="flex">
						<div className="menu mobile-nav-item nav-item not-active">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</li>
				</ul>
				<ul className="links nav-items flex-col xl:flex-row justify-center pb-8 xl:pb-0 tbl-break-hide">
					<li className="flex-row xl:flex-col nav-item ">
						<Link href="/">
							<a className="nav-item ">HOME</a>
						</Link>
					</li>
					<li className="flex-row xl:flex-col nav-item ">
						<Link href="/aktuality">
							<a className="nav-item ">AKTUALITY</a>
						</Link>
					</li>
					<li className="flex-row xl:flex-col nav-item ">
						<Link href="/kapela">
							<a className="nav-item">KAPELA</a>
						</Link>
					</li>
					<li className="flex-row xl:flex-col nav-item ">
						{/* domyslet redirect na nejaktuálnější galerii a left sidebar na orientaci v ní */}
						<Link href="/galerie">
							<a className="nav-item">GALERIE</a>
						</Link>
					</li>
					<li className="flex-row xl:flex-col nav-item ">
						<Link href="/kontakty">
							<a className="nav-item">KONTAKTY</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className="header-table tbl-break-hide flex-row">
				<Card>
					<div className="flex-col flex-center logo">
						<Link href="/">
							<a className="image-wrapper">
								<Image src={img1} alt="fajne" width="100" height="120" />
							</a>
						</Link>
					</div>
					{/* <div className="col flex-center program">
						<div className="row flex-center">
							<div className="col flex-center">
								{posts &&
									posts.map((post: any) => {
										return (
											<div className="row flex-center">
												<Link href="/aktuality/[post]" as={`/aktuality/${post?.id}`}>
													<a className="header-table-item">
														{post?.date} {post?.title}
													</a>
												</Link>
											</div>
										)
									})}
							</div>
							<div className="col flex-center">
								{posts &&
									posts.map((post: any) => {
										return (
											<div className="row flex-center">
												<Link href="/aktuality/[post]" as={`/aktuality/${post?.id}`}>
													<a className="header-table-item">
														{post?.date} {post?.title}
													</a>
												</Link>
											</div>
										)
									})}
							</div>
						</div>
					</div> */}
				</Card>
			</div>
		</div>
	)
}
