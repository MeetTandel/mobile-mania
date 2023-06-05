export const getDocumentTitle = (path) => {  
  if (path === "/") {
    return "Login";
  } else if (path === "/login") {
    return "Login";
  } else if (path === "/signup") {
    return "Sign Up";
  } else if (path === "/user") {
    return "Profile";
  } else if (path === "/products") {
    return "Products";
  } else if (path.includes("/product/")) {
    return "Product";
  } else if (path === "/cart") {
    return "Cart";
  } else if (path === "/wishlist") {
    return "Wishlist";
  } else if (path === "/check-out") {
    return "Checkout";
  } else {
    return "";
  }
};
