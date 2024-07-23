import React, { useEffect } from 'react'

const Calculator = ()=> {

  useEffect(()=> {
    console.log("calculator printed")
  },[])

  return (
    <div>Calculator</div>
  )
}

export default Calculator