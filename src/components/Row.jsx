import React from 'react';
import clipImg from '../img/icon_clip.svg';
import arrowImg from '../img/icon_arrow02.svg';
import mailImg from '../img/icon_mail_sp.svg';



export default class Row extends React.Component {
    render(){
        const { from, to, toMore, subject, date, id, adj, columnStyle, showHide} = this.props
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
            displayClip = 'inline'
        }

        if (toMore > 0){
            moreNumb = '+' + toMore
            displaySpan = 'inline'

        }

        const rowId = 'row' + id

        return(
            <div onClick={()=>showHide(id, 'row')} id={rowId}>
                <div className="rowsMobile">
                    <div className="imgAndInfo">
                        <img src={mailImg} className="mailMobileImg" alt="Mail"/>
                        <div className="fromToContent">
                            <div className="dateFromContent">
                                <div className={notHoverFrom + ' mobileFrom'} >{from}</div>
                                <div className="dateImgContent">
                                    <img src={clipImg} style={{display: (displayClip)}} alt="SomeFile" className="clipImg"/>
                                    <div className={notHoverDate + ' mobileDate'} >{date}</div>
                                    <img src={arrowImg} alt="more" className="arrowImg"/>
                                </div>
                            </div>
                            <div className="toSpam">
                                <div className="mobileTo">{to}</div>
                                <span style={{display: (displaySpan)}} className="moreNumber">{moreNumb}</span>
                            </div>                           
                        </div>
                    </div>
                    <div className="mobileSubject">{subject}</div>
                </div>

                <div className="rows">
                    <div className={notHoverFrom} >{from}</div>
                    <div>
                        <div className="showedMail">{to}</div>
                        <span style={{display: (displaySpan)}} className="moreNumber">{moreNumb}</span>
                    </div>
                    <div>
                        <div className="showedMail">{subject}</div>
                        <img src={clipImg} style={{display: (displayClip)}} alt="SomeFile" className="clipImg"/>
                    </div>
                    <div className={notHoverDate} >{date}</div>
                </div>
            </div>
        )
    }
}