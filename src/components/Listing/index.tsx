import { ProductDTO } from '../../models/ProductDTO';
import './styles.css';

type Props = {
    products: ProductDTO[];
}

export default function Listing({ products }: Props) {

    return (
        <div className="card-listing">
            <div className="container-card">
                {products.map((product) => (
                    <div className='card-listing-list' key={product.id}>
                        <p>{product.name}</p>
                        <h4>R$ {product.price.toFixed(2)}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}