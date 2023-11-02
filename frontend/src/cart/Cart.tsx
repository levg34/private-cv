import { Card, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Button } from '@suid/material' // Replace with the actual import statements for your design system
import DeleteIcon from '@suid/icons-material/Delete'
import { useCart } from './CartProvider'
import { For } from 'solid-js'

export default () => {
    const { getStatus, clearCart, getCartItems, removeFromCart, validateCart } = useCart()

    return (
        <Card>
            <h2>Cart</h2>
            <List>
                <For each={getCartItems()}>
                    {(item) => (
                        <ListItem>
                            <ListItemText primary={item} />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={() => removeFromCart(item)}>
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    )}
                </For>
            </List>
            <Button variant="contained" color="secondary" onClick={clearCart}>
                Clear Cart
            </Button>
            <Button variant="contained" color="primary" onClick={validateCart}>
                Validate Cart
            </Button>
            <p>Cart Status: {getStatus()}</p>
        </Card>
    )
}
