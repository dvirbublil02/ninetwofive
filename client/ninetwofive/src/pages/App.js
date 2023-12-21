

import "bootstrap/dist/css/bootstrap.min.css"

import {Routes,Route} from 'react-router-dom';
import { Home } from "./Home";
import { Login } from "./Login";
import { Navibar} from "../components/Navibar";
import { Bracelets } from "./Bracelets";
import { Earing } from "./Earing";
import { Necklace } from "./Necklace";
import { New } from "./New";
import { Watches } from "./Watches";
import { Rings } from "./Rings";

function App() {
  return (
    //we need to route the pagees then to call it we need to use link
    <div className="App" id ="home">
      <div className="Nav">
        <Navibar />
      </div>
      
      <div className="routes">
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Bracelets" element={<Bracelets />}/>
          <Route path="/Earing" element={<Earing />}/>
          <Route path="/Necklace" element={<Necklace />}/>
          <Route path="/New" element={<New />}/>
          <Route path="/Watches" element={<Watches />}/>
          <Route path="/Rings" element={<Rings />}/>
        </Routes>
         
        </div>
   
    </div>
    
  );
}

export default App;
