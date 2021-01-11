import React from 'react';
import clipImg from '../img/icon_clip.svg';
import arrowImg from '../img/icon_arrow02.svg';
import mailImg from '../img/icon_mail_sp.svg';


export default class BodyMails extends React.Component{
    
    render(){
        const { from, to, subject, date, id, adj, showHide, content} = this.props
        var displayClip = 'none'

        if (adj === true){
            displayClip = 'initial'
        }

        const bodyId = 'body' + id

        return(
            <div id={bodyId} className="bodyMail" style={{display: 'none'}}>
                <div className="mailInfo">
                    <img className="mailImg" src={mailImg} alt={'Profile image: ' + from} />
                    <div>
                        <div className="bodyMailFrom" ><span>From: </span>{from}</div>
                        <div className="bodyMailTo"><span>To: </span>{to}</div>
                        <div className="bodyMailDate" ><span>Date: </span>{date}</div>
                    </div>
                </div>
                <div>
                    <div className="bodyMailSubject"><span>Subject: </span>{subject}</div>
                    <div className="bodyMailContent" dangerouslySetInnerHTML={{__html: content}} />
                    <img src={clipImg} style={{display: (displayClip)}} alt="SomeFile" title="File" className="clipImg"/>
                </div>
                <input type="image" style={{transform: 'rotate(270deg)'}} src={arrowImg} className="arrowImg" onClick={()=>showHide(id, 'body')} title="Less content" alt="Less content"/>
            </div>
        )
    }
}