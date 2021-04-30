import {GetStaticProps} from 'next'

import Home, {HomeProps} from 'components/Home'
import {episodesRepo} from 'lib/repos/episodes/Airtable'
import {YOUTUBE_CHANNEL_URI} from 'lib/constants'

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const latestEpisode = await episodesRepo.latestEpisode().catch()

	return {
		props: {
			latestEpisodeLink: latestEpisode?.youTubeLink || YOUTUBE_CHANNEL_URI,
		},
		revalidate: 60,
	}
}

export default Home
