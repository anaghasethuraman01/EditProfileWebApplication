import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
const EditPhoto = (props) => {
	const [selectedImage, setSelectedImage] = useState(null);
	const getBase64 = (file) => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result);
			reader.onerror = (error) => reject(error);
			reader.readAsDataURL(file);
		});
	};
	function handleChange(e) {
		console.log(e.target.files);
		setSelectedImage(URL.createObjectURL(e.target.files[0]));
		localStorage.setItem("photo", URL.createObjectURL(e.target.files[0]));
	}

	const updatePhoto = (e) => {
		props.history.push("/profile");
	};
	const navBack = (e) => {
		localStorage.removeItem("photo");
		props.history.push("/profile");
	};

	return (
		<div>
			<div className="container ">
				<div className="login-form">
					<button class="backarrow" onClick={navBack}>
						<AiOutlineArrowLeft />
					</button>
					<h3 class="inputs">Upload a photo of yourself</h3>
					<div>
						{selectedImage && (
							<div>
								<img alt="not fount" width={"250px"} src={selectedImage} />
								<br />
								<button onClick={() => setSelectedImage(null)}>Remove</button>
							</div>
						)}
						<br />

						<br />
						<input type="file" name="myImage" onChange={handleChange} />
						<button class="updateimgbtn" onClick={updatePhoto}>
							Update
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default EditPhoto;
