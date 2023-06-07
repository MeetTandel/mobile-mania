import "../ProductListing/ProductListing.css";
import { Filters, FiltersModal, ProductCard } from "../../component";
import { useData } from "../../contexts/DataContext";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { useEffect } from "react";

export function ProductListing() {
    const { filteredProducts, searchValue } = useData();
    const [showModal, setShowModal] = useState(false);

    // useEffect(() => setTitle("Products"), []);

    return (
        <div className="products__listing__container">
            <aside className="aside">
                <Filters />
            </aside>
            <div className="main">
                <div className="product__listing__heading__contianer">
                    <h3>
                        {searchValue === ""
                            ? `Showing All Products (${filteredProducts.length})`
                            : `Results for "${searchValue}" (${filteredProducts.length})`}
                    </h3>
                    <div
                        className="filter__icon__container"
                        onClick={() => setShowModal(true)}
                    >
                        {!showModal && (
                            <Icon
                                icon="clarity:filter-line"
                                color="#fff"
                                height={24}
                            />
                        )}
                    </div>
                </div>

                <div className="products__container">
                    {filteredProducts.map((product) => {
                        return (
                            <ProductCard
                                product={product}
                                add={true}
                                move={false}
                                key={product._id}
                            />
                        );
                    })}
                </div>

                {showModal && <FiltersModal setShowModal={setShowModal} />}
            </div>
        </div>
    );
}
