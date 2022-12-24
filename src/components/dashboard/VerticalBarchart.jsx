import React from 'react';
import { Bar } from 'react-chartjs-2';

const VerticalBarchart = ()=>{
    const labels = ['2020', '2021', '2022'];
    const data = {
      labels,
      datasets: [
        {
          label: 'Male',
          backgroundColor: 'black',
          data: [250 , 250 , 200],
        },
        {
          label: 'Female',
          backgroundColor: '#25396f',
          data: [150 , 200 , 300],
        },
      ],
    };
    
    return(
        <div>
            <Bar data={data}/>
        </div>
    );
}

export default VerticalBarchart