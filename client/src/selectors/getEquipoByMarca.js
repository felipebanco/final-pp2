
import axios  from 'axios'


export const getEquipoByMarca = async (id) => {

    try {
        
        const equipoRotativo = await axios.get(`/equipo-rotativo/${Number(id)}`) 
        console.log(equipoRotativo.data);
               
        return equipoRotativo.data

    } catch (error) {
        return console.log(error);
        
    }
    

    
}
