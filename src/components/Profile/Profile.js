import React, { Component } from "react";
import "../../App.css";
import profilepic from "../../avatar.png";
import axios from "axios";
import cookie from "react-cookies";
import { Redirect } from "react-router";
import { MdArrowForwardIos, MdModeEditOutline } from "react-icons/md";
//Define a Login Component
class Profile extends Component {
	//call the constructor method
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);

		//maintain the state required for this component
		this.state = {
			firstName: localStorage.getItem("firstName"),
			lastName: localStorage.getItem("lastName"),
			phone: localStorage.getItem("phone"),
			email: localStorage.getItem("email"),
			details: localStorage.getItem("details"),
		};
	}
	editName = (e) => {
		localStorage.setItem("firstName", this.state.firstName);
		localStorage.setItem("lastName", this.state.lastName);
		const { history } = this.props;
		history.push("/editname");
	};
	editPhone = (e) => {
		const { history } = this.props;
		history.push("/editphone");
	};
	editEmail = (e) => {
		const { history } = this.props;
		history.push("/editemail");
	};
	editDetails = (e) => {
		const { history } = this.props;
		history.push("/editdetails");
	};

	render() {
		//redirect based on successful login
		console.log("render called");

		return (
			<div>
				<div className="container">
					<div className="login-form">
						<h3 class="edit">Edit Profile</h3>

						<div class="wrapper">
							<div class="content">
								<img
									src={profilepic}
									alt="No image added. Add Image."
									class="profilepic"
								/>
								<button class="fas fa-download">
									<MdModeEditOutline />
								</button>
							</div>
						</div>
						<div class="values">Name</div>
						<div class="inputs">
							{this.state.firstName} {this.state.lastName}
							<button class="editbtn" onClick={this.editName}>
								<MdArrowForwardIos />
							</button>
						</div>

						<div class="horizonatalline"></div>
						<br />
						<div class="values">Phone</div>
						<div class="inputs">
							{this.state.phone}
							<button class="editbtn" onClick={this.editPhone}>
								<MdArrowForwardIos />
							</button>
						</div>

						<div class="horizonatalline"></div>

						<br />
						<div class="values">Email</div>
						<div class="inputs">
							{this.state.email}
							<button class="editbtn" onClick={this.editEmail}>
								<MdArrowForwardIos />
							</button>
						</div>

						<div class="horizonatalline"></div>
						<br />
						<div class="values">Tell us about yourself</div>
						<div class="inputs">
							{this.state.details}
							<button class="editbtn" onClick={this.editDetails}>
								<MdArrowForwardIos />
							</button>
						</div>

						<div class="horizonatalline"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
