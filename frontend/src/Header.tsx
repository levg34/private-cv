import { AppBar, Typography, Toolbar, IconButton, Menu, MenuItem } from '@suid/material'
import AccountCircle from '@suid/icons-material/AccountCircle'
import ShoppingCart from '@suid/icons-material/ShoppingCart'
import { Show, createSignal } from 'solid-js'
import { useCart } from './CartProvider'

export default () => {
    const [loggedIn, setLoggedIn] = createSignal<boolean>(true)
    const [showMenu, setShowMenu] = createSignal<boolean>(false)
    let anchorEl: any
    const handleClose = () => {
        setShowMenu(false)
    }
    const handleMenu = () => {
        setShowMenu(true)
    }

    const { getCartItems, clearCart } = useCart()

    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Private CV
                    </Typography>
                    <Show when={loggedIn()}>
                        <Show when={getCartItems().length > 0}>
                            <IconButton size="large" onClick={clearCart} color="inherit">
                                <ShoppingCart />
                            </IconButton>
                        </Show>
                        <div>
                            <IconButton size="large" onClick={handleMenu} color="inherit">
                                <AccountCircle ref={anchorEl} />
                            </IconButton>
                            <Show when={showMenu()}>
                                <Menu
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem
                                        onClick={() => {
                                            setLoggedIn(false)
                                            handleClose()
                                        }}
                                    >
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Show>
                        </div>
                    </Show>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </header>
    )
}
