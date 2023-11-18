import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'
import Image from 'next/image'

export default function Projects() {
	return (
		<section>
			<SectionHeading>My Projects</SectionHeading>
			<div>
				{projectsData.map((project, i) => (
					<React.Fragment key={i}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	)
}

type ProjectProps = (typeof projectsData)[number]

function Project({ title, description, tags, imageUrl }: ProjectProps) {
	return (
		<section className='bg-gray-800 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8'>
			<h3 className='text-2xl font-semibold'>{title}</h3>
			<p className='mt-2 leading-relaxed text-gray-500'>{description}</p>
			<ul className='flex flex-wrap mt-4 gap-2 relative'>
				{tags.map((tag, i) => (
					<li
						className='bg-black/[0.7] px-3 py-1 text-[0.7rem] tracking-wider rounded-full'
						key={i}>
						{tag}
					</li>
				))}
			</ul>

			<Image
				src={imageUrl}
				alt='Project I worked on'
				quality={95}
				className='absolute'
			/>
		</section>
	)
}
