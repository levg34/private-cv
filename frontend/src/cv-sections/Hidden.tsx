import PendingActions from '@suid/icons-material/PendingActions'
import VisibilityOff from '@suid/icons-material/VisibilityOff'
import { Chip } from '@suid/material'
import { useCart } from '../cart/CartProvider'
import { Show } from 'solid-js'
import { useLogin } from '../login/LoginProvider'

type Props = {
    key: string
}

export default (props: Props) => {
    const { isInCart, toggleCart } = useCart()
    const { isLoggedIn } = useLogin()

    return (
        <>
            <Show
                when={isInCart(props.key) && isLoggedIn()}
                fallback={
                    <span style={{ cursor: isLoggedIn() ? 'pointer' : 'not-allowed' }}>
                        <Chip
                            disabled={!isLoggedIn()}
                            onclick={() => toggleCart(props.key)}
                            icon={<VisibilityOff />}
                            label={'Hidden'}
                            style={{ cursor: 'pointer' }}
                        />
                    </span>
                }
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
