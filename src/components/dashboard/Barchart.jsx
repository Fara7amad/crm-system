import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const Barchart = () => {
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Projects per month",
        backgroundColor: "rgb(182, 99, 255)",
        borderColor: "rgb(182, 99, 255)",
        data: [0, 4, 7, 2, 10, 6, 9,13,10,15,17,22],
      },
    ],
  };
  return (
    <div>
      <Bar data={data} />
    </div>
  );
};

export default Barchart;