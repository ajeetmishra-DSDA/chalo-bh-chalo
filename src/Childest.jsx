import React, { useContext } from "react";
import { AppContext } from "./AppProvider";

export default  function  Childest()
{
    console.log("oodcj")
    const u=useContext(AppContext)
    return(
    
      <h1> this is you {u}</h1>
          
    );
}

React.memo(Childest)
