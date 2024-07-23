import { useEffect } from 'react'
import InputField from './InputField/InputField'
import Operations from './Operations/Operations'


const Calculator = ()=> {

  useEffect(()=> {
    console.log("calculator printed")
  },[])

  return (
    <>
      <InputField />
      <Operations />
    </>
  )
}

export default Calculator