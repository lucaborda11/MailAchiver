import logo from './img/logo.png';
import SearchBar from './components/SearchBar'
import Divider from './components/Divider';
import './App.css';
import React from 'react'
import Counter from './components/Counter';
import MailList from './components/MailList';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data:[{
          "id": 1,
          "from": "aaa@example.com",
          "to": ["zzz.zzz@example.com"],
          "subject": "[HR-888] Notice of official announcement",
          "date": "0:20",
          "adj": false
      },{
          "id": 2,
          "from": "bbb.bbbb@example.com",
          "to": ["yyy@example.com"],
          "subject": '[web:333] "Web Contact"',
          "date": "Jan 01",
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
          "date": "2019/12/31",
          "adj": false
      }]
    }
  }  
  render(){
    var list = ''
    if(this.state.data.length == 0){
      list = <div className="App-header"><img src={logo} alt="logo" /></div>
    } else {
      list = <MailList data={this.state.data} />
    }
    return (
      <div className="App">
        <header>
          <SearchBar></SearchBar>
          <Counter mailCounter={this.state.data.length}></Counter>
          <Divider></Divider>
          {list}
        </header>
      </div>
    );
  }
}

export default App;
