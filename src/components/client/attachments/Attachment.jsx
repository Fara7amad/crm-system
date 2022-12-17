import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Attachment.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";
import MagicSelect from "@components/ui/MagicSelect";
import useLocalStorage from "@hooks/useLocalStorage";
import { formatDate } from "@utils/helpers";

import { faFileAlt, faTrash } from "@fortawesome/free-solid-svg-icons";

const Attachment = () => {
	const [title, setTitle] = useState("");
	const [attachments, setAttachments] = useState([]);

	const [statuses, setStatuses] = useLocalStorage(
		"attachment-statuses", //key in local storage
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

	const addAttachment = () => {
		const id = new Date().getTime().toString();
		if (title.trim()) {
			setAttachments((prev) => [
				...prev,
				{ title, date: new Date(), status, id },
			]);
		}
	};

	const deleteAttachment = (id) => {
		// delete attachment
		let newArrayAttachments = attachments.filter(function (element) {
			return element.id != id;
		});

		setAttachments(newArrayAttachments);
	};

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
							onClick={addAttachment}
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
					{attachments.map((attachment) => (
						<li className="attachment" key={attachment.id}>
							<FontAwesomeIcon icon={faFileAlt} className="icon" size="xs" />

							<p className="attachment-title attachment-p">
								{attachment.title}
							</p>
							<p className="attachment-p">{formatDate(attachment.date)}</p>
							<p className="attachment-p">{attachment.status}</p>

							<div>
								<FontAwesomeIcon
									icon={faTrash}
									onClick={() => deleteAttachment(attachment.id)}
									size="md"
									className="cursor-pointer"
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
