import React from 'react';
import clipImg from '../img/icon_clip.svg'



export default class Row extends React.Component {
    render(){
        const { from, to, toMore, subject, date, id, adj, columnStyle} = this.props
        var moreNumb = ''
        var displaySpan = 'none'
        var displayClip = 'none'
        var notHoverFrom = ''
        var notHoverDate = ''

        if (columnStyle === "formColumn"){
            notHoverFrom = 'notHover'
        } else if (columnStyle === "dateColumn"){
            notHoverDate = 'notHover'
        }

        if (adj === true){
            var displayClip = 'inline'
        }

        if (toMore > 0){
            moreNumb = '+' + toMore
            displaySpan = 'inline'

        }

        return(
            <div style={{}} key={id} className="rows">
                <div className={notHoverFrom} >{from}</div>
                <div>
                    <div className="showedMail">{to}</div>
                    <span style={{display: (displaySpan)}} className="moreNumber">{moreNumb}</span>
                </div>
                <div>
                    <div className="showedMail">{subject}</div>
                    <img src={clipImg} style={{display: (displayClip)}} className="clipImg"/>
                </div>
                <div className={notHoverDate} >{date}</div>
            </div>
        )
    }
}