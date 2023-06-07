import "./OrderChange.css";
import { OrderUpdateModal } from "..";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
import { NavLink } from "react-router-dom";

export function OrderChange() {
    const { cart } = useCart();
    const [orderUpdateModal, setOrderUpdateModal] = useState(false);

    return (
        <div className="order__change__container">
            <div className="order__change__details">
                <h3>Order Summary</h3>
                <p>{`${cart.length} Item`}</p>
            </div>

            <NavLink to="/cart">
                <button
                    className="order__change__btn"
                >
                    Update
                </button>
            </NavLink>

            {/* {orderUpdateModal && (
        <OrderUpdateModal setOrderUpdateModal={setOrderUpdateModal} />
      )} */}
        </div>
    );
}
