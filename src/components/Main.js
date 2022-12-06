import React, { Component } from "react";
import { Route } from "react-router-dom";
import EditDetails from "./Profile/EditDetails";
import EditEmail from "./Profile/EditEmail";
import EditName from "./Profile/EditName";
import EditPhone from "./Profile/EditPhone";
import Profile from "./Profile/Profile";
class Main extends Component {
	render() {
		return (
			<div>
				<Route path="/profile" component={Profile} />
				<Route path="/editname" component={EditName} />
				<Route path="/editphone" component={EditPhone} />
				<Route path="/editemail" component={EditEmail} />
				<Route path="/editdetails" component={EditDetails} />
			</div>
		);
	}
}
export default Main;
