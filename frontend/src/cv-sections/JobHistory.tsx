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

                        <h5>Missions</h5>
                        <ul>
                            <For each={job.missions}>
                                {(mission) => (
                                    <li>
                                        <h6>{mission.project}</h6>
                                        <p>{mission.description}</p>
                                        <p>Size: {mission.size}</p>

                                        <h6>Teams</h6>
                                        <ul>
                                            <For each={mission.teams}>
                                                {(team) => (
                                                    <li>
                                                        <h6>{team.position}</h6>
                                                        <p>Team: {team.team}</p>
                                                        <p>
                                                            {team.start} - {team.end}
                                                        </p>
                                                        <p>Size: {team.size}</p>
                                                        <p>Tasks: {team.tasks.join(', ')}</p>
                                                        <p>Duration: {team.duration}</p>
                                                    </li>
                                                )}
                                            </For>
                                        </ul>
                                    </li>
                                )}
                            </For>
                        </ul>
                    </li>
                )}
            </For>
        </ul>
    </Card>
)
