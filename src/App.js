import logo from './img/logo.png';
import SearchBar from './components/SearchBar'
import Divider from './components/Divider';
import './App.css';
import React from 'react'
import Counter from './components/Counter';
import MailList from './components/MailList';


class App extends React.Component {
  constructor(props) {
    var d = new Date();

    super(props)
    this.state = {
      data:[{
          "id": 1,
          "from": "aaa@example.com",
          "to": ["zzz.zzz@example.com"],
          "subject": "[HR-888] Notice of official announcement",
          "date": "2020/01/02",
          "adj": false
        },{
          "id": 2,
          "from": "bbb.bbbb@example.com",
          "to": ["yyy@example.com"],
          "subject": '[web:333] "Web Contact"',
          "date": "2020/01/01",
          "adj": false
        },{
          "id": 3,
          "from": "ccc@example.com",
          "to": ["xxx@example.com", "www.www@example.com"],
          "subject": "Happy New Year! Greetings for the New Year.",
          "date": "2019/12/31",
          "adj": true
        },{
          "id": 4,
          "from": "ddd.dddd@example.com",
          "to": ["vvv.vvv@example.com", "uuu@example.com", "qqq.qqq@example.com"],
          "subject": "[HR-887(Revised: Office Expansion Project Team)] Notice of off",
          "date": "2018/12/31",
          "adj": false
        }],
      orderForm: "minus",
      orderDate: "minus",
      columnStyle: "",
      maxDate: d.getFullYear() + "/" + (d.getMonth()+1)  + "/" + d.getDate(),
      minDate: d.getFullYear() + "/" + (d.getMonth()+1)  + "/" + d.getDate(),
      noMails: false,
      countMails: 0,
      firstLoad: true
    }
  }

  styleHeaderText = (action, element) => {
    if (element === "byForm"){
      document.getElementById('dateTopRow').innerHTML = "Date"
      document.getElementById('dateTopRow').style = "color: #7b7a7a"
      document.getElementById('fromTopRow').style = "color: rgb(60 60 60)"
        if (action === "minus"){
          document.getElementById('fromTopRow').innerHTML = "From ▼"
        } else {
          document.getElementById('fromTopRow').innerHTML = "From ▲"
        }
    } else {
      document.getElementById('fromTopRow').innerHTML = "From"
      document.getElementById('fromTopRow').style = "color: #7b7a7a"
      document.getElementById('dateTopRow').style = "color: rgb(60 60 60)"
      if (action === "greater"){
        document.getElementById('dateTopRow').innerHTML = "Date ▲"
      } else {
        document.getElementById('dateTopRow').innerHTML = "Date ▼"
      }
    }
  } 

  sortObject = (action, element) => {
    
    switch(element){
      case "byForm": {
        switch(action){
          case "minus": {
            this.setState ({
              data: this.state.data.sort((a, b) => (a.from < b.from) ? 1 : -1),
              orderForm: "greater",
              columnStyle: "formColumn"
            })
            break
          }
          case "greater": {
            this.setState ({
              data: this.state.data.sort((a, b) => (a.from > b.from) ? 1 : -1),
              orderForm: "minus",
              columnStyle: "formColumn"
            })
            break
          }
          default:{}
        }
        break
      }
      case "byDate": {
        if (action === "minus"){
          this.setState ({ 
            data: this.state.data.sort((a, b) => (a.date > b.date) ? 1 : -1),
            orderDate: "greater",
            columnStyle: "dateColumn"
          })
        } else {
          this.setState ({ 
            data: this.state.data.sort((a, b) => (a.date < b.date) ? 1 : -1),
            orderDate: "minus",
            columnStyle: "dateColumn"
          })
        }
        break  
      }
      default:{}
    }
    this.styleHeaderText(action, element)
  }

  noMailsFound =()=>{
    this.setState({
      noMails: true,
      countMails: 0
    })
  }

  countMailsFound =(countMails)=>{
    if(countMails !== this.state.countMails){
      this.setState({
      countMails: countMails
      })
    }
  }
  
  minMaxDateUpdate =(minDate, maxDate)=>{
    var cont = 0; 
    this.state.data.forEach((arr)=>{
      if(arr.date.replaceAll('/','') <= maxDate.replaceAll('/','') && arr.date.replaceAll('/','') >= minDate.replaceAll('/','')){
        cont += 1
      }
    })

    this.setState({
      countMails: cont,
      maxDate: maxDate,
      minDate: minDate
    })
  }
  
  render(){
    var list = ''
    if(this.state.countMails === 0){
      list = <div className="App-header"><img src={logo} alt="logo" /></div>
    } else {
      list = <MailList 
        data={this.state.data} 
        sortObject={this.sortObject}
        orderDate={this.state.orderDate}
        orderForm={this.state.orderForm}
        maxDate={this.state.maxDate}
        minDate={this.state.minDate}
        columnStyle={this.state.columnStyle}
        noMailsFound={this.noMailsFound}
        countMailsFound={this.countMailsFound}
        countMails={this.state.countMails}
      />
    }
    return (
      <div className="App">
        <header>
          <SearchBar 
            minMaxDateUpdate={this.minMaxDateUpdate}
          />
          <Counter mailCounter={this.state.countMails}></Counter>
          <Divider></Divider>
        </header>
        {list}
      </div>
    );
  }
}

export default App;
