import { For } from 'solid-js'

export default (section: string[]) => {
    return (
        <ol>
            <For each={section}>{(interest) => <li>{interest}</li>}</For>
        </ol>
    )
}
