// imrc
import React, { Component } from 'react';

// cc
class Counter extends Component {
    // Object to include any data component needed
    state = {
        count: 0,
        address: {
            street: ''
        }
    };
    // Compile to a call React.createElement('div')
    render() {
        // {}: add any javascript expression
        return (<React.Fragment><span>{this.formatCount()}</span>
            <button>Increment</button></React.Fragment>);
    }

    /**/
    formatCount() {
        // extract count propoerty from state
        const { count } = this.state;
        // if count = 0, return 'Zero', else
        // JSX expression are just like nomal javascrpt obkects
        return count == 0 ? <h1>Zero</h1> : count;
    }
}

export default Counter;