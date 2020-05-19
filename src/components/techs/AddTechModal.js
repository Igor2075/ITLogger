import React, { useState } from "react";
import { connect } from "react-redux";
import { addTech } from "../../actions/techActions";
import M from "materialize-css";

const AddTechModal = ({ addTech }) => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	const onSubmit = () => {
		if (firstName === "" || lastName === "") {
			console.log("hoi");
			M.toast({ html: "Please, complete all name fields" });
		} else {
			addTech({ firstName, lastName });
			M.toast({ html: `Tech ${firstName} ${lastName} added` });
			setFirstName("");
			setLastName("");
		}
	};

	return (
		<div id="add-tech-modal" className="modal">
			<div className="modal-content">
				<h4>Enter New Tech</h4>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="firstName"
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<label htmlFor="firstName" className="active">
						First Name
					</label>
				</div>
				<div className="row">
					<div className="input-field">
						<input
							type="text"
							name="lastName"
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<label htmlFor="lastName" className="active">
						Last Name
					</label>
				</div>
			</div>
			<div className="modal-footer">
				<a
					href="#!"
					onClick={onSubmit}
					className="modal-close waves-effect waves-light blue btn">
					Enter
				</a>
			</div>
		</div>
	);
};

export default connect(null, { addTech })(AddTechModal);
