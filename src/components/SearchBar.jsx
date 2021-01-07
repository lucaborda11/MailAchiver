import React from 'react'
import calendarImg from '../img/icon_calender.svg'
import search from '../img/icon_search.svg'
import DateRangePicker from '../../node_modules/@wojtekmaj/react-daterange-picker';

export default class SearchBar extends React.Component {
    constructor(props){
        var d = new Date();

        super(props)
        this.state = {
            renderCalendar:false,
            nowDateFrom: d.getFullYear() + "/" + (d.getMonth()+1)  + "/" + d.getDate(),
            nowDateTo: d.getFullYear() + "/" + (d.getMonth()+1)  + "/" + d.getDate(),
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
        debugger
        var arrDate = dates.toString().split(",")
        var sd = new Date (arrDate[0])
        var ed = new Date (arrDate[1])

        var startDate = + sd.getFullYear() + "/" + (sd.getMonth()+1)  + "/" + sd.getDate() 
        var endDate = + ed.getFullYear() + "" + (ed.getMonth()+1)  + "/" + ed.getDate() 

        document.getElementById('dateFrom').value = startDate
        document.getElementById('dateTo').value = endDate
    }
    
    render(){
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
                <input type="image" alt="Search" className="searchBtn" id="searchButton" src={search}></input> 
            </div>

        )
    }
}