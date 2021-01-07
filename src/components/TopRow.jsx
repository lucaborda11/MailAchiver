import React from 'react'

export default class TopRow extends React.Component {
    render() {
        const { sortObject, orderForm, orderDate } = this.props

        return(
            <div className="topRow">
                <div id="fromTopRow" onClick={()=>sortObject(orderForm, "byForm") }>From</div>
                <div>To</div>
                <div>Subject</div>
                <div id="dateTopRow" onClick={()=>sortObject(orderDate, "byDate") }>Date</div>
            </div>
        )
    }
}