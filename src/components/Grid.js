import React, { Component } from 'react';
import Row from './Objects.js';
import './Grid.css';

class Grid extends Component {
	render(props){
		let rows = [];
		for(var x = 0; x < this.props.rowHeight; x++){
			rows.push(<Row key={"row_" + x}
											index={x}
											columns={this.props.rowWidth}
											height={this.props.ySize}
											width={this.props.xSize}/>);
		}
		return(<div>{rows}</div>);
	}
}
export default Grid
