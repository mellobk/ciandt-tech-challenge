import React from "react";
import PropTypes from "prop-types";
import "./BarChart.scss";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";


const ChartApp = ({
    dataChart
}) => {


      
      
  return (
    <div className=''>
       <BarChart
      width={600}
      height={300}
      data={dataChart}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="stats" fill="grey" />
    </BarChart>
    </div>
  );
};


ChartApp.propTypes = {
    dataChart: PropTypes.array
  };

  
export default ChartApp;
