import React, { Component } from "react";
class EditName extends Component {
	render() {
		return (
			<div>
				<div className="container ">
					<div className="login-form">
						<h3 class="inputs">What's your name?</h3>
						<div class="flexdir">
							<div class="inputborder">
								First Name
								<input type="text" className="addinput" />
							</div>
							<div class="inputborder">
								Last Name
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
export default EditName;
