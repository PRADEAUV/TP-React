function Description({ imageUrl }) {
    return (
        <div className="container">
            <div>
               
                    
                <img className="DetailPerso"src={`/src/assets/${imageUrl}.jpg`}  alt={imageUrl} />
                
            </div>
            
        </div>
    )
}

export default Description;