import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField } from '../actions/action';

const mapStateToProps = state=>{
    return {
        searchField:state.searchRobots.searchField,
        robots:state.requestRobots.robots,
        isPending:state.requestRobots.isPending,
        error:state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        onSearchChangeHandler:(event)=>dispatch(setSearchField(event.target.value))
    }
}

export class App extends Component {

    constructor(props){

        super(props)
        this.state = {
            robots: []
        }

    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users=>this.setState({robots : users}));
    }
 
    render(){
        const { robots } = this.state;
        const { searchField,onSearchChangeHandler } =this.props;

        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });

        if(this.state.robots.length === 0){
         return  <h1 style={{color:'white',textAlign:'center'}}>Loading...</h1>;
        }
        else{
        return(
            <div className="tc App">
                <h1 className="">Robots</h1>
                <SearchBox searchChange={onSearchChangeHandler}/>
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


export default connect(mapStateToProps, mapDispatchToProps)(App);