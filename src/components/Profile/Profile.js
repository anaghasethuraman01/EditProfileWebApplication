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
			photo: localStorage.getItem("photo"),
		};
	}

	editName = (e) => {
		localStorage.setItem("firstName", this.state.firstName);
		localStorage.setItem("lastName", this.state.lastName);
		const { history } = this.props;
		history.push("/editname");
	};
	editPhoto = (e) => {
		const { history } = this.props;
		history.push("/editphoto");
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
		console.log("render called");
		var profilePic = null;
		//console.log(localStorage.getItem("photo"));
		if (localStorage.getItem("photo") != null) {
			profilePic = (
				<div>
					<img
						src={this.state.photo}
						alt="No image added. Add Image."
						class="profilepic"
					/>
				</div>
			);
		} else {
			profilePic = (
				<div>
					<img
						src={profilepic}
						alt="No image added. Add Image."
						class="profilepic"
					></img>
				</div>
			);
		}
		return (
			<div>
				<div className="container">
					<div className="login-form">
						<h3 class="edit">Edit Profile</h3>

						<div class="wrapper">
							<div class="content">
								{profilePic}
								<button class="fas fa-download" onClick={this.editPhoto}>
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
