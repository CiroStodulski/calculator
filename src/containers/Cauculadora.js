import { connect } from 'react-redux';
import { addDigit, clearMemory, setOperation } from '../actions';

import Calculator from '../components/Calculator';

function mapStateToProps(state) {
  return {
    calculator: state.calculator,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addDigit: (n, displayValue, clearDisplay, current, value) => {
      dispatch(addDigit(n, displayValue, clearDisplay, current, value));
    },
    setOperation: (op,  value, current, operation) => {
      dispatch(setOperation(op,  value, current, operation));
    },
    clearMemory: () => {
      dispatch(clearMemory());
    },
  };
}

const CalculatorContainer = connect(mapStateToProps, mapDispatchToProps)(Calculator);

export default CalculatorContainer;
