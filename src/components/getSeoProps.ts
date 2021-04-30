import {rootUrl} from 'lib/constants'

const defaultSeo = {
	title: 'Build First | The fun way to learn tech!',
	description:
		'Dr. Marily Nika and Johnny Magrippis are tech-industry veterans, here to help you grow into tech! We’ll build stuff with you, and for you 🙌',
	openGraph: {
		type: 'website',
		locale: 'en_UK',
		url: rootUrl,
		site_name: 'Build First',
		images: [
			{
				url: `${rootUrl}/images/hero.png`,
				width: 512,
				height: 512,
				alt: 'Build First',
			},
		],
	},
	twitter: {
		handle: '@jmagrippis',
		cardType: 'summary',
	},
}

export const getSeoProps = ({
	title = defaultSeo.title,
	description = defaultSeo.description,
	openGraph = {},
	twitter = {},
} = {}) => ({
	title,
	description,
	openGraph: {...defaultSeo.openGraph, title, description, ...openGraph},
	twitter: {...defaultSeo.twitter, ...twitter},
})
