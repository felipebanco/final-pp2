
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string'

import { useForm } from './useForm';
import { getEquipoByMarca } from '../selectors/getEquipoByMarca';
import { EquipoCard } from './EquipoCard';



export const SearchScreen =  () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q  } = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText } = formValues;
    
   const equiposFileted = async ()=>(await getEquipoByMarca(q)) 
   console.log('---',equiposFileted);
   


    const handleSearch = (e) => {
        e.preventDefault()

        navigate(`?q=${searchText}`)


    }

    return (
        <>
            <h1>Busquedas</h1>
            <hr />

            <div className='row'>
                <div className='col-5'>
                    <h4>Buscar</h4>
                    <hr />

                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            placeholder='Buscar un heroe'
                            className='form-control'
                            name='searchText'
                            value={searchText}
                            onChange={handleInputChange}
                            autoComplete='off'
                        />

                        <button
                            className='btn btn-outline-primary mt-1'
                            type='submit'

                        >
                            Buscar...
                        </button>
                    </form>

                </div>

                <div className='col-7'>
                    <h4>Resultados</h4>
                    <hr />

{/* 

                    {
                        <EquipoCard {...equiposFileted}/>
                       
                       
                    } */}

                </div>
            </div>


        </>
    )
};
