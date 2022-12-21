import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import stylesString from "./Comments.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { faCircleUser, faPlus } from "@fortawesome/free-solid-svg-icons";

const Comments = () => {
  const [showComment, setShowComment] = useState(false);
  const open = () => setShowComment(!showComment);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const onClickHandler = () => {
    comment.trim().length > 0
      ? setComments((comments) => [...comments, comment])
      : "";
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
            <div className="main-comment">
              <FontAwesomeIcon icon={faCircleUser} className="prof" />
              <b className="user">CRM USER</b>
              <p>Good Client</p>
              <FontAwesomeIcon icon={faCircleUser} className="prof" />
              <b className="user">CRM USER</b>
              <p>Was great working with him</p>
            </div>

            {comments.map((text) => (
              <div className="main-comment">
                <FontAwesomeIcon icon={faCircleUser} className="prof" />
                <b className="user">CRM USER</b>
                <p>{text}</p>
              </div>
            ))}
          </Card.Body>
        </Card>

        {showComment && (
          <Form.Control
            className="mb-2"
            value={comment}
            onChange={onChangeHandler}
            placeholder="Write a comment..."
            as="textarea"
          />
        )}
        {showComment && (
          <button
            type="submit"
            className="btn btn-primary btn-submit"
            onClick={onClickHandler}
          >
            Submit{""}
          </button>
        )}
      </div>

      <Button
        className="d-flex align-items-center gap-1 mt-2 new-comment"
        onClick={open}
      >
        <FontAwesomeIcon icon={faPlus} />
        <p className="m-0">Add Comment</p>
      </Button>
    </div>
  );
};
export default Comments;
