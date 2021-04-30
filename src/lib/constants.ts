const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'

export const rootUrl = `${protocol}://${process.env.NEXT_PUBLIC_ROOT_URL}`

export const YOUTUBE_CHANNEL_URI =
	'https://www.youtube.com/channel/UCvw69Hm5o2150tmgzSdNkyg'
