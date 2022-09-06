import React from "react";
import axios from "axios";

class IpDisplayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			ipv4: null,
			ipv6: null,
			loading: true
		}
	}
	
	getIpAddress(){
		axios.get("https://api64.ipify.org/?format=json").then(result=>{
			const RESPONSE = result.data;
			this.setState({
				ipv6: RESPONSE.ip
			});
		});
		
		axios.get("https://api.ipify.org/?format=json").then(result=>{
			const RESPONSE = result.data;
			this.setState({
				ipv4: RESPONSE.ip
			});
		});
	}
	
	componentDidMount() {
		this.getIpAddress();
	}
	
	render(){
		return (
			<div className="d-block position-relative text-end mb-4">
				<div className="d-block position-relative">
					Your IpV4 is <strong>{this.state.ipv4}</strong>
				</div>
				<div className="d-block position-relative">
					Your IpV6 is <strong>{this.state.ipv6}</strong>
				</div>
			</div>
		);
	}
}
export default IpDisplayer;