import React,{ Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

import { setSearchField ,requestRobots } from '../actions/action';

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
        onSearchChangeHandler:(event)=>dispatch(setSearchField(event.target.value)),
        onRequestRobots:()=> dispatch(requestRobots())
    }
}

export class App extends Component {

    componentDidMount(){
       this.props.onRequestRobots();
    }
 
    render(){
        const { searchField,onSearchChangeHandler,robots,isPending } =this.props;

        const filterRobots = robots.filter(robot=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
            });

        return isPending ?
          <h1 style={{color:'white',textAlign:'center'}}>Loading...</h1>:
            (
            <div className="tc App">
                <h1 className="">Robots</h1>
                <SearchBox searchChange={onSearchChangeHandler}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filterRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
             )
        }
    }


export default connect(mapStateToProps, mapDispatchToProps)(App);