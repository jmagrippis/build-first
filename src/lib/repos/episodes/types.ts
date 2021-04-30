export type Episode = {
	title: string
	youTubeLink: string
	description: string
}

export interface EpisodesInterface {
	latestEpisode: () => Promise<Episode>
}
