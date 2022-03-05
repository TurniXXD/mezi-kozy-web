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

export default function Header({ posts }: any) {
	return (
		<div className="header-wrapper">
			<nav className="">
				<ul className="flex-row flex-center nav-items">
					<li className="flex-col nav-item ">
						<Link href="/">
							<a className="nav-item ">HOME</a>
						</Link>
					</li>
					<li className="flex-col nav-item ">
						<Link href="/aktuality">
							<a className="nav-item ">AKTUALITY</a>
						</Link>
					</li>
					<li className="flex-col nav-item ">
						<Link href="/kapela">
							<a className="nav-item">KAPELA</a>
						</Link>
					</li>
					<li className="flex-col nav-item ">
						{/* domyslet redirect na nejaktuálnější galerii a left sidebar na orientaci v ní */}
						<Link href="/galerie">
							<a className="nav-item">GALERIE</a>
						</Link>
					</li>
					<li className="flex-col nav-item ">
						<Link href="/kontakty">
							<a className="nav-item">KONTAKTY</a>
						</Link>
					</li>
				</ul>
			</nav>
			<div className="flex-row header-table">
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
