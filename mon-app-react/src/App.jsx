import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/Templates_compo/NavBar";
import Footer from "./components/Templates_compo/footer";
import Home from './components/Templates_compo/Home'
import Perso from "./components/Templates_compo/perso";
import Equipage from "./components/Templates_compo/Equipage"
function App() {
  

  return (
    <BrowserRouter>
       <NavBar/>
    
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Perso" Component={Perso}/>
        <Route path="/Equipage" Component={Equipage}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
