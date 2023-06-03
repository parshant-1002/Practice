import React from 'react'
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Label, LabelList } from 'recharts';
export default function Bargraph() {
    const data = [
        { name: 'Loan', students: 400 },
        { name: 'Loan2', students: 700 },
        { name: 'Loan3', students: 200 },
        { name: 'Loan4', students: 900 }
      ];
    
      return (
        <BarChart width={1000} height={500} data={data}>
         <Bar dataKey="students" fill="skyblue">
            <LabelList dataKey="students" position="top" />
          </Bar>
          {/* <CartesianGrid stroke="#ffffff" /> */}
          <XAxis dataKey="name" />
          <YAxis />
          
        </BarChart>
      );
}
