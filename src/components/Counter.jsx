import React from 'react';

export default class Counter extends React.Component {
    render() {
        const { mailCounter } = this.props
        return(
            <p className="counterText"> 
                Results: 
                <span className="counterNumber">{ mailCounter }</span>
                mail(s)
            </p>
        )
    }
}