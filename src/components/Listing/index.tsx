import { useEffect, useContext } from 'react';
import { ProductDTO } from '../../models/ProductDTO';
import './styles.css';
import { ContextCountProduct } from '../../utils/context-count-product';

type Props = {
    products: ProductDTO[];
}

export default function Listing({ products }: Props) {
    const { setContextCountProduct } = useContext(ContextCountProduct);

    useEffect(() => {
        // Atualiza o valor do contexto com o número de itens da lista de produtos
        setContextCountProduct(products.length);
    }, [products, setContextCountProduct]);

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
