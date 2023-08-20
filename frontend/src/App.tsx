import { Card } from '@suid/material'
import { For, createSignal } from 'solid-js'
import Header from './Header'

export default function App() {
    const [signal] = createSignal('SIGNAL')
    return (
        <>
            <Header />
            <For each={new Array(100)}>
                {(e, i) => <Card>Content {i()} {signal()}</Card>}
            </For>
        </>
    )
}
