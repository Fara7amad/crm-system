import './NavigationBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";


export default function NavigationBar() {
    return (
        <div className="nav navbar">
        <div className="notification"></div>
        
        <div className="exsit-notification">
          <button type="button" className="icon-button">
            <i className="material-icons bi-bell "> <FontAwesomeIcon icon={faBell} /> </i>
            <span className="icon-button__badge"></span>
          </button>

          <button type="button" className="icon-button">
            <i className="bi-exit bi-box-arrow-right"> <FontAwesomeIcon icon="fa-regular fa-arrow-right-from-bracket" /> </i>
          </button>
        </div>

        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name=""
            placeholder="Type to search"
          ></input>
          <a className="search-btn" href="#">
            {" "}
            <i className="fas fa-search"> <FontAwesomeIcon icon={faSearch} /> </i>
          </a>
        </div>
      </div>
    ) 
}