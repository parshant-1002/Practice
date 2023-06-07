import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, Rectangle } from 'recharts';
import "./styles.css"
export default function Charts() {
  const data = [
    {
      name: 'Jan',
      uv: 4060,
      pv: 2400,
      amt: 2400,
      coloruv: 'yellow', // Color for Page A
      colorpv: 'lightgrey', // Color for Page A
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      coloruv: 'blue', // Color for Page A
      colorpv: 'grey', // Color for Page A
    },
    {
      name: 'Jan',
      uv: 4060,
      pv: 2400,
      amt: 2400,
      coloruv: 'green', // Color for Page A
      colorpv: 'lightgrey', // Color for Page A
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
      coloruv: 'red', // Color for Page A
      colorpv: 'grey', // Color for Page A
    },
    {
      name: 'Jan',
      uv: 4060,
      pv: 2400,
      amt: 2400,
      coloruv: 'purple', // Color for Page A
      colorpv: 'lightgrey', // Color for Page A
    },

    // ... rest of the data ...
  ]; const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{`${label}`}</p>
          <p className="label">{` ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };

  const CustomCursor = props => {
    const { x, y, width, height, stroke } = props;
    return <Rectangle fill="grey" opacity={.8} radius={10} x={x + 18} y={y} width={150} height={height} />;
  };
  const barColors = ['#4c5f7c', '#dc2424', '#fcda00', '#8383ba', '#23dbbd'];
  return (
    <BarChart width={1000} height={500} data={data} background={{ fill: "red" }}>
      <CartesianGrid stroke="#ccc" strokeDasharray="10 10" vertical={false} />
      <Tooltip content={<CustomTooltip />}
        cursor={<CustomCursor />}
      />
      <defs>
        {data.map((color, index) => (
          <linearGradient id={`colorUv${index}`} x1='0' y1='-80%' x2='0' y2='100%'  spreadMethod='reflect'>
            <stop offset='0' stopColor='#ffffff' />
            
            <stop offset='1' stopColor={color.coloruv} />
          </linearGradient>
        ))}
      </defs>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Legend />
      <Bar dataKey="uv" stackId="a" radius={10} barSize={150}>
        {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={`url(#colorUv${index})`} /> // Assign color based on the 'color' property in each data element
          ))
        }
      </Bar>
    
    </BarChart>
  );
}
