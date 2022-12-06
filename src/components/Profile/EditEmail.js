import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
class EditEmail extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		//maintain the state required for this component
		this.state = {
			email: localStorage.getItem("email"),
		};
	}
	emailChangeHandler = (e) => {
		this.setState({
			email: e.target.value,
		});
	};

	updateEmail = (e) => {
		localStorage.setItem("email", this.state.email);

		const { history } = this.props;
		history.push("/profile");
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
						<h3 class="inputs">What's your email?</h3>
						<div>
							<div class="inputborder">
								Your email address
								<input
									type="text"
									value={this.state.email}
									onChange={this.emailChangeHandler}
									className="addinput"
								/>
							</div>
						</div>
						<button class="updatebtn" onClick={this.updateEmail}>
							Update
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default EditEmail;
