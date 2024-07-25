import './Calculator.css'
import { memo, useReducer, useRef } from 'react'
import  OperationButton  from './OperationButton/OperationButton'
import { INITIAL_STATE, reducerCalculator } from '../../utils/calculatorReducer'

const Calculator = memo(()=> {
  
  const [stateCalculator, dispatchCalculator] = useReducer(reducerCalculator, INITIAL_STATE)
  
  const { numberA, numberB, operation, result, previousResults, previousResultsSorted } = stateCalculator

  
  const inputValue = useRef()

    return (
      <>
        <div className="calculator-container">
          <input type="number" placeholder="Choose a number" ref={inputValue} />

          <div className="available-operations">
            <OperationButton function={() => {
                dispatchCalculator({ type: "CHOOSE_OPERATION", params: { op: "+", inputValue: inputValue.current.value }, });
                inputValue.current.value = 0; }}
              class="sum" symbol="+" />

            <OperationButton function={() => {
                dispatchCalculator({ type: "CHOOSE_OPERATION", params: { op: "-", inputValue: inputValue.current.value }, });
                inputValue.current.value = 0; }}
              class="substract" symbol="-" />

            <OperationButton function={() => {
                dispatchCalculator({ type: "CHOOSE_OPERATION", params: { op: "*", inputValue: inputValue.current.value }, });
                inputValue.current.value = 0; }}
              class="multiply" symbol="*" />

            <OperationButton function={() => {
                dispatchCalculator({ type: "CHOOSE_OPERATION", params: { op: "/", inputValue: inputValue.current.value }, });
                inputValue.current.value = 0; }}
              class="divide" symbol="/" />

            <OperationButton function={() => {
                dispatchCalculator({ type: "RESULT", params: {  numberB:inputValue.current.value }, });
                dispatchCalculator({ type: "SORT_PREVIOUS_RESULTS"});
                inputValue.current.value = 0; }}
              class="result" symbol="=" />
          </div>

      <div/>
          <div className="previous-results">
            <h2>Last result: {result}</h2>
            <h2>Previous results:</h2>
            <div className='previous-results-list'>
            {previousResults.map((resultInArr, i)=>(
              <h4 key={i}>|{resultInArr}|</h4>
            ))}
            </div>
            <h2>Previous results sorted:</h2>
            <div className='previous-results-list'>
            {previousResultsSorted.map((resultInArr, i)=>(
              <h4 key={i}>|{resultInArr}|</h4>
            ))}
            </div>
          </div>
        </div>
      </>
    );
})

export default Calculator