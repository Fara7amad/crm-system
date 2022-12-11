import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// functions
const menuItem = [
	{
		path: "/",
		name: "Dashboard",
		icon: <FontAwesomeIcon icon="house" />,
	},
	{
		path: "/clients",
		name: "Clients",
		icon: <FontAwesomeIcon icon="users" />,
	},
	{
		path: "/reports",
		name: "Analytics",
		icon: <FontAwesomeIcon icon="chart-simple" />,
	},
	{
		path: "/billings",
		name: "Billings",
		icon: <FontAwesomeIcon icon="sack-dollar" />,
	},
	{
		path: "/settings",
		name: "Settings",
		icon: <FontAwesomeIcon icon="gear" />,
		subNav: [
			{
				path: "/notifications",
				name: "Notifications",
				icon: <FontAwesomeIcon icon="bell" />,
			},
			{
				path: "/privacy",
				name: "Privacy",
				icon: <FontAwesomeIcon icon="lock" />,
			},
		],
	},
];
const Sidebar = ({ children }) => {
	const [isOpen, setIsOpen] = useState(true);
	const toggle = () => setIsOpen(!isOpen);
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
			<motion.div animate={{ width: isOpen ? "" : "55px" }} className="sidebar">
				<div className="top-section">
					{isOpen && (
						<motion.h1
							variants={ShowAnimation}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="header"
						>
							CrmSystem
						</motion.h1>
					)}

					<div className="toggle">
						{isOpen === false ? (
							<FontAwesomeIcon icon="bars" onClick={toggle} />
						) : (
							<FontAwesomeIcon icon="xmark" onClick={toggle} />
						)}
					</div>
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

					{isOpen && (
						<div className="status">
							<a href="#">
								{" "}
								<FontAwesomeIcon icon="circle-user" className="prf" />
							</a>
							<p className="profile">Logged in as : CRM USER</p>
						</div>
					)}
				</section>
			</motion.div>

			<main>{children}</main>
		</div>
	);
};
export default Sidebar;
