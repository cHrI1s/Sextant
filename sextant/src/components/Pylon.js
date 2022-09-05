import React from "react";

class Pylon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			delay: 0,
			socketStarted: false,
		}
	}
	
	componentDidMount() {
		this.connectToSocket();
	}
	
	connectToSocket(){
		if(!this.state.socketStarted) {
			let socket = new WebSocket("ws://localhost:55455");
			socket.onopen = (event)=>{
				console.log(event);
				console.log("Connection opened");
				this.setState({
					socketStarted: true
				});
			}
			socket.onmessage = (event)=>{
				this.setState({pingSendingTime: new Date()});
				const START_TIME = new Date().getTime(),
					END_TIME = event.data;
				let milliseconds = END_TIME - START_TIME;
				milliseconds+=" ms";
				this.setState({
					delay: milliseconds
				})
			};
			
			socket.onerror = (error)=>{
				console.log(error);
				socket.close();
				this.setState({
					socketStarted: false
				});
				setTimeout(()=>{
					console.log("Reconnecting to socket");
					this.connectToSocket();
				}, 5000);
			}
		}
	}
	
	render() {
		return (
			<div className="d-block psoition-relative">
				The latency is <strong>{ this.state.delay }</strong>
			</div>
		);
	}
}
export default Pylon;