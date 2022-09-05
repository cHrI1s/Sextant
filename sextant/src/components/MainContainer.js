import React from "react";

// images sections
import avatar from "../assets/imgs/avatar.jpg";

class MainContainer extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className="d-block position-relative p-3 bg-danger w-100">
				<div className="row">
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="card">
							<img src={avatar}
								 className="card-img-top w-100" alt="Card Image"/>
							<div className="card-body">
								<h5 className="card-title fw-bolder">Card title</h5>
								<p className="card-text">
									Description
								</p>
								<a href="#" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="card">
							<img src={avatar}
								 className="card-img-top w-100" alt="Card Image"/>
							<div className="card-body">
								<h5 className="card-title fw-bolder">Card title</h5>
								<p className="card-text">
									Description
								</p>
								<a href="#" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-6 col-md-12 mb-4">
						<div className="card">
							<img src={avatar}
								 className="card-img-top w-100" alt="Card Image"/>
							<div className="card-body">
								<h5 className="card-title fw-bolder">Card title</h5>
								<p className="card-text">
									Description
								</p>
								<a href="#" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
					
					<div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
						<div className="card">
							<img src={avatar}
								 className="card-img-top w-100" alt="Card Image"/>
							<div className="card-body">
								<h5 className="card-title fw-bolder">Card title</h5>
								<p className="card-text">
									Description
								</p>
								<a href="#" className="btn btn-primary">Go to Link</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MainContainer;