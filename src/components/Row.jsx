import React from 'react';

export default class Row extends React.Component {
    render(){
        const { from, to, toMore, subject, date } = this.props
        var moreNumb = ''
        if (toMore > 0){
            moreNumb = toMore
        }

        return(
            <div className="rows">
                <div>{from}</div>
                <div>{to}<span className="moreNumber">{moreNumb}</span></div>
                <div>{subject}</div>
                <div>{date}</div>
            </div>
        )
    }
}