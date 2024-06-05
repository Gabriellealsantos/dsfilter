import { useEffect, useState } from "react";
import { ProductDTO } from "../../models/ProductDTO";
import Filter from "../Filter";
import Listing from "../Listing";
import { findByPrice } from "../../services/product-service";


export default function ListingBody() {

    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await findByPrice(0, 5000);
            setProducts(productsData);
        };
        fetchProducts();
    }, []);


    return (
        
        <div className="ds-container">
            <Filter />
            <Listing products={products} />
        </div>

    )
}