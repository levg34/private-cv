import { Card } from '@suid/material'
import { OpenSource } from '../types'
import { For } from 'solid-js'

export default (openSource: OpenSource[]) => (
    <Card>
        <h3>Open Source Projects</h3>

        <ul>
            <For each={openSource}>
                {(project) => (
                    <li>
                        <h4>{project.title}</h4>
                        <p>{project.description}</p>

                        <h5>Technologies</h5>
                        <ul>
                            <For each={project.technologies}>
                                {(tech) => (
                                    <li>
                                        <p>{tech}</p>
                                    </li>
                                )}
                            </For>
                        </ul>

                        <p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                Project Link
                            </a>
                        </p>
                        <p>
                            <a href={project.codeLink} target="_blank" rel="noopener noreferrer">
                                Code Link
                            </a>
                        </p>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
