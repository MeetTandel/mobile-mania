import "../Wishlist/Wishlist.css";
import { ProductCard } from "../../component";
import { useWishlist } from "../../contexts/WishlistContext";
import { empty_cart_illustration } from "../../assets";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export function Wishlist() {
    const { wishlist } = useWishlist();
    // const { setTitle } = useData();

    // useEffect(() => setTitle("Wishlist"), []);

    return (
        <div className="wishlist__page__container">
            <h2 className="wishlist__page__heading">My Wishlist</h2>

            <div className="wishlist__products__container">
                {wishlist.length === 0 && (
                    <div className="empty-wishlist">
                        <img
                            src={
                                "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:No_image.png/Croma%20Assets/UI%20Assets/sshz69afrixwivcsgnpx.svg/mxw_1920,f_auto"
                            }
                            alt="Empty Cart"
                            className="empty__wishlist__img"
                        ></img>
                        <div className="empty-wishlist-text">
                            <h3>Oops! Your wishlist looks empty</h3>
                            <p className="content">
                                Create your own wishlist with your favourites &
                                share with your friends and loved ones!
                            </p>
                            <NavLink to="/products">
                                <p className="continue-shopping">
                                    Continue shopping
                                </p>
                            </NavLink>
                        </div>
                    </div>
                )}
                {wishlist.map((product) => {
                    return (
                        <ProductCard
                            product={product}
                            move={true}
                            add={false}
                            key={product._id}
                        />
                    );
                })}
            </div>
        </div>
    );
}
