"use client";
import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Vnavbar from "./Vnavbar";
import dynamic from "next/dynamic";
import Image from "next/image";
import Logo from "../SvgImages/Logo";
import { useApiContext } from "../Context/ApiContext";

const Select = dynamic(() => import("react-select"), { ssr: false });

const Menu = () => {

  const {
    meals,
    loading,
    isCountryMode,
    setSelectedOption,
    selectedOption,
    onFetchMeals,
    onFetchByCountry,
  } = useApiContext();

  useEffect(() => {
    onFetchMeals();
  }, []);

  useEffect(() => {
    if (selectedOption) {
      onFetchByCountry();
    }
  }, [selectedOption]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-1">
        <div className="hidden md:block">
          <Vnavbar />
        </div>

        <div className="flex-1 p-6 md:pl-64">
          <div className="flex justify-between items-center mb-6">
            <div className="text-lg font-semibold">
              {isCountryMode ? `Meals By ${selectedOption.value}` : "All Meals"}
            </div>
            <div className="w-60">
              <Select
                value={selectedOption}
                onChange={setSelectedOption}
                isSearchable={false}
                options={[
                  { value: "Indian", label: "Indian" },
                  { value: "Canadian", label: "Canadian" },
                  { value: "Russian", label: "Russian" },
                  { value: "American", label: "American" },
                ]}
                placeholder="Select country..."
              />
            </div>
          </div>

          {loading ? (
            <div>Loading...</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {meals.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
                >
                  {item.strMealThumb || item.strCategoryThumb ? (
                    <Image
                      src={item.strMealThumb || item.strCategoryThumb}
                      alt={item.strMeal || item.strCategory}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover"
                    />
                  ) : (
                    <Logo />
                  )}
                  <div className="p-4">
                    <h3 className="text-xl font-bold mb-2 text-green-800">
                      {item.strMeal || item.strCategory}
                    </h3>
                    {item.strCategoryDescription && (
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {item.strCategoryDescription}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
