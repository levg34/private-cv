import { JSX, createContext, createSignal, useContext } from 'solid-js'

interface IUser {
    email: string
}

type LoginContextType = {
    login(): void
    logout(): void
    getLoggedInUser(): IUser | null
    isLoggedIn(): boolean
}

const LoginContext = createContext<LoginContextType>()

export const useLogin = () => useContext(LoginContext)

type Props = {
    children: number | boolean | Node | JSX.ArrayElement | string
}

export default (props: Props) => {
    const [isLoggedIn, setIsLoggedIn] = createSignal<boolean>(false)
    const getLoggedInUser = (): IUser | null => {
        if (isLoggedIn()) {
            return {
                email: 'luc@example.com'
            }
        }
        return null
    }

    const isLoggedInFn = () => getLoggedInUser() !== null

    const login = () => {
        setIsLoggedIn(true)
    }

    const logout = () => {
        setIsLoggedIn(false)
    }

    return (
        <LoginContext.Provider value={{ getLoggedInUser, login, logout, isLoggedIn: isLoggedInFn }}>
            {props.children}
        </LoginContext.Provider>
    )
}
