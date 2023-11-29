export default function Footer() {
	let currentYear = new Date().getFullYear()
	return (
		<footer className='mb-10 px-4 text-center text-gray-500'>
			<small className='mb-2 block text-xs'>
				Brian Shimkus &copy; {currentYear}
			</small>
		</footer>
	)
}
