import React, { Component } from 'react';
import './button.css';

class Button extends Component {

    render() {
        const { label, operation, double , triple,click} = this.props;

        return (
            <button className={`
                button
                ${operation ? 'operation': '' }
                ${double ? 'double': '' }
                ${triple ? 'triple': '' }
                }
            `}
            onClick = {e =>click && click(label)}
            >
                {label}
            </button>
        )
    }

}

export default Button;