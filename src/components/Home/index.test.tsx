import {render, screen} from '@testing-library/react'

import Home from './'

describe('Home', () => {
	it('has a CTA', () => {
		render(<Home />)

		screen.getByRole('link', {name: 'Explore Episodes'})
	})
})
