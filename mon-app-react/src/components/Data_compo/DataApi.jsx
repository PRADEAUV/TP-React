import axios from 'axios'
import { useEffect,useState } from 'react'

function DataApi(){
    //on stocke dans le resultat de la requete APi dans le state
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://api.api-onepiece.com/v2/characters/fr/`)
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
                {data.map(element=>{
                    return(<li key={element.id}>{element.name}</li>)
                })}
            </div>
        )

    
}

export default DataApi;