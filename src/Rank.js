import { useState } from "react";
import Fifa from "./Fifa";

function Rank() {
    const[rank,setrank]=useState(2)
    return (<Fifa rk={rank}/>);
}

export default Rank;