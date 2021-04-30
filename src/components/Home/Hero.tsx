import {Cta} from 'components/Cta/Cta'
import BuildSvg from './build.svg'

export const Hero = () => (
	<section className="container py-4 px-2 lg:px-0 lg:grid lg:grid-cols-9 md:gap-x-8 lg:gap-x-16">
		<div className="mb-8 lg:mb-0 text-xl lg:text-2xl lg:col-span-4 text-center lg:text-left lg:self-center">
			<div className="mb-2">
				<h1 className="font-serif text-5xl lg:text-6xl mb-2">Build First</h1>
				<div className="font-thin text-4xl">The fun way to learn tech!</div>
			</div>
			<p className="text-gray-400 mb-6">
				Get into tech, advance your career and realise your ideas by building,
				learning, iterating!
			</p>
			<Cta
				href="https://www.youtube.com/watch?v=PutjsFe_E5k"
				target="_blank"
				rel="noopener noreferrer"
			>
				Watch the Latest Episode
			</Cta>
		</div>
		<aside className="lg:col-span-5">
			<BuildSvg className="w-full" />
		</aside>
	</section>
)
