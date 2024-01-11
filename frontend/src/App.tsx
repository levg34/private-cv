import Header from './Header'
import CV from './CV'
import { Match, Switch, createResource } from 'solid-js'
import axios from 'axios'
import { Alert, CircularProgress } from '@suid/material'
import CartProvider from './cart/CartProvider'
import LoginProvider from './login/LoginProvider'
import RequestProvider from './request/RequestProvider'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL
const CV_URL = BACKEND_URL ? BACKEND_URL + '/cv' : './cv.json'

export default function App() {
    const [cv] = createResource(() => axios.get(CV_URL))

    return (
        <LoginProvider>
            <RequestProvider>
                <CartProvider>
                    <Header />
                    <Switch fallback={<CV {...cv().data} />}>
                        <Match when={cv.loading}>
                            <CircularProgress color="secondary" /> Loading...
                        </Match>
                        <Match when={cv.error}>
                            <Alert severity="error">Error: {cv.error}</Alert>
                        </Match>
                    </Switch>
                </CartProvider>
            </RequestProvider>
        </LoginProvider>
    )
}
