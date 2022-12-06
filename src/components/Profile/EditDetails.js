import React, { Component } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
class EditDetails extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		//maintain the state required for this component
		this.state = {};
	}
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
								<input type="text" className="addinput" />
							</div>
						</div>
						<button class="updatebtn">Update</button>
					</div>
				</div>
			</div>
		);
	}
}
export default EditDetails;
