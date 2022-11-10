import "./Sidebar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink } from "react-router-dom";


// functions
const Sidebar =({children})=>{

const menuItem=[
    {
        path:"/",
        name:"Dashboard",
        icon:<FontAwesomeIcon icon="house"/>,

    },
    {
        path:"/clients",
        name:"Clients",
        icon:<FontAwesomeIcon icon="users"/>

    },
    {
        path:"/reports",
        name:"Analytics",
        icon:<FontAwesomeIcon icon="chart-simple"/>

    },
    {
        path:"/billings",
        name:"Billings",
        icon:<FontAwesomeIcon icon="sack-dollar"/>

    },
    {
        path:"/settings",
        name:"Settings",
        icon:<FontAwesomeIcon icon="gear"/>

    },
]

return(
            <div className="sidebar">
            <div className="top-section">
                <h3 className="logo">Crm system</h3>
                
            </div>
            {
                menuItem.map((item,index)=>(
                    <NavLink to ={item.path} key={index} className="link" activeClassName="active">
                    <div className="icon">{item.icon}</div>
                    <div className="link-text">{item.name}</div>
                    </NavLink>
                ))
            }
            
            <main>{children}</main>
        </div>
)
}

//export
export default Sidebar;

