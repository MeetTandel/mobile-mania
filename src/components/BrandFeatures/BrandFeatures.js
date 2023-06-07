import "./BrandFeatures.css";

export function BrandFeatures() {
    return (
        <div className="brand__features__container">
            <div>
                <img
                    src="https://cdn.iconscout.com/icon/premium/png-512-thumb/fast-delivery-468410.png?f=avif&w=256"
                    alt="fast-delivery"
                />
                <p>Fast delivery in 5-7 Days</p>
            </div>

            <div>
                <img
                    src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1667372508_125.jpg"
                    alt="trustworthy-partners"
                />
                <p>Original & Trustworthy products</p>
            </div>

            <div>
                <img
                    src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1667372571_126.jpg"
                    alt="discount"
                />
                <p>Attractive prices and Instant Cashback </p>
            </div>

            <div>
                <img
                    src="https://assets.sangeethamobiles.com/placeholder_banner/placeholderBanner_1667369656_127.jpg"
                    alt="service"
                />
                <p>Services at your doorstep</p>
            </div>
        </div>
    );
}
