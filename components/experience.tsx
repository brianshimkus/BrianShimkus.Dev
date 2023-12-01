'use client'

import React from 'react'
import SectionHeading from './section-heading'
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'

export default function Experience() {
	const { ref } = useSectionInView('Experience', 1.0)

	return (
		<section id='experience' ref={ref} className='scroll-mt-28 mb-28'>
			<SectionHeading>My Experience</SectionHeading>
			<VerticalTimeline>
				{experiencesData.map((item, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							className='vertical-timeline-element--work'
							contentStyle={{
								background: 'rgb(139 92 246)',
								color: '#fff',
								padding: '1.3rem 2rem',
								visibility: 'visible',
							}}
							contentArrowStyle={{
								borderRight: '7px solid  rgb(139 92 246)',
							}}
							date={item.date}
							icon={item.icon}>
							<h3 className='font-bold text-xl'>{item.title}</h3>
							<h3 className='font-bold text-slate-900 text-lg'>
								{item.company}
							</h3>
							<ul className='ml-4'>
								{item.descriptionPoints.map((point, index) => (
									<li key={index} className='list-disc list-outside mt-4'>
										{point.descriptionPoint}
									</li>
								))}
							</ul>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	)
}
