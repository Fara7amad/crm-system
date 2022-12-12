import "./DashboardPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Legend ,  BarChart, Bar , PieChart, Pie, Sector, Cell } from 'recharts';
import React , { useState } from 'react';
import Calendar from 'react-calendar';





const DashboardPage = () => {
  
  const [value, onChange] = useState(new Date());

  let Total_customers = JSON.parse(localStorage.getItem("clients")).length;
  let Total_project  = 183;
  let Ernings = 13840;

  const data = [
    { month: "Jan", project: 10 },
    { month: "Feb", project: 20 },
    { month: "Mar", project: 30 },
    { month: "Ap",  project: 40 },
    { month: "May", project: 50 },
    { month: "Jun", project: 60 },
    { month: "Jul", project: 70 },
    { month: "Aug", project: 80 },
    { month: "Sep", project: 90 },
    { month: "Oc", project: 100 },
    { month: "Nov", project: 110 },
    { month: "Dec", project: 120 },
  ];

  const data2 = [
    {
      profit: 4000,
      expenses: 2400,
    },
    {
     
      profit: 3000,
      expenses: 3000,
    },
    {
      profit: 2600,
      expenses: 4400,
    },
    {
      profit: 2500,
      expenses: 1000,
    },
    {
      profit: 2000,
      expenses: 2000,
    },
    {
      profit: 2000,
      expenses: 2400,
    },
    {
      profit: 3000,
      expenses: 2700,
    },
  ];
  const data3 = [
    { name: 'Customer', value: 70 },
    { name: 'Lead', value: 30 }
  ];
  const COLORS = ['#632cba', '#8884d8'];
  return (
    <>
      <div className="container con1">
        
        <div className="row">
         




          <div className="col-3">
            
            <div className="card card-customers cardth3">
            <i> <FontAwesomeIcon icon={faUser} className="iconn"/> <b>Total customers  {Total_customers} </b> </i> 
            </div>

          </div>
      
         
          <div className="col-3">
        
            <div className="card card-projects cardth3">
            <i> <FontAwesomeIcon icon={faUsers} className="iconn" /> <b>Total projects  {Total_project} </b> </i> 
            </div>

          </div>
         
         
          <div className="col-3">
          
            <div className="card card-Ernings cardth3">
            <i> <FontAwesomeIcon icon={faSackDollar} className="iconn" /> <b>Ernings {Ernings} </b>  </i> 
            </div>

          </div>










          <div className="col-3">
      
            <div className="card card-last-login cardtw2 position-absolute top-1 end-0  ">
            <b>since your Last log in :</b>
            <Calendar onChange={onChange} value={value} /> 
            </div>

          </div>

          <div className="col-3">
            <div className="card card-last-login cardtw2 position-absolute bottom-0 end-0 "> 

            <i className="customer-lead"><FontAwesomeIcon icon={faCircleDot} className="icon-customer" /> Customer </i>
            <i className="lead-customer"><FontAwesomeIcon icon={faCircleDot} className="icon-lead" /> Lead </i>

            <PieChart width={800} height={300}>
            <Pie data={data3} cx={180} cy={150} innerRadius={60} outerRadius={100} fill="#8884d8" paddingAngle={1} dataKey="value" label >
            {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />))}
            </Pie>
            </PieChart>
            </div>

          </div>
        






        </div>

      </div>
    



    <div className="container con2">


      <div className="BarChart" >
        <p></p>
        <ResponsiveContainer width="74%" aspect={3}>
        <BarChart  width={500} height={300} data={data} margin={{top: 15, right: 30, left: 20, bottom: 5, }} barSize={30} >
        <XAxis dataKey="month" scale="point" padding={{ left: 15, right: 10 }} tick={{fill:"#black"}}/>
        <YAxis tick={{fill:"#black"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false} />
        <Legend />
        <CartesianGrid horizontal="true" vertical="" stroke="#243240" opacity={0.0} />
        <Bar dataKey="project" fill="#632cba" background={{ fill: "#8884d8" }} />
        </BarChart> 
        </ResponsiveContainer>
      </div>

      <div className="LineChart">
        <p></p>
        <ResponsiveContainer width="74%" aspect={3}>
        <LineChart width={500} height={300} data={data2} margin={{top: 15, right: 30, left: 20, bottom: 5, }}>
        <CartesianGrid  horizontal="true" vertical="" stroke="#243240" opacity={0.0}/>
        <XAxis dataKey="profit" tick={{fill:"#black"}}/>
        <YAxis tick={{fill:"black"}} />
        <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
        <Legend />
        <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        <Line type="monotone" dataKey="expenses" stroke="#632cba" strokeWidth="5" dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}} />
        </LineChart>
        </ResponsiveContainer>
      </div>
 
    </div>
    </>
  );
};
export default DashboardPage;
