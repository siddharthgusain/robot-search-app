import React,{ Component } from 'react';
import CardList from './components/CardList';
import {robots} from './robot';
import SearchBox from './components/SearchBox';
import './App.css';

export class App extends Component {

    constructor(props){

        super(props)
        this.state = {
            robots: robots,
            searchfield:''
        }
    }

    onSearchChangeHandler = event => {
        this.setState({searchfield:event.target.value});
    }
 
    render(){
        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });

        return(
            <div className="tc App">
                <h1 className="">Robots</h1>
                <SearchBox searchChange={this.onSearchChangeHandler}/>
                <CardList robots={filterRobots} />
            </div>
        );
    }
}

export default App;