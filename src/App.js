import React,{ Component } from 'react';
import CardList from './components/CardList';
import {robots} from './robot';
import SearchBox from './components/SearchBox';
import './App.css';

export class App extends Component {

    render(){
    return(
        <div className="tc App">
            <h1 className="">Robots</h1>
            <SearchBox />
            <CardList robots={robots} />
        </div>
    );
    }
}

export default App;