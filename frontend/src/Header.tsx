import { AppBar, Typography, Toolbar, IconButton, Menu, MenuItem, Popover } from '@suid/material'
import AccountCircle from '@suid/icons-material/AccountCircle'
import ShoppingCart from '@suid/icons-material/ShoppingCart'
import { Show, createSignal } from 'solid-js'
import { useCart } from './cart/CartProvider'
import Cart from './cart/Cart'

export default () => {
    const [loggedIn, setLoggedIn] = createSignal<boolean>(true)
    const [showMenu, setShowMenu] = createSignal<boolean>(false)
    const [showCart, setShowCart] = createSignal<boolean>(false)

    let profileEl
    let cartEl

    const handleClose = () => {
        setShowMenu(false)
    }
    const handleMenu = () => {
        setShowMenu(true)
    }

    const toggleCart = () => setShowCart((sc) => !sc)

    const { getStatus } = useCart()

    return (
        <header>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Private CV
                    </Typography>
                    <Show when={loggedIn()}>
                        <Show when={getStatus() !== 'empty'}>
                            <IconButton size="large" onClick={toggleCart} color="inherit">
                                <ShoppingCart ref={cartEl} />
                            </IconButton>
                            <Popover
                                open={showCart()}
                                onClose={() => setShowCart(false)}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right'
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                anchorEl={cartEl}
                            >
                                <Cart />
                            </Popover>
                        </Show>
                        <div>
                            <IconButton size="large" onClick={handleMenu} color="inherit">
                                <AccountCircle ref={profileEl} />
                            </IconButton>
                            <Show when={showMenu()}>
                                <Menu
                                    anchorEl={profileEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right'
                                    }}
                                    open={Boolean(profileEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <Show when={getStatus() === 'validated'}>
                                        <MenuItem
                                            onClick={() => {
                                                handleClose()
                                                setShowCart(true)
                                            }}
                                        >
                                            My requests
                                        </MenuItem>
                                    </Show>
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
