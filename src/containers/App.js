import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';


class App extends Component {

constructor(){
	super();
	this.state = {

		robots: [],
		searchfield: ''
	}

	console.log("constructor");
}


	componentDidMount(){

 		fetch('https://jsonplaceholder.typicode.com/users').then(response => {

 			return response.json();
 		}).then(users => {

 			this.setState({ robots: users});
 		});
        
		console.log("componentDidMount");
	}

	onSearchChange = (event) => {
		
		this.setState({ searchfield: event.target.value });

	}

	render(){

		const filteredRobots = this.state.robots.filter(robot => {

		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());

		});

		console.log("render");
		return (

				<div className='tc test' >

				<h1> RoboAmigos </h1>
				<SearchBox searchChange={this.onSearchChange}/>

				<Scroll>
 				<ErrorBoundry>
				<CardList robots={filteredRobots}/>
				</ErrorBoundry>
				</Scroll>

				</div>
			);
	}
}

export default App;