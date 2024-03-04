import axios from 'axios'
import { useEffect,useState } from 'react'
import Description from '../Templates_compo/Description'

function DataApiLimit(){
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
            <div className='Equipage'>
                <div>
                    {data.filter((a,value)=>value<10).map(element=>{
                        return( 
                            <button  to key={element.id}>{element.name}</button>);
                            
                    })}
                </div>
                <div className='Description'>
                    <Description/>
                </div>
            
            </div>
        )

    
}

export default DataApiLimit;