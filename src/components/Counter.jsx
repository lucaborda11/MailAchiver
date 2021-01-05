import React from 'react';

export default class Counter extends React.Component {
    render() {
        return(
            <p className="counterText"> 
                Results: 
                <span className="counterNumber">0</span>
                mail(s)
            </p>
        )
    }
}