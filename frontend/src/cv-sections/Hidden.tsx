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
    const { isInCart, toggleCart, getStatus } = useCart()
    const { isLoggedIn } = useLogin()

    const canEditCart = () => isLoggedIn() && getStatus() !== 'validated'
    const cursorStyle = () => ({ cursor: canEditCart() ? 'pointer' : 'not-allowed' })

    return (
        <span style={cursorStyle()}>
            <Show
                when={isInCart(props.key) && isLoggedIn()}
                fallback={
                    <Chip
                        disabled={!canEditCart()}
                        onclick={() => toggleCart(props.key)}
                        icon={<VisibilityOff />}
                        label={'Hidden'}
                        style={cursorStyle()}
                    />
                }
            >
                <Chip
                    disabled={!canEditCart()}
                    onclick={() => toggleCart(props.key)}
                    icon={<PendingActions />}
                    label={'Added to cart'}
                    color="secondary"
                    style={cursorStyle()}
                />
            </Show>
        </span>
    )
}
