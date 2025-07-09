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
  { name: "JAN", Order: 315 },
  { name: "FEB", Order: 456 },
  { name: "MAR", Order: 761 },
  { name: "APR", Order: 271 },
  { name: "MAY", Order: 789 },
  { name: "JUNE", Order: 673 },
  { name: "JULY", Order: 372 },
  { name: "AUG", Order: 695 },
  { name: "SEP", Order: 711 },
  { name: "OCT", Order: 868 },
  { name: "NOV", Order: 971 },
  { name: "DEC", Order: 719 },
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
