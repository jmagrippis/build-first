import {Hero} from './Hero'

export type Props = {
	latestEpisodeLink: string
}

export const Body = ({latestEpisodeLink}: Props) => (
	<main className="w-full flex-grow flex items-center">
		<Hero latestEpisodeLink={latestEpisodeLink} />
	</main>
)
