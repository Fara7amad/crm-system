import React, { useState } from "react";
import alertPhoto from "./alertPhoto.png";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import "./DashboardPage.css";
//npm install @mui/icons-material
//npm install @mui/x-date-pickers
//npm install date-fns
//npm install @mui/material @emotion/react @emotion/styled

const DashboardPage = () => {
	const [value, setValue] = useState(new Date());
	let newChart = 21;
	let Report = 15;
	let newMessage = 45;
	let name = "SAM";
	return (
		<div>
			<div className="container">
				<img className="img" src={alertPhoto} />

				<div className="alert main-alert" role="alert">
					<h2 className="alert-heading">Welcome back {name}!</h2>
					<b>since your last login on the system,there were :</b>
					<br />
					<b>{newChart}</b>
					<a href="#" className="alert-link">
						new charts
					</a>
					<br />
					<b>{Report}</b>
					<a href="#" className="alert-link">
						reports
					</a>
					<br />
					<b>{newMessage}</b>
					<a href="#" className="alert-link">
						new messages
					</a>
					<br />
				</div>
			</div>

			<div className="position-absolute bottom-0 end-0">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<StaticDatePicker
						variant="static"
						orientation="portrait"
						value={value}
						disableFuture
						onChange={(newValue) => setValue(newValue)}
						renderInput={(params) => {
							<TextField {...params} />;
						}}
					/>
				</LocalizationProvider>
			</div>
		</div>
	);
};
export default DashboardPage;
