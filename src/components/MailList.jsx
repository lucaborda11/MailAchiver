import React from 'react'

export default class MailList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "from": "aaa@example.com",
                "to": "zzz.zzz@example.com",
                "subject": "[HR-888] Notice of official announcement",
                "date": "0:20"
            },{
                "id": 2,
                "from": "bbb.bbbb@example.com",
                "to": "yyy@example.com",
                "subject": '[web:333] "Web Contact"',
                "date": "0:10"
            },{
                "id": 3,
                "from": "ccc@example.com",
                "to": "xxx@example.com",
                "subject": "Happy New Year! Greetings for the New Year.",
                "date": "0:0"
            }]
        }
    }

    render() {
        return(
            <div>
                <TopRow />
                {
                    this.state.data.map((mail) => {
                        return(
                            <Rows
                                from={mail.from}
                                to={mail.to}
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