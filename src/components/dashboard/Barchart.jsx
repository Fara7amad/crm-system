import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = () => {
<<<<<<< HEAD
	const labels = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "Projects per month",
				backgroundColor: "#25396f",
				data: [0, 4, 7, 2, 10, 6, 9, 13, 10, 15, 17, 22],
			},
		],
	};
	return (
		<div>
			<Bar data={data} />
		</div>
	);
=======
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Projects per month",
        backgroundColor: "#25396f",
        data: [0, 4, 7, 2, 10, 6, 9,13,10,15,17,22],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
};

export default Barchart;
