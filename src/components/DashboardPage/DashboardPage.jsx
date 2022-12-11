import "./DashboardPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faSackDollar } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer , Legend ,  BarChart, Bar } from 'recharts';
import React from 'react';


const DashboardPage = () => {
  
  

  let Total_customers = 500;
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
  
  
  return (
    <>
      <div className="container con1">
        
        <div className="row">
         
          <div className="col-3">
            
            <div className="card card-customers">
            <i> <FontAwesomeIcon icon={faUser} className="iconn"/> <b>Total customers  {Total_customers} </b> </i> 
            </div>

          </div>
      
         
          <div className="col-3">
        
            <div className="card card-projects">
            <i> <FontAwesomeIcon icon={faUsers} className="iconn" /> <b>Total projects  {Total_project} </b> </i> 
            </div>

          </div>
         
         
          <div className="col-3">
          
            <div className="card card-Ernings">
            <i> <FontAwesomeIcon icon={faSackDollar} className="iconn" /> <b>Ernings {Ernings} </b>  </i> 
            </div>

          </div>

          <div className="col-3">
      
            <div className="card card-last-login position-absolute top-1 end-0  ">
            <b>since your Last log in : </b> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>

          </div>


          <div className="col-3">
      
            <div className="card card-last-login  position-absolute bottom-0 end-0 ">
            <b></b> <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
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
