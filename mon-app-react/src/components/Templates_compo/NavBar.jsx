import { NavLink } from "react-router-dom";
function NavBar(){
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                <NavLink to="/Perso">Personnages</NavLink>
                </li>
                <li>
                <NavLink to="/Equipage">Equipage  </NavLink>
                </li>
            
                <li>
                <NavLink to="/ListeFruit">Liste des Fruits </NavLink>
                </li>
            </ul>

        
        </nav>
    )
}

export default NavBar;