function ImgHome(props){
    const {source}=props
    return(
        <div className="ImageHome">
            <img src={source} alt="image Présentation" />
        </div>
        
    )
}
export default ImgHome;