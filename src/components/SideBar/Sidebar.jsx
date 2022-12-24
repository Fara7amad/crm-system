import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  faChartArea,
  faHouse,
  faSackDollar,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// functions
const menuItem = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FontAwesomeIcon icon={faHouse} />,
  },
  {
    path: "/clients",
    name: "Clients",
    icon: <FontAwesomeIcon icon={faUsers} />,
  },
  {
    path: "/reports",
    name: "Analytics",
    icon: <FontAwesomeIcon icon={faChartArea} />,
  },
  {
    path: "/billings",
    name: "Billings",
    icon: <FontAwesomeIcon icon={faSackDollar} />,
  },
];
const Sidebar = ({ isOpen }) => {
  const ShowAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.1,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="main-container">
      <motion.div animate={{ width: isOpen ? "" : "0px" }} className="sidebar">
        <div className="top-section">
          {isOpen && (
            <motion.h1
              variants={ShowAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="header"
            >
              CRMSYSTEM
            </motion.h1>
          )}
        </div>

        <section className="routes">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    variants={ShowAnimation}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className="link-text"
                  >
                    {item.name}
                  </motion.div>
                )}
              </AnimatePresence>
            </NavLink>
          ))}
        </section>
      </motion.div>
    </div>
  );
};
export default Sidebar;
