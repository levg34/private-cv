import {
    Card,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton,
    Button,
    Alert,
    AlertTitle
} from '@suid/material'
import DeleteIcon from '@suid/icons-material/Delete'
import WarningAmberIcon from '@suid/icons-material/WarningAmber'
import { useCart } from './CartProvider'
import { For, Show } from 'solid-js'
import { useRequest } from '../request/RequestProvider'

export default () => {
    const { getStatus, clearCart, getCartItems, removeFromCart, validateCart, editCart } = useCart()

    const { sendRequest: sendCart, getStatus: getRequestStatus } = useRequest()

    const lockCart = () => getStatus() !== 'validated'

    // const [requestSent] = createResource(async () => {
    //     return (await getRequestStatus()) === 'sent'
    // })

    const requestSent = () => getRequestStatus() === 'sent'

    return (
        <Card>
            <h2>Cart</h2>
            <Show when={requestSent() && !lockCart()} fallback={<p>Cart Status: {getStatus()}</p>}>
                <Alert severity="info">
                    <AlertTitle>Request sent!</AlertTitle>
                    Please wait for your request to be examined and validated.
                </Alert>
            </Show>
            <List>
                <For each={getCartItems()}>
                    {(item) => (
                        <ListItem>
                            <ListItemText primary={item} />
                            <Show when={lockCart()}>
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </Show>
                        </ListItem>
                    )}
                </For>
            </List>
            <Show
                when={lockCart()}
                fallback={
                    <>
                        <Button variant="contained" color="secondary" onClick={editCart} disabled={requestSent()}>
                            Edit Cart
                        </Button>
                        <Button
                            variant="contained"
                            color="warning"
                            onClick={() => sendCart(getCartItems())}
                            disabled={requestSent()}
                        >
                            <WarningAmberIcon /> Send Cart
                        </Button>
                    </>
                }
            >
                <Button variant="contained" color="secondary" onClick={clearCart}>
                    Clear Cart
                </Button>
                <Button variant="contained" color="primary" onClick={validateCart}>
                    Validate Cart
                </Button>
            </Show>
        </Card>
    )
}
