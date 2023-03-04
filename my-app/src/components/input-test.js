import React, { Fragment, useState } from "react";

const InputTest = () => {
	const [id, setID] = useState("");

	const onSubmitForm = async (e) => {
		e.preventDefault(); // prevent from refreshing
		try {
			const body = { id };
			await fetch("http://localhost:8080", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(body),
			});
			window.location = "/";
		} catch (error) {
			console.error(error.message);
		}
	};
	return (
		<Fragment>
			<h1>Test Input</h1>
			<form className="mt-5" onSubmit={onSubmitForm}>
				{/* mt-5 : margin top = 5 */}
				<label>Test:</label>
				<input
					type="text"
					className="form-control"
					value={id}
					onChange={(e) => setID(e.target.value)}
				/>
				<button className="btn btn-success">add</button>
			</form>
		</Fragment>
	);
};

export default InputTest;
