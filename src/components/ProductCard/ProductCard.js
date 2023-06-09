import { Icon } from "@iconify/react";
import "./ProductCard.css";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import { useEffect, useState } from "react";
import { BtnLoader } from "../BtnLoader/BtnLoader";
import { useAuth } from "../../contexts/AuthContext";

export function ProductCard({ product, add, move }) {
    const {
        _id,
        productName,
        productImage,
        price,
        discountedPrice,
        discountPercent,
        onSale,
        rating,
    } = product;
    const { cart, handleAddToCart, isCartLoading, setIsCartLoading } =
        useCart();
    const [isBtnLoading, setIsBtnLoading] = useState(false);
    const {
        wishlist,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        isWishlistLoading,
        setIsWishlistLoading,
    } = useWishlist();
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    const presentInCart = cart.find((product) => product._id === _id);

    const presentInWishlist = wishlist.find((product) => product._id === _id);

    useEffect(() => {
        if (!isCartLoading) {
            setIsBtnLoading(false);
        }
    }, [isCartLoading, isWishlistLoading]);

    const handleClick = (e) => {
        const clickedOn = e.target.tagName;

        if (clickedOn === "IMG" || clickedOn === "P") {
            navigate(`/product/${_id}`);
        }
    };

    const handleCartClick = () => {
        if (!loggedIn) {
            setIsBtnLoading(false);
        } else {
            setIsBtnLoading(true);
            setIsCartLoading(true);
        }

        if (add) {
            if (!presentInCart) {
                handleAddToCart("ADD_TO_CART", product);
            } else {
                navigate("/cart");
            }
        } else {
            if (!presentInCart) {
                handleRemoveFromWishlist("REMOVE_FROM_WISHLIST", product);
                handleAddToCart("ADD_TO_CART", product);
            } else {
                navigate("/cart");
            }
        }
    };

    const handleWishlistClick = () => {
        if (loggedIn) {
            setIsWishlistLoading(true);
        }

        if (!presentInWishlist) {
            handleAddToWishlist("ADD_TO_WISHLIST", product);
        } else {
            handleRemoveFromWishlist("REMOVE_FROM_WISHLIST", product);
        }
    };

    return (
        <div className="product__card__container">
            <div className="image__container" onClick={(e) => handleClick(e)}>
                <img src={productImage} alt={productName} />
                {/* {onSale && (
          <div className="discount__badge">{discountPercent}% Off</div>
        )} */}
                {/* <div
                    className="wishlist__icon"
                    onClick={() => !isWishlistLoading && handleWishlistClick()}
                >
                    {presentInWishlist ? (
                        <Icon icon="mdi:cards-heart" color="red" height={24} />
                    ) : (
                        <Icon
                            icon="mdi:cards-heart-outline"
                            color="#393939"
                            height={24}
                        />
                    )}
                </div> */}
            </div>

            <div className="details__container">
                <div>
                    <div className="details__heading">
                        <p
                            className="product__name__container"
                            onClick={(e) => handleClick(e)}
                        >
                            {productName}
                        </p>
                        <div
                            className="wishlist__icon"
                            onClick={() =>
                                !isWishlistLoading && handleWishlistClick()
                            }
                        >
                            {presentInWishlist ? (
                                <Icon
                                    icon="mdi:cards-heart"
                                    color="red"
                                    height={24}
                                />
                            ) : (
                                <Icon
                                    icon="mdi:cards-heart-outline"
                                    color="#fff"
                                    height={24}
                                />
                            )}
                        </div>
                    </div>
                    <div className="rating__container">
                        <p>{rating}</p>
                        <Icon
                            icon="material-symbols:star-rounded"
                            color="#FFC700"
                            height={20}
                        />
                    </div>
                </div>

                <div>
                    <h3>₹ {discountedPrice}/-</h3>

                    {onSale && (
                        <div className="sale-details">
                            <p className="original__price">₹ {price}</p>
                            <p className="save__price">
                                (Save: ₹ {price - discountedPrice})
                            </p>
                        </div>
                    )}

                    {add && (
                        <button
                            className="add__to__cart__btn"
                            onClick={() => handleCartClick()}
                            disabled={isBtnLoading}
                        >
                            {isBtnLoading ? (
                                <BtnLoader
                                    loading={isBtnLoading}
                                    color={"#5348c7"}
                                />
                            ) : presentInCart ? (
                                "Go to Cart"
                            ) : (
                                "Add to Cart"
                            )}
                        </button>
                    )}

                    {move && (
                        <button
                            className="add__to__cart__btn"
                            onClick={() => handleCartClick()}
                            disabled={isBtnLoading}
                        >
                            {isBtnLoading ? (
                                <BtnLoader
                                    loading={isBtnLoading}
                                    color={"#5348c7"}
                                />
                            ) : presentInCart ? (
                                "Go to Cart"
                            ) : (
                                "Move to Cart"
                            )}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
