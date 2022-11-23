import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {motion} from "framer-motion";
import { useState } from "react";
import "./Comments.css"
import Card from "react-bootstrap/Card"
// functions 
const Comments =()=>{
    
    const [isComment,setIsComment]=useState(false)
    const open=()=>setIsComment(!isComment);
    const[comment,setComment]=useState("");
    const[comments,setComments]=useState([]);
    
    
    
    
    const onClickHandler=()=>{ 
        
        setComments((comments)=>[...comments,comment]);
       
       
    }
    const onChangeHandler=(e)=>{
        setComment(e.target.value);
        
        
    };
  
    
   return(
    <div className="container">
        
        <div className="comment-flexbox">
         
         <h1 className="comment-text">Comments</h1>
         <Card style={{ width: '18rem' }} className="crd">
      <Card.Body>
        <div>
      <FontAwesomeIcon icon="circle-user" className="prof"/> <b className="user">CRM USER</b>
      <p>Good Client</p>
      <FontAwesomeIcon icon="circle-user"className="prof" /> <b className="user">CRM USER</b>
      <p>Was great working with him</p>
      </div>

        {comments.map((text)=>( <Card.Text>
            <div><FontAwesomeIcon icon="circle-user" className="prof"/> <b className="user">CRM USER</b></div>
        {text}
        </Card.Text> ))}

      </Card.Body>
    </Card>
    
       {
        isComment&& <motion.textarea animate={{width:isComment?"":"0px"}} className="input-box mb-2" value={comment} onChange={onChangeHandler} placeholder="Write a comment..."/>
       }
      
        {
            isComment&&<motion.button className="comment-button" onClick={onClickHandler}>Submit </motion.button>
        }
    
        </div>
        <div className="new-comment">
            <FontAwesomeIcon icon="plus" className="plus" onClick={open}/>
            <p className="plus-comment">Add Comment</p>
        </div>
        <div className="container-fluid">
            <div className="row">
             
            </div>

        </div>

    </div>
    
   )
  }
export default Comments ;
