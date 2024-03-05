import DataFruit from "../Data_compo/DataFruit";

function ListeFruit(){
    return(
        <div>
            
            <div className="container">
                <div>
                    <p>Liste des fruits:</p>
                </div>
               <DataFruit/>
            </div>
            
            
        </div>
    )
}

export default ListeFruit;