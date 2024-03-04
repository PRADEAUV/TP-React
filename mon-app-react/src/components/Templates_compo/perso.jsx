import DataApi from "../Data_compo/DataApi";

function Perso(){
    return(
        <div>
            
            <div className="container">
                <div>
                    <p>Personnages :</p>
                    Cette page contient une liste des personnages du manga One Piece :
                    
                </div>
               <DataApi/>
            </div>
            
            
        </div>
    )
}

export default Perso;