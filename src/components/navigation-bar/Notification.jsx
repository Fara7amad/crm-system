import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBell,faCheck,faSackDollar,faHandshake,faFileAlt,faPen,faUserPlus,faUserMinus } from "@fortawesome/free-solid-svg-icons";
import { faComment } from "@fortawesome/free-regular-svg-icons";


import Card from "react-bootstrap/Card";
import "./NotificationCard.css";


const Notification = () => {

  const [displayCard, setdisplayCard] = useState("none");//this is for notifiaction card (hide or view)
  const [displayNumber, setdisplayNumber] = useState("inline");/*this is for the number that above 
  notification button (like +9) (hide or view)
 */
  return (
    <>
      <Card style={{display:displayCard}}>
        <Card.Body className="CardNotification">
          <div>
            <h3>
              Notifications <FontAwesomeIcon icon={faBell} />
              </h3>
              
             <b> <label>mark all as read </label>{" "}</b>
              
               <FontAwesomeIcon  icon={faCheck} className="check" style={{opacity:displayNumber=="none"?.3:1}} onClick={()=>setdisplayNumber("none")}  />
            <hr />
            <p><label>-</label>  new 2 comments. <FontAwesomeIcon icon={faComment} /></p>
            <p><label>-</label> new 3 Projects. <FontAwesomeIcon icon={faHandshake}/></p>
            <p><label>-</label> 2 new clients. <FontAwesomeIcon icon={faUserPlus}/> </p> 
            <p><label>-</label> + 130$ income. <FontAwesomeIcon icon={faSackDollar}/></p>
            <p><label>-</label> 1 new attachment. <FontAwesomeIcon icon={faFileAlt}/></p>
            <p><label>-</label> + $307 income. <FontAwesomeIcon icon={faSackDollar}/></p>
            <p><label>-</label> delete 2 clients. <FontAwesomeIcon icon={faUserMinus}/></p> 
            <p><label>-</label> 5 new comments. <FontAwesomeIcon icon={faComment}/></p> 
            <p><label>-</label> 4 new comments. <FontAwesomeIcon icon={faComment}/></p> 
            <p><label>-</label> 7 new projects. <FontAwesomeIcon icon={faHandshake}/></p> 
            <p><label>-</label> 4 new attachments. <FontAwesomeIcon icon={faFileAlt}/></p> 
            <p><label>-</label> update client info. <FontAwesomeIcon icon={faPen}/></p> 
            <p><label>-</label> + $140 income. <FontAwesomeIcon icon={faSackDollar}/></p> 
            <p><label>-</label> 2 new comments. <FontAwesomeIcon icon={faComment}/></p> 
          </div>
        </Card.Body>
      </Card>

      <button type="button" class="btn btn-primary position-relative"  onClick={()=>{
		if(displayCard=="none")
		setdisplayCard("block");
		else
		setdisplayCard("none");
	
	}}>
        <FontAwesomeIcon icon={faBell} />

        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{display:displayNumber}}>
          9+
        </span>
      </button>
    </>
  );
};

export default Notification;
