
import axios from 'axios'
import { NavLink } from "react-router-dom";
import { useEffect,useState } from 'react'
import ChooseFruit from '../Templates_compo/ChooseFruit'

function DataFruit(){
    //on stocke dans le resultat de la requete APi dans le state
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://api.api-onepiece.com/v2/fruits/fr`)
        .then(response=>{
            setData(response.data)
        })
        .catch(error=>{
            console.log(error);
        })
    },[])
    
    
        if(data==null){
            return(
                <div>Chargement en cours</div>
            )
            
        }
        return(
            <div>
                <p>Choix </p>
                <ChooseFruit/>
                <button><NavLink to="/fruit">Détail du Fruit </NavLink></button>
                <h2>Liste des fruits :</h2>
                {data.map(element=>{
                    return(<li key={element.id}>{element.name}</li>)
                })}
            </div>
        )

    
}

export default DataFruit;