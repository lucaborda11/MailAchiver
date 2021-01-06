import logo from './img/logo.png';
import SearchBar from './components/SearchBar'
import Divider from './components/Divider';
import './App.css';
import Counter from './components/Counter';
import TopRow from './components/TopRow';

function App() {
  return (
    <div className="App">
      <header>
        <SearchBar></SearchBar>
        <Counter></Counter>
        <Divider></Divider>
        <TopRow></TopRow>
        <div className="App-header">
          <img src={logo} alt="logo" />
        </div>
      </header>
    </div>
  );
}

export default App;
