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
import {
  faSpinner,
  faFileAlt,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Attachment = () => {
  const [title, setTitle] = useState("");
  const [attachments, setAttachments] = useState([]);

  const addAttachment = (e) => {
    if (!title) return;
    setAttachments((ls) => [...ls, title]);
    const ref = useRef(null);
    setTitle("");
  };

  const deleteFile = (e) => {
    let newArrayAttachments = attachments.filter(function (element) {
      return element != e;
    });
    setAttachments(newArrayAttachments);
  };

  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  console.log(date);

  const [statuses, setStatuses] = useLocalStorage("client-statuses", []);

  return (
    <>
      <div>
        <h2>Attachment</h2>
        <div className="file-card">
          <MagicSelect options={statuses} setList={setStatuses} />
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

        <div className="items">
          {attachments.map((a) => (
            <li className="list-item" key={a}>
              <FontAwesomeIcon icon={faFileAlt} />
              <p>{a}</p>
              <div className="actions">
                <FontAwesomeIcon
                  icon={faTrash}
                  name={a}
                  onClick={() => deleteFile(a)}
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
