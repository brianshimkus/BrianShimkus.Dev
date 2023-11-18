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
		<section>
			<h3>{title}</h3>
			<p>{description}</p>
			<ul>
				{tags.map((tag, i) => (
					<li key={i}>{tag}</li>
				))}
			</ul>

			<Image src={imageUrl} alt='Project I worked on' quality={95} />
		</section>
	)
}
