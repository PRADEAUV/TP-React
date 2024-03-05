import { useSelector, useDispatch } from "react-redux";
import { setFruit } from "../features/fruit/fruitSlice";


function ChooseFruit(){
    const fruitName=useSelector((state)=>state.fruit.value);
    const dispatch=useDispatch();
    return(
        <>
        <label >Fruit: </label>
        <input type="text" value={fruitName} onChange={(event) => dispatch(setFruit(event.target.value)) } />
        
    </>

    )
}
export default ChooseFruit;