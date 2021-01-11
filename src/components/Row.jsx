import React from 'react';
import clipImg from '../img/icon_clip.svg';
import arrowImg from '../img/icon_arrow02.svg';
import mailImg from '../img/icon_mail_sp.svg';


var dateShow = ''

export default class Row extends React.Component {
    
    dateFormat = (date) => {
        const compare = new Date() - new Date(date)

        if ( compare < 31622400000) {
            var d = new Date(date)
            var month = d.getMonth() + 1
            var monthShow
            var day = d.getDate()
            if (day < 10) {
                day = '0' + day
            }
            switch (month){
                case 1: monthShow = 'Jan '; break
                case 2: monthShow = 'Feb '; break
                case 3: monthShow = 'Mar '; break
                case 4: monthShow = 'Apr '; break
                case 5: monthShow = 'May '; break
                case 6: monthShow = 'Jun '; break
                case 7: monthShow = 'Jul '; break
                case 8: monthShow = 'Aug '; break
                case 9: monthShow = 'Sep '; break
                case 10: monthShow = 'Oct '; break
                case 11: monthShow = 'Nov '; break
                case 12: monthShow = 'Dec '; break
                default:;break
            }
            
            dateShow = monthShow + day
            if ( compare < 86400000) {
                var min = d.getMinutes()
                if (min < 10) {
                    min = '0' + min
                }
                dateShow = d.getHours() + ':' + min
                console.log(dateShow)

            }
            
            console.log(dateShow)
        
        } else {
            dateShow = date
        }
    }

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
                {this.dateFormat(date)}
                <div className="rowsMobile">
                    <div className="imgAndInfo">
                        <img src={mailImg} className="mailMobileImg" alt="Mail"/>
                        <div className="fromToContent">
                            <div className="dateFromContent">
                                <div className={notHoverFrom + ' mobileFrom'} >{from}</div>
                                <div className="dateImgContent">
                                    <img src={clipImg} style={{display: (displayClip)}} alt="SomeFile" className="clipImg"/>
                                    <div className={notHoverDate + ' mobileDate'} >{dateShow}</div>
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
                    <div className={notHoverDate}>{dateShow}</div>
                </div>
            </div>
        )
    }
}