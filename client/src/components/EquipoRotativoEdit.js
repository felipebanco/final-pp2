import React, { useEffect, useState } from 'react'

export const EquipoRotativoEdit = () => {

    const [equipos, setEquipos] = useState([])

    useEffect(() => {
  
      fetch('/equipo-rotativo/edit')
        .then(rta => {
          return rta.json()
        })
        .then(equipos => {
            console.log(equipos);
            
          setEquipos(equipos)
        })
  
    }, [])


    return (
        <>
            <div class="container">
                <div class="text-center">
                    <h2>EQUIPO</h2>
                </div>
                <br />
                <form  >
                    <div class="row">
                        <div class="col-12">
                            <label for="marca" class="form-label">MARCA</label>
                            <input
                                type='text'
                                name='marca'
                                className='form-control'
                                autoComplete='off'
                                // value={marca}
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-6">
                            <label for="tipo" class="form-label">TIPO</label>
                            <input
                                type='text'
                                name='tipo'
                                className='form-control'
                                autoComplete='off'
                                // value={marca}
                                // onChange={handleInputChange}
                            />

                        </div>
                        <div class="col-6">
                            <label for="modelo" class="form-label">MODELO</label>
                            <input
                                type='text'
                                name='modelo'
                                className='form-control'
                                autoComplete='off'
                                // value={marca}
                                // onChange={handleInputChange}
                            />
                        </div>
                    </div>
                    <br />

                    <div class="row">
                        <div class="col-6">
                            <div class="float-start">
                                <button type="submit" class="btn btn-dark">Actualizar Producto</button>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="float-end">
                                <a href="/equipo-rotativo" class="btn btn-dark">Volver</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
