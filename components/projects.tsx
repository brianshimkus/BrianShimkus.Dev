'use client'

import { projectsData } from '@/lib/data'
import SectionHeading from './section-heading'
import React, { useEffect } from 'react'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
	const { ref, inView } = useInView({
		threshold: 0.95,
	})
	const { setActiveSection } = useActiveSectionContext()

	useEffect(() => {
		if (inView) {
			setActiveSection('Projects')
		}
	}, [inView, setActiveSection])

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
