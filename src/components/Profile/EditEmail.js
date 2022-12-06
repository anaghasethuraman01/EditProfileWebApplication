import React, { Component } from "react";
class EditEmail extends Component {
	render() {
		return (
			<div>
				<div className="container ">
					<div className="login-form">
						<h3 class="inputs">What's your email?</h3>
						<div>
							<div class="inputborder">
								Your email address
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
export default EditEmail;
