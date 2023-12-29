import '@testing-library/jest-dom'
import { render, screen } from '@solidjs/testing-library'
import Hidden from '../src/cv-sections/Hidden' // assuming this is the file name of your component
import { createRoot } from 'solid-js'
import CartProvider from '../src/cart/CartProvider'
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

    it.skip('should disable the chip when the user is not logged in or the cart is validated', async () => {
        await createRoot(async () => {
            const compo = render(() => (
                <CartProvider>
                    <LoginProvider>
                        <Hidden key="item1" />
                    </LoginProvider>
                </CartProvider>
            ))

            await Promise.resolve()

            // expect the chip to be enabled by default
            expect(compo.getByRole('button')).not.toBeDisabled()

            // log out the user
            compo.getByText(/log out/i).click()

            // expect the chip to be disabled
            expect(compo.getByRole('button')).toBeDisabled()

            // log in the user
            compo.getByText(/log in/i).click()

            // expect the chip to be enabled
            expect(compo.getByRole('button')).not.toBeDisabled()

            // validate the cart
            compo.getByText(/validate cart/i).click()

            // expect the chip to be disabled
            expect(compo.getByRole('button')).toBeDisabled()
        })
    })
})
