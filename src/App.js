import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
  Cart,
  Wishlist,
  ProductListing,
  IndividualProduct,
  Login,
  Signup,
  UserProfile,
  Error,
  CheckOut,
} from "./pages/index";
import { Loader, Navbar, ProtectedRoute } from "./components/index";
import { useData } from "./contexts/DataContext";
import { useEffect } from "react";
import { getDocumentTitle } from "./Utils/Utils";

function App() {
  const location = useLocation();
  const { isLoading } = useData();

  useEffect(() => {
    document.title = `${getDocumentTitle(location.pathname)} | MobileMania`;
  }, [location.pathname]);

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<IndividualProduct />} />
        <Route path="*" element={<Error />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <ProtectedRoute>
              <Wishlist />
            </ProtectedRoute>
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/check-out"
          element={
            <ProtectedRoute>
              <CheckOut />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/signup" element={<Signup />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>

      {isLoading && <Loader />}

      <ToastContainer autoClose={3000} theme="colored" position="bottom-left" />
    </div>
  );
}

export default App;
