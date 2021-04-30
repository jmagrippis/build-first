import {useRef} from 'react'
import useConvertKitScript from './useConvertKitScript'

const CONVERTKIT_FORM_UID = 'f6551efbb1'

const EarlyAccess = () => {
	const containerRef = useRef<HTMLDivElement>(null)

	useConvertKitScript(containerRef, CONVERTKIT_FORM_UID)

	return (
		<section className="container">
			<div className="px-4 lg:px-0">
				<h2 className="text-2xl mb-4">Get early access to our episodes!</h2>
				<ul className="text-lg text-gray-400 mb-4 list-disc list-inside">
					<li>
						Be the first to watch our episodes, while they‘re still unlisted
					</li>
					<li>Get your comments and feedback in, before everyone else</li>
					<li>
						Read behind-the-scenes scoops, straight from Marily & Johnny, to
						your inbox
					</li>
				</ul>
			</div>
			<div ref={containerRef} />
		</section>
	)
}

export default EarlyAccess
