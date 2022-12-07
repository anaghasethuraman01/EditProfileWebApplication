import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
class EditPhone extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		//maintain the state required for this component
		this.state = {
			phone: localStorage.getItem("phone"),
		};
	}
	phoneChangeHandler = (e) => {
		this.setState({
			phone: e.target.value,
		});
	};
	validate = () => {
		let isValid = true;
		if (this.state.phone === "" || this.state.phone === " ") {
			alert("Phone Number cannot be empty");
			isValid = false;
		}
		var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
		if (!this.state.phone.match(phoneno)) {
			alert("Phone number is not valid");
			isValid = false;
		}

		return isValid;
	};
	updatePhone = () => {
		if (this.validate() == true) {
			localStorage.setItem("phone", this.state.phone);
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
						<h3 class="inputs">What's your phone number?</h3>
						<div>
							<div class="inputborder">
								Your phone number
								<input
									type="text"
									value={this.state.phone}
									onChange={this.phoneChangeHandler}
									className="addinput"
								/>
							</div>
						</div>
						<button class="updatebtn" onClick={this.updatePhone}>
							Update
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default EditPhone;
