import {render, screen} from '@testing-library/react'

import Home from './'

describe('Home', () => {
	it('has a CTA linking to the latest episode', () => {
		const latestEpisodeLink = 'https://www.youtube.com/watch?v=ThisIsATestId'
		render(<Home latestEpisodeLink={latestEpisodeLink} />)

		const linkElement = screen.getByRole('link', {
			name: /Latest Episode/i,
		}) as HTMLAnchorElement
		expect(linkElement.href).toBe(latestEpisodeLink)
	})
})
