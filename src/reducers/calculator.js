import {
  CLEAR_MEMORY,
  OPERATION,
  NEW_STATE_OPERATION,
  DISPLAY_VALUE,
  VALUE,
} from '../actions';

const initState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  value: [0, 0],
  current: 0
}

function calculadora(state = { ...initState }, action) {
  const newState = { ...state };
  switch (action.type) {
    case CLEAR_MEMORY:
      return {
        ...initState
      };
    case OPERATION:
      newState.operation = action.operation;
      newState.current = action.current;
      newState.clearDisplay = action.clearDisplay;
      return {
        ...newState
      };
    case NEW_STATE_OPERATION:
      newState.displayValue = action.displayValue;
      newState.operation = action.operation;
      newState.current = action.current;
      newState.clearDisplay = action.clearDisplay;
      newState.value = action.value;
      return {
        ...newState
      };
    case DISPLAY_VALUE:
      newState.clearDisplay = action.clearDisplay;
      newState.displayValue = action.displayValue;
      return {
        ...newState
      };
    case VALUE:
      newState.value = action.value;
      return {
        ...newState
      };
    default:
      return state;
  }
}

export default calculadora;