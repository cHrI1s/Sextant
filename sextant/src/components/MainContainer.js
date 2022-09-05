import React from "react";

// images sections
import avatar from "../assets/imgs/avatar.jpg";
import IpDisplayer from "./IpDisplayer";
import Pylon from "./Pylon";

class MainContainer extends React.Component{
	render(){
		return (
			<div className="d-block position-relative p-3 w-100">
				<div className="d-flex align-items-center justify-content-between">
					<Pylon/>
					<IpDisplayer/>
				</div>
				
				<div className="row">
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="Card">
							<img src={avatar}
								 className="Card-img-top w-100" alt="Card"/>
							<div className="Card-body">
								<h5 className="Card-title fw-bolder">Card title</h5>
								<p className="Card-text">
									Description
								</p>
								<a href="https://google.com" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="Card">
							<img src={avatar}
								 className="Card-img-top w-100" alt="Card"/>
							<div className="Card-body">
								<h5 className="Card-title fw-bolder">Card title</h5>
								<p className="Card-text">
									Description
								</p>
								<a href="https://google.com" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="Card">
							<img src={avatar}
								 className="Card-img-top w-100" alt="Card"/>
							<div className="Card-body">
								<h5 className="Card-title fw-bolder">Card title</h5>
								<p className="Card-text">
									Description
								</p>
								<a href="https://google.com" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="Card">
							<img src={avatar}
								 className="Card-img-top w-100" alt="Card"/>
							<div className="Card-body">
								<h5 className="Card-title fw-bolder">Card title</h5>
								<p className="Card-text">
									Description
								</p>
								<a href="https://google.com" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MainContainer;