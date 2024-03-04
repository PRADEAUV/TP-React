import axios from 'axios'
import { useEffect, useState } from 'react'
import Description from '../Templates_compo/Description'

function Equipage() {
    const [selectedCharacter, setSelectedCharacter] = useState("Qui");
    const [characters, setCharacters] = useState([]);
    const[detail,setDetail]=useState([])
    

    useEffect(() => {
        axios.get(`https://api.api-onepiece.com/v2/characters/fr/`)
            .then(response => {
                setCharacters(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [])

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character.name),
        setDetail([character.age,character.job,character.bounty,])
    }
    

    return (
        <div>
            <div className="container">
                <div>
                    <p>Equipage Mugiwara no ichimi:</p>
                </div>
                <div className='Equipage'>
                    {characters.slice(0, 10).map(character => (
                        <button key={character.id} onClick={() => handleCharacterClick(character)}>
                            {character.name} 
                        </button>
                        
                    ))}
                </div>
                <div className='Description'>
                    <Description imageUrl={selectedCharacter} />
                    
                </div>
                <div className='detail'>
                    <p>{detail[0]}</p>
                    <p>{detail[1]}</p>
                    <p>{detail[2]} Berry</p>
                </div>
            </div>
        </div>
    )
}

export default Equipage;