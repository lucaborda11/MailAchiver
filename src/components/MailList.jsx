import React from 'react'
import TopRow from './TopRow'
import Row from './Row'
import BodyMails from './BodyMails'

export default class MailList extends React.Component {
    showHide =(id, type)=>{
        if (type === 'row'){
            document.getElementById(type + id).style.display = 'none'
            document.getElementById('body' + id).style.display = 'flex'
        } else {
            document.getElementById(type + id).style.display = 'none'
            document.getElementById('row' + id).style.display = 'flex'
        }
    }

    render() {
        const { data, sortObject, orderForm, orderDate, columnStyle, maxDate, minDate } = this.props
        var showMail = ''

        function strTo(showTo) {
            showMail = ''
            if (showTo.length > 1){
                showTo.forEach(element => {
                    showMail += element + ', '
                });
                showMail = showMail.substring(0, showMail.length - 2)
            } else {
                showMail = showTo[0]
            }
        }

        return(
            <div>
                <TopRow
                 sortObject={sortObject}
                 orderForm={orderForm}
                 orderDate={orderDate} 
                />
                <ul>

                    {
                        data.map((mail) => {
                            if(mail.date.replaceAll('/','') <= maxDate.replaceAll('/','') && mail.date.replaceAll('/','') >= minDate.replaceAll('/','')){
                                strTo(mail.to)
                                return(
                                    <li key={mail.id}>
                                        <Row
                                            id={mail.id}
                                            adj={mail.adj}
                                            from={mail.from}
                                            to={showMail}
                                            toMore={mail.to.length - 2}
                                            subject={mail.subject}
                                            date={mail.date}
                                            columnStyle={columnStyle}
                                            showHide={this.showHide}
                                        />
                                        <BodyMails
                                            id={mail.id}
                                            adj={mail.adj}
                                            from={mail.from}
                                            to={showMail}
                                            toMore={mail.to.length - 2}
                                            subject={mail.subject}
                                            content={mail.content}
                                            date={mail.date}
                                            columnStyle={columnStyle}
                                            showHide={this.showHide}
                                        />
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        )
    }
    
}