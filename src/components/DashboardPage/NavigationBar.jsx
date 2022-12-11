import './NavigationBar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavigationBar() {
    return (
        <div className="nav navbar">
        <div className="notification"></div>
        
        <div className="exsit-notification">
          <button type="button" className="icon-button">
            <i className="material-icons bi-bell "> <FontAwesomeIcon icon="fa-regular fa-bell" /> </i>
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
            <i className="fas fa-search"> <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> </i>
          </a>
        </div>
      </div>
    ) 
}