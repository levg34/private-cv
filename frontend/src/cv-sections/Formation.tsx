import { Card } from '@suid/material'
import { Formation } from '../types'
import { For } from 'solid-js'

export default (formation: Formation) => (
    <Card>
        <h3>Formation</h3>
        <ul>
            <For each={formation.studies}>
                {(study) => (
                    <li>
                        <h4>{study.school}</h4>
                        <p>{study.degree}</p>
                        <p>
                            {study.start} - {study.end}
                        </p>
                        <p>
                            {study.location.city}, {study.location.country}
                        </p>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
