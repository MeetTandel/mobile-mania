import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Icon } from "@iconify/react";
import logo from "../../assets/mm-logo.jpg";
import { useData } from "../../contexts/DataContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";

export function Navbar() {
    const { dataDispatch } = useData();
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/products");
    };

    return (
        <nav className="nav__container">
            <div className="nav__main">
                <div className="item__container">
                    <NavLink to="/" className="nav__link">
                        <div className="logo-container">
                            <img src={logo} alt="logo" />
                            {/* <h2>SnapShop</h2> */}
                            <p className="logo-text">MobileMania</p>
                        </div>
                    </NavLink>
                </div>

                <div className="search__bar__container" onClick={handleClick}>
                    <input
                        onChange={(e) =>
                            dataDispatch({
                                type: "SEARCH_VALUE",
                                payload: e.target.value,
                            })
                        }
                        className="search__bar"
                        placeholder="Which phone are you looking for ?"
                        type="text"
                    />
                    <Icon
                        icon="ic:outline-search"
                        color="#282828"
                        height={24}
                    />
                </div>

                <div className="item__container icons">
                    <NavLink to="/wishlist" className="nav__link">
                        <div className="icon__with__badge">
                            <Icon
                                icon="mdi:cards-heart-outline"
                                color="#fff"
                                height={24}
                            />
                            {wishlist.length > 0 && (
                                <div className="count__badge">
                                    {wishlist.length}
                                </div>
                            )}
                        </div>
                    </NavLink>

                    <NavLink to="/cart" className="nav__link">
                        <div className="icon__with__badge">
                            <Icon
                                icon="material-symbols:shopping-cart-outline-rounded"
                                color="#fff"
                                height={24}
                            />
                            {cart.length > 0 && (
                                <div className="count__badge">
                                    {cart.length}
                                </div>
                            )}
                        </div>
                    </NavLink>

                    <NavLink to="/user" className="nav__link">
                        <div>
                            <Icon
                                icon="gg:profile"
                                color="#fff"
                                height={24}
                                className="user__icon"
                            />
                        </div>
                    </NavLink>
                </div>
            </div>

            <div
                className="search__bar__container_bottom"
                onClick={handleClick}
            >
                <input
                    onChange={(e) =>
                        dataDispatch({
                            type: "SEARCH_VALUE",
                            payload: e.target.value,
                        })
                    }
                    className="search__bar_bottom"
                    placeholder="Which phone are you looking for ?"
                    type="text"
                />
                <Icon icon="ic:outline-search" color="#282828" height={24} />
            </div>
        </nav>
    );
}
