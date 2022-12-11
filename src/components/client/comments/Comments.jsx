import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";
import stylesString from "./Comments.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
	const [isComment, setIsComment] = useState(false);
	const open = () => setIsComment(!isComment);
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const onClickHandler = () => {
		setComments((comments) => [...comments, comment]);

		setComment("");
	};
	const onChangeHandler = (e) => {
		setComment(e.target.value);
	};

	return (
		<div className="">
			<div className="comment-flexbox">
				<h1 className="comment-text">Comments</h1>

				<Card className="crd">
					<Card.Body>
						<div>
							<FontAwesomeIcon icon="circle-user" className="prof" />
							<b className="user">CRM USER</b>
							<p>Good Client</p>
							<FontAwesomeIcon icon="circle-user" className="prof" />
							<b className="user">CRM USER</b>
							<p>Was great working with him</p>
						</div>

						{comments.map((text) => (
							<div>
								<FontAwesomeIcon icon="circle-user" className="prof" />
								<b className="user">CRM USER</b>
								<p>{text}</p>
							</div>
						))}
					</Card.Body>
				</Card>

				{isComment && (
					<Card className="mt-2">
						<Card.Body>
							<Form.Control
								className="mb-2"
								value={comment}
								onChange={onChangeHandler}
								placeholder="Write a comment..."
								as="textarea"
							/>

							<motion.button
								className="comment-button"
								onClick={onClickHandler}
							>
								Submit
							</motion.button>
						</Card.Body>
					</Card>
				)}
			</div>

			<Button className="d-flex align-items-center gap-1 mt-2" onClick={open}>
				<FontAwesomeIcon icon={faPlus} />
				<p className="m-0">Add Comment</p>
			</Button>
		</div>
	);
};
export default Comments;
