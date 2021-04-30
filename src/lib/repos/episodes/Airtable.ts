import {FieldSet, Record, Table} from 'airtable'

import {airtableBase} from '../airtableBase'
import {Episode, EpisodesInterface} from './types'

interface FeedFieldSet extends FieldSet {
	Title: string
	'YouTube Link': string
	Description: string
}

type EpisodeRecord = Record<FeedFieldSet>
const mapRecordToEpisode = (record: EpisodeRecord): Episode => ({
	title: record.get('Title'),
	youTubeLink: record.get('YouTube Link'),
	description: record.get('Description'),
})

export class EpisodesAirtableRepo implements EpisodesInterface {
	#table: Table<FeedFieldSet>

	constructor(base = airtableBase) {
		this.#table = base('Feed')
	}

	latestEpisode = () =>
		new Promise<Episode>((resolve, reject) => {
			this.#table
				.select({
					view: 'Latest',
					maxRecords: 1,
				})
				.firstPage(function (err, [latestRecord]) {
					if (err) return reject(err)
					if (!latestRecord) return reject('No episodes found!')

					return resolve(mapRecordToEpisode(latestRecord))
				})
		})
}

export const episodesRepo = new EpisodesAirtableRepo()
