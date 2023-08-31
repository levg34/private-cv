import Header from './Header'
import CV from './CV'
import { Match, Switch, createResource } from 'solid-js'
import axios from 'axios'
import { Alert, CircularProgress } from '@suid/material'

export default function App() {
    const [cv] = createResource(() => axios.get('/cv.json'))

    return (
        <>
            <Header />
            <Switch fallback={<CV {...cv().data} />}>
                <Match when={cv.loading}><CircularProgress color="secondary" /> Loading...</Match>
                <Match when={cv.error}><Alert severity="error">Error: {cv.error}</Alert></Match>
            </Switch>
        </>
    )
}
