import React from "react";
import './App.css';

import { Header } from "./components/Header";
import SideBar from "./components/SideBar";
import MainContainer from "./components/MainContainer";

class App extends React.Component {
	render(){
		return (
			<div>
				<Header appName="Sextant"/>
				<div className="d-flex">
					<SideBar title="Sidebar"/>
					<MainContainer/>
				</div>
			</div>
		);
	}
}
export default App;