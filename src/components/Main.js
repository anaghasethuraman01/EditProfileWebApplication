import React, { Component } from "react";
import { Route } from "react-router-dom";
import EditDetails from "./Profile/EditDetails";
import EditEmail from "./Profile/EditEmail";
import EditName from "./Profile/EditName";
import EditPhone from "./Profile/EditPhone";
import EditPhoto from "./Profile/EditPhoto";
import Profile from "./Profile/Profile";
import Home from "./Home";
class Main extends Component {
	constructor(props) {
		//Call the constrictor of Super class i.e The Component
		super(props);
		localStorage.setItem("firstName", "Anagha");
		localStorage.setItem("lastName", "Sethuraman");
		localStorage.setItem("phone", 123456789);
		localStorage.setItem("email", "anagha@gmail.com");
		localStorage.setItem(
			"details",
			"I am currently pursuing my Masters in Software Engineering from San Jose State University"
		);
	}
	render() {
		return (
			<div>
				<Route path="/" component={Home}/>
				<Route path="/profile" component={Profile} />
				<Route path="/editname" component={EditName} />
				<Route path="/editphone" component={EditPhone} />
				<Route path="/editemail" component={EditEmail} />
				<Route path="/editdetails" component={EditDetails} />
				<Route path="/editphoto" component={EditPhoto} />
			</div>
		);
	}
}
export default Main;
