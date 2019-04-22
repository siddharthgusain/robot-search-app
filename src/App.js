import React from 'react';
import CardList from './components/CardList';
import {robots} from './robot';
import SearchBox from './components/SearchBox';

const App = ()=>{
    return(
        <div className="tc">
            <h1>Robots</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
}

export default App;