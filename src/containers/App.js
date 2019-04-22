import React,{ Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

export class App extends Component {

    constructor(props){

        super(props)
        this.state = {
            robots: [], 
            searchfield:''
        }

    }

    componentDidMount(){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users=>this.setState({robots : users}));
    }

    onSearchChangeHandler = event => {
        this.setState({searchfield:event.target.value});
    }
 
    render(){

        const filterRobots = this.state.robots.filter(robot=>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            });

        if(this.state.robots.length === 0){
         return  <h1 style={{color:'white',textAlign:'center'}}>Loading...</h1>;
        }
        else{
        return(
            <div className="tc App">
                <h1 className="">Robots</h1>
                <SearchBox searchChange={this.onSearchChangeHandler}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
        }
    }
    
}

export default App;