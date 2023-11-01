import { Card } from '@suid/material'
import { CurriculumVitae } from './types'
import { For } from 'solid-js'
import { Dynamic } from 'solid-js/web'
import CvHeader from './cv-sections/CvHeader'
import CvSection from './cv-sections/CvSection'
import Interests from './cv-sections/Interests'
import Formation from './cv-sections/Formation'
import JobHistory from './cv-sections/JobHistory'
import Internships from './cv-sections/Internships'
import OpenSource from './cv-sections/OpenSource'

const sections = {
    header: CvHeader,
    formation: Formation,
    jobHistory: JobHistory,
    internships: Internships,
    interests: Interests,
    openSource: OpenSource,
    fallback: CvSection
}

export default (cv: CurriculumVitae) => (
    <Card>
        <For each={Object.entries(cv.metadata.sectionTitles)}>
            {([key, title], index) => (
                <Card>
                    <h2>
                        {index()} {title()}
                    </h2>
                    <Dynamic component={sections[key] ?? sections.fallback} {...cv[key]} />
                </Card>
            )}
        </For>
    </Card>
)
