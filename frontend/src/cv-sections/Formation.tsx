import { Card } from '@suid/material'
import { Formation } from '../types'
import { For } from 'solid-js'

export default (formation: Formation) => (
    <Card>
        <h3>Formation</h3>

        <h4>Studies</h4>
        <ul>
            <For each={formation.studies}>
                {(study) => (
                    <li>
                        <h5>{study.school}</h5>
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

        <h4>Languages</h4>
        <ul>
            <For each={formation.languages}>
                {(language) => (
                    <li>
                        <p>
                            {language.name} - {language.level}
                        </p>
                    </li>
                )}
            </For>
        </ul>

        <h4>Technical Skills</h4>
        <ul>
            <For each={formation.technicalSkills}>
                {(skill) => (
                    <li>
                        <p>{skill}</p>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
