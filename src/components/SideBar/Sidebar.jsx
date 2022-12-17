import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChartSimple,
	faCircleUser,
	faHouse,
	faSackDollar,
	faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Stack from "react-bootstrap/Stack";

// functions
const links = [
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
			opacity: 0,
			transition: {
				duration: 0.1,
			},
		},
		show: {
			opacity: 1,
			transition: {
				duration: 0.2,
			},
		},
	};

	return (
		<div className="main-container">
			<motion.div
				animate={{ width: isOpen ? "" : "55px" }}
				className={`sidebar ${
					isOpen ? "justify-content-between" : "justify-content-center"
				}`}
			>
				{isOpen && (
					<motion.h4
						variants={ShowAnimation}
						initial="hidden"
						animate="show"
						exit="hidden"
						className="header"
					>
						<Link to="/" className="text-white text-decoration-none">
							CRM SYSTEM
						</Link>
					</motion.h4>
				)}

				<section className="routes">
					{links.map((item) => (
						<NavLink
							to={item.path}
							key={item.name}
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
					<Stack
						direction="horizontal"
						gap={2}
						className="align-items-center p-2"
					>
						<Link to="/">
							<FontAwesomeIcon icon={faCircleUser} className="prf" />
						</Link>

						<p className="mb-0">
							Logged in as: <br /> <strong>CRM USER</strong>
						</p>
					</Stack>
				)}
			</motion.div>
		</div>
	);
};
export default Sidebar;
