import { useEffect } from "react"

const Timer = (props) => {

  useEffect(()=> {
    console.log("Timer printed")
  },[])

  return (
    <>
      <p>date: {props.date}</p>
      <p>time: {props.time}</p>
    </>
  )
}

export default Timer