import { JSX, createContext, useContext } from 'solid-js'
import { createStore } from 'solid-js/store'

export interface IRequest {
    status: null | 'sent' | 'approved'
    requiredInfo: string[]
    // approvedInfo: string[]
}

type RequestContextType = {
    sendRequest: (requiredInfo: string[]) => Promise<void>
    getStatus: () => IRequest['status'] // Promise<IRequest['status']>
}

const RequestContext = createContext<RequestContextType>()

export const useRequest = () => useContext(RequestContext)

type Props = {
    children: number | boolean | Node | JSX.ArrayElement | string
}

export default (props: Props) => {
    const [request, setRequest] = createStore<IRequest>({
        requiredInfo: [],
        // approvedInfo: [],
        status: null
    })

    const sendRequest = async (requiredInfo: string[]) => {
        setRequest((oldRequest: IRequest) => {
            return {
                ...oldRequest,
                status: 'sent',
                requiredInfo: [...requiredInfo]
            }
        })
    }

    // const getStatus = async () => {
    const getStatus = () => {
        return request.status
    }

    return (
        <RequestContext.Provider
            value={{
                sendRequest,
                getStatus
            }}
        >
            {props.children}
        </RequestContext.Provider>
    )
}
