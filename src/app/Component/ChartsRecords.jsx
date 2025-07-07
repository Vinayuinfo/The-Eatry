"use client";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "1", Order: 315 },
  { name: "2", Order: 456 },
  { name: "3", Order: 761 },
  { name: "4", Order: 271 },
  { name: "5", Order: 789 },
  { name: "6", Order: 673 },
  { name: "7", Order: 372 },
  { name: "8", Order: 695 },
  { name: "9", Order: 711 },
  { name: "10", Order: 868 },
  { name: "11", Order: 971 },
  { name: "12", Order: 719 },
  { name: "13", Order: 642 },
  { name: "14", Order: 589 },
  { name: "15", Order: 803 },
  { name: "16", Order: 450 },
  { name: "17", Order: 910 },
  { name: "18", Order: 505 },
  { name: "19", Order: 782 },
  { name: "20", Order: 678 },
  { name: "21", Order: 843 },
  { name: "22", Order: 399 },
  { name: "23", Order: 752 },
  { name: "24", Order: 612 },
  { name: "25", Order: 937 },
  { name: "26", Order: 481 },
  { name: "27", Order: 555 },
  { name: "28", Order: 698 },
  { name: "29", Order: 840 },
  { name: "30", Order: 911 },
  { name: "31", Order: 599 },

];


const ChartsRecords = () => {
  return (
    <div className="py-4 pr-4 md:p-8 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-white"></h2>
      <div className="w-full h-64 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend
              verticalAlign="top"
              align="right"
              wrapperStyle={{ color: "#fff" }}
            />
            <Line
              type="monotone"
              dataKey="Order"
              stroke="#ff9900"
              strokeWidth={2}
              dot={{ fill: "#ff9900", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartsRecords;
