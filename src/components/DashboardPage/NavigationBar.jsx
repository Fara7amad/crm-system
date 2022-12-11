import "./NavigationBar.css";

export default function NavigationBar() {
	return (
		<div className="nav navbar">
			<div className="notification"></div>
			<div className="exsit-notification">
				<button type="button" className="icon-button">
					<i className="material-icons bi-bell "></i>
					<span className="icon-button__badge"></span>
				</button>

				<button type="button" className="icon-button">
					<i className="bi-exit bi-box-arrow-right"></i>
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
					<i className="fas fa-search"></i>
				</a>
			</div>
		</div>
	);
}
