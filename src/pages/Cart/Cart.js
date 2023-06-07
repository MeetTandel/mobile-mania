import "../Cart/Cart.css";
import { useCart } from "../../contexts/CartContext";
import { CartPriceCard, CartProductCard } from "../../component";
import { empty_cart_illustration } from "../../assets/index";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";
import { NavLink } from "react-router-dom";

export function Cart() {
    const { cart } = useCart();
    // const { setTitle } = useData();

    // useEffect(() => setTitle("Cart"), []);

    return (
        <div className="cart__page__container">
            <h2 className="cart__page__heading">My Cart ({cart.length})</h2>

            <div className="cart__details__container">
                <div className="cart__products__container">
                    {cart.length === 0 && (
                        <>
                            <div className="cart__empty-cart">
                                <EmptyCart />
                            </div>
                            <NavLink to="/products"><p className="continue-shopping">Continue shopping</p></NavLink>
                        </>
                    )}
                    {cart.map((product) => {
                        return (
                            <CartProductCard
                                key={product._id}
                                product={product}
                            />
                        );
                    })}
                </div>
                {cart.length > 0 && (
                    <div>
                        <CartPriceCard cart={cart} />
                    </div>
                )}
            </div>
        </div>
    );
}
