import './styles.css';

export default function Header() {
    return (
        <header className="ds-header-client">
            <nav className="ds-container">
                <div className="ds-navbar-right">
                    <h1>DSFilter</h1>
                    <div className="ds-menu-items-container">
                        <div className="ds-menu-item">
                            <p>6 produto(s)</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
