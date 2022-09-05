import React from "react";
import "./css/style.css";


export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<div className="d-flex justify-content-between align-items-center header text-white">
				<div className="fw-bolder"> { this.props.appName }</div>
				<div>
					Log out
				</div>
			</div>
		);
	}
}