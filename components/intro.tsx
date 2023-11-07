'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Intro() {
	return (
		<section>
			<div className='flex items-center justify-center'>
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: 'tween',
						duration: 0.2,
					}}>
					<Image
						src='https://avatars.githubusercontent.com/u/4394337?v=4'
						alt='Brian portrait'
						width='192'
						height='192'
						quality='95'
						priority={true}
						className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
					/>
				</motion.div>
			</div>

			<motion.h1
				className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className='font-bold'>Hello, I'm Brian.</span> I'm a{' '}
				<span className='font-bold'>full-stack developer</span> with{' '}
				<span className='font-bold'>10 years</span> of experience.
			</motion.h1>
		</section>
	)
}
