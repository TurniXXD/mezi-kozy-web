import { useEffect } from 'react'
import Image from 'next/image'

export default function ParalaxHero({ image }: any) {
	useEffect(() => {
		// window.addEventListener('scroll', () => {
		// 	let container = document.getElementsByClassName('paralax-wrapper'),
		// 		value = window.scrollY / 2

		// 	for (let i = 0; i < container.length; i++) {
		// 		//@ts-ignore
		// 		container[i].style.marginTop = `-${value}px`
		// 	}
		// })
	}, [])

	return (
		<div className="flex-row bg-cover">
			<div className="paralax-wrapper next-image-wrapper">
				<Image src={image} alt="fajne" layout="fill" />
			</div>
		</div>
	)
}
