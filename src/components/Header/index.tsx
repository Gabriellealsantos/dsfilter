import { useContext } from 'react';
import './styles.css';
import { ContextCountProduct } from '../../utils/context-count-product';

export default function Header() {

    const {contextCountProduct} = useContext(ContextCountProduct);

    return (
        <header className="ds-header-client">
            <nav className="ds-container">
                <div className="ds-navbar-right">
                    <h1>DSFilter</h1>
                    <div className="ds-menu-items-container">
                        <div className="ds-menu-item">
                            <p>{contextCountProduct} produto(s)</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
