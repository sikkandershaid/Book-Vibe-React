import React from 'react';


import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLoaderData } from 'react-router';
import { stroedBookList } from '../../utilits/storedBookList';

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink", "green"];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}
  C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};


const PagesToRead = () => {
  const loaderData = useLoaderData();
  const myReadList = stroedBookList(loaderData); 

  return (
    <>
      <div className="w-full">
        <h2 className="text-2xl font-bold text-center mb-4">Pages To Read</h2>
        <div className="h-[500px]">
          <ResponsiveContainer>
            <BarChart
              data={myReadList}
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bookName" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="totalPages" shape={<TriangleBar />} label={{ position: "top" }}>
                {myReadList.map((_entry, index) => (<Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default PagesToRead;