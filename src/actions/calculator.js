
export const CLEAR_MEMORY = 'CLEAR_MEMORY';
export const SET_OPERATION = 'SET_OPERATION';
export const DISPLAY_VALUE = 'DISPLAY_VALUE';
export const VALUE = 'VALUE';
export const NEW_STATE_OPERATION = 'NEW_STATE_OPERATION';
export const OPERATION = 'OPERATION';

export const clearMemory = () => {
    return {
        type: CLEAR_MEMORY
    };
}

export const newStateOperation = (displayValue, operation, current, clearDisplay, value) => {
    return {
        type: NEW_STATE_OPERATION,
        displayValue,
        operation,
        current,
        clearDisplay,
        value,
    };
}

export const operationState = (operation, current, clearDisplay) => {
    return {
        type: OPERATION,
        operation,
        current,
        clearDisplay,
    };
}


export const setOperation = (op, value, current, operation) => {
    return dispatch => {

        if (current === 0) {
            dispatch(operationState(op, 1, true));
        }
        else {
            const equals = op === '=';
            const currentOperation = operation;
            const values = [...value];
            try {
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`);
            } catch (error) {
                values[0] = value[0];
            }
            values[1] = 0;
            dispatch(newStateOperation(
                values[0],
                equals ? null : op,
                equals ? 0 : 1,
                !equals,
                values
            ));
        }
    }
}


export const displayValueFalse = (displayValue) => {
    return {
        type: DISPLAY_VALUE,
        clearDisplay: false,
        displayValue,
    };
}

export const valueState = (value) => {
    return {
        type: VALUE,
        value
    };
}

export const addDigit = (n, displayValue, clearDisplay, current, value) => {
    return dispatch => {
        if (n === '.' && displayValue.includes('.')) {
            return dispatch({
                type: "DEFAULT",
            });
        }
        const cd = displayValue === '0' || clearDisplay;
        const currentValue = cd ? '' : displayValue;
        const dv = currentValue + n;
        dispatch(displayValueFalse(dv))
        if (n !== '.') {
            const i = current;
            const newValue = parseFloat(dv);
            const values = [...value]
            values[i] = newValue;
            dispatch(valueState(values))
        }
    }
}
