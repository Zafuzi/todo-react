import React, { Component } from 'react';
import './App.css';
import Grid from './components/Grid.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = { width: '0', height: '0' };
		this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
	}
	componentDidMount() {
		this.updateWindowDimensions();
		window.addEventListener('resize', this.updateWindowDimensions);
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWindowDimensions);
	}
	updateWindowDimensions() {
		this.setState({ width: window.innerWidth, height: window.innerHeight });
	}
	render() {
		const x = 30;
		const y = 30;
		console.log(this.state.height, this.state.width);
		return (
			<div className="App">
				
			</div>
		);
	}
}
export default App;
