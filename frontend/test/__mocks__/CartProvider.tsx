/* eslint-disable @typescript-eslint/no-unused-vars */
import { JSX, createContext, useContext } from 'solid-js'

export interface ICart {
    status: 'validated' | 'dirty' | 'empty'
    requiredInfo: string[]
}

type CartContextType = {
    clearCart: () => void
    toggleCart: (item: string) => void
    addToCart: (item: string) => void
    removeFromCart: (item: string) => void
    validateCart: () => void
    getCartItems: () => string[]
    isInCart: (item: string) => boolean
    getStatus: () => string
}

const CartContext = createContext<CartContextType>()

export const useCart = () => useContext(CartContext)

type Props = {
    children: number | boolean | Node | JSX.ArrayElement | string
    // Add a mockCart prop to pass the mock state
    mockCart: ICart
}

export default (props: Props) => {
    // Use the mockCart prop instead of creating a store
    const cart = props.mockCart

    // Mock the methods that manipulate the cart state
    const clearCart = () => {}
    const toggleCart = (item: string) => {}
    const addToCart = (item: string) => {}
    const removeFromCart = (item: string) => {}
    const validateCart = () => {}

    // Mock the methods that return the cart state
    const getCartItems = () => {
        return cart.requiredInfo
    }

    const getStatus = () => cart.status

    const isInCart = (item: string) => cart.requiredInfo.includes(item)

    return (
        <CartContext.Provider
            value={{
                clearCart,
                toggleCart,
                addToCart,
                removeFromCart,
                validateCart,
                getCartItems,
                isInCart,
                getStatus
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}
