"use client";

import { useState } from "react";

export default function FormSubmission() {
	// setup an empty file to begin
	const [file, setFile] = useState();
	const [formSubmitted, formState] = useState(false);

	function handleFileChange(e) {
		// if there is a file here, set state to new file
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	}

	function handleFormSubmit() {
		if (file) {
			formState(true);
		}
	}

	if (!formSubmitted) {
		return (
			<div>
				<input
					type="file"
					id="selectedFile"
					onChange={handleFileChange}
					style={{ display: "none" }}
				/>
				<label for="selectedFile" className="upload-image-button">
					Click me to upload image
				</label>
				<div>{file && `${file.name} - ${file.type}`}</div>

				<button onClick={handleFormSubmit}>Upload</button>
			</div>
		);
	}

	return <h3>Form has been submitted with image {`${file.name}`}</h3>;
}
