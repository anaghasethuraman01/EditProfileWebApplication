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
	navBack = (e) => {
		const { history } = this.props;
		history.push("/profile");
	};
	updateName = (e) => {
		localStorage.setItem("firstName", this.state.firstName);
		localStorage.setItem("lastName", this.state.lastName);
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
							<div class="inputborder">
								First Name
								<input
									onChange={this.firstNameChangeHandler}
									type="text"
									className="addinput"
									value={this.state.firstName}
								/>
							</div>
							<div class="inputborder">
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
