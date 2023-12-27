

import "bootstrap/dist/css/bootstrap.min.css"

import {Routes,Route,useLocation } from 'react-router-dom';
import { Home } from "./Home";
import { Login } from "./Login";
import { Navibar} from "../components/Navibar";
import { Bracelets } from "./Bracelets";
import { Earing } from "./Earing";
import { Necklace } from "./Necklace";
import { Watches } from "./Watches";
import { Rings } from "./Rings";
import { Cart } from "./Cart";
import { WebRules } from "./WebRules";
import { Owners} from "./Owners";

function App() {
  const location = useLocation();
  const isOwnersRoute = location.pathname === '/Owners';
  return (
    //we need to route the pagees then to call it we need to use link
    <div className="App" id ="home">
      <div className="Nav">
      {isOwnersRoute ? null : <Navibar />}
      </div>
      
      <div className="routes">
        <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Bracelets" element={<Bracelets />}/>
          <Route path="/Earing" element={<Earing />}/>
          <Route path="/Necklace" element={<Necklace />}/>
          <Route path="/Watches" element={<Watches />}/>
          <Route path="/Rings" element={<Rings />}/>
          <Route path="/Cart" element={<Cart />}/>
          <Route path="/WebRules" element={<WebRules />}/>
          <Route path="/Owners" element={<Owners />}/>
        </Routes>
         
        </div>
   
    </div>
    
  );
}

export default App;
