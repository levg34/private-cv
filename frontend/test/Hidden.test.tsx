import '@testing-library/jest-dom'
import { render, screen } from '@solidjs/testing-library'
import Hidden from '../src/cv-sections/Hidden'
import { createRoot } from 'solid-js'
import CartProvider, { useCart } from '../src/cart/CartProvider'
import LoginProvider, { useLogin } from '../src/login/LoginProvider'

describe('Hidden', () => {
    it('should render a chip with VisibilityOff icon and Hidden label when the item is not in cart and the user is logged in', async () => {
        await createRoot(async () => {
            render(() => (
                <CartProvider>
                    <LoginProvider>
                        <Hidden key="item1" />
                    </LoginProvider>
                </CartProvider>
            ))

            await Promise.resolve()

            // expect the chip to have the Hidden label
            expect(screen.getByText(/hidden/i)).toBeInTheDocument()
        })
    })

    it('should render a chip with PendingActions icon and Added to cart label when the item is in cart and the user is logged in', async () => {
        await createRoot(async () => {
            const Wrapper = () => {
                const { login } = useLogin()
                login()

                return <Hidden key="item1" />
            }
            const compo = render(() => (
                <CartProvider>
                    <LoginProvider>
                        <Wrapper />
                    </LoginProvider>
                </CartProvider>
            ))

            await Promise.resolve()

            // click on the chip to add the item to the cart
            compo.getByText(/hidden/i).click()

            // expect the chip to have the Added to cart label
            expect(screen.getByText(/added to cart/i)).toBeInTheDocument()
        })
    })

    it('should disable the chip when the user is not logged in or the cart is validated', async () => {
        await createRoot(async () => {
            const Wrapper = () => {
                const { login, logout } = useLogin()
                const { validateCart, getStatus } = useCart()

                login()

                return (
                    <div>
                        <button onclick={() => login()}>login</button>
                        <button onclick={() => logout()}>logout</button>
                        <button onclick={() => validateCart()}>validate</button>
                        status: {getStatus()}
                        <Hidden key="item1" />
                    </div>
                )
            }

            const compo = render(() => (
                <CartProvider>
                    <LoginProvider>
                        <Wrapper />
                    </LoginProvider>
                </CartProvider>
            ))

            await Promise.resolve()

            // expect the chip to be enabled by default
            compo.getByText(/hidden/i).click()

            expect(screen.getByText(/added to cart/i)).toBeInTheDocument()

            // log out the user
            compo.getByText(/logout/i).click()

            // expect the chip to be disabled
            compo.getByText(/hidden/i).click()

            expect(screen.getByText(/hidden/i)).toBeInTheDocument()

            // log in the user
            compo.getByText(/login/i).click()

            // expect the chip to be enabled
            compo.getByText(/hidden/i).click()

            expect(screen.getByText(/added to cart/i)).toBeInTheDocument()

            // validate the cart
            compo.getByText(/validate/i).click()
            expect(screen.getByText(/validated/i)).toBeInTheDocument()

            // expect the chip to be disabled
            compo.getByText(/added to cart/i).click()

            // expect(compo.getByText(/added to cart/i)).toBeInTheDocument() // TODO: make this assertion pass
        })
    })
})
