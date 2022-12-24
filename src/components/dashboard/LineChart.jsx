import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["2020", "2021", "2022"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Profits in thousands",
      backgroundColor: "black",
      borderColor: "black",
      data: [4,11,27],
    },
    {
      label: "Expensess in thousands",
      backgroundColor: "#25396f",
      borderColor: "#25396f",
      data: [3.5,3,7],
    }
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;