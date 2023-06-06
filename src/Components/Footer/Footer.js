import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/footer-logo.jpg";
import { useData } from "../../contexts/DataContext";

export function Footer() {
    const { categories, dataDispatch } = useData();

    const handleClick = (categoryName) => {
        document.documentElement.scrollTop = 0;
        dataDispatch({ type: "SET_SINGLE_CATEGORY", payload: categoryName });
    };

    return (
        <footer className="footer__container">
            <div className="container brand__contianer">
                <div className="footer-logo-container">
                    <img src={logo} alt="logo" />
                    <p className="footer-logo-text">MobileMania</p>
                </div>
                <p>One stop shop for all your mobile phone needs!</p>
            </div>

            <div className="container categories__contianer">
                <h3>Categories</h3>

                <div className="categories">
                    {categories.map(({ _id, categoryName }) => {
                        return (
                            <Link
                                key={_id}
                                to="/products"
                                onClick={() => handleClick(categoryName)}
                            >
                                {`${
                                    categoryName[0].toUpperCase() +
                                    categoryName.slice(1)
                                }`}
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="container socials__contianer">
                <h3>Follow Us</h3>
                <a href="https://www.instagram.com/aman.harsh/" target="/">
                    Instagram
                </a>
                <a href="https://twitter.com/amanharsh0203" target="/">
                    Twitter
                </a>
                <a href="https://www.linkedin.com/in/aman-harsh/" target="/">
                    LinkedIn
                </a>
            </div>

            <div className="container contact__contianer">
                <h3>Contact</h3>
                <a href="/">Email</a>
                <a href="/">WhatsApp</a>
            </div>

            <div className="container copyright__contianer">
                <div>
                    <h3>© MobileMania 2023</h3>
                    <p>
                        Built with love by{" "}
                        <a
                            href="https://www.linkedin.com/in/meet-tandel-488702135"
                            target="/"
                        >
                            Meet Tandel
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
