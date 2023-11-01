import { Card } from '@suid/material'
import { Internship } from '../types'
import { For } from 'solid-js'

export default (internships: Internship[]) => (
    <Card>
        <h3>Internships</h3>
        <ul>
            <For each={internships}>
                {(internship) => (
                    <li>
                        <h4>{internship.company}</h4>
                        <p>{internship.position}</p>
                        <p>
                            {internship.start} - {internship.end}
                        </p>
                        <p>
                            {internship.location.city}, {internship.location.country}
                        </p>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
