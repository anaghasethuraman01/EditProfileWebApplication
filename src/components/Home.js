import React, { Component } from "react";
import "../App.css";

class Home extends Component {
	//call the constructor method
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);

		//maintain the state required for this component
		this.state = {};
	}

	profilePage = (e) => {
		var btn = document.querySelector(".chbtn");
		btn.classList.add("bbbb");
		const { history } = this.props;
		history.push("/profile");
	};

	render() {
		console.log("render called");

		return (
			<div>
				<div className="container">
					<div className="login-form">
						<button
							class="chbtn"
							onClick={this.profilePage}
							style={{ width: "80px" }}
						>
							{" "}
							Please click here to view to Coding challenge Application
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
