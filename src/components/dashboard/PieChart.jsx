// ./components/PieChart.js
import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: [
      'Leads',
      'Customers',
      
    ],
    datasets: [{
      label: 'Clients',
      data: [30, 70],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(182, 99, 255)',
      ],
      hoverOffset: 2
    }]
  };
const Piechart = () => {
  return (
    <div>
      <Doughnut data={data} />
    </div>
  );
};
export default Piechart;