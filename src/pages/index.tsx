import {GetStaticProps} from 'next'

import Home, {HomeProps} from 'components/Home'
import {YOUTUBE_CHANNEL_URI} from 'lib/constants'

export const getStaticProps: GetStaticProps<HomeProps> = async () => ({
	props: {
		latestEpisodeLink: YOUTUBE_CHANNEL_URI,
	},
	revalidate: 60,
})

export default Home
