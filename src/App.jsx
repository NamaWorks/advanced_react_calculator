import './App.css'
import Calculator from './components/Calculator/Calculator'
import Timer from './components/Timer/Timer'
import { useDate } from './customHooks/useDate'



const App = () => {

  
  const { date, time } = useDate();

  return (
    <div className='app'>
      <Timer 
      date={date}
      time={time}
      />
      <Calculator />
    </div>
  );
};

export default App
