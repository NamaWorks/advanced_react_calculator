import { useEffect } from "react"

const Timer = (props) => {

  useEffect(()=> {
    console.log("Timer printed")
  },[])

  return (
    <>
      <h2>date: {props.date}</h2>
      <h2>time: {props.time}</h2>
    </>
  )
}

export default Timer