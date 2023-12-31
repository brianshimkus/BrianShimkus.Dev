'use client'

import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React from 'react'
import Project from './project'
import { useSectionInView } from '@/lib/hooks'

export default function Projects() {
	const { ref } = useSectionInView('Projects', 1.0)

	return (
		<section ref={ref} id='projects' className='scroll-mt-28'>
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
