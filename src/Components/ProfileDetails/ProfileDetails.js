import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useData } from "../../contexts/DataContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./ProfileDetails.css";

export function ProfileDetails({ user }) {
    const { setLoggedIn, authDispatch } = useAuth();
    const { cartDispatch } = useCart();
    const { wishlistDispatch } = useWishlist();
    const { setIsLoading } = useData();
    const navigate = useNavigate();

    const handleLogout = () => {
        setLoggedIn(false);
        cartDispatch({ type: "CLEAR_CART", payload: [] });
        wishlistDispatch({ type: "CLEAR_WISHLIST", payload: [] });
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        authDispatch({
            type: "LOG_OUT",
        });
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
        navigate("/");
    };
    return (
        <div className="profile__details__container">
            <div className="user-details">
                <p>
                    <b>Username:</b> {user.firstName}
                </p>
                <p>
                    <b>Email:</b> {user.email}
                </p>
            </div>

            <div className="log-out">
                <button className="log__out__btn" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
}
