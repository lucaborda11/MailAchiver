import React from 'react'
import calendar from '../img/icon_calender.svg'
import search from '../img/icon_search.svg'


export default class SearchBar extends React.Component {
    render(){
        return(
            <div className="btnAndInput">
                <div className="inputContainer">
                    <img src={calendar} />
                    <div className="inputHolder">
                        <input type="text" value="2020/1/1" id="dateFrom"></input>
                        -
                        <input type="text" value="2020/1/1" id="dateTo"></input>
                    </div>
                </div>
                <input type="image" className="searchBtn" id="searchButton" src={search}></input> 
            </div>
        )
    }
}