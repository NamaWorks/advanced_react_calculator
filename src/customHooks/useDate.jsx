import { useEffect, useState } from 'react'


export const useDate = () => {

  const currentDate = new Date().toLocaleDateString()
  const newDate = new Date()

  const currentTime = `${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`
  

  const [date, setDate] = useState(currentDate);
  const [time, setTime] = useState(currentTime)

  
  useEffect(() => {
    const intervalTime = setInterval(() => {
      
      const newDate = new Date()

      setDate(newDate.toLocaleDateString());
      setTime(`${newDate.getHours()}:${newDate.getMinutes()}:${newDate.getSeconds()}`)
    }, 1000);

    return () => {
      clearInterval(intervalTime);
    };
  }, []);

  return {
    date,
    time,
  };

}

