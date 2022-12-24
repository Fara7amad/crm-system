import {useDeleteClient} from "@contexts/ClientsContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser,faBuilding,faFlag,faEnvelope,faUserMinus,faIdCard,faUsers} from "@fortawesome/free-solid-svg-icons";


export const confirmationMessage = (index, countOfDelete,arrayOfID) => {

    const deleteClient=useDeleteClient();   
    const data = JSON.parse(localStorage.getItem("clients"));

  return (
    <>
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Delete Client
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3>are you sure to delete client <FontAwesomeIcon icon={faUserMinus}/></h3>
              <hr style={{height:"3px"}}/>
              <FontAwesomeIcon icon={faUser}/> <b>Full Name : </b> {data[index].firstName} {data[index].lastName}
              <hr />
              <FontAwesomeIcon icon={faIdCard}/> <b>ID: </b> {index + 1}
              <hr />
             <FontAwesomeIcon icon={faBuilding}/> <b>Company:</b> {data[index].company}
              <hr />
             <FontAwesomeIcon icon={faEnvelope}/> <b>Email: </b> {data[index].email}
              <hr />
              <FontAwesomeIcon icon={faUsers}/> <b>Type:</b> {data[index].type}
              <hr />
              <FontAwesomeIcon icon={faFlag}/> <b>State:</b> {data[index].state}
              
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => deleteClient(data[index].id)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        class="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Delete many clients
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              are you sure you want to delete {countOfDelete} <FontAwesomeIcon icon={faUserMinus}/>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={()=>{
                    for(let i=0;i<arrayOfID.length;i++){
                    
                        deleteClient(arrayOfID[i]);
                      }
                      
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default confirmationMessage;
