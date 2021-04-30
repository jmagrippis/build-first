import {Cta} from 'components/Cta/Cta'

export const Body = () => (
	<main className="w-full flex-grow container p-4">
		<h1 className="text-4xl mb-4">Contact</h1>
		<section className="text-2xl max-w-prose space-y-2 mb-6">
			<p>We’ll have a fancy contact form soon enough...</p>
			<p>For now, you’ll have to use your own email client 😬</p>
		</section>
		<Cta href="mailto:contact@buildfirst.tech">Email Us!</Cta>
	</main>
)
