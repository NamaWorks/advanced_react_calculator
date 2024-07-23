import { useEffect, useState } from 'react'
import './App.css'
import Calculator from './components/Calculator/Calculator'
import Timer from './components/Timer/Timer'
import { useDate } from './customHooks/useDate'
import Operations from './components/Calculator/Operations/Operations'



const App = () => {
  
  const { date, time } = useDate();

  return (
    <div>
      <Timer 
      date={date}
      time={time}
      />
      <Calculator />
    </div>
  );
};

export default App
