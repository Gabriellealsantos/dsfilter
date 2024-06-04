import './styles.css';

export default function Filter() {
    return (
        <div className="card">
            <div className="container-card">

                <form>

                    <div className="ds-search-bar ds-mb20">
                        <input
                            type="text"
                            placeholder="Preço mínimo"
                        />
                    </div>

                    <div className="ds-search-bar ds-mb20">
                        <input
                            type="text"
                            placeholder="Preço máximo"
                        />
                    </div>

                    <div>
                        <button className='ds-btn ds-search-btn'>Filtrar</button>
                    </div>


                </form>

            </div>
        </div>
    );
}
