const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
const host =
	process.env.NEXT_PUBLIC_ROOT_URL || process.env.NEXT_PUBLIC_VERCEL_URL

export const rootUrl = `${protocol}://${host}`

export const YOUTUBE_CHANNEL_URI =
	'https://www.youtube.com/channel/UCvw69Hm5o2150tmgzSdNkyg'
