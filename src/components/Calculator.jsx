import React, { Component } from 'react';
import Buttom from './button'
import Display from './display'
import './Calculator.css';

class Calculator extends Component {

    constructor(props) {
        super();
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    setOperation(op) {
        const {  value, current, operation} = this.props.calculator;
        this.props.setOperation(op,  value, current, operation);
    }

    addDigit(n) {
        const { displayValue , clearDisplay, current, value} = this.props.calculator;
        this.props.addDigit(n, displayValue , clearDisplay, current, value )
    }

    render() {
        const { displayValue } = this.props.calculator;
        const { clearMemory} = this.props;
        return (
            <div className="calculator">
                <Display value={displayValue} />
                <Buttom label='AC' click={clearMemory} triple />
                <Buttom label='/' click={this.setOperation} operation />
                <Buttom label='7' click={this.addDigit} />
                <Buttom label='8' click={this.addDigit} />
                <Buttom label='9' click={this.addDigit} />
                <Buttom label='*' click={this.setOperation} operation />
                <Buttom label='4' click={this.addDigit} />
                <Buttom label='5' click={this.addDigit} />
                <Buttom label='6' click={this.addDigit} />
                <Buttom label='-' click={this.setOperation} operation />
                <Buttom label='1' click={this.addDigit} />
                <Buttom label='2' click={this.addDigit} />
                <Buttom label='3' click={this.addDigit} />
                <Buttom label='+' click={this.setOperation} operation />
                <Buttom label='0' click={this.addDigit} double />
                <Buttom label='.' click={this.addDigit} />
                <Buttom label='=' click={this.setOperation} operation />
            </div>
        )
    }

}

export default Calculator;