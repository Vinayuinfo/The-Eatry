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
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "1", Order: 315 },
  { name: "2", Order: 456 },
  { name: "3", Order: 761 },
  { name: "4", Order: 271 },
  { name: "5", Order: 789 },
  { name: "6", Order:673 },
  { name: "7", Order:372 },
  { name: "8", Order: 695 },
  { name: "9", Order: 711 },
  { name: "10", Order: 868 },
  { name: "11", Order: 971 },
  { name: "12", Order: 719 }
];

const ChartsRecords = () => {
  return (
    <div className="py-4 pr-4 md:p-8 bg-gray-900 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center text-white"></h2>
      <div className="w-full h-64 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} >
            
            <CartesianGrid stroke="#444" />
            <XAxis dataKey="name" stroke="#ccc" />
            <YAxis stroke="#ccc" />
            <Tooltip
              contentStyle={{ backgroundColor: "#333", border: "none" }}
              labelStyle={{ color: "#fff" }}
              itemStyle={{ color: "#fff" }}
            />
            <Legend verticalAlign="top" align="right" wrapperStyle={{ color: "#fff" }} />
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

