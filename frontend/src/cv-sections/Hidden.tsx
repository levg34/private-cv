import PendingActions from '@suid/icons-material/PendingActions'
import VisibilityOff from '@suid/icons-material/VisibilityOff'
import { Chip } from '@suid/material'
import { ICart, useCart } from '../CartProvider'
import { Show } from 'solid-js'

type Props = {
    key: string
}

export default (props: Props) => {
    const [cart, setCart] = useCart()

    const toggleCart = () => {
        setCart((oldCart: ICart) => {
            if (oldCart.requiredInfo.includes(props.key)) {
                return {
                    status: 'dirty',
                    requiredInfo: oldCart.requiredInfo.filter(i => i !== props.key)
                }
            } else {
                return {
                    status: 'dirty',
                    requiredInfo: [...oldCart.requiredInfo, props.key]
                }
            }
        })
    }

    return <>
        <Show when={cart.requiredInfo.includes(props.key)} fallback={<Chip onclick={toggleCart} icon={<VisibilityOff />} label={'Hidden'} />}>
            <Chip onclick={toggleCart} icon={<PendingActions />} label={'Added to cart'} color='secondary' />
        </Show>
    </>
}