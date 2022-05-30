import React from 'react'


export const EquipoCard = (props) => {

    console.log(props.idEquipoRotativo);
    
    return (
        <div className='col'>
            <div className='card'>

                <div className='row no-gutters'>
                    <div className='col-4'>
                        <img className='card-img' alt={props.idEquipoRotativo} />
                    </div>
                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{props.marca}</h5>
                            <p className='card-text'>{props.tipo}</p>


                            <p className='card-text'>
                                <small className='text-muted'>{props.modelo}</small>
                            </p>

                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
};
