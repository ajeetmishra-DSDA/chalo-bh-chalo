import { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "./AppProvider"
import Childest from "./Childest";
import { ErrorBoundary } from "react-error-boundary";
import ErrorsB from "./ErrorsB";
export default function  Hooks(){


const user=useContext(AppContext)

    return(
        <>

          <h1>{user}</h1>
          
          <ErrorBoundary FallbackComponent={ErrorsB}>
            <Childest/>
          </ErrorBoundary>
          
        </> 
        
    )
}