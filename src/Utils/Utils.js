export const changeDocumentTitle = (path) => {  
  let pathname;

  if (path === "/") {
    pathname = "Home";
  } else if (path === "/login") {
    pathname = "Login";
  } else if (path === "/signup") {
    pathname = "Sign Up";
  } else if (path === "/user") {
    pathname = "Profile";
  } else if (path === "/products") {
    pathname = "Products";
  } else if (path.includes("/product/")) {
    pathname = "Product";
  } else if (path === "/cart") {
    pathname = "Cart";
  } else if (path === "/wishlist") {
    pathname = "Wishlist";
  } else if (path === "/check-out") {
    pathname = "Checkout";
  } else {
    pathname = "";
  }
  
  document.title = `${pathname} | MobileMania`;
};
