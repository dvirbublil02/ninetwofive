

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
import { New } from "./New";
import { WebRules } from "./WebRules";
import { Owners} from "./Owners";
import { Edit } from "./Edit";
import { Add } from "./Add";
import { Remove } from "./Remove";
import { OwnerNav } from "../components/OwnerNav";

function App() {
  const location = useLocation();
  const isOwnersRoute = location.pathname === '/Owners';
  const isRemoveRoute = location.pathname === '/Remove';
  const isEditRoute = location.pathname === '/Edit';
  const isAddRoute = location.pathname === '/Add';
  return (
    //we need to route the pagees then to call it we need to use link
    <div className="App" id ="home">
      <div className="Nav">
      {isOwnersRoute ? <OwnerNav /> : isRemoveRoute ? 
      <OwnerNav /> : isEditRoute ? <OwnerNav /> : 
      isAddRoute ? <OwnerNav /> : <Navibar />} </div>
      
      <div className="routes">
        <Routes>
        {/**this is the public routes */}
        <Route path="/" element={<Home />}/>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Login" element={<Login />}/>
          <Route path="/Bracelets" element={<Bracelets />}/>
          <Route path="/Earing" element={<Earing />}/>
          <Route path="/Necklace" element={<Necklace />}/>
          <Route path="/Watches" element={<Watches />}/>
          <Route path="/Rings" element={<Rings />}/>
          <Route path="/New" element={<New />}/>
          <Route path="/WebRules" element={<WebRules />}/>
          {/**this is the protected routes */}
          <Route path="/Owners" element={<Owners />}/>
          <Route path="/Edit" element={<Edit />}/>
          <Route path="/Remove" element={<Remove />}/>
          <Route path="/Add" element={<Add />}/>
        </Routes>
         
        </div>
   
    </div>
    
  );
}

export default App;
