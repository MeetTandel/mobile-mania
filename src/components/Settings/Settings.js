import { useNavigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import { useCart } from "../../contexts/CartContext";
import { useWishlist } from "../../contexts/WishlistContext";
import "./Settings.css";
import { useData } from "../../contexts/DataContext";

export function Settings() {
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
    <div className="settings__container">
      <div className="settings__card__container">
        <button className="log__out__btn" onClick={handleLogout}>
          Log Out
        </button>
      </div>
    </div>
  );
}
