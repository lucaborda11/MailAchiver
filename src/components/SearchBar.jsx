import React from 'react'
import calendarImg from '../img/icon_calender.svg'
import search from '../img/icon_search.svg'
import DateRangePicker from '../../node_modules/@wojtekmaj/react-daterange-picker';

export default class SearchBar extends React.Component {
    constructor(props){
        var d = new Date();
        var dDay = ''
        var dMonth = ''
        if (d.getDate() < 10) {
            dDay = '0' + d.getDate()
        } else {
            dDay = d.getDate()
        }

        if ((d.getMonth()+1) < 10) {
            dMonth = '0' + (d.getMonth()+1)
        } else {
            dMonth = (d.getMonth()+1)
        }
        super(props)
        this.state = {
            renderCalendar:false,
            nowDateFrom: d.getFullYear() + "/" + dMonth  + "/" + dDay,
            nowDateTo: d.getFullYear() + "/" + dMonth  + "/" + dDay,
        }
    }
    
    
    calendarStateChange = () => {
        if(this.state.renderCalendar === false){
            this.setState({
                renderCalendar: true
            })
        } else {
            this.setState({
                renderCalendar: false
            })
        }
    }

    onChangeDates = (dates) => {
        var arrDate = dates.toString().split(",")
        var sd = new Date (arrDate[0])
        var ed = new Date (arrDate[1])
        var sdMonth = ''
        var sdDay = ''
        var edMonth = ''
        var edDay = ''

        if (sd.getDate() < 10) {
            sdDay = '0' + sd.getDate()
        } else {
            sdDay = sd.getDate()
        }

        if (ed.getDate() < 10) {
            edDay = '0' + ed.getDate()
        } else {
            edDay = ed.getDate()
        }

        if ((sd.getMonth()+1) < 10) {
            sdMonth = '0' + (sd.getMonth()+1)
        } else {
            sdMonth = (sd.getMonth()+1)
        }

        if ((ed.getMonth()+1) < 10) {
            edMonth = '0' + (ed.getMonth()+1)
        } else {
            edMonth = (ed.getMonth()+1)
        }

        var startDate = + sd.getFullYear() + "/" + sdMonth  + "/" + sdDay
        var endDate = + ed.getFullYear() + "/" + edMonth  + "/" + edDay

        this.setState({
            nowDateFrom: startDate,
            nowDateTo: endDate,
        })

    }
    
    render(){
        const { minMaxDateUpdate } = this.props        

        var calendar 
        if(this.state.renderCalendar === false){
            calendar = <div></div>
        } else {
            calendar = <DateRangePicker isOpen onChange={this.onChangeDates}/>
        }

        return(
            <div className="btnAndInput">
                {calendar}
                <div className="inputContainer">
                    <input className="imgCalendar" type="image" alt="Select a range" src={calendarImg} onClick={this.calendarStateChange} />

                    <div className="inputHolder">
                        <input type="text" value={this.state.nowDateFrom} id="dateFrom" disabled></input>
                        -
                        <input type="text" value={this.state.nowDateTo} id="dateTo" disabled></input>
                    </div>
                </div>
                <input type="image" alt="Search" className="searchBtn" id="searchButton" src={search} onClick={()=>{        minMaxDateUpdate(this.state.nowDateFrom, this.state.nowDateTo)}} ></input> 
            </div>

        )
    }
}