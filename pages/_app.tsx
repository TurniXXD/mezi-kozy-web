import React, { useEffect } from 'react'
import App, { AppProps } from 'next/app'
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
