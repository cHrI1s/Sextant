import React from "react";

class Pylon extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			delay: 0,
			socketStarted: false,
		}
	}
	
	connectToSocket(){
		if(!this.state.socketStarted) {
			let socket = new WebSocket("ws://localhost:55455");
			socket.onopen = (event)=>{
				console.log(event);
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
			
			socket.onclose = (event)=>{
				this.setState({
					socketStarted: false
				});
			}
			
			socket.onerror = (error)=>{
				console.log(error);
				socket.close();
				setTimeout(()=>{
					this.connectToSocket();
				}, 10000);
			}
		}
	}
	
	componentDidMount() {
		this.connectToSocket();
	}
	
	render() {
		return (
			<div className="d-block position-relative w-100">
				<div className="d-block position-relative">
					The latency is <strong>{ this.state.delay }</strong>
				</div>
			</div>
		);
	}
}
export default Pylon;