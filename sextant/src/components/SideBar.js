import React from "react";
class SideBar extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render(){
		return (
			<div className="sidebar">
				<h1 className="text-white">{this.props.title}</h1>
			</div>
		);
	}
}
export default SideBar;