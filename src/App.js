import { useState } from "react";

import { useEffect } from "react";

import CardList from "./components/card-list/card-list.components";

import SearchBox from "./searchbox/search-box.component";

import './App.css';

const App=()=>{
    const [searchField,setSearchField]=useState('');
    const [monsters,setMonsters]=useState([]);
    const [filterdMonster,setFilteredMonster]=useState(monsters);

    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>response.json())
    .then((users)=>setMonsters(users));
    },[]);

    useEffect(()=>{
        const newFilterdArray=monsters.filter((monster)=>{
            return monster.name.toLocaleLowerCase().includes(searchField);
        })
        setFilteredMonster(newFilterdArray);
    },[monsters,searchField]);


    const onSearchChange=(event)=>{
        const searchFieldString=event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);

    };

    const filterArray=monsters.filter((monster)=>{
        return monster.name.toLocaleLowerCase().includes(searchField);
    });

return(
      <div className="App">
        
        <h1 className='title'> Monster </h1>
        <SearchBox searchh={onSearchChange} />
        <CardList monsters={filterArray}/>

      </div>
    )

}

export default App;