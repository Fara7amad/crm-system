import { useEffect, useState } from "react";

import { useClient } from "@contexts/ClientsContext";
import { Line } from "react-chartjs-2";
import { FormSelect } from "react-bootstrap";

const chartOptions = {
	responsive: true,
	plugins: {
		legend: {
			position: "bottom",
		},
		title: {
			display: false,
			text: "Chart.js Line Chart",
		},
	},
};

function PeriodChart() {
	const [periodType, setPeriodType] = useState("monthly");

	let chart;
	if (periodType === "yearly") {
		chart = <YearlyChart />;
	} else {
		chart = <MonthlyChart />;
	}

	return (
		<div>
			<FormSelect
				className="mb-3"
				value={periodType}
				onChange={(e) => setPeriodType(e.target.value)}
			>
				<option value="monthly">Monthly</option>
				<option value="yearly">Yearly</option>
			</FormSelect>
			{chart}
		</div>
	);
}
export default PeriodChart;

function YearlyChart() {
	const clients = useClient();

	const [labels, setLabels] = useState([]);
	const [dataset, setDataset] = useState([]);

	useEffect(() => {
		const data = labels.map(
			(label) =>
				clients.filter((client) => client.date.getFullYear() === label).length
		);

		setDataset(data);
	}, [labels]);

	useEffect(() => {
		const labelsList = [];
		let earlierDateYear = clients
			.sort((a, b) => a.date - b.date)[0]
			.date.getFullYear();

		const mostRecentYear = clients
			.sort((a, b) => b.date - a.date)[0]
			.date.getFullYear();

		for (; earlierDateYear !== mostRecentYear; earlierDateYear++) {
			labelsList.push(earlierDateYear);
		}

		setLabels([...labelsList]);
	}, [clients]);

	return (
		<Line
			options={chartOptions}
			data={{
				labels,
				datasets: [
					{
						label: "Clients By Year",
						data: dataset,
						borderColor: "rgb(255, 99, 132)",
						backgroundColor: "rgba(255, 99, 132, 0.5)",
					},
				],
			}}
		/>
	);
}

const months = {
	0: "Jan",
	1: "Feb",
	2: "Mar",
	3: "April",
	4: "May",
	5: "June",
	6: "July",
	7: "Aug",
	8: "Sep",
	9: "Oct",
	10: "Nov",
	11: "Dec",
};
function MonthlyChart() {
	const clients = useClient();

	const [dataset, setDataset] = useState([]);

	useEffect(() => {
		console.log(Object.keys(months));
		const data = Object.keys(months).map(
			(month) =>
				clients.filter((client) => client.date.getMonth() == month).length
		);

		setDataset(data);
	}, [clients]);

	return (
		<Line
			options={chartOptions}
			data={{
				labels: Object.values(months),
				datasets: [
					{
						label: "#Clients Registered By Month",
						data: dataset,
						borderColor: "rgb(255, 99, 132)",
						backgroundColor: "rgba(255, 99, 132, 0.5)",
					},
				],
			}}
		/>
	);
}
