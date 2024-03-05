import {useSelector} from 'react-redux';
import { useState,useEffect} from 'react'
import axios from 'axios';
import ImgHome from '../ImgStructure/ImgHome';



function Fruit(){
    const fruitName=useSelector((state)=>state.fruit.value);
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
    const selectedFruit = data.find(fruit => fruit.name == fruitName);
    if (selectedFruit) {
        return(
            <>
            <div className="container">
                <ImgHome source="/src/assets/fruit.jpg"/>
                <div>
                    {fruitName}
                </div>
                <div>
                    
                        {selectedFruit && (
                            <div>
                                
                                <p> {selectedFruit.roman_name}</p>
                                <p>type: {selectedFruit.type}</p>
                                <p>Description: {selectedFruit.description}</p>    
                            </div>
                        )}
                </div>
            </div>
            </>
        )
    }
    else{
        return(
            <div>Aucun fruit Connu selectionné pour le moment</div>
        )
        
    }
}

export default Fruit;