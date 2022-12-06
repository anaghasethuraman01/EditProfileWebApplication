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
	updatePhone = () => {
		localStorage.setItem("phone", this.state.phone);
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
