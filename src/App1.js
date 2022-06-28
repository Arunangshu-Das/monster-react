import {useState} from 'react';
import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.components';
import SearchBox from './searchbox/search-box.component';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/

/*
class App extends Component{
  constructor(){
    super();
    this.state={
      name:"Arunangshu"
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name}
          </p>
          <button onClick={()=>{
            this.setState(
              ()=>{return {name:"Arka"};},
              ()=>{console.log(this.state)}
            );
          }}>
            Change name
          </button>

        </header>
      </div>
    );
  }
}
*/



class App extends Component{
  constructor()
  {
    super();

    this.state={
      monsters:[],
      search:'',
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((respons)=>respons.json())
    .then((users)=>
    this.setState(
      ()=>{return {monsters:users};},
      ()=>{console.log("Hello")}
    )
    )
  }

  onSearchChange=(event)=>{
    const h=event.target.value.toLocaleLowerCase();
    this.setState(()=>{
      return {search:h};
    })
  }

  render(){

    const filterArray=this.state.monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(this.state.search);
    });

    return(
      <div className="App">
        
        {/* {
          filterArray.map((monster)=>{
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        } */}
        <h1 className='title'> Monster </h1>
        <SearchBox searchh={this.onSearchChange} />
        <CardList monsters={filterArray}/>

      </div>
    )
  }



}

/*
const App=()=>{
  const [searchField,setSearchField]=setValue(''); //value, setValue


  const onSearchChange=(event)=>{
    const h=event.target.value.toLocaleLowerCase();
    setSearchField(h); 
  }


  <div className="App">
        <h1 className='title'> Monster </h1>
        <SearchBox searchh={onSearchChange} />
        <CardList monsters={filterArray}/>

      </div>
}
*/



// export default App;
