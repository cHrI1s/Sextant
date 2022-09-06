import React from "react";
import "./css/style.css";
import AppConstant from "../utils/AppConstant";


export class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	
	render(){
		return (
			<div className="d-flex justify-content-between align-items-center header text-white">
				<div className="fw-bolder"> { AppConstant.APP_NAME }</div>
				<div>
					Log out
				</div>
			</div>
		);
	}
}