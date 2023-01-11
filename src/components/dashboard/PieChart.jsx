import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: [ 'Leads', 'Customers', ],
    datasets: [{
      label: 'Clients',
      data: [30, 70],
      backgroundColor: [ "black",  "#25396f"  ],
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