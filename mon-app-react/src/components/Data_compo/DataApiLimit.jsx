import axios from "axios";
import { useEffect,useState } from "react";
import Description from "../Templates_compo/Description";

function DataApiLimit(){
    //on stocke le résultat de la requete API dans le state
    const [data,SetData]=useState([]);
//on utlise axiso pour faire la requêt à l API
useEffect(()=>{
    axios.get(`https://api.api-onepiece.com/v2/characters/fr/`)
        .then(response=>{
            SetData(response.data);
        })
        .catch(error=>{
            console.log(error)
        });
},[])

    if (data==null){
        return(
            <div>Chargement en cours</div>
        )
    }
    return(
        <div className='Equipage'>
            <div>
                {/* utilise filter pour avoir seulement les 10premier objets, et on map pour créer les buttons */}
                {data.filter((a,value)=>value<10).map(element=>{
                    return(
                        <button to key={element.id}>{element.name}</button>
                    )
                })}
            </div>
            <div className="Description">
                <Description/>
            </div>
        </div>
    )



}

export default DataApiLimit;
