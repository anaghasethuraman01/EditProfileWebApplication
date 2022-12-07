import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
class EditName extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		//maintain the state required for this component
		this.state = {
			firstName: localStorage.getItem("firstName"),
			lastName: localStorage.getItem("lastName"),
		};
	}
	firstNameChangeHandler = (e) => {
		this.setState({
			firstName: e.target.value,
		});
	};
	lastNameChangeHandler = (e) => {
		this.setState({
			lastName: e.target.value,
		});
	};

	validate = () => {
		let isValid = true;
		if (this.state.firstName === "" || this.state.firstName === " ") {
			alert("First Name cannot be empty");
			isValid = false;
		}
		if (this.state.lastName === "" || this.state.lastName === " ") {
			alert("Last Name cannot be empty");
			isValid = false;
		}

		return isValid;
	};
	updateName = (e) => {
		if (this.validate() == true) {
			localStorage.setItem("firstName", this.state.firstName);
			localStorage.setItem("lastName", this.state.lastName);
			const { history } = this.props;
			history.push("/profile");
		}
	};
	navBack = (e) => {
		const { history } = this.props;
		history.push("/profile");
	};
	render() {
		return (
			<div>
				<div className="container ">
					<div className="login-form">
						<button class="backarrow" onClick={this.navBack}>
							<AiOutlineArrowLeft />
						</button>
						<h3 class="inputs">What's your name?</h3>
						<div class="flexdir">
							<div class="inputbordernames">
								First Name
								<input
									onChange={this.firstNameChangeHandler}
									type="text"
									className="addinput"
									value={this.state.firstName}
								/>
								{/* <div className="errorMsg">
									{this.state.validationErr.firstName}
								</div> */}
							</div>

							<div class="inputbordernames">
								Last Name
								<input
									onChange={this.lastNameChangeHandler}
									type="text"
									className="addinput"
									value={this.state.lastName}
								/>
							</div>
						</div>
						<button class="updatebtn" onClick={this.updateName}>
							Update
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default EditName;
