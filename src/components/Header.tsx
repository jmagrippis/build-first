import Link from 'next/link'

import YouTubeIcon from './youtube.svg'
import GitHubIcon from './github-mark.svg'
import MailIcon from './mail.svg'

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
					<a
						className="transition duration-300 hover:text-teal-300"
						href="https://www.youtube.com/channel/UCvw69Hm5o2150tmgzSdNkyg"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
					>
						<YouTubeIcon title="YouTube Channel" width="1.5rem" />
					</a>
				</li>
				<li className="ml-4">
					<a
						className="transition duration-300 hover:text-teal-300"
						href="https://github.com/jmagrippis/build-first"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<GitHubIcon title="The open-source repo at github" width="1.5rem" />
					</a>
				</li>
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
			</ul>
		</nav>
	</header>
)
