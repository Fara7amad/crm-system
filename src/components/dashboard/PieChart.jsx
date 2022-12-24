import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
    labels: [ 'Leads', 'Customers', ],
    datasets: [{
      label: 'Clients',
      data: [30, 70],
<<<<<<< HEAD
      backgroundColor: [
       "#25396f",
        "black",
      ],
=======
      backgroundColor: [ "black",  "#25396f"  ],
>>>>>>> a5eab28cbae1dad0919bfc7cda8c9ed29d8651ca
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