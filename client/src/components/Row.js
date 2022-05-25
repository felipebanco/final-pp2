import React from 'react'

export const Row = (props) => {


    return (
        <>
            <tr>

                <td>{props.idEquipoRotativo}</td>
                <td>{props.marca}</td>
                <td>{props.tipo}</td>
                <td>{props.modelo}</td>
                <td>
                    <div class="row">
                        <div class="row">
                            <form action={`/equipos-rotativos/edit/id=${props.idEquipoRotativo}s`}>
                                <button type="submit" class="btn btn-warning"> Editar</button>
                            </form>
                            
                        </div>
                        <div class="row"></div>
                        <div class="row">
                            <form action="/equipos-rotativos/edit" method="POST"
                                onclick="return confirm('estas seguro??')">
                                <button type="submit" class="btn btn-danger"> Borrar</button>

                            </form>
                        </div>
                    </div>
                </td>
            </tr>
        </>
    )
}
