import React from 'react';
import { Line } from 'react-chartjs-2';

const Areachart = ()=>{
    
const labels = ['2020', '2021', '2022'];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Reach',
      backgroundColor: "#25396f",
      data: [0,200,300,400,420,450,500],
    },
  ],
};
    return(
        <div>
            <Line data={data}  />
        </div>
    )
}
export default Areachart