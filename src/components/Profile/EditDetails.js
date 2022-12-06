import React, { Component } from "react";
class EditDetails extends Component {
	render() {
		return (
			<div>
				<div className="container ">
					<div className="login-form">
						<button class="backarrow">back</button>
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
