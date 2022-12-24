import React from "react";
import { Bar } from "react-chartjs-2";

const Barchart = () => {
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
};

export default Barchart;