import EarlyAccess from './EarlyAccess/EarlyAccess'
import {Hero} from './Hero'

export type Props = {
	latestEpisodeLink: string
}

export const Body = ({latestEpisodeLink}: Props) => (
	<main className="w-full flex-grow flex items-center flex-col">
		<div className="flex-grow flex items-center">
			<Hero latestEpisodeLink={latestEpisodeLink} />
		</div>
		<EarlyAccess />
	</main>
)
