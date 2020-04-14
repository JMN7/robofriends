import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSearchField, requestRobots } from '../actions';

import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';

import './App.css';


const mapStateToProps = (state) => {

    console.log("Here", state);

	return {

		searchField : state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {

	return {

		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => requestRobots(dispatch) //dispatch(requestRobots())

	}
}

class App extends Component {

/*constructor(){
	super();
	this.state = {

		robots: []
		//searchfield: ''
	}

	console.log("constructor");
}*/


	componentDidMount(){

 		/*fetch('https://jsonplaceholder.typicode.com/users').then(response => {

 			return response.json();

 		}).then(users => {

 			this.setState({ robots: users});
 		});
        
		console.log("componentDidMount");*/
		this.props.onRequestRobots();
	}

	/*onSearchChange = (event) => {
		
		this.setState({ searchfield: event.target.value });

	}*/

	render(){

		const filteredRobots = this.props.robots.filter(robot => {

		return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase());

		});

		console.log("render");
		return (

				<div className='tc test' >

				<h1> RoboAmigos </h1>
				<SearchBox searchChange={this.props.onSearchChange}/>

				<Scroll>
 				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>

				</div>
			);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);