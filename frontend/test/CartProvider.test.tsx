import { render, screen } from "solid-testing-library"
import { createRoot } from "solid-js"
import CartProvider, { useCart } from "../src//CartProvider"

const CartChild = () => {
    const { clearCart, toggleCart, addToCart, removeFromCart, validateCart, getCartItems } = useCart()

    return (
        <div>
            {/* <p>Status: {cart.status}</p> */}
            <p>Required info: {getCartItems().join(", ")}</p>
            <button onClick={clearCart}>Clear cart</button>
            <button onClick={() => toggleCart("item1")}>Toggle item1</button>
            <button onClick={() => addToCart("item2")}>Add item2</button>
            <button onClick={() => removeFromCart("item2")}>Remove item2</button>
            <button onClick={validateCart}>Validate cart</button>
        </div>
    )
}

describe("CartProvider", () => {
    it('will have tests someday', () => {
        expect(1 + 1).toBe(2)
    })
    //     it("should render the cart status and required info", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         )

    //         // expect the initial status to be empty
    //         expect(screen.getByText("Status: empty")).toBeInTheDocument()

    //         // expect the initial required info to be empty
    //         expect(screen.getByText("Required info:")).toBeInTheDocument()
    //     })

    //     it("should toggle an item in the cart", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         )

    //         // click on the toggle item1 button
    //         screen.getByText("Toggle item1").click()

    //         // expect the status to be dirty
    //         expect(screen.getByText("Status: dirty")).toBeInTheDocument()

    //         // expect the required info to contain item1
    //         expect(screen.getByText("Required info: item1")).toBeInTheDocument()

    //         // click on the toggle item1 button again
    //         screen.getByText("Toggle item1").click()

    //         // expect the status to be dirty
    //         expect(screen.getByText("Status: dirty")).toBeInTheDocument()

    //         // expect the required info to be empty
    //         expect(screen.getByText("Required info:")).toBeInTheDocument()
    //     })

    //     it("should add an item to the cart", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         );

    //         // click on the add item2 button
    //         screen.getByText("Add item2").click();

    //         // expect the status to be dirty
    //         expect(screen.getByText("Status: dirty")).toBeInTheDocument();

    //         // expect the required info to contain item2
    //         expect(screen.getByText("Required info: item2")).toBeInTheDocument();
    //     });

    //     it("should remove an item from the cart", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         );

    //         // add item2 to the cart
    //         screen.getByText("Add item2").click();

    //         // click on the remove item2 button
    //         screen.getByText("Remove item2").click();

    //         // expect the status to be dirty
    //         expect(screen.getByText("Status: dirty")).toBeInTheDocument();

    //         // expect the required info to be empty
    //         expect(screen.getByText("Required info:")).toBeInTheDocument();
    //     });

    //     it("should validate the cart", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         );

    //         // add item1 and item2 to the cart
    //         screen.getByText("Add item1").click();
    //         screen.getByText("Add item2").click();

    //         // click on the validate cart button
    //         screen.getByText("Validate cart").click();

    //         // expect the status to be validated
    //         expect(screen.getByText("Status: validated")).toBeInTheDocument();

    //         // expect the required info to contain item1 and item2
    //         expect(screen.getByText("Required info: item1, item2")).toBeInTheDocument();
    //     });

    //     it("should clear the cart", () => {
    //         render(
    //             <CartProvider>
    //                 <CartChild />
    //             </CartProvider>
    //         );

    //         // add item1 and item2 to the cart
    //         screen.getByText("Add item1").click();
    //         screen.getByText("Add item2").click();

    //         // click on the clear cart button
    //         screen.getByText("Clear cart").click();

    //         // expect the status to be empty
    //         expect(screen.getByText("Status: empty")).toBeInTheDocument();

    //         // expect the required info to be empty
    //         expect(screen.getByText("Required info:")).toBeInTheDocument();
    //     });

})