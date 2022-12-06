import React, { Component } from "react";
class EditPhone extends Component {
	render() {
		return (
			<div>
				<div className="container ">
					<div className="login-form">
						<h3 class="inputs">What's your phone number?</h3>
						<div >
							<div class="inputborder">
								Your phone number
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
export default EditPhone;
