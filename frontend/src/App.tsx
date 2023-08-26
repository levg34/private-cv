import Header from './Header'
import CV from './CV'
import cv from '../../cv.json'

export default function App() {
    return (
        <>
            <Header />
            <CV {...cv} />
        </>
    )
}
