import React, { Component } from 'react';
import './display.css';

class Button extends Component {

    render() {
        const {value} = this.props;
        return (
            <div className="display">{value}</div>
        )
    }

}

export default Button;