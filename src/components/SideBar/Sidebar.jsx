import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
	faChartSimple,
	faHouse,
	faSackDollar,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";

// functions
const menuItem = [
	{
		path: "/",
		name: "Dashboard",
		icon: <FontAwesomeIcon icon={faHouse} size="lg" />,
	},
	{
		path: "/clients",
		name: "Clients",
		icon: <FontAwesomeIcon icon={faUsers} size="lg" />,
	},
	{
		path: "/reports",
		name: "Analytics",
		icon: <FontAwesomeIcon icon={faChartSimple} size="lg" />,
	},
	{
		path: "/billings",
		name: "Billings",
		icon: <FontAwesomeIcon icon={faSackDollar} size="lg" />,
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
			<motion.div
				animate={{ width: isOpen ? "" : "60px" }}
				className={`sidebar ${
					isOpen ? "justify-content-between" : "justify-content-center"
				}`}
			>
				<div className="top-section">
					{isOpen && (
						<motion.h4
							variants={ShowAnimation}
							initial="hidden"
							animate="show"
							exit="hidden"
							className="header"
						>
							CRMSYSTEM
						</motion.h4>
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
							{item.icon}

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

				{isOpen && (
					<div className="status">
						<a href="#">
							<FontAwesomeIcon icon="circle-user" className="prf" />
						</a>
						<p className="profile">Logged in as : CRM USER</p>
					</div>
				)}
			</motion.div>
		</div>
	);
};
export default Sidebar;
