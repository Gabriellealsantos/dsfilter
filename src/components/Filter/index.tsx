/* eslint-disable @typescript-eslint/ban-types */
import { useState } from 'react';
import './styles.css';

type Props = {
    onFilter: Function
}

type FormData = {
    min?: number,
    max?: number
}

export default function Filter({ onFilter }: Props) {


    const [formData, setFormData] = useState<FormData>({});

    function handleInputChange(event : React.ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({...formData, [name] : value})

    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const min = formData.min || 0;
        const max = formData.max || Number.MAX_VALUE;
        onFilter(min, max);
    }

    return (
        <div className="card">
            <div className="container-card">

                <form onSubmit={handleSubmit}>

                    <div className="ds-search-bar ds-mb20">
                        <input
                            name='min'
                            value={formData.min || ""}
                            type="text"
                            placeholder="Preço mínimo"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="ds-search-bar ds-mb20">
                        <input
                            name='max'
                            value={formData.max || ""}
                            type="text"
                            placeholder="Preço máximo"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div>
                        <button type='submit' className='ds-btn ds-search-btn'>Filtrar</button>
                    </div>


                </form>

            </div>
        </div>
    );
}
