import { Card } from '@suid/material'
import { JobHistory } from '../types'
import { For } from 'solid-js'

export default (jobHistory: JobHistory[]) => (
    <Card>
        <h3>Job History</h3>
        <ul>
            <For each={jobHistory}>
                {(job) => (
                    <li>
                        <h4>{job.company}</h4>
                        <p>{job.position}</p>
                        <p>
                            {job.start} - {job.end}
                        </p>
                        <p>
                            {job.location.city}, {job.location.country}
                        </p>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
