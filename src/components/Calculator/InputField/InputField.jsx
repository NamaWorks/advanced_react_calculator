import "./InputField.css"
import React from 'react'

const InputField = () => {
  return (
    <>
      <input type="number"  placeholder='Choose a number' onChange={(e)=> {console.log(e.target.value)}}/>
    </>
  )
}

export default InputField