import { executeOperation } from "./functions/executeOperation";
import { sortPreviousResults } from "./functions/sortPreviousResults";

export const INITIAL_STATE = {
  numberA: 0,
  operation: "",
  result:0,
  previousResults: [],
  previousResultsSorted: [],
}

export const reducerCalculator = (state, action) => {
  switch (action.type){
    case "CHOOSE_OPERATION":
      return {...state, numberA:action.params.inputValue, operation:action.params.op};

      case "RESULT":
        return {...state, result:executeOperation(state.numberA, action.params.numberB, state.operation), previousResults:[...state.previousResults, executeOperation(state.numberA, action.params.numberB, state.operation)]}

      case "SORT_PREVIOUS_RESULTS":
        return {...state, previousResultsSorted: sortPreviousResults(state.previousResults)};
    
    default:
      return state
  }
}