import React , { useEffect }from 'react'
import { useForm } from './useForm'

export const EquipoRotativoAdd = () => {


    const [formValues, handleInputChange] = useForm({
        marca: '',
        tipo:'',
        modelo:''
    })

    const {marca,tipo,modelo} = formValues



    const handleSubmit = (e) => {

        e.preventDefault()
  

        fetch('/equipo-rotativo',{
            method: 'POST',
            body: formValues
        })
        .then(rta => {
          console.log(rta);
          
        })

        

        
    }


    return (
        <>
            <div class="container">
                <div class="text-center">
                    <h2>EQUIPO ROTATIVO</h2>
                </div>
                <br />
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div class="col-12">
                            <label for="marca" class="form-label">MARCA</label>
                            <input
                                type='text'
                                name='marca'
                                className='form-control'
                                placeholder='marca'
                                autoComplete='off'
                                value={ marca }
                                onChange={ handleInputChange }

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
                                placeholder='tipo'
                                autoComplete='off'
                                value={ tipo }
                                onChange={ handleInputChange }



                            />
                        </div>
                        <div class="col-6">
                            <label for="modelo" class="form-label">MODELO</label>
                            <input
                                type='text'
                                name='modelo'
                                className='form-control'
                                placeholder='modelo'
                                autoComplete='off'
                                value={ modelo }
                                onChange={ handleInputChange }



                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <div class="row">
                        <div class="col-6">
                            <div class="float-start">
                                <button type="submit" class="btn btn-dark">Agregar producto</button>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="float-end">
                                <a href="/equipos-rotativos" class="btn btn-dark">Volver</a>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}
