import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Attachment.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useState } from "react";

const Attachment = () => {
  const [title, setTitle] = useState("");
  const [attachments, setAttachments] = useState([]);

  const addAttachment = (e) => {
    if (title) {
      setAttachments((ls) => [...ls, title]);
      setTitle("");
    }
  };

  return (
    <>
      <div>
        <h2>Attchment</h2>
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

          <p className="main"> Add Attachment </p>
          <p className="info"> PDF , JPG , PNG</p>
        </div>
      </div>

      {attachments.map((a) => (
        <div>
          <li>{a}</li>
        </div>
      ))}
    </>
  );
};

export default Attachment;
