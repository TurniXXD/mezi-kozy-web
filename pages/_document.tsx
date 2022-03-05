import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import { NextSeo } from 'next-seo'

export default class CustomDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang="cs">
				<NextSeo
					title="Kapela Mezi Kozy"
					description="Hrajeme jak po hospodách tak i soukromých akcích. Ve světle posledních událostí výdělkem příspíváme na pomoc Ukrajině."
					canonical="https://www.mezikozyband.cz/"
					openGraph={{
						url: 'https://www.mezikozyband.cz/',
						title: "Kapela Mezi Kozy",
						description: "Hrajeme jak po hospodách tak i soukromých akcích. Ve světle posledních událostí výdělkem příspíváme na pomoc Ukrajině.",
						images: [
							{
								url: '/public/images/logo-l.png',
								width: 1000,
								height: 1000,
								alt: 'Mezi kozy',
							},
							{
								url: '/public/images/logo-md.png',
								width: 750,
								height: 750,
								alt: 'Mezi kozy',
							},
							{
								url: '/public/images/logo-s.png',
								width: 500,
								height: 500,
								alt: 'Mezi kozy',
							}
						],
						site_name: 'Mezi Kozy',
					}}
				/>
				<Head>
					<meta name="author" content="https://github.com/TurniXXD" />
					<link rel="shortcut icon" href="/static/favicon.ico" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
