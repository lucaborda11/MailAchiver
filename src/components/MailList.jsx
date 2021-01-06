import React from 'react'
import TopRow from './TopRow'
import Row from './Row'

export default class MailList extends React.Component {
    render() {
        const { data } = this.props
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
                <TopRow />
                {
                    data.map((mail) => {
                        {strTo(mail.to)}
                        return(
                            <Row
                                id={mail.id}
                                adj={mail.adj}
                                from={mail.from}
                                to={showMail}
                                toMore={mail.to.length - 2}
                                subject={mail.subject}
                                date={mail.date}
                            />
                        )
                    })
                }
            </div>
        )
    }
}