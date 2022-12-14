import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";

const labels = ["2020", "2021", "2022"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Profits in thousands",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [4,11,27],
    },
    {
        label: "Expensess in thousands",
      backgroundColor: "rgb(182, 99, 255)",
      borderColor: "rgb(182, 99, 255)",
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