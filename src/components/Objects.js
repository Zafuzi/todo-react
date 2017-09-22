import React,  {Component} from 'react';
import './Box.css';

class Box extends Component {
	constructor(props){
		super(props);
		this.state = {
			active: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		console.log(this.props.index);
		this.setState({
			active: !this.state.active
		})
	}
	render(props){
		let boxStyle = {
			height: this.props.height,
			width: this.props.width,
			background: this.state.active ? '#2196F3' : '#000'
		};
		return(
			<span className="box" onClick={this.handleClick} style={boxStyle}></span>
		);
	}
}

export class Row extends Component {
	render(props){
		let columns = [];
		for(let y = 0; y < this.props.columns; y++){
			columns.push(<Box height={this.props.height} width={this.props.width} index={[this.props.index, y]} key={"box_" + y}/>);
		}
		return(<div className="row">{columns}</div>);
	}
}

export default Row
