import React from 'react';
import clipImg from '../img/icon_clip.svg'



export default class Row extends React.Component {
    render(){
        const { from, to, toMore, subject, date, id, adj, columnStyle} = this.props
        var moreNumb = ''
        var displaySpan = 'none'
        var displayClip = 'none'
        var weightFrom = '400'
        var weightDate = '400'

        if (columnStyle === "formColumn"){
            weightFrom = '600'
        } else if (columnStyle === "dateColumn"){
            weightDate = '600'
        }

        if (adj === true){
            var displayClip = 'inline'
        }

        if (toMore > 0){
            moreNumb = '+' + toMore
            displaySpan = 'inline'

        }

        return(
            <div key={id} className="rows">
                <div style={{fontWeight: (weightFrom)}} className="formColumn" >{from}</div>
                <div>
                    <div className="showedMail">{to}</div>
                    <span style={{display: (displaySpan)}} className="moreNumber">{moreNumb}</span>
                </div>
                <div>
                    <div className="showedMail">{subject}</div>
                    <img src={clipImg} style={{display: (displayClip)}} className="clipImg"/>
                </div>
                <div style={{fontWeight: (weightDate)}} className="dateColumn" >{date}</div>
            </div>
        )
    }
}