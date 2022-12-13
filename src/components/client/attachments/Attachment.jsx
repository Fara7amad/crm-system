import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Attachment.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useRef } from "react";
import { useState } from "react";
import MagicSelect from "@components/ui/MagicSelect";
import useLocalStorage from "@hooks/useLocalStorage";
import { formatDate } from "@utils/helpers";

import {
	faSpinner,
	faFileAlt,
	faTrash,
} from "@fortawesome/free-solid-svg-icons";

const Attachment = () => {
	//-------------------------------------------------------------------

	const [title, setTitle] = useState("");
	let attchObjects = [{ title: "", date: new Date(), status: "" }];
	const [atts, setAtts] = useState([]);

	const [statuses, setStatuses] = useLocalStorage(
		"attchment-statuses", //key in local storage
		[
			"Rejected",
			"Accepted",
			"Negotiation",
			"Pending",
			"Sent",
			"Not Sent",
			"Approved",
		] //
	);

	const [status, setStatus] = useState(statuses[0]);
	console.log(status);
	const addAtt = () => {
		const id = new Date().getTime().toString();
		if (title.trim()) {
			setAtts((prev) => [...prev, { title, date: new Date(), status, id }]);
		}
	};

	const deleteFile = (id) => {
		// delete attachment
		let newArrayAttachments = atts.filter(function (element) {
			return element.id != id;
		});

		setAtts(newArrayAttachments);
	};

	//------------------------------------------------------------------------
	return (
		<>
			<div>
				<h2>Attachment</h2>
				<div className="file-card">
					<InputGroup className="mb-2">
						<Form.Control
							placeholder="Title"
							aria-label="Recipient's username"
							aria-describedby="basic-addon2"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
						<Button
							variant="outline-secondary"
							id="button-addon2"
							onClick={addAtt}
						>
							Add
						</Button>
					</InputGroup>

					<div className="file-inputs">
						<input type="file" />
						<button className="btn-upload">
							<i>
								<FontAwesomeIcon icon={faPlus} />
							</i>
							Upload
						</button>
					</div>

					<MagicSelect
						options={statuses}
						setList={setStatuses}
						selected={status}
						setSelected={setStatus}
					/>

					<h3 className="main">Add Attachment</h3>

					<h4 className="info"> PDF , JPG , PNG</h4>
				</div>

				<div className="items">
					{atts.map((a) => (
						<li className="list-item" key={a.id}>
							<FontAwesomeIcon icon={faFileAlt} className="icon" size="xs" />
							<p className="p-title">{a.title}</p>
							<p>{formatDate(a.date)}</p>
							<p>{a.status}</p>
							<div className="actions">
								<FontAwesomeIcon
									icon={faTrash}
									name={a}
									onClick={() => deleteFile(a.id)}
									className="icon"
									size="xs"
								/>
							</div>
						</li>
					))}
				</div>
			</div>
		</>
	);
};

export default Attachment;
