import {ReactNode, HTMLProps, forwardRef} from 'react'

type Props = {
	children: ReactNode
} & HTMLProps<HTMLAnchorElement>

export const Cta = forwardRef<undefined, Props>(({children, ...props}, ref) => (
	<a
		ref={ref}
		className="text-2xl lg:text-3xl font-thin px-4 py-2 bg-teal-500 text-white rounded shadow"
		{...props}
	>
		{children}
	</a>
))
