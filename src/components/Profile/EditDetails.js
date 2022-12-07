import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
class EditDetails extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		//maintain the state required for this component
		this.state = {
			details: localStorage.getItem("details"),
		};
	}
	detailsChangeHandler = (e) => {
		this.setState({
			details: e.target.value,
		});
	};
	validate = () => {
		let isValid = true;
		if (this.state.details === "" || this.state.details === " ") {
			alert("Details cannot be empty");
			isValid = false;
		}

		return isValid;
	};
	updateDetails = (e) => {
		if (this.validate()) {
			localStorage.setItem("details", this.state.details);

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
						<h3 class="inputs">What type of passenger are you?</h3>
						<div>
							<div class="inputborder">
								Write a little about yourself. Do you like chatting? Are you a
								smoker? Do you bring pets with you? Etc
								<input
									type="text"
									value={this.state.details}
									onChange={this.detailsChangeHandler}
									className="addinput"
								/>
							</div>
						</div>
						<button class="updatebtn" onClick={this.updateDetails}>
							Update
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default EditDetails;
