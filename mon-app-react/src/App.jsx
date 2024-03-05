import { BrowserRouter,Routes,Route } from "react-router-dom";
import './App.css'
import NavBar from "./components/Templates_compo/NavBar";
import Footer from "./components/Templates_compo/footer";
import Home from './components/Templates_compo/Home'
import Perso from "./components/Templates_compo/perso";
import Equipage from "./components/Templates_compo/Equipage"
import { Provider } from "react-redux";
import { store } from "./store";

import ListeFruit from "./components/Templates_compo/ListeFruit";
import Fruit from "./components/Templates_compo/Fruit";
function App() {
  

  return (
    <Provider store={store}>
    <BrowserRouter>
       <NavBar/>
    
      <Routes>
        <Route path="/" Component={Home}/>
        <Route path="/Perso" Component={Perso}/>
        <Route path="/Equipage" Component={Equipage}/>
        <Route path="/Fruit" Component={Fruit}/>
        <Route path="/ListeFruit" Component={ListeFruit}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </Provider>
  )
}

export default App
