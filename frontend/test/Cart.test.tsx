import '@testing-library/jest-dom'
import { render, screen } from '@solidjs/testing-library'
import CartProvider from '../src/cart/CartProvider'
import { createRoot } from 'solid-js'
// import LoginProvider, { useLogin } from '../src/login/LoginProvider'
import Cart from '../src/cart/Cart'

describe('Cart', () => {
    it('should render the cart status and required info', async () => {
        await createRoot(async () => {
            const Wrapper = () => {
                // const { login } = useLogin()
                // login()

                return <Cart />
            }
            const compo = render(() => (
                <CartProvider>
                    {/* <LoginProvider> */}
                    <Wrapper />
                    {/* </LoginProvider> */}
                </CartProvider>
            ))

            await Promise.resolve()

            vi.mock('../src/cart/CartProvider')

            // expect the initial status to be empty
            expect(screen.getByText('Status: empty')).toBeInTheDocument()

            // expect the initial required info to be empty
            // expect(compo.getByText('Required info:')).toBeInTheDocument()
        })
    })
})
