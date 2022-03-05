import Link from 'next/link'
import Image from 'next/image'

import img1 from '/public/images/logo/logo-black.png'

export default function Footer() {
	return (
		<div className="footer-wrapper mt-20">
			<div className="container">
				<div className="flex-row flex-center space-x-8 sm:space-x-24 pt-16">
					<div className="flex-col">
						<Link href="/">
							<a className="image-wrapper">
								<Image src={img1} alt="fajne" width="100" height="120" />
							</a>
						</Link>
					</div>
					<div className="flex-col">
						<div className="flex-row">
							<Link href="/">
								<a className="nav-item">HOME</a>
							</Link>
						</div>
						<div className="flex-row">
							<Link href="/aktuality">
								<a className="nav-item">AKTUALITY</a>
							</Link>
						</div>
						<div className="flex-row">
							<Link href="/kapela">
								<a className="nav-item">KAPELA</a>
							</Link>
						</div>
						<div className="flex-row">
							<Link href="/galerie">
								<a className="nav-item">GALERIE</a>
							</Link>
						</div>
						<div className="flex-row">
							<Link href="/kotankty">
								<a className="nav-item">KONTAKTY</a>
							</Link>
						</div>
					</div>
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
				<div className="flex-row flex-center mt-8 pb-4">
					<div className="flex-col">
						<span className="text-sm">&copy; {new Date().getFullYear()} | Mezi Kozy</span>
					</div>
				</div>
			</div>
		</div>
	)
}
