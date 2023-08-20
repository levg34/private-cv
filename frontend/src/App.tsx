import { Card, Container } from '@suid/material'
import { createSignal } from 'solid-js'

export default function App() {
    const [signal] = createSignal('SIGNAL')
    return (
        <Container>
           <Card>Content {signal()}</Card>
        </Container>
    )
}
