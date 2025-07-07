
'use client'
import { createContext, useContext, useState } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCountryMode, setIsCountryMode] = useState(false);

  async function onFetchMeals() {
    setLoading(true);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      if (response.ok) {
        const resData = await response.json();
        setMeals(resData.categories || []);
        setIsCountryMode(false);
      } else {
        console.log("Server error:", response.status);
      }
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  async function onFetchByCountry() {
    if (!selectedOption) return;
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${selectedOption.value}`
      );
      if (response.ok) {
        const resData = await response.json();
        setMeals(resData.meals || []);
        setIsCountryMode(true);
      } else {
        console.log("Server error:", response.status);
      }
    } catch (err) {
      console.log("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <ApiContext.Provider
      value={{
        meals,
        loading,
        selectedOption,
        setSelectedOption,
        isCountryMode,
        onFetchMeals,
        onFetchByCountry,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
}

export function useApiContext() {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
}
