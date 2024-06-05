import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/ProductDTO";
import Filter from "../Filter";
import Listing from "../Listing";
import { findByPrice } from "../../services/product-service";

type QuaryParams = {
    min: number;
    max: number;
}

export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    const [quaryParams, setQuaryParams] = useState<QuaryParams>({
        min: 0,
        max: Number.MAX_VALUE
    });

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await findByPrice(quaryParams.min, quaryParams.max);
            setProducts(productsData);
        };
        fetchProducts();
    }, [quaryParams]);

    function handleFilter(min: number, max: number) {
        setProducts([]);
        setQuaryParams({ ...quaryParams, min: min, max: max })
    }


    return (

        <div className="ds-container">
            <Filter onFilter={handleFilter} />
            <Listing products={products} />
        </div>

    )
}