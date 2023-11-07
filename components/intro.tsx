import Image from 'next/image'

export default function Intro() {
	return (
		<section>
			<div className='flex items-center justify-center'>
				<div>
					<Image
						src='https://avatars.githubusercontent.com/u/4394337?v=4'
						alt='Brian portrait'
						width='192'
						height='192'
						quality='95'
						priority={true}
						className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
					/>
				</div>
			</div>
		</section>
	)
}
