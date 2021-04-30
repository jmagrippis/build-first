import {Body} from './Body'

export type HomeProps = {
	latestEpisodeLink: string
}

const Home = ({latestEpisodeLink}: HomeProps) => (
	<Body latestEpisodeLink={latestEpisodeLink} />
)

export default Home
