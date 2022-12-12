import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "./Comments.css";
import Card from "react-bootstrap/Card";
// functions
const Comments = () => {
	const [showComment, setShowComment] = useState(false);
	const open = () => setShowComment(!showComment);
	const [comment, setComment] = useState("");
	const [comments, setComments] = useState([]);

	const onClickHandler = () => {
		comment.length > 0 ? setComments((comments) => [...comments, comment]) : "";
		setComment("");
	};
	const onChangeHandler = (e) => {
		setComment(e.target.value);
	};

	return (
		<div className="container">
			<div className="comment-flexbox">
				<h1 className="comment-text">Comments</h1>
				<Card style={{ width: "18rem" }} className="crd">
					<Card.Body>
						<div>
							<FontAwesomeIcon icon="circle-user" className="prof" />{" "}
							<b className="user">CRM USER</b>
							<p>Good Client</p>
							<FontAwesomeIcon icon="circle-user" className="prof" />{" "}
							<b className="user">CRM USER</b>
							<p>Was great working with him</p>
						</div>

						{comments.map((text) => (
							<Card.Text>
								<div>
									<FontAwesomeIcon icon="circle-user" className="prof" />{" "}
									<b className="user">CRM USER</b>
								</div>
								{text}
							</Card.Text>
						))}
					</Card.Body>
				</Card>

				{showComment && (
					<textarea
						style={{ width: showComment ? "" : "0px" }}
						className="input-box mb-2"
						value={comment}
						onChange={onChangeHandler}
						placeholder="Write a comment..."
					/>
				)}

				{showComment && (
					<button className="submit-button" onClick={onClickHandler}>
						Submit{" "}
					</button>
				)}
			</div>
			<div className="new-comment">
				<FontAwesomeIcon icon="plus" className="plus" onClick={open} />
				<p className="plus-comment">Add Comment</p>
			</div>
			<div className="container-fluid">
				<div className="row"></div>
			</div>
		</div>
	);
};
export default Comments;
