import "../Home/Home.css";
import {
    Carousel,
    CategoryCard,
    TrendingBrands,
    BrandFeatures,
    Footer,
    TrendingProductCard,
} from "../../components/index";
import { useData } from "../../contexts/DataContext";
import { useEffect } from "react";

export function Home() {
    const { products, setTitle } = useData();

    // useEffect(() => setTitle("Home"), []);

    return (
        <div className="home__container">
            <section className="banner__container">
                <picture data-processed="true">
                    <source
                        media="(min-width: 1025px)"
                        srcset="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png/mxw_1440,f_auto"
                    />
                    <source
                        media="(min-width: 501px) and (max-width:1024px)"
                        srcset="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Desktop/Main%20Banner/D_main-banner_hat0zq.png/mxw_1440,f_auto"
                    />
                    <source
                        media="(max-width: 500px)"
                        srcset="https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1684242615/Croma%20Assets/CMS/CAtegory/Mobile%20phone%20-%20C10/16-05-23/Mobile/Main%20Banner/M_main-banner_ogxail.png/mxw_1440,f_auto"
                    />
                    <img class="responsive-img" src="" alt="undefined" />
                </picture>
            </section>

            <section className="text__section">
                <div className="content__container text">
                    <h2>Treat yourself to a new Mobile Phone</h2>
                    <p>
                        Experience the world at your fingertips! Work,
                        socialise, book a ride, play games, listen to music,
                        watch your favourite shows, take a photo, or simply make
                        a call! Buy a Mobile Phone from Croma that does it all
                        and then some.
                    </p>
                </div>
            </section>
            {/* <section className="hero__section">
                <div className="content__container">
                    <Carousel />
                </div>
            </section> */}

            {/* <hr></hr> */}
            <section className="categories_section">
                <div className="content__container">
                    <div className="categories__heading__container">
                        {/* <hr></hr> */}
                        <h2>Categories</h2>
                    </div>
                    <CategoryCard />
                </div>
            </section>

            {/* <section className="featured__section">
                <div className="content__container">
                    <h2 className="featured__section__heading">
                        Trending Products
                    </h2>
                    <div className="trending__products__container">
                        {products.map((product) => {
                            if (product.trending) {
                                return (
                                    <TrendingProductCard
                                        product={product}
                                        key={product._id}
                                    />
                                );
                            }
                        })}
                    </div>
                </div>
            </section> */}

            <section className="trending__brands__section">
                {/* <div className="content__container">
                    <div className="trending__brands__heading__container">
                        <h2>Trending Brands</h2>
                        <p>
                            We meticulously select the finest options, ensuring
                            uncompromising quality, product excellence,
                            user-friendly experience, and long-lasting
                            durability.
                        </p>
                    </div>
                </div> */}
                <div className="trending__brands__container">
                    <TrendingBrands />
                </div>
            </section>

            <section className="brand__features__section">
                <div className="content__container">
                    <BrandFeatures />
                </div>
            </section>

            <Footer />
        </div>
    );
}
