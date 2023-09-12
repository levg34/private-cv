import { JSX, createContext, useContext } from "solid-js"
import { SetStoreFunction, createStore } from "solid-js/store"

export interface ICart {
    status: 'validated' | 'dirty' | 'empty'
    requiredInfo: string[]
}

type CartContextType = [cart: ICart, setCart: SetStoreFunction<ICart>]

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
    return <CartContext.Provider value={[cart, setCart]}>
        {props.children}
    </CartContext.Provider>
}