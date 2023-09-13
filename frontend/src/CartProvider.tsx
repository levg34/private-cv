import { JSX, createContext, useContext } from "solid-js"
import { SetStoreFunction, createStore } from "solid-js/store"

export interface ICart {
    status: 'validated' | 'dirty' | 'empty'
    requiredInfo: string[]
}

type CartContextType = {
    clearCart: () => void,
    toggleCart: (item: string) => void
    addToCart: (item: string) => void
    removeFromCart: (item: string) => void
    validateCart: () => void
    getCartItems: () => string[]
    isInCart: (item: string) => boolean
}

const CartContext = createContext<CartContextType>()

export const useCart = () => useContext(CartContext)

type Props = {
    children: number | boolean | Node | JSX.ArrayElement | (string & {})
}

export default (props: Props) => {
    const [cart, setCart] = createStore<ICart>({
        requiredInfo: [],
        status: 'empty'
    })

    const clearCart = () => setCart(oldCart => ({
        ...oldCart,
        requiredInfo: []
    }))

    const toggleCart = (item: string) => {
        setCart((oldCart: ICart) => {
            if (oldCart.requiredInfo.includes(item)) {
                return {
                    status: 'dirty',
                    requiredInfo: oldCart.requiredInfo.filter(i => i !== item)
                }
            } else {
                return {
                    status: 'dirty',
                    requiredInfo: [...oldCart.requiredInfo, item]
                }
            }
        })
    }

    const addToCart = (item: string) => {
        setCart((oldCart: ICart) => {
            return {
                status: 'dirty',
                requiredInfo: [...oldCart.requiredInfo, item]
            }
        })
    }

    const removeFromCart = (item: string) => {
        setCart((oldCart: ICart) => {
            return {
                status: 'dirty',
                requiredInfo: oldCart.requiredInfo.filter(i => i !== item)
            }
        })
    }

    const validateCart = () => {
        setCart((oldCart: ICart) => {
            if (oldCart.requiredInfo.length === 0) {
                return {
                    status: 'empty',
                    requiredInfo: []
                }
            } else {
                return {
                    status: 'validated',
                    requiredInfo: oldCart.requiredInfo
                }
            }
        })
    }

    const getCartItems = () => {
        return cart.requiredInfo
    }

    const isInCart = (item: string) => cart.requiredInfo.includes(item)

    return <CartContext.Provider value={{ clearCart, toggleCart, addToCart, removeFromCart, validateCart, getCartItems, isInCart }}>
        {props.children}
    </CartContext.Provider>
}