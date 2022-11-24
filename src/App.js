import Fifa from "./Fifa";
import {useState} from "react";
import { Route,Routes } from "react-router-dom";
import Privacy from "./privacy";
import Terms from "./terms";
function App() {
  const[rank1,setran1]=useState(1);
  const[rank2,setran2]=useState(2);
  const[rank3,setran3]=useState(3);
  const[r1name,setname1]=useState("Brazil");
  const[r2name,setname2]=useState("Belguim");
  const[r3name,setname3]=useState("Brazil");
  const[points1,setp1]=useState(1023);
  const[points2,setp2]=useState(1123);
  const[points3,setp3]=useState(1223);
  return(
    <div >

      <Routes>
      <Route path="/" element={<Fifa r1={rank1} r2={rank2} r3={rank3} r1n={r1name} r2n={r2name} r3n={r3name} p1={points1} p2={points2} p3={points3}/>}/>

      <Route path="/privacy" element={<Privacy/>}/>
      <Route path="/terms" element={<Terms/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
