import React from 'react'
import { Routes, Route } from "react-router-dom";
import { EquipoRotativo } from '../components/EquipoRotativo';
import { EquipoRotativoAdd } from '../components/EquipoRotativoAdd';
import { EquipoRotativoEdit } from '../components/EquipoRotativoEdit';
import { FuturasImplementaciones } from '../components/FuturasImplementaciones';
import { NavBar } from '../components/NavBar';
import { SearchScreen } from '../components/SearchScreen';



export const DashboardRoutes = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/equipos-rotativos' element={<EquipoRotativo />} />
                <Route path='/equipos-rotativos/edit' element={<EquipoRotativoEdit />} />
                <Route path='/equipo-rotativo/agregar-equipo' element={<EquipoRotativoAdd />} />
                <Route path='/ordenes-de-trabajo' element={<FuturasImplementaciones  />} />
                <Route path='/lista-empleado' element={<FuturasImplementaciones />} />
                <Route path='/herramientas' element={<FuturasImplementaciones />} />
                <Route path='/repuestos' element={<FuturasImplementaciones />} />
                <Route path='/servicios' element={<FuturasImplementaciones />} />
                <Route path='/search' element={<SearchScreen />} />

                <Route path='/' element={<EquipoRotativo />} />



            </Routes>
        </>
    )
}
