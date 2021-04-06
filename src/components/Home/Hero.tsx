import Link from 'next/link'

import BuildSvg from './build.svg'

export const Hero = () => (
	<section className="container py-4 px-2 md:px-0 md:grid md:grid-cols-7 md:gap-x-8 lg:gap-x-16">
		<div className="mb-8 md:mb-0 text-xl md:text-2xl md:col-span-3 text-center md:text-left md:self-center">
			<div className="mb-2">
				<h1 className="font-serif text-5xl lg:text-6xl mb-2">Build First</h1>
				<div className="font-thin text-4xl">The fun way to learn tech!</div>
			</div>
			<p className="text-gray-400 mb-6">
				Get into tech, advance your career and realise your ideas by building,
				learning, iterating!
			</p>
			<Link href="/episodes">
				<a className="text-2xl md:text-3xl font-thin px-4 py-2 bg-teal-500 text-white rounded shadow">
					Explore Episodes
				</a>
			</Link>
		</div>
		<aside className="md:col-span-4">
			<BuildSvg className="w-full" />
		</aside>
	</section>
)
