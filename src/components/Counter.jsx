import React from 'react';

var mailCounter = 0

export default class Counter extends React.Component {
    render() {
        return(
            <p className="counterText"> 
                Results: 
                <span className="counterNumber">{ mailCounter }</span>
                mail(s)
            </p>
        )
    }
}