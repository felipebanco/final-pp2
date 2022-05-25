import React, { useEffect, useState } from 'react'
import { Row } from './Row'

export const EquipoRotativo = () => {


  const [equipos, setEquipos] = useState([])

  useEffect(() => {

    fetch('/equipo-rotativo')
      .then(rta => {
        return rta.json()
      })
      .then(equipos => {
        setEquipos(equipos)
      })

  }, [])

  return (
    <>
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Num de serie</th>
          <th scope="col">Marca</th>
          <th scope="col">Tipo</th>
          <th scope="col">Modelo</th>
          <th scope="col">Accion</th>
        </tr>
      </thead>
      <tbody>
        {
          equipos.map((equipo, i) => {
            return <Row {...equipo} key={i} />

          })
        }
    </tbody>
    </table >
    <div class="float-start">
      <a href="/equipo-rotativo/agregar-equipo" class="btn btn-dark">Agregar equipo</a>
    </div>
    </>
  )
}
