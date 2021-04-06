import Link from 'next/link'

import MailIcon from './mail.svg'
import GithubIcon from './github-mark.svg'
import InstagramIcon from './instagram.svg'
import TwitterIcon from './twitter.svg'

export const Header = () => (
	<header className="w-full bg-gray-800 text-teal-100">
		<nav className="m-auto container flex flex-row items-center p-4">
			<div className="flex-grow">
				<Link href="/">
					<a className="transition duration-300 hover:text-teal-300 font-thin">
						Build First
					</a>
				</Link>
			</div>
			<ul className="flex flex-row">
				<li className="ml-4">
					<Link href="/contact">
						<a
							className="transition duration-300 hover:text-teal-300"
							aria-label="contact"
						>
							<MailIcon title="Contact us" width="1.5rem" />
						</a>
					</Link>
				</li>
				<li className="ml-4">
					<a
						className="transition duration-300 hover:text-teal-300"
						href="https://github.com/build-first"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="github"
					>
						<GithubIcon title="Johnny's github" width="1.5rem" />
					</a>
				</li>
				<li className="ml-4">
					<a
						className="transition duration-300 hover:text-teal-300"
						href="https://www.instagram.com/jmagrippis/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="instagram"
					>
						<InstagramIcon title="Johnny's instagram" width="1.5rem" />
					</a>
				</li>
				<li className="ml-4">
					<a
						className="transition duration-300 hover:text-teal-300"
						href="https://twitter.com/jmagrippis"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="twitter"
					>
						<TwitterIcon title="Johnny's twitter" width="1.5rem" />
					</a>
				</li>
			</ul>
		</nav>
	</header>
)
