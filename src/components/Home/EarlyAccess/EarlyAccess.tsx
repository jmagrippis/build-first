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
				<p className="text-lg text-gray-400 mb-4">
					See our episodes first, while they‘re still unlisted, and get those
					early comments in!
				</p>
			</div>
			<div ref={containerRef} />
		</section>
	)
}

export default EarlyAccess
