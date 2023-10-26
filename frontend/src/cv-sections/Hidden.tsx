import PendingActions from '@suid/icons-material/PendingActions'
import VisibilityOff from '@suid/icons-material/VisibilityOff'
import { Chip } from '@suid/material'
import { useCart } from '../CartProvider'
import { Show } from 'solid-js'

type Props = {
    key: string
}

export default (props: Props) => {
    const { isInCart, toggleCart } = useCart()

    return (
        <>
            <Show
                when={isInCart(props.key)}
                fallback={<Chip onclick={() => toggleCart(props.key)} icon={<VisibilityOff />} label={'Hidden'} />}
            >
                <Chip
                    onclick={() => toggleCart(props.key)}
                    icon={<PendingActions />}
                    label={'Added to cart'}
                    color="secondary"
                />
            </Show>
        </>
    )
}
