import "./Operations.css"
import PreviousResults from "../PreviousResults/PreviousResults"
import "./Operations.css"
import  { useEffect } from 'react'
import Sum from "./Sum/Sum";
import Rest from "./Rest/Rest";
import Multiplication from "./Multiplication/Multiplication";
import Division from "./Division/Division";

const Operations = () => {

  useEffect(()=>{
    console.log("Operations printed")
  },[])

  return (
    <>
      <h2>Available Operations</h2>
      <div className="operations-available" id="operations">
        <Sum />
        <Rest />
        <Multiplication />
        <Division />
      </div>
      <PreviousResults />
    </>
  );
}

export default Operations