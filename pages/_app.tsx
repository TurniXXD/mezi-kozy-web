import React, { useEffect } from 'react'
import App, { AppProps } from 'next/app'
import Head from 'next/head'
import { NextSeo } from 'next-seo'
//import fetch from 'isomorphic-unfetch'
import { withUrqlClient, NextUrqlAppContext } from 'next-urql'
import { ApolloProvider } from '@apollo/client'
// import { useApollo } from '@lib/apolloClient'
//import { headerPostsQuery } from '@graphql/queries.graphql'
import { Context } from '@lib/context'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'typicons.font/src/font/typicons.css'
import '../styles/globals.css'

export default function NextApp({ Component, pageProps, headerPosts, err }: AppProps & { headerPosts: any; err: any }) {
	//const apolloClient = useApollo(pageProps.initialApolloState)
	const [context, setContext] = React.useState(headerPosts)

	useEffect(() => {
		document.documentElement.lang = 'cs'
	}, [])

	return (
		// <ApolloProvider client={apolloClient}>
		//   <Context.Provider value={[context, setContext]}>
		//     <Component {...pageProps} err={err} />
		//   </Context.Provider>
		// </ApolloProvider>
		<Context.Provider value={[context, setContext]}>
			<NextSeo
				title="Mezi Kozy"
				description="Hrajeme jak po hospodách tak i soukromých akcích. Ve světle posledních událostí výdělkem příspíváme na pomoc Ukrajině."
				canonical="https://www.mezikozyband.cz/"
				openGraph={{
					url: 'https://www.mezikozyband.cz/',
					title: 'Mezi Kozy',
					description:
						'Hrajeme jak po hospodách tak i soukromých akcích. Ve světle posledních událostí výdělkem příspíváme na pomoc Ukrajině.',
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
						},
					],
					site_name: 'Mezi Kozy',
				}}
			/>
			<Head>
				<meta name="author" content="https://github.com/TurniXXD" />
				<link rel="shortcut icon" href="/static/favicon.ico" />
			</Head>
			<Component {...pageProps} err={err} />
		</Context.Provider>
	)
}

// NextApp.getInitialProps = async (ctx: any, context: any) => {
// 	const appProps = await App.getInitialProps(ctx)
// 	const headerPosts = await headerPostsQuery

// 	return {
// 		...appProps,
// 		pageProps: { headerPosts },
// 		revalidate: 1,
// 	}
// }
