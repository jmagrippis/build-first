import {MutableRefObject, useEffect} from 'react'

const useConvertKitScript = (
	containerRef: MutableRefObject<HTMLDivElement>,
	uid: string
) => {
	useEffect(() => {
		if (document.querySelector(`[data-uid*="${uid}"]`)) return

		const script = document.createElement('script')
		script.src = `https://build-first.ck.page/${uid}/index.js`
		script.async = true
		script.dataset.uid = uid

		containerRef.current.appendChild(script)

		return () => {
			document.querySelector(`[data-uid*="${uid}"]`)?.remove()
		}
	}, [containerRef, uid])
}

export default useConvertKitScript
